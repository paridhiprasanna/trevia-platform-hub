import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
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

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
    
   {/* INTRO */}
<section className="relative z-0 h-screen bg-sun">
  <div className="flex h-screen items-center justify-center px-6">
    <div className="w-full max-w-6xl text-center">

      <h1 className="mt-6 text-5xl font-bold tracking-[-0.04em] text-ink sm:text-7xl lg:text-8xl">
        The operating layer
        <br />
        for EV charging.
      </h1>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:opacity-85"
        >
          Request a Demo
          <span className="ml-2">→</span>
        </Link>

        <Link
          to="/platform"
          className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream"
        >
          Explore the Platform
          <span className="ml-2">→</span>
        </Link>
      </div>

      <p className="mt-6 text-xs font-medium tracking-wide text-ink">
        OCPP-based infrastructure · Multi-site operations · Hardware-agnostic
      </p>

      <div className="mt-10 text-xs text-ink">
        Scroll to explore ↓
      </div>

    </div>
  </div>
</section>
      {/* HERO */}
      <section className="sticky top-0 z-10 min-h-screen overflow-hidden bg-ink text-white">
          <Container className="grid gap-14 py-12 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
          <div className="reveal-up lg:col-span-5">
            <Eyebrow>EV Charging Infrastructure Software</Eyebrow>

            <h1 className="mt-6 max-w-[15ch] text-balance text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.5rem]">
              The operating layer for your charging network.
            </h1>

            <p className="mt-7 max-w-[38ch] text-base leading-7 text-white sm:text-lg">
            Trevia CMS connects your chargers over OCPP, giving you one platform
            to monitor, operate, and scale across sites and hardware vendors.</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton />
              <SecondaryButton />
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-line pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  Protocol
                </dt>
                <dd className="mt-1.5 text-sm font-semibold">
                  OCPP 1.6J
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  Transport
                </dt>
                <dd className="mt-1.5 text-sm font-semibold">
                  WebSocket
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  Scope
                </dt>
                <dd className="mt-1.5 text-sm font-semibold">
                  Multi-site
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal-up lg:col-span-7">
  <div className="rounded-2xl border border-line bg-cream p-4 sm:p-6">
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
  <img
    src="/images/dashboard.png"
    alt="Trevia CMS dashboard"
    className="block h-auto w-full"
  />
</div>
  </div>
</div>
        </Container>
      </section>


      {/* PROBLEM */}
