import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy", description: "How Reklamatic.ai handles website inquiries and service data.", alternates: { canonical: "https://reklamatic.ai/en/privacy", languages: { tr: "https://reklamatic.ai/privacy", en: "https://reklamatic.ai/en/privacy", "x-default": "https://reklamatic.ai/privacy" } } };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="REKLAMATIC.AI" title="Privacy Policy" updated="July 31, 2026" homeHref="/en" otherHref="/en/terms" otherLabel="Terms" languageHref="/privacy" languageLabel="Türkçe">
      <h2>Who is responsible</h2>
      <p>Reklamatic.ai is responsible for the personal data described here. Privacy requests can be sent to <a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a>.</p>
      <h2>Website and sales inquiries</h2>
      <p>When you submit an application form, the details you enter—such as your name, email, phone or WhatsApp number, company, market, budget range, source link and message—are sent directly to Reklamatic&apos;s access-controlled Google Forms and Google Sheets workspace. We process them to review your inquiry, contact you, and manage a proposal or onboarding process.</p>
      <h2>Communication, retention and sharing</h2>
      <p>We may reply by email, phone or WhatsApp using the channel you provide. Inquiry records are kept only as long as reasonably needed for the relationship, legal obligations and dispute resolution. Google, email, hosting, analytics or messaging providers may process limited data as service providers or under their own policies; we do not sell personal data.</p>
      <h2>Your choices</h2>
      <p>You may request access, correction or deletion, object to or restrict processing, or withdraw a consent where applicable by emailing us. Legal retention duties may limit deletion. You may also contact the relevant data-protection authority.</p>
      <h2>Reklamatic Publisher</h2>
      <p>For authorized operators who connect TikTok accounts, Reklamatic Publisher processes account identifiers, granted permissions, OAuth credentials, selected video files, upload status and limited security logs only to provide and secure the requested publishing workflow. Access can be revoked in TikTok settings.</p>
      <h2>Security and changes</h2>
      <p>We use reasonable technical and organizational safeguards. No internet transmission is completely risk-free. We may update this notice when our services or legal requirements change.</p>
    </LegalPage>
  );
}
