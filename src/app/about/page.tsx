import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Callout from "@/components/Callout";
import { Metadata } from "next";

const values = [
  {
    title: "Community",
    description: "Connection begins with people",
    icon: <Callout />,
  },
  {
    title: "Intentionality",
    description: "Every experience is designed with purpose",
    icon: <Callout />,
  },
  {
    title: "Excellence",
    description: "Quality over quantity, always",
    icon: <Callout />,
  },
  {
    title: "Inclusion",
    description: "Diverse voices, shared experiences",
    icon: <Callout />,
  },
  {
    title: "Impact",
    description: "Measured beyond the moment",
    icon: <Callout />,
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about One Crew Social Network's mission, values, and commitment to fostering meaningful connections through curated social, cultural, and business experiences.",
  keywords: [
    "about one crew",
    "mission",
    "values",
    "community building",
    "social impact",
    "curated experiences",
  ],
  openGraph: {
    title: "About Us - One Crew Social Network",
    description:
      "Learn more about One Crew Social Network's mission, values, and commitment to fostering meaningful connections through curated social, cultural, and business experiences.",
    url: "https://onecrewsn.com/about",
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "About One Crew Social Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - One Crew Social Network",
    description:
      "Learn more about One Crew Social Network's mission, values, and commitment to fostering meaningful connections.",
    images: ["/about.png"],
  },
  alternates: {
    canonical: "https://onecrewsn.com/about",
  },
};

export default function About() {
  return (
    <div className={styles.about_page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span>Defined by Connection.</span>
            <span>Guided by Purpose.</span>
          </h1>
          <p className={styles.heroDescription}>
            One Crew Social Network exists to elevate the way people connect. We
            curate social, cultural, and business experiences that bring
            together individuals and organizations in environments designed for
            meaningful engagement. Our work sits at the intersection of
            lifestyle, community, and commerce — where relationships evolve into
            opportunity.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#experiences" className={styles.primaryButton}>
              Discover Our Experiences
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={"/about.png"}
            alt="Hero illustration"
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionImage}>
            <Image
              src={"/mission.png"}
              alt="Mission illustration"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className={styles.missionText}>
            <p className={styles.sectionLabel}>Our Mission</p>
            <h2 className={styles.sectionTitle}>
              A Refined Approach to Social Connection
            </h2>
            <p className={styles.sectionDescription}>
              To create enabling environments that advance social integration,
              foster collaboration, and enhance the economic and cultural value
              of individuals and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <p className={styles.sectionLabel}>Our Values</p>
        <h2 className={styles.sectionTitleCenter}>
          Curated Experiences Across Culture, <br />
          Lifestyle, and Business
        </h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
              <div className={styles.valueIcon}>{value.icon}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
