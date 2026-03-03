"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

const faqs = [
    {
        question: "What is Onyx EduTech?",
        answer: "Onyx EduTech is a dynamic learning community committed to transforming dreamers into professionals. Our industry-aligned curriculum focuses on building practical skills required for today's careers rather than just providing a mark sheet."
    },
    {
        question: "Are your certifications recognized?",
        answer: "Yes, our programs are credible and highly recognized. We are DPIIT (Start-up India) Recognized, AICTE Approved, and NSDC Certified."
    },
    {
        question: "Can academic institutions partner with Onyx EduTech?",
        answer: "Absolutely! We offer specialized plans for academic institutions, along with our individual plans. Reach out to our support team for more details on institutional partnerships."
    },
    {
        question: "Where is Onyx EduTech located?",
        answer: "We are located at Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081."
    },
    {
        question: "How can I contact the support team?",
        answer: "You can reach our support team by phone at +91 8977220902 or via email at support@onyxedutech.com."
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-24 sm:py-32 pt-32 sm:pt-40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-8 group transition-colors duration-300">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Home
                </Link>
                <div className="text-center mb-16">
                    <HelpCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h1>
                    <p className="text-lg text-gray-600">
                        Find answers to common questions about our platform, certifications, and community.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-lg text-blue-900 pr-8">{faq.question}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16 bg-blue-900 rounded-2xl p-8 sm:p-12 shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Please contact our friendly team.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}
