import { Metadata } from "next";
import PageUI from "./PageUI";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with One Crew Social Network for partnerships, collaborations, and inquiries about our curated experiences.",
  keywords: [
    "contact one crew",
    "partnerships",
    "collaborations",
    "inquiries",
    "get in touch",
  ],
  openGraph: {
    title: "Contact - One Crew Social Network",
    description:
      "Get in touch with One Crew Social Network for partnerships, collaborations, and inquiries about our curated experiences.",
    url: "https://onecrewsn.com/contact",
    type: "website",
    images: [
      {
        url: "/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact One Crew Social Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - One Crew Social Network",
    description:
      "Get in touch with One Crew Social Network for partnerships, collaborations, and inquiries.",
    images: ["/contact.png"],
  },
  alternates: {
    canonical: "https://onecrewsn.com/contact",
  },
};

export default function Contact() {
  return <PageUI />;
}
