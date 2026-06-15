"use client"

import { useCountUp } from "@/hooks/use-count-up"
import { Users, PackageCheck, Award, CalendarClock } from "lucide-react"

const STATS = [
  { icon: Users, target: 25000, suffix: "+", label: "Happy Customers" },
  { icon: PackageCheck, target: 48000, suffix: "+", label: "Products Delivered" },
  { icon: Award, target: 30, suffix: "+", label: "Top Brands" },
  { icon: CalendarClock, target: 18, suffix: "+", label: "Years of Service" },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}

function StatItem({
  icon: Icon,
  target,
  suffix,
  label,
}: {
  icon: typeof Users
  target: number
  suffix: string
  label: string
}) {
  const { value, ref } = useCountUp(target)
  return (
    <div className="reveal flex flex-col items-center text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <span ref={ref} className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-sm text-white/60">{label}</span>
    </div>
  )
}
