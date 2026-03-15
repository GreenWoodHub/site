import { Section, Container, Heading, LinkButton } from "@/components/ui";
import { MailIcon } from "@/assets/icons/icons";

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  return (
    <Section
      id="contact"
      padding="xl"
      className="bg-gradient-to-br from-primary-600 to-primary-800"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Heading size="3xl" className="text-white">
            Ready to Plan Your Next Event?
          </Heading>
          <p className="mt-4 text-lg text-primary-100">
            Let's create an unforgettable experience for your team. Contact us
            today for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href={`mailto:${email}`} size="lg" variant="white">
              <MailIcon className="w-5 h-5" />
              {email}
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
