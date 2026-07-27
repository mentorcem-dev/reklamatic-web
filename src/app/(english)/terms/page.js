import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms of Service", description: "Terms for Reklamatic.ai clipping services and publishing tools.", alternates: { canonical: "https://reklamatic.ai/terms", languages: { en: "https://reklamatic.ai/terms", tr: "https://reklamatic.ai/tr/terms" } } };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="REKLAMATIC.AI" title="Terms of Service" updated="July 27, 2026" otherHref="/privacy" otherLabel="Privacy" languageHref="/tr/terms" languageLabel="Türkçe">
      <h2>Scope and written agreement</h2>
      <p>Website descriptions are general information, not a binding offer. Deliverables, platforms, timelines, approvals, fees, payment terms and publishing responsibilities are confirmed in a written proposal or agreement before work begins.</p>
      <h2>Source content and rights</h2>
      <p>You must own or be authorized to use all supplied video, audio, music, trademarks, likenesses and other materials. You retain your underlying rights and grant Reklamatic the limited permission needed to review, edit, deliver and, when agreed, publish the content.</p>
      <h2>Review and platform compliance</h2>
      <p>Client approval is required according to the agreed workflow. Content must comply with applicable law, advertising disclosures and the rules of TikTok, Instagram, YouTube and other platforms. We may reject unsafe, deceptive, infringing or unlawful material.</p>
      <h2>Performance and reporting</h2>
      <p>Organic reach, views, engagement, revenue and platform decisions cannot be guaranteed. Reklamatic guarantees only the work expressly stated in the written scope. Reporting reflects available platform data and may change because of attribution limits, invalid traffic reviews or platform updates.</p>
      <h2>Payments, changes and cancellation</h2>
      <p>Deposits, recurring fees, taxes, revisions, cancellations and refunds follow the signed proposal or invoice terms. Work outside the agreed scope may require a revised timeline and fee.</p>
      <h2>Reklamatic Publisher</h2>
      <p>Authorized users may connect only accounts they own or manage. TikTok and other platforms are independent services; Reklamatic does not control their availability, moderation, APIs, music rules or account actions.</p>
      <h2>Liability and contact</h2>
      <p>To the extent permitted by law, Reklamatic is not liable for indirect losses, platform interruptions, removed content or lost reach. Questions can be sent to <a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a>.</p>
    </LegalPage>
  );
}
