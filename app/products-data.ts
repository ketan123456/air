import {
  Gauge,
  Wind,
  Droplets,
  Container,
  Waves,
  Atom,
  type LucideIcon,
} from "lucide-react";
export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  applications: string[];
  features: string[];
  icon: LucideIcon;
  number: string;
};
export const products: Product[] = [
  {
    slug: "refrigeration-air-dryers",
    name: "Refrigeration air dryers",
    short: "Efficient moisture removal for dependable compressed-air systems.",
    number: "01",
    icon: Gauge,
    description:
      "Refrigerated dryers cool compressed air so water vapour condenses and can be separated and drained. The reference range highlights an air-to-air and air-to-refrigerant heat-exchanger arrangement, with automatic condensate removal.",
    applications: [
      "General plant compressed air",
      "Utility gas drying",
      "Downstream moisture control",
    ],
    features: [
      "Pre-cools incoming air against outgoing dry air",
      "Condensate separation and automatic drainage",
      "An air-to-air and refrigerant heat-exchanger design",
    ],
  },
  {
    slug: "heatless-desiccant-dryers",
    name: "Heatless desiccant dryers",
    short: "Desiccant drying for applications that need a lower dew point.",
    number: "02",
    icon: Wind,
    description:
      "Heatless desiccant dryers alternate between drying and regeneration. One tower dries the incoming air while the other depressurizes and regenerates its desiccant bed, then the towers switch roles.",
    applications: [
      "Low-dew-point compressed air",
      "Sensitive production processes",
      "Instrument and control air",
    ],
    features: [
      "Twin-tower drying and regeneration cycle",
      "Activated alumina desiccant; molecular sieve may be specified",
      "Dew point and performance should be confirmed for the selected model",
    ],
  },
  {
    slug: "air-filters-and-drains",
    name: "Air filters & automatic drains",
    short: "Help remove contaminants and condensate from the air system.",
    number: "03",
    icon: Droplets,
    description:
      "Compressed-air filters help separate moisture, oil and particulate matter at selected points in the system. Automatic drains remove collected condensate without relying on manual draining.",
    applications: [
      "Compressor-room air treatment",
      "Dryer pre-filtration and after-filtration",
      "Condensate management",
    ],
    features: [
      "Filter stages can be selected for the application",
      "Automatic condensate discharge options",
      "Helps protect downstream equipment",
    ],
  },
  {
    slug: "air-receiver-tanks",
    name: "Air receiver tanks",
    short: "A buffer that helps smooth demand and support system control.",
    number: "04",
    icon: Container,
    description:
      "An air receiver stores compressed air to help meet short-term demand peaks. In a system it can also dampen compressor pulsations, support pressure stability and provide a place for some moisture and particles to separate.",
    applications: [
      "Compressor discharge buffering",
      "Intermittent high-demand points",
      "Compressed-air system stabilization",
    ],
    features: [
      "Primary receiver near the compressor",
      "Secondary receiver near larger intermittent loads",
      "Sizing depends on compressor capacity and demand profile",
    ],
  },
  {
    slug: "water-chillers",
    name: "Water chillers",
    short: "Industrial process cooling configurations for varied applications.",
    number: "05",
    icon: Waves,
    description:
      "Industrial chillers remove heat from process water using a refrigeration cycle. Systems can be centralized and connected to multiple machines, or decentralized near individual equipment.",
    applications: [
      "Industrial process cooling",
      "Machine and production-line cooling",
      "Centralized or point-of-use systems",
    ],
    features: [
      "Air-cooled and other configurations may be considered",
      "In-built pump is listed on the reference chiller page",
      "Capacity and configuration should match the process load",
    ],
  },
  {
    slug: "heat-exchangers",
    name: "Heat exchangers",
    short:
      "Transfer heat between fluids to support process cooling or heating.",
    number: "06",
    icon: Gauge,
    description:
      "Heat exchangers move heat between two fluids through conductive plates or tubes. Air-cooled fin-fan exchangers can be useful where cooling water is unavailable or unsuitable for the required outlet temperature.",
    applications: [
      "Process heating and cooling",
      "Air-cooled systems",
      "Industrial utility applications",
    ],
    features: [
      "Robust, corrosion-resistant construction options",
      "Air-cooled fin-fan configurations",
      "Selection depends on fluids, flow and temperature range",
    ],
  },
  {
    slug: "nitrogen-generation",
    name: "Nitrogen generation",
    short: "On-site gas supply options for processes with nitrogen demand.",
    number: "07",
    icon: Atom,
    description:
      "Nitrogen generation equipment can produce nitrogen at the point of use from a compressed-air supply. System selection depends on required purity, flow, pressure and operating pattern.",
    applications: [
      "Manufacturing processes",
      "Packaging and inerting",
      "Utility gas supply",
    ],
    features: [
      "Purity and flow selected for the process",
      "Designed around existing compressed-air utilities",
      "Application review recommended before specification",
    ],
  },
];
export const industries = [
  "Textiles",
  "Automotive",
  "Foundry",
  "Medical",
  "Pet blowing",
  "Food & beverages",
  "Powder coating",
  "Printing",
  "Laser cutting",
  "CNC machining",
  "Packaging",
  "Footwear",
  "Cosmetics",
];
