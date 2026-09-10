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
    "Sites run in silos with no shared operational picture.",
  ],
  [
    "Different hardware & standards",
    "Different vendors and protocols resist a single control plane.",
  ],
  [
    "Limited real-time visibility",
    "Faults and status surface late, if at all.",
  ],
  [
    "Manual intervention",
    "Operators rely on phone calls and on-site visits.",
  ],
  [
    "Difficult multi-site scaling",
    "Every new site multiplies the operational burden.",
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
    "Sessions & Transactions",
    "Track charging sessions and transaction-level data for reporting and reconciliation.",
  ],
  [
    "05",
    "Fault Visibility",
    "Surface faults and errors reported by chargers directly to operators.",
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
    "APIs & Integrations",
    "Expose charging, session, and operational data for connected systems.",
  ],
  [
    "09",
    "Analytics",
    "Use aggregate operational and energy data for reporting and planning.",
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
  <div className="flex h-screen items-center justify-center">
    <div className="text-center">
      <img
  src="/trevia-logo.png"
  alt="Trevia EV"
  className="mx-auto h-16 w-auto object-contain sm:h-20 lg:h-24"
/>

      <h1 className="mt-6 text-5xl font-bold tracking-[-0.04em] text-ink sm:text-7xl lg:text-8xl">
        Digital infrastructure
        <br />
        for EV charging.
      </h1>

      <div className="mt-12 text-sm text-ink">
        Scroll to explore <span className="ml-2">↓</span>
      </div>
    </div>
  </div>
</section>
      {/* HERO */}
<section className="sticky top-0 z-10 min-h-screen overflow-hidden bg-cream">
          <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
          <div className="reveal-up lg:col-span-5">
            <Eyebrow>EV Charging Infrastructure Software</Eyebrow>

            <h1 className="mt-6 max-w-[15ch] text-balance text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.5rem]">
              The operating layer for your charging network.
            </h1>

            <p className="mt-7 max-w-[43ch] text-base leading-7 text-mute sm:text-lg">
              Charging infrastructure is growing faster than the software
              running it. Trevia CMS connects your chargers over OCPP and gives
              you one platform to monitor, operate, and scale — across every
              site and every hardware vendor.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton />
              <SecondaryButton />
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-line pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                  Protocol
                </dt>
                <dd className="mt-1.5 text-sm font-semibold">
                  OCPP 1.6J
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                  Transport
                </dt>
                <dd className="mt-1.5 text-sm font-semibold">
                  WebSocket
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
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
    <ArchitectureDiagram />
  </div>
</div>
        </Container>
      </section>


      {/* PROBLEM */}
      <section className="border-y border-line bg-cream">
        <Container className="py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="The problem"
              title="Charging infrastructure is fragmented."
            />

            <p className="max-w-[40ch] text-sm leading-relaxed text-mute">
              Disconnected equipment, mixed standards, and manual workarounds
              make it hard to see or run a real network.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

  {/* 01 — DISCONNECTED NETWORKS */}
  <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
    <div className="absolute inset-x-0 top-0 h-1 bg-sun scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

    <div className="flex items-center justify-between">
      <span className="font-mono text-xs tracking-[0.2em] text-sun">01</span>
      <span className="text-xs uppercase tracking-widest text-mute">Network</span>
    </div>

    {/* visual */}
    <div className="relative mt-10 h-36">
      <div className="absolute left-3 top-5 size-3 rounded-full bg-sun" />
      <div className="absolute left-24 top-1 size-3 rounded-full bg-sun" />
      <div className="absolute right-5 top-10 size-3 rounded-full bg-sun" />
      <div className="absolute left-14 bottom-5 size-3 rounded-full bg-sun" />
      <div className="absolute right-20 bottom-1 size-3 rounded-full bg-sun" />

      <div className="absolute left-6 top-7 h-px w-16 rotate-[-18deg] bg-black/20" />
      <div className="absolute left-28 top-7 h-px w-20 rotate-[20deg] bg-black/20" />
      <div className="absolute left-16 bottom-7 h-px w-20 rotate-[18deg] bg-black/20" />
      <div className="absolute right-8 top-14 h-px w-20 rotate-[-35deg] bg-black/10" />

      <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />
    </div>

    <div className="mt-5">
      <h3 className="text-xl font-semibold leading-tight text-ink">
        Disconnected networks
      </h3>

      <p className="mt-3 text-sm leading-6 text-mute">
        Sites run in silos with no shared operational picture.
      </p>
    </div>
  </div>


  {/* 02 — DIFFERENT HARDWARE */}
  <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
    <div className="absolute inset-x-0 top-0 h-1 bg-sun scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

    <div className="flex items-center justify-between">
      <span className="font-mono text-xs tracking-[0.2em] text-sun">02</span>
      <span className="text-xs uppercase tracking-widest text-mute">Hardware</span>
    </div>

    {/* visual */}
    <div className="mt-10 flex h-36 items-end justify-center gap-3">
      <div className="h-20 w-12 rounded-lg border-2 border-ink bg-cream transition-transform duration-500 group-hover:-translate-y-3">
        <div className="mx-auto mt-3 size-3 rounded-full bg-sun" />
        <div className="mx-auto mt-4 h-1 w-5 rounded-full bg-black/20" />
      </div>

      <div className="h-28 w-14 rounded-lg border-2 border-ink bg-cream transition-transform duration-500 group-hover:translate-y-2">
        <div className="mx-auto mt-4 size-3 rounded-full bg-sun" />
        <div className="mx-auto mt-5 h-1 w-6 rounded-full bg-black/20" />
      </div>

      <div className="h-24 w-12 rounded-lg border-2 border-ink bg-cream transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mx-auto mt-3 size-3 rounded-full bg-sun" />
        <div className="mx-auto mt-4 h-1 w-5 rounded-full bg-black/20" />
      </div>

      <div className="h-16 w-11 rounded-lg border-2 border-ink bg-cream transition-transform duration-500 group-hover:translate-y-3">
        <div className="mx-auto mt-2.5 size-3 rounded-full bg-sun" />
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-xl font-semibold leading-tight text-ink">
        Different hardware & standards
      </h3>

      <p className="mt-3 text-sm leading-6 text-mute">
        Different vendors and protocols resist a single control plane.
      </p>
    </div>
  </div>


  {/* 03 — LIMITED VISIBILITY */}
  <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
    <div className="absolute inset-x-0 top-0 h-1 bg-sun scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

    <div className="flex items-center justify-between">
      <span className="font-mono text-xs tracking-[0.2em] text-sun">03</span>
      <span className="text-xs uppercase tracking-widest text-mute">Visibility</span>
    </div>

    {/* visual */}
    <div className="relative mt-10 flex h-36 items-center justify-center">
      <div className="absolute size-32 rounded-full border border-black/10" />
      <div className="absolute size-24 rounded-full border border-black/15" />
      <div className="absolute size-16 rounded-full border border-sun/40" />

      <div className="absolute h-px w-36 rotate-[-25deg] bg-sun/50" />
      <div className="absolute h-px w-36 rotate-[25deg] bg-black/10" />

      <div className="relative grid size-12 place-items-center rounded-full bg-sun text-ink">
        <Eye className="size-5" />
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-xl font-semibold leading-tight text-ink">
        Limited real-time visibility
      </h3>

      <p className="mt-3 text-sm leading-6 text-mute">
        Faults and status surface late, if at all.
      </p>
    </div>
  </div>


  {/* 04 — MANUAL INTERVENTION */}
  <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
    <div className="absolute inset-x-0 top-0 h-1 bg-sun scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

    <div className="flex items-center justify-between">
      <span className="font-mono text-xs tracking-[0.2em] text-sun">04</span>
      <span className="text-xs uppercase tracking-widest text-mute">Operations</span>
    </div>

    {/* visual */}
    <div className="mt-10 flex h-36 items-center justify-center gap-3">
      <div className="grid h-20 w-12 place-items-center rounded-xl border-2 border-ink bg-cream">
        <div className="h-10 w-6 rounded border border-black/20" />
      </div>

      <ArrowRight className="size-5 text-sun" />

      <div className="grid size-14 place-items-center rounded-full border-2 border-sun bg-sun/10">
        <span className="text-xl">!</span>
      </div>

      <ArrowRight className="size-5 text-sun" />

      <div className="flex h-24 w-12 flex-col items-center justify-center rounded-lg border-2 border-ink bg-cream">
        <div className="h-9 w-5 rounded border border-black/20" />
        <div className="mt-2 size-2 rounded-full bg-sun" />
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-xl font-semibold leading-tight text-ink">
        Manual intervention
      </h3>

      <p className="mt-3 text-sm leading-6 text-mute">
        Operators rely on phone calls and on-site visits.
      </p>
    </div>
  </div>


  {/* 05 — DIFFICULT SCALING */}
  <div className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sun">
    <div className="absolute inset-x-0 top-0 h-1 bg-sun scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

    <div className="flex items-center justify-between">
      <span className="font-mono text-xs tracking-[0.2em] text-sun">05</span>
      <span className="text-xs uppercase tracking-widest text-mute">Scale</span>
    </div>

    {/* visual */}
    <div className="relative mt-10 h-36">
      <div className="absolute left-2 top-3 h-14 w-24 rounded-lg border border-black/15 bg-cream" />
      <div className="absolute left-10 top-10 h-14 w-24 rounded-lg border border-black/15 bg-cream" />
      <div className="absolute left-20 top-17 h-14 w-24 rounded-lg border border-sun/50 bg-sun/10" />
      <div className="absolute right-0 top-24 h-14 w-20 rounded-lg border border-black/15 bg-cream" />

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-mute">
        <span>Site 01</span>
        <span>Site 02</span>
        <span>Site 03</span>
        <span>+</span>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-xl font-semibold leading-tight text-ink">
        Difficult multi-site scaling
      </h3>

      <p className="mt-3 text-sm leading-6 text-mute">
        Every new site multiplies the operational burden.
      </p>
    </div>
  </div>

</div>
        </Container>
      </section>


      {/* DIGITAL INFRASTRUCTURE */}
      <section>
        <Container className="grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Digital infrastructure layer"
              title="One infrastructure layer. Multiple sides of the network."
              copy="Trevia sits between charging hardware and everyone who depends on it — operators, fleets, enterprises, energy companies, government, and drivers."
            />

            <BulletList
              items={[
                "Centralised operational visibility across connected hardware.",
                "A common layer for multi-site, multi-vendor environments.",
                "Trevia CMS for operations; Trevia Drive for discovery.",
              ]}
            />

            <div className="mt-8">
              <SecondaryButton to="/platform">
                Explore the Platform
              </SecondaryButton>
            </div>
          </div>

          <InteroperabilityDiagram />
        </Container>
      </section>


      {/* TREVIA CMS */}
      <section className="bg-ink-2 text-cream">
        <Container className="py-20">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <Eyebrow>Trevia CMS</Eyebrow>

              <h2 className="mt-3 max-w-[18ch] text-4xl font-bold tracking-tight text-cream sm:text-5xl">
                Run every charger from one platform.
              </h2>

              <p className="mt-5 max-w-[46ch] leading-relaxed text-cream/60">
                OCPP-based connectivity, real-time monitoring, remote
                operations, sessions, tariffs, fault visibility, multi-site
                control, APIs, and analytics — in one operating layer.
              </p>

              <div className="mt-8">
                <PrimaryButton to="/cms">
                  Explore Trevia CMS
                </PrimaryButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-cream/10 bg-white shadow-2xl ring-1 ring-white/5">
              <img
                src="/images/dashboard.png"
                alt="Trevia CMS dashboard"
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {cmsFeatures.slice(0, 6).map(([index, title]) => (
              <div
                key={index}
                className="rounded-xl border border-cream/10 bg-ink px-4 py-4"
              >
                <span className="font-mono text-[10px] text-sun-soft">
                  {index}
                </span>

                <p className="mt-2 text-sm font-semibold text-cream">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* TREVIA DRIVE */}
      <section>
        <Container className="grid gap-10 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Trevia Drive"
              title="One app to find charging, across networks."
              copy="Trevia Drive extends the same connected infrastructure to EV drivers, bringing charging discovery from multiple networks into a single experience."
            />

            <div className="mt-8">
              <SecondaryButton to="/drive">
                Explore Trevia Drive
              </SecondaryButton>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-2xl border border-line bg-cream p-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-[190px] rotate-[-3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl">
  <img
    src="/images/drive-home.png"
    alt="Trevia Drive home screen"
    className="block aspect-[9/19.5] h-auto w-full object-cover"
  />
</div>

<div className="hidden w-[190px] aspect-[9/19.5] rotate-[3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl sm:block">
  <img
    src="/images/drive-explore.png"
    alt="Trevia Drive explore screen"
    className="block h-full w-full object-cover scale-[1.28]"
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
        eyebrow="Platform"
        title="The connected infrastructure layer for EV charging."
        copy="Trevia connects charging hardware, operational software, and the organizations that depend on a reliable network."
      >
        <PrimaryButton to="/cms">
          Explore Trevia CMS
        </PrimaryButton>

        <SecondaryButton to="/technology">
          See the Technology
        </SecondaryButton>
      </PageIntro>

      <Container className="grid gap-6 py-16 md:grid-cols-2">
        <FeatureCard
          title="Trevia CMS"
          copy="The primary commercial product: one operating layer for OCPP-based connectivity, monitoring, control, sessions, tariffs, faults, and data."
        />

        <FeatureCard
          title="Trevia Drive"
          copy="The driver-facing side of the ecosystem, bringing charging discovery from multiple networks into a single experience."
        />

        <FeatureCard
          title="Interoperability"
          copy="Built around OCPP 1.6J and WebSocket connectivity so operators can work across hardware vendors rather than a single manufacturer."
        />

        <FeatureCard
          title="Operational visibility"
          copy="Telemetry, sessions, transactions, and charger health give teams a clearer view of what is happening across sites."
        />
      </Container>

      <section className="bg-cream">
        <Container className="py-20">
          <SectionTitle
            eyebrow="How it fits"
            title="From charger connectivity to the systems around your network."
            copy="The platform is designed to support the operating realities of CPOs, fleets, enterprises, energy companies, and public infrastructure bodies."
          />

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
        eyebrow="Trevia CMS · Charging Management Software"
        title="Run every charger from one platform."
        copy="Trevia CMS is the operating layer for charging networks: connecting chargers over OCPP and giving operators one place to monitor, operate, and scale."
      >
        <PrimaryButton />
        <SecondaryButton to="/technology">
          Review the Architecture
        </SecondaryButton>
      </PageIntro>

      <Container className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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

        <ArchitectureDiagram />
      </Container>

      <section className="border-y border-line bg-cream">
        <Container className="py-16">
          <SectionTitle
            eyebrow="Capabilities"
            title="The operating surface behind a connected network."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cmsFeatures.map(([index, title, copy]) => (
              <FeatureCard
                key={index}
                index={index}
                title={title}
                copy={copy}
              />
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <div className="grid gap-5">
  <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
    <img
      src="/images/dashboard.png"
      alt="Trevia CMS dashboard"
      className="block h-auto w-full"
    />
  </div>

  <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
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

          <div className="mt-6 rounded-xl border border-sun/40 bg-sun-pale/50 p-5 text-sm leading-relaxed text-ink-2">
            This page keeps reliability visible without turning unverified
            figures into public claims.
          </div>
        </div>
      </Container>

      <section className="bg-cream">
        <Container className="py-16">
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
                  answer:
                    "Payment and settlement functionality is not described here until the current scope is confirmed.",
                },
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
        eyebrow="Trevia Drive · For EV Drivers"
        title="One app to find charging, across networks."
        copy="Charging infrastructure is spread across multiple operators and networks. Trevia Drive brings it into a single, unified discovery experience — built on the same infrastructure layer that runs Trevia CMS."
      >
        <PrimaryButton to="/contact">
          Explore Charging
        </PrimaryButton>

        <SecondaryButton to="/contact">
          Download the App
        </SecondaryButton>
      </PageIntro>

      <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            eyebrow="The problem"
            title="Drivers should not have to check one app per network."
            copy="Trevia Drive aggregates charging infrastructure from multiple networks and operators into one discovery experience."
          />

          <BulletList
            items={[
              "Discover charging stations across multiple networks and operators in one place.",
              "Use a unified discovery experience instead of switching between operator-specific apps.",
              "Stay connected to the underlying infrastructure layer that powers Trevia CMS.",
            ]}
          />
        </div>

<div className="flex items-center justify-center gap-3 rounded-2xl border border-line bg-cream p-4 sm:gap-5 sm:p-8">  <div className="w-[190px] rotate-[-3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl">
    <img
      src="/images/drive-home.png"
      alt="Trevia Drive home screen"
      className="block w-full"
    />
  </div>

  <div className="hidden w-[145px] sm:w-[190px] rotate-[3deg] overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-2xl sm:block">
    <img
      src="/images/drive-explore.png"
      alt="Trevia Drive explore screen"
      className="block w-full"
    />
  </div>
</div>
      </Container>

      <section className="bg-cream">
        <Container className="py-16">
          <SectionTitle
            eyebrow="Connected by design"
            title="The driver side and operator side share the same infrastructure layer."
            copy="Trevia Drive and Trevia CMS are connected through the charging infrastructure layer, allowing charger data from connected networks to surface in the driver-facing experience."
          />

          <div className="mt-10">
            <ArchitectureDiagram compact />
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <SectionTitle
          eyebrow="Questions"
          title="Trevia Drive, clearly explained."
        />

        <div className="mt-8 max-w-3xl">
          <FAQ
            items={[
              {
                question: "Is Trevia Drive connected to Trevia CMS?",
                answer:
                  "Yes. Both run on Trevia's underlying charging infrastructure layer, which allows Trevia Drive to surface charger data from connected networks.",
              },
              {
                question:
                  "Is the app currently available on Android or iOS?",
                answer:
                  "Availability is not described here until the current app store status is confirmed.",
              },
              {
                question: "How many networks does Trevia Drive cover?",
                answer:
                  "No network count is published here without verified current coverage information.",
              },
            ]}
          />
        </div>
      </Container>

      <CTASection
        title="Explore the charging discovery experience."
        copy="Talk with the Trevia team about the driver-facing side of connected charging infrastructure."
      />
    </>
  );
}


const technologyFeatures = [
  [
    "OCPP 1.6J",
    "The open protocol that forms the foundation of Trevia's hardware-agnostic positioning.",
  ],
  [
    "WebSocket connectivity",
    "Persistent connections enable real-time status updates rather than periodic polling.",
  ],
  [
    "Authentication & heartbeats",
    "Connected chargers authenticate and send heartbeat signals so unavailable devices can be detected.",
  ],
  [
    "Commands & remote operations",
    "Where supported by hardware, Trevia CMS can issue commands such as querying status or resetting a charger.",
  ],
  [
    "Telemetry, sessions & transactions",
    "The platform ingests status, faults, energy readings, session data, and transaction-level records.",
  ],
  [
    "APIs & integrations",
    "Charging, session, and operational data is designed to be exposed to reporting, billing, and fleet systems.",
  ],
];


export function TechnologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Technology"
        title="Built for interoperability, not a single vendor."
        copy="Trevia CMS speaks the open protocols that connect charging hardware, so operators are not locked into one manufacturer's ecosystem."
      >
        <PrimaryButton to="/contact">
          Talk to Our Team
        </PrimaryButton>
      </PageIntro>

      <section className="bg-ink-2 text-cream">
        <Container className="py-16">
          <div className="max-w-2xl">
            <Eyebrow>Architecture overview</Eyebrow>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Chargers → OCPP → Trevia CMS → APIs and integrations.
            </h2>

            <p className="mt-4 leading-relaxed text-cream/60">
              Each connected charger communicates with Trevia CMS over OCPP;
              the platform processes that data and makes it available to
              operators directly and, where integrated, to third-party systems
              via API.
            </p>
          </div>

          <div className="mt-10">
            <TechnologyFlow />
          </div>
        </Container>
      </section>

      <Container className="grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {technologyFeatures.map(([title, copy], index) => (
          <FeatureCard
            key={title}
            index={`0${index + 1}`}
            title={title}
            copy={copy}
          />
        ))}
      </Container>

      <Container className="pb-16">
        <div className="rounded-xl border border-sun/40 bg-sun-pale/50 p-5 text-sm leading-relaxed text-ink-2">
          Cloud provider, backend architecture, public API documentation, and
          vendor-specific remote command scope are not published here until
          verified.
        </div>
      </Container>

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
        eyebrow="Solutions"
        title="One operating layer for the people running charging infrastructure."
        copy="Trevia CMS is designed around the needs of operators, fleets, enterprises, energy companies, and government infrastructure bodies."
      >
        <PrimaryButton />
        <SecondaryButton to="/technology">
          See the Technology
        </SecondaryButton>
      </PageIntro>

      <Container className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(solutionContent).map(([key, item]) => (
          <Link
            key={key}
            to={item.to}
            className="group rounded-xl border border-line bg-white p-6 transition-colors hover:border-sun"
          >
            <Eyebrow>{item.label}</Eyebrow>

            <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-mute">
              {item.solution}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pine">
              Explore solution
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </Container>

      <CTASection />
    </>
  );
}


