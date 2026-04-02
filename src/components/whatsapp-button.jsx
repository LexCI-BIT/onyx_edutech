"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton({
    phoneNumber = "8977220902",
    message = "Hello! I'm interested in Onyx EduTech services."
}) {
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-[30px] left-[30px] z-[9999] flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Contact us on WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.437 2.503 1.169 3.459l-.764 2.79 2.848-.748c.903.545 1.96.866 3.087.866 3.181 0 5.767-2.586 5.767-5.766 0-3.18-2.586-5.767-5.767-5.767zm3.174 8.163c-.158.443-.794.79-.909.814-.114.024-.225.045-.225.045s-.11.026-.642-.183c-.531-.21-1.077-.45-1.5-.78-.423-.33-.787-.717-1.08-1.155-.293-.438-.47-.946-.47-1.488 0-.54-.015-.915.225-1.215.24-.3.45-.3.51-.3h.165c.06 0 .15-.015.225.165.075.18.255.615.285.675.03.06.045.135 0 .225-.045.09-.075.15-.15.24-.075.09-.15.15-.225.24-.075.09-.15.18-.06.33.09.15.39.645.84 1.05.45.405.825.54 1.005.615.18.075.285.06.39-.06.105-.12.45-.525.57-.705.12-.18.24-.15.39-.105.15.045.96.45 1.125.525.165.075.27.105.315.18.045.075.045.435-.113.878zm-.43-7.53c4.108 0 7.442 3.34 7.442 7.466 0 1.282-.32 2.483-.878 3.53l.915 3.33-3.414-.897c-1.229.626-2.617.986-4.065.986-4.108 0-7.442-3.34-7.442-7.466 0-4.125 3.34-7.466 7.442-7.466zm0-1c-4.64 0-8.442 3.79-8.442 8.466 0 1.63.466 3.148 1.272 4.438l-1.353 4.93 5.057-1.33c1.332.85 2.91 1.34 4.598 1.34 4.64 0 8.442-3.79 8.442-8.466 0-4.677-3.802-8.466-8.442-8.466z" />
            </svg>
        </motion.a>
    );
}
