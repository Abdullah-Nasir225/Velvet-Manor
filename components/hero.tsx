"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Phone, ShieldCheck, Truck, Star } from "lucide-react"

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-28 pb-16 text-white"
    >
      {/* Animated background particles / glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/30 blur-[100px] animate-pulse-glow" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-drift" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.62_0.18_250_/_0.25)] blur-[100px] animate-pulse-glow" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            Multan&apos;s most trusted electronics retailer
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Smart Technology.{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.7_0.14_240)] bg-clip-text text-transparent">
              Better Living.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Discover premium home appliances and electronics from trusted brands
            with competitive pricing, fast delivery, and expert support — all
            under one roof in Multan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/40"
            >
              Shop Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> 100% Genuine
            </span>
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" /> Fast Delivery
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" /> Easy Installments
            </span>
          </div>
        </div>

        {/* Floating product visuals */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
          <FloatingCard
            className="left-0 top-6 w-44 sm:w-56"
            style={{ transform: `translateY(${offset * -0.04}px)` }}
            img="/hero-fridge.png"
            alt="Premium french-door refrigerator"
            label="Refrigerators"
            price="From PKR 145,000"
            animation="animate-float-y"
          />
          <FloatingCard
            className="right-0 top-0 w-48 sm:w-60"
            style={{ transform: `translateY(${offset * 0.05}px)` }}
            img="/hero-tv.png"
            alt="Ultra-thin 4K smart TV"
            label="LED TVs"
            price="From PKR 78,000"
            animation="animate-float-y-slow"
          />
          <FloatingCard
            className="bottom-0 left-1/2 w-44 -translate-x-1/2 sm:w-56"
            style={{ transform: `translate(-50%, ${offset * -0.03}px)` }}
            img="/hero-ac.png"
            alt="Inverter split air conditioner"
            label="Air Conditioners"
            price="From PKR 92,000"
            animation="animate-float-y"
          />
        </div>
      </div>
    </section>
  )
}

function FloatingCard({
  className,
  style,
  img,
  alt,
  label,
  price,
  animation,
}: {
  className?: string
  style?: React.CSSProperties
  img: string
  alt: string
  label: string
  price: string
  animation: string
}) {
  return (
    <div className={`absolute ${className}`} style={style}>
      <div className={animation}>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md transition-transform hover:scale-[1.03]">
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl bg-white">
            <Image src={img || "/placeholder.svg"} alt={alt} fill className="object-contain p-3" sizes="240px" />
          </div>
          <p className="mt-3 text-xs font-medium text-white/60">{label}</p>
          <p className="text-sm font-semibold text-white">{price}</p>
        </div>
      </div>
    </div>
  )
}
