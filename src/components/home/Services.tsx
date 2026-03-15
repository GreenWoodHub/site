import {
  Section,
  Container,
  Heading,
  Text,
  Badge,
  Card,
} from "@/components/ui";
import {
  UsersIcon,
  UserGroupIcon,
  EmojiHappyIcon,
  GlobeIcon,
} from "@/assets/icons/icons";

export interface Service {
  icon: "team" | "gatherings" | "outings" | "trips";
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "team",
    title: "Team Building",
    description:
      "Engaging activities designed to strengthen collaboration, trust, and communication within your team.",
  },
  {
    icon: "gatherings",
    title: "Gatherings",
    description:
      "Corporate events, celebrations, and social gatherings that bring people together in memorable ways.",
  },
  {
    icon: "outings",
    title: "Fun Outings",
    description:
      "Exciting day trips and outdoor adventures that combine fun, relaxation, and team bonding.",
  },
  {
    icon: "trips",
    title: "Short Trips",
    description:
      "Carefully planned short getaways and retreats that offer a perfect escape from the daily routine.",
  },
];

const iconMap = {
  team: UsersIcon,
  gatherings: UserGroupIcon,
  outings: EmojiHappyIcon,
  trips: GlobeIcon,
};

export function Services() {
  return (
    <Section id="services" background="secondary" padding="xl">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="primary">Our Services</Badge>
          <Heading size="3xl" className="mt-4">
            What We Offer
          </Heading>
          <Text size="lg" color="muted" className="mt-4">
            Comprehensive event solutions tailored to your needs
          </Text>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.title} hover padding="lg">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <Heading as="h3" size="xl">
                  {service.title}
                </Heading>
                <Text color="default" className="mt-2">
                  {service.description}
                </Text>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
