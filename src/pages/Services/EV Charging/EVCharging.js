import React from "react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CarFront,
  Check,
  ClipboardCheck,
  Home,
  PlugZap,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./EVCharging.css";

const chargingServices = [
  {
    icon: Home,
    title: "Home EV charger installation",
    text: "A convenient charger for your driveway or garage, planned around your parking space and home's electrical supply.",
  },
  {
    icon: Building2,
    title: "Workplace & commercial charging",
    text: "Charging provision for staff, customers, fleets and multi-property sites, with capacity and future growth in mind.",
  },
  {
    icon: BatteryCharging,
    title: "Smart charging & load management",
    text: "Options to help manage charging demand and make better use of available electrical capacity.",
  },
  {
    icon: Sun,
    title: "Solar & battery integration",
    text: "Where the system allows, we can plan charging alongside existing or proposed solar and battery equipment.",
  },
];

const installationSteps = [
  {
    number: "01",
    title: "Tell us about your site",
    text: "Share your location, vehicle, parking arrangement and any preferred charger features.",
  },
  {
    number: "02",
    title: "We assess the installation",
    text: "We review the electrical supply, consumer unit, cable route and any access requirements.",
  },
  {
    number: "03",
    title: "Install & test",
    text: "Our team completes the agreed work, then tests and explains how to use your charger.",
  },
];

const faqs = [
  {
    question: "Can you install a charger at my home?",
    answer:
      "We can assess home installations across our service area. The final setup depends on the property, parking access, electrical supply and cable route.",
  },
  {
    question: "Do you install chargers for businesses?",
    answer:
      "Yes. We can discuss workplace and commercial charging requirements, including site capacity, parking layout and plans for future expansion.",
  },
  {
    question: "Will my consumer unit need an upgrade?",
    answer:
      "Not necessarily. We check the existing installation and available capacity before confirming the scope. Any additional electrical work is discussed with you before it begins.",
  },
  {
    question: "Can I use a charger with solar panels?",
    answer:
      "Potentially. Compatibility depends on the charger, solar and battery equipment, and how the system is configured. We can review this during the assessment.",
  },
];

export default function EVCharging() {
  return (
    <>
      <Header />
      <main className="ev-charging">
        <section className="ev-charging__hero">
          <div className="ev-charging__container ev-charging__hero-grid">
            <div className="ev-charging__hero-copy">
              <span className="ev-charging__eyebrow">
                <Zap size={16} aria-hidden="true" />
                EV charging solutions · London & nearby
              </span>
              <h1>EV charger installation, planned around your property.</h1>
              <p>
                Make charging simpler at home or work. Eco Voltex assesses your
                electrical supply and site, then helps plan a safe, practical
                charger installation for your needs.
              </p>
              <ul className="ev-charging__checks">
                <li><Check size={18} aria-hidden="true" /> Home and workplace installations</li>
                <li><Check size={18} aria-hidden="true" /> Site and electrical capacity assessment</li>
                <li><Check size={18} aria-hidden="true" /> Clear scope, testing and handover</li>
              </ul>
              <div className="ev-charging__actions">
                <Link className="ev-charging__button ev-charging__button--primary" to="/contact">
                  Request an EV charger quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link className="ev-charging__button ev-charging__button--secondary" to="/areas-we-cover">
                  Check our coverage
                </Link>
              </div>
              <p className="ev-charging__note">
                Every installation is subject to a site and electrical assessment.
              </p>
            </div>

            <div className="ev-charging__visual" aria-label="Illustration of an electric vehicle charging">
              <div className="ev-charging__visual-glow" />
              <div className="ev-charging__visual-topline">
                <span><ShieldCheck size={17} aria-hidden="true" /> Thoughtfully specified</span>
                <span className="ev-charging__status-dot">Assessment first</span>
              </div>
              <div className="ev-charging__charger">
                <div className="ev-charging__charger-screen">
                  <span>READY TO CHARGE</span>
                  <Zap size={30} aria-hidden="true" />
                  <strong>EV</strong>
                </div>
                <div className="ev-charging__charger-port" />
              </div>
              <div className="ev-charging__cable" />
              <div className="ev-charging__car">
                <CarFront size={124} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <div className="ev-charging__visual-caption">
                <PlugZap size={19} aria-hidden="true" />
                <span>Charging that fits your day</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ev-charging__trust">
          <div className="ev-charging__container ev-charging__trust-grid">
            <span><ShieldCheck size={20} aria-hidden="true" /> Fully insured</span>
            <span><ClipboardCheck size={20} aria-hidden="true" /> Tested installation</span>
            <span><Building2 size={20} aria-hidden="true" /> Homes & businesses</span>
            <span><Zap size={20} aria-hidden="true" /> London & M25 area</span>
          </div>
        </section>

        <section className="ev-charging__section">
          <div className="ev-charging__container">
            <div className="ev-charging__section-heading">
              <span className="ev-charging__eyebrow">EV charging services</span>
              <h2>One installation, designed for the way you charge.</h2>
              <p>
                From a single home charger to a business site, we help you
                understand the options and plan the work around your property.
              </p>
            </div>
            <div className="ev-charging__service-grid">
              {chargingServices.map(({ icon: Icon, title, text }) => (
                <article className="ev-charging__service-card" key={title}>
                  <span className="ev-charging__service-icon">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ev-charging__section ev-charging__section--soft">
          <div className="ev-charging__container ev-charging__planning-grid">
            <div>
              <span className="ev-charging__eyebrow">A practical plan</span>
              <h2>Start with the details that matter.</h2>
              <p>
                The right charging setup depends on more than the charger.
                Before confirming a quote, we consider the electrical supply,
                charger position, cable route and how the space is used.
              </p>
              <ul className="ev-charging__checks ev-charging__checks--dark">
                <li><Check size={18} aria-hidden="true" /> Your existing electrical installation and available capacity</li>
                <li><Check size={18} aria-hidden="true" /> The distance from the supply to your parking space</li>
                <li><Check size={18} aria-hidden="true" /> Charging needs now and any planned expansion</li>
                <li><Check size={18} aria-hidden="true" /> Smart features and compatible energy systems</li>
              </ul>
            </div>
            <aside className="ev-charging__planning-card">
              <span className="ev-charging__planning-icon"><ClipboardCheck size={27} aria-hidden="true" /></span>
              <h3>No guesswork before installation</h3>
              <p>
                We’ll explain any constraints or extra work identified during
                the assessment, so you can agree the scope before installation.
              </p>
              <Link to="/contact">Talk through your site <ArrowRight size={17} aria-hidden="true" /></Link>
            </aside>
          </div>
        </section>

        <section className="ev-charging__section">
          <div className="ev-charging__container">
            <div className="ev-charging__section-heading">
              <span className="ev-charging__eyebrow">How it works</span>
              <h2>From first conversation to charger handover.</h2>
            </div>
            <ol className="ev-charging__steps">
              {installationSteps.map((step) => (
                <li key={step.number}>
                  <span className="ev-charging__step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ev-charging__section ev-charging__section--soft">
          <div className="ev-charging__container ev-charging__faq">
            <div className="ev-charging__section-heading">
              <span className="ev-charging__eyebrow">FAQs</span>
              <h2>EV charger installation questions.</h2>
            </div>
            <div className="ev-charging__faq-list">
              {faqs.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ev-charging__cta">
          <div className="ev-charging__container ev-charging__cta-inner">
            <div>
              <span className="ev-charging__eyebrow">Let’s plan your installation</span>
              <h2>Ready to charge at home or work?</h2>
              <p>Tell us a little about your site and we’ll help you take the next step.</p>
            </div>
            <Link className="ev-charging__button ev-charging__button--light" to="/contact">
              Get in touch <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
