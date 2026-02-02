"use client";

import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function CenteredToastProvider() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(({ id, title, description, action, ...props }) => (
                <Toast key={id} {...props}>
                    <div className="grid gap-1 bg-gray-400 p-4">
                        {title && (
                            <div className="font-semibold text-lg">{title}</div>
                        )}
                        {description && (
                            <div className="text-sm opacity-90 w-fit">
                                {description}
                            </div>
                        )}
                    </div>
                    {action}
                </Toast>
            ))}
            <ToastViewport className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 w-[350px] max-w-[90vw] m-0 z-[100] outline-non" />
        </ToastProvider>
    );
}
