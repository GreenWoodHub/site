import { MailIcon } from "@/assets/icons/icons";

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-primary-600 to-primary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Ready to Plan Your Next Event?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Let's create an unforgettable experience for your team. Contact us
            today for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all hover:shadow-xl"
            >
              <MailIcon className="w-5 h-5 mr-2" />
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
