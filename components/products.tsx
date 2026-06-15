"use client"

import Image from "next/image"
import { Eye, Star, ShoppingCart } from "lucide-react"

const PRODUCTS = [
  {
    name: "Samsung 55\" Crystal 4K UHD TV",
    category: "LED TV",
    price: "PKR 132,999",
    old: "PKR 159,999",
    discount: "-17%",
    rating: 4.8,
    img: "/product-tv.png",
  },
  {
    name: "Dawlance Inverter Refrigerator",
    category: "Refrigerator",
    price: "PKR 168,500",
    old: "PKR 189,000",
    discount: "-11%",
    rating: 4.7,
    img: "/hero-fridge.png",
  },
  {
    name: "Haier Front Load Washing Machine",
    category: "Washing Machine",
    price: "PKR 94,999",
    old: "PKR 112,000",
    discount: "-15%",
    rating: 4.9,
    img: "/product-washing-machine.png",
  },
  {
    name: "Kenwood Digital Air Fryer 6.5L",
    category: "Air Fryer",
    price: "PKR 28,499",
    old: "PKR 34,000",
    discount: "-16%",
    rating: 4.6,
    img: "/product-airfryer.png",
  },
  {
    name: "PEL Inverter Split AC 1.5 Ton",
    category: "Air Conditioner",
    price: "PKR 112,900",
    old: "PKR 129,000",
    discount: "-12%",
    rating: 4.7,
    img: "/hero-ac.png",
  },
  {
    name: "Westpoint Microwave Oven 30L",
    category: "Microwave",
    price: "PKR 24,999",
    old: "PKR 29,500",
    discount: "-15%",
    rating: 4.5,
    img: "/product-microwave.png",
  },
]

export function Products() {
  return (
    <section id="products" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="reveal mb-14 flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Best sellers
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl lg:text-5xl">
              Featured Products
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all products
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
              data-reveal-delay={(i % 3) * 90}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {p.discount}
                </span>
                <Image
                  src={p.img || "/placeholder.svg"}
                  alt={p.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Quick view overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105"
                  >
                    <Eye className="h-4 w-4" />
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {p.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-navy">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    {p.rating}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-navy">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-lg font-bold text-primary">{p.price}</p>
                    <p className="text-xs text-muted-foreground line-through">{p.old}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Add ${p.name} to cart`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
