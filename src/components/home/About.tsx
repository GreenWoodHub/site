import {
  Section,
  Container,
  Heading,
  Text,
  Badge,
  Card,
} from "@/components/ui";
import { MapPinIcon } from "@/assets/icons/icons";

interface AboutProps {
  stats?: { value: string; label: string }[];
}

export function About({
  stats = [
    { value: "50+", label: "Events Organized" },
    { value: "1000+", label: "Happy Participants" },
    { value: "98%", label: "Satisfaction Rate" },
  ],
}: AboutProps) {
  return (
    <Section id="about" background="white" padding="xl">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="primary">About Us</Badge>
            <Heading size="3xl" className="mt-4">
              Creating Moments That Matter
            </Heading>
            <Text size="lg" color="default" className="mt-6 leading-relaxed">
              <span className="font-semibold text-secondary-800">
                Greenwoodhub
              </span>{" "}
              is your trusted partner for organizing exceptional team building
              activities and outdoor experiences. We believe that great teams
              are built through shared adventures and meaningful connections.
            </Text>
            <Text size="lg" color="default" className="mt-4 leading-relaxed">
              From exciting team challenges to relaxing getaways, we handle
              every detail so you can focus on what matters most — building
              stronger relationships and creating lasting memories.
            </Text>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <Text size="sm" color="muted" className="mt-1">
                    {stat.label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <MapPinIcon className="w-32 h-32 text-primary-400" />
            </div>
            <Card
              className="absolute -bottom-4 -right-4 max-w-xs"
              padding="md"
              variant="elevated"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <Text weight="semibold">Professional Planning</Text>
                  <Text size="sm" color="muted">
                    Every detail covered
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
