import { allCourses, availableCourses, comingSoonCourses, courseDetails, coursesList } from "../../../../app/constants"
import CourseDetail from "@/components/course-detail"

// slug helper (keep in sync with CourseCard)
const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export default async function CourseDetailPageImpl(props) {
  // In async Server Components, `params` is a Promise and must be awaited
  const { category, id } = await props.params

  // Handle "all" category by searching in both available and coming-soon courses
  let list = []
  if (category === "available") {
    list = availableCourses
  } else if (category === "coming-soon") {
    list = comingSoonCourses
  } else if (category === "all") {
    // For backward compatibility, search in allCourses
    list = allCourses
  }

  // Try to find course by title slug or coursePath in the category list
  let course = list.find(
    (c) => slugify(c.title) === id || (c.coursePath && c.coursePath === id)
  )

  // If not found in category list, search in coursesList (for courses from category pages like cse, programming-technologies, etc.)
  if (!course) {
    const allCoursesFromList = coursesList.flatMap((group) => group.categoryList)
    course = allCoursesFromList.find(
      (c) => slugify(c.name) === id || (c.coursePath && c.coursePath === id)
    )
    // Convert coursesList format to match expected format
    if (course) {
      course = { ...course, title: course.name }
    }
  }
  
  // Find detailed course information from courseDetails
  const courseDetail = courseDetails.find(
    (cd) => slugify(cd.courseName) === id || cd.coursePath === id
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      <CourseDetail 
        course={course} 
        category={category} 
        courseDetails={courseDetail}
      />
    </div>
  )
}
