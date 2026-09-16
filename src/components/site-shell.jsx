import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Activity,
  Radio,
  Settings2,
  AlertTriangle,
  Receipt,
  Layers3,
  Gauge,
  BarChart3,
  PlugZap,
  Network,
  Server,
  Eye,
  Smartphone,
  Code2,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Features",
    featureSections: [
      {
        title: "HIGHLIGHTS",
        links: [
          {
            label: "OCPP Connectivity",
            description: "Connect and communicate with chargers.",
            icon: PlugZap,
            to: "/technology",
          },
          {
            label: "Real-Time Monitoring",
            description: "See charging activity as it happens.",
            icon: Activity,
            to: "/cms",
          },
          {
            label: "Remote Operations",
            description: "Control and manage charging remotely.",
            icon: Settings2,
            to: "/cms",
          },
          {
            label: "Fault Visibility",
            description: "Identify charger issues quickly.",
            icon: AlertTriangle,
            to: "/cms",
          },
        ],
      },

      {
        title: "PUBLIC CHARGING",
        links: [
          {
            label: "Sessions & Transactions",
            description: "Track sessions and charging activity.",
            icon: Radio,
            to: "/cms",
          },
          {
            label: "Multi-Site Management",
            description: "Manage charging sites from one place.",
            icon: Layers3,
            to: "/cms",
          },
          {
            label: "Tariff Management",
            description: "Configure flexible charging tariffs.",
            icon: Receipt,
            to: "/cms",
          },
          {
            label: "Analytics",
            description: "Turn charging data into insights.",
            icon: BarChart3,
            to: "/cms",
          },
        ],
      },

      {
        title: "FLEET CHARGING",
        links: [
          {
            label: "APIs & Integrations",
            description: "Connect Trevia with your systems.",
            icon: Code2,
            to: "/technology",
          },
          {
            label: "Hardware Agnostic",
            description: "Work across different charger hardware.",
            icon: Network,
            to: "/platform",
          },
          {
            label: "Digital Infrastructure",
            description: "Build scalable charging operations.",
            icon: Server,
            to: "/platform",
          },
          {
            label: "Network Visibility",
            description: "Get visibility across your network.",
            icon: Eye,
            to: "/platform",
          },
        ],
      },
    ],
  },

  {
    label: "Products",
    dropdown: [
      {
        label: "Trevia CMS",
        to: "/cms",
      },
      {
        label: "Trevia EV App",
        to: "/drive",
      },
    ],
  },

  {
    label: "Solutions",
    dropdownSections: [
      {
        title: "WHITE LABEL",
        links: [
          {
            label: "White Label CMS",
            to: "/cms",
          },
          {
            label: "White Label Mobile App",
            to: "/drive",
          },
        ],
      },
      {
        title: "CHARGING MODEL",
        links: [
          {
            label: "CPOs & Charging Operators",
            to: "/solutions/cpos",
          },
          {
            label: "Fleet Charging",
            to: "/solutions/fleets",
          },
          {
            label: "Enterprises",
            to: "/solutions/enterprises",
          },
        ],
      },
    ],
  },

  {
    label: "Resources",
    to: "/resources",
  },

  {
    label: "About Us",
    to: "/about",
  },
];

const footerGroups = [
  {
    title: "Product",
    links: [
      {
        label: "Trevia CMS",
        to: "/cms",
      },
      {
        label: "Trevia EV App",
        to: "/drive",
      },
      {
        label: "Request a Demo",
        to: "/contact",
      },
    ],
  },

  {
    title: "Solutions",
    links: [
      {
        label: "CPOs & Charging Operators",
        to: "/solutions/cpos",
      },
      {
        label: "Public Charging",
        to: "/solutions",
      },
      {
        label: "Fleet Charging",
        to: "/solutions/fleets",
      },
      {
        label: "Enterprises",
        to: "/solutions/enterprises",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Journey",
        to: "/traction",
      },
      {
        label: "Contact",
        to: "/contact",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        to: "/privacy",
      },
      {
        label: "Terms of Use",
        to: "/terms",
      },
    ],
  },
];

