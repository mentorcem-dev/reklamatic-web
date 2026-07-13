"use client";

import { useState } from "react";

const stages = [
  { label: "Ideas", title: "Know what to make next", text: "The system turns your products, audience and recent results into a practical queue of video ideas.", output: "A ready-to-use content queue" },
  { label: "Create", title: "Produce without starting from zero", text: "Reusable instructions, formats and production steps help your team create each vertical video consistently.", output: "Platform-ready vertical videos" },
  { label: "Approve", title: "Keep a person in control", text: "Nothing needs to publish blindly. Your team can review the video, caption and product message first.", output: "A clear approval checkpoint" },
  { label: "Publish", title: "Send every post to the right place", text: "Approved content is assigned to the correct Instagram, Facebook, TikTok or YouTube channel and tracked.", output: "An organized publishing calendar" },
  { label: "Improve", title: "Use results to plan the next round", text: "The system records what worked and prepares the next tests instead of repeating weak content forever.", output: "A simple performance review" },
];

const offers = [
  {
    name: "Business Content System",
    price: "€1,490 setup",
    note: "50% deposit to begin",
    text: "We install the working process for one business and show your team how to operate it.",
    items: ["One brand and up to 4 business channels", "30-day idea and publishing plan", "Video formats, instructions and approval steps", "Publishing calendar and results board", "Team handover and 30 days of support"],
  },
  {
    name: "Managed Content Operation",
    price: "From €1,250 / month",
    note: "Monthly scope agreed in writing",
    text: "We operate the system with you when your team does not want to manage the daily content work.",
    items: ["Monthly planning and idea queue", "12 finished vertical videos", "Publishing to up to 4 business channels", "Captions, scheduling and approval", "Monthly performance review"],
    featured: true,
  },
  {
    name: "White-label Agency System",
    price: "From €3,500 setup",
    note: "Built for agencies with clients",
    text: "We install a multi-brand version that your agency can run under its own name.",
    items: ["Separate workspace for each client", "Repeatable production and approval flow", "Team roles and operating instructions", "Client-ready results reporting", "Training and 60 days of launch support"],
  },
];

export default function AutomationProduct() {
  const [active, setActive] = useState(0);
  const selected = stages[active];

  return (
    <section className="automation-product section" id="automation-product">
      <div className="automation-heading reveal">
        <div><p className="eyebrow">THE SYSTEM IS FOR SALE</p><h2>Install the content operation we built for ourselves.</h2></div>
        <p>We do not sell an empty dashboard. We install a working process that tells your business what to make, how to approve it, where to publish it and what to improve next.</p>
      </div>

      <div className="automation-demo reveal">
        <div className="demo-topbar"><span className="live-dot" /> REKLAMATIC CONTENT SYSTEM <strong>INTERACTIVE DEMO</strong></div>
        <div className="demo-stage-nav" role="tablist" aria-label="Automation stages">
          {stages.map((stage, index) => (
            <button key={stage.label} type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{stage.label}
            </button>
          ))}
        </div>
        <div className="demo-body" aria-live="polite">
          <div className="demo-copy"><span>STEP {String(active + 1).padStart(2, "0")}</span><h3>{selected.title}</h3><p>{selected.text}</p></div>
          <div className="demo-output"><span>SYSTEM OUTPUT</span><strong>{selected.output}</strong><div className="output-lines"><i /><i /><i /></div></div>
        </div>
      </div>

      <div className="automation-offers">
        {offers.map((offer) => (
          <article className={"automation-offer reveal " + (offer.featured ? "featured" : "")} key={offer.name}>
            {offer.featured && <span className="offer-badge">WE RUN IT WITH YOU</span>}
            <h3>{offer.name}</h3><div className="automation-price">{offer.price}</div><p className="offer-note">{offer.note}</p><p>{offer.text}</p>
            <ul>{offer.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className="button primary full" href={"mailto:info@reklamatic.ai?subject=" + encodeURIComponent(offer.name)}>Ask for this system</a>
          </article>
        ))}
      </div>
      <p className="automation-fineprint">Software, publishing platform and third-party video-generation fees are quoted separately when they are needed. You own the business workflow and content created for your company.</p>
    </section>
  );
}
