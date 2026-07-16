import Link from "next/link";
import styles from "@/app/legal.module.css";

export default function LegalPage({ eyebrow, title, updated, otherHref, otherLabel, children }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link className="logo" href="/">REKLAMATIC<span>.AI</span></Link>
        <nav className={styles.links} aria-label="Legal navigation">
          <Link href={otherHref}>{otherLabel}</Link>
          <a href="mailto:info@reklamatic.ai">Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.updated}>Last updated: {updated}</p>
        <article className={styles.body}>{children}</article>
      </main>
    </div>
  );
}