export function SolutionDetailPage({ type }) {
  const item = solutionContent[type];

  return (
    <>
      <PageIntro
        eyebrow={item.label}
        title={item.title}
        copy={item.solution}
      >
        <PrimaryButton />
      </PageIntro>

      <Container className="grid gap-6 py-16 lg:grid-cols-3">
        <div className="rounded-xl border border-line bg-cream p-6 lg:col-span-1">
          <Eyebrow>Problem</Eyebrow>

          <p className="mt-4 text-lg font-semibold leading-relaxed text-ink">
            {item.problem}
          </p>
        </div>

        <div className="rounded-xl border border-sun/40 bg-sun-pale/50 p-6 lg:col-span-1">
          <Eyebrow>Trevia solution</Eyebrow>

          <p className="mt-4 text-lg font-semibold leading-relaxed text-ink">
            {item.solution}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-white p-6 lg:col-span-1">
          <Eyebrow>Business outcome</Eyebrow>

          <p className="mt-4 text-lg font-semibold leading-relaxed text-ink">
            {item.outcome}
          </p>
        </div>
      </Container>

      <section className="bg-ink-2 text-cream">
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Eyebrow>What to run centrally</Eyebrow>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream">
              Operational visibility without adding another silo.
            </h2>

            <BulletList items={item.focus} />
          </div>

          {type === "cpos" ? (
  <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
    <img
      src="/images/cpo-analytics.png"
      alt="Trevia CPO analytics dashboard"
      className="block h-auto w-full"
    />
  </div>
) : type === "fleets" ? (
  <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
    <img
      src="/images/fleet-overview.png"
      alt="Trevia fleet operator dashboard"
      className="block h-auto w-full"
    />
  </div>
) : (
  <ArchitectureDiagram compact />
)}
        </Container>
      </section>

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
        eyebrow="About Trevia"
        title="The software layer behind a connected charging network."
        copy="Trevia EV Technologies is a software infrastructure company for India's EV charging ecosystem. Trevia builds the operating layer that connects charging hardware to the people who run it."
      >
        <PrimaryButton />
        <SecondaryButton to="/traction">
          View the Journey
        </SecondaryButton>
      </PageIntro>

      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="What Trevia is"
            title="Not a charger manufacturer. Not a closed network."
            copy="Trevia is not a hardware vendor, not a charge point operator, and not a single-sided consumer app. Its role is to provide the digital infrastructure between chargers, operators, fleets, enterprises, and drivers."
          />

          <BulletList
            items={[
              "Digital infrastructure for EV charging.",
              "Hardware-agnostic and vendor-neutral by design.",
              "Trevia CMS for operations and Trevia Drive for charging discovery.",
            ]}
          />
        </div>

        <InteroperabilityDiagram />
      </Container>

      <section className="bg-cream">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Vision</Eyebrow>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Become the core operating layer for EV charging infrastructure
              across India.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-mute">
            Trevia's vision is to extend the same interoperability model into
            adjacent energy-mobility infrastructure as the market matures.
          </p>
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

      <Container className="py-16">
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
        eyebrow="Request a Demo"
        title="See the operating layer for your charging network."
        copy="Tell us a little about your organization and the infrastructure you are looking to operate."
      />

      {submitted ? (
        <Container className="py-20">
          <div className="mx-auto max-w-xl rounded-2xl border border-sun/50 bg-sun-pale/60 p-8 text-center">
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
      ) : (
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Start a conversation"
              title="Bring your sites, hardware, and workflows to the conversation."
              copy="Use the form to share the context that will help the Trevia team understand your charging infrastructure."
            />

            <BulletList
              items={[
                "Discuss OCPP connectivity and hardware interoperability.",
                "Review monitoring, remote operations, and multi-site workflows.",
                "Explore integrations for operator, fleet, enterprise, or public infrastructure systems.",
              ]}
            />
          </div>

          <form
            onSubmit={submit}
            className="grid gap-5 rounded-2xl border border-line bg-white p-6 shadow-panel sm:grid-cols-2"
          >
            <label className="grid gap-2 text-sm font-medium text-ink">
              Name

              <input
                required
                name="name"
                autoComplete="name"
                className="h-11 rounded-md border border-line bg-background px-3 font-normal outline-none ring-sun transition focus:ring-2"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink">
              Work Email

              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="h-11 rounded-md border border-line bg-background px-3 font-normal outline-none ring-sun transition focus:ring-2"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink">
              Company

              <input
                required
                name="company"
                autoComplete="organization"
                className="h-11 rounded-md border border-line bg-background px-3 font-normal outline-none ring-sun transition focus:ring-2"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink">
              Phone

              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="h-11 rounded-md border border-line bg-background px-3 font-normal outline-none ring-sun transition focus:ring-2"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
              Organization Type

              <select
                required
                name="organizationType"
                className="h-11 rounded-md border border-line bg-background px-3 font-normal outline-none ring-sun transition focus:ring-2"
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
                className="rounded-md border border-line bg-background px-3 py-3 font-normal outline-none ring-sun transition focus:ring-2"
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

              <p className="mt-3 text-xs text-mute">
                Frontend only for now — this form does not send an email.
              </p>
            </div>
          </form>
        </Container>
      )}
    </>
  );
}


export function SimpleInfoPage({ title, eyebrow, copy }) {
  return (
    <>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        copy={copy}
      />

      <Container className="max-w-3xl py-16">
        <div className="rounded-xl border border-line bg-white p-6 text-sm leading-relaxed text-mute">
          <p>
            This page is included as enterprise-site scaffolding. Trevia will
            publish the full policy or resource content here once it is
            approved for public use.
          </p>
        </div>
      </Container>
    </>
  );
}