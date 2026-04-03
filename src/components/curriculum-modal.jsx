"use client"

import { useEffect, useState } from "react"
import ModalWrapper from "@/components/ui/modal-wrapper"

// courses: optional array of { name: string } or { title: string }
export default function CurriculumModal({ open, onClose, courseName, courses = [] }) {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [collegeName, setCollegeName] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize selected course when modal opens
  useEffect(() => {
    if (open) {
      setSelectedCourse(courseName || "")
    }
  }, [open, courseName])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/Info@onyxedutech.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          email,
          collegeName,
          selectedCourse,
          feedback,
          _subject: `New Curriculum Request: ${selectedCourse || 'General'}`,
          _honey: "", // Honeypot to prevent spam
        }),
      });

      if (!response.ok) {
        console.error('Failed to submit to FormSubmit.co');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <ModalWrapper
      open={open}
      onClose={handleClose}
      title={`Get Curriculum Details${courseName ? ` for ${courseName}` : ""}`}
      subtitle={!isSubmitted ? "Fill in your details and we'll share the complete curriculum with you." : null}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-gray-200">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-md border border-white/10 bg-[#070b1f] px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-gray-200">Phone Number</label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-white/10 bg-[#070b1f] px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-gray-200">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/10 bg-[#070b1f] px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-gray-200">College Name</label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="Enter your college name"
                className="w-full rounded-md border border-white/10 bg-[#070b1f] px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm text-gray-200">Choose a Course</label>
            <select
              required
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-[#070b1f] px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select one course</option>
              {courses.map((c, idx) => {
                const name = c.name || c.title || ""
                if (!name) return null
                return (
                  <option key={idx} value={name}>
                    {name}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm text-gray-200">Feedback or Suggestions</label>
            <textarea
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your questions, feedback, or suggestions..."
              className="w-full rounded-md border border-white/10 bg-[#070b1f] px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-md border border-gray-500 text-xs sm:text-sm text-gray-100 hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 text-xs sm:text-sm font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="px-6 pb-8 pt-4 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Thank you!</h3>
          <p className="text-sm text-gray-300">
            Your request has been submitted. Our team will contact you shortly with the detailed curriculum.
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-5 px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 text-xs sm:text-sm font-semibold text-white"
          >
            Close
          </button>
        </div>
      )}
    </ModalWrapper>
  )
}


