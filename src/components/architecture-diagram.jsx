import { ArrowDown, ArrowRight, Radio, Server, Workflow } from "lucide-react";

const chargers = ["Charger A", "Charger B", "Charger C", "Charger D", "Charger E"];

export function ArchitectureDiagram({ compact = false }) {  return <div className={`rounded-2xl bg-ink-2 p-5 text-cream shadow-shell sm:p-6 ${compact ? "" : "dark-grid"}`}>
    <div className="mb-5 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sun-soft">Network architecture</span><span className="font-mono text-[10px] text-cream/45">TREVIA / FLOW</span></div>
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">{chargers.map((charger, index) => <div key={charger} className="rounded-lg bg-ink px-2 py-3 text-center ring-1 ring-cream/10"><span className="block font-mono text-[10px] text-cream/85">CH-0{index + 1}</span><span className="mt-0.5 block text-[10px] text-cream/40">{charger}</span></div>)}</div>
      <div className="flex items-center justify-center gap-2 text-sun-soft"><ArrowDown className="size-4" /><span className="font-mono text-[10px] uppercase tracking-[0.14em]">OCPP 1.6J · WebSocket</span></div>
      <div className="rounded-lg bg-sun py-3.5 text-center text-sm font-semibold tracking-tight text-ink ring-1 ring-cream/40">Trevia CMS — Operating Layer</div>
      <div className="flex items-center justify-center gap-2 text-sun-soft"><ArrowDown className="size-4" /><span className="font-mono text-[10px] uppercase tracking-[0.14em]">APIs · Integrations</span></div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{["Operators", "Fleets", "Enterprises", "Systems"].map((item) => <div key={item} className="rounded-lg bg-ink px-2 py-3 text-center text-[11px] text-cream/75 ring-1 ring-cream/10">{item}</div>)}</div>
    </div>
  </div>;
}

export function InteroperabilityDiagram() {
  return <div className="rounded-2xl border border-line bg-white p-6 shadow-panel sm:p-8"><div className="grid grid-cols-5 gap-2">{chargers.map((charger) => <div key={charger} className="rounded-lg border border-line bg-background px-2 py-3 text-center text-xs font-semibold text-ink">{charger.replace("Charger ", "")}</div>)}</div><div className="my-5 flex items-center justify-center gap-2"><ArrowDown className="size-4 text-sun" /><span className="rounded-md bg-sun-pale px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-pine">OCPP 1.6J</span></div><div className="rounded-xl border border-sun/50 bg-sun-pale p-5 text-center"><p className="font-semibold text-ink">Trevia CMS</p><p className="mt-1 text-xs text-mute">Common operating layer · centralized control</p></div></div>;
}

export function TechnologyFlow() {
  const items = [{ label: "Chargers", icon: Radio }, { label: "OCPP 1.6J", icon: Workflow }, { label: "Trevia CMS", icon: Server }, { label: "APIs / Integrations", icon: Workflow }, { label: "Operator systems", icon: Server }];
  return <div className="grid gap-3 md:grid-cols-5 md:items-center">{items.map((item, index) => <div key={item.label} className="flex items-center gap-3 md:contents"><div className={`flex items-center gap-3 rounded-xl border px-4 py-4 ${item.label === "Trevia CMS" ? "border-sun bg-sun-pale" : "border-line bg-white"}`}><item.icon className={`size-4 ${item.label === "Trevia CMS" ? "text-sun" : "text-pine"}`} /><span className="text-sm font-semibold text-ink">{item.label}</span></div>{index < items.length - 1 && <ArrowRight className="mx-auto hidden size-4 text-sun md:block" />}{index < items.length - 1 && <ArrowDown className="mx-auto size-4 text-sun md:hidden" />}</div>)}</div>;
}