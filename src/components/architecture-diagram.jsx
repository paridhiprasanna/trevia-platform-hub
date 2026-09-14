import { ArrowDown, ArrowRight, Radio, Server, Workflow } from "lucide-react";

const chargers = ["Charger A", "Charger B", "Charger C", "Charger D", "Charger E"];

export function ArchitectureDiagram({ compact = false }) {
  return (
    <div
      className={`rounded-2xl bg-ink-2 p-5 text-cream shadow-shell sm:p-6 ${
        compact ? "" : "dark-grid"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sun-soft">
          Network architecture
        </span>
        <span className="font-mono text-[10px] text-white">
          TREVIA / FLOW
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Chargers */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {chargers.map((charger, index) => (
            <div
              key={charger}
              className="rounded-lg bg-ink px-2 py-3 text-center ring-1 ring-cream/10"
            >
              <span className="block font-mono text-[10px] text-white">
                CH-0{index + 1}
              </span>
              <span className="mt-0.5 block text-[10px] text-cream/40">
                {charger}
              </span>
            </div>
          ))}
        </div>

        {/* OCPP */}
        <div className="flex items-center justify-center gap-2 text-white">
          <ArrowDown className="size-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
            OCPP 1.6J · WebSocket
          </span>
        </div>

        {/* Trevia CMS */}
        <div className="rounded-lg bg-sun py-3.5 text-center text-sm font-semibold tracking-tight text-white">
          Trevia CMS — Operating Layer
        </div>

        {/* APIs */}
        <div className="flex items-center justify-center gap-2 text-white">
          <ArrowDown className="size-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
            APIs & Integrations
          </span>
        </div>

        {/* Network sides */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {["CPOs", "Fleets", "Enterprises", "Energy", "Systems"].map(
            (item) => (
              <div
                key={item}
                className="rounded-lg bg-ink px-2 py-3 text-center text-[11px] text-white"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Technical metadata */}
      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-cream/10 pt-5 sm:grid-cols-4">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white">
            Protocol
          </span>
          <p className="mt-1 text-xs font-semibold text-white">
            OCPP 1.6J
          </p>
        </div>

        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white">
            Transport
          </span>
          <p className="mt-1 text-xs font-semibold text-white">
            WebSocket
          </p>
        </div>

        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white">
            Scope
          </span>
          <p className="mt-1 text-xs font-semibold text-white">
            Multi-site
          </p>
        </div>

        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white">
            Integration
          </span>
          <p className="mt-1 text-xs font-semibold text-white">
            APIs
          </p>
        </div>
      </div>
    </div>
  );
}

export function InteroperabilityDiagram() {
  return <div className="rounded-2xl border border-line bg-white p-6 shadow-panel sm:p-8"><div className="grid grid-cols-5 gap-2">{chargers.map((charger) => <div key={charger} className="rounded-lg border border-line bg-background px-2 py-3 text-center text-xs font-semibold text-ink">{charger.replace("Charger ", "")}</div>)}</div><div className="my-5 flex items-center justify-center gap-2"><ArrowDown className="size-4 text-sun" /><span className="rounded-md bg-sun-pale px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-pine">OCPP 1.6J</span></div><div className="rounded-xl border border-sun/50 bg-sun-pale p-5 text-center"><p className="font-semibold text-ink">Trevia CMS</p><p className="mt-1 text-xs text-mute">Common operating layer · centralized control</p></div></div>;
}

export function TechnologyFlow() {
  const items = [
    { label: "Chargers", icon: Radio },
    { label: "OCPP 1.6J", icon: Workflow },
    { label: "Trevia CMS", icon: Server },
    { label: "APIs / Integrations", icon: Workflow },
    { label: "Operator systems", icon: Server },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-5 md:items-center">
      {items.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-3 md:contents"
        >
          <div
            className={`relative flex items-center gap-3 overflow-hidden rounded-xl border px-4 py-4 ${
              item.label === "Trevia CMS"
                ? "border-sun bg-sun-pale"
                : "border-line bg-white"
            }`}
          >
            <item.icon
              className={`relative z-10 size-4 ${
                item.label === "Trevia CMS" ? "text-sun" : "text-pine"
              }`}
            />

            <span className="relative z-10 text-sm font-semibold text-ink">
              {item.label}
            </span>

            {/* Live signal */}
            {index < items.length - 1 && (
              <span className="absolute right-3 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-sun opacity-0 animate-ping md:block" />
            )}

            {/* Heartbeat / telemetry indicator */}
            {index === 0 && (
              <span className="absolute bottom-1.5 right-3 flex items-end gap-[2px]">
                <span className="h-1 w-[2px] rounded-full bg-sun animate-pulse" />
                <span className="h-2 w-[2px] rounded-full bg-sun animate-pulse [animation-delay:150ms]" />
                <span className="h-1.5 w-[2px] rounded-full bg-sun animate-pulse [animation-delay:300ms]" />
                <span className="h-3 w-[2px] rounded-full bg-sun animate-pulse [animation-delay:450ms]" />
              </span>
            )}
          </div>

          {index < items.length - 1 && (
            <>
              {/* Desktop signal */}
              <div className="relative hidden items-center justify-center md:flex">
  {/* Connection line */}
  <div className="h-px w-full bg-line" />

  {/* Animated data packet */}
  <span
    className="absolute left-0 size-1.5 rounded-full bg-sun shadow-[0_0_8px_rgba(0,161,155,0.7)] animate-[dataFlow_2.2s_linear_infinite]"
  />

  {/* Second subtle packet */}
  <span
    className="absolute left-0 size-1 rounded-full bg-sun/60 animate-[dataFlow_2.2s_linear_infinite_1.1s]"
  />

  {/* Signal label */}
  <span className="absolute right-0 bg-ink px-1 font-mono text-[7px] uppercase tracking-wider text-mute">
    {index === 0
      ? "heartbeat"
      : index === 1
        ? "telemetry"
        : index === 2
          ? "data"
          : "API"}
  </span>
</div>

              {/* Mobile signal */}
              <ArrowDown className="mx-auto size-4 text-sun md:hidden" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}