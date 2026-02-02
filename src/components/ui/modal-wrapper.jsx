"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

export default function ModalWrapper({ open, onClose, title, subtitle, children }) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />

            <div className="relative z-50 max-w-2xl w-full mx-4 rounded-2xl bg-[#050819] text-white shadow-2xl border border-white/10">
                <div className="flex items-center justify-between px-6 pt-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
                        {subtitle && (
                            <p className="mt-1 text-xs sm:text-sm text-gray-300">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-300 hover:text-white text-lg p-1"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}
