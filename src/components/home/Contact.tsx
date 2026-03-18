import { Section, Container, Heading, LinkButton } from "@/components/ui";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/assets/icons/icons";

interface ContactProps {
  email: string;
  phones: string[];
}

export function Contact({ email, phones }: ContactProps) {
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <LinkButton href={`mailto:${email}`} size="lg" variant="white">
              <MailIcon className="w-5 h-5 flex-shrink-0" />
              <span>Contact via email</span>
            </LinkButton>
            {phones.map((phone) => (
              <LinkButton
                key={phone}
                href={`tel:${phone}`}
                size="lg"
                variant="white"
              >
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span>Contact via phone</span>
              </LinkButton>
            ))}
            <LinkButton href={`https://wa.me/${phones[0]}/?text=Hello, I'm interested in your services.`} size="lg" variant="white">
              <WhatsAppIcon fill="currentColor" className="w-5 h-5 flex-shrink-0" />
              <span>Contact via whatsapp</span>
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
