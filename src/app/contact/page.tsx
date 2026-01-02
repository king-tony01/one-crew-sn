import { Metadata } from "next";
import PageUI from "./PageUI";

export const metadata: Metadata = {
  title: "Contact - One Crew Social Network",
  description:
    "Get in touch with One Crew Social Network for partnerships, collaborations, and inquiries about our curated experiences.",
};

export default function Contact() {
  return <PageUI />;
}
