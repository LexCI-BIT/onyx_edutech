"use client"

import CourseCard from "@/components/course-card"

export default function CourseGrid({ courses, categoryPath, onCurriculumClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
                <CourseCard
                    key={course.coursePath || idx}
                    course={{ ...course, title: course.name || course.title }}
                    categoryPath={categoryPath}
                    onCurriculumClick={onCurriculumClick}
                />
            ))}
        </div>
    )
}
