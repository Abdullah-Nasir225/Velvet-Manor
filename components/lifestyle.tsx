"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const points = [
  "Premium living spaces powered by reliable technology",
  "Energy-efficient appliances that lower your bills",
  "Smart, connected devices for the modern home",
]

export function Lifestyle() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-background py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8 ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/lifestyle-home.png"
              alt="Modern living room equipped with premium electronics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card p-5 shadow-xl sm:-right-6">
            <p className="font-heading text-3xl font-extrabold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Years of trust</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Sarim
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Building smarter homes across Multan
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            From single appliances to fully-equipped homes and businesses, we
            bring you the latest technology backed by honest pricing and a
            commitment to long-term service. Your comfort is our standard.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Visit Our Showroom
          </a>
        </div>
      </div>
    </section>
  )
}
