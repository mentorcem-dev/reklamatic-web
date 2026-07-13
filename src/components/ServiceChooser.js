"use client";

import { useEffect, useState } from "react";

const services = [
  {
    id: "sponsor",
    tab: "Promote my product",
    label: "FOR BRANDS",
    title: "Put your product in videos, then publish through our media network.",
    text: "We create short product stories and publish them on the agreed Instagram, Facebook, TikTok and YouTube channels that we operate. You receive a fixed number of finished videos, real published posts and one results report.",
    flow: ["Choose the product", "Match the audiences", "Approve the videos", "Publish and report"],
    packages: [
      {
        name: "Network Test",
        price: "$900",
        note: "$450 deposit to begin",
        badge: "A focused first test",
        items: ["1 original vertical product story", "6 published posts on 6 selected channels", "Product call-to-action and platform captions", "Results collected from all 6 posts"],
        reach: "Planning estimate from past data: 150K–500K total views",
      },
      {
        name: "Network Growth",
        price: "$1,750",
        note: "$875 deposit to begin",
        badge: "Most popular",
        featured: true,
        items: ["2 original vertical product stories", "12 published posts on 12 selected channels", "Each story matched to the most relevant audiences", "One campaign report covering all posts"],
        reach: "Planning estimate from past data: 400K–1.2M total views",
      },
      {
        name: "Full Network Launch",
        price: "$3,500",
        note: "$1,750 deposit to begin",
        badge: "Maximum network coverage",
        items: ["3 original vertical product stories", "26 posts across our complete channel network", "The best story assigned to each audience", "Full report and next-campaign recommendation"],
        reach: "Planning estimate from past data: 1M–3M total views",
      },
    ],
  },
  {
    id: "managed",
    tab: "Run my social media",
    label: "FOR BUSINESSES",
    title: "Give us the monthly work behind your own social channels.",
    text: "We plan, create and organize short-form content for your business accounts. Your team approves the work before publishing, and each month you receive a simple review of what worked and what we should make next.",
    flow: ["Learn your business", "Plan the month", "Create and approve", "Publish and improve"],
    packages: [
      {
        name: "Managed Content Operation",
        price: "From €1,250 / month",
        note: "Monthly service for one business",
        badge: "We run the workflow",
        wide: true,
        items: ["12 finished vertical videos every month", "Planning for up to 4 business channels", "Captions, approval and publishing calendar", "Monthly performance review and next plan", "A person checks every approved post"],
        reach: "For businesses that need consistent content without building an internal content team.",
      },
    ],
  },
  {
    id: "install",
    tab: "Install the system",
    label: "FOR TEAMS AND AGENCIES",
    title: "Install the content operation we built to manage our own network.",
    text: "We set up a practical workflow inside your company: ideas, repeatable production, human approval, publishing plan and a clear results board. Your team receives the system, training and support to operate it.",
    flow: ["Map your operation", "Build the workflow", "Train your team", "Launch with support"],
    packages: [
      {
        name: "Business Content System",
        price: "€1,490 setup",
        note: "50% deposit to begin",
        badge: "For one business",
        items: ["One brand and up to 4 business channels", "30-day idea and publishing plan", "Video formats, instructions and approval steps", "Publishing calendar and results board", "Team training and 30 days of support"],
        reach: "A one-time installation that gives your team a repeatable way to create and publish.",
      },
      {
        name: "White-label Agency System",
        price: "From €3,500 setup",
        note: "Scope confirmed before work begins",
        badge: "For agencies and multiple brands",
        items: ["Separate workspaces for multiple clients", "Reusable production and approval workflow", "Team roles and client reporting structure", "Agency training and operating guide", "60 days of launch support"],
        reach: "For agencies that want to deliver the operation under their own brand.",
      },
    ],
  },
];

export default function ServiceChooser() {
  const [activeId, setActiveId] = useState("sponsor");
  const active = services.find((service) => service.id === activeId);

  useEffect(() => {
    const selectFromHash = () => {
      const requested = window.location.hash.replace("#services-", "");
      if (services.some((service) => service.id === requested)) setActiveId(requested);
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  return (
    <section className="service-chooser section" id="services">
      <div className="section-heading centered">
        <p className="eyebrow">CHOOSE WHAT YOU NEED</p>
        <h2>Three services. One clear place to compare them.</h2>
        <p>Select the result you want. The explanation and prices below will change with your choice.</p>
      </div>

      <div className="service-tabs" role="tablist" aria-label="Choose a Reklamatic service">
        {services.map((service, index) => (
          <button
            key={service.id}
            id={"services-" + service.id}
            className={activeId === service.id ? "active" : ""}
            onClick={() => setActiveId(service.id)}
            role="tab"
            aria-selected={activeId === service.id}
            aria-controls="service-panel"
          >
            <span>0{index + 1}</span>{service.tab}
          </button>
        ))}
      </div>

      <div className="service-panel" id="service-panel" role="tabpanel">
        <div className="service-summary">
          <p className="eyebrow">{active.label}</p>
          <h3>{active.title}</h3>
          <p>{active.text}</p>
          <div className="mini-flow">
            {active.flow.map((step, index) => <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}
          </div>
        </div>

        <div className={"service-packages " + (active.packages.length === 1 ? "single" : "")}>
          {active.packages.map((item) => (
            <article className={"service-package " + (item.featured ? "featured" : "") + (item.wide ? " wide" : "")} key={item.name}>
              <span className="package-badge">{item.badge}</span>
              <h4>{item.name}</h4>
              <strong className="service-price">{item.price}</strong>
              <p className="service-note">{item.note}</p>
              <ul>{item.items.map((line) => <li key={line}>{line}</li>)}</ul>
              <p className="service-result">{item.reach}</p>
              <a className="button primary full" href={"mailto:info@reklamatic.ai?subject=" + encodeURIComponent(item.name)}>Ask about {item.name}</a>
            </article>
          ))}
        </div>
      </div>
      <p className="service-fineprint">Sponsorship view ranges are estimates from past performance, not guarantees. We guarantee the agreed production and published post count. Third-party software costs are separate from system-installation fees when required.</p>
    </section>
  );
}
