"use client"

import { useState } from "react"
import Image from "next/image"
import EducationLanding from "./education-landing"
import PricingDetails from "./pricing-details"

export default function CourseDetail({ course, category, courseDetails }) {
  const [activeTab, setActiveTab] = useState("overview")

  if (!course) return <div className="p-6">Course not found.</div>

  // Use courseDetails data if available, otherwise fall back to course data
  const displayData = courseDetails || course
  const courseName = courseDetails?.courseName || course.title
  const courseTagline = courseDetails?.courseTagline
  const courseBatch = courseDetails?.courseBatch
  const description = courseDetails?.description || (course.description ? [course.description] : [])
  const courseInstructor = courseDetails?.courseInstructor || course.instructor
  const courseInstructorDetails = courseDetails?.courseInstructorDetails || course.instructorBio
  const courseData = courseDetails?.courseData || course.curriculum || []

  return (
  <div className="max-w-9xl mx-auto py-8 px-4">
    {/* MAIN LAYOUT */}
    <div className="lg:flex lg:gap-8">
      
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="lg:flex lg:items-start lg:gap-6">
            <div className="flex-1">
              {courseDetails?.courseBanner && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={courseDetails.courseBanner}
                    alt={courseName}
                    width={1200}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <h1 className="text-3xl font-bold text-blue-900">{courseName}</h1>
              {courseTagline && (
                <p className="text-lg text-gray-600 mt-2">{courseTagline}</p>
              )}
              {courseBatch && (
                <p className="text-sm text-gray-500 mt-1">{courseBatch}</p>
              )}

              <div className="mt-4">
                {Array.isArray(description)
                  ? description.map((desc, idx) => (
                      <p key={idx} className="text-gray-700 mb-2">
                        {desc}
                      </p>
                    ))
                  : <p className="text-gray-700">{description}</p>}
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="mt-6">
            <div className="flex gap-2 border-b">
              {[
                ["overview", "Overview"],
                ["curriculum", "Curriculum"],
                ["instructor", "Instructor"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-3 py-2 -mb-px ${
                    activeTab === key
                      ? "border-b-2 border-orange-500 text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {activeTab === "overview" && (
                <div>
                  <h3 className="font-semibold text-lg text-blue-900">
                    About this course
                  </h3>
                  {Array.isArray(description)
                    ? description.map((desc, idx) => (
                        <p key={idx} className="text-gray-700 mt-2">
                          {desc}
                        </p>
                      ))
                    : <p className="text-gray-700 mt-2">{description}</p>}
                </div>
              )}

              {activeTab === "curriculum" && (
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-4">
                    Curriculum
                  </h3>
                  {courseData?.length ? (
                    <div className="space-y-4">
                      {courseData.map((section, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-purple-600 pl-4"
                        >
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {section.title}
                          </h4>
                          <ul className="list-disc ml-6 text-gray-700 space-y-1">
                            {section.items?.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                {typeof item === "string"
                                  ? item
                                  : item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      Curriculum will be available soon.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "instructor" && (
                <div>
                  <h3 className="font-semibold text-lg text-blue-900">
                    Instructor
                  </h3>
                  <p className="mt-2 text-gray-700 font-medium">
                    {courseInstructor || "TBA"}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {courseInstructorDetails ||
                      "Details will be added soon."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Certificate / Projects */}
        <div className="mt-10">
          <EducationLanding />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="lg:w-80 w-full mt-8 lg:mt-0">
        <div className="lg:sticky lg:top-24">
          <PricingDetails
            courseDetails={courseDetails || { courseName }}
          />
        </div>
      </aside>
    </div>
  </div>
)
}
