"use client";

import { useState } from "react";
import {
  AlertIcon,
  CanadaFlag,
  ChatIcon,
  CheckIcon,
  ChevronIcon,
  DocIcon,
  GearIcon,
  HandsetIcon,
  HeroArt,
  InfoIcon,
  LayersIcon,
  LogoMark,
  MessageIcon,
  PhoneIcon,
  PinIcon,
  PlaneIcon,
  ShieldIcon,
  SideArt,
} from "./components/graphics";

const DEFAULT_MESSAGE = "Test SMS from AWS End User Messaging.";

function nationalDigits(value) {
  let digits = value.replace(/\D/g, "");

  if (digits.length > 10 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  return digits.slice(0, 10);
}

function formatCanadianNumber(digits) {
  const area = digits.slice(0, 3);
  const exchange = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (!digits) {
    return "";
  }

  if (digits.length <= 3) {
    return `(${area}`;
  }

  if (digits.length <= 6) {
    return `(${area}) ${exchange}`;
  }

  return `(${area}) ${exchange}-${line}`;
}

const FEATURES = [
  {
    title: "Verify Configuration",
    text: "Ensure your AWS credentials and setup are working correctly.",
    icon: CheckIcon,
    tone: "green",
  },
  {
    title: "Test Message Delivery",
    text: "Send a real test SMS to a verified phone number.",
    icon: ChatIcon,
    tone: "blue",
  },
  {
    title: "Secure & Reliable",
    text: "Built with AWS End User Messaging best practices.",
    icon: ShieldIcon,
    tone: "purple",
  },
];

export default function HomePage() {
  const [nationalNumber, setNationalNumber] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [sending, setSending] = useState(false);
  const [messageId, setMessageId] = useState("");
  const [error, setError] = useState("");

  const canSend =
    nationalNumber.length === 10 && message.trim() !== "" && !sending;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!canSend) {
      return;
    }

    setSending(true);
    setMessageId("");
    setError("");

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: `+1${nationalNumber}`,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Failed to send SMS.");
        return;
      }

      setMessageId(data.messageId || "");
    } catch {
      setError("Failed to send SMS. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="page">
      <div className="shell">
        <header className="hero">
          <div>
            <div className="brand">
              <LogoMark />
              <div>
                <h1>AWS SMS Tester</h1>
                <p className="product">AWS End User Messaging SMS</p>
              </div>
            </div>
            <p className="lede">
              Send a test SMS using AWS End User Messaging to verify your
              configuration and messaging setup.
            </p>
          </div>
          <HeroArt />
        </header>

        <div className="layout">
          <section className="panel" aria-labelledby="send-heading">
            <div className="panel-head">
              <div className="panel-title">
                <span className="title-icon">
                  <PlaneIcon size={18} />
                </span>
                <h2 id="send-heading">Send a Test SMS</h2>
              </div>
              <span className="badge">
                <AlertIcon />
                Sandbox Mode
              </span>
            </div>
            <p className="panel-copy">
              Enter a destination phone number and message to send a test SMS
              via AWS End User Messaging.
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <label className="field">
                <span className="label">
                  <PhoneIcon />
                  Destination Phone Number
                </span>
                <span className="phone">
                  <span className="dial">
                    <CanadaFlag />
                    <select aria-label="Country code" defaultValue="+1" disabled={sending}>
                      <option value="+1">+1</option>
                    </select>
                    <ChevronIcon />
                  </span>
                  <input
                    type="tel"
                    name="phoneNumber"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="(416) 555-1234"
                    value={formatCanadianNumber(nationalNumber)}
                    onChange={(event) =>
                      setNationalNumber(nationalDigits(event.target.value))
                    }
                    disabled={sending}
                  />
                </span>
                <span className="helper">
                  <InfoIcon />
                  <span>
                    Canadian 10-digit number. +1 is added automatically, for
                    example <span className="example">+1 (416) 555-1234</span>
                  </span>
                </span>
              </label>

              <label className="field">
                <span className="label-row">
                  <span className="label">
                    <MessageIcon />
                    Message
                  </span>
                  <span className="count">{message.length} characters</span>
                </span>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  disabled={sending}
                />
              </label>

              <p className="warning">
                <AlertIcon />
                <span>
                  <strong>Sandbox mode is enabled.</strong> The destination
                  phone number must be verified in AWS End User Messaging
                  before SMS can be delivered.
                </span>
              </p>

              <button type="submit" disabled={!canSend} aria-busy={sending}>
                <PlaneIcon size={18} />
                {sending ? "Sending..." : "Send SMS"}
              </button>
            </form>

            {messageId ? (
              <div className="alert success" role="status">
                <p className="alert-title">SMS sent successfully</p>
                <p className="alert-label">Message ID:</p>
                <p className="message-id">{messageId}</p>
              </div>
            ) : null}

            {error ? (
              <div className="alert error" role="alert">
                {error}
              </div>
            ) : null}
          </section>

          <aside className="panel side" aria-labelledby="guide-heading">
            <SideArt />
            <h2 id="guide-heading">Test Your SMS Configuration</h2>
            <p>
              Quickly send a test message using AWS End User Messaging to
              verify your setup, credentials and delivery configuration.
            </p>
            <ul className="features">
              {FEATURES.map((feature) => {
                const FeatureIcon = feature.icon;

                return (
                  <li key={feature.title}>
                    <span className={`feature-icon ${feature.tone}`}>
                      <FeatureIcon />
                    </span>
                    <span>
                      <strong>{feature.title}</strong>
                      <span>{feature.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>

        <section className="panel config" aria-labelledby="config-heading">
          <div className="config-head">
            <span className="config-gear">
              <GearIcon />
            </span>
            <div>
              <h2 id="config-heading">AWS Configuration</h2>
              <p>Current configuration loaded from environment variables.</p>
            </div>
          </div>
          <dl>
            <div>
              <span className="config-icon">
                <PinIcon />
              </span>
              <div>
                <dt>Region</dt>
                <dd>Configured via environment</dd>
              </div>
            </div>
            <div>
              <span className="config-icon">
                <HandsetIcon />
              </span>
              <div>
                <dt>Origination Number</dt>
                <dd>Configured via environment</dd>
              </div>
            </div>
            <div>
              <span className="config-icon">
                <DocIcon />
              </span>
              <div>
                <dt>Message Type</dt>
                <dd>Transactional</dd>
              </div>
            </div>
            <div>
              <span className="config-icon">
                <LayersIcon />
              </span>
              <div>
                <dt>Environment</dt>
                <dd>
                  <span className="sandbox-pill">
                    <AlertIcon />
                    Sandbox
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </section>

        <footer className="footer">
          <span>
            Developed by Jaydeep Motisariya (
            <a
              href="https://www.riseuptechnology.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Riseup Technology Inc.
            </a>
            )
          </span>
        </footer>
      </div>
    </main>
  );
}
