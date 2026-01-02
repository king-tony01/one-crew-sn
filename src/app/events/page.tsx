import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Explore One Crew Social Network's diverse portfolio of curated experiences designed to foster connection, engagement, and growth across social, cultural, and business domains.",
  keywords: [
    "experiences",
    "events",
    "motorsport",
    "charity events",
    "networking",
    "lounges",
    "community gatherings",
    "business events",
  ],
  openGraph: {
    title: "Experiences - One Crew Social Network",
    description:
      "Explore One Crew Social Network's diverse portfolio of curated experiences designed to foster connection, engagement, and growth across social, cultural, and business domains.",
    url: "https://onecrewsn.com/events",
    type: "website",
    images: [
      {
        url: "/track.png",
        width: 1200,
        height: 630,
        alt: "One Crew Social Network Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences - One Crew Social Network",
    description:
      "Explore our diverse portfolio of curated experiences designed to foster connection and growth.",
    images: ["/track.png"],
  },
  alternates: {
    canonical: "https://onecrewsn.com/events",
  },
};

export default function Events() {
  const experiences = [
    {
      title: "Motor & Track Experiences",
      description:
        "Premium motorsport events offering controlled, high-performance environments for enthusiasts and partners.",
      image: "/track.png",
    },
    {
      title: "Charity & Social Impact Experiences",
      description:
        "Refined fundraising and awareness events that align purpose with action.",
      image: "/charity.png",
    },
    {
      title: "Community Experiences",
      description:
        "Thoughtfully curated social gatherings that strengthen community bonds and cultural exchange.",
      image: "/community.png",
    },
    {
      title: "Business & Networking Experiences",
      description:
        "Exclusive professional experiences that enable strategic dialogue and meaningful collaboration.",
      image: "/business.png",
    },
    {
      title: "Lounges & Lifestyle Experiences",
      description:
        "Inviting social environments designed for relaxation, conversation, and connection.",
      image: "/lounge.png",
    },
  ];
  return (
    <main className={styles.events_page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span>Purposefully Designed. </span>
            <span>Exceptionally Delivered.</span>
          </h1>
          <p className={styles.heroDescription}>
            One Crew Social Network presents a portfolio of experiences crafted
            to inspire connection, engagement, and growth.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#experiences" className={styles.primaryButton}>
              Discover Our Experiences
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
          />
        </div>
      </section>
      <section className={styles.events}>
        {experiences.map((ex, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.evenPlaceholder}>
              <Image
                src={ex.image}
                alt={ex.title + " illustration"}
                width={100}
                height={100}
                quality={100}
              />
            </div>
            <h3>{ex.title}</h3>
            <p>{ex.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