<section className="border-y border-line bg-ink">
  <Container className="py-14">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <SectionTitle
        eyebrow="The problem"
        title="Charging infrastructure is fragmented."
      />

    </div>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

      {/* 01 — DISCONNECTED NETWORKS */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" />

        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-sun">
            01
          </span>
          <span className="text-xs uppercase tracking-widest text-mute">
            Network
          </span>
        </div>

       {/* visual */}
<div className="relative mt-8 h-40">
  {/* Site A */}
  <div className="absolute left-0 top-0 w-[46%] rounded-lg border border-line bg-cream p-2.5">
    <div className="flex items-center gap-2">
      <div className="h-8 w-4 rounded-sm border-2 border-ink bg-white">
        <div className="mx-auto mt-1.5 size-1.5 rounded-full bg-sun" />
      </div>

      <div className="min-w-0">
        <span className="block font-mono text-[8px] uppercase text-mute">
          Site A
        </span>
        <span className="block text-[9px] font-semibold text-ink">
          4 chargers
        </span>
      </div>
    </div>

    <div className="mt-2 border-t border-line pt-2">
      <span className="font-mono text-[7px] uppercase text-mute">
        CPO A
      </span>
      <div className="mt-1 h-3 rounded-sm bg-ink/10">
        <div className="h-full w-3/4 rounded-sm bg-sun" />
      </div>
    </div>
  </div>

  {/* Site B */}
  <div className="absolute right-0 top-0 w-[46%] rounded-lg border border-line bg-cream p-2.5">
    <div className="flex items-center gap-2">
      <div className="h-8 w-4 rounded-sm border-2 border-ink bg-white">
        <div className="mx-auto mt-1.5 size-1.5 rounded-full bg-sun" />
      </div>

      <div className="min-w-0">
        <span className="block font-mono text-[8px] uppercase text-mute">
          Site B
        </span>
        <span className="block text-[9px] font-semibold text-ink">
          6 chargers
        </span>
      </div>
    </div>

    <div className="mt-2 border-t border-line pt-2">
      <span className="font-mono text-[7px] uppercase text-mute">
        CPO B
      </span>
      <div className="mt-1 h-3 rounded-sm bg-ink/10">
        <div className="h-full w-1/2 rounded-sm bg-sun" />
      </div>
    </div>
  </div>

  {/* Site C */}
  <div className="absolute bottom-0 left-1/2 w-[46%] -translate-x-1/2 rounded-lg border border-line bg-cream p-2.5">
    <div className="flex items-center gap-2">
      <div className="h-8 w-4 rounded-sm border-2 border-ink bg-white">
        <div className="mx-auto mt-1.5 size-1.5 rounded-full bg-sun" />
      </div>

      <div className="min-w-0">
        <span className="block font-mono text-[8px] uppercase text-mute">
          Site C
        </span>
        <span className="block text-[9px] font-semibold text-ink">
          8 chargers
        </span>
      </div>
    </div>

    <div className="mt-2 border-t border-line pt-2">
      <span className="font-mono text-[7px] uppercase text-mute">
        CPO C
      </span>
      <div className="mt-1 h-3 rounded-sm bg-ink/10">
        <div className="h-full w-2/3 rounded-sm bg-sun" />
      </div>
    </div>
  </div>

  {/* disconnected indicator */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-[38%] h-px w-8 -translate-x-1/2 border-t border-dashed border-black/20" />
    <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-1.5 py-0.5 font-mono text-[7px] uppercase text-mute">
      No shared layer
    </div>
  </div>
</div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold leading-tight text-ink">
            Disconnected networks
          </h3>

          <p className="mt-3 text-sm leading-6 text-mute">
            No shared operational picture.
          </p>
        </div>
      </div>

      {/* 02 — MULTI-VENDOR HARDWARE */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" />

        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-sun">
            02
          </span>
          <span className="text-xs uppercase tracking-widest text-mute">
            Hardware
          </span>
        </div>

        {/* visual */}
<div className="relative mt-8 h-40">
  <div className="grid grid-cols-4 gap-2">
    {[
      ["A", "Vendor A", "OCPP 1.6J"],
      ["B", "Vendor B", "OCPP"],
      ["C", "Vendor C", "Different"],
      ["D", "Vendor D", "Custom"],
    ].map(([id, vendor, protocol]) => (
      <div key={id} className="text-center">
        <div className="mx-auto flex h-16 w-9 flex-col items-center rounded-md border-2 border-ink bg-cream pt-2">
          <div className="size-2 rounded-full bg-sun" />
          <div className="mt-2 h-1 w-4 rounded-full bg-black/20" />
          <div className="mt-1 h-1 w-3 rounded-full bg-black/10" />
        </div>

        <span className="mt-2 block font-mono text-[7px] uppercase text-mute">
          {vendor}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-4 flex animate-pulse items-center justify-between px-3">
    <div className="h-px flex-1 border-t border-dashed border-black/20" />
    <span className="mx-2 rounded-full border border-sun/40 bg-sun/10 px-2 py-1 font-mono text-[7px] uppercase text-ink">
      Different protocols
    </span>
    <div className="h-px flex-1 border-t border-dashed border-black/20" />
  </div>

  <div className="mt-4 flex justify-center">
    <div className="rounded-lg border border-ink bg-ink px-5 py-2 text-center text-cream">
      <span className="block font-mono text-[7px] uppercase tracking-wider text-sun">
        One operating layer
      </span>
      <span className="mt-0.5 block text-[10px] font-semibold">
        Trevia CMS
      </span>
    </div>
  </div>
</div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold leading-tight text-ink">
            Multi-vendor hardware
          </h3>

          <p className="mt-3 text-sm leading-6 text-mute">
            Different vendors. Different systems.
          </p>
        </div>
      </div>

      {/* 03 — LIMITED REAL-TIME VISIBILITY */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" />

        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-sun">
            03
          </span>
          <span className="text-xs uppercase tracking-widest text-mute">
            Visibility
          </span>
        </div>

        {/* visual */}
<div className="relative mt-8 h-40 overflow-hidden rounded-lg border border-line bg-cream p-3">
  <div className="flex items-center justify-between border-b border-line pb-2">
    <span className="font-mono text-[8px] uppercase tracking-wider text-mute">
      Trevia CMS
    </span>

    <span className="flex items-center gap-1 font-mono text-[7px] text-mute">
      <span className="size-1.5 animate-pulse rounded-full bg-sun" />
      Live
    </span>
  </div>

  <div className="mt-3 grid grid-cols-2 gap-1.5">
    <div className="rounded border border-line bg-white p-2">
      <span className="block text-[7px] uppercase text-mute">
        Online
      </span>
      <span className="mt-1 block text-sm font-bold text-ink">
        12
      </span>
    </div>

    <div className="rounded border border-line bg-white p-2">
      <span className="block text-[7px] uppercase text-mute">
        Offline
      </span>
      <span className="mt-1 block text-sm font-bold text-ink">
        3
      </span>
    </div>

    <div className="rounded border border-line bg-white p-2">
      <span className="block text-[7px] uppercase text-mute">
        Faults
      </span>
      <span className="mt-1 block text-sm font-bold text-ink">
        2
      </span>
    </div>

    <div className="rounded border border-line bg-white p-2">
      <span className="block text-[7px] uppercase text-mute">
        Sessions
      </span>
      <span className="mt-1 block text-sm font-bold text-ink">
        7
      </span>
    </div>
  </div>

  <div className="mt-2 flex items-center justify-between rounded border border-line bg-white px-2 py-1.5">
    <div>
      <span className="block font-mono text-[7px] text-mute">
        CH-04
      </span>
      <span className="text-[8px] font-semibold text-ink">
        ONLINE
      </span>
    </div>

    <div className="text-right">
      <span className="block text-[8px] font-semibold text-ink">
        22 kW
      </span>
      <span className="text-[7px] text-mute">
        64% utilization
      </span>
    </div>
  </div>
</div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold leading-tight text-ink">
            Limited real-time visibility
          </h3>

          <p className="mt-3 text-sm leading-6 text-mute">
            Faults, charger status, and live sessions can be difficult to monitor across sites.
          </p>
        </div>
      </div>

      {/* 04 — MANUAL OPERATIONS */}
<div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" />

  <div className="flex items-center justify-between">
    <span className="font-mono text-xs tracking-[0.2em] text-sun">
      04
    </span>

    <span className="text-xs uppercase tracking-widest text-mute">
      Operations
    </span>
  </div>

  {/* visual */}
  <div className="mt-8 h-40">
    <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-1.5">

      {/* Manual path */}
      <div className="min-w-0 rounded-lg border border-line bg-cream p-2">
        <span className="font-mono text-[6px] uppercase tracking-wider text-mute">
          Manual
        </span>

        <div className="mt-2 space-y-1">
          <div className="rounded border border-line bg-white px-1.5 py-1.5 text-[7px] leading-tight text-ink">
            Charger offline
          </div>

          <div className="text-center text-[7px] text-mute">
            ↓
          </div>

          <div className="rounded border border-line bg-white px-1.5 py-1.5 text-[7px] leading-tight text-ink">
            Call technician
          </div>

          <div className="text-center text-[7px] text-mute">
            ↓
          </div>

          <div className="rounded border border-line bg-white px-1.5 py-1.5 text-[7px] leading-tight text-ink">
            Site visit
          </div>
        </div>
      </div>

      {/* transition */}
      <div className="flex items-center">
        <ArrowRight className="size-3.5 text-sun" />
      </div>

      {/* Trevia CMS path */}
      <div className="rounded-lg border border-sun/40 bg-sun/10 p-2 transition-all duration-500 group-hover:border-sun">
        <span className="font-mono text-[6px] uppercase tracking-wider text-sun">
          Trevia CMS
        </span>

        <div className="mt-2 space-y-1">
          <div className="rounded border border-sun/30 bg-white px-1.5 py-1.5 text-[7px] leading-tight text-ink transition-transform duration-300 group-hover:-translate-y-0.5">
          </div>

          <div className="text-center text-[7px] text-mute">
            ↓
          </div>

          <div className="rounded border border-sun/30 bg-white px-1.5 py-1.5 text-[7px] leading-tight text-ink">
            Remote status
          </div>

          <div className="text-center text-[7px] text-mute">
            ↓
          </div>

          <div className="rounded border border-sun/30 bg-white px-1.5 py-1.5 text-[7px] leading-tight text-ink">
            Remote restart
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="mt-5">
    <h3 className="text-xl font-semibold leading-tight text-ink">
      Manual operations
    </h3>

    <p className="mt-3 text-sm leading-6 text-mute">
      Operators rely on alerts, phone calls, and site visits to resolve issues.
    </p>
  </div>
</div>

      {/* 05 — DIFFICULT MULTI-SITE SCALING */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" />

        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-sun">
            05
          </span>
          <span className="text-xs uppercase tracking-widest text-mute">
            Scale
          </span>
        </div>

        {/* visual */}
<div className="relative mt-8 h-36">
  <div className="grid grid-cols-2 gap-2">

    {/* Site 01 */}
    <div className="rounded-lg border border-line bg-cream p-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] uppercase text-mute">
          Site 01
        </span>
        <span className="font-mono text-[7px] text-sun">
          4
        </span>
      </div>

      <div className="mt-2 flex gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className="h-5 w-2 rounded-sm border border-ink bg-white"
          />
        ))}
      </div>
    </div>

    {/* Site 02 */}
    <div className="rounded-lg border border-line bg-cream p-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] uppercase text-mute">
          Site 02
        </span>
        <span className="font-mono text-[7px] text-sun">
          8
        </span>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-1">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="h-4 w-2 rounded-sm border border-ink bg-white"
          />
        ))}
      </div>
    </div>

    {/* Site 03 */}
    <div className="rounded-lg border border-line bg-cream p-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] uppercase text-mute">
          Site 03
        </span>
        <span className="font-mono text-[7px] text-sun">
          12
        </span>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="h-3.5 w-2 rounded-sm border border-ink bg-white"
          />
        ))}
      </div>
    </div>

    {/* Site 04 */}
    <div className="rounded-lg border border-sun/40 bg-sun/10 p-2 transition-all duration-500 group-hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] uppercase text-mute">
          Site 04
        </span>
        <span className="font-mono text-[7px] text-sun transition-opacity duration-300 group-hover:opacity-70">
  20
