import { availableCourses, comingSoonCourses, allCourses } from "../../constants"
import CategoryCoursesClient from "@/components/category-courses-client"

export default async function CategoryPageImpl({ params }) {
  const { category } = await params

  // Support both the original special pages and the header category slugs
  const specialMapping = {
    available: { label: "Available Courses", list: availableCourses },
    "coming-soon": { label: "Coming Soon", list: comingSoonCourses },
  }

  // Header-driven category slug -> keywords used to filter allCourses
  const headerCategoryMap = {
    cse: { label: "CSE", keywords: ["artificial", "machine", "web", "data", "cyber", "ethical", "cloud", "python", "mysql", "ccna", "ui"] },
    "programming-technologies": { label: "Programming Technologies", keywords: ["android", "java", "python", "mysql", "full", "net", "dsa", "flutter", "swift"] },
    "ece-eee": { label: "ECE & EEE", keywords: ["vlsi", "iot", "robotics", "embedded"] },
    "mechanical-automobiles": { label: "Mechanical & Automobiles", keywords: ["autocad", "hybrid", "engine", "mechanical"] },
    management: { label: "Management", keywords: ["human", "marketing", "finance", "sales", "digital"] },
  }

  // If category is one of the special mapping, use it directly
  if (specialMapping[category]) {
    const bucket = specialMapping[category]
    return (
      <div className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">{bucket.label}</h2>
            <p className="text-gray-600 mt-2">Browse courses in this category.</p>
          </div>

          <CategoryCoursesClient courses={bucket.list} category={category} />
        </div>
      </div>
    )
  }

  // If category matches a header slug, filter courses by keywords
  if (headerCategoryMap[category]) {
    const { label, keywords } = headerCategoryMap[category]
    const lowerKeywords = keywords.map((k) => k.toLowerCase())

    const filtered = allCourses.filter((course) => {
      const title = (course.title || "").toLowerCase()
      return lowerKeywords.some((kw) => title.includes(kw))
    })

    // fallback to allCourses if filtering yielded nothing
    const list = filtered.length ? filtered : allCourses

    return (
      <div className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">{label}</h2>
            <p className="text-gray-600 mt-2">Browse courses in {label}.</p>
          </div>

          <CategoryCoursesClient courses={list} category={category} />
        </div>
      </div>
    )
  }

  // Unknown category — friendly not found UI with suggestions
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900">Category not found</h2>
        <p className="text-gray-600 mt-2">Try one of the categories from the menu.</p>
      </div>
    </div>
  )
}
