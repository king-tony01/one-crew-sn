"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import CheckSquare from "@/components/CheckSquare";

const imgGroup5 =
  "http://localhost:3845/assets/e1372aa93d5b1cb6f30810eec4498c5c99b1e889.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span>Where People, Culture,</span>
            <span>and Opportunity Converge</span>
          </h1>
          <p className={styles.heroDescription}>
            One Crew Social Network curates refined social experiences that
            connect individuals, brands, and communities. From high-performance
            motorsport events to exclusive lounges, business networking, and
            charitable initiatives, we create environments that elevate
            connection and unlock value.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#experiences" className={styles.primaryButton}>
              Discover Our Experiences
            </Link>
            <Link href="#partnership" className={styles.secondaryButton}>
              Partner With One Crew
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={"/hero.svg"}
            alt="Hero illustration"
            width={200}
            height={200}
          />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}></div>
          <div className={styles.aboutText}>
            <p className={styles.sectionLabel}>About One Crew</p>
            <h2 className={styles.sectionTitle}>
              A Refined Approach to Social Connection
            </h2>
            <p className={styles.sectionDescription}>
              One Crew Social Network is a premium social network promoter
              dedicated to cultivating meaningful connections through
              thoughtfully designed experiences. We bring together people,
              culture, and enterprise in environments that encourage
              collaboration, social integration, and economic growth.
            </p>
            <p className={styles.sectionMoto}>
              Every experience is intentional. Every connection matters.
            </p>
            <Link href="/about" className={styles.learnMoreButton}>
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className={styles.experiencesSection} id="experiences">
        <p className={styles.sectionLabel}>Our Experiences</p>
        <h2 className={styles.sectionTitleCenter}>
          Curated Experiences Across Culture, Lifestyle, and Business
        </h2>
        <div className={styles.experienceCard}>
          <div className={styles.experienceImagePlaceholder}></div>
          <h3 className={styles.experienceTitle}>Community Experiences</h3>
          <p className={styles.experienceDescription}>
            Elegant social and cultural activations that foster belonging,
            inclusion, and authentic connection within and across communities.
          </p>
        </div>
      </section>

      {/* Why One Crew Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContent}>
          <div className={styles.whyImage}></div>
          <div className={styles.whyText}>
            <p className={styles.sectionLabel}>Why One Crew</p>
            <h2 className={styles.sectionTitle}>
              A Standard Above the Ordinary
            </h2>
            <ul className={styles.whyList}>
              <li>
                <CheckSquare />
                <span>Thoughtfully curated, never generic</span>
              </li>
              <li>
                <CheckSquare />
                <span>Community-driven with a premium lens</span>
              </li>
              <li>
                <CheckSquare />
                <span>Designed to create long-term value</span>
              </li>
              <li>
                <CheckSquare />
                <span>Trusted by partners, brands, and promoters</span>
              </li>
              <li>
                <CheckSquare />
                <span>Focused on meaningful outcomes, not just attendance</span>
              </li>
            </ul>
            <Link href="/about" className={styles.learnMoreButton}>
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Join a Network Designed With Purpose
        </h2>
        <p className={styles.ctaDescription}>
          Whether you are an individual, brand, or organization, <br />
          One Crew offers access to a refined social ecosystem built on trust,
          collaboration, and shared value.
        </p>
        <Link href="/contact" className={styles.primaryButton}>
          Join the Network
        </Link>
      </section>
    </div>
  );
}
