"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export function Offers() {
  return (
    <section id="offers" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Large banner */}
          <div className="reveal group relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12 lg:col-span-2">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Mega Sale
              </span>
              <h3 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
                Up to{" "}
                <span className="bg-gradient-to-r from-primary to-[oklch(0.7_0.14_240)] bg-clip-text text-transparent">
                  40% OFF
                </span>{" "}
                on Air Conditioners
              </h3>
              <p className="mt-4 max-w-md text-pretty text-white/70">
                Beat the Multan heat. Inverter AC units with free installation
                and easy monthly installments this season only.
              </p>
              <a
                href="#products"
                className="group/btn mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                Grab the deal
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Tall accent banner */}
          <div className="reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/20 bg-primary p-8 text-primary-foreground" data-reveal-delay="120">
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                Limited time
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-3xl">
                0% Markup Installments
              </h3>
              <p className="mt-3 text-pretty text-sm text-primary-foreground/85">
                Take home premium appliances today and pay in comfortable
                monthly plans with zero hidden charges.
              </p>
            </div>
            <a
              href="#contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-105"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
