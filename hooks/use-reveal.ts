"use client"

import { useEffect } from "react"

/**
 * Observes all elements with the `.reveal` class and adds `.is-visible`
 * when they scroll into view, triggering the CSS entrance transition.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay
            if (delay) el.style.transitionDelay = `${delay}ms`
            el.classList.add("is-visible")
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
