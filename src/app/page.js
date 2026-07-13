import Image from "next/image";
import ServiceChooser from "@/components/ServiceChooser";

const services = [
  {
    number: "01",
    audience: "For brands",
    title: "Promote my product",
    text: "We create sponsored short videos and publish them through the most relevant channels in our 26-channel media network.",
    link: "See sponsorship packages",
    target: "sponsor",
  },
  {
    number: "02",
    audience: "For businesses",
    title: "Run my social media",
    text: "We plan, create and organize monthly short-form content for your own business accounts, with approval and a clear results review.",
    link: "See the monthly service",
    target: "managed",
  },
  {
    number: "03",
    audience: "For teams and agencies",
    title: "Install the system",
    text: "We install the content workflow we use ourselves: ideas, production, approval, publishing plan, reporting and team training.",
    link: "See system packages",
    target: "install",
  },
];

const process = [
  ["01", "Tell us the result you need", "Send your product, business or current content problem. We ask only for the information needed to understand the job."],
  ["02", "Receive a written plan", "You see the exact videos, channels, responsibilities, price and timeline before you commit."],
  ["03", "Approve the work", "A person checks quality and brand fit. Sponsored videos and business content are approved before publishing."],
  ["04", "Launch and see what happened", "We publish or hand over the agreed work, then provide results, training or the next content plan."],
];

