"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles/Navigation.module.css";
import Image from "next/image";
import Hamburger from "@/components/Hamburger";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src={"/logo.png"}
          alt="One Crew Logo"
          width={50}
          height={50}
          className={styles.logoImage}
        />
        <p className={styles.logoText}>One Crew Social Network</p>
      </Link>
      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={styles.navItem}>
              <Link
                href={item.href}
                className={`${styles.navLabel} ${
                  isActive ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setOpen((prev) => !prev)}>
        <Hamburger />
      </button>
    </nav>
  );
}
