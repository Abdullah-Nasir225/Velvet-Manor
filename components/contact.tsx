"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function Contact() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const info = [
    { icon: MapPin, label: "Visit Us", value: "Hussain Agahi Road, Multan, Punjab, Pakistan" },
    { icon: Phone, label: "Call Us", value: "+92 300 1234567" },
    { icon: Mail, label: "Email Us", value: "info@sarimelectronics.pk" },
    { icon: Clock, label: "Open Hours", value: "Mon – Sat: 10:00 AM – 9:00 PM" },
  ]

  return (
    <section id="contact" className="bg-navy py-20 text-white sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-7xl px-5 lg:px-8 ${visible ? "is-visible" : ""}`}
      >
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Visit our showroom or reach out
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Info + map */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-white/50">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Sarim Electronics location in Multan"
                src="https://www.google.com/maps?q=Hussain+Agahi+Road+Multan&output=embed"
                className="h-64 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Send className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 text-sm text-white/60">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" />
                  <Field label="Phone" name="phone" placeholder="+92 3xx xxxxxxx" />
                </div>
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
    </div>
  )
}
