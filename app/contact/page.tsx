import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ChevronRight } from "lucide-react";
export const metadata = {
  title: "Contact Airox",
  description: "Contact Airox Ultra Pneumatics in Uttam Nagar, New Delhi.",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-hero contact-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={13} />
          <span>Contact</span>
        </div>
        <div className="contact-hero-copy" data-reveal>
          <span className="eyebrow">
            <i /> NEW DELHI · INDIA
          </span>
          <h1>
            Let’s talk
            <br />
            <em>compressed air.</em>
          </h1>
          <p>
            Share your equipment or process requirements with Airox Ultra
            Pneumatics.
          </p>
        </div>
      </div>
      <section className="contact-layout section-pad">
        <div className="contact-details">
          <a href="tel:+918470072102" data-reveal>
            <span>
              <Phone />
            </span>
            <div>
              <small>CALL US</small>
              <b>+91 84700 72102</b>
              <ArrowUpRight />
            </div>
          </a>
          <a href="mailto:Airoxultrapneumatics08@gmail.com" data-reveal>
            <span>
              <Mail />
            </span>
            <div>
              <small>EMAIL</small>
              <b>Airoxultrapneumatics08@gmail.com</b>
              <ArrowUpRight />
            </div>
          </a>
          <div className="address-card" data-reveal>
            <span>
              <MapPin />
            </span>
            <div>
              <small>VISIT</small>&nbsp;&nbsp;<b>Airox Ultra Pneumatics</b>
              <p>
                Ground Floor, 59A, Sainik Enclave
                <br />
                Mohan Garden, Part III, Uttam Nagar
                <br />
                South West Delhi, Delhi — 110059
                <br />
                India
              </p>
            </div>
          </div>
        </div>
        <div className="contact-note" data-reveal>
          <span className="eyebrow dark">
            <i /> HELP US UNDERSTAND YOUR NEED
          </span>
          <h2>
            Start with the
            <br />
            <em>application.</em>
          </h2>
          <p>
            When you contact us, tell us what equipment you’re considering, your
            operating conditions and the problem you’re solving. That helps us
            direct the conversation.
          </p>
          <div>
            <b>GSTIN / UIN</b>
            <span>07BWVPN0302C1ZS</span>
          </div>
          <a
            className="btn btn-blue"
            href="mailto:Airoxultrapneumatics08@gmail.com?subject=Equipment%20enquiry">
            Email Airox <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