export function SiteShell({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">

      {/* TOP GLOW */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[460px] bg-sun-glow/55 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      {/* HEADER */}
      <header className="fixed left-0 top-0 z-40 w-full border-b border-line bg-[#F7F5F1]">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <Link
            to="/"
            className="shrink-0"
          >
            <img
              src="/images/trevia-wordmark-black-transparent.webp"
              alt="Trevia"
              className="h-10 w-auto brightness-0"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-mute lg:flex">

            {navItems.map((item) => {

              const hasFeatureDropdown = Boolean(item.featureSections);

              const hasNormalDropdown =
                Boolean(item.dropdown) ||
                Boolean(item.dropdownSections);

              const hasDropdown =
                hasFeatureDropdown ||
                hasNormalDropdown;

              return (
                <div
                  key={item.label}
                  className="group relative"
                >

                 {/* NAV LABEL */}

{hasDropdown ? (
  <Link
    to={item.to || "#"}
    onClick={(event) => {
      if (!item.to) {
        event.preventDefault();
      }
    }}
    className={`relative flex items-center gap-1.5 py-5 transition-colors duration-200 ${
      item.to && location.pathname.startsWith(item.to)
        ? "text-sun"
        : "text-mute hover:text-sun"
    }`}
  >
    {item.label}

    <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />

    <span
      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-sun transition-all duration-300 ${
        item.to && location.pathname.startsWith(item.to)
          ? "w-full"
          : "w-0 group-hover:w-full"
      }`}
    />
  </Link>
) : (
  <NavLink
    to={item.to}
    className={({ isActive }) =>
      `relative flex items-center py-5 transition-colors duration-200 ${
        isActive
          ? "text-sun"
          : "text-mute hover:text-sun"
      }`
    }
  >
    {({ isActive }) => (
      <>
        {item.label}

        <span
          className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-sun transition-all duration-300 ${
            isActive
              ? "w-full"
              : "w-0 group-hover:w-full"
          }`}
        />
      </>
    )}
  </NavLink>
)}

                  {/* FEATURES DROPDOWN */}
                  {hasFeatureDropdown && (
                    <div className="invisible absolute left-1/2 top-full z-50 w-[920px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                      <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#F7F5F1] shadow-[0_24px_60px_rgba(0,0,0,0.15)]">

                        {/* THREE FEATURE COLUMNS */}
                        <div className="grid grid-cols-3 divide-x divide-black/10 p-5">

                          {item.featureSections.map((section) => (

                            <div
                              key={section.title}
                              className="px-3 first:pl-2 last:pr-2"
                            >

                              {/* SECTION TITLE */}
                              <p className="mb-4 px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sun">
                                {section.title}
                              </p>

                              {/* FEATURE ITEMS */}
                              <div className="flex flex-col gap-1">

                                {section.links.map((feature) => {

                                  const Icon = feature.icon;

                                  return (
                                    <Link
                                      key={feature.label}
                                      to={feature.to}
                                      className="group/feature flex gap-3 rounded-xl px-2.5 py-3 transition-colors duration-200 hover:bg-[#E4DDD3]"
                                    >

                                      {/* ICON */}
                                      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white/60 text-mute transition-colors duration-200 group-hover/feature:border-sun/30 group-hover/feature:text-sun">
                                        <Icon className="size-4" />
                                      </div>

                                      {/* TEXT */}
                                      <div className="min-w-0 flex-1">

                                        <div className="flex items-center justify-between gap-2">

                                          <span className="text-sm font-medium text-ink">
                                            {feature.label}
                                          </span>

                                          <ArrowRight className="size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/feature:translate-x-0 group-hover/feature:opacity-100" />

                                        </div>

                                        <p className="mt-1 text-[11px] leading-relaxed text-mute">
                                          {feature.description}
                                        </p>

                                      </div>

                                    </Link>
                                  );
                                })}

                              </div>

                            </div>
                          ))}

                        </div>

                        {/* FEATURE FOOTER */}
                        <div className="flex items-center justify-between border-t border-black/10 bg-[#E4DDD3]/55 px-6 py-4">

                          <div className="flex items-center gap-3">

                            <div className="flex size-8 items-center justify-center rounded-lg bg-black text-white">
                              <Gauge className="size-4" />
                            </div>

                            <div>
                              <p className="text-sm font-medium text-ink">
                                Trevia Platform
                              </p>

                              <p className="text-[11px] text-mute">
                                The operating layer for EV charging.
                              </p>
                            </div>

                          </div>

                          <Link
                            to="/platform"
                            className="inline-flex items-center gap-2 rounded-md border border-black/15 bg-[#F7F5F1] px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-black hover:text-white"
                          >
                            See all features
                            <ArrowRight className="size-3.5" />
                          </Link>

                        </div>

                      </div>
                    </div>
                  )}

                  {/* NORMAL DROPDOWNS */}
                  {hasNormalDropdown && !hasFeatureDropdown && (
                    <div
                      className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                        item.dropdownSections
                          ? "w-[520px]"
                          : "w-[290px]"
                      }`}
                    >

                      <div className="rounded-xl border border-black/10 bg-[#F7F5F1] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.14)]">

                        {/* SOLUTIONS */}
                        {item.dropdownSections ? (
                          <div className="grid grid-cols-2 gap-5">

                            {item.dropdownSections.map((section) => (

                              <div key={section.title}>

                                <p className="px-3 pb-2 pt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sun">
                                  {section.title}
                                </p>

                                <div className="flex flex-col gap-1">

                                  {section.links.map((dropdownItem) => (

                                    <Link
                                      key={dropdownItem.label}
                                      to={dropdownItem.to}
                                      className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-mute transition-colors duration-200 hover:bg-[#E4DDD3] hover:text-ink"
                                    >
                                      <span>
                                        {dropdownItem.label}
                                      </span>

                                      <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                    </Link>

                                  ))}

                                </div>

                              </div>

                            ))}

                          </div>
                        ) : (

                          /* PRODUCTS */
                          <div className="flex flex-col gap-1">

                            {item.dropdown.map((dropdownItem) => (

                              <Link
                                key={dropdownItem.label}
                                to={dropdownItem.to}
                                className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-mute transition-colors duration-200 hover:bg-[#E4DDD3] hover:text-ink"
                              >
                                <span>
                                  {dropdownItem.label}
                                </span>

                                <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                              </Link>

                            ))}

                          </div>
                        )}

                      </div>
                    </div>
                  )}

                </div>
              );
            })}

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* REQUEST A DEMO */}
            <Link
              to="/contact"
              className="book-demo-button inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors"
            >
              Request a Demo
              <ArrowRight className="size-3.5" />
            </Link>

            {/* MOBILE MENU */}
            <button
              type="button"
              aria-label={
                open
                  ? "Close navigation"
                  : "Open navigation"
              }
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

        {/* MOBILE NAV */}
        {open && (
          <nav className="border-t border-line bg-background px-6 py-4 lg:hidden">

            <div className="mx-auto flex max-w-7xl flex-col gap-1">

              {navItems.map((item) => {

                const hasFeatureDropdown = Boolean(item.featureSections);

                const hasDropdown =
                  hasFeatureDropdown ||
                  Boolean(item.dropdown) ||
                  Boolean(item.dropdownSections);

                if (!hasDropdown) {

                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-3 text-sm font-medium text-mute transition-all duration-200 hover:bg-cream hover:text-sun"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label}>

                    <details className="group">

                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-mute transition-colors hover:bg-cream hover:text-sun">

                        <span>
                          {item.label}
                        </span>

                        <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />

                      </summary>

                      <div className="ml-3 border-l border-line pl-3">

                        {/* MOBILE FEATURES */}
                        {hasFeatureDropdown ? (

                          <div className="flex flex-col gap-4 py-3">

                            {item.featureSections.map((section) => (

                              <div key={section.title}>

                                <p className="px-3 pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sun">
                                  {section.title}
                                </p>

                                <div className="flex flex-col">

                                  {section.links.map((feature) => {

                                    const Icon = feature.icon;

                                    return (
                                      <Link
                                        key={feature.label}
                                        to={feature.to}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-mute transition-colors hover:bg-cream hover:text-sun"
                                      >

                                        <Icon className="size-4 shrink-0" />

                                        <span>
                                          {feature.label}
                                        </span>

                                      </Link>
                                    );
                                  })}

                                </div>

                              </div>
                            ))}

                            <Link
                              to="/platform"
                              onClick={() => setOpen(false)}
                              className="mt-1 flex items-center justify-between rounded-md bg-sun px-3 py-3 text-sm font-semibold text-ink"
                            >
                              See all features
                              <ArrowRight className="size-4" />
                            </Link>

                          </div>

                        ) : item.dropdownSections ? (

                          /* MOBILE SOLUTIONS */
                          <div className="flex flex-col gap-4 py-2">

                            {item.dropdownSections.map((section) => (

                              <div key={section.title}>

                                <p className="px-3 pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sun">
                                  {section.title}
                                </p>

                                <div className="flex flex-col">

                                  {section.links.map((dropdownItem) => (

                                    <Link
                                      key={dropdownItem.label}
                                      to={dropdownItem.to}
                                      onClick={() => setOpen(false)}
                                      className="block rounded-md px-3 py-2.5 text-sm text-mute transition-colors hover:bg-cream hover:text-sun"
                                    >
                                      {dropdownItem.label}
                                    </Link>

                                  ))}

                                </div>

                              </div>

                            ))}

                          </div>

                        ) : (

                          /* MOBILE PRODUCTS */
                          <div className="flex flex-col">

                            {item.dropdown.map((dropdownItem) => (

                              <Link
                                key={dropdownItem.label}
                                to={dropdownItem.to}
                                onClick={() => setOpen(false)}
                                className="block rounded-md px-3 py-2.5 text-sm text-mute transition-colors hover:bg-cream hover:text-sun"
                              >
                                {dropdownItem.label}
                              </Link>

                            ))}

                          </div>

                        )}

                      </div>

                    </details>

                  </div>
                );
              })}

              {/* MOBILE REQUEST DEMO */}
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

      {/* PAGE CONTENT */}
      <main className="relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-line bg-[#F7F5F1]">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.35fr_2.65fr]">

          {/* FOOTER BRAND */}
          <div>

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src="/images/trevia-wordmark-black-transparent.webp"
                alt="Trevia"
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-mute">
              The operating layer for EV charging.
            </p>

          </div>

          {/* FOOTER LINKS */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">

            {footerGroups.map((group) => (

              <div key={group.title}>

                <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-sun">
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

        {/* FOOTER BOTTOM */}
        <div className="border-t border-line">

          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">

            <span>
              © {new Date().getFullYear()} Trevia EV Technologies
            </span>

            <span>
              Digital infrastructure for EV charging.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}