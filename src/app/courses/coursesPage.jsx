"use client"

import { useState } from "react"
import Link from "next/link"
import { availableCourses, comingSoonCourses, coursesList } from "../constants"
import CourseGrid from "@/components/course-grid"
import CurriculumModal from "@/components/curriculum-modal"
import EducationLanding from "@/components/education-landing"

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showCurriculumModal, setShowCurriculumModal] = useState(false)

  const flatCourses = coursesList.flatMap((group) =>
    group.categoryList.map((course) => ({
      name: course.name,
    })),
  )

  // show all by default
  const categories = [
    { key: "available", label: "Available Courses", list: availableCourses },
    { key: "coming-soon", label: "Coming Soon", list: comingSoonCourses },
  ]

  const handleCurriculumClick = (course) => {
    setSelectedCourse(course)
    setShowCurriculumModal(true)
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-15 sm:pt-20 md:pt-20 text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Courses</h2>
          <p className="text-gray-600 mt-2">Explore our available and upcoming programs</p>
        </div>

        {/* Render all 31+ courses grouped by category */}
        <div className="space-y-10">
          {coursesList.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{group.category}</h3>
              <CourseGrid
                courses={group.categoryList}
                categoryPath={group.categoryPath}
                onCurriculumClick={handleCurriculumClick}
              />
            </div>
          ))}
        </div>
      </div>

      <EducationLanding />

      <CurriculumModal
        open={showCurriculumModal}
        onClose={() => setShowCurriculumModal(false)}
        courseName={selectedCourse?.title}
        courses={flatCourses}
      />
    </div>
  )
}
