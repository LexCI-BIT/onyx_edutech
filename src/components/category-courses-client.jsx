"use client"

import { useState } from "react"
import CourseGrid from "@/components/course-grid"
import CurriculumModal from "@/components/curriculum-modal"
import { coursesList } from "../app/constants"

export default function CategoryCoursesClient({ courses, category }) {
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
    <>
      <CourseGrid
        courses={courses}
        categoryPath={category}
        onCurriculumClick={handleCurriculumClick}
      />

      <CurriculumModal
        open={showCurriculumModal}
        onClose={() => setShowCurriculumModal(false)}
        courseName={selectedCourse?.title}
        courses={flatCourses}
      />
    </>
  )
}

