"use client"

const BRANDS = ["Haier", "Dawlance", "Samsung", "PEL", "Kenwood", "Canon", "Westpoint"]

export function Brands() {
  const row = [...BRANDS, ...BRANDS]
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="reveal mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by leading brands
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12">
            {row.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="font-heading text-2xl font-bold text-navy/30 transition-colors hover:text-primary sm:text-3xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
