"use client"

import Link from "next/link"
import Image from "next/image"

// Simple slug helper to produce URL-safe ids from titles
const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export default function CourseCard({ course, categoryPath = "available", onCurriculumClick }) {
  // Use coursePath if available (for coursesList courses), otherwise slugify the title
  const id = course.coursePath || slugify(course.title)

  return (
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-2xl transition-all duration-200">
      <div className="h-40 w-full rounded-md overflow-hidden bg-gray-100 flex items-center justify-center mb-4 relative">
        {/* If an image is provided, render it (using Next Image). Otherwise fall back to icon or placeholder */}
        {course.image ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        ) : course.icon ? (
          <div className="text-center text-gray-700">{course.icon}</div>
        ) : (
          <div className="text-sm text-gray-500">No image</div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-blue-900 mb-2">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{course.description}</p>

      <div className="flex items-center justify-between gap-2">
        <Link href={`/courses/${categoryPath}/${id}`} className="text-sm text-orange-600 hover:underline">
          Learn more
        </Link>

        <button
          onClick={() => {
            if (typeof onCurriculumClick === "function") {
              onCurriculumClick(course)
            } else {
              window?.alert(`${course.title} — curriculum details form coming soon`)
            }
          }}
          className="px-3 py-2 bg-blue-900 text-white rounded text-sm"
        >
          Curriculum
        </button>
      </div>
    </div>
  )
}
