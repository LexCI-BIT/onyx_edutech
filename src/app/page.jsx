"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Target,
  Award,
  Monitor,
  Brain,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  CheckCircle,
  Star,
  Play,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Coffee,
  DollarSign,
  BarChart3,
  Bug,
  Cloud,
  Code,
  Database,
  Layers,
  Smartphone,
  Settings,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CourseCard from "@/components/course-card"
import CurriculumModal from "@/components/curriculum-modal"

import {
  slides,
  teamMembers,
  learningModes,
  availableCourses,
  comingSoonCourses,
  allCourses,
  individualPlans,
  institutionPlans,
  testimonials,
  communityImages,
  coursesList,
} from "./constants"

// ==================== HERO SECTION COMPONENT ====================
const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const getAnimationVariants = (direction) => {
    const baseTransition = { type: "spring", stiffness: 100, damping: 20 }

    switch (direction) {
      case "left":
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
          transition: baseTransition,
        }
      case "right":
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 },
          transition: baseTransition,
        }
      case "top":
        return {
          initial: { opacity: 0, y: -100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -100 },
          transition: baseTransition,
        }
      case "bottom":
        return {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 100 },
          transition: baseTransition,
        }
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.6 },
        }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const handleSlideChange = (index) => {
    if (index !== activeIndex) {
      setIsChanging(true)
      setActiveIndex(index)
      setTimeout(() => setIsChanging(false), 1500)
    }
  }

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1
    handleSlideChange(newIndex)
  }

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % slides.length
    handleSlideChange(newIndex)
  }

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-blue-900" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 z-10"></div>

      <div className="relative w-full h-full z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out ${index === activeIndex
                ? "opacity-100 translate-x-0"
                : index < activeIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
          >
            <div className="absolute inset-0 z-5" />
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-40 z-0"
              priority={index === 0}
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
            <div className="absolute inset-0 z-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 z-30">
              <AnimatePresence mode="wait">
                {index === activeIndex && !isChanging && (
                  <>
                    <motion.p
                      key={`welcome-${index}`}
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 sm:mb-6 lg:mb-8 tracking-wide uppercase text-orange-200"
                      {...getAnimationVariants("top")}
                      transition={{ delay: 0.1 }}
                    >
                      {slide.welcomeText}
                    </motion.p>

                    <motion.h1
                      key={`title-${index}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 sm:mb-3 lg:mb-4 text-white"
                      {...getAnimationVariants("left")}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.h2
                      key={`subtitle-${index}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-orange-400 mb-3 sm:mb-4 lg:mb-6"
                      {...getAnimationVariants("right")}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.h2>

                    <motion.p
                      key={`description-${index}`}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-4xl leading-relaxed text-white px-2"
                      {...getAnimationVariants("bottom")}
                      transition={{ delay: 0.5 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      key={`buttons-${index}`}
                      className="mt-4 sm:mt-6 lg:mt-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slide.buttons || (
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md">
                          <Link href="#community">Join Our Community</Link>
                        </Button>
                      )}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-40"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

// ==================== ABOUT SECTION COMPONENT ====================
const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsVideoPlaying(true)
    const handlePause = () => setIsVideoPlaying(false)
    const handleEnded = () => setIsVideoPlaying(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            How About You Get to Know Us First?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Before we start your career journey, meet Onyx EduTech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                poster="/thumb.jpg"
              >
                <source src="/COO_Message.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                  <div className="text-center text-white px-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">COO's Message</h3>
                    <p className="text-sm sm:text-base lg:text-lg">Mission, Vision & Journey</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-xs sm:text-sm font-medium">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                Our Mission
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
                Transforming Dreamers into Professionals
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed">
                At Onyx EduTech, we believe your career should be built on skills, not just marksheets. Join our
                learning community where knowledge meets opportunities.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                We're not here to burn holes in your pocket. Our industry-aligned curriculum is designed to make
                dreamers into entrepreneurs, innovators, and job-ready professionals.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-3 sm:pt-4">
                <div className="flex items-center w-full gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-900">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  DPIIT Recognized
                </div>
                <div className="flex items-center w-full gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-900">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  AICTE Approved
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-900">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  NSDC Certified
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}




const People = () => {
  return (
    <div className="min-h-200px bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4" id="People">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">Team @ Onyx</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                onClick={() => window.open(member.linkedin, "_blank")}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-blue-400 rounded-full transition-all duration-300"></div>
                </div>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-blue-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ==================== HOW YOU'LL LEARN SECTION ====================
const HowYoullLearnSection = () => {


  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            How You'll Learn @ Onyx
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience innovative learning methods designed for the modern student
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {learningModes.map((mode, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-800 via-blue-700 to-orange-500 rounded-full mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{mode.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">{mode.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">{mode.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== COURSES SECTION ====================
const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showCurriculumModal, setShowCurriculumModal] = useState(false)

  const flatCourses = coursesList.flatMap((group) =>
    group.categoryList.map((course) => ({
      name: course.name,
    })),
  )

  const handleCurriculumClick = (course) => {
    setSelectedCourse(course)
    setShowCurriculumModal(true)
  }

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Our Courses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Industry-aligned curriculum designed to make you job-ready
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allCourses.slice(0, 3).map((course, idx) => {
            // Determine the correct category path based on whether course is available or coming soon
            const categoryPath = availableCourses.some(c => c.title === course.title)
              ? "available"
              : "coming-soon"
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <CourseCard
                  course={course}
                  categoryPath={categoryPath}
                  onCurriculumClick={handleCurriculumClick}
                />
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 font-semibold rounded-full text-sm sm:text-base">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>

      <CurriculumModal
        open={showCurriculumModal}
        onClose={() => setShowCurriculumModal(false)}
        courseName={selectedCourse?.title}
        courses={flatCourses}
      />
    </section>
  )
}

// ==================== WHY US SECTION ====================
const WhyUsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Dream Big. Build Bold.
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-orange-300 mb-4 sm:mb-6 lg:mb-8">
            Become Career Ready.
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4">
            We're not here to burn holes in your pocket. Our industry-aligned curriculum is designed to make dreamers
            into entrepreneurs, innovators, and job-ready professionals. Recognized by DPIIT (Start-up India), AICTE,
            and NSDC – credibility meets creativity.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {[
              { icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "DPIIT Recognized" },
              { icon: <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "AICTE Approved" },
              { icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "NSDC Certified" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-orange-300">{item.icon}</div>
                <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-full">
            <Link href="#about">Learn More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== PRICING SECTION ====================
const PricingSection = () => {
  const [selectedTab, setSelectedTab] = useState("individuals")


  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">Pricing</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Choose the perfect plan for your learning journey
          </p>

          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setSelectedTab("individuals")}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${selectedTab === "individuals" ? "bg-blue-900 text-white shadow-lg" : "text-blue-900 hover:bg-blue-50"
                }`}
            >
              Individuals
            </button>
            <button
              onClick={() => setSelectedTab("institutions")}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${selectedTab === "institutions" ? "bg-blue-900 text-white shadow-lg" : "text-blue-900 hover:bg-blue-50"
                }`}
            >
              Academic Institutions
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(selectedTab === "individuals" ? individualPlans : institutionPlans).map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 ${plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                {plan.subtitle && <p className="text-gray-600 text-xs sm:text-sm">{plan.subtitle}</p>}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-2 sm:py-3 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base ${plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                  }`}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== TESTIMONIALS SECTION ====================
const TestimonialsSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-12 md:py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">Student Success Stories</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who transformed their careers with Onyx EduTech
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-blue-900 group-hover:text-blue-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-10 md:-right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-blue-900 group-hover:text-blue-700" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl mx-2 sm:mx-4 md:mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-lg min-h-[350px] flex flex-col justify-between"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base font-medium">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-orange-500">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm md:text-base mb-1">{testimonials[currentIndex].role}</p>
                    {/* <Link href={testimonials[currentIndex].linkedin} className="text-blue-600 text-sm hover:underline">
                      LinkedIn Profile
                    </Link> */}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-blue-900 w-8 md:w-6" : "bg-gray-300 hover:bg-gray-400 w-3 md:w-3"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== COMMUNITY SECTION ====================
const CommunitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = communityImages

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  const goToNext = () => {
    setActiveIndex((activeIndex + 1) % images.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            Onyx Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4">
            Join thousands of learners, share knowledge, and grow together in our vibrant community
          </p>

          <div className="relative w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] lg:h-[400px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-8 sm:mb-10 lg:mb-12">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
              >
                <Image
                  src={src || "/12.jpg"}
                  alt={`Community image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
            ))}

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-full">
            <Link href="https://chat.whatsapp.com/EQalpEfMMeTIxGio8RsNrz?mode=ems_wa_t">Join the Onyx Community – Learn, Share, Grow</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== BLOGS SECTION ====================
const BlogsSection = () => {
  const [showAllBlogs, setShowAllBlogs] = useState(false)

  const blogs = [
    {
      title: "The Rise of Autonomous AI Agents",
      excerpt: "How next-generation AI agents are becoming capable of independent decision-making and workflow automation.",
      image: "/blog_1.jpg",
      date: "Dec 15, 2024",
      category: "Technology"
    },
    {
      title: "Cybersecurity Trends for 2025",
      excerpt: "A look at emerging threats and the advanced security systems designed to defend against them.",
      image: "/blog_2.webp",
      date: "Dec 11, 2024",
      category: "Security"
    },
    {
      title: "Quantum Computing Breakthroughs 2025",
      excerpt: "Researchers achieve new milestones in quantum error correction, bringing practical quantum computing closer.",
      image: "/blog_3.webp",
      date: "Dec 14, 2024",
      category: "Technology"
    },
    {
      title: "AI-Powered Developer Tools",
      excerpt: "From code generation to debugging, AI is transforming the entire software development lifecycle.",
      image: "/blog_4.webp",
      date: "Dec 12, 2024",
      category: "Industry"
    },
    {
      title: "Future of Work: Human + AI Collaboration",
      excerpt: "How workplaces are evolving as AI becomes an essential assistant in everyday operations.",
      image: "/blog_5.webp",
      date: "Dec 10, 2024",
      category: "Career"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Stay updated with the latest trends, tips, and insights from the world of technology and education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(showAllBlogs ? blogs : blogs.slice(0, 3)).map((blog, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">{blog.date}</div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{blog.excerpt}</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all duration-300 text-sm sm:text-base">
                  Read More{" "}
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          {blogs.length > 3 && (
            <Button
              onClick={() => setShowAllBlogs((s) => !s)}
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-lg text-sm sm:text-base"
            >
              {showAllBlogs ? "View Less Blogs" : "View All Blogs"}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

// ==================== CONTACT SECTION ====================
const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h2>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Query"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-lg w-full text-sm sm:text-base">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-white text-sm sm:text-base">+91 8977220902</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-white text-sm sm:text-base">support@onyxedutech.com</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-white text-sm sm:text-base">
                    Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["FAQs", "Support", "Partnerships", "Careers"].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== CONTACT MODAL (appears on every open) ====================
const ContactModal = ({ show, onClose }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (show) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [show])

  if (!show) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submit:", { name, email, message })
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-blue-900 text-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6 z-60">
        <button
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-3 right-3 text-white/80 hover:text-white"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-white/80 mb-4">Leave your details and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <button type="submit" className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600">
                  Send
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle className="mx-auto text-white w-12 h-12" />
            <h4 className="text-lg font-semibold mt-3">Thanks — we'll contact you soon!</h4>
            <div className="mt-4">
              <button onClick={onClose} className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


// ==================== MAIN HOMEPAGE COMPONENT ====================
export default function HomePage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="flex flex-col">
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="People">
        <People />
      </div>
      <div id="how-youll-learn">
        <HowYoullLearnSection />
      </div>
      <div id="courses">
        <CoursesSection />
      </div>
      <div id="why-us">
        <WhyUsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <TestimonialsSection />
      <div id="community">
        <CommunitySection />
      </div>
      <div id="blogs">
        <BlogsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}

