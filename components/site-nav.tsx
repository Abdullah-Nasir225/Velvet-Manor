"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/70 py-3 shadow-[0_8px_30px_rgb(15_23_42_/_0.06)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" fill="currentColor" />
            </svg>
          </span>
          <span
            className={`font-heading text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Sarim<span className="text-primary"> Electronics</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-navy/80" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+923001234567"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-navy/80" : "text-white/80"
            }`}
          >
            <Phone className="h-4 w-4" />
            +92 300 1234567
          </a>
          <a
            href="#products"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            Shop Products
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden ${
            scrolled
              ? "border-border bg-background/70 text-navy"
              : "border-white/20 bg-white/10 text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-4 mt-3 space-y-1 rounded-2xl border border-border bg-background p-3 shadow-xl">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Shop Products
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
