"use client"

import Image from "next/image"

const CATEGORIES = [
  { name: "Air Conditioners", image: "/hero-ac.png", items: "120+ models" },
  { name: "LED TVs", image: "/product-tv.png", items: "95+ models" },
  { name: "Refrigerators", image: "/hero-fridge.png", items: "80+ models" },
  { name: "Washing Machines", image: "/product-washing-machine.png", items: "60+ models" },
  { name: "Air Fryers", image: "/product-airfryer.png", items: "40+ models" },
  { name: "Microwave Ovens", image: "/product-microwave.png", items: "55+ models" },
  { name: "Air Coolers", image: "/category-air-cooler.png", items: "35+ models" },
  { name: "Kitchen Appliances", image: "/category-kitchen.png", items: "150+ models" },
]

export function Categories() {
  return (
    <section id="categories" className="relative bg-secondary py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Browse the catalogue
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl lg:text-5xl">
            Featured Categories
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything for a smarter home, organised so you find the perfect
            appliance in seconds.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.name}
              href="#products"
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              data-reveal-delay={(i % 4) * 80}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="relative object-contain p-5 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="border-t border-border p-5">
                <h3 className="font-heading text-base font-semibold text-navy">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.items}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
