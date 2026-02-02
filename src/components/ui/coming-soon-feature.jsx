"use client";

import { useToast } from "@/hooks/use-toast";

export function ComingSoonFeature({
    children,
    message = "Our team is working hard to release this feature soon!",
    className,
}) {
    const { toast } = useToast();

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        toast({
            title: "Coming Soon",
            description: message,
            className: "bg-white border-gray-200 text-gray-900",
            duration: 3000,
        });
    };

    return (
        <div
            className={className + " flex items-center gap-2"}
            onClick={handleClick}
        >
            {children}
        </div>
    );
}
