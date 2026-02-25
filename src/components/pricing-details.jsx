"use client"

import { useState } from "react"
import { PricingPlans } from "../app/constants"
import CurriculumModal from "./curriculum-modal"
import ContactModal from "./contact-modal"

export default function PricingDetails({ courseDetails }) {
  // State to track the selected plan
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0)

  // Merge global pricing plans with optional course-specific prices (if provided)
  // If `courseDetails.pricing` is an array (e.g. ["4,999", "6,999", "8,999"]),
  // it will override the default price for each corresponding plan.
  const effectivePlans = PricingPlans.map((plan, index) => {
    const courseSpecificPrice =
      courseDetails?.pricing && Array.isArray(courseDetails.pricing)
        ? courseDetails.pricing[index]
        : null

    return {
      ...plan,
      price: courseSpecificPrice || plan.price,
    }
  })

  // Get the currently selected plan (with course-specific price when available)
  const selectedPlan = effectivePlans[selectedPlanIndex]

  // State for modal
  const [isCurriculumModalOpen, setIsCurriculumModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  // Handle opening the modal
  const openCurriculumModal = (course) => {
    setSelectedCourse(course)
    setIsCurriculumModalOpen(true)
  }

  const closeCurriculumModal = () => {
    setIsCurriculumModalOpen(false)
    setSelectedCourse(null)
  }

  const openContactModal = (course) => {
    setSelectedCourse(course)
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    setSelectedCourse(null)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-200 hover:shadow-xl transition">
      <div className="w-full">

        {/* PLAN SELECTOR */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {effectivePlans.map((plan, index) => (
              <button
                key={plan.planName}
                onClick={() => setSelectedPlanIndex(index)}
                className={`rounded-full text-sm py-2 px-4 transition font-medium
                ${selectedPlanIndex === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {plan.planName}
              </button>
            ))}
          </div>

          {/* PLAN NAME */}
          <h2 className="text-xl font-semibold text-center text-gray-900">
            {selectedPlan.planName}
          </h2>
        </div>

        {/* FEATURES */}
        <div className="space-y-6 mt-6 text-sm">
          {/* DIGITAL LEARNING */}
          <div>
            <div className="text-base font-semibold text-gray-900 text-center mb-2">
              Digital Learning Features
            </div>
            {selectedPlan.features.digitalLearning.map((feature) => (
              <div
                key={feature}
                className="py-2 border-b text-center text-gray-600"
              >
                {feature}
              </div>
            ))}
          </div>

          {/* ADDITIONAL */}
          <div>
            <div className="text-base font-semibold text-gray-900 text-center mb-2">
              Additional Features
            </div>
            {selectedPlan.features.additionalFeatures.map((feature) => (
              <div
                key={feature}
                className="py-2 border-b text-center text-gray-600"
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CERTIFICATES */}
          <div>
            <div className="text-base font-semibold text-gray-900 text-center mb-2">
              Certificates
            </div>
            {selectedPlan.certificates.map((certificate) => (
              <div
                key={certificate}
                className="py-2 border-b text-center text-gray-600"
              >
                {certificate}
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-6 space-y-3">
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 font-semibold transition"
            onClick={() => openCurriculumModal(courseDetails?.courseName)}
          >
            Enroll Now
          </button>

          <p className="text-center text-xs text-gray-500">
            Need more details or a callback from our team?
          </p>

          <button
            className="w-full bg-purple-50 hover:bg-purple-100 text-purple-900 rounded-xl py-3 font-semibold transition"
            onClick={() => openContactModal(courseDetails?.courseName)}
          >
            Request Callback
          </button>
        </div>

        {/* CURRICULUM MODAL */}
        {isCurriculumModalOpen && (
          <CurriculumModal
            open={isCurriculumModalOpen}
            onClose={closeCurriculumModal}
            courseName={selectedCourse}
            courses={courseDetails?.courseName ? [{ name: courseDetails.courseName }] : []}
          />
        )}

        {/* CONTACT MODAL */}
        {isContactModalOpen && (
          <ContactModal
            open={isContactModalOpen}
            onClose={closeContactModal}
            courseName={selectedCourse}
          />
        )}
      </div>
    </div>
  )
}

