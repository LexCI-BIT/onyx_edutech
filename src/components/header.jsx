"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isCoursesPinned, setIsCoursesPinned] = useState(false)
  const coursesPinnedRef = useRef(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const router = useRouter()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "How You'll Learn", href: "#how-youll-learn" },
     { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "Community", href: "#community" },
    { name: "Collaboration", href: "#collaboration" },
    { name: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()

    const isHashLink = href.startsWith("#")
    const targetId = isHashLink ? href.replace("#", "") : null
    const targetElement = isHashLink ? document.getElementById(targetId) : null

    if (targetElement) {
      // Smooth scroll to the section when it's on the current page (home)
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
      // update the URL hash without changing the pathname
      router.push(`#${targetId}`)
    } else if (isHashLink) {
      // When we're on a different page (e.g., /courses), navigate back to home
      // and include the hash so Next.js scrolls to that section.
      router.push(`/${href}`) // e.g. "/#about"
    } else {
      // Regular navigation for non-hash links
      router.push(href)
    }

    setIsMenuOpen(false)
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Main Navigation - Transparent */}
      <div
        className={`${isScrolled ? " bg-black shadow-lg text-white" : "bg-transparent"} backdrop-blur-sm transition-all duration-300 text-white border-t border-white/50`}
      >
        <div className="w-full mx-auto px-2 sm:px-4 lg:px-6 text-white">
          <div className="flex justify-between lg:justify-center items-center h-20 lg:gap-x-8">
            <div className="flex">
              <Link href="/" className="flex items-center hover:scale-105 transform transition-transform duration-300">
                <div
                  className={`${isScrolled ? "p-2 rounded-lg shadow-md text-white" : ""} transition-all duration-300 text-white`}
                >
                  <img src="/onyx_logo (1).png" alt="Onyx EduTech Logo" className="h-12 w-auto object-contain" />
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex space-x-6 items-center text-white">
                {navLinks.map((link, index) => {
                  // Render Courses with hover dropdown
                  if (link.name === "Courses") {
                    const categories = [
                      { label: "CSE", path: "cse" },
                      { label: "Programming Technologies", path: "programming-technologies" },
                      { label: "ECE & EEE", path: "ece-eee" },
                      { label: "Mechanical & Automobiles", path: "mechanical-automobiles" },
                      { label: "Management", path: "management" },
                    ]

                    return (
                      <div
                        key={index}
                        onMouseEnter={() => !coursesPinnedRef.current && setIsCoursesOpen(true)}
                        onMouseLeave={() => !coursesPinnedRef.current && setIsCoursesOpen(false)}
                        className="relative"
                      >
                        <div className="flex items-center gap-1">
                          <a
                            href={link.href}
                            onClick={(e) => {
                              // When user clicks the Courses label, redirect to the Courses page
                              e.preventDefault()
                              router.push("/courses")
                              // close any transient dropdown state
                              setIsCoursesOpen(false)
                              setIsCoursesPinned(false)
                              coursesPinnedRef.current = false
                            }}
                            className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group cursor-pointer ${
                              isScrolled ? "text-white hover:text-orange-500" : "text-white hover:text-orange-400"
                            }`}
                          >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                          </a>

                          {/* toggle chevron button — click to pin/unpin dropdown */}
                          <button
                            aria-label={isCoursesOpen ? "Hide courses" : "Show courses"}
                            onClick={(e) => {
                              e.preventDefault()
                              const newPinned = !isCoursesPinned
                              setIsCoursesPinned(newPinned)
                              coursesPinnedRef.current = newPinned
                              setIsCoursesOpen(newPinned)
                            }}
                            className="p-1 rounded hover:bg-white/10"
                          >
                            {isCoursesOpen ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
                          </button>
                        </div>

                        {/* Dropdown */}
                        <div
                          className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-blue-900/95 text-white transition-opacity duration-200 z-50 ${
                            isCoursesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                          }`}
                        >
                          <div className="py-3">
                            {categories.map((cat) => (
                              <a
                                key={cat.path}
                                href={`/courses/${cat.path}`}
                                onClick={(e) => {
                                  e.preventDefault()
                                  router.push(`/courses/${cat.path}`)
                                  setIsCoursesOpen(false)
                                  setIsCoursesPinned(false)
                                  coursesPinnedRef.current = false
                                }}
                                className="block px-4 py-2 text-sm hover:bg-white/10"
                              >
                                {cat.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  }

                  return (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group cursor-pointer ${
                        isScrolled ? "text-white hover:text-orange-500" : "text-white hover:text-orange-400"
                      }`}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )
                })}

              <div className="flex items-center space-x-3 ml-4">
                <Button
                  onClick={() => {
                    window.open("https://onyx-copilot.vercel.app/", "_blank")
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                  Onyx Copilot
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 hover:scale-110 transform transition-all duration-300 ${
                  isScrolled ? "text-blue-900 hover:text-orange-500" : "text-white hover:text-orange-400"
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/20 animate-in slide-in-from-top-2 duration-300 bg-black/80 backdrop-blur-sm rounded-b-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      {link.name === "Courses" ? (
                        <div>
                          <div className="px-3 py-2 text-base font-medium text-white">Courses</div>
                          <div className="pl-4">
                            {["cse","programming-technologies","ece-eee","mechanical-automobiles","management"].map((p) => (
                              <a
                                key={p}
                                href={`/courses/${p}`}
                                onClick={(e) => {
                                  e.preventDefault()
                                  router.push(`/courses/${p}`)
                                  setIsMenuOpen(false)
                                }}
                                className="block px-3 py-2 text-sm text-white/90 hover:text-orange-400 hover:bg-white/5 rounded-md"
                              >
                                {p.replace(/-/g, " ")}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block px-3 py-2 text-base font-medium text-white hover:text-orange-400 hover:bg-white/10 rounded-md transition-all duration-200 cursor-pointer"
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  ))}

                <div className="pt-4 space-y-2">
                  <Button
                    onClick={() => {
                      window.open("https://onyx-copilot.vercel.app/", "_blank")
                      toggleMenu()
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transform transition-all duration-300"
                  >
                    Onyx Copilot
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
