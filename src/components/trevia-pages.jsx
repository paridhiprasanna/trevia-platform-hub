import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Activity,
  ArrowRight,
  Cable,
  Eye,
  Gauge,
  Layers3,
  MapPinned,
  Radio,
  RotateCcw,
  Server,
  SlidersHorizontal,
  Waypoints,
  MapPin,
  Search,
  Route,
  Network,
  Smartphone,
  Map,
  UserRound,
  PlugZap,
  Database,
  Code2,
  RadioTower,
  Settings2,
  MonitorCog
} from "lucide-react";

import {
  ArchitectureDiagram,
  InteroperabilityDiagram,
  TechnologyFlow,
} from "./architecture-diagram.jsx";

import {
  BulletList,
  CTASection,
  Container,
  Eyebrow,
  FAQ,
  FeatureCard,
  PageIntro,
  PlaceholderPanel,
  PrimaryButton,
  SectionTitle,
  SecondaryButton,
} from "./page-primitives.jsx";


const problems = [
  [
    "Disconnected networks",
    "No shared operational picture.",
  ],
  [
    "Multi-vendor hardware",
    "Different vendors. Different systems.",
  ],
  [
    "Limited real-time visibility",
    "Faults, charger status, and live sessions can be difficult to monitor across sites.",
  ],
  [
    "Manual operations",
    "Operators rely on alerts, phone calls, and site visits to resolve issues.",
  ],
  [
    "Difficult multi-site scaling",
    "Complexity grows with every site.",
  ],
];

const ecosystemLogos = [
  {
    name: "GitHub",
    src: "https://cdn.simpleicons.org/github/FFFFFF",
  },
  {
    name: "T-Hub",
    src: "https://cdn.prod.website-files.com/69130479501764fda8a895c6/6927dc95d9efce33b45f7305_image%201.svg",
  },
  {
    name: "GCP",
    src: "https://cdn.simpleicons.org/googlecloud",
  },
  {
    name: "Firebase",
    src: "https://cdn.simpleicons.org/firebase",
  },
  {
    name: "Docker",
    src: "https://cdn.simpleicons.org/docker",
  },
];

const cmsFeatures = [
  [
    "01",
    "OCPP Connectivity",
    "Connect chargers over OCPP 1.6J across hardware vendors.",
  ],
  [
    "02",
    "Real-Time Monitoring",
    "See charger status, connectivity, and health across connected sites.",
  ],
  [
    "03",
    "Remote Operations",
    "Where supported by connected hardware, query status or reset a charger without a site visit.",
  ],
  [
    "04",
    "Fault Visibility",
    "Surface faults and errors reported by chargers directly to operators.",
  ],
  [
    "05",
    "Sessions & Transactions",
    "Track charging sessions and transaction-level data for reporting and reconciliation.",
  ],
  [
    "06",
    "Multi-Site Management",
    "Manage chargers across sites and vendors from one operating layer.",
  ],
  [
    "07",
    "Tariff Management",
    "Configure and manage charging tariffs centrally across sites and charger types.",
  ],
  [
    "08",
    "Analytics",
    "Use aggregate operational and energy data for reporting and planning.",
  ],
  [
    "09",
    "APIs & Integrations",
    "Expose charging, session, and operational data for connected systems.",
  ],
];


export function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeProblem, setActiveProblem] = useState(null);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* HERO */}
      <section className="relative z-10 min-h-screen overflow-hidden bg-ink text-white">
  <Container className="flex min-h-screen flex-col justify-between pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
    
    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
      
      <div className="reveal-up lg:col-span-7">
        <Eyebrow>EV Charging Infrastructure Software</Eyebrow>

        <h1 className="mt-6 max-w-[11ch] text-balance text-xl font-bold leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl lg:text-[7rem] xl:text-[8rem]">
          The Operating Layer for EV Charging.
        </h1>
      </div>

      <div className="reveal-up lg:col-span-4 lg:col-start-9 lg:pb-2">
        <p className="max-w-[34ch] text-base leading-7 text-white/70 sm:text-lg">
          Trevia CMS connects your chargers over OCPP, giving you one platform
          to monitor, operate, and scale across sites and hardware vendors.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <PrimaryButton />
          <SecondaryButton />
        </div>
      </div>
    </div>

    <div className="reveal-up mt-12 lg:mt-16">
  <div className="screenshot-glow relative">
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-cream p-3 shadow-2xl sm:p-5 lg:p-6">
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <img
          src="/images/dashboard.png"
          alt="Trevia CMS dashboard"
          className="block h-auto w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  </div>
</div>

    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs font-mono uppercase tracking-[0.14em] text-white/40">
      <span>OCPP 1.6J</span>
      <span>WebSocket</span>
      <span>Multi-site</span>
      <span>Hardware agnostic</span>
    </div>

  </Container>
</section>

