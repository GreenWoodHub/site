import { Section, Container, Heading, Text, LinkButton } from "@/components/ui";

interface HeroProps {
  ctaText?: string;
  secondaryText?: string;
}

export function Hero({
  ctaText = "Plan Your Event",
  secondaryText = "Explore Services",
}: HeroProps) {
  return (
    <Section background="gradient" padding="xl">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading size="5xl" className="leading-tight">
            Unforgettable Experiences,{" "}
            <span className="text-primary-600">Perfectly Organized</span>
          </Heading>
          <Text size="lg" color="muted" className="mt-6 max-w-2xl mx-auto">
            We specialize in creating memorable team building activities,
            corporate gatherings, fun outings, and short trips that bring people
            together.
          </Text>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="#contact" size="lg">
              {ctaText}
            </LinkButton>
            <LinkButton href="#services" variant="outline" size="lg">
              {secondaryText}
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
