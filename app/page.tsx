"use client"

import { useReveal } from "@/hooks/use-reveal"
import { LoadingScreen } from "@/components/loading-screen"
import { SiteNav } from "@/components/site-nav"
import { ScrollProgress, FloatingActions } from "@/components/floating-ui"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Brands } from "@/components/brands"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Products } from "@/components/products"
import { Offers } from "@/components/offers"
import { Stats } from "@/components/stats"
import { Lifestyle } from "@/components/lifestyle"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  useReveal()

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <Categories />
        <Brands />
        <WhyChooseUs />
        <Products />
        <Offers />
        <Stats />
        <Lifestyle />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
