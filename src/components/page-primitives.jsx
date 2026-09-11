import { ArrowRight, Check, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sun">
      {children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
  children,
  dark = false,
}) {
  return (
    <section className={dark ? "bg-ink-2 text-cream" : ""}>
      <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:py-24">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1
            className={`mt-5 max-w-[18ch] text-balance text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl ${
              dark ? "text-cream" : "text-ink"
            }`}
          >
            {title}
          </h1>

          <p
            className={`mt-6 max-w-[52ch] text-lg leading-relaxed ${
              dark ? "text-cream/65" : "text-mute"
            }`}
          >
            {copy}
          </p>

          {children && (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function PrimaryButton({
  to = "/contact",
  children = "Request a Demo",
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md bg-sun px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sun-soft"
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function SecondaryButton({
  to = "/platform",
  children = "Explore the Platform",
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md border border-line bg-white/60 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function CTASection({
  title = "Run your charging network as one connected system.",
  copy = "Talk with the Trevia team about the operating layer behind your sites, hardware, and workflows.",
}) {
  return (
    <section className="bg-ink-2 text-cream">
      <Container className="flex flex-col gap-7 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-16">
        <div>
          <Eyebrow>Next step</Eyebrow>

          <h2 className="mt-3 max-w-[22ch] text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-[48ch] leading-relaxed text-cream/60">
            {copy}
          </p>
        </div>

        <PrimaryButton to="/contact">Request a Demo</PrimaryButton>
      </Container>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
        {title}
      </h2>

      {copy && (
        <p className="mt-4 text-base leading-relaxed text-mute">{copy}</p>
      )}
    </div>
  );
}

export function FeatureCard({ index, title, copy, children }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-sun/60">
      {index && (
        <span className="font-mono text-[10px] text-sun">{index}</span>
      )}

      {children}

      <h3 className="mt-3 text-base font-semibold text-ink">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-mute">{copy}</p>
    </article>
  );
}

export function PlaceholderPanel({ label, copy }) {
  return (
    <div className="flex min-h-72 flex-col justify-between rounded-2xl border border-dashed border-sun/70 bg-sun-pale/60 p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-pine">
          Replacement placeholder
        </span>

        <ShieldAlert className="size-4 text-sun" />
      </div>

      <div>
        <p className="text-xl font-semibold text-ink">[{label}]</p>

        <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-mute">
          {copy}
        </p>
      </div>
    </div>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-2">
          <Check className="mt-0.5 size-4 shrink-0 text-sun" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function FAQ({ items }) {
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-ink marker:hidden">
            {item.question}
          </summary>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}