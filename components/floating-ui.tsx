"use client"

import { useEffect, useState } from "react"
import { ArrowUp, MessageCircle, Phone } from "lucide-react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* WhatsApp + back to top - right side */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:text-primary ${
            showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <MessageCircle className="relative h-7 w-7" />
        </a>
      </div>

      {/* Mobile call button - left side */}
      <a
        href="tel:+923001234567"
        aria-label="Call us"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105 lg:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  )
}
