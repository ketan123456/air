import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Activity, CarFront, Factory, HeartPulse, Package, Printer, Scissors, Shirt, Sparkles, Utensils, Wind, Wrench, Paintbrush, Milk, type LucideIcon } from 'lucide-react';

export const metadata = {
  title: 'Industries served',
  description: 'Explore industries served by Airox Ultra Pneumatics with compressed air treatment and process cooling equipment for production applications.',
};

const sectors: { title: string; tag: string; icon: LucideIcon; description: string; number: string; tone: string }[] = [
  { title: 'Textiles', tag: 'FABRICATION', icon: Shirt, description: 'Compressed air utilities for spinning, weaving, finishing and plant operations.', number: '01', tone: 'textile' },
  { title: 'Automotive', tag: 'MOBILITY', icon: CarFront, description: 'Air treatment and cooling support for workshops, assembly and component production.', number: '02', tone: 'auto' },
  { title: 'Foundry', tag: 'METALWORK', icon: Factory, description: 'Equipment options for demanding production environments and pneumatic tools.', number: '03', tone: 'foundry' },
  { title: 'Medical', tag: 'HEALTHCARE', icon: HeartPulse, description: 'Discuss air quality, filtration and system requirements for sensitive applications.', number: '04', tone: 'medical' },
  { title: 'Pet blowing', tag: 'PACKAGING', icon: Wind, description: 'Compressed air system components for bottle manufacturing and packaging lines.', number: '05', tone: 'pet' },
  { title: 'Food & beverages', tag: 'PROCESSING', icon: Utensils, description: 'Air treatment and process cooling options for food and beverage operations.', number: '06', tone: 'food' },
  { title: 'Powder coating', tag: 'FINISHING', icon: Paintbrush, description: 'Dry, filtered air can support consistent finishing and coating processes.', number: '07', tone: 'coating' },
  { title: 'Printing', tag: 'GRAPHICS', icon: Printer, description: 'Pneumatic equipment and air preparation for presses and finishing lines.', number: '08', tone: 'print' },
  { title: 'Laser cutting', tag: 'PRECISION', icon: Scissors, description: 'Review pressure, flow and air quality needs for laser cutting applications.', number: '09', tone: 'laser' },
  { title: 'CNC machining', tag: 'ENGINEERING', icon: Wrench, description: 'Air utilities and thermal management for machining and production systems.', number: '10', tone: 'cnc' },
  { title: 'Packaging', tag: 'AUTOMATION', icon: Package, description: 'Air system components for automated packing, filling and handling processes.', number: '11', tone: 'packaging' },
  { title: 'Footwear', tag: 'ASSEMBLY', icon: Activity, description: 'Compressed air solutions for manufacturing, assembly and finishing operations.', number: '12', tone: 'footwear' },
  { title: 'Cosmetics', tag: 'PERSONAL CARE', icon: Sparkles, description: 'Explore clean, dependable air and cooling requirements for cosmetics production.', number: '13', tone: 'cosmetics' },
  { title: 'Dairy', tag: 'FOOD PROCESSING', icon: Milk, description: 'Air treatment and process cooling equipment options for dairy facilities.', number: '14', tone: 'dairy' },
];

export default function IndustriesPage() {
  return <main className="industries-page">
    <section className="industries-hero">
      <div className="industries-hero-glow" aria-hidden="true" />
      <div className="industries-hero-top">
        <div className="industry-kicker"><i /> AIROX / INDUSTRIES</div>
        <span className="industry-hero-index">APPLICATIONS <b>01—14</b></span>
      </div>
      <div className="industries-hero-content">
        <div className="industries-title" data-reveal>
          <span className="eyebrow"><i /> BUILT AROUND YOUR PROCESS</span>
          <h1>Air for<br /><em>what’s next.</em></h1>
        </div>
        <div className="industries-lede" data-reveal>
          <span className="industries-lede-line" />
          <p>Every industry puts compressed air to work differently. Start with your process, then find equipment that fits.</p>
          <Link className="industries-scroll" href="#sectors">EXPLORE APPLICATIONS <ArrowDown size={14} /></Link>
        </div>
      </div>
      <div className="industries-hero-foot"><span>COMPRESSED AIR · PROCESS COOLING</span><span>NEW DELHI, INDIA <i /></span></div>
    </section>

    <section className="industry-showcase" id="sectors">
      <div className="industry-section-head" data-reveal>
        <div><span className="eyebrow dark"><i /> INDUSTRIES WE SUPPORT</span><h2>Different worlds.<br /><em>Connected by air.</em></h2></div>
        <p>From precision work to high-volume production, our team can help you discuss air treatment and cooling requirements for your application.</p>
      </div>
      <div className="industry-cards">
        {sectors.map((sector, i) => {
          const Icon = sector.icon;
          return <article className={`industry-card industry-${sector.tone}`} key={sector.number} data-reveal style={{ ['--card-index' as string]: i }}>
            <div className="industry-card-top"><span>{sector.number}</span><span className="industry-card-tag">{sector.tag}</span><ArrowUpRight size={16} /></div>
            <div className="industry-icon-wrap"><div className="industry-icon-orbit" /><Icon size={30} strokeWidth={1.5} /></div>
            <div className="industry-card-copy"><h3>{sector.title}</h3><p>{sector.description}</p></div>
            <div className="industry-card-bottom"><span>APPLICATION / {sector.number}</span><span className="industry-card-dash" /></div>
          </article>;
        })}
      </div>
    </section>

    <section className="industry-cta" data-reveal>
      <div className="industry-cta-mark" aria-hidden="true"><span /><span /><span /><Wind size={37} /></div>
      <div className="industry-cta-copy"><span className="eyebrow"><i /> START WITH THE REQUIREMENT</span><h2>Your process<br /><em>sets the spec.</em></h2><p>Tell us about your application, operating conditions and priorities. We’ll help you identify the right equipment to discuss.</p></div>
      <Link className="btn btn-blue" href="/contact">Talk to our team <ArrowRight size={16} /></Link>
    </section>
  </main>;
}
