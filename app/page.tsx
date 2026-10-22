import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Wind,
  MoveUpRight,
  ClipboardCheck,
  Settings2,
  CircleCheck,
  Headphones,
} from "lucide-react";
import { products, industries } from "./products-data";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid" />
        <div className="home-hero-copy" data-reveal>
          <span className="eyebrow">
            <i /> INDUSTRIAL AIR SYSTEMS · NEW DELHI
          </span>
          <h1>
            Make air
            <br />
            work <em>better.</em>
          </h1>
          <p>
            Dependable compressed-air treatment and industrial equipment,
            selected around the needs of your process.
          </p>
          <div className="hero-buttons">
            <Link
              className="btn btn-blue"
              href="/products/refrigeration-air-dryers">
              Explore our products <ArrowRight size={16} />
            </Link>
            <Link className="hero-link" href="/about">
              Get to know Airox <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="hero-proof">
            <ShieldCheck size={17} />
            <span>
              Practical equipment guidance
              <br />
              <b>Direct local support in Delhi</b>
            </span>
          </div>
        </div>
        <div className="hero-visual" data-parallax aria-hidden="true">
          <div className="hero-grid-art">
            <div className="hero-ring ring-one" />
            <div className="hero-ring ring-two" />
            <div className="hero-ring ring-three" />
            <div className="flow-symbol">
              <Wind size={88} />
              <span>
                AIR
                <br />
                IN MOTION
              </span>
            </div>
            <div className="hero-tag tag-a">01 / DRY</div>
            <div className="hero-tag tag-b">02 / FILTER</div>
            <div className="hero-tag tag-c">03 / CONTROL</div>
            <div className="orbit-point" />
          </div>
        </div>
        <a className="scroll-cue" href="#intro">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
        <div className="hero-coordinate">
          28° 37′ N &nbsp; 77° 04′ E <i /> DELHI, INDIA
        </div>
      </section>
      <section className="intro section-pad" id="intro">
        <div className="section-kicker" data-reveal>
          <span className="eyebrow dark">
            <i /> AIROX ULTRA PNEUMATICS
          </span>
          <h2>
            From compressed air
            <br />
            to <em>clear solutions.</em>
          </h2>
        </div>
        <div className="intro-text" data-reveal>
          <p>
            We help industrial teams navigate the equipment that makes
            compressed air useful: drying, filtration, condensate management,
            storage and process cooling.
          </p>
          <Link className="under-link" href="/about">
            A little about us <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="featured section-pad">
        <div className="section-headline" data-reveal>
          <div>
            <span className="eyebrow dark">
              <i /> EQUIPMENT RANGE
            </span>
            <h2>
              Made for the
              <br />
              <em>whole air system.</em>
            </h2>
          </div>
          <Link className="under-link" href="/products">
            View all equipment <ArrowRight size={15} />
          </Link>
        </div>
        <div className="feature-grid">
          {products.slice(0, 4).map((p) => (
            <Link
              className="feature-card"
              href={`/products/${p.slug}`}
              key={p.slug}
              data-reveal>
              <div className="feature-art">
                <span className="feature-num">{p.number} / AIROX SYSTEMS</span>
                <div className="feature-icon">
                  <p.icon size={43} strokeWidth={1.15} />
                </div>
                <span className="feature-cross">+</span>
              </div>
              <div className="feature-info">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.short}</p>
                </div>
                <span className="circle-link">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-band">
        <div className="band-graphic" data-parallax>
          <div className="band-circle">
            <Wind size={75} />
          </div>
          <span>
            CONTROL
            <br />
            YOUR FLOW
          </span>
        </div>
        <div className="band-copy" data-reveal>
          <span className="eyebrow">
            <i /> SPECIFICATION STARTS WITH THE APPLICATION
          </span>
          <h2>
            Right-fit equipment
            <br />
            begins with <em>good questions.</em>
          </h2>
          <p>
            Tell us what your system needs to do. We’ll help you identify the
            details worth considering before you select equipment.
          </p>
          <Link className="btn btn-outline" href="/contact">
            Talk through your requirements <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="selection-process section-pad">
        <div className="process-heading" data-reveal>
          <span className="eyebrow dark">
            <i /> A CLEAR WAY FORWARD
          </span>
          <h2>
            Good selection.
            <br />
            <em>Less guesswork.</em>
          </h2>
          <p>
            Start with your process. We’ll help you focus the equipment
            conversation on the details that matter.
          </p>
        </div>
        <div className="process-steps">
          {[
            [
              ClipboardCheck,
              "01",
              "Understand the need",
              "Your flow, pressure and operating conditions.",
            ],
            [
              Settings2,
              "02",
              "Review the system",
              "Where the equipment fits in your air line.",
            ],
            [
              CircleCheck,
              "03",
              "Confirm the choice",
              "Check model details before you order.",
            ],
            [
              Headphones,
              "04",
              "Talk with Airox",
              "Get support directly from our Delhi team.",
            ],
          ].map(([Icon, num, title, desc]) => {
            const StepIcon = Icon as typeof ClipboardCheck;
            return (
              <article className="process-step" key={num as string} data-reveal>
                <span className="step-icon">
                  <StepIcon size={22} />
                </span>
                <small>{num as string} / STEP</small>
                <h3>{title as string}</h3>
                <p>{desc as string}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="industries-strip section-pad">
        <div data-reveal>
          <span className="eyebrow dark">
            <i /> INDUSTRIES SERVED
          </span>
          <h2>
            Air that keeps
            <br />
            <em>work moving.</em>
          </h2>
          <p>
            Compressed air supports a wide range of production and utility
            needs. Start with your process, then find the equipment to support
            it.
          </p>
          <Link className="under-link" href="/industries">
            Explore industries <ArrowRight size={15} />
          </Link>
        </div>
        <div className="industry-chips" data-reveal>
          {industries.slice(0, 10).map((industry, i) => (
            <span key={industry}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {industry}
            </span>
          ))}
        </div>
      </section>
      <section className="closing-cta">
        <div className="cta-orbit" />
        <div data-reveal>
          <span className="eyebrow">
            <i /> LET’S START WITH YOUR APPLICATION
          </span>
          <h2>
            Need a clearer
            <br />
            <em>air solution?</em>
          </h2>
          <p>Connect with Airox Ultra Pneumatics in New Delhi.</p>
          <Link className="btn btn-white" href="/contact">
            Get in touch <MoveUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
