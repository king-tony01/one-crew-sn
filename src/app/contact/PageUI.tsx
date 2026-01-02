"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

function PageUI() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successType, setSuccessType] = useState<"message" | "inquiry">(
    "message"
  );
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
    (Object.values(message).some((val) => val === "") && active === 0) ||
    (loading && active === 0);
  const inquiryDisabled =
    (Object.values(inquiry).some((val) => val === "") && active === 1) ||
    (loading && active === 1);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

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

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);

      const currentDate = new Date().toLocaleDateString("en-UK", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const emailTemplate = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>New Message - One Crew Social Network</title>
    <!--[if mso]>
    <style>
        * { font-family: sans-serif !important; }
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <!--<![endif]-->
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f4f4f5;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        a {
            text-decoration: none;
        }

        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        .im {
            color: inherit !important;
        }

        img.g-img+div {
            display: none !important;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u~div .email-container {
                min-width: 320px !important;
            }
        }

        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u~div .email-container {
                min-width: 375px !important;
            }
        }

        @media only screen and (min-device-width: 414px) {
            u~div .email-container {
                min-width: 414px !important;
            }
        }
    </style>
    <style>
        .primary {
            background: #000000;
        }

        .bg_white {
            background: #ffffff;
        }

        .bg_gradient {
            background: radial-gradient(50% 50% at 50% 50%, #fff7f0 0%, #f3fff9 49.62%, #fff 100%);
        }

        .bg_light {
            background: #efefef;
        }

        .bg_black {
            background: #000000;
        }

        .email-section {
            padding: 2.5em;
        }

        .btn {
            padding: 14px 32px;
            display: inline-block;
            background: #f6821f;
            color: #ffffff;
            border-radius: 100px;
            font-weight: 500;
            text-decoration: none;
        }

        .btn.btn-secondary {
            background: #000000;
            color: #ffffff;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #000000;
            margin-top: 0;
            font-weight: 700;
        }

        body {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 1.6;
            color: #5e5e5e;
        }

        a {
            color: #f6821f;
            font-weight: 500;
        }

        .logo h1 {
            margin: 0;
        }

        .logo h1 a {
            color: #000000;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .heading-section h2 {
            color: #000000;
            font-size: 32px;
            margin-top: 0;
            line-height: 1.3;
            font-weight: 700;
        }

        .heading-section .subheading {
            margin-bottom: 20px !important;
            display: inline-block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #f6821f;
            font-weight: 500;
        }

        .message-box {
            background: #f8f8f8;
            border-left: 4px solid #f6821f;
            padding: 24px;
            margin: 20px 0;
            border-radius: 8px;
        }

        .info-row {
            margin: 16px 0;
        }

        .info-label {
            font-weight: 500;
            color: #000000;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }

        .info-value {
            color: #5e5e5e;
            font-size: 15px;
            word-break: break-word;
        }

        .footer {
            color: #5e5e5e;
            font-size: 13px;
        }

        .footer a {
            color: #000000;
            text-decoration: none;
        }

        .footer a:hover {
            color: #f6821f;
        }

        .divider {
            border: none;
            border-top: 1px solid #d9d9d9;
            margin: 30px 0;
        }

        @media screen and (max-width: 500px) {
            .email-section {
                padding: 1.5em;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f4f4f5;">
    <center style="width: 100%; background-color: #f4f4f5;">
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <!-- BEGIN BODY -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <!-- Logo & Header -->
                <tr>
                    <td valign="top" class="bg_white" style="padding: 2em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td class="logo" style="text-align: left;">
                                    <h1><a href="https://onecrewsocialnetwork.com">ONE CREW</a></h1>
                                </td>
                                <td style="text-align: right;">
                                    <span style="color: #5e5e5e; font-size: 13px;">${currentDate}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <!-- Hero Section -->
                <tr>
                    <td valign="middle" class="bg_gradient email-section" style="text-align: center; padding: 3em 2.5em;">
                        <div class="heading-section">
                            <h2 style="color: #000000; margin-bottom: 8px;">New Message Received</h2>
                            <p style="color: #5e5e5e; font-size: 14px; margin: 0;">Someone has reached out via your contact form</p>
                        </div>
                    </td>
                </tr>

                <!-- Message Content -->
                <tr>
                    <td class="bg_white email-section">
                        <div class="heading-section">
                            <span class="subheading">Message Details</span>
                        </div>
                        
                        <div class="info-row">
                            <div class="info-label">From</div>
                            <div class="info-value">${message.name}</div>
                        </div>

                        <div class="info-row">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">
                                <a href="mailto:${message.email}" style="color: #f6821f; text-decoration: none;">${message.email}</a>
                            </div>
                        </div>

                        <hr class="divider">

                        <div class="info-row">
                            <div class="info-label">Message</div>
                        </div>
                        
                        <div class="message-box">
                            <p style="margin: 0; color: #3f3f46; line-height: 1.8; white-space: pre-wrap;">${message.message}</p>
                        </div>

                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 30px;">
                            <tr>
                                <td>
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="text-align: center;">
                                                <a href="mailto:${message.email}" class="btn" style="color: #ffffff; text-decoration: none;">Reply to ${message.name}</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td class="bg_light email-section" style="padding: 2em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td valign="middle" class="footer" style="text-align: center;">
                                    <p style="margin: 0 0 10px 0;">
                                        <strong style="color: #18181b;">One Crew Social Network</strong><br>
                                        Curated refined social experiences connecting people, culture, and opportunity
                                    </p>
                                    <p style="margin: 10px 0;">
                                        <a href="https://onecrewsocialnetwork.com" style="color: #000000; margin: 0 8px;">Website</a> |
                                        <a href="https://onecrewsocialnetwork.com/about" style="color: #000000; margin: 0 8px;">About</a> |
                                        <a href="https://onecrewsocialnetwork.com/events" style="color: #000000; margin: 0 8px;">Experiences</a> |
                                        <a href="https://onecrewsocialnetwork.com/contact" style="color: #000000; margin: 0 8px;">Contact</a>
                                    </p>
                                    <p style="margin: 15px 0 0 0; color: #a1a1aa; font-size: 12px;">
                                        © 2026 One Crew Social Network. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>`;

      const res = await fetch(
        "https://email-service-475704943074.us-central1.run.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "info@onecrewsocialnetwork.com",
            subject: `Message from ${message.name}`,
            text: message.message,
            html: emailTemplate,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setSuccessType("message");
        setShowSuccess(true);
        setMessage({ message: "", name: "", email: "" });
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function sendInquiry(e: React.FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);

      const currentDate = new Date().toLocaleDateString("en-UK", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const inquiryTemplate = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>New Partnership Inquiry - One Crew Social Network</title>
    <!--[if mso]>
    <style>
        * { font-family: sans-serif !important; }
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <!--<![endif]-->
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f4f4f5;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        a {
            text-decoration: none;
        }

        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        .im {
            color: inherit !important;
        }

        img.g-img+div {
            display: none !important;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u~div .email-container {
                min-width: 320px !important;
            }
        }

        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u~div .email-container {
                min-width: 375px !important;
            }
        }

        @media only screen and (min-device-width: 414px) {
            u~div .email-container {
                min-width: 414px !important;
            }
        }
    </style>
    <style>
        .primary {
            background: #000000;
        }

        .bg_white {
            background: #ffffff;
        }

        .bg_light {
            background: #efefef;
        }

        .bg_gradient {
            background: radial-gradient(50% 50% at 50% 50%, #fff7f0 0%, #f3fff9 49.62%, #fff 100%);
        }

        .bg_black {
            background: #000000;
        }

        .bg_orange {
            background: #f6821f;
        }

        .email-section {
            padding: 2.5em;
        }

        .btn {
            padding: 14px 32px;
            display: inline-block;
            background: #f6821f;
            color: #ffffff;
            border-radius: 100px;
            font-weight: 500;
            text-decoration: none;
        }

        .btn.btn-secondary {
            background: #000000;
            color: #ffffff;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #000000;
            margin-top: 0;
            font-weight: 700;
        }

        body {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 1.6;
            color: #5e5e5e;
        }

        a {
            color: #f6821f;
            font-weight: 500;
        }

        .logo h1 {
            margin: 0;
        }

        .logo h1 a {
            color: #000000;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .heading-section h2 {
            color: #000000;
            font-size: 32px;
            margin-top: 0;
            line-height: 1.3;
            font-weight: 700;
        }

        .heading-section .subheading {
            margin-bottom: 20px !important;
            display: inline-block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #f6821f;
            font-weight: 500;
        }

        .message-box {
            background: #f8f8f8;
            border-left: 4px solid #f6821f;
            padding: 24px;
            margin: 20px 0;
            border-radius: 8px;
        }

        .info-row {
            margin: 16px 0;
        }

        .info-label {
            font-weight: 500;
            color: #000000;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }

        .info-value {
            color: #5e5e5e;
            font-size: 15px;
            word-break: break-word;
        }

        .priority-badge {
            display: inline-block;
            background: #000000;
            color: white;
            padding: 4px 12px;
            border-radius: 100px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 10px;
        }

        .footer {
            color: #5e5e5e;
            font-size: 13px;
        }

        .footer a {
            color: #000000;
            text-decoration: none;
        }

        .footer a:hover {
            color: #f6821f;
        }

        .divider {
            border: none;
            border-top: 1px solid #d9d9d9;
            margin: 30px 0;
        }

        @media screen and (max-width: 500px) {
            .email-section {
                padding: 1.5em;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f4f4f5;">
    <center style="width: 100%; background-color: #f4f4f5;">
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <!-- BEGIN BODY -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <!-- Logo & Header -->
                <tr>
                    <td valign="top" class="bg_white" style="padding: 2em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td class="logo" style="text-align: left;">
                                    <h1><a href="https://onecrewsn.com">ONE CREW</a></h1>
                                </td>
                                <td style="text-align: right;">
                                    <span style="color: #71717a; font-size: 13px;">${currentDate}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <!-- Hero Section -->
                <tr>
                    <td valign="middle" class="bg_orange email-section" style="text-align: center; padding: 3em 2.5em;">
                        <div class="heading-section">
                            <h2 style="color: #ffffff; margin-bottom: 8px;">New Partnership Inquiry <span class="priority-badge" style="background: #000000;">PRIORITY</span></h2>
                            <p style="color: rgba(255, 255, 255, 0.9); font-size: 14px; margin: 0;">A potential partnership opportunity has been submitted</p>
                        </div>
                    </td>
                </tr>

                <!-- Inquiry Content -->
                <tr>
                    <td class="bg_white email-section">
                        <div class="heading-section">
                            <span class="subheading">Partnership Details</span>
                        </div>
                        
                        <div class="info-row">
                            <div class="info-label">Contact Name</div>
                            <div class="info-value">${inquiry.name}</div>
                        </div>

                        <div class="info-row">
                            <div class="info-label">Company / Organization</div>
                            <div class="info-value">${inquiry.company}</div>
                        </div>

                        <div class="info-row">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">
                                <a href="mailto:${inquiry.email}" style="color: #000000;">${inquiry.email}</a>
                            </div>
                        </div>

                        <hr class="divider">

                        <div class="info-row">
                            <div class="info-label">Inquiry Details</div>
                        </div>
                        
                        <div class="message-box">
                            <p style="margin: 0; color: #3f3f46; line-height: 1.8; white-space: pre-wrap;">${inquiry.details}</p>
                        </div>

                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 30px;">
                            <tr>
                                <td>
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="text-align: center;">
                                                <a href="mailto:${inquiry.email}" class="btn" style="color: #ffffff;">Reply to ${inquiry.name}</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td class="bg_light email-section" style="padding: 2em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td valign="middle" class="footer" style="text-align: center;">
                                    <p style="margin: 0 0 10px 0;">
                                        <strong style="color: #18181b;">One Crew Social Network</strong><br>
                                        Curated refined social experiences connecting people, culture, and opportunity
                                    </p>
                                    <p style="margin: 10px 0;">
                                        <a href="https://onecrewsn.com" style="color: #000000; margin: 0 8px;">Website</a> |
                                        <a href="https://onecrewsn.com/about" style="color: #000000; margin: 0 8px;">About</a> |
                                        <a href="https://onecrewsn.com/events" style="color: #000000; margin: 0 8px;">Experiences</a> |
                                        <a href="https://onecrewsn.com/contact" style="color: #000000; margin: 0 8px;">Contact</a>
                                    </p>
                                    <p style="margin: 15px 0 0 0; color: #aaa; font-size: 12px;">
                                        © 2026 One Crew Social Network. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>`;

      const res = await fetch(
        "https://email-service-475704943074.us-central1.run.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // to: "amuchea57@gmail.com",
            to: "info@onecrewsocialnetwork.com",
            subject: `Partnership Inquiry from ${inquiry.company} - ${inquiry.name}`,
            text: inquiry.details,
            html: inquiryTemplate,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setSuccessType("inquiry");
        setShowSuccess(true);
        setInquiry({ details: "", name: "", company: "", email: "" });
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
            width={1000}
            height={1000}
            quality={100}
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
              <button disabled={messageDisabled} onClick={sendMessage}>
                {loading ? "Sending..." : "Send"}
              </button>
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
              <button disabled={inquiryDisabled} onClick={sendInquiry}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowSuccess(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#10b981" />
                <path
                  d="M14 24l8 8 12-12"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.modalTitle}>
              {successType === "message"
                ? "Message Sent Successfully!"
                : "Inquiry Submitted Successfully!"}
            </h3>
            <p className={styles.modalDescription}>
              {successType === "message"
                ? "Thank you for reaching out. We'll get back to you shortly."
                : "Thank you for your partnership inquiry. Our team will review it and respond soon."}
            </p>
            <button
              className={styles.modalButton}
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default PageUI;
