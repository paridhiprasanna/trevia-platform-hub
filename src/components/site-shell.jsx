import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Trevia CMS", to: "/cms" },
  { label: "Trevia Drive", to: "/drive" },
  { label: "Solutions", to: "/solutions" },
  { label: "Technology", to: "/technology" },
  { label: "Company", to: "/about" },
];

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Trevia CMS", to: "/cms" },
      { label: "Trevia Drive", to: "/drive" },
      { label: "Request a Demo", to: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "CPOs & Operators", to: "/solutions/cpos" },
      { label: "Fleets", to: "/solutions/fleets" },
      { label: "Enterprises", to: "/solutions/enterprises" },
      { label: "Energy & Utilities", to: "/solutions/energy" },
      { label: "Government", to: "/solutions/government" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "OCPP & Interoperability", to: "/technology" },
      { label: "APIs & Integrations", to: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Traction / Journey", to: "/traction" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
  },
];

export function SiteShell({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[460px] bg-sun-glow/55 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-7 place-items-center rounded-md bg-ink text-cream">
              <span className="font-mono text-xs font-medium">T</span>
            </span>

            <span className="font-semibold tracking-tight">
              Trevia <span className="text-mute">EV Technologies</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-mute lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden text-sm font-medium text-ink transition-colors hover:text-sun sm:inline-flex"
            >
              Request a Demo
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink-2"
            >
              Book a demo
              <ArrowRight className="size-3.5" />
            </Link>

            <button
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid size-9 place-items-center rounded-md border border-line text-ink lg:hidden"
            >
              {open ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-background px-6 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-mute hover:bg-cream hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-sun px-3 py-3 text-sm font-semibold text-ink"
              >
                Request a Demo
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-line bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.35fr_2.65fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-md bg-ink text-cream">
                <span className="font-mono text-xs font-medium">T</span>
              </span>

              <span className="font-semibold tracking-tight">
                Trevia EV Technologies
              </span>
            </Link>

            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-mute">
              The operating layer for your charging network.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sun">
                  {group.title}
                </p>

                <div className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-sm text-mute transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Trevia EV Technologies</span>
            <span>Digital infrastructure for EV charging.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}