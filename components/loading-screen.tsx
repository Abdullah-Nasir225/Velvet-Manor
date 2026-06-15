"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1400)
    const t2 = setTimeout(() => setHidden(true), 2100)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1 }}
      aria-hidden="true"
    >
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <BoltMark className="h-6 w-6" />
        </div>
        <span className="font-heading text-2xl font-bold tracking-tight text-white">
          Sarim<span className="text-primary"> Electronics</span>
        </span>
      </div>
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-[1400ms] ease-out"
          style={{ width: done ? "100%" : "8%" }}
        />
      </div>
    </div>
  )
}

function BoltMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" fill="currentColor" />
    </svg>
  )
}