const faqs = [
  ["What exactly is Reklamatic?", "Reklamatic is a short-form content production, distribution and automation company. We run our own social media network, create and manage content for businesses, and install the workflow inside other teams."],
  ["Do you own the channels used for sponsorships?", "We operate the 26-channel network shown in the proof section: 8 Instagram accounts, 8 Facebook pages, 5 TikTok accounts and 5 YouTube channels."],
  ["Can you manage my company accounts instead?", "Yes. The managed service is for your own Instagram, Facebook, TikTok or YouTube accounts. It is separate from buying sponsored distribution on our network."],
  ["What does installing the system mean?", "We build the working process inside your business: what to create, how to create it repeatedly, who approves it, where it is scheduled and how results are reviewed. Then we train your team."],
  ["Are sponsorship views guaranteed?", "No honest company can guarantee organic platform reach. We guarantee the agreed videos and number of published posts. View ranges are planning estimates based on past results."],
  ["Where do you work?", "Reklamatic is a registered business based in Türkiye, led by Cem Gülçağ. We work in English with companies targeting the United States, Europe and other global markets."],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reklamatic.ai",
    url: "https://reklamatic.ai",
    description: "Short-form content production, owned-media distribution and business content automation.",
    email: "info@reklamatic.ai",
    telephone: "+90-530-231-2947",
  };

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />

      <header className="site-header">
        <a className="logo" href="#top" aria-label="Reklamatic home">REKLAMATIC<span>.AI</span></a>
        <nav aria-label="Main navigation"><a href="#what-we-do">What we do</a><a href="#results">Real results</a><a href="#services">Services & prices</a><a href="#about">About us</a></nav>
        <a className="header-cta" href="#contact">Talk to us</a>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">SHORT-FORM CONTENT + DISTRIBUTION + AUTOMATION</p>
            <h1>We create short videos, publish them, and build the system behind them.</h1>
            <p className="hero-lead">Reklamatic helps in three clear ways: brands promote products through our 26-channel media network, businesses give us their monthly social content, and teams install our working content system.</p>
            <div className="hero-actions"><a className="button primary" href="#what-we-do">Choose how we help</a><a className="button secondary" href="#results">See real results</a></div>
            <div className="hero-trust"><span>26 operated channels</span><span>152.1M+ verified lifetime views</span><span>Global service in English</span></div>
          </div>
          <div className="hero-stage">
            <video autoPlay muted loop playsInline poster="/media/reklamatic-production-poster.jpg" aria-label="A short-form video created with the Reklamatic production system">
              <source src="/media/reklamatic-production-sample.mp4" type="video/mp4" />
            </video>
            <div className="video-label"><span>OUR PRODUCTION</span><strong>A real sample from the system we operate</strong></div>
            <div className="floating-stat stat-a"><strong>26</strong><span>channels operated</span></div>
            <div className="floating-stat stat-b"><strong>84.3M</strong><span>views on one Reel</span></div>
          </div>
        </section>

        <section className="path-section section" id="what-we-do">
          <div className="section-heading centered">
            <p className="eyebrow">START HERE</p>
            <h2>What do you want Reklamatic to do for you?</h2>
            <p>You do not need to understand our technology. Choose the business result you need.</p>
          </div>
          <div className="path-grid">
            {services.map((service) => (
              <article key={service.number}>
                <div className="path-top"><span>{service.number}</span><small>{service.audience}</small></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={"#services-" + service.target}>{service.link}<span>→</span></a>
              </article>
            ))}
          </div>
          <div className="plain-answer"><strong>In one sentence:</strong><span>We help you reach an audience, run your content, or own the system that runs it.</span></div>
        </section>

        <section className="results section" id="results">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">REAL RESULTS, NOT STOCK PHOTOS</p><h2>One proof section for the whole network.</h2></div>
            <p>These are screens from accounts and publishing tools we operate. They show what the network has achieved; they are not promises of future organic views.</p>
          </div>
          <div className="metric-grid">
            <article><strong>26</strong><span>Instagram, Facebook, TikTok and YouTube channels operated</span></article>
            <article><strong>152.1M+</strong><span>verified lifetime views across Instagram, YouTube and TikTok</span></article>
            <article><strong>84.3M</strong><span>views visible on our highest-performing Instagram Reel</span></article>
            <article><strong>8.26M</strong><span>views in our latest verified 28-day Facebook network snapshot</span></article>
          </div>
          <div className="platform-strip">
            <div><strong>8</strong><span>Instagram accounts</span></div><div><strong>8</strong><span>Facebook pages</span></div><div><strong>5</strong><span>TikTok accounts</span></div><div><strong>5</strong><span>YouTube channels</span></div>
          </div>
          <div className="proof-grid">
            <figure className="proof-network"><Image src="/proof/connected-network.png" width={2394} height={716} alt="Connected Reklamatic Facebook, Instagram, TikTok and YouTube accounts" /><figcaption><strong>The connected network</strong><span>The publishing screen shows the operated accounts across all four platforms.</span></figcaption></figure>
            <figure><Image src="/proof/instagram-84m-reel.jpg" width={1490} height={780} alt="Instagram Reels showing 84.3 million, 12.6 million and 3 million views" /><figcaption><strong>84.3M views on one Reel</strong><span>The same visible grid also shows Reels at 12.6M and 3M.</span></figcaption></figure>
            <figure><Image src="/proof/facebook-28-day.jpg" width={1512} height={805} alt="Facebook analytics showing 2.3 million views in 28 days" /><figcaption><strong>2.3M views on one Facebook page</strong><span>One real 28-day analytics screen—not the total of all eight pages.</span></figcaption></figure>
            <figure className="facebook-summary">
              <div className="signal-bars" aria-label="Eight Facebook pages"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <figcaption><strong>Facebook is an eight-page network</strong><span>Most active pages currently exceed 1.5M monthly views. Six pages reached Meta&apos;s 300K content monetization review step.</span></figcaption>
            </figure>
            <figure className="phone-proof"><Image src="/proof/facebook-monetization-review.png" width={1179} height={2556} alt="Facebook screen showing 300,000 views reached and content under policy review" /><figcaption><strong>Monetization review proof</strong><span>The screen confirms the 300K threshold was reached before policy review.</span></figcaption></figure>
          </div>
          <p className="proof-note">Analytics reviewed in July 2026. Follower and view totals across platforms are not presented as unique people. Platform performance changes over time.</p>
        </section>

        <ServiceChooser />

        <section className="process section" id="process">
          <div className="section-heading centered"><p className="eyebrow">ONE SIMPLE WORKING PROCESS</p><h2>You always know what happens next.</h2><p>The details change by service. The responsibility and approval process stay clear.</p></div>
          <div className="process-grid">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="about section" id="about">
          <div className="about-story"><p className="eyebrow">WHO WE ARE</p><h2>We built this operation for ourselves first.</h2><p>Reklamatic is a Türkiye-based content and media company led by Cem Gülçağ. Managing 26 channels repeatedly created a real business problem: ideas, production, approval, publishing and results had to work together.</p><p>We built a repeatable operation to solve that problem. Today, brands can use the reach of our network, businesses can hire us to run their content, and teams can install the system inside their own company.</p></div>
          <div className="trust-panel">
            <span>WHY A CLIENT CAN TRUST THE PROCESS</span>
            <ul><li>Registered business with a named founder</li><li>Real owned-channel screenshots, not borrowed case studies</li><li>Written scope, prices, deliverables and timeline before work</li><li>Human approval before sponsored or business content is published</li><li>English communication for the US, Europe and global markets</li></ul>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading"><p className="eyebrow">PLAIN ANSWERS</p><h2>No technical language required.</h2><p>If this is your first visit, these are the questions most likely to matter.</p></div>
          <div className="faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="contact section" id="contact">
          <div><p className="eyebrow">TELL US WHICH RESULT YOU NEED</p><h2>One message is enough to start.</h2><p>Write “promote my product,” “run my social media” or “install the system.” Add your website or product link. We will reply with the next useful step.</p></div>
          <div className="contact-actions"><a className="button primary full" href="mailto:info@reklamatic.ai?subject=I%20want%20to%20work%20with%20Reklamatic&body=I%20need%3A%0ACompany%20or%20product%20link%3A%0ATarget%20country%3A%0AGoal%3A">Email info@reklamatic.ai</a><a className="button whatsapp full" href="https://wa.me/905302312947?text=Hi%20Reklamatic%2C%20I%20want%20to%20discuss%20your%20services." target="_blank" rel="noreferrer">WhatsApp +90 530 231 29 47</a></div>
        </section>
      </main>

      <footer><div><a className="logo" href="#top">REKLAMATIC<span>.AI</span></a><p>Short-form content, owned-media distribution and practical automation.</p></div><div><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><span>© 2026 Cem Gülçağ — Reklamatic</span></div></footer>
    </div>
  );
}
