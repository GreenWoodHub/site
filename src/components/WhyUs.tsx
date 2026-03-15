import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  StarIcon,
  SupportIcon,
} from "@/assets/icons/icons";

export interface Feature {
  icon: "shield" | "pricing" | "tailored" | "planning" | "quality" | "support";
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "shield",
    title: "Professional Expertise",
    description:
      "Years of experience in organizing events of all sizes with meticulous attention to detail.",
  },
  {
    icon: "pricing",
    title: "Competitive Pricing",
    description:
      "Transparent pricing with flexible packages that fit your budget without compromising quality.",
  },
  {
    icon: "tailored",
    title: "Tailored Solutions",
    description:
      "Every event is customized to meet your specific goals, preferences, and group dynamics.",
  },
  {
    icon: "planning",
    title: "Full Planning Support",
    description:
      "We handle logistics, bookings, and coordination so you can focus on enjoying the experience.",
  },
  {
    icon: "quality",
    title: "Quality Assured",
    description:
      "Trusted by hundreds of clients with a proven track record of successful events.",
  },
  {
    icon: "support",
    title: "Dedicated Support",
    description:
      "Personal assistance from planning to execution, ensuring a seamless experience.",
  },
];

const iconMap = {
  shield: ShieldCheckIcon,
  pricing: CurrencyDollarIcon,
  tailored: CheckCircleIcon,
  planning: ClipboardListIcon,
  quality: StarIcon,
  support: SupportIcon,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900">
            The Greenwoodhub Advantage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