</span>
      </div>

      <div className="mt-2 grid grid-cols-5 gap-1">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-3 w-2 rounded-sm border border-ink bg-white"
          />
        ))}
      </div>
    </div>
  </div>
</div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold leading-tight text-ink">
            Difficult multi-site scaling
          </h3>

          <p className="mt-3 text-sm leading-6 text-mute">
            Complexity grows with every site.
          </p>
        </div>
      </div>

    </div>
  </Container>
</section>


      {/* DIGITAL INFRASTRUCTURE */}
<section className="border-b border-line bg-ink">
  <Container className="py-12">
    <div className="max-w-4xl">
      <SectionTitle
        eyebrow="Digital infrastructure layer"
        title="One infrastructure layer. Every side of the network."
        copy="One digital layer connecting chargers, operators, fleets, enterprises, and drivers."
      />
    </div>

    <div className="mt-12">
      <div className="relative overflow-hidden rounded-3xl bg-cream px-6 py-10 text-ink sm:px-10 sm:py-12">

        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40 dark-grid" />

        <div className="relative">

          {/* top label */}
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sun-soft">
              Everything converges here
            </span>

            <span className="font-mono text-[10px] text-ink/40">
              TREVIA / LAYER
            </span>
          </div>

          {/* chargers */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              "Charger 01",
              "Charger 02",
              "Charger 03",
              "Charger 04",
              "Charger 05",
            ].map((charger) => (
              <div
                key={charger}
                className="rounded-xl border border-ink/10 bg-white px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sun/50 hover:bg-sun/10"
              >
                <div className="mx-auto mb-3 grid size-8 place-items-center rounded-lg border border-sun/40">
                <Cable className="size-4 text-sun" />
                </div>

                <span className="block font-mono text-[10px] text-ink">
                  {charger}
                </span>
              </div>
            ))}
          </div>

          {/* connection */}
          <div className="my-7 flex flex-col items-center gap-2">
            <div className="h-8 w-px bg-gradient-to-b from-sun/0 via-sun to-sun/0" />

            <span className="rounded-full border border-sun/30 bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
              OCPP 1.6J
            </span>

            <div className="h-8 w-px bg-gradient-to-b from-sun via-sun/50 to-sun/0" />
          </div>

          {/* Trevia central layer */}
          <div className="relative mx-auto max-w-2xl rounded-2xl border border-sun/50 bg-sun px-6 py-9 text-center shadow-[0_0_70px_rgba(0,161,155,0.22)] sm:px-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
              Operating layer
            </div>

            <h3 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl">
              TREVIA CMS
            </h3>

            <p className="mt-2 text-sm text-ink/70">
              Common operating layer · Centralized control
            </p>
          </div>

          {/* APIs */}
          <div className="my-7 flex flex-col items-center gap-2">
            <div className="h-8 w-px bg-gradient-to-b from-sun/0 via-sun to-sun/0" />

            <span className="rounded-full border border-ink/10 bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
              APIs &amp; Integrations
            </span>

            <div className="h-8 w-px bg-gradient-to-b from-sun via-sun/50 to-sun/0" />
          </div>

          {/* ecosystem */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              "CPOs",
              "Fleets",
              "Enterprises",
              "Energy",
              "Government",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-ink/10 bg-white px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sun/50 hover:bg-sun/10"
              >
                <span className="text-sm font-semibold text-ink">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* driver connection */}
          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                Driver experience · Trevia EV App
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-center">
      <SecondaryButton to="/platform">
        Explore the Platform
      </SecondaryButton>
    </div>
  </Container>
</section>


      {/* TREVIA CMS */}