{/* Connected Ecosystem */}
<section className="relative overflow-hidden bg-black py-24 md:py-32">

  {/* Teal ambient glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/10 blur-[120px]" />

  <div className="relative">

    {/* Heading */}
    <div className="mx-auto mb-14 max-w-3xl px-6 text-center">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sun">
        Connected ecosystem
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        Built to work with the
        <br />
        technologies you already use.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white">
        Open infrastructure. Interoperable technology. Connected networks.
      </p>

    </div>

    {/* Logo marquee */}
    <div className="relative w-full overflow-hidden">

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-black to-transparent md:w-40" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

      {/* Moving track */}
      <div className="flex w-max animate-logo-marquee">

        {[...ecosystemLogos, ...ecosystemLogos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-32 w-48 shrink-0 flex-col items-center justify-center gap-4 md:w-56"
          >

            {/* Logo */}
            <div className="flex size-12 items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-9 w-9 object-contain opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
              />
            </div>

            {/* Company name */}
            <span className="text-sm font-medium text-white">
              {logo.name}
            </span>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>


{/* =========================================================
    OUR APPROACH
========================================================= */}
<section className="border-y border-white/10 bg-black">
  <Container className="py-20 sm:py-24 lg:py-28">

    {/* SECTION HEADER */}
    <div className="max-w-3xl">
      <span className="font-mono text-2xl uppercase tracking-[0.2em] text-sun">
        Our Approach
      </span>

      <h2 className="mt-5 max-w-[13ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
        Built to help CPOs grow and operate at scale.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white sm:text-lg">
        Trevia brings connectivity, visibility, automation, and control
        together into one operational layer for charging infrastructure.
      </p>
    </div>


    {/* APPROACH CARDS */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

      {approaches.map((approach, index) => {
        const Icon = approach.icon;

        return (
          <article
            key={approach.title}
            className="group relative flex min-h-[470px] flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >

            {/* TOP */}
            <div className="flex items-start justify-between">

              <span className="font-mono text-2xl font-semibold tracking-[0.18em] text-sun">
                {String(index + 1).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => setActiveProblem(index)}
                aria-label={`Learn how Trevia approaches ${approach.title}`}
                className="grid size-12 place-items-center rounded-xl border border-black/10 bg-[#F7F5F1] transition-all duration-300 hover:border-sun hover:bg-sun hover:text-black"
              >
                <span className="relative block size-5">
                  <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </button>

            </div>


            {/* VISUAL */}
            <div className="relative mt-8 flex h-48 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#F7F5F1]">

              <div className="absolute size-32 rounded-full bg-sun/10 blur-3xl" />

              <div className="relative flex size-24 items-center justify-center rounded-2xl border border-sun/20 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105">

                <Icon className="size-10 text-sun" />

              </div>

            </div>


            {/* CONTENT */}
            <div className="mt-auto pt-7">

              <h3 className="max-w-[13ch] text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
                {approach.title}
              </h3>

              <div className="mt-6 h-px w-8 bg-sun transition-all duration-500 group-hover:w-14" />

              <p className="mt-5 text-sm leading-6 text-black">
                {approach.description}
              </p>

            </div>

          </article>
        );
      })}

    </div>

  </Container>
</section>


{/* =========================================================
    HOW WE TACKLE IT MODAL
========================================================= */}
{activeProblem !== null && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
    onClick={() => setActiveProblem(null)}
  >

    <div
      className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white text-black shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >

      {/* CLOSE */}
      <button
        type="button"
        onClick={() => setActiveProblem(null)}
        aria-label="Close"
        className="absolute right-6 top-6 z-10 grid size-11 place-items-center rounded-xl border border-black/10 bg-[#F7F5F1] transition-colors duration-300 hover:bg-black hover:text-white"
      >
        <span className="relative block size-5">

          <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />

          <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />

        </span>
      </button>


      {/* MODAL CONTENT */}
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT VISUAL */}
        <div className="flex min-h-[360px] items-center justify-center bg-black p-10">

          <div className="relative flex size-40 items-center justify-center rounded-[2rem] border border-sun/30 bg-sun/10">

            <div className="absolute inset-0 rounded-[2rem] bg-sun/10 blur-2xl" />

            {(() => {
              const Icon = approaches[activeProblem].detailIcon;

              return (
                <Icon className="relative size-16 text-sun" />
              );
            })()}

          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="p-8 sm:p-10 lg:p-12">

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-sun">
            {String(activeProblem + 1).padStart(2, "0")} · How we tackle it
          </span>

          <h2 className="mt-6 max-w-[12ch] text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-ink sm:text-5xl">
            {approaches[activeProblem].detailTitle}
          </h2>


          <div className="mt-8 h-px w-12 bg-sun" />


          <p className="mt-7 text-base leading-7 text-black/65 sm:text-lg">
            {approaches[activeProblem].detailCopy}
          </p>


          {/* SOLUTION POINTS */}
          <div className="mt-8 space-y-4">

            {approaches[activeProblem].points.map((point) => (
              <div
                key={point}
                className="flex gap-3 border-b border-black/10 pb-4"
              >

                <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-sun">
                  <span className="size-1.5 rounded-full bg-black" />
                </div>

                <p className="text-sm leading-6 text-black/60">
                  {point}
                </p>

              </div>
            ))}

          </div>


          {/* FOOTER */}
          <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
              Trevia · Digital infrastructure
            </span>

            <button
              type="button"
              onClick={() => setActiveProblem(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-sun"
            >
              Close
              <ArrowRight className="size-3.5 rotate-[-45deg]" />
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
)}


      {/* DIGITAL INFRASTRUCTURE */}
{/* =========================================================
    DIGITAL INFRASTRUCTURE LAYER
========================================================= */}
<section className="border-y border-white/10 bg-black text-white overflow-hidden">
  <Container className="py-20 sm:py-24 lg:py-32">

    {/* HEADER */}
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

      <div>
        <span className="font-mono text-2xl uppercase tracking-[0.2em] text-sun">
          Digital infrastructure
        </span>

        <h2 className="mt-5 max-w-[11ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
          The layer behind connected charging.
        </h2>
      </div>

      <p className="max-w-2xl text-base leading-7 text-white sm:text-lg">
        Trevia connects charging infrastructure, operational systems, and
        digital experiences through one intelligent infrastructure layer.
      </p>

    </div>


    {/* =====================================================
        INFRASTRUCTURE VISUAL
    ===================================================== */}
    <div className="relative mt-20 min-h-[560px]">

      {/* CENTRAL CORE */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

        {/* glow */}
        <div className="absolute -inset-20 rounded-full bg-sun/10 blur-3xl" />

        {/* rings */}
        <div className="absolute -inset-10 rounded-full border border-sun/10" />
        <div className="absolute -inset-20 rounded-full border border-sun/5" />

        <div className="relative flex size-36 flex-col items-center justify-center rounded-full border border-sun/50 bg-black shadow-[0_0_70px_rgba(0,161,155,0.18)] sm:size-44">

          <Layers3 className="size-9 text-sun sm:size-10" />

          <span className="mt-4 font-mono text-lg uppercase tracking-[0.2em] text-sun">
            TREVIA
          </span>

          <span className="mt-1 text-base font-medium text-white/80">
            Infrastructure
          </span>

        </div>

      </div>


      {/* =====================================================
          CONNECTING LINES
      ===================================================== */}

      {/* horizontal */}
      <div className="absolute left-[18%] right-[18%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-sun/30 to-transparent lg:block" />

      {/* vertical */}
      <div className="absolute bottom-[16%] left-1/2 top-[16%] hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sun/30 to-transparent lg:block" />


      {/* =====================================================
          01 — CONNECTIVITY
      ===================================================== */}
      <div className="absolute left-[3%] top-[8%] w-[220px] sm:left-[8%] lg:left-[12%]">

        <div className="flex items-center gap-4">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-sun/40">
            <Waypoints className="size-5 text-sun" />
          </div>

          <span className="font-mono text-lg tracking-[0.18em] text-sun">
            01
          </span>

        </div>

        <h3 className="mt-5 text-xl font-semibold">
          Connectivity
        </h3>

        <p className="mt-3 text-sm leading-6 text-white">
          Connect networks, operators, and charging infrastructure through
          one digital layer.
        </p>

      </div>


      {/* =====================================================
          02 — DATA
      ===================================================== */}
      <div className="absolute right-[3%] top-[8%] w-[220px] text-left sm:right-[8%] lg:right-[12%]">

        <div className="flex items-center gap-4">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-sun/40">
            <Gauge className="size-5 text-sun" />
          </div>

          <span className="font-mono text-lg tracking-[0.18em] text-sun">
            02
          </span>

        </div>

        <h3 className="mt-5 text-xl font-semibold">
          Real-time data
        </h3>

        <p className="mt-3 text-sm leading-6 text-white">
          Bring charger status, sessions, faults, and network activity into
          a real-time operational view.
        </p>

      </div>


      {/* =====================================================
          03 — OPERATIONS
      ===================================================== */}
      <div className="absolute bottom-[8%] left-[3%] w-[220px] sm:left-[8%] lg:left-[12%]">

        <div className="flex items-center gap-4">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-sun/40">
            <Settings2 className="size-5 text-sun" />
          </div>

          <span className="font-mono text-lg tracking-[0.18em] text-sun">
            03
          </span>

        </div>

        <h3 className="mt-5 text-xl font-semibold">
          Digital operations
        </h3>

        <p className="mt-3 text-sm leading-6 text-white">
          Monitor, configure, troubleshoot, and operate charging
          infrastructure remotely.
        </p>

      </div>


      {/* =====================================================
          04 — INTEGRATIONS
      ===================================================== */}
      <div className="absolute bottom-[8%] right-[3%] w-[220px] sm:right-[8%] lg:right-[12%]">

        <div className="flex items-center gap-4">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-sun/40">
            <Code2 className="size-5 text-sun" />
          </div>

          <span className="font-mono text-lg tracking-[0.18em] text-sun">
            04
          </span>

        </div>

        <h3 className="mt-5 text-xl font-semibold">
          APIs & integrations
        </h3>

        <p className="mt-3 text-sm leading-6 text-white">
          Connect Trevia with the systems, applications, and workflows
          already used across your business.
        </p>

      </div>


      {/* =====================================================
          MOBILE CONNECTOR
      ===================================================== */}
      <div className="absolute left-1/2 top-1/2 -z-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sun/10 sm:size-[500px]" />

    </div>


    {/* =====================================================
        BOTTOM CONNECTION
    ===================================================== */}
    <div className="mt-6 flex flex-col items-center text-center">

      <div className="h-16 w-px bg-gradient-to-b from-sun/40 to-transparent" />

      <div className="flex items-center gap-8 sm:gap-16">

        {/* CMS */}
        <div className="flex flex-col items-center">

          <div className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-black">
            <MonitorCog className="size-5 text-sun" />
          </div>

          <span className="mt-4 text-sm font-medium text-white">
            Trevia CMS
          </span>

          <span className="mt-1 text-xs text-white">
            Operator experience
          </span>

        </div>


        {/* CONNECTION */}
        <div className="hidden h-px w-16 bg-sun/30 sm:block" />

        {/* APP */}
        <div className="flex flex-col items-center">

          <div className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-black">
            <Smartphone className="size-5 text-sun" />
          </div>

          <span className="mt-4 text-sm font-medium text-white">
            Trevia EV App
          </span>

          <span className="mt-1 text-xs text-white">
            Driver experience
          </span>

        </div>

      </div>


      <p className="mt-8 max-w-xl text-sm leading-6 text-white">
        One infrastructure layer powering connected experiences across the
        charging ecosystem.
      </p>

    </div>

  </Container>
</section>


      {/* TREVIA CMS */}
<section className="bg-ink text-white">
  <Container className="py-24 sm:py-28 lg:py-36">

    {/* CMS INTRO */}
    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

      <div className="lg:col-span-8">
        <Eyebrow>Trevia CMS</Eyebrow>

        <h2 className="mt-6 max-w-[11ch] text-balance text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
          Run every charger from one platform.
        </h2>
      </div>

      <div className="lg:col-span-4 lg:col-start-9">

        <p className="max-w-[34ch] text-base leading-7 text-white/55 sm:text-lg">
          Connect, monitor, operate, and scale every charger from one
          hardware-agnostic operating layer.
        </p>

        <div className="mt-7">
          <PrimaryButton to="/cms">
            Explore Trevia CMS
          </PrimaryButton>
        </div>

      </div>
    </div>


<div className="mt-16 sm:mt-20 lg:mt-24">
  <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#E4DDD3] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-5 lg:p-7">
    <div className="flex items-center justify-between px-3 pb-4 sm:px-4">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-ink/20" />
        <span className="size-2 rounded-full bg-ink/20" />
        <span className="size-2 rounded-full bg-ink/20" />
      </div>

      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
        Trevia CMS · Live
      </span>
    </div>

    <div className="screenshot-glow relative">
  <div className="group overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white">
    <img
      src="/images/cms-cpo-management.png"
      alt="Trevia CMS charging management dashboard"
      className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
    />
  </div>
</div>
  </div>
</div>


    <div className="cms-capability-carousel">

      <div className="cms-capability-track">

        {cmsFeatures.map(([index, title, copy]) => (
          <article
            key={index}
            className="cms-capability-slide"
          >
            <div className="cms-capability-main">

              <span className="cms-capability-number">
                {index}
              </span>

              <div className="cms-capability-text">
                <h3>
                  {title}
                </h3>

                <p>
                  {copy}
                </p>
              </div>

              <ArrowRight className="cms-capability-arrow" />

            </div>
          </article>
        ))}


        {/* Duplicate for seamless loop */}
        {cmsFeatures.map(([index, title, copy]) => (
          <article
            key={`duplicate-${index}`}
            className="cms-capability-slide"
            aria-hidden="true"
          >
            <div className="cms-capability-main">

              <span className="cms-capability-number">
                {index}
              </span>

              <div className="cms-capability-text">
                <h3>
                  {title}
                </h3>

                <p>
                  {copy}
                </p>
              </div>

              <ArrowRight className="cms-capability-arrow" />

            </div>
          </article>
        ))}

      </div>


      {/* Number navigation */}
      <div className="cms-capability-nav">

        {cmsFeatures.map(([index]) => (
          <span
            key={index}
            className="cms-capability-nav-item"
          >
            {index}
          </span>
        ))}

      </div>

    </div>

  </Container>
</section>

      {/* TREVIA EV App */}
      <section className="bg-ink">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Trevia EV App"
              title="One app to find charging, across networks."
              copy="Trevia EV App extends the same connected infrastructure to EV drivers, bringing charging discovery from multiple networks into a single experience."
            />

            <div className="mt-8">
              <SecondaryButton to="/drive">
                Explore Trevia Drive
              </SecondaryButton>
            </div>
          </div>

          <div className="parallax-soft relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-2xl border border-line bg-cream p-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-[190px] rotate-[-3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl">
                <img
                src="/images/drive-home.png"
                alt="Trevia EV App home screen"
                className="block aspect-[9/19.5] h-auto w-full object-cover"
                />
                </div>

<div className="hidden w-[190px] aspect-[9/19.5] rotate-[3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 sm:block">
  <img
    src="/images/drive-explore.png"
    alt="Trevia EV App explore screen"
    className="h-full w-full object-cover scale-[1.28]"
  />
</div>

            </div>
          </div>
        </Container>
      </section>


      {/* CTA */}
      <CTASection />
    </>
  );
}


export function PlatformPage() {
  const [activePlatformFeature, setActivePlatformFeature] = useState(null);

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageIntro
        dark
        eyebrow="Trevia Platform"
        title="The connected infrastructure layer for EV charging."
        copy="Trevia connects charging hardware, operating software, and the businesses that run EV charging networks — through one interoperable infrastructure layer."
      >
        <PrimaryButton to="/cms">
          Explore Trevia CMS
        </PrimaryButton>

        <SecondaryButton to="/technology">
          See the Technology
        </SecondaryButton>
      </PageIntro>


      {/* =========================================================
          PLATFORM INTRO
      ========================================================= */}
      <section className="border-y border-white bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-32">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <span className="font-mono text-xl uppercase tracking-[0.2em] text-sun">
                One infrastructure layer
              </span>

              <h2 className="mt-5 max-w-[10ch] text-4xl font-bold leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                From charger to operation.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white sm:text-lg">
              Charging networks depend on several systems working together.
              Trevia provides the digital infrastructure layer that connects
              those systems and turns charger data into operational control
              and connected experiences.
            </p>

          </div>


          {/* INFRASTRUCTURE VISUAL */}
          <div className="relative mt-20 overflow-hidden rounded-[2.5rem] border border-white bg-black">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,161,155,0.12),transparent_45%)]" />

            <div className="relative grid min-h-[430px] items-center px-6 py-12 sm:px-12 lg:grid-cols-[1fr_auto_1fr] lg:px-20">

              {/* LEFT */}
              <div className="space-y-10">

                <div className="flex items-center gap-5">

                  <div className="flex size-14 items-center justify-center rounded-2xl border border-sun bg-black">
                    <PlugZap className="size-6 text-sun" />
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                      Hardware
                    </span>

                    <p className="mt-1 text-lg font-semibold text-white">
                      Charging infrastructure
                    </p>
                  </div>

                </div>


                <div className="ml-7 h-12 w-px bg-sun" />


                <div className="flex items-center gap-5">

                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white bg-black">
                    <Radio className="size-6 text-sun" />
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                      Connectivity
                    </span>

                    <p className="mt-1 text-lg font-semibold text-white">
                      OCPP 1.6J · WebSocket
                    </p>
                  </div>

                </div>

              </div>


              {/* CENTRAL CORE */}
              <div className="relative my-16 flex justify-center lg:my-0">

                <div className="absolute size-64 rounded-full border border-sun" />
                <div className="absolute size-48 rounded-full border border-sun" />

                <div className="relative flex size-36 flex-col items-center justify-center rounded-full border-2 border-sun bg-black shadow-[0_0_80px_rgba(0,161,155,0.18)]">

                  <Layers3 className="size-8 text-sun" />

                  <span className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-sun">
                    Trevia
                  </span>

                  <span className="mt-1 text-xs font-medium text-white">
                    Infrastructure
                  </span>

                </div>

              </div>


              {/* RIGHT */}
              <div className="space-y-10">

                <div className="flex items-center gap-5 lg:justify-end lg:text-right">

                  <div className="order-2 flex size-14 items-center justify-center rounded-2xl border border-white bg-black">
                    <MonitorCog className="size-6 text-sun" />
                  </div>

                  <div className="order-1">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                      Operations
                    </span>

                    <p className="mt-1 text-lg font-semibold text-white">
                      Trevia CMS
                    </p>

                  </div>

                </div>


                <div className="ml-auto mr-7 h-12 w-px bg-sun" />


                <div className="flex items-center gap-5 lg:justify-end lg:text-right">

                  <div className="order-2 flex size-14 items-center justify-center rounded-2xl border border-white bg-black">
                    <Smartphone className="size-6 text-sun" />
                  </div>

                  <div className="order-1">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                      Experience
                    </span>

                    <p className="mt-1 text-lg font-semibold text-white">
                      Trevia EV App
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          PLATFORM CAPABILITIES
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-32">

          <div className="max-w-3xl">

            <span className="font-mono text-xl uppercase tracking-[0.2em] text-sun">
              Platform capabilities
            </span>

            <h2 className="mt-5 max-w-[12ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Three layers. One connected platform.
            </h2>

          </div>


          <div className="mt-16 divide-y divide-white border-y border-white">


            {/* =====================================================
                01 OPERATE
            ===================================================== */}
            <article className="py-8 sm:py-10">

              <div className="flex items-start justify-between gap-6">

                <div className="flex items-center gap-5">

                  <span className="font-mono text-xl text-sun">
                    01
                  </span>

                  <MonitorCog className="size-7 text-sun" />

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Operate
                  </h3>

                </div>


                <button
                  type="button"
                  onClick={() =>
                    setActivePlatformFeature(
                      activePlatformFeature === 0 ? null : 0
                    )
                  }
                  aria-label="Show Operate details"
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white text-sun transition-all duration-300 hover:bg-sun hover:text-black"
                >
                  <span className="relative block size-4">

                    <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />

                    <span
                      className={`absolute left-1/2 top-1/2 h-4 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
                        activePlatformFeature === 0
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
                    />

                  </span>
                </button>

              </div>


              <p className="mt-6 max-w-2xl text-sm leading-6 text-white sm:text-base">
                Trevia CMS provides the operational layer for monitoring,
                managing, controlling, and scaling OCPP-connected charging
                infrastructure.
              </p>


              {activePlatformFeature === 0 && (
                <div className="mt-8 border-t border-white pt-8">

                  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                    <div>

                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                        How Trevia approaches it
                      </span>

                      <h4 className="mt-4 text-xl font-semibold text-white">
                        One operational layer for the network.
                      </h4>

                    </div>


                    <div className="grid gap-8 sm:grid-cols-3">

                      <div>
                        <Eye className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Monitor
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          See charger status, telemetry, faults, and network
                          activity from one operational view.
                        </p>
                      </div>


                      <div>
                        <Settings2 className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Control
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Manage connected charging infrastructure and perform
                          operational actions remotely.
                        </p>
                      </div>


                      <div>
                        <Gauge className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Scale
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Operate multiple chargers and sites through the same
                          connected platform.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              )}

            </article>


            {/* =====================================================
                02 DISCOVER
            ===================================================== */}
            <article className="py-8 sm:py-10">

              <div className="flex items-start justify-between gap-6">

                <div className="flex items-center gap-5">

                  <span className="font-mono text-xl text-sun">
                    02
                  </span>

                  <MapPin className="size-7 text-sun" />

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Discover
                  </h3>

                </div>


                <button
                  type="button"
                  onClick={() =>
                    setActivePlatformFeature(
                      activePlatformFeature === 1 ? null : 1
                    )
                  }
                  aria-label="Show Discover details"
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white text-sun transition-all duration-300 hover:bg-sun hover:text-black"
                >
                  <span className="relative block size-4">

                    <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />

                    <span
                      className={`absolute left-1/2 top-1/2 h-4 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
                        activePlatformFeature === 1
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
                    />

                  </span>
                </button>

              </div>


              <p className="mt-6 max-w-2xl text-sm leading-6 text-white sm:text-base">
                Trevia EV App brings charging discovery across connected
                networks into one driver-facing experience.
              </p>


              {activePlatformFeature === 1 && (
                <div className="mt-8 border-t border-white pt-8">

                  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                    <div>

                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                        How Trevia approaches it
                      </span>

                      <h4 className="mt-4 text-xl font-semibold text-white">
                        A connected discovery experience.
                      </h4>

                    </div>


                    <div className="grid gap-8 sm:grid-cols-3">

                      <div>
                        <MapPin className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Find
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Surface charging infrastructure across connected
                          networks in one place.
                        </p>
                      </div>


                      <div>
                        <Search className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Explore
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Give drivers a consistent way to explore available
                          charging infrastructure.
                        </p>
                      </div>


                      <div>
                        <Route className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Navigate
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Turn charging discovery into a connected journey
                          towards the selected station.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              )}

            </article>


            {/* =====================================================
                03 CONNECT
            ===================================================== */}
            <article className="py-8 sm:py-10">

              <div className="flex items-start justify-between gap-6">

                <div className="flex items-center gap-5">

                  <span className="font-mono text-xl text-sun">
                    03
                  </span>

                  <Network className="size-7 text-sun" />

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Connect
                  </h3>

                </div>


                <button
                  type="button"
                  onClick={() =>
                    setActivePlatformFeature(
                      activePlatformFeature === 2 ? null : 2
                    )
                  }
                  aria-label="Show Connect details"
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white text-sun transition-all duration-300 hover:bg-sun hover:text-black"
                >
                  <span className="relative block size-4">

                    <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />

                    <span
                      className={`absolute left-1/2 top-1/2 h-4 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
                        activePlatformFeature === 2
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
                    />

                  </span>
                </button>

              </div>


              <p className="mt-6 max-w-2xl text-sm leading-6 text-white sm:text-base">
                Interoperable connectivity lets operators work across
                hardware vendors instead of being tied to a single
                manufacturer.
              </p>


              {activePlatformFeature === 2 && (
                <div className="mt-8 border-t border-white pt-8">

                  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                    <div>

                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                        How Trevia approaches it
                      </span>

                      <h4 className="mt-4 text-xl font-semibold text-white">
                        Open connectivity across hardware.
                      </h4>

                    </div>


                    <div className="grid gap-8 sm:grid-cols-3">

                      <div>
                        <Radio className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          OCPP 1.6J
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Built around OCPP 1.6J connectivity for communication
                          with supported charging hardware.
                        </p>
                      </div>


                      <div>
                        <Waypoints className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          WebSocket
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Maintain a persistent communication layer between
                          connected chargers and the platform.
                        </p>
                      </div>


                      <div>
                        <Cable className="size-5 text-sun" />

                        <h5 className="mt-4 text-sm font-semibold text-white">
                          Multi-vendor
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-white">
                          Create a foundation for operators working across
                          different hardware environments.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              )}

            </article>

          </div>

        </Container>
      </section>


      {/* =========================================================
          HOW IT FITS
      ========================================================= */}
      <section className="border-y border-white bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <span className="font-mono text-xl uppercase tracking-[0.2em] text-sun">
                How it fits
              </span>

              <h2 className="mt-5 max-w-[10ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                From charger connectivity to the systems around your network.
              </h2>

            </div>


            <div>

              <p className="max-w-2xl text-lg leading-7 text-white">
                Trevia connects chargers, operating software, and the
                businesses and systems that run EV charging networks through
                one interoperable infrastructure layer.
              </p>


              {/* FLOW */}
              <div className="mt-14">

                <div className="flex flex-wrap items-center gap-3">

                  <div className="flex items-center gap-3 border-b border-sun pb-3">

                    <PlugZap className="size-5 text-sun" />

                    <span className="text-sm font-semibold text-white">
                      Chargers
                    </span>

                  </div>


                  <ArrowRight className="size-4 text-sun" />


                  <div className="flex items-center gap-3 border-b border-sun pb-3">

                    <Radio className="size-5 text-sun" />

                    <span className="text-sm font-semibold text-white">
                      OCPP 1.6J
                    </span>

                  </div>


                  <ArrowRight className="size-4 text-sun" />


                  <div className="flex items-center gap-3 border-b border-sun pb-3">

                    <MonitorCog className="size-5 text-sun" />

                    <span className="text-sm font-semibold text-white">
                      Trevia CMS
                    </span>

                  </div>


                  <ArrowRight className="size-4 text-sun" />


                  <div className="flex items-center gap-3 border-b border-sun pb-3">

                    <Code2 className="size-5 text-sun" />

                    <span className="text-sm font-semibold text-white">
                      APIs / Integrations
                    </span>

                  </div>


                  <ArrowRight className="size-4 text-sun" />


                  <div className="flex items-center gap-3 border-b border-sun pb-3">

                    <Server className="size-5 text-sun" />

                    <span className="text-sm font-semibold text-white">
                      Operator systems
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          OPERATIONAL VISIBILITY
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <span className="font-mono text-xl uppercase tracking-[0.2em] text-sun">
                Operational visibility
              </span>

              <h2 className="mt-5 max-w-[10ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Know what is happening across the network.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white">
                Charger telemetry, sessions, transactions, faults, and
                network activity come together in Trevia CMS to create a
                clearer operational picture.
              </p>


              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <Activity className="size-5 text-sun" />

                  <span className="text-sm font-medium text-white">
                    Charger telemetry
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <Gauge className="size-5 text-sun" />

                  <span className="text-sm font-medium text-white">
                    Charger health
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <Database className="size-5 text-sun" />

                  <span className="text-sm font-medium text-white">
                    Sessions & transactions
                  </span>
                </div>

              </div>

            </div>


            {/* DASHBOARD */}
            <div className="relative overflow-visible rounded-[2rem] border border-white bg-black p-3">

  {/* Glow behind the PNG */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div className="absolute h-[70%] w-[70%] rounded-full bg-sun blur-[90px]" />
  </div>

  {/* PNG */}
  <div className="relative">
    <img
      src="/images/dashboard.png"
      alt="Trevia CMS dashboard"
      className="relative z-10 w-full rounded-[1.5rem] border border-white"
    />
  </div>

</div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          CMS + EV APP
      ========================================================= */}
      <section className="border-y border-white bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-32">

          <div className="max-w-3xl">

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sun">
              One layer. Multiple experiences.
            </span>

            <h2 className="mt-5 max-w-[11ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Built for operators and drivers.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white">
              Trevia separates the operational and driver experiences while
              keeping them connected through the same underlying infrastructure.
            </p>

          </div>


          <div className="mt-16 grid gap-12 lg:grid-cols-2">

            {/* CMS */}
            <div>

              <div className="flex items-center gap-5">

                <div className="flex size-14 items-center justify-center rounded-2xl bg-sun">
                  <MonitorCog className="size-6 text-black" />
                </div>

                <div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                    Operator side
                  </span>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Trevia CMS
                  </h3>

                </div>

              </div>


              <p className="mt-7 max-w-lg text-base leading-7 text-white">
                The primary commercial product for operating connected
                charging infrastructure — from connectivity and monitoring
                to sessions, tariffs, faults, and remote control.
              </p>


              <Link
                to="/cms"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sun"
              >
                Explore Trevia CMS
                <ArrowRight className="size-4" />
              </Link>

            </div>


            {/* EV APP */}
            <div className="lg:border-l lg:border-white lg:pl-12">

              <div className="flex items-center gap-5">

                <div className="flex size-14 items-center justify-center rounded-2xl bg-sun">
                  <Smartphone className="size-6 text-black" />
                </div>

                <div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sun">
                    Driver side
                  </span>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Trevia EV App
                  </h3>

                </div>

              </div>


              <p className="mt-7 max-w-lg text-base leading-7 text-white">
                The driver-facing experience for discovering charging across
                connected networks through one unified interface.
              </p>


              <Link
                to="/drive"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sun"
              >
                Explore Trevia EV App
                <ArrowRight className="size-4" />
              </Link>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          INTEROPERABILITY
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-32">

          <div className="border-y border-sun py-12 sm:py-16">

            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

              <div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sun">
                  Interoperability
                </span>

                <h2 className="mt-5 max-w-[10ch] text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl">
                  Built around open connectivity.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white">
                  Trevia is built around OCPP 1.6J and WebSocket connectivity,
                  giving operators a foundation for working across different
                  charging hardware environments.
                </p>

              </div>


              <div className="grid grid-cols-3 gap-3 sm:gap-5">

                <div className="flex min-h-32 flex-col justify-between border border-white p-5">
                  <Radio className="size-5 text-sun" />

                  <div>
                    <span className="font-mono text-[9px] text-sun">
                      PROTOCOL
                    </span>

                    <p className="mt-1 text-sm font-semibold text-white">
                      OCPP 1.6J
                    </p>
                  </div>
                </div>


                <div className="flex min-h-32 flex-col justify-between border border-white p-5">
                  <Network className="size-5 text-sun" />

                  <div>
                    <span className="font-mono text-[9px] text-sun">
                      NETWORK
                    </span>

                    <p className="mt-1 text-sm font-semibold text-white">
                      WebSocket
                    </p>
                  </div>
                </div>


                <div className="flex min-h-32 flex-col justify-between border border-white p-5">
                  <Cable className="size-5 text-sun" />

                  <div>
                    <span className="font-mono text-[9px] text-sun">
                      HARDWARE
                    </span>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Multi-vendor
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <CTASection
        title="Run your charging network as one connected system."
        copy="Talk with the Trevia team about the operating layer behind connected EV charging infrastructure."
      />
    </>
  );
}


export function CMSPage() {
  return (
    <>
      <PageIntro
      dark
        eyebrow="Trevia CMS · Charging Management Software"
        title="Run every charger from one platform."
        copy="Trevia CMS is the operating layer for charging networks: connecting chargers over OCPP and giving operators one place to monitor, operate, and scale."
      >
        <PrimaryButton />
        <SecondaryButton to="/technology">
          Review the Architecture
        </SecondaryButton>
      </PageIntro>

      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="The operating layer"
            title="Built for the day-to-day reality of running a charge point business."
            copy="Multiple sites, multiple hardware vendors, and one need: an operational view that helps teams act before issues become customer-facing problems."
          />

          <BulletList
            items={[
              "Centralised monitoring across connected sites.",
              "Remote operations where supported by connected hardware.",
              "Sessions, transactions, faults, tariffs, and data in one platform.",
            ]}
          />
        </div>

        <div className="screenshot-glow relative">
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
    <img
      src="/images/dashboard.png"
      alt="Trevia CMS dashboard"
      className="block h-auto w-full"
    />
  </div>
</div>
      </Container>
      </section>

      <section className="border-y border-white/10 bg-ink text-white">
  <Container className="py-12">
    <SectionTitle
      eyebrow="Capabilities"
      title="The operating surface behind a connected network."
    />

    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div className="capability-map">
        <svg
        className="capability-map-svg"
        viewBox="0 0 1000 520"
        preserveAspectRatio="none"
        >
          <path
            className="capability-route"
            d="
  M 100 90
  H 500
  H 900
  V 260
  H 500
  H 100
  V 430
  H 500
  H 900
"
          />

          <path
  className="capability-route-glow"
  d="
    M 100 90
    H 500
    H 900
    V 260
    H 500
    H 100
    V 430
    H 500
    H 900
"
/>

<circle r="5" className="capability-route-pulse">
  <animateMotion
    dur="5s"
    repeatCount="indefinite"
    path="
      M 100 90
      H 500
      H 900
      V 260
      H 500
      H 100
      V 430
      H 500
      H 900
    "
  />
</circle>
        </svg>

        {cmsFeatures.map(([index, title, copy], i) => (
          <div
            key={index}
            className={`capability-map-node capability-map-node-${i + 1}`}
          >
            <div className="capability-map-dot">
              <span>{index}</span>
            </div>

            <div className="capability-map-label">
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>

      <section className="bg-ink text-white">
  <Container className="reveal-up grid gap-10 py-12 lg:grid-cols-2">
    
    <div className="grid gap-5">
  <div className="screenshot-glow relative">
    <div className="cms-dashboard-reveal overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
      <img
        src="/images/stations.png"
        alt="Trevia CMS dashboard"
        className="block h-auto w-full"
      />
    </div>
  </div>

  <div className="screenshot-glow relative">
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
      <img
        src="/images/cms-cpo-management.png"
        alt="Trevia CMS CPO management"
        className="block h-auto w-full"
      />
    </div>
  </div>
</div>

    <div>
      <SectionTitle
        eyebrow="Security & reliability"
        title="Present in the operating model. Specific claims require confirmation."
        copy="Trevia CMS uses charger authentication and heartbeat signals to help identify when a connected charger becomes unavailable. Specific uptime figures, certifications, and compliance credentials are not published here until verified."
      />

      <div className="mt-6 rounded-xl border border-white/10 bg-white p-5 text-sm leading-relaxed text-ink">
      This page keeps reliability visible without turning unverified
      figures into public claims.
      </div>

      <p className="mt-4 text-xs leading-relaxed text-white/60">
        Specific uptime, certification, and compliance claims are subject to
        verification and applicable configuration.
      </p>
    </div>

  </Container>
</section>

      <section className="bg-ink text-white">
        <Container className="py-12">
          <SectionTitle
            eyebrow="Questions"
            title="Trevia CMS, clearly explained."
          />

          <div className="mt-8 max-w-3xl">
            <FAQ
              items={[
                {
                  question:
                    "Does Trevia CMS work with existing charger hardware?",
                  answer:
                    "Trevia CMS connects to chargers over OCPP 1.6J, the open protocol supported by most major charger hardware manufacturers, so it is designed to work across vendors.",
                },
                {
                  question: "Can it manage chargers across multiple sites?",
                  answer:
                    "Yes. Multi-site, multi-vendor management is a core design goal of the platform.",
                },
                {
                  question: "Does Trevia CMS handle payments?",
                  answer:"Trevia CMS can integrate with payment gateways while the operator retains ownership and control of its merchant account, payment collections, and settlements.",                },
                {
                  question: "Is there an API?",
                  answer:
                    "Trevia CMS is designed to expose charging, session, and operational data via APIs for integrations. Public documentation availability requires confirmation.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="See how Trevia CMS could fit your network."
        copy="Request a demo of the operating layer for your charging infrastructure."
      />
    </>
  );
}

const approaches = [
  {
    title: "Unified integration layer",

    description:
      "Connect networks, operators, and charging infrastructure through one operational layer.",

    icon: Waypoints,

    detailIcon: Network,

    detailTitle:
      "Connect every network through one layer.",

    detailCopy:
      "Trevia brings charging networks and operators together through a unified infrastructure layer, giving CPOs a consistent way to connect, exchange, and manage charging data.",

    points: [
      "Connect multiple charging networks and operators.",
      "Use standard interfaces such as OCPP and APIs.",
      "Bring charger and network data into one operational layer.",
    ],
  },


  {
    title: "Hardware agnostic",

    description:
      "Work across different charger brands, models, and connected hardware.",

    icon: PlugZap,

    detailIcon: Cable,

    detailTitle:
      "Work across different hardware.",

    detailCopy:
      "Trevia is designed around the charging infrastructure rather than a single hardware vendor, allowing operators to work with different charger brands and models.",

    points: [
      "Support heterogeneous charger environments.",
      "Connect different charger vendors and models.",
      "Reduce dependency on a single hardware ecosystem.",
    ],
  },


  {
    title: "Live data & intelligence",

    description:
      "Turn charging infrastructure into a real-time operational picture.",

    icon: Gauge,

    detailIcon: Eye,

    detailTitle:
      "See your network in real time.",

    detailCopy:
      "Trevia brings operational charging data into a central view, helping operators understand charger status, sessions, faults, and network activity as it happens.",

    points: [
      "Monitor charger status and availability.",
      "Surface sessions and operational events.",
      "Identify faults and network activity from one view.",
    ],
  },


  {
    title: "Automation & remote control",

    description:
      "Reduce manual intervention with remote operations and automated workflows.",

    icon: RotateCcw,

    detailIcon: Settings2,

    detailTitle:
      "Automate operations at scale.",

    detailCopy:
      "Trevia enables operators to move routine operational tasks into digital workflows, with remote actions and configuration capabilities that reduce unnecessary manual intervention.",

    points: [
      "Perform remote operational actions.",
      "Reduce dependency on repeated site visits.",
      "Build more consistent operational workflows.",
    ],
  },


  {
    title: "Scales with your network",

    description:
      "Manage growing charging networks, sites, and regions from one platform.",

    icon: MapPinned,

    detailIcon: Layers3,

    detailTitle:
      "Grow without adding complexity.",

    detailCopy:
      "Trevia provides a central operational layer across charging sites and infrastructure, giving CPOs a consistent way to manage an expanding network.",

    points: [
      "Manage multiple charging sites from one platform.",
      "Maintain visibility across regions and assets.",
      "Expand the network without creating disconnected operational systems.",
    ],
  },
];

export function DrivePage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageIntro
        dark
        eyebrow="Trevia EV App · For EV Drivers"
        title="One app to discover charging, across networks."
        copy="Trevia EV App brings charging discovery from multiple operators and networks into one unified driver experience — powered by the same infrastructure layer that connects Trevia CMS."
      >
        <PrimaryButton to="/contact">
          Request Early Access
        </PrimaryButton>

        <SecondaryButton to="/contact">
          Download the App
        </SecondaryButton>
      </PageIntro>


      {/* =========================================================
          APP PREVIEW
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT */}
            <div>
              <SectionTitle
                eyebrow="Charging discovery"
                title="Everything drivers need to find their next charge."
                copy="A unified discovery experience makes it easier to find charging infrastructure without navigating separate operator applications."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {/* Discover */}
                <div className="rounded-2xl border border-black bg-white p-6 text-black">
                  <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-black">
                    <MapPin className="size-5 text-sun" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    Discover
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-black">
                    Find charging stations across connected networks.
                  </p>
                </div>

                {/* Explore */}
                <div className="rounded-2xl border border-black bg-white p-6 text-black">
                  <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-black">
                    <Search className="size-5 text-sun" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    Explore
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-black">
                    Explore available charging infrastructure in one place.
                  </p>
                </div>

                {/* Navigate */}
                <div className="rounded-2xl border border-black bg-white p-6 text-black">
                  <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-black">
                    <Route className="size-5 text-sun" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    Navigate
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-black">
                    Move from charging discovery to your destination.
                  </p>
                </div>

                {/* Connected */}
                <div className="rounded-2xl border border-black bg-white p-6 text-black">
                  <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-black">
                    <Waypoints className="size-5 text-sun" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    Connected
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-black">
                    Built on the infrastructure layer behind Trevia CMS.
                  </p>
                </div>

              </div>
            </div>


            {/* RIGHT — APP SCREENS */}
            <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0B] p-8">

              <div className="absolute left-8 top-8 size-32 rounded-full bg-sun/10 blur-3xl" />

              <div className="absolute bottom-10 right-10 size-24 rounded-full bg-sun/5 blur-2xl" />

              <div className="relative flex items-end justify-center gap-4 sm:gap-8">

                {/* HOME SCREEN */}
                <div className="w-[175px] rotate-[-5deg] overflow-hidden rounded-[2rem] border-[5px] border-white bg-white shadow-[0_25px_60px_rgba(0,0,0,0.6)] sm:w-[205px]">
                  <img
                    src="/images/drive-home.png"
                    alt="Trevia EV App home screen"
                    className="block w-full"
                  />
                </div>

                {/* EXPLORE SCREEN */}
                <div className="hidden w-[205px] rotate-[5deg] overflow-hidden rounded-[2rem] border-[5px] border-white bg-white shadow-[0_25px_60px_rgba(0,0,0,0.6)] sm:block">
                  <img
                    src="/images/drive-explore.png"
                    alt="Trevia EV App explore screen"
                    className="block h-full w-full object-cover scale-[1.22]"
                  />
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* =========================================================
          DRIVER EXPERIENCE
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-16 lg:py-20">

          <div className="max-w-3xl">
            <SectionTitle
              eyebrow="The driver experience"
              title="Charging should feel connected, not fragmented."
              copy="EV drivers increasingly interact with charging networks that operate independently. Trevia EV App provides a single discovery layer across connected infrastructure."
            />
          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* MULTIPLE APPS */}
            <div className="rounded-2xl border border-black bg-white p-6 text-black">

              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-black">
                <Smartphone className="size-5 text-sun" />
              </div>

              <h3 className="text-lg font-semibold">
                Multiple apps
              </h3>

              <p className="mt-3 text-base leading-relaxed text-black">
                Drivers can encounter separate applications for different charging operators.
              </p>

            </div>


            {/* FRAGMENTED DISCOVERY */}
            <div className="rounded-2xl border border-black bg-white p-6 text-black">

              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-black">
                <Map className="size-5 text-sun" />
              </div>

              <h3 className="text-lg font-semibold">
                Fragmented discovery
              </h3>

              <p className="mt-3 text-base leading-relaxed text-black">
                Charging information can be distributed across different networks and platforms.
              </p>

            </div>


            {/* CONNECTED LAYER */}
            <div className="rounded-2xl border border-black bg-white p-6 text-black">

              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-black">
                <Layers3 className="size-5 text-sun" />
              </div>

              <h3 className="text-lg font-semibold">
                One connected layer
              </h3>

              <p className="mt-3 text-base leading-relaxed text-black">
                Trevia brings connected charging infrastructure into one driver-facing experience.
              </p>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-16 lg:py-20">

          <div className="max-w-3xl">
            <SectionTitle
              eyebrow="Connected by design"
              title="One infrastructure layer connects drivers and charging operators."
              copy="Trevia EV App sits on top of the same infrastructure layer that powers Trevia CMS, connecting the driver experience with charging networks and operational systems."
            />
          </div>


          <div className="mt-14 rounded-3xl border border-white/10 bg-[#0B0B0B] p-6 sm:p-10">

            <div className="grid gap-5 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] lg:items-center">

              {/* DRIVER */}
              <div className="rounded-2xl border border-white/10 bg-black p-6">

                <div className="flex size-12 items-center justify-center rounded-xl bg-sun">
                  <UserRound className="size-5 text-black" />
                </div>

                <p className="mt-5 font-mono text-2xl uppercase tracking-[0.18em] text-sun">
                  DRIVER
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  EV Driver
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white">
                  Discovers and interacts with charging infrastructure.
                </p>

              </div>


              {/* ARROW */}
              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight className="size-6 text-sun" />
              </div>


              {/* TREVIA INFRASTRUCTURE */}
              <div className="rounded-2xl border border-sun/30 bg-black p-6 shadow-[0_0_50px_rgba(0,161,155,0.08)]">

                <div className="flex size-12 items-center justify-center rounded-xl bg-sun">
                  <Server className="size-5 text-black" />
                </div>

                <p className="mt-5 font-mono text-2xl uppercase tracking-[0.18em] text-sun">
                  TREVIA INFRASTRUCTURE
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  Connected Charging Layer
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white">
                  Connects charging networks, charger data and digital experiences.
                </p>


                {/* INFRASTRUCTURE ITEMS */}
                <div className="mt-6 grid grid-cols-2 gap-2">

                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3">
                    <PlugZap className="size-4 text-sun" />
                    <p className="mt-2 text-xs text-white/70">
                      OCPP
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3">
                    <Radio className="size-4 text-sun" />
                    <p className="mt-2 text-xs text-white/70">
                      Networks
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3">
                    <Database className="size-4 text-sun" />
                    <p className="mt-2 text-xs text-white/70">
                      Charger data
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3">
                    <Code2 className="size-4 text-sun" />
                    <p className="mt-2 text-xs text-white/70">
                      APIs
                    </p>
                  </div>

                </div>

              </div>


              {/* ARROW */}
              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight className="size-6 text-sun" />
              </div>


              {/* NETWORKS */}
              <div className="rounded-2xl border border-white/10 bg-black p-6">

                <div className="flex size-12 items-center justify-center rounded-xl bg-white">
                  <RadioTower className="size-5 text-sun" />
                </div>

                <p className="mt-5 font-mono text-2xl uppercase tracking-[0.18em] text-sun">
                  CONNECTED NETWORKS
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  Charging Infrastructure
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white">
                  Charging networks and connected infrastructure provide the underlying data.
                </p>

              </div>

            </div>


            {/* CMS CONNECTION */}
            <div className="mt-6 border-t border-white/10 pt-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-black">
                    <Settings2 className="size-4 text-sun" />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Trevia CMS
                    </p>

                    <p className="text-xs text-white/50">
                      Operator-side management on the same infrastructure layer.
                    </p>
                  </div>

                </div>


                <Link
                  to="/cms"
                  className="inline-flex items-center gap-2 text-xs font-medium text-sun"
                >
                  Explore Trevia CMS
                  <ArrowRight className="size-3.5" />
                </Link>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          APP + CMS
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-16 lg:py-20">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* APP */}
            <div className="rounded-3xl border border-black bg-white p-8 text-black lg:p-10">

              <div className="flex size-12 items-center justify-center rounded-xl bg-black">
                <Smartphone className="size-5 text-sun" />
              </div>

              <p className="mt-6 font-mono text-xl uppercase tracking-[0.18em] text-sun">
                DRIVER SIDE
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Trevia EV App
              </h3>

              <p className="mt-4 max-w-md text-base leading-relaxed text-black">
                A unified charging discovery experience for EV drivers across connected networks.
              </p>

              <Link
                to="/drive"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-black"
              >
                Explore the app
                <ArrowRight className="size-4 text-sun" />
              </Link>

            </div>


            {/* CMS */}
            <div className="rounded-3xl border border-black bg-white p-8 text-black lg:p-10">

              <div className="flex size-12 items-center justify-center rounded-xl bg-black">
                <MonitorCog className="size-5 text-sun" />
              </div>

              <p className="mt-6 font-mono text-xl uppercase tracking-[0.18em] text-sun">
                OPERATOR SIDE
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Trevia CMS
              </h3>

              <p className="mt-4 max-w-md text-base leading-relaxed text-black">
                The operational layer for monitoring, managing and scaling connected charging infrastructure.
              </p>

              <Link
                to="/cms"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-black"
              >
                Explore Trevia CMS
                <ArrowRight className="size-4 text-sun" />
              </Link>

            </div>

          </div>

        </Container>
      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-black text-white">
        <Container className="py-16 lg:py-20">

          <SectionTitle
            eyebrow="Questions"
            title="Trevia EV App, clearly explained."
          />

          <div className="mt-10 max-w-3xl">

            <FAQ
              items={[
                {
                  question: "Is Trevia EV App connected to Trevia CMS?",
                  answer:
                    "Yes. Both are connected through Trevia's underlying charging infrastructure layer, allowing charging data from connected networks to support the driver experience.",
                },
                {
                  question:
                    "Is the app currently available on Android or iOS?",
                  answer:
                    "Availability is not described here until the current app store status is confirmed.",
                },
                {
                  question:
                    "How many networks does Trevia EV App cover?",
                  answer:
                    "No network count is published here without verified current coverage information.",
                },
              ]}
            />

          </div>

        </Container>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <CTASection
        title="A connected charging experience for every driver."
        copy="Explore the driver-facing side of Trevia's connected EV charging infrastructure."
      />
    </>
  );
}

const technologyFeatures = [
  {
    title: "OCPP 1.6J",
    copy: "The open protocol that forms the foundation of Trevia's hardware-agnostic positioning.",
    icon: Cable,
    visual: "protocol",
  },
  {
    title: "WebSocket connectivity",
    copy: "Persistent connections enable real-time status updates rather than periodic polling.",
    icon: Waypoints,
    visual: "connection",
  },
  {
    title: "Authentication & heartbeats",
    copy: "Connected chargers authenticate and send heartbeat signals so unavailable devices can be detected.",
    icon: Radio,
    visual: "heartbeat",
  },
  {
    title: "Commands & remote operations",
    copy: "Where supported by hardware, Trevia CMS can issue commands such as querying status or resetting a charger.",
    icon: SlidersHorizontal,
    visual: "command",
  },
  {
    title: "Telemetry, sessions & transactions",
    copy: "The platform ingests status, faults, energy readings, session data, and transaction-level records.",
    icon: Gauge,
    visual: "telemetry",
  },
  {
    title: "APIs & integrations",
    copy: "Charging, session, and operational data is designed to be exposed to reporting, billing, and fleet systems.",
    icon: Layers3,
    visual: "api",
  },
];


export function TechnologyPage() {
  const technologyBlocks = [
    {
      number: "01",
      title: "Open Connectivity",
      copy: "Connect charging infrastructure through open communication standards.",
      icon: "connect",
    },
    {
      number: "02",
      title: "Hardware Agnostic",
      copy: "Work across charging hardware from different vendors.",
      icon: "hardware",
    },
    {
      number: "03",
      title: "Real-Time Visibility",
      copy: "Turn live charger data into operational visibility.",
      icon: "monitor",
    },
    {
      number: "04",
      title: "Remote Operations",
      copy: "Monitor and manage connected infrastructure remotely.",
      icon: "remote",
    },
    {
      number: "05",
      title: "API Ready",
      copy: "Connect charging data with the systems around your network.",
      icon: "api",
    },
    {
      number: "06",
      title: "Built to Scale",
      copy: "Support growing networks, sites, and charging operations.",
      icon: "scale",
    },
  ];

  const protocolItems = [
    {
      title: "Connect",
      copy: "Bring compatible chargers into Trevia CMS.",
      icon: "plug",
    },
    {
      title: "Communicate",
      copy: "Exchange charger status and operational data.",
      icon: "signal",
    },
    {
      title: "Operate",
      copy: "Turn connected data into actionable operations.",
      icon: "control",
    },
  ];

  const integrationItems = [
    "OCPP Connectivity",
    "APIs & Integrations",
    "Multi-Vendor Support",
    "Hardware Agnostic",
  ];

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
              Technology
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Built for interoperability.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              Technology that connects charging hardware, networks, and
              digital systems without locking operators into one ecosystem.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-sun px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
            >
              Talk to Our Team
              <span className="ml-3 text-lg">→</span>
            </a>

          </div>
        </div>
      </section>


      {/* MAIN TECHNOLOGY VISUAL */}
      <section className="bg-black pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="screenshot-glow relative">
            <div className="group overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-2xl">
              <img
                src="/images/dashboard.png"
                alt="Trevia CMS dashboard"
                className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            </div>
          </div>

        </div>
      </section>


      {/* CORE TECHNOLOGY */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
              Core technology
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              The infrastructure behind connected charging.
            </h2>
          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {technologyBlocks.map((item) => (
              <div
                key={item.number}
                className="group rounded-[1.4rem] border border-white bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-sun"
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-black">
                    <TechnologyIcon type={item.icon} />
                  </div>

                  <span className="font-mono text-xs text-sun">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white">
                  {item.copy}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* OCPP */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
                OCPP connectivity
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Connect the hardware. Keep control.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white sm:text-lg">
                Trevia uses open charging communication to connect compatible
                infrastructure with the software layer operators use every day.
              </p>
            </div>


            <div className="grid gap-4 sm:grid-cols-3">

              {protocolItems.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.4rem] border border-white bg-black p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun text-black">
                    <TechnologyIcon type={item.icon} />
                  </div>

                  <span className="mt-7 block font-mono text-xs text-sun">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.copy}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* INTEROPERABILITY */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* VISUAL */}
            <div className="screenshot-glow relative order-2 lg:order-1">

              <div className="overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-2xl">
                <img
                  src="/images/cms-cpo-management.png"
                  alt="Trevia CMS charging management"
                  className="block h-auto w-full"
                />
              </div>

            </div>


            {/* CONTENT */}
            <div className="order-1 lg:order-2">

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
                Interoperability
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                One platform across different hardware.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white sm:text-lg">
                Charging networks are rarely built around one manufacturer.
                Trevia is designed to work across the ecosystem.
              </p>


              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                {integrationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sun text-black">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="M6 12.5L10 16.5L18 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* DATA / OPERATIONS */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-[1.5rem] border border-white bg-black p-7 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-black">
                <TechnologyIcon type="data" />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-white">
                Turn charger data into visibility.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white">
                Status, sessions, telemetry, and operational events become
                visible through one connected platform.
              </p>
            </div>


            <div className="rounded-[1.5rem] border border-white bg-black p-7 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-black">
                <TechnologyIcon type="integration" />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-white">
                Connect with the systems around you.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white">
                APIs and integrations allow charging infrastructure to work
                alongside the wider digital environment.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="rounded-[2rem] bg-sun px-7 py-10 text-black sm:px-10 sm:py-12 lg:px-14">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
                Technology built around your network
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Connect your charging ecosystem with Trevia.
              </h2>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Request a Demo
                <span className="ml-3 text-lg">→</span>
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


/* ================================= */
/* TECHNOLOGY ICONS                  */
/* ================================= */

function TechnologyIcon({ type }) {
  const iconClass = "h-7 w-7";

  if (type === "connect" || type === "plug") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <path
          d="M8 7V4M16 7V4M6 7H18V12C18 15.314 15.314 18 12 18C8.686 18 6 15.314 6 12V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }


  if (type === "hardware") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M8 9H16M8 13H13M8 16H11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }


  if (type === "monitor") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M8 21H16M12 17V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }


  if (type === "remote" || type === "control") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M12 8V12L15 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }


  if (type === "api" || type === "integration") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <circle
          cx="6"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="18"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="18"
          cy="17"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M9 11L15 8M9 13L15 16"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }


  if (type === "scale") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <path
          d="M4 19L10 13L14 16L21 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M16 8H21V13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }


  if (type === "signal") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <path
          d="M5 19C9 15 15 15 19 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M8 16C10.5 13.5 13.5 13.5 16 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M11 13C11.7 12.3 12.3 12.3 13 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <circle
          cx="12"
          cy="19"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    );
  }


  if (type === "data") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
      >
        <path
          d="M5 20V10M12 20V5M19 20V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }


  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


const solutionContent = {
  cpos: {
    to: "/solutions/cpos",
    label: "For CPOs & Operators",
    title: "One operating layer instead of one dashboard per vendor.",
    problem:
      "Operational fragmentation across sites, hardware vendors, and network environments makes charging infrastructure harder to run as scale increases.",
    solution:
      "Trevia CMS gives operators centralised, OCPP-based monitoring and control across every connected charger.",
    outcome:
      "Add sites and hardware without adding operational complexity, and act on faults and utilisation data instead of discovering issues after the fact.",
    focus: [
      "Centralised operations",
      "Charger monitoring",
      "Remote operations",
      "Fault visibility",
      "Multi-site management",
      "Interoperability",
    ],
  },

  fleets: {
    to: "/solutions/fleets",
    label: "For Fleets",
    title: "Charging visibility tied to fleet operations.",
    problem:
      "Fleet charging requires a clear view of connected infrastructure, sessions, and operational status across the places vehicles depend on.",
    solution:
      "Trevia CMS provides centralised charging visibility and operational data through the same layer that connects chargers across sites and vendors.",
    outcome:
      "Give fleet teams a clearer operating view and a foundation for connecting charging data to their own systems.",
    focus: [
      "Charging visibility",
      "Operational control",
      "Fleet charging workflows",
      "Centralised management",
    ],
  },

  enterprises: {
    to: "/solutions/enterprises",
    label: "For Enterprises",
    title: "Manage workplace and destination charging as one asset class.",
    problem:
      "Workplace and destination charging can become another fragmented infrastructure layer when sites and vendors are managed separately.",
    solution:
      "Trevia CMS brings connected chargers into one operational view, with monitoring, fault visibility, sessions, and multi-site control.",
    outcome:
      "Make charging infrastructure easier to see, operate, and grow across the enterprise footprint.",
    focus: [
      "Workplace charging",
      "Destination charging",
      "Operational visibility",
      "Multi-site infrastructure",
    ],
  },

  energy: {
    to: "/solutions/energy",
    label: "For Energy & Utilities",
    title: "Network-level visibility for connected charging infrastructure.",
    problem:
      "Energy companies need charging infrastructure data and operating visibility across networks that may span sites, vendors, and systems.",
    solution:
      "Trevia provides an interoperable operating layer with OCPP-based connectivity, operational data, and integration pathways.",
    outcome:
      "Build a clearer view of charging infrastructure and the systems around it without being tied to a single hardware vendor.",
    focus: [
      "Charging infrastructure visibility",
      "Network operations",
      "Integration",
      "Interoperability",
    ],
  },

  government: {
    to: "/solutions/government",
    label: "For Government & Infrastructure Bodies",
    title: "A coordinated view of public charging infrastructure.",
    problem:
      "Multi-site public infrastructure is difficult to oversee when operational information is split across vendors and deployments.",
    solution:
      "Trevia CMS creates a central operating layer for connected chargers, with visibility into status, faults, sessions, and network operations.",
    outcome:
      "Support coordinated operational oversight as public charging infrastructure is deployed across sites and environments.",
    focus: [
      "Infrastructure visibility",
      "Multi-site deployment",
      "Centralised oversight",
      "Vendor-neutral operations",
    ],
  },
};


export function SolutionsPage() {
  return (
    <>
      <PageIntro
      dark
        eyebrow="Solutions"
        title="One operating layer for the people running charging infrastructure."
        copy="Trevia CMS is designed around the needs of operators, fleets, enterprises, energy companies, and government infrastructure bodies."
      >
        <PrimaryButton />
        <SecondaryButton to="/technology">
          See the Technology
        </SecondaryButton>
      </PageIntro>
            <section className="reveal-up border-y border-line bg-ink-2 text-cream">
        <Container className="py-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Eyebrow>Charging ecosystem</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                One layer connecting the network.
              </h2>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-cream/40 sm:block">
              TREVIA / ECOSYSTEM
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-black">
            <div className="pointer-events-none absolute inset-0 dark-grid opacity-40" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">

              {/* Chargers */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
                {["Charger 01", "Charger 02", "Charger 03", "Charger 04"].map(
                  (charger, index) => (
                    <div
                      key={charger}
                      className="group rounded-lg border border-cream/10 bg-cream/[0.04] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sun/50"
                    >
                      <Cable className="mx-auto size-5 text-sun-soft" />

                      <span className="mt-2 block font-mono text-sm font-medium text-white">
                        {charger}
                      </span>

                      <span className="mt-1 block text-xs text-white/70">
                        OCPP
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* Trevia */}
              <div className="relative flex flex-col items-center">
                <div className="hidden w-full items-center lg:flex">
                  <div className="flow-line h-px flex-1 bg-sun/50" />

                  <div className="mx-2 size-2 rounded-full bg-sun animate-pulse" />

                  <div className="flow-line h-px flex-1 bg-sun/50" />
                </div>

                <div className="w-full rounded-2xl border border-sun/40 bg-sun px-6 py-7 text-center shadow-lg shadow-black/20">
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink">
                    Operating layer
                  </span>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-ink">
                    TREVIA
                  </h3>
                  <p className="mt-2 text-sm font-medium text-ink">
                    Connect · Monitor · Operate · Integrate
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="size-1.5 animate-pulse rounded-full bg-sun" />
                  <span className="font-mono text-[8px] uppercase tracking-wider text-cream/40">
                    Live infrastructure layer
                  </span>
                </div>
              </div>

              {/* Ecosystem */}
              <div className="grid grid-cols-2 gap-2">
                {["CPOs", "Fleets", "Enterprises", "Utilities", "Government", "Drivers"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-cream/10 bg-cream/[0.04] px-3 py-3 text-center transition-all duration-300 hover:border-sun/40 hover:bg-sun/10"
                    >
                      <span className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-white">

                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Mobile connection flow */}
            <div className="relative mt-6 flex items-center justify-center gap-2 lg:hidden">
              <span className="font-mono text-[8px] uppercase tracking-wider text-cream/35">
                Chargers
              </span>
              <ArrowRight className="size-3 text-sun" />
              <span className="font-mono text-[8px] uppercase tracking-wider text-sun">
                Trevia
              </span>
              <ArrowRight className="size-3 text-sun" />
              <span className="font-mono text-[8px] uppercase tracking-wider text-cream/35">
                Network
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
  <Container className="py-14 sm:py-16">
    <SectionTitle
      eyebrow="Solutions"
      title="Built around the people running charging infrastructure."
    />

    <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
      {Object.entries(solutionContent).map(([key, item], index) => (
        <Link
          key={key}
          to={item.to}
          className={`solution-item group relative block border-t border-white/10 pt-5 ${
            index === 2 ? "md:col-span-2 md:mx-auto md:w-[48%]" : ""
          }`}
        >
          <div className="flex items-start justify-between gap-6">
            <span className="font-mono text-xl font-semibold tracking-[0.16em] text-sun">
              {String(index + 1).padStart(2, "0")}
            </span>

            <ArrowRight className="mt-1 size-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sun" />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-sun">
            {item.label.replace("For ", "FOR ")}
          </p>

          <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            {item.title}
          </h3>

          <div className="solution-item-line mt-6 h-px w-0 bg-sun transition-all duration-500 group-hover:w-full" />

          <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-white/45 transition-colors duration-300 group-hover:text-white">
            Explore solution
          </span>
        </Link>
      ))}
    </div>
  </Container>
</section>

      <CTASection />
    </>
  );
}

const solutionWorkflows = {
  cpos: [
    ["01", "Connect chargers", "Bring chargers across vendors into one OCPP-based operating layer."],
    ["02", "Monitor & operate", "Track status, faults, sessions, and connected sites from one platform."],
    ["03", "Scale operations", "Add sites and hardware without adding another operational dashboard."],
  ],

  fleets: [
    ["01", "Connect charging", "Bring charging infrastructure across fleet sites into one connected view."],
    ["02", "Monitor usage", "Track charger status, sessions, and operational data across sites."],
    ["03", "Connect fleet systems", "Use charging data as a foundation for fleet workflows and integrations."],
  ],

  enterprises: [
    ["01", "Connect sites", "Bring workplace and destination chargers into one operational layer."],
    ["02", "Monitor infrastructure", "See charger status, faults, sessions, and site-level activity."],
    ["03", "Manage at scale", "Operate charging infrastructure consistently across the enterprise footprint."],
  ],

  energy: [
    ["01", "Connect infrastructure", "Connect charging assets across sites and hardware vendors through OCPP."],
    ["02", "Build network visibility", "Bring operational and charging data into one connected view."],
    ["03", "Integrate systems", "Expose charging data through APIs and integration pathways."],
  ],

  government: [
    ["01", "Connect deployments", "Bring public charging infrastructure across sites into one operating layer."],
    ["02", "Monitor operations", "Maintain visibility into charger status, faults, sessions, and deployments."],
    ["03", "Coordinate oversight", "Support consistent operational visibility across public infrastructure."],
  ],
};

export function SolutionDetailPage({ type }) {
  const pageData = {
    cpos: {
      eyebrow: "CPOs & Charging Operators",
      title: "Run your charging network from one platform.",
      description:
        "Connect, monitor, and operate charging infrastructure across your network.",
      image: "/images/cpo-analytics.png",
      imageAlt: "Trevia CPO analytics dashboard",

      howTitle: "Everything connected. Everything visible.",

      steps: [
        {
          number: "01",
          title: "Connect",
          copy: "Connect chargers, sites, and networks through open infrastructure.",
          icon: "connect",
        },
        {
          number: "02",
          title: "Monitor",
          copy: "See station status, sessions, faults, and network activity in real time.",
          icon: "monitor",
        },
        {
          number: "03",
          title: "Operate",
          copy: "Manage charging operations, access, tariffs, and network activity.",
          icon: "operate",
        },
      ],

      capabilities: [
        {
          title: "Charger Management",
          copy: "Manage connected charging infrastructure.",
          icon: "charger",
        },
        {
          title: "Real-Time Monitoring",
          copy: "See network activity as it happens.",
          icon: "monitor",
        },
        {
          title: "Remote Operations",
          copy: "Control charging infrastructure remotely.",
          icon: "remote",
        },
        {
          title: "Fault Visibility",
          copy: "Identify operational issues quickly.",
          icon: "fault",
        },
        {
          title: "Multi-Site Management",
          copy: "Operate multiple locations centrally.",
          icon: "sites",
        },
        {
          title: "Analytics",
          copy: "Understand network performance and usage.",
          icon: "analytics",
        },
      ],

      featureTitle: "A complete view of your charging network.",
      featureCopy:
        "Trevia CMS brings charging infrastructure, sessions, and operational intelligence into one connected view.",

      useCases: [
        {
          title: "Public Charging",
          copy: "Operate connected public charging networks.",
        },
        {
          title: "Multi-Site Networks",
          copy: "Manage charging across multiple locations.",
        },
        {
          title: "White Label Operations",
          copy: "Power your own charging experience with Trevia.",
        },
      ],
    },

    fleets: {
      eyebrow: "Fleet Charging",
      title: "Fleet charging, connected to your operations.",
      description:
        "Manage vehicles, drivers, charging access, and charging activity from one connected platform.",
      image: "/images/fleet-overview.png",
      imageAlt: "Trevia fleet operator dashboard",

      howTitle: "Charging that works around your fleet.",

      steps: [
        {
          number: "01",
          title: "Organize",
          copy: "Connect vehicles, drivers, teams, and charging locations.",
          icon: "fleet",
        },
        {
          number: "02",
          title: "Track",
          copy: "Understand charging sessions, usage, and fleet activity.",
          icon: "analytics",
        },
        {
          number: "03",
          title: "Scale",
          copy: "Add vehicles, sites, teams, and charging programs without another silo.",
          icon: "scale",
        },
      ],

      capabilities: [
        {
          title: "Fleet Management",
          copy: "Connect vehicles and fleet activity.",
          icon: "fleet",
        },
        {
          title: "Access Control",
          copy: "Control who can charge and where.",
          icon: "access",
        },
        {
          title: "Fleet Teams",
          copy: "Organize drivers and vehicles.",
          icon: "teams",
        },
        {
          title: "Charging Analytics",
          copy: "Understand fleet charging activity.",
          icon: "analytics",
        },
        {
          title: "Multi-Site Operations",
          copy: "Manage charging across locations.",
          icon: "sites",
        },
        {
          title: "Multi-Vendor Support",
          copy: "Connect hardware from different vendors.",
          icon: "vendors",
        },
      ],

      featureTitle: "See the charging operation behind every vehicle.",
      featureCopy:
        "Trevia CMS gives fleet teams a connected view of charging infrastructure, sessions, and operational activity.",

      useCases: [
        {
          title: "Company Fleets",
          copy: "Manage charging for your own vehicles.",
        },
        {
          title: "Logistics",
          copy: "Support high-utilization fleet operations.",
        },
        {
          title: "Workplace Charging",
          copy: "Connect employee and fleet charging.",
        },
      ],
    },

    enterprises: {
      eyebrow: "Enterprises",
      title: "Make charging part of your operations.",
      description:
        "Manage workplace and destination charging across your enterprise through one connected platform.",
      image: "/images/dashboard.png",
      imageAlt: "Trevia CMS dashboard",

      howTitle: "One view across your charging estate.",

      steps: [
        {
          number: "01",
          title: "Connect",
          copy: "Bring charging infrastructure across your locations into one platform.",
          icon: "connect",
        },
        {
          number: "02",
          title: "Control",
          copy: "Manage users, access, charging sessions, and operational rules.",
          icon: "control",
        },
        {
          number: "03",
          title: "Understand",
          copy: "See usage and performance across your enterprise locations.",
          icon: "analytics",
        },
      ],

      capabilities: [
        {
          title: "Workplace Charging",
          copy: "Manage charging across offices.",
          icon: "workplace",
        },
        {
          title: "Access Management",
          copy: "Control charging access.",
          icon: "access",
        },
        {
          title: "Multi-Site Visibility",
          copy: "See activity across locations.",
          icon: "sites",
        },
        {
          title: "Usage Analytics",
          copy: "Understand charging patterns.",
          icon: "analytics",
        },
        {
          title: "Hardware Agnostic",
          copy: "Connect different charging hardware.",
          icon: "hardware",
        },
        {
          title: "Centralized Operations",
          copy: "Run enterprise charging centrally.",
          icon: "operations",
        },
      ],

      featureTitle: "A single view across your charging estate.",
      featureCopy:
        "Trevia gives enterprise teams the visibility needed to manage charging infrastructure across multiple locations.",

      useCases: [
        {
          title: "Corporate Workplaces",
          copy: "Manage employee and company charging.",
        },
        {
          title: "Commercial Properties",
          copy: "Operate destination charging.",
        },
        {
          title: "Multi-Location Operations",
          copy: "Connect charging across your estate.",
        },
      ],
    },
  };

  const data = pageData[type] || pageData.cpos;

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
              {data.eyebrow}
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              {data.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              {data.description}
            </p>
          </div>
        </div>
      </section>


      {/* HERO IMAGE */}
      <section className="bg-black pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="screenshot-glow relative">
            <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-2xl">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* HOW TREVIA HELPS */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
              How Trevia helps
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {data.howTitle}
            </h2>
          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {data.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-8 transition duration-300 hover:-translate-y-1 hover:border-sun/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sun/10 text-sun">
                    <StepIcon type={step.icon} />
                  </div>

                  <span className="text-sm font-medium text-white/30">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CAPABILITIES */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
              Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Built for the way charging operates.
            </h2>
          </div>


          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-sun/30 hover:bg-white/[0.055]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun/10 text-sun transition duration-300 group-hover:bg-sun group-hover:text-black">
                  <CapabilityIcon type={capability.icon} />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {capability.copy}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* FEATURE VISUAL */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
                Trevia CMS
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                {data.featureTitle}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                {data.featureCopy}
              </p>

              <div className="mt-8 h-px w-20 bg-sun" />
            </div>


            <div className="screenshot-glow relative">
              <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-2xl">
                <img
                  src="/images/cms-cpo-management.png"
                  alt="Trevia CMS charging management dashboard"
                  className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* USE CASES */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">
                Use cases
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                One platform. Multiple charging environments.
              </h2>
            </div>
          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {data.useCases.map((item, index) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-8"
              >
                <span className="text-sm font-medium text-sun">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.copy}
                </p>

                <div className="mt-10 h-px w-full bg-white/10" />
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="overflow-hidden rounded-[2rem] bg-sun px-8 py-14 text-black sm:px-12 sm:py-16 lg:px-16 lg:py-20">

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/60">
                Get started
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Build a smarter charging operation.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
                See how Trevia can connect your charging infrastructure,
                operations, and digital experience.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                Request a Demo
                <span className="ml-3 text-lg">→</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


/* -------------------------------- */
/* STEP ICONS                       */
/* -------------------------------- */

function StepIcon({ type }) {
  const common =
    "h-7 w-7";

  if (type === "connect") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M8 12H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9.5 7.5L7 5C5.343 3.343 2.657 3.343 1 5C-.657 6.657-.657 9.343 1 11L3.5 13.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14.5 16.5L17 19C18.657 20.657 21.343 20.657 23 19C24.657 17.343 24.657 14.657 23 13L20.5 10.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "monitor") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 21H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 17V21"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "operate" || type === "control") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 8V12L15 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "fleet") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <circle
          cx="9"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="17"
          cy="9"
          r="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 20C3 16.5 5.5 14 9 14C12.5 14 15 16.5 15 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 15C18 14.5 21 16.5 21 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "scale") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M4 19L10 13L14 16L21 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8H21V13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M5 20V10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 20V5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 20V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={common}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}


/* -------------------------------- */
/* CAPABILITY ICONS                 */
/* -------------------------------- */

function CapabilityIcon({ type }) {
  const common =
    "h-7 w-7";

  if (type === "charger") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <rect
          x="5"
          y="3"
          width="10"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M15 8H18L21 11V16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 8L8 12H11L9 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "monitor") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 21H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 18V21"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "remote") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M7 3H17C18.1 3 19 3.9 19 5V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V5C5 3.9 5.9 3 7 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="17"
          r="1"
          fill="currentColor"
        />
        <path
          d="M9 8C10.7 6.7 13.3 6.7 15 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10.5 10.5C11.4 9.8 12.6 9.8 13.5 10.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "fault") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M12 3L21 20H3L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 9V14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="17"
          r="1"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "sites" || type === "workplace") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M4 21V6L12 3L20 6V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 9H10M14 9H16M8 13H10M14 13H16M8 17H10M14 17H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <path
          d="M5 20V11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 20V5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 20V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "fleet" || type === "teams") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <circle
          cx="9"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="17"
          cy="9"
          r="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 20C3 16.5 5.5 14 9 14C12.5 14 15 16.5 15 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 15C18 14.5 21 16.5 21 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "access") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <rect
          x="4"
          y="10"
          width="16"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="15"
          r="1.5"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "vendors" || type === "hardware") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <circle
          cx="6"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="18"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="18"
          cy="17"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 11L15 8M9 13L15 16"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "operations") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 8V12L15 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={common}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Interoperability",
      description:
        "We connect different charging hardware, networks, and systems through open and flexible infrastructure.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 sm:h-20 sm:w-20"
        >
          <circle
            cx="20"
            cy="32"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle
            cx="44"
            cy="32"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M30 27H34M30 37H34"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      number: "02",
      title: "Innovation",
      description:
        "We turn complex charging challenges into practical digital solutions that move the ecosystem forward.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 sm:h-20 sm:w-20"
        >
          <path
            d="M32 8C21.5 8 13 16.5 13 27C13 34 16.5 39 22 43V50H42V43C47.5 39 51 34 51 27C51 16.5 42.5 8 32 8Z"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M24 57H40M26 50H38"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 18V34M25 26L32 34L39 26"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      number: "03",
      title: "Reliability",
      description:
        "We build dependable software that gives operators confidence across every charging operation.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 sm:h-20 sm:w-20"
        >
          <path
            d="M32 7L51 14V29C51 41 43.5 51 32 57C20.5 51 13 41 13 29V14L32 7Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M22 31L28 37L42 23"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      number: "04",
      title: "Scalability",
      description:
        "We design infrastructure that can grow from individual sites to large, connected charging networks.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 sm:h-20 sm:w-20"
        >
          <path
            d="M12 50L25 37L34 44L52 22"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 22H52V32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 56H52"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      number: "05",
      title: "Transparency",
      description:
        "We believe better visibility leads to better decisions, better operations, and stronger charging networks.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 sm:h-20 sm:w-20"
        >
          <circle
            cx="32"
            cy="32"
            r="23"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M32 28V44"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="32" cy="20" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
  number: "06",
  title: "Customer Focus",
  description:
    "We build around the real needs of operators, businesses, and drivers to create technology that delivers practical value.",
  icon: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 sm:h-20 sm:w-20"
    >
      <circle
        cx="32"
        cy="22"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M14 52C14 41.5 21.5 35 32 35C42.5 35 50 41.5 50 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M46 12V20M42 16H50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
},
  ];

  return (
    <>
      {/* =========================
          ABOUT US
      ========================== */}
      <section className="bg-ink text-white">
        <Container className="py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow className="text-sun">About Us</Eyebrow>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              About Trevia
            </h1>

           <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Trevia EV Technologies is a software infrastructure company
              connecting the different parts of the EV charging ecosystem.
              We bring together charging hardware, operators, fleets,
              enterprises, energy systems, and drivers through connected
              digital solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================
          VISION + MISSION
      ========================== */}
      <section className="bg-ink">
        <Container className="pb-20 sm:pb-28">
          <div className="grid gap-6 lg:grid-cols-2">

            {/* VISION */}
            <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 lg:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-sun text-ink sm:h-24 sm:w-24">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-14 sm:w-14"
                >
                  <path
                    d="M8 32C8 32 17 17 32 17C47 17 56 32 56 32C56 32 47 47 32 47C17 47 8 32 8 32Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <Eyebrow className="mt-10">
                Our Vision
              </Eyebrow>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                A connected electric future.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-mute sm:text-lg">
                We envision a world where electric mobility and renewable
                energy are accessible at scale, supported by digital
                infrastructure that makes sustainable charging easier to
                build, operate, and expand.
              </p>
            </div>

            {/* MISSION */}
            <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 lg:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-sun text-ink sm:h-24 sm:w-24">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-14 sm:w-14"
                >
                  <path
                    d="M32 8L38 25L56 32L38 39L32 56L26 39L8 32L26 25L32 8Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <Eyebrow className="mt-10">
                Our Mission
              </Eyebrow>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Make EV infrastructure simpler.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-mute sm:text-lg">
                We build intelligent software that makes EV infrastructure
                easier to connect, manage, and scale, giving businesses and
                operators the tools they need to run charging with clarity
                and control.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          OUR VALUES
      ========================== */}
      <section className="bg-ink text-white">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-white">
              Our Values
            </Eyebrow>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Principles that shape Trevia.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white sm:text-lg">
              The principles that guide how we build technology,
              infrastructure, and partnerships.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={`group min-h-[360px] rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sun/50 hover:bg-sun/[0.06] sm:p-10 ${
                  index === 3 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-sun">
                    {value.icon}
                  </div>

                  <span className="font-mono text-xs text-cream/30">
                    {value.number}
                  </span>
                </div>

                <div className="mt-14">
                  <h3 className="text-3xl font-bold text-cream sm:text-4xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
    TREVIA JOURNEY
========================== */}
<section className="bg-ink text-white">
  <Container className="py-20 sm:py-28">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow className="text-sun">
        Our Journey
      </Eyebrow>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Building Trevia, step by step.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
        From an idea for better charging infrastructure to building
        technology that connects the ecosystem.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-20">

      {/* Horizontal line */}
      <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-white/20 lg:block" />

      <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">

        {/* 01 */}
        <div className="relative">
          <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-sun ring-8 ring-ink">
            <div className="h-1.5 w-1.5 rounded-full bg-ink" />
          </div>

          <div className="mt-7">
            <span className="font-mono text-lg tracking-[0.2em] text-sun">
              01
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              The Beginning
            </h3>

            <p className="mt-3 text-base leading-7 text-white">
              Trevia begins with a focus on solving the growing complexity
              behind EV charging infrastructure.
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="relative">
          <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-sun ring-8 ring-ink">
            <div className="h-1.5 w-1.5 rounded-full bg-ink" />
          </div>

          <div className="mt-7">
            <span className="font-mono text-lg tracking-[0.2em] text-sun">
              02
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              Building the Platform
            </h3>

            <p className="mt-3 text-base leading-7 text-white">
              Development moves toward creating a connected software
              platform for charging operations.
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="relative">
          <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-sun ring-8 ring-ink">
            <div className="h-1.5 w-1.5 rounded-full bg-ink" />
          </div>

          <div className="mt-7">
            <span className="font-mono text-lg tracking-[0.2em] text-sun">
              03
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              Growing the Ecosystem
            </h3>

            <p className="mt-3 text-base leading-7 text-white">
              Trevia expands its focus across operators, fleets,
              enterprises, energy systems, and drivers.
            </p>
          </div>
        </div>

        {/* 04 */}
        <div className="relative">
          <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-sun ring-8 ring-ink">
            <div className="h-1.5 w-1.5 rounded-full bg-ink" />
          </div>

          <div className="mt-7">
            <span className="font-mono text-lg tracking-[0.2em] text-sun">
              04
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              Looking Ahead
            </h3>

            <p className="mt-3 text-base leading-7 text-white">
              Continuing to build digital infrastructure for a more
              connected electric mobility ecosystem.
            </p>
          </div>
        </div>

      </div>
    </div>
  </Container>
</section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="bg-ink">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Trevia</Eyebrow>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building the infrastructure for what comes next.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PrimaryButton to="/contact">
                Talk to Trevia
              </PrimaryButton>

              <SecondaryButton to="/technology">
                Explore Technology
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function TractionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Company · Journey"
        title="Building and validating the operating layer."
        copy="Trevia is an early-stage company building and validating Trevia CMS for the operational needs of EV charging infrastructure."
      />

      <Container className="py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            index="01"
            title="Category"
            copy="EV charging digital infrastructure — software between charging hardware and the organizations that depend on it."
          />

          <FeatureCard
            index="02"
            title="Foundation"
            copy="OCPP 1.6J-based connectivity and an interoperability-first operating model."
          />

          <FeatureCard
            index="03"
            title="Stage"
            copy="Early-stage development and validation. Specific milestones are not turned into public claims here without current confirmation."
          />
        </div>

        <div className="mt-10 rounded-xl border border-sun/40 bg-sun-pale/50 p-5 text-sm leading-relaxed text-ink-2">
          T-Hub incubation, DPIIT recognition, ecosystem relationships,
          customer information, and team details require current verification
          before public publication.
        </div>
      </Container>

      <CTASection
        title="Follow the work as the network layer takes shape."
        copy="Talk with Trevia about the infrastructure and operational problems you are solving."
      />
    </>
  );
}


