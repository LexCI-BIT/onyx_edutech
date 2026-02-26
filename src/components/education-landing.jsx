"use client"

import Image from "next/image"
import { Trophy, Users } from "lucide-react"
import Certificate from "../assets/onyx-certificate.jpg"

export default function EducationLanding() {
  return (
    <div className="min-h-screen bg-slate-900 text-white rounded-xl mx-4 md:mx-8 my-8">
      <div className="container mx-auto px-8 py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Certificate Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold lg:text-5xl">Get a Certificate</h2>
            <p className="text-lg text-slate-300">
              Enhance your skills and boost your career prospects with our upskilling program, offering a certificate
              upon successful completion.
            </p>

            {/* Certificate Preview */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white shadow-xl md:p-6 xs:p-4">
              <Image
                src={Certificate}
                alt="Certificate Sample"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-600/20 p-3">
                  <Trophy className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-sm text-slate-400">Get Award</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-600/20 p-3">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-slate-400">Zero to career</div>
                </div>
              </div>
            </div>
          </div>

          {/* Build Projects Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold lg:text-5xl">Build Projects</h2>
            <p className="text-lg text-slate-300">
              Apply your skills and knowledge gained during the upskilling program to build a real-world project,
              showcasing your abilities and demonstrating your readiness for professional development.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-600/20 p-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-purple-400" fill="currentColor">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </div>
                <span className="text-slate-300">Industry relevant projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-600/20 p-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-purple-400" fill="currentColor">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </div>
                <span className="text-slate-300">Apply Your Skills in Real-World Scenarios</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-600/20 p-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-purple-400" fill="currentColor">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </div>
                <span className="text-slate-300">Leverage Trending Technologies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-600/20 p-1">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-purple-400" fill="currentColor">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </div>
                <span className="text-slate-300">Why Project-Based Learning Matters?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


