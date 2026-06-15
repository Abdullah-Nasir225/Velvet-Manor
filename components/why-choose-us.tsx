"use client"

import { BadgeCheck, Truck, CreditCard, Tag, Headphones, Wrench } from "lucide-react"

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Genuine Products",
    desc: "Every appliance is 100% original with full manufacturer warranty.",
  },
  {
    icon: Truck,
    title: "Fast Delivery Across Multan",
    desc: "Same-day and next-day delivery to your doorstep, free within the city.",
  },
  {
    icon: CreditCard,
    title: "Easy Installments",
    desc: "Flexible monthly plans that make premium electronics affordable.",
  },
  {
    icon: Tag,
    title: "Competitive Prices",
    desc: "Best-in-market pricing with regular discounts and seasonal offers.",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    desc: "Friendly specialists help you choose the right product, every time.",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    desc: "Professional installation and reliable service whenever you need it.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Sarim Electronics
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl lg:text-5xl">
            A retailer you can trust
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We pair premium products with a buying experience built around
            honesty, value and lasting support.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="reveal group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              data-reveal-delay={(i % 3) * 100}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <r.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
