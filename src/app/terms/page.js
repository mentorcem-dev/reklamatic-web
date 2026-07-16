import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Reklamatic Publisher and Reklamatic.ai.",
  alternates: { canonical: "https://reklamatic.ai/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="REKLAMATIC PUBLISHER" title="Terms of Service" updated="July 16, 2026" otherHref="/privacy" otherLabel="Privacy">
      <h2>The service</h2>
      <p>Reklamatic Publisher lets authorized operators transfer selected video content to TikTok as a draft. The TikTok account user reviews the draft, edits it, adds music if desired, and chooses whether to publish inside TikTok.</p>

      <h2>Accounts and authorization</h2>
      <p>You may connect only accounts you own or are authorized to manage. You are responsible for maintaining account security and may revoke the app&apos;s access at any time.</p>

      <h2>Content responsibilities</h2>
      <p>You retain your rights in uploaded content and grant us only the limited permission needed to process and transfer it at your request. You must hold all rights required for the video, audio, trademarks, people, and other material in that content.</p>
      <ul>
        <li>Do not upload illegal, infringing, deceptive, harmful, or abusive content.</li>
        <li>Do not use the service for spam, platform manipulation, or unauthorized automation.</li>
        <li>Follow TikTok&apos;s terms, community guidelines, music rules, and applicable law.</li>
      </ul>

      <h2>Third-party platform</h2>
      <p>TikTok is a third-party service with its own terms and policies. We do not control its availability, review decisions, posting limits, moderation, music library, API changes, or account actions.</p>

      <h2>Availability and termination</h2>
      <p>The service is provided on an “as is” and “as available” basis to the extent permitted by law. We may suspend access for security, abuse, legal, or platform-compliance reasons. You may stop using the service and revoke access at any time.</p>

      <h2>Liability and changes</h2>
      <p>To the extent permitted by law, Reklamatic.ai is not responsible for indirect losses, platform decisions, lost reach, removed content, or interruptions caused by third-party services. We may update these terms as the service or legal requirements change.</p>

      <p className="legal-contact"><strong>Contact:</strong> <a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a></p>
    </LegalPage>
  );
}
