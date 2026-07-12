import Image from "next/image";

const network = [
  ["Instagram", "8 channels"],
  ["Facebook", "8 channels"],
  ["TikTok", "5 channels"],
  ["YouTube", "5 channels"],
];

const packages = [
  {
    name: "Network Test",
    price: "$900",
    deposit: "$450 before we start",
    summary: "A small campaign to test your product with selected parts of our audience.",
    items: [
      "We create 1 vertical product video.",
      "We publish it 6 times on 6 selected Reklamatic channels.",
      "We write the captions for each platform.",
      "We send you a campaign report after publishing.",
    ],
    reach: "Expected total views: 150,000–500,000",
    fit: "Best for a first campaign or a new product test.",
  },
  {
    name: "Network Growth",
    price: "$1,750",
    deposit: "$875 before we start",
    summary: "A wider campaign with two videos and more publishing across the network.",
    items: [
      "We create 2 different vertical product videos.",
      "We make 12 total uploads on 12 selected Reklamatic channels.",
      "We choose channels whose viewers are most relevant to your product.",
      "We send you one clear report with the results of every upload.",
    ],
    reach: "Expected total views: 400,000–1,200,000",
    fit: "Best for product launches and brands ready for wider reach.",
    featured: true,
  },
  {
    name: "Full Network Launch",
    price: "$3,500",
    deposit: "$1,750 before we start",
    summary: "A full campaign that uses our complete 26-channel distribution network.",
    items: [
      "We create 3 different vertical product videos.",
      "We make 26 total uploads across our 26 social media channels.",
      "Each channel receives the video that best matches its audience.",
      "We send you a full network report and the next campaign recommendation.",
    ],
    reach: "Expected total views: 1,000,000–3,000,000",
    fit: "Best for major launches and brands that want maximum network coverage.",
  },
];

const services = [
  {
    name: "AI Product Video Pack",
    price: "€650",
    text: "We create 5 finished vertical product videos for your own Instagram, TikTok, Facebook or YouTube channels. Publishing on the Reklamatic network is not included in this pack.",
  },
  {
    name: "Content Machine Setup",
    price: "€1,290",
    text: "We build a repeatable content system for your business: content plan, production steps, templates, publishing workflow and a practical 30-day calendar your team can follow.",
  },
  {
    name: "Implementation Day",
    price: "€750",
    text: "One focused working day. We install a useful content, sales or support automation inside your business and show your team how to operate it.",
  },
  {
    name: "Monthly Social Media Management",
    price: "Custom price",
    text: "We plan, create, publish and review your monthly social content. The price depends on how many videos and business channels you want us to manage.",
  },
];

const steps = [
  ["1", "You tell us about the product", "Send the product link, target country, customer type and campaign goal."],
  ["2", "We choose the right channels", "We explain which Reklamatic channels match the product and exactly how many uploads you are buying."],
  ["3", "You approve the plan", "You receive the videos, upload count, price, timeline and usage terms in writing."],
  ["4", "The deposit starts the work", "A 50% deposit reserves production. The remaining balance is paid before publishing."],
  ["5", "We create the videos", "We produce the agreed vertical videos and make the included revision."],
  ["6", "We publish the campaign", "After your approval, we upload the videos to the selected social media channels."],
  ["7", "You receive the results", "We report the views from every upload and explain what should be tested next."],
];

const faqs = [
  ["What is a channel?", "A channel is one social media account or page that we manage. For example, one Instagram account or one Facebook page is one channel."],
  ["What is an upload?", "One upload means one video is published one time on one channel. Six uploads mean six published posts on six selected channels."],
  ["Do you guarantee the number of views?", "No. We guarantee the agreed video production and upload count. View numbers are estimates based on past network performance. Social platforms decide the final reach."],
  ["What does organic view mean?", "It means a real view that happens naturally after publishing. We do not need to buy advertisements to create those views."],
  ["Who normally sees the videos?", "Our audiences are interested in DIY projects, gardening, epoxy and resin work, satisfying transformations and AI-created content. We select the closest audience for your product."],
  ["Can you work with brands outside Türkiye?", "Yes. We work in English and accept projects from the United States, Europe and other global markets."],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reklamatic.ai",
    url: "https://reklamatic.ai",
    description: "AI product video production and distribution through a 26-channel owned social media network.",
    email: "info@reklamatic.ai",
    telephone: "+90-530-231-2947",
  };

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Reklamatic home">REKLAMATIC<span>.AI</span></a>
        <nav aria-label="Main navigation">
          <a href="#what-we-do">What we do</a>
          <a href="#proof">Our proof</a>
          <a href="#packages">Packages</a>
          <a href="#process">How it works</a>
        </nav>
        <a className="header-cta" href="#contact">Talk to us</a>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">AI VIDEO PRODUCTION + OWNED SOCIAL MEDIA DISTRIBUTION</p>
            <h1>We create your short videos and publish them through our own social media network.</h1>
            <p className="hero-lead">Reklamatic manages 26 channels across Instagram, Facebook, TikTok and YouTube. You send us the product. We create the videos, publish them on the agreed channels and show you the results.</p>
            <div className="hero-actions">
              <a className="button primary" href="#packages">See prices and uploads</a>
              <a className="button secondary" href="mailto:info@reklamatic.ai?subject=Media%20Kit%20Request">Request the media kit</a>
            </div>
            <p className="hero-note">Global campaigns · English communication · 50% deposit to begin</p>
          </div>
          <div className="hero-visual">
            <Image src="/og.png" width={1200} height={630} priority alt="Reklamatic network: 152 million verified views across 26 connected channels" />
          </div>
        </section>

        <section className="definition-band" aria-label="Simple definitions">
          <div><strong>Channel</strong><span>One social media account or page that we manage.</span></div>
          <div><strong>Upload</strong><span>One video published one time on one channel.</span></div>
          <div><strong>Expected views</strong><span>Our estimate based on past results. It is not a guarantee.</span></div>
        </section>

        <section className="section intro" id="what-we-do">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE ACTUALLY DO</p>
            <h2>One team handles the video and the publishing.</h2>
          </div>
          <div className="intro-copy">
            <p>Most video agencies deliver a file and leave the publishing to you. Reklamatic can do both jobs.</p>
            <p>We create short vertical videos for your product. After you approve them, we publish the videos through selected channels from our own network. This gives your product a chance to reach people who already watch DIY, garden, epoxy, satisfying and AI content.</p>
            <p>You always know how many videos we will create, how many uploads we will make and how much the campaign costs before work begins.</p>
          </div>
        </section>

        <section className="proof section" id="proof">
          <div className="section-heading centered">
            <p className="eyebrow">REAL NETWORK NUMBERS</p>
            <h2>Our strength comes from channels we already operate.</h2>
            <p>These are network analytics reviewed in July 2026. Follower totals are added across channels and may include the same person more than once.</p>
          </div>
          <div className="metric-grid">
            <article><strong>26</strong><span>social media channels</span></article>
            <article><strong>152.1M+</strong><span>verified lifetime views</span></article>
            <article><strong>84.3M</strong><span>views on our best Reel</span></article>
            <article><strong>8.26M</strong><span>Facebook views in a verified 28-day period</span></article>
          </div>
          <div className="network-grid">{network.map(([platform, count]) => <div key={platform}><strong>{count}</strong><span>{platform}</span></div>)}</div>
        </section>

        <section className="packages section" id="packages">
          <div className="section-heading centered">
            <p className="eyebrow">VIDEO + NETWORK PUBLISHING PACKAGES</p>
            <h2>Choose the exact number of videos and uploads.</h2>
            <p>An upload is one published post on one Reklamatic channel. The prices below are fixed for the listed work.</p>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.name}>
                {item.featured && <span className="popular">MOST POPULAR</span>}
                <h3>{item.name}</h3><p className="package-summary">{item.summary}</p>
                <div className="price">{item.price}</div><p className="deposit">{item.deposit}</p>
                <ul>{item.items.map((line) => <li key={line}>{line}</li>)}</ul>
                <p className="reach">{item.reach}</p><p className="fit">{item.fit}</p>
                <a className="button primary full" href={`mailto:info@reklamatic.ai?subject=${encodeURIComponent(item.name)}`}>Ask about this package</a>
              </article>
            ))}
          </div>
          <p className="view-disclaimer"><strong>Important:</strong> We guarantee the video count and upload count. We cannot guarantee views because Instagram, Facebook, TikTok and YouTube control how widely every post is shown.</p>
        </section>

        <section className="services section" id="services">
          <div className="section-heading"><p className="eyebrow">OTHER WAYS TO WORK WITH US</p><h2>You can also buy the videos or the business system without network publishing.</h2></div>
          <div className="service-grid">{services.map((item) => <article key={item.name}><div className="service-price">{item.price}</div><h3>{item.name}</h3><p>{item.text}</p><a href={`mailto:info@reklamatic.ai?subject=${encodeURIComponent(item.name)}`}>Ask for details →</a></article>)}</div>
        </section>

        <section className="process section" id="process">
          <div className="section-heading centered"><p className="eyebrow">FROM FIRST MESSAGE TO CAMPAIGN REPORT</p><h2>Here is exactly what happens.</h2></div>
          <div className="step-list">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading"><p className="eyebrow">PLAIN ANSWERS</p><h2>No agency language. No hidden meaning.</h2></div>
          <div className="faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="contact section" id="contact">
          <div><p className="eyebrow">START A CONVERSATION</p><h2>Tell us what you sell. We will tell you which channels and package make sense.</h2><p>Include your product link, target country and preferred launch date. We will reply with a clear recommendation.</p></div>
          <div className="contact-actions">
            <a className="button primary full" href="mailto:info@reklamatic.ai?subject=Campaign%20Request&body=Company%3A%0AProduct%20link%3A%0ATarget%20country%3A%0ALaunch%20date%3A%0AGoal%3A">Email info@reklamatic.ai</a>
            <a className="button whatsapp full" href="https://wa.me/905302312947?text=Hi%20Reklamatic%2C%20I%20want%20to%20discuss%20a%20campaign." target="_blank" rel="noreferrer">WhatsApp +90 530 231 29 47</a>
          </div>
        </section>
      </main>

      <footer><div><a className="logo" href="#top">REKLAMATIC<span>.AI</span></a><p>AI product videos and owned social media distribution.</p></div><div><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href="/privacy.html">Burp Rating Privacy Policy</a><span>© 2026 Cem Gülçağ — Reklamatic</span></div></footer>
    </div>
  );
}
