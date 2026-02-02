"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton({
    scrollThreshold = 300,
    bottom = 30,
    right = 30,
    size = 50,
    iconColor = "white",
}) {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event to show/hide button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // Initialize visibility
        toggleVisibility();

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [scrollThreshold]);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed z-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-amber-400"
                    style={{
                        bottom: bottom,
                        right: right,
                        width: size,
                        height: size,
                        borderRadius: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                >
                    <ChevronUp
                        size={size * 0.5}
                        color={iconColor}
                        strokeWidth={3}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
