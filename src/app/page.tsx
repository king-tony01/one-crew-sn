"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import CheckSquare from "@/components/CheckSquare";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [locked, setLocked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);

  const TOTAL_CARDS = 5;

  useEffect(() => {
    const onScroll = () => {
      const el = experienceRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      const fullyEntered =
        rect.top <= 0 && rect.bottom >= window.innerHeight * 0.9;
      const fullyExited = rect.bottom <= 0 || rect.top >= window.innerHeight;

      if (hasCompletedCycle) {
        // Unlock after all cards have been visited; re-arm only after leaving the section
        if (fullyExited) {
          setHasCompletedCycle(false);
          setActiveIndex(0);
        }
        setLocked(false);
        return;
      }

      setLocked(fullyEntered);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [hasCompletedCycle]);

  useEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [locked]);

  useEffect(() => {
    if (!locked) return;

    let accumulator = 0;
    let ticking = false;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      accumulator += e.deltaY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (accumulator > 100) {
            setActiveIndex((i) => Math.min(i + 1, TOTAL_CARDS - 1));
            accumulator = 0;
          }

          if (accumulator < -100) {
            setActiveIndex((i) => Math.max(i - 1, 0));
            accumulator = 0;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => window.removeEventListener("wheel", onWheel);
  }, [locked]);

  useEffect(() => {
    if (
      (activeIndex === TOTAL_CARDS - 1 || activeIndex === 0) &&
      locked &&
      hasCompletedCycle
    ) {
      setLocked(false);
    }
    if (activeIndex === TOTAL_CARDS - 1 && locked && !hasCompletedCycle) {
      setLocked(false);
      setHasCompletedCycle(true);
    }
  }, [activeIndex, locked, hasCompletedCycle]);

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
            <Link href="/events" className={styles.primaryButton}>
              Discover Our Experiences
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Partner With One Crew
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={"/hero.svg"}
            alt="Hero illustration"
            width={1000}
            height={1000}
            quality={100}
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src={"/about.png"}
              alt=""
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
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
      <section
        className={styles.experiencesSection}
        id="experiences"
        ref={experienceRef}
      >
        <p className={styles.sectionLabel}>Our Experiences</p>
        <h2 className={styles.sectionTitleCenter}>
          Curated Experiences Across Culture,
          <br /> Lifestyle, and Business
        </h2>
        <div className={styles.cardWrapper}>
          {[
            {
              title: "Motor & Track Experiences",
              description:
                "Precision-driven motorsport and track events designed for enthusiasts, brands, and partners seeking high-energy experiences delivered with professionalism and exclusivity.",
              image: "/track.png",
            },
            {
              title: "Charity & Impact Events",
              description:
                "Purpose-led gatherings that unite communities and partners around meaningful causes, transforming shared experiences into lasting social impact.",
              image: "/charity.png",
            },
            {
              title: "Community Experiences",
              description:
                "Elegant social and cultural activations that foster belonging, inclusion, and authentic connection within and across communities.",
              image: "/community.png",
            },
            {
              title: "Business & Networking Experiences",
              description:
                "Private networking events and business lounges designed to facilitate high-value conversations, strategic partnerships, and professional growth.",
              image: "/business.png",
            },
            {
              title: "Lounges & Lifestyle Experiences",
              description:
                "Curated lifestyle settings that blend entertainment, comfort, and connection in a refined social atmosphere.",
              image: "/lounge.png",
            },
          ].map((experience, index) => {
            const offset = index - activeIndex;

            return (
              <div
                key={index}
                className={styles.experienceCard}
                style={{
                  transform: `translateY(${offset * 40}px) scale(${
                    1 - Math.abs(offset) * 0.05
                  })`,
                  opacity: offset === 0 ? 1 : 0,
                  zIndex: TOTAL_CARDS - index,
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                }}
              >
                <div className={styles.experienceImagePlaceholder}>
                  <Image
                    src={experience.image}
                    alt=""
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </div>
                <h3 className={styles.experienceTitle}>{experience.title}</h3>
                <p className={styles.experienceDescription}>
                  {experience.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why One Crew Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContent}>
          <div className={styles.whyImage}>
            <Image
              src={"/values.png"}
              alt=""
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <div className={styles.whyText}>
            <p className={styles.sectionLabel}>Why One Crew</p>
            <h2 className={styles.sectionTitle}>
              A Standard Above the Ordinary
            </h2>
            <ul className={styles.whyList}>
              {[
                "Thoughtfully curated, never generic",
                "Community-driven with a premium lens",
                "Designed to create long-term value",
                "Trusted by partners, brands, and promoters",
                "Focused on meaningful outcomes, not just attendance",
              ].map((item, index) => (
                <li key={index}>
                  <CheckSquare />
                  <span>{item}</span>
                </li>
              ))}
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
