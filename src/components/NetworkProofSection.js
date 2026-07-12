const platforms = [
  ["Instagram accounts", "8"],
  ["Facebook pages", "8"],
  ["TikTok accounts", "5"],
  ["YouTube channels", "5"],
];

const metrics = [
  ["152.1M+", "Verified lifetime views", "Instagram, TikTok and YouTube"],
  ["84.3M", "Top-performing Reel", "A real pinned result, not a forecast"],
  ["8.26M", "Facebook views", "Most recent verified 28-day snapshot"],
  ["107K+", "Followers and subscribers", "Non-deduplicated network total"],
];

export default function NetworkProofSection() {
  return (
    <section id="proof" className="py-24 px-6 md:px-12 border-y border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-end mb-14">
          <div>
            <p className="text-purple-400 font-mono text-xs uppercase tracking-[.2em] mb-4">Owned media network</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">We do not sell theory. We operate the distribution.</h2>
          </div>
          <div>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">Reklamatic is a Turkey-based content and automation company operating a 26-channel short-form network across DIY, garden, epoxy, satisfying content and AI. We create the assets, publish them and measure what happens.</p>
            <div className="flex flex-wrap gap-2">{platforms.map(([label, value]) => <span key={label} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"><b className="text-purple-300">{value}</b> {label}</span>)}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(([value, label, note]) => <article key={label} className="rounded-3xl border border-white/10 bg-white/[.035] p-6"><strong className="block text-4xl md:text-5xl tracking-tight mb-4">{value}</strong><h3 className="text-base font-semibold mb-2">{label}</h3><p className="text-sm text-gray-500 leading-relaxed">{note}</p></article>)}
        </div>
        <p className="text-xs text-gray-600 mt-5">Metrics are based on account analytics snapshots reviewed in July 2026. Follower totals are non-deduplicated. Campaign view ranges are estimates, never guarantees.</p>
      </div>
    </section>
  );
}