<section className="bg-ink text-white">
  <Container className="py-12">
    <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
      <div className="reveal-up">
        <Eyebrow>Trevia CMS</Eyebrow>

        <h2 className="mt-3 max-w-[18ch] text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Run every charger from one platform.
        </h2>

        <p className="mt-5 max-w-[38ch] leading-relaxed text-white/70">
        Connect, monitor, operate, and scale every charger from one
        hardware-agnostic operating layer.
        </p>

        <div className="mt-8">
          <PrimaryButton to="/cms">
            Explore Trevia CMS
          </PrimaryButton>
        </div>
      </div>

      <div className="reveal-up parallax-soft group overflow-hidden rounded-2xl border border-cream/10 bg-white shadow-2xl ring-1 ring-white/5">
        <img
          src="/images/stations.png"
          alt="Trevia CMS dashboard"
          className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </div>

  
 {/* CMS CAPABILITIES */}
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
  return (
    <>
      <PageIntro
      dark
        eyebrow="Platform"
        title="The connected infrastructure layer for EV charging."
        copy="Trevia connects charging hardware, operating software, and the businesses that run EV charging networks — through one interoperable infrastructure layer."      >
        <PrimaryButton to="/cms">
          Explore Trevia CMS
        </PrimaryButton>

        <SecondaryButton to="/technology">
          See the Technology
        </SecondaryButton>
      </PageIntro>

      <section className="bg-ink text-white">
  <Container className="py-12 sm:py-16">
    <div className="space-y-12 sm:space-y-16">

      {/* 01 — Operate */}
      <div className="group relative grid gap-5 border-b border-white/10 pb-12 sm:grid-cols-[100px_1fr] sm:gap-8">        <div className="font-mono text-5xl font-bold tracking-tight text-sun transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
          01
        </div>

        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <span className="block translate-y-full font-mono text-xs uppercase tracking-[0.2em] text-sun transition-transform duration-700 ease-out group-hover:translate-y-0">
              Operate
            </span>
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
            Trevia CMS
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 transition-opacity duration-700 group-hover:text-white/75 sm:text-lg">
            The primary commercial product: one operating layer for
            OCPP-based connectivity, monitoring, control, sessions,
            tariffs, faults, and data.
          </p>
        </div>
      </div>

      {/* 02 — Discover */}
      <div className="group relative grid gap-5 border-b border-white/10 pb-12 sm:grid-cols-[100px_1fr] sm:gap-8">        <div className="font-mono text-5xl font-bold tracking-tight text-sun transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
          02
        </div>

        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <span className="block translate-y-full font-mono text-xs uppercase tracking-[0.2em] text-sun transition-transform duration-700 ease-out group-hover:translate-y-0">
              Discover
            </span>
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
            Trevia EV App
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 transition-opacity duration-700 group-hover:text-white/75 sm:text-lg">
            The driver-facing side of the ecosystem, bringing charging
            discovery across multiple networks into one experience.
          </p>
        </div>
      </div>

      {/* 03 — Connect */}
      <div className="group relative grid gap-5 border-b border-white/10 pb-12 sm:grid-cols-[100px_1fr] sm:gap-8">        <div className="font-mono text-5xl font-bold tracking-tight text-sun transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
          03
        </div>

        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <span className="block translate-y-full font-mono text-xs uppercase tracking-[0.2em] text-sun transition-transform duration-700 ease-out group-hover:translate-y-0">
              Connect
            </span>
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
            Interoperability
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 transition-opacity duration-700 group-hover:text-white/75 sm:text-lg">
            Built around OCPP 1.6J and WebSocket connectivity so operators
            can work across hardware vendors rather than a single manufacturer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
            <span className="text-sun">OCPP 1.6J</span>
            <span className="text-white/20">→</span>
            <span className="text-white/60 transition-colors duration-500 group-hover:text-white">
              WebSocket
            </span>
            <span className="text-white/20">→</span>
            <span className="text-white/60 transition-colors duration-500 group-hover:text-white">
              Hardware vendors
            </span>
          </div>
        </div>
      </div>

      {/* 04 — See */}
      <div className="group relative grid gap-6 sm:grid-cols-[120px_1fr] sm:gap-10">
        <div className="font-mono text-5xl font-bold tracking-tight text-sun transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
          04
        </div>

        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <span className="block translate-y-full font-mono text-xs uppercase tracking-[0.2em] text-sun transition-transform duration-700 ease-out group-hover:translate-y-0">
              See
            </span>
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] transition-transform duration-700 group-hover:translate-x-2 sm:text-6xl">
            Operational visibility
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 transition-opacity duration-700 group-hover:text-white/75 sm:text-lg">
            Telemetry, sessions, transactions, and charger health give
            teams a clearer view of what is happening across sites.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider text-white/40">
            <span className="transition-colors duration-500 group-hover:text-sun">
              Telemetry
            </span>
            <span className="transition-colors duration-500 group-hover:text-sun">
              Sessions
            </span>
            <span className="transition-colors duration-500 group-hover:text-sun">
              Transactions
            </span>
            <span className="transition-colors duration-500 group-hover:text-sun">
              Charger health
            </span>
          </div>
        </div>
      </div>

    </div>
  </Container>
</section>

      <section className="bg-ink">
        <Container className="py-14">
          <SectionTitle
            eyebrow="How it fits"
            title="From charger connectivity to the systems around your network."
            copy="Trevia connects chargers, operating software, and the businesses and systems that run EV charging networks through one interoperable infrastructure layer."          />

          <div className="mt-10 overflow-hidden rounded-2xl border border-cream/10 bg-ink p-4 sm:p-6">
  <TechnologyFlow />
</div>
        </Container>
      </section>

      <CTASection />
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

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
  <img
    src="/images/dashboard.png"
    alt="Trevia CMS dashboard"
    className="block h-auto w-full"
  />
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
      <div className="cms-dashboard-reveal overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
  <img
    src="/images/stations.png"
    alt="Trevia CMS dashboard"
    className="block h-auto w-full"
  />
</div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
        <img
          src="/images/cms-cpo-management.png"
          alt="Trevia CMS CPO management"
          className="block h-auto w-full"
        />
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


export function DrivePage() {
  return (
    <>
      <PageIntro
      dark
      eyebrow="Trevia EV App · For EV Drivers"        
      title="One app to find charging, across networks."
        copy="Charging infrastructure is spread across multiple operators and networks. Trevia EV App brings it into a single, unified discovery experience — built on the same infrastructure layer that runs Trevia CMS."
      >
        <PrimaryButton to="/contact">
  Request Early Access
</PrimaryButton>

        <SecondaryButton to="/contact">
          Download the App
        </SecondaryButton>
      </PageIntro>

      <section className="bg-ink text-white">
  <Container className="grid gap-10 py-12 lg:grid-cols-2 lg:items-center">
    <div>
      <SectionTitle
        eyebrow="The problem"
        title="Drivers should not have to check one app per network."
        copy="Trevia EV App brings charging discovery from multiple networks and operators into one experience."
      />

      <BulletList
        items={[
          "Discover charging stations across multiple networks and operators in one place.",
          "Use a unified discovery experience instead of switching between operator-specific apps.",
          "Stay connected to the same infrastructure layer that powers Trevia CMS.",
        ]}
      />
    </div>

    <div className="flex items-center justify-center gap-3 rounded-2xl border border-line bg-cream p-4 sm:gap-5 sm:p-8">
      <div className="w-[190px] rotate-[-3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl">
        <img
          src="/images/drive-home.png"
          alt="Trevia EV App home screen"
          className="block w-full"
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
  </Container>
</section>

      <section className="bg-ink text-white">
        <Container className="py-12">
          <SectionTitle
            eyebrow="Connected by design"
            title="The driver side and operator side share the same infrastructure layer."
            copy="Trevia EV App and Trevia CMS are connected through the same charging infrastructure layer, allowing charger data from connected networks to surface in the driver experience."
          />

          <div className="mt-10">
            <ArchitectureDiagram compact />
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
  <Container className="py-12">
    <SectionTitle
      eyebrow="Questions"
      title="Trevia EV App, clearly explained."
    />

    <div className="mt-8 max-w-3xl">
      <FAQ
        items={[
          {
            question: "Is Trevia EV App connected to Trevia CMS?",
            answer:
              "Yes. Both run on Trevia's underlying charging infrastructure layer, which allows Trevia EV App to surface charger data from connected networks.",
          },
          {
            question:
              "Is the app currently available on Android or iOS?",
            answer:
              "Availability is not described here until the current app store status is confirmed.",
          },
          {
            question: "How many networks does Trevia EV App cover?",
            answer:
              "No network count is published here without verified current coverage information.",
          },
        ]}
      />
    </div>
  </Container>
</section>

      <CTASection
  title="Find charging across networks with Trevia EV App."
  copy="Explore the driver-facing side of connected EV charging infrastructure."
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
  return (
    <>
      {/* PAGE INTRO */}
      <PageIntro
        dark
        eyebrow="Technology"
        title="Built for interoperability, not a single vendor."
        copy="Trevia CMS speaks the open protocols that connect charging hardware, so operators are not locked into one manufacturer's ecosystem."
      >
        <PrimaryButton to="/contact">
          Talk to Our Team
        </PrimaryButton>
      </PageIntro>

      {/* ARCHITECTURE */}
      <section className="reveal-up bg-ink text-white">
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Technical explanation */}
            <div>
              <Eyebrow>Architecture overview</Eyebrow>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Chargers → OCPP → Trevia CMS → APIs → the systems around your network.
              </h2>

              <p className="mt-4 leading-relaxed text-white/70">
                Each connected charger communicates with Trevia CMS over OCPP;
                the platform processes that data and makes it available to
                operators directly and, where integrated, to third-party systems
                via API.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Heartbeat", "Telemetry", "Sessions", "Status", "Faults"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/60"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* CMS dashboard */}
            <div className="parallax-soft group overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
              <img
                src="/images/dashboard.png"
                alt="Trevia CMS dashboard"
                className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Architecture flow */}
          <div className="mt-10">
            <TechnologyFlow />
          </div>
        </Container>
      </section>

      {/* TECHNOLOGY FEATURES */}
      <section className="bg-ink text-white">
        <Container className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {technologyFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sun hover:shadow-xl"
              >
                {/* Technical visual */}
                <div className="relative h-32 overflow-hidden border-b border-line bg-cream p-4">
                  <div className="absolute inset-0 opacity-40 dark-grid" />

                  <div className="relative flex h-full items-center justify-center">

                    {item.visual === "protocol" && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-7 flex-col items-center justify-center rounded border-2 border-ink bg-white">
                          <span className="size-2 rounded-full bg-sun" />
                          <span className="mt-1 h-1 w-3 rounded-full bg-ink/20" />
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <span className="h-px w-10 bg-ink/30" />

                          <span className="rounded-full bg-sun px-2 py-1 font-mono text-[7px] font-semibold text-ink">
                            OCPP 1.6J
                          </span>

                          <span className="h-px w-10 bg-ink/30" />
                        </div>

                        <Server className="size-7 text-ink" />
                      </div>
                    )}

                    {item.visual === "connection" && (
                      <div className="flex w-full max-w-[190px] items-center justify-between">
                        {[1, 2, 3, 4].map((node, i) => (
                          <div key={node} className="flex items-center">
                            <span
                              className={`size-3 rounded-full border-2 border-ink bg-sun ${
                                i === 0 ? "animate-pulse" : ""
                              }`}
                            />

                            {i < 3 && (
                              <span className="mx-1 h-px w-8 bg-ink/30">
                                <span
                                  className="block h-full w-2 animate-[dataFlow_2s_linear_infinite] bg-sun"
                                  style={{
                                    animationDelay: `${i * 350}ms`,
                                  }}
                                />
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {item.visual === "heartbeat" && (
                      <div className="flex items-center gap-4">
                        <Radio className="size-8 text-ink" />

                        <div className="flex items-end gap-1">
                          {[10, 20, 13, 28, 17, 24, 12].map(
                            (height, i) => (
                              <span
                                key={i}
                                className="w-1 animate-pulse rounded-full bg-sun"
                                style={{
                                  height: `${height}px`,
                                  animationDelay: `${i * 120}ms`,
                                }}
                              />
                            ),
                          )}
                        </div>

                        <span className="rounded-full border border-sun/40 bg-white px-2 py-1 font-mono text-[7px] text-ink">
                          HEARTBEAT
                        </span>
                      </div>
                    )}

                    {item.visual === "command" && (
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-line bg-white px-3 py-2">
                          <span className="block font-mono text-[7px] uppercase text-mute">
                            Charger
                          </span>

                          <span className="mt-1 block text-[9px] font-semibold text-ink">
                            Offline
                          </span>
                        </div>

                        <ArrowRight className="size-4 text-sun" />

                        <div className="rounded-lg bg-ink px-3 py-2 text-center text-cream">
                          <span className="block font-mono text-[7px] text-sun">
                            CMS
                          </span>

                          <span className="mt-1 block text-[9px] font-semibold">
                            Restart
                          </span>
                        </div>
                      </div>
                    )}

                    {item.visual === "telemetry" && (
                      <div className="grid w-full max-w-[210px] grid-cols-3 gap-2">
                        {[
                          ["22", "kW"],
                          ["64", "%"],
                          ["07", "sessions"],
                        ].map(([value, label]) => (
                          <div
                            key={label}
                            className="rounded-lg border border-line bg-white p-2 text-center"
                          >
                            <span className="block text-sm font-bold text-ink">
                              {value}
                            </span>

                            <span className="font-mono text-[7px] uppercase text-mute">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.visual === "api" && (
                      <div className="flex items-center gap-3">
                        <div className="space-y-1">
                          {["Sessions", "Status", "Energy"].map((label) => (
                            <div
                              key={label}
                              className="rounded border border-line bg-white px-2 py-1 font-mono text-[7px] text-mute"
                            >
                              {label}
                            </div>
                          ))}
                        </div>

                        <ArrowRight className="size-4 text-sun" />

                        <div className="rounded-lg bg-ink px-4 py-3 text-center text-cream">
                          <span className="block font-mono text-[7px] text-sun">
                            API
                          </span>

                          <span className="mt-1 block text-[9px] font-semibold">
                            Integrations
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] text-sun">
                      0{index + 1}
                    </span>

                    <Icon className="size-4 text-ink/30 transition-colors duration-300 group-hover:text-sun" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {item.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* VERIFICATION NOTICE */}
      <section className="bg-ink">
        <Container className="pb-16">
          <div className="rounded-xl border border-white/10 bg-white p-5 text-sm leading-relaxed text-ink">
            Cloud provider, backend architecture, public API documentation,
            and vendor-specific remote command scope are not published here
            until verified.
          </div>
        </Container>
      </section>

      <CTASection
        title="Talk with the team behind the operating layer."
        copy="Bring your existing hardware, sites, and systems to the conversation."
      />
    </>
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
  const item = solutionContent[type];

  return (
    <>
      {/* =====================================================
          PAGE INTRO
      ===================================================== */}
      <PageIntro
        dark
        eyebrow={item.label}
        title={item.title}
        copy={item.solution}
      >
        <PrimaryButton />
      </PageIntro>

      {/* =====================================================
          PROBLEM / SOLUTION / OUTCOME
      ===================================================== */}
      <section className="bg-ink text-white">
        <Container className="grid gap-5 py-14 lg:grid-cols-3">
          
          {/* PROBLEM */}
          <div className="group relative border-t border-white/15 pt-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sun">
                01
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                Problem
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The challenge
            </h2>

            <p className="mt-5 text-base leading-7 text-white/65">
              {item.problem}
            </p>

            <div className="mt-8 h-px w-0 bg-sun transition-all duration-700 group-hover:w-full" />
          </div>

          {/* SOLUTION */}
          <div className="group relative border-t border-sun/50 pt-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sun">
                02
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sun/70">
                Trevia
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The operating layer
            </h2>

            <p className="mt-5 text-base leading-7 text-white/80">
              {item.solution}
            </p>

            <div className="mt-8 h-px w-full bg-sun/30 transition-all duration-700 group-hover:bg-sun" />
          </div>

          {/* OUTCOME */}
          <div className="group relative border-t border-white/15 pt-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sun">
                03
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                Outcome
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What changes
            </h2>

            <p className="mt-5 text-base leading-7 text-white/65">
              {item.outcome}
            </p>

            <div className="mt-8 h-px w-0 bg-sun transition-all duration-700 group-hover:w-full" />
          </div>

        </Container>
      </section>


      {/* =====================================================
          WORKFLOW
      ===================================================== */}
      <section className="border-y border-white/10 bg-black text-white">
        <Container className="py-14">

          <div className="max-w-3xl">
            <Eyebrow>Workflow</Eyebrow>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From connected infrastructure to everyday operations.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
              A simple operating flow for connecting, monitoring, and managing
              charging infrastructure.
            </p>
          </div>


          {/* WORKFLOW LINE */}
          <div className="relative mt-14">

            {/* desktop connecting line */}
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-white/15 md:block">
              <div className="workflow-flow-line absolute inset-y-0 left-0 w-1/3 bg-sun" />
            </div>

            <div className="grid gap-10 md:grid-cols-3">

              {solutionWorkflows[type].map(([index, title, copy], i) => (
                <div
                  key={index}
                  className="workflow-step group relative"
                >
                  {/* number */}
                  <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black font-mono text-xs font-bold text-sun transition-all duration-500 group-hover:border-sun group-hover:bg-sun group-hover:text-ink">
                    {index}
                  </div>

                  {/* vertical mobile line */}
                  {i < solutionWorkflows[type].length - 1 && (
                    <div className="absolute left-5 top-10 h-[calc(100%+2.5rem)] w-px bg-white/10 md:hidden" />
                  )}

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/55 transition-colors duration-500 group-hover:text-white/75">
                      {copy}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </Container>
      </section>


      {/* =====================================================
          WHAT TO RUN CENTRALLY
      ===================================================== */}
      <section className="bg-ink text-white">
        <Container className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LEFT */}
          <div>
            <Eyebrow>What to run centrally</Eyebrow>

            <h2 className="mt-3 max-w-[18ch] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Operational visibility without adding another silo.
            </h2>

            <div className="mt-8 border-t border-white/10">
              {item.focus.map((focus, index) => (
                <div
                  key={focus}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] text-sun/70">
                      0{index + 1}
                    </span>

                    <span className="text-base font-medium text-white/75 transition-colors duration-300 group-hover:text-white">
                      {focus}
                    </span>
                  </div>

                  <ArrowRight className="size-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sun" />
                </div>
              ))}
            </div>
          </div>


          {/* RIGHT VISUAL */}
          <div className="relative">

            {type === "cpos" ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl transition-transform duration-700 hover:-translate-y-1">
                <img
                  src="/images/cpo-analytics.png"
                  alt="Trevia CPO analytics dashboard"
                  className="block h-auto w-full"
                />
              </div>
            ) : type === "fleets" ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl transition-transform duration-700 hover:-translate-y-1">
                <img
                  src="/images/fleet-overview.png"
                  alt="Trevia fleet operator dashboard"
                  className="block h-auto w-full"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-black p-5">
                <ArchitectureDiagram compact />
              </div>
            )}

          </div>

        </Container>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <CTASection
        title={`Discuss charging infrastructure for ${item.label
          .replace("For ", "")
          .toLowerCase()}.`}
      />
    </>
  );
}


export function AboutPage() {
  return (
    <>
      <PageIntro
      dark
        eyebrow="About Trevia"
        title="The software layer behind a connected charging network."
        copy="Trevia EV Technologies is a software infrastructure company for India's EV charging ecosystem. Trevia builds the operating layer that connects charging hardware to the people who run it."
      >
        <PrimaryButton />
        <SecondaryButton to="/traction">
          View the Journey
        </SecondaryButton>
      </PageIntro>

      <section className="border-y border-white/10 bg-ink text-white">
  <Container className="py-12 lg:py-14">
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

      {/* LEFT — explanation */}
      <div>
        <Eyebrow>What Trevia is</Eyebrow>

        <h2 className="mt-3 max-w-[18ch] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Not a charger manufacturer. Not a closed network.
          </h2>
          
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white">
          Trevia provides the digital infrastructure that connects chargers, operators, fleets, enterprises, and drivers.
          </p>

        <div className="mt-7 space-y-3">
          {[
            "Digital infrastructure for EV charging.",
            "Hardware-agnostic and vendor-neutral by design.",
            "Trevia CMS for operations and Trevia EV App for charging discovery.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-lg text-white"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sun" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* LARGE ECOSYSTEM VISUAL */}
<div className="relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-black p-6 text-white sm:p-8">

  {/* background grid */}
  <div className="absolute inset-0 company-grid opacity-60" />

  {/* ambient teal atmosphere */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/[0.06] blur-[90px]" />

  <div className="relative flex min-h-[440px] items-center justify-center">

    {/* =========================
        CONNECTION SYSTEM
    ========================= */}

    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 700 440"
      preserveAspectRatio="none"
    >
      {/* orbit rings */}
      <circle
        cx="350"
        cy="220"
        r="115"
        fill="none"
        stroke="rgba(0,161,155,0.28)"
        strokeWidth="1"
      />

      <circle
        cx="350"
        cy="220"
        r="165"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />

      <circle
        cx="350"
        cy="220"
        r="205"
        fill="none"
        stroke="rgba(0,161,155,0.10)"
        strokeWidth="1"
        strokeDasharray="3 12"
      />

      {/* connection lines */}
      <line
        x1="350"
        y1="220"
        x2="105"
        y2="95"
        className="company-network-line"
      />

      <line
        x1="350"
        y1="220"
        x2="595"
        y2="95"
        className="company-network-line"
      />

      <line
        x1="350"
        y1="220"
        x2="70"
        y2="220"
        className="company-network-line"
      />

      <line
        x1="350"
        y1="220"
        x2="630"
        y2="220"
        className="company-network-line"
      />

      <line
        x1="350"
        y1="220"
        x2="135"
        y2="360"
        className="company-network-line"
      />

      <line
        x1="350"
        y1="220"
        x2="565"
        y2="360"
        className="company-network-line"
      />
    </svg>


    {/* =========================
        TOP LABEL
    ========================= */}

    <div className="absolute left-0 top-0 font-mono text-[8px] uppercase tracking-[0.2em] text-white">
      TREVIA / NETWORK CORE
    </div>


    {/* =========================
        CHARGERS
    ========================= */}

    <div className="company-node absolute left-0 top-12">
      <span className="text-[11px] font-mono font-semibold text-sun">
        01
      </span>

      <span className="mt-1 block text-sm font-semibold text-white">
        Chargers
      </span>

      <span className="mt-1 block text-[10px] font-medium font-mono text-white/70">
        Hardware
      </span>
    </div>


    <div className="company-node absolute right-0 top-16">
      <span className="text-[11px] font-mono font-semibold text-sun">
        02
      </span>

      <span className="mt-1 block text-sm font-semibold text-white">
        CPOs
      </span>

      <span className="mt-1 block text-[10px] font-medium font-mono text-white/70">
        Operations
      </span>
    </div>


    {/* =========================
        SIDE NODES
    ========================= */}

    <div className="company-node absolute left-0 top-1/2 -translate-y-1/2">
      <span className="text-[11px] font-mono font-semibold text-sun">
        03
      </span>

      <span className="mt-1 block text-sm font-semibold text-white">
        Fleets
      </span>

      <span className="mt-1 block text-[10px] font-medium font-mono text-white/70">
        Mobility
      </span>
    </div>


    <div className="company-node absolute right-0 top-1/2 -translate-y-1/2">
      <span className="text-[11px] font-mono font-semibold text-sun">
        04
      </span>

      <span className="mt-1 block text-sm font-semibold text-white">
        Enterprises
      </span>

      <span className="mt-1 block text-[10px] font-medium font-mono text-white/70">
        Energy + Business
      </span>
    </div>


    {/* =========================
        BOTTOM NODES
    ========================= */}

    <div className="company-node absolute bottom-10 left-8">
      <span className="text-[11px] font-mono font-semibold text-sun">
        05
      </span>

      <span className="mt-1 block text-sm font-semibold text-white">
        Government
      </span>

      <span className="mt-1 block text-[10px] font-medium font-mono text-white/70">
        Infrastructure
      </span>
    </div>


    <div className="company-node absolute bottom-10 right-8">
      <span className="text-[11px] font-mono font-semibold text-sun">
        06
      </span>

      <span className="mt-1 block text-sm font-semibold text-white">
        EV Drivers
      </span>

      <span className="mt-1 block text-[10px] font-medium font-mono text-white/70">
        Experience
      </span>
    </div>


    {/* =========================
        PERMANENT TREVIA GLOW
    ========================= */}

    <div className="absolute left-1/2 top-1/2 z-[5] flex size-[220px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

      {/* outer permanent glow */}
      <div className="absolute size-[220px] rounded-full bg-sun/[0.10] blur-[45px]" />

      {/* inner permanent glow */}
      <div className="absolute size-[175px] rounded-full bg-sun/[0.18] blur-[25px]" />

      {/* outer luminous ring */}
      <div className="absolute size-[170px] rounded-full border border-sun/30 shadow-[0_0_45px_rgba(0,161,155,0.25)]" />

      {/* TREVIA core */}
      <div className="relative z-10 flex size-[145px] flex-col items-center justify-center rounded-full bg-sun text-center shadow-[0_0_45px_rgba(0,161,155,0.45),0_0_100px_rgba(0,161,155,0.22)]">

        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/80">
  Digital infrastructure
</span>

<span className="mt-2 text-3xl font-bold tracking-[-0.04em] text-black">
  TREVIA
</span>

<span className="mt-2 text-[10px] font-semibold text-black/75">
  Operating layer
</span>

<span className="mt-2 font-mono text-[8px] font-semibold tracking-[0.1em] text-black/70">
  OCPP · DATA · APIs
</span>

      </div>
    </div>


    {/* =========================
        DATA POINTS
    ========================= */}

    <span className="company-data-point left-[29%] top-[29%]" />
    <span className="company-data-point right-[29%] top-[29%]" />
    <span className="company-data-point left-[20%] top-1/2" />
    <span className="company-data-point right-[20%] top-1/2" />
    <span className="company-data-point left-[32%] bottom-[28%]" />
    <span className="company-data-point right-[32%] bottom-[28%]" />


    {/* =========================
        BOTTOM STATUS
    ========================= */}

    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3 border-t border-white/10 pt-4 font-mono text-[7px] uppercase tracking-[0.18em]">

      <span className="text-white/25">
        Fragmented
      </span>

      <span className="text-sun">
        →
      </span>

      <span className="text-sun">
        Connected
      </span>

      <span className="text-sun">
        →
      </span>

      <span className="text-white">
        Operable
      </span>

    </div>

  </div>
</div>
    </div>
  </Container>
</section>

      <section className="reveal-up bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Vision</Eyebrow>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Become the core operating layer for EV charging infrastructure
              across India.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-white">
          Trevia's vision is to extend the same interoperability model into
          adjacent energy-mobility infrastructure as the market matures.
          </p>
        </Container>
      </section>
      <section className="reveal-up bg-ink-2 text-white">
  <Container className="py-12">
    <SectionTitle
      eyebrow="Journey"
      title="Building the infrastructure layer one connection at a time."
      copy="Trevia's journey is focused on making charging infrastructure more connected, interoperable, and easier to operate."
    />

    <div className="relative mt-10">

  {/* JOURNEY TIMELINE */}
<div className="relative mt-16">

  {/* timeline rail */}
  <div className="absolute left-[8%] right-[8%] top-[52px] hidden h-px bg-white/10 lg:block" />

  {/* glowing progress line */}
  <div className="absolute left-[8%] top-[52px] hidden h-px w-[58%] bg-gradient-to-r from-sun/80 via-sun/50 to-sun/0 lg:block" />

  <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">

    {/* 01 */}
    <div className="relative">

      {/* milestone */}
      <div className="relative z-10 flex items-center gap-4">

        <div className="journey-number">
          01
        </div>

        <div className="h-px flex-1 bg-white/10 lg:hidden" />

      </div>

      <div className="mt-8 lg:pr-12">

        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-sun shadow-[0_0_12px_rgba(0,161,155,0.9)]" />

          <span className="font-mono text-sm uppercase tracking-[0.2em] text-sun">
            Foundation
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
          Connect
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white">
          Build the infrastructure layer between chargers and the
          systems around them.
        </p>

      </div>
    </div>


    {/* 02 */}
    <div className="relative">

      {/* milestone */}
      <div className="relative z-10 flex items-center gap-4">

        <div className="journey-number journey-number-active">
          02
        </div>

        <div className="h-px flex-1 bg-white/10 lg:hidden" />

      </div>

      <div className="mt-8 lg:px-6">

        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-sun shadow-[0_0_12px_rgba(0,161,155,0.9)]" />

          <span className="font-mono text-sm uppercase tracking-[0.2em] text-sun">
            Operations
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
          Operate
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white">
          Give operators a clearer way to monitor and manage
          connected charging infrastructure.
        </p>

      </div>
    </div>


    {/* 03 */}
    <div className="relative">

      {/* milestone */}
      <div className="relative z-10 flex items-center gap-4">

        <div className="journey-number">
          03
        </div>

        <div className="h-px flex-1 bg-white/10 lg:hidden" />

      </div>

      <div className="mt-8 lg:pl-12">

        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-sun shadow-[0_0_12px_rgba(0,161,155,0.9)]" />

          <span className="font-mono text-sm uppercase tracking-[0.2em] text-sun">
            Expansion
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
          Scale
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white">
          Extend interoperable charging infrastructure across more
          sites, networks, and use cases.
        </p>

      </div>
    </div>

  </div>
</div>
</div>
  </Container>
</section>

           <section className="border-t border-line bg-ink-2 text-cream">
  <Container className="py-14 sm:py-12">

    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <Eyebrow>Operating layer</Eyebrow>

        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          One connected system behind the charging ecosystem.
        </h2>
      </div>

      <span className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:block">
        TREVIA / INFRASTRUCTURE
      </span>
    </div>


    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink p-6 sm:p-10">

      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 dark-grid opacity-40" />

      <div className="relative grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">


        {/* =====================================================
            INFRASTRUCTURE
        ===================================================== */}

        <div className="grid grid-cols-2 gap-3">

          {["Chargers", "Sites", "Networks", "Hardware"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/15 bg-white/[0.04] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sun/60 hover:bg-sun/[0.08]"
            >

              <div className="mx-auto flex size-10 items-center justify-center rounded-lg border border-sun/40 bg-sun/[0.08]">
                <Cable className="size-6 text-sun" />
              </div>

              <span className="mt-3 block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {item}
              </span>

            </div>
          ))}

        </div>


        {/* =====================================================
            TREVIA
        ===================================================== */}

        <div className="relative flex justify-center">

          {/* horizontal connection line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-sun/30 lg:block" />

          {/* permanent ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/[0.10] blur-[80px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/[0.16] blur-[45px]" />


          {/* TREVIA CORE */}
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-sun/60 bg-sun p-8 text-center shadow-[0_0_45px_rgba(0,161,155,0.4),0_0_100px_rgba(0,161,155,0.2)]">

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/85">
              Digital infrastructure
            </span>

            <div className="mt-2 text-4xl font-bold tracking-[-0.05em] text-black">
              TREVIA
            </div>


            {/* capabilities */}
            <div className="mt-6 grid grid-cols-4 gap-2">

              {["OCPP", "Monitor", "Operate", "API"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-black/10 bg-black/10 px-2 py-2.5 font-mono text-[9px] font-bold text-black/80"
                >
                  {item}
                </div>
              ))}

            </div>


            {/* status */}
            <div className="mt-5 flex items-center justify-center gap-2">

              <span className="size-2 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.6)]" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-black/80">
                Connected
              </span>

            </div>

          </div>
        </div>


        {/* =====================================================
            ECOSYSTEM
        ===================================================== */}

        <div className="grid grid-cols-2 gap-3">

          {[
            "CPOs",
            "Fleets",
            "Enterprises",
            "Utilities",
            "Government",
            "Drivers",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-sun/25 bg-sun/[0.04] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sun/70 hover:bg-sun/10"
            >

              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>


      {/* =====================================================
          SYSTEM FLOW
      ===================================================== */}

      <div className="relative mt-8 border-t border-white/15 pt-5 text-center">

        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
          Hardware
        </span>

        <span className="mx-2 text-sun">
          →
        </span>

        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
          Connectivity
        </span>

        <span className="mx-2 text-sun">
          →
        </span>

        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-sun">
          Operating layer
        </span>

        <span className="mx-2 text-sun">
          →
        </span>

        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
          Ecosystem
        </span>

      </div>

    </div>

  </Container>
</section>

      <CTASection />
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