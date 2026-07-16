import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Reklamatic Publisher and Reklamatic.ai.",
  alternates: { canonical: "https://reklamatic.ai/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="REKLAMATIC PUBLISHER" title="Privacy Policy" updated="July 16, 2026" otherHref="/terms" otherLabel="Terms">
      <h2>Information we process</h2>
      <p>When an authorized operator connects a TikTok account, Reklamatic Publisher processes the account identifier, display name, avatar, granted permissions, OAuth access and refresh tokens, selected video files, upload status, and limited security logs required to operate the service.</p>

      <h2>How we use information</h2>
      <p>We use this information only to authenticate authorized accounts, transfer operator-selected videos to TikTok as drafts, show upload status, secure the service, and troubleshoot errors. We do not sell TikTok data or use it for advertising.</p>

      <h2>Storage and security</h2>
      <p>OAuth credentials are encrypted at rest and restricted to the private Reklamatic Publisher service. The operational API is not publicly accessible. Records are retained only as long as required for account connections, upload integrity, security, legal obligations, and dispute resolution.</p>

      <h2>Sharing</h2>
      <p>Selected content and required account information are sent to TikTok when an authorized operator requests an upload. Hosting and security providers may process limited data only to provide their contracted services.</p>

      <h2>Your choices</h2>
      <p>You can revoke Reklamatic Publisher in TikTok account settings at any time. You may request access, correction, or deletion by emailing us. Revoking access stops future API activity but does not remove content already published on TikTok.</p>

      <h2>Children and changes</h2>
      <p>The service is not directed to children under 13 or the minimum age in their jurisdiction. We may update this policy as the service or legal requirements change.</p>

      <p className="legal-contact"><strong>Contact:</strong> <a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a></p>
    </LegalPage>
  );
}
