"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner, Cantt",
    text: "Bought a refrigerator and washing machine on installments. The process was smooth, prices were better than anywhere else in Multan, and delivery was same-day. Highly recommended.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Fatima Khan",
    role: "Interior Designer",
    text: "Sarim Electronics helped me furnish appliances for an entire apartment project. Genuine products, professional installation, and excellent after-sales support throughout.",
    rating: 5,
    initials: "FK",
  },
  {
    name: "Usman Tariq",
    role: "Restaurant Owner",
    text: "I needed multiple ACs and a commercial freezer urgently. Their team arranged everything within two days at a great price. Trustworthy and reliable people to deal with.",
    rating: 5,
    initials: "UT",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Teacher, Gulgasht",
    text: "The staff explained every feature patiently and never pushed me to overspend. My LED TV has been perfect for over a year. This is how customer service should be.",
    rating: 5,
    initials: "AS",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
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

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[active]

  return (
    <section id="reviews" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div ref={ref} className={`reveal text-center ${visible ? "is-visible" : ""}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Loved by thousands of customers
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
            <Quote className="h-10 w-10 text-primary/30" />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
              {t.text}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {t.initials}
              </div>
              <div className="flex-1">
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-primary" : "w-2.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((a) => (a + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
