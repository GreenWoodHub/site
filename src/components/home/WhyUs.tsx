import { Section, Container, Heading, Text, Badge } from "@/components/ui";
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
    <Section id="why-us" background="white" padding="xl">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="primary">Why Choose Us</Badge>
          <Heading size="3xl" className="mt-4">
            The Greenwoodhub Advantage
          </Heading>
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
                  <Heading as="h3" size="xl">
                    {feature.title}
                  </Heading>
                  <Text color="default" className="mt-2">
                    {feature.description}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
