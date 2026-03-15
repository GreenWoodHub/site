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
    <section id="services" className="py-16 sm:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            Comprehensive event solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-secondary-100"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
