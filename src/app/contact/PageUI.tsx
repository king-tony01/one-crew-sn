"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { act, useState } from "react";

function PageUI() {
  const [active, setActive] = useState(0);
  const [message, setMessage] = useState({
    message: "",
    name: "",
    email: "",
  });

  const [inquiry, setInquiry] = useState({
    details: "",
    name: "",
    company: "",
    email: "",
  });

  const messageDisabled =
    Object.values(message).some((val) => val === "") && active === 0;
  const inquiryDisabled =
    Object.values(inquiry).some((val) => val === "") && active === 1;

  function handleMessgaeChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleInquiryChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setInquiry((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <main className={styles.contact_page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Begin the Conversation</h1>
          <p className={styles.heroDescription}>
            For partnerships, collaborations, or upcoming experiences, connect
            with the One Crew team.
          </p>
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
      <section className={styles.form_area}>
        <div className={styles.header}>
          {["Contact", "Partnership"].map((p, i) => (
            <button
              key={i}
              className={`${styles.tab} ${active === i ? styles.active : ""}`}
              onClick={() => setActive(i)}
            >
              {p}
            </button>
          ))}
        </div>
        <div className={styles.form_wrapper}>
          {active === 0 ? (
            <form className={styles.form}>
              <div className={styles.grid}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={message.name}
                    onChange={handleMessgaeChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={message.email}
                    onChange={handleMessgaeChange}
                  />
                </div>
              </div>
              <textarea
                name="message"
                id=""
                placeholder="Message"
                value={message.message}
                onChange={handleMessgaeChange}
              ></textarea>
              <br />
              <button disabled={messageDisabled}>Send</button>
            </form>
          ) : (
            <form className={styles.form}>
              <div className={styles.grid}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={inquiry.name}
                    onChange={handleInquiryChange}
                  />
                </div>
                <div>
                  <label>Name of company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    value={inquiry.company}
                    onChange={handleInquiryChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={inquiry.email}
                    onChange={handleInquiryChange}
                  />
                </div>
              </div>

              <textarea
                name="details"
                id=""
                placeholder="Inquiry details"
                value={inquiry.details}
                onChange={handleInquiryChange}
              ></textarea>
              <br />
              <button disabled={inquiryDisabled}>Send</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default PageUI;
