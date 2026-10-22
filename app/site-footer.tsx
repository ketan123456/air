import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/airox-logo.png" alt="Airox Ultra Pneumatics" />
          <p className="ps-0">Compressed air equipment and practical support for industry.</p>
          <span className="gst">GSTIN / UIN&nbsp; 07BWVPN0302C1ZS</span>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries served</Link>
          <Link href="/about">About Airox</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <MapPin size={15} /> Ground Floor, 59A, Sainik Enclave,
            <br />
            Mohan Garden, Part III, Uttam Nagar,
            <br />
            South West Delhi — 110059, India
          </p>
          <a href="tel:+918470072102">
            <Phone size={15} /> +91 84700 72102
          </a>
          <a href="mailto:Airoxultrapneumatics08@gmail.com">
            <Mail size={15} /> Airoxultrapneumatics08@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Airox Ultra Pneumatics</span>
        <span>DELHI, INDIA · ENGINEERED FOR INDUSTRY</span>
        <Link href="/contact">
          Start a conversation <ArrowUpRight size={13} />
        </Link>
      </div>
    </footer>
  );
}
