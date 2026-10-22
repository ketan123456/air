"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
const links = [
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <span className="topbar-label">
          PRECISION AIR TREATMENT <i /> BUILT AROUND YOUR PROCESS
        </span>
        <span className="topbar-compact">AIROX · NEW DELHI</span>
        <a href="tel:+918470072102">
          Call Airox <b>+91 84700 72102</b>
        </a>
      </div>
      <header className="site-header">
        <Link className="logo-link" href="/" aria-label="Airox home">
          <img src="/airox-logo.png" alt="Airox Ultra Pneumatics" />
        </Link>
        <nav className={open ? "nav-links opened" : "nav-links"}>
          {links.map(([name, href]) => (
            <Link
              key={name}
              className={
                path === href ||
                (href === "/products" && path.startsWith("/products/"))
                  ? "active"
                  : ""
              }
              href={href}
              onClick={() => setOpen(false)}>
              {name}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Request a quote <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
