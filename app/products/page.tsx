import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { products } from "../products-data";
export const metadata = {
  title: "Products",
  description:
    "Explore air dryers, compressed-air filters, automatic drains, receiver tanks, water chillers, heat exchangers and nitrogen generation equipment.",
  keywords: [
    "air dryers",
    "compressed air filters",
    "air receivers",
    "water chillers",
    "industrial air treatment",
  ],
};
export default function ProductsPage() {
  return (
    <>
      <div className="page-hero listing-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={13} />
          <span>Products</span>
        </div>
        <div className="listing-intro" data-reveal>
          <span className="eyebrow">
            <i /> AIROX EQUIPMENT RANGE
          </span>
          <h1>
            Equipment for
            <br />
            <em>better air.</em>
          </h1>
          <p>
            Explore compressed-air treatment and process equipment. Each
            selection depends on your flow, pressure, air quality and operating
            conditions.
          </p>
        </div>
        <div className="listing-stamp">
          DRY / FILTER
          <br />
          STORE / COOL
          <br />
          <b>01—07</b>
        </div>
      </div>
      <section className="catalog-grid-section section-pad">
        <div className="catalog-grid">
          {products.map((p) => (
            <Link
              className="catalog-card"
              href={`/products/${p.slug}`}
              key={p.slug}
              data-reveal>
              <div className="catalog-visual">
                <span>{p.number} / EQUIPMENT</span>
                <p.icon size={54} strokeWidth={1} />
                <i />
              </div>
              <div className="catalog-copy">
                <h2>{p.name}</h2>
                <p>{p.short}</p>
                <div>
                  Explore product <ArrowUpRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