export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageIntro
        dark
        eyebrow="Request a Demo"
        title="See the operating layer for your charging network."
        copy="Tell us a little about your organization and the infrastructure you are looking to operate."
      />

      {submitted ? (
        <section className="bg-ink text-white">
          <Container className="py-14">
            <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white p-8 text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-full bg-sun text-ink">
                <ArrowRight className="size-5" />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-ink">
                Thanks — your request is ready.
              </h2>

              <p className="mt-3 leading-relaxed text-mute">
                This form is currently a frontend experience, so no message has
                been sent to Trevia yet. The success state is ready to connect to
                a future contact endpoint.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 text-sm font-semibold text-pine underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          </Container>
        </section>
      ) : (
        <section className="bg-ink text-white">
          <Container className="grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Start a conversation"
                title="Bring your sites, hardware, and workflows to the conversation."
                copy="Use the form to share the context that will help the Trevia team understand your charging infrastructure."
              />

              <div className="mt-8">
                <BulletList
                  items={[
                    "Discuss OCPP connectivity and hardware interoperability.",
                    "Review monitoring, remote operations, and multi-site workflows.",
                    "Explore integrations for operator, fleet, enterprise, or public infrastructure systems.",
                  ]}
                />
              </div>
            </div>

            <form
              onSubmit={submit}
              className="grid gap-5 rounded-2xl border border-white/10 bg-white p-6 shadow-panel sm:grid-cols-2"
            >
              <label className="grid gap-2 text-sm font-medium text-ink">
                Name

                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="h-11 rounded-md border border-line bg-background px-3 font-normal text-ink outline-none ring-sun transition focus:ring-2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-ink">
                Work Email

                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="h-11 rounded-md border border-line bg-background px-3 font-normal text-ink outline-none ring-sun transition focus:ring-2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-ink">
                Company

                <input
                  required
                  name="company"
                  autoComplete="organization"
                  className="h-11 rounded-md border border-line bg-background px-3 font-normal text-ink outline-none ring-sun transition focus:ring-2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-ink">
                Phone

                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="h-11 rounded-md border border-line bg-background px-3 font-normal text-ink outline-none ring-sun transition focus:ring-2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
                Organization Type

                <select
                  required
                  name="organizationType"
                  className="h-11 rounded-md border border-line bg-background px-3 font-normal text-ink outline-none ring-sun transition focus:ring-2"
                >
                  <option value="">Select one</option>
                  <option>CPO / Operator</option>
                  <option>Fleet</option>
                  <option>Enterprise</option>
                  <option>Energy & Utilities</option>
                  <option>Government / Infrastructure</option>
                  <option>Technology partner</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
                Message

                <textarea
                  required
                  name="message"
                  rows={5}
                  className="rounded-md border border-line bg-background px-3 py-3 font-normal text-ink outline-none ring-sun transition focus:ring-2"
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-sun px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sun-soft"
                >
                  Request a Demo
                  <ArrowRight className="size-4" />
                </button>

              </div>
            </form>
          </Container>
        </section>
      )}
    </>
  );
}

export function SimpleInfoPage({ title, eyebrow, copy }) {
  return (
    <div className="bg-ink text-white">
      <PageIntro
        dark
        eyebrow={eyebrow}
        title={title}
        copy={copy}
      />

      <Container className="max-w-3xl py-12">
        <div className="rounded-xl border border-white/10 bg-white p-6 text-sm leading-relaxed text-ink">
          <p>
            This page is included as enterprise-site scaffolding. Trevia will
            publish the full policy or resource content here once it is
            approved for public use.
          </p>
        </div>
      </Container>
    </div>
  );
}