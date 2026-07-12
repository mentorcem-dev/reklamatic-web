const packages = [
  { name: "Network Test", price: "$900", deposit: "$450 deposit", delivery: "1 vertical video + 6 placements", reach: "Planning range: 150K–500K organic views", best: "Best for proving the angle before scaling." },
  { name: "Network Scale", price: "$1,750", deposit: "$875 deposit", delivery: "2 vertical videos + 12 placements", reach: "Planning range: 400K–1.2M organic views", best: "Best for a product launch or promotion." },
  { name: "Full Network", price: "$3,500", deposit: "$1,750 deposit", delivery: "3 vertical videos + up to 26 placements", reach: "Planning range: 1M–3M organic views", best: "Best for broad, multi-platform market coverage." },
];

export default function CommercialOffers() {
  return (
    <section id="commercial" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14"><p className="text-pink-400 font-mono text-xs uppercase tracking-[.2em] mb-4">Sponsored distribution</p><h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Choose how widely your product should travel.</h2><p className="text-lg text-gray-400 leading-relaxed">We turn your product into vertical content and place it across relevant accounts. DIY and garden products reach practical, project-minded viewers; epoxy and tool products reach makers; AI tools reach automation-focused audiences.</p></div>
        <div className="grid lg:grid-cols-3 gap-5">
          {packages.map((item, index) => <article key={item.name} className={`rounded-3xl border p-7 ${index === 1 ? "border-purple-500 bg-purple-500/10" : "border-white/10 bg-white/[.03]"}`}>
            <div className="flex justify-between gap-4 items-start mb-6"><h3 className="text-xl font-bold">{item.name}</h3>{index === 1 && <span className="text-[10px] uppercase tracking-wider bg-purple-500 px-3 py-1 rounded-full">Most useful</span>}</div>
            <div className="text-4xl font-bold mb-2">{item.price}</div><div className="text-sm text-purple-300 mb-7">{item.deposit}</div>
            <ul className="space-y-4 text-sm text-gray-300"><li>✓ {item.delivery}</li><li>✓ {item.reach}</li><li>✓ Platform-native captions and publishing</li><li>✓ Campaign reporting and next-step recommendation</li></ul>
            <p className="mt-7 pt-6 border-t border-white/10 text-sm text-gray-500">{item.best}</p>
          </article>)}
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-950/60 to-pink-950/30 p-6 sm:p-7 md:flex justify-between items-center gap-8"><div><h3 className="text-2xl font-bold mb-2">Need the media kit and account breakdown?</h3><p className="text-gray-400">Tell us your product, target market and preferred launch date. We will recommend the right accounts and package.</p></div><a href="mailto:info@reklamatic.ai?subject=Media%20Kit%20Request&body=Hi%20Reklamatic%2C%0A%0AProduct%3A%0ATarget%20market%3A%0ALaunch%20date%3A" className="inline-flex w-full md:w-auto justify-center mt-6 md:mt-0 shrink-0 px-7 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">Request media kit</a></div>
      </div>
    </section>
  );
}
