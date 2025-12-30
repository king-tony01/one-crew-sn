import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Callout from "@/components/Callout";

const imgGroup10 =
  "http://localhost:3845/assets/bffa46c1ce0068fa834c8b95fc32c82cbf7be691.svg";

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

export default function About() {
  return (
    <div>
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
            src={"/hero.svg"}
            alt="Hero illustration"
            width={200}
            height={200}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionImage}></div>
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
          Curated Experiences Across Culture, Lifestyle, and Business
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
