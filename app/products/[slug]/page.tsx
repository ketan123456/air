import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Phone,
} from "lucide-react";
import { products } from "../../products-data";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const p = products.find((x) => x.slug === slug);
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return {
    title: p?.name ?? "Products",
    description: p?.short,
    keywords: p
      ? [
          p.name,
          "compressed air equipment",
          "industrial air treatment",
          "Delhi India",
        ]
      : undefined,
    alternates: origin
      ? { canonical: origin + "/products/" + slug }
      : undefined,
    openGraph: {
      title: p?.name ?? "Airox Products",
      description: p?.short,
      type: "website",
      ...(origin ? { url: origin + "/products/" + slug } : {}),
    },
  };
}
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const Icon = p.icon;
  const faqs = [
    {
      question: "What information helps us recommend a configuration?",
      answer:
        "Share your required flow, operating pressure, inlet conditions and outlet air-quality target. For process cooling, include the cooling load and temperatures.",
    },
    {
      question: "Can you confirm if this equipment fits my existing system?",
      answer:
        "Contact Airox with your system details. The final selection should be checked against operating conditions and the selected model specifications.",
    },
    {
      question: "How can I request a product quote?",
      answer:
        "Use the request a quote link to email Airox, or call +91 84700 72102 to discuss your requirement.",
    },
  ];
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      description: p.short,
      category: "Industrial air treatment equipment",
      brand: { "@type": "Brand", name: "Airox Ultra Pneumatics" },
      ...(origin ? { url: origin + "/products/" + p.slug } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: origin ? origin + "/" : undefined,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: origin ? origin + "/products" : undefined,
        },
        { "@type": "ListItem", position: 3, name: p.name },
      ],
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
        }}
      />
      <div className="page-hero product-page-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={13} />
          <Link href="/products">Products</Link>
          <ChevronRight size={13} />
          <span>{p.name}</span>
        </div>
        <div className="page-hero-grid">
          <div data-reveal>
            <span className="eyebrow">
              <i /> PRODUCT / {p.number}
            </span>
            <h1>
              {p.name.split(" ").slice(0, -1).join(" ")}
              <br />
              <em>{p.name.split(" ").slice(-1)}</em>
            </h1>
            <p>{p.short}</p>
            <div className="product-actions">
              <a
                className="btn btn-blue"
                href={`mailto:Airoxultrapneumatics08@gmail.com?subject=${encodeURIComponent(`Enquiry: ${p.name}`)}`}>
                Request a quote <ArrowRight size={16} />
              </a>
              <a className="product-call" href="tel:+918470072102">
                <Phone size={15} /> Call Airox
              </a>
            </div>
          </div>
          <div className="product-hero-art" data-reveal>
            <div className="product-art-orbit orbit-one" />
            <div className="product-art-orbit orbit-two" />
            <Icon size={94} strokeWidth={0.8} />
            <span>AIROX / {p.number}</span>
          </div>
        </div>
      </div>
      <section className="product-detail section-pad">
        <div className="detail-copy" data-reveal>
          <span className="eyebrow dark">
            <i /> HOW IT WORKS
          </span>
          <h2>
            Understand the
            <br />
            <em>system behind it.</em>
          </h2>
          <p>{p.description}</p>
          <p className="source-note">
            Share your required flow, pressure and operating conditions with our
            team to confirm the right configuration.
          </p>
        </div>
        <div className="detail-side" data-reveal>
          <h3>Key considerations</h3>
          {p.features.map((x) => (
            <div className="detail-feature" key={x}>
              <span>
                <Check size={14} />
              </span>
              {x}
            </div>
          ))}
          <h3 className="applications-title">Common applications</h3>
          <div className="application-tags">
            {p.applications.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="product-faq section-pad">
        <div data-reveal>
          <span className="eyebrow dark">
            <i /> QUICK ANSWERS
          </span>
          <h2>
            Before you
            <br />
            <em>make a choice.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.question} data-reveal>
              <summary>
                {f.question}
                <span>+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="product-related section-pad">
        <div className="section-headline">
          <div>
            <span className="eyebrow dark">
              <i /> EXPLORE THE RANGE
            </span>
            <h2>
              Related <em>equipment.</em>
            </h2>
          </div>
        </div>
        <div className="related-grid">
          {products
            .filter((x) => x.slug !== p.slug)
            .slice(0, 3)
            .map((item) => (
              <Link href={`/products/${item.slug}`} key={item.slug}>
                <span>{item.number}</span>
                <b>{item.name}</b>
                <ArrowUpRight size={17} />
              </Link>
            ))}
        </div>
      </section>
      <section className="mini-cta">
        <div>
          <h2>Have a system in mind?</h2>
          <p>Share your requirements with our team.</p>
        </div>
        <Link className="btn btn-blue" href="/contact">
          Contact Airox <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
