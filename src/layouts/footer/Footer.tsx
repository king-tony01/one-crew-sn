import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footerTitle}>One Crew Social Network</h3>
      <p className={styles.footerSubtitle}>
        Curated experiences connecting people, culture, and opportunity.
      </p>

      <div className={styles.footerLinks}>
        <h4 className={styles.footerLinkTitle}>Quick Links</h4>
        <div className={styles.footerLinkItems}>
          <Link href="/" className={styles.footerLink}>
            Home
          </Link>

          <Link href="/about" className={styles.footerLink}>
            About
          </Link>

          <Link href="/events" className={styles.footerLink}>
            Events
          </Link>

          <Link href="/contact" className={styles.footerLink}>
            Contact
          </Link>
        </div>
      </div>

      <p className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} One Crew Social Network. All rights
        reserved.
      </p>
    </footer>
  );
}
