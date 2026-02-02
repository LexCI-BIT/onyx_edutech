"use client"

import Script from "next/script"

export function ChatlingWidget() {
  return (
    <Script
      id="chatling-embed-script"
      src="https://chatling.ai/js/embed.js"
      strategy="afterInteractive"
      data-id="4721898652"
    />
  )
}