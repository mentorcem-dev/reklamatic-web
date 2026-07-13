import Image from "next/image";
import AutomationProduct from "@/components/AutomationProduct";

const network = [
  ["Instagram", "8 channels"],
  ["Facebook", "8 pages"],
  ["TikTok", "5 channels"],
  ["YouTube", "5 channels"],
];

const packages = [
  {
    name: "Network Test",
    price: "$900",
    deposit: "$450 deposit before production",
    summary: "A focused first sponsorship test on six channels selected for your product.",
    items: ["1 original vertical product story", "6 published posts on 6 selected channels", "Platform-specific captions and product call-to-action", "Results from every published post"],
    reach: "Past-data estimate: 150,000–500,000 total views",
    fit: "For a first campaign, product test or proof of audience fit.",
  },
  {
    name: "Network Growth",
    price: "$1,750",
    deposit: "$875 deposit before production",
    summary: "Two different product stories distributed more widely across the network.",
    items: ["2 original vertical product stories", "12 published posts on 12 selected channels", "Audience and channel matching for each story", "One campaign report covering all 12 posts"],
    reach: "Past-data estimate: 400,000–1,200,000 total views",
    fit: "For product launches and brands ready to reach several audiences.",
    featured: true,
  },
  {
    name: "Full Network Launch",
    price: "$3,500",
    deposit: "$1,750 deposit before production",
    summary: "A coordinated launch using our complete 26-channel distribution network.",
    items: ["3 original vertical product stories", "26 published posts across all 26 channels", "The most relevant story assigned to each audience", "Full report and recommendation for the next campaign"],
    reach: "Past-data estimate: 1,000,000–3,000,000 total views",
    fit: "For major launches and maximum coverage across our network.",
  },
];

const sponsorships = [
  {
    tag: "PRODUCT INSIDE THE STORY",
    name: "Product Integration Sponsorship",
    text: "Your product becomes a natural part of the video instead of a banner people skip. A garden tool can be used during a build. An epoxy product can appear throughout a transformation. Viewers see what it does while the story keeps moving.",
  },
  {
    tag: "WE CREATE + WE PUBLISH",
    name: "Network Sponsorship Campaign",
    text: "We create the sponsored videos, then publish them through the selected Instagram, Facebook, TikTok and YouTube channels we operate. You buy a clear number of videos and published posts—not a vague promise.",
  },
  {
    tag: "FOR YOUR OWN BUSINESS",
    name: "Content System Installation",
    text: "We can install a simpler version of our working system inside your business: ideas, repeatable video production, approval, publishing plan and performance review. Your team sees what to make and what to publish next.",
  },
];

const automationSteps = [
  ["01", "Find the next idea", "The system reviews content patterns and prepares practical video ideas for each topic."],
  ["02", "Turn the idea into a video", "Our production workflow creates the vertical scenes, assembles the story and prepares platform-ready files."],
  ["03", "Review before publishing", "A person checks quality, brand fit, captions and the agreed product message before anything goes live."],
  ["04", "Publish across the right channels", "The approved video is assigned to selected accounts and pages. Every post is tracked separately."],
  ["05", "Learn from the results", "Views and engagement show us which topic, opening and audience should receive the next test."],
];

const campaignSteps = [
  ["1", "Send the product", "Share the product link, target country, ideal customer and campaign goal."],
  ["2", "Receive a written plan", "We list the video concepts, selected channels, exact upload count, price and timeline."],
  ["3", "Approve and begin", "A 50% deposit reserves production. You approve the finished videos before publishing."],
  ["4", "Go live and receive results", "We publish the agreed posts, collect each result and send one clear campaign report."],
];

