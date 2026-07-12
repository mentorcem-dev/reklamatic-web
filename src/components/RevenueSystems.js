const services = [
  ["AI Product Video Pack", "€650", "Five ready-to-publish vertical product videos for brands that need more creative without a full agency contract."],
  ["Content Machine Setup", "€1,290", "We install the strategy, workflow, templates and 30-day publishing plan your team can actually follow."],
  ["Implementation Day", "€750", "A prepaid working session to install practical content, sales or support automations inside your business."],
  ["Managed Content System", "Custom", "Ongoing production, publishing and learning loops for companies that want a reliable monthly operation."],
  ["White-label Agency System", "Custom", "The same production and automation infrastructure, delivered under your agency brand."],
  ["Usage & Ad Licensing", "Add-on", "Extend high-performing creative into paid ads, websites and retailer pages with clear usage terms."],
];

const agents = ["Opportunity Scout", "Sales Director", "Content Analyst", "Offer Architect"];

export default function RevenueSystems() {
  return (
    <section id="systems" className="py-24 px-6 md:px-12 bg-[#090912] border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-14"><div><p className="text-cyan-300 font-mono text-xs uppercase tracking-[.2em] mb-4">Built for revenue</p><h2 className="text-4xl md:text-6xl font-bold tracking-tight">A working content operation, not another dashboard demo.</h2></div><div className="text-gray-400 text-lg leading-relaxed"><p className="mb-4">We use our own production and publishing workflow every day. Businesses can buy the output, the installed system or ongoing management.</p><p>Inside our private command center, four AI operators turn performance evidence into researched opportunities, follow-up drafts, content tests and clearer offers. External messages always stay under human approval.</p><div className="flex flex-wrap gap-2 mt-6">{agents.map(a=><span key={a} className="px-3 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">{a}</span>)}</div></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{services.map(([name, price, desc])=><article key={name} className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><div className="text-purple-300 text-sm font-mono mb-3">{price}</div><h3 className="text-xl font-bold mb-3">{name}</h3><p className="text-gray-500 text-sm leading-relaxed">{desc}</p></article>)}</div>
      </div>
    </section>
  );
}
