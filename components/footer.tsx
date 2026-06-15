import { Zap, Phone, Mail, MapPin } from "lucide-react"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const links = {
  Categories: ["Refrigerators", "LED TVs", "Air Conditioners", "Washing Machines", "Kitchen Appliances"],
  Company: ["About Us", "Our Brands", "Installments", "Careers", "Contact"],
  Support: ["Delivery & Installation", "Warranty", "After-Sales Service", "FAQs", "Privacy Policy"],
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Zap className="h-5 w-5" />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                Sarim Electronics
              </span>
            </a>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/60">
              Multan&apos;s trusted destination for premium home appliances and
              electronics. Genuine products, fair prices, and service you can
              rely on.
            </p>
            <div className="mt-6 flex gap-3">
              {[FacebookIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
                {title}
              </h4>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sarim Electronics. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" /> +92 300 1234567
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-primary" /> info@sarimelectronics.pk
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Hussain Agahi Road, Multan
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