const faqs = [
  ["What is a channel?", "One Instagram account, Facebook page, TikTok account or YouTube channel that we operate."],
  ["What is an upload?", "One video published one time on one channel. Six uploads mean six real published posts."],
  ["Who can see the campaign?", "Our broad network attracts people interested in DIY, gardening, epoxy, satisfying transformations, useful products and AI-created content. We select the closest channels for your product."],
  ["Are the view estimates guaranteed?", "No. We guarantee the agreed videos and published posts. The ranges are planning estimates based on past results; each platform controls final reach."],
  ["Can the product really appear in the video?", "Yes. When the product fits the story, we can show it being used or place it naturally inside the transformation. The exact integration is approved before production."],
  ["Do you work with global brands?", "Yes. Reklamatic is based in Türkiye and works in English with companies targeting the United States, Europe and other global markets."],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reklamatic.ai",
    url: "https://reklamatic.ai",
    description: "Sponsored product video production and distribution through a 26-channel owned social media network.",
    email: "info@reklamatic.ai",
    telephone: "+90-530-231-2947",
  };

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Reklamatic home">REKLAMATIC<span>.AI</span></a>
        <nav aria-label="Main navigation"><a href="#sponsorships">Sponsorships</a><a href="#facebook-power">Facebook proof</a><a href="#automation-product">Automation</a><a href="#packages">Media packages</a></nav>
        <a className="header-cta" href="#contact">Start a campaign</a>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">OWNED MEDIA SPONSORSHIPS + BUSINESS CONTENT AUTOMATION</p>
            <h1>Put your product inside content people already want to watch.</h1>
            <p className="hero-lead">We create short product stories and publish them through 26 channels that we operate. We also install the same repeatable content system inside businesses and agencies that want their own operation.</p>
            <div className="hero-actions"><a className="button primary" href="#packages">Sponsor the media network</a><a className="button secondary" href="#automation-product">Buy the automation system</a></div>
            <p className="hero-note">152.1M+ verified lifetime views · Global campaigns · 50% deposit to begin</p>
          </div>
          <div className="hero-stage reveal delay-one">
            <video autoPlay muted loop playsInline poster="/media/reklamatic-production-poster.jpg" aria-label="A vertical product-style video created with the Reklamatic production system">
              <source src="/media/reklamatic-production-sample.mp4" type="video/mp4" />
            </video>
            <div className="video-label"><span>REAL PRODUCTION SAMPLE</span><strong>Created by our working system</strong></div>
            <div className="floating-stat stat-a"><strong>26</strong><span>owned channels</span></div>
            <div className="floating-stat stat-b"><strong>84.3M</strong><span>top Reel views</span></div>
          </div>
        </section>

        <section className="definition-band" aria-label="Simple definitions">
          <div><strong>Channel</strong><span>One social media account or Facebook page we operate.</span></div>
          <div><strong>Upload</strong><span>One real post published once on one selected channel.</span></div>
          <div><strong>Campaign</strong><span>The videos, selected channels, publishing and results together.</span></div>
        </section>

        <section className="who section reveal" id="who-we-are">
          <div className="section-heading"><p className="eyebrow">WHO WE ARE</p><h2>We built this system because we needed it ourselves.</h2></div>
          <div className="who-copy">
            <p>Reklamatic is a Türkiye-based AI content and media operation led by Cem Gülçağ. We run a growing network across four major social platforms.</p>
            <p>Publishing consistently across many channels is difficult. So we built our own workflow to find ideas, produce vertical videos, review them, publish them and learn from the results. We use that workflow every day for our own channels.</p>
            <p>Brands can now use the same production and distribution power for sponsored product stories. Businesses can also ask us to install a practical content system for their own team.</p>
          </div>
        </section>

        <section className="sponsorships section" id="sponsorships">
          <div className="section-heading centered reveal"><p className="eyebrow">WHAT A BRAND CAN BUY</p><h2>Your product can be part of the content, not an interruption.</h2><p>We choose a story where the product has a reason to exist. Then we create it, approve it with you and publish it through the agreed parts of our network.</p></div>
          <div className="sponsor-grid">{sponsorships.map((item, index) => <article className="reveal" style={{ animationDelay: `${index * 100}ms` }} key={item.name}><span>{item.tag}</span><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
        </section>

        <section className="proof section" id="proof">
          <div className="section-heading centered reveal"><p className="eyebrow">REAL SCREENS FROM OUR NETWORK</p><h2>Do not take the numbers on trust. Look at the evidence.</h2><p>These screenshots come from the channels and publishing tools we operate. Analytics were reviewed in July 2026. Totals across platforms are not presented as unique people.</p></div>
          <div className="metric-grid reveal"><article><strong>26</strong><span>connected social channels</span></article><article><strong>152.1M+</strong><span>verified lifetime views across Instagram, YouTube and TikTok</span></article><article><strong>84.3M</strong><span>views visible on our best Reel</span></article><article><strong>107K+</strong><span>followers and subscribers added across channels, not deduplicated</span></article></div>
          <div className="proof-gallery">
            <figure className="proof-wide reveal"><Image src="/proof/connected-network.png" width={2394} height={716} alt="Connected Reklamatic Facebook, Instagram, TikTok and YouTube accounts" /><figcaption><strong>One connected publishing network</strong><span>The account screen shows Facebook pages, Instagram accounts, TikTok accounts and YouTube channels connected for distribution.</span></figcaption></figure>
            <figure className="reveal"><Image src="/proof/instagram-84m-reel.jpg" width={1490} height={780} alt="Instagram Reels grid showing 84.3 million, 12.6 million and 3 million views" /><figcaption><strong>84.3M on one Reel</strong><span>The same visible grid also shows Reels at 12.6M and 3M views.</span></figcaption></figure>
          </div>
          <div className="network-grid">{network.map(([platform, count]) => <div key={platform}><strong>{count}</strong><span>{platform}</span></div>)}</div>
        </section>

        <section className="facebook-power section" id="facebook-power">
          <div className="facebook-heading reveal">
            <div><p className="eyebrow">FACEBOOK IS NOT ONE LUCKY PAGE</p><h2>Eight pages create a wider monthly distribution engine.</h2></div>
            <p>The 2.3M screen is one page, not our whole Facebook operation. Most active pages currently exceed 1.5M monthly views, and the latest verified combined 28-day network snapshot reached 8.26M views.</p>
          </div>
          <div className="facebook-stat-grid reveal">
            <article><strong>8</strong><span>Facebook pages operated</span></article>
            <article><strong>8.26M</strong><span>combined views in a verified 28-day network snapshot</span></article>
            <article><strong>1.5M+</strong><span>monthly views across most active pages</span></article>
            <article><strong>6</strong><span>pages that reached Meta&apos;s 300K monetization review step</span></article>
          </div>
          <div className="facebook-visual reveal">
            <div className="facebook-bars" aria-label="Eight-page Facebook network activity visualization">
              {[72, 90, 66, 84, 74, 92, 61, 79].map((height, index) => <div key={height + index}><i style={{ height: height + "%" }} /><span>PAGE {String(index + 1).padStart(2, "0")}</span></div>)}
            </div>
            <div className="facebook-signal"><span>28-DAY NETWORK SIGNAL</span><strong>One campaign can be matched across eight different Facebook audiences.</strong><p>We choose the relevant pages instead of treating every audience as identical.</p></div>
          </div>
          <div className="facebook-proof-grid">
            <figure className="reveal"><Image src="/proof/facebook-28-day.jpg" width={1512} height={805} alt="Facebook analytics showing 2.3 million views in a 28-day period" /><figcaption><strong>2.3M on one page</strong><span>A real 28-day analytics screen from one part of the Facebook network.</span></figcaption></figure>
            <figure className="facebook-phone-proof reveal"><Image src="/proof/facebook-monetization-review.png" width={1179} height={2556} alt="Facebook monetization screen showing the 300,000-view threshold reached and content under review" /><figcaption><strong>Six pages reached the review step</strong><span>Meta&apos;s screen confirms the 300K view threshold was reached and the content moved to policy review.</span></figcaption></figure>
          </div>
          <p className="facebook-note">These figures describe past or current account performance, not a guaranteed result for a future sponsored post. Page-level performance changes over time.</p>
        </section>

        <section className="system section" id="system">
          <div className="system-intro reveal"><p className="eyebrow">THE AUTOMATION BEHIND THE NETWORK</p><h2>This is not a slide-deck idea. It is the system we use.</h2><p>Our automation reduces the repetitive work between an idea and a published post. Human review stays in the process so the brand, product and final video are checked before publishing.</p></div>
          <div className="automation-flow">{automationSteps.map(([number, title, text]) => <article className="reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <AutomationProduct />

        <section className="packages section" id="packages">
          <div className="section-heading centered reveal"><p className="eyebrow">SPONSORSHIP PACKAGES</p><h2>Know exactly how many videos and published posts you receive.</h2><p>These are organic network campaigns. Paid advertising budget is not included. Every range below is an estimate from past performance, not a view guarantee.</p></div>
          <div className="package-grid">{packages.map((item) => <article className={`package-card reveal ${item.featured ? "featured" : ""}`} key={item.name}>{item.featured && <span className="popular">MOST POPULAR</span>}<h3>{item.name}</h3><p className="package-summary">{item.summary}</p><div className="price">{item.price}</div><p className="deposit">{item.deposit}</p><ul>{item.items.map((line) => <li key={line}>{line}</li>)}</ul><p className="reach">{item.reach}</p><p className="fit">{item.fit}</p><a className="button primary full" href={`mailto:info@reklamatic.ai?subject=${encodeURIComponent(item.name)}`}>Ask about this campaign</a></article>)}</div>
          <p className="view-disclaimer"><strong>What we guarantee:</strong> the agreed production, approval process and number of published posts. <strong>What no honest agency can guarantee:</strong> the exact number of organic views a platform will deliver.</p>
        </section>

        <section className="process section" id="process">
          <div className="section-heading centered reveal"><p className="eyebrow">A SIMPLE CAMPAIGN PROCESS</p><h2>From product link to published posts.</h2></div>
          <div className="step-list">{campaignSteps.map(([number, title, text]) => <article className="reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <section className="faq section" id="faq"><div className="section-heading reveal"><p className="eyebrow">PLAIN ANSWERS</p><h2>No agency language. No hidden meaning.</h2></div><div className="faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

        <section className="contact section reveal" id="contact">
          <div><p className="eyebrow">START A SPONSORSHIP CONVERSATION</p><h2>Show us the product. We will show you where it fits.</h2><p>Send the product link, target country and preferred launch date. We will reply with the relevant channels, story direction, upload count and price.</p></div>
          <div className="contact-actions"><a className="button primary full" href="mailto:info@reklamatic.ai?subject=Sponsorship%20Campaign&body=Company%3A%0AProduct%20link%3A%0ATarget%20country%3A%0ALaunch%20date%3A%0AGoal%3A">Email info@reklamatic.ai</a><a className="button whatsapp full" href="https://wa.me/905302312947?text=Hi%20Reklamatic%2C%20I%20want%20to%20discuss%20a%20sponsorship%20campaign." target="_blank" rel="noreferrer">WhatsApp +90 530 231 29 47</a></div>
        </section>
      </main>

      <footer><div><a className="logo" href="#top">REKLAMATIC<span>.AI</span></a><p>Sponsored product stories powered by our own production and distribution network.</p></div><div><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><span>© 2026 Cem Gülçağ — Reklamatic</span></div></footer>
    </div>
  );
}
