import Link from "next/link";
import styles from "@/app/legal.module.css";

export default function LegalPage({ eyebrow, title, updated, updatedLabel = "Last updated", otherHref, otherLabel, languageHref, languageLabel, children }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">reklamatic<span>.ai</span></Link>
        <nav className={styles.links} aria-label="Legal navigation">
          <Link href={otherHref}>{otherLabel}</Link>
          {languageHref && <Link href={languageHref}>{languageLabel}</Link>}
          <a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a>
        </nav>
      </header>
      <main className={styles.main}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.updated}>{updatedLabel}: {updated}</p>
        <article className={styles.body}>{children}</article>
      </main>
    </div>
  );
}
