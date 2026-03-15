import { MailIcon, PhoneIcon } from "@/assets/icons/icons";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  name: string;
  description: string;
  links: FooterLink[];
  email: string;
  phones: string[];
}

export function Footer({
  name,
  description,
  links,
  email,
  phones,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-display text-2xl font-bold text-white">
              {name}
            </span>
            <p className="mt-4 text-secondary-400">{description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-400">
              <li className="flex items-center gap-2">
                <MailIcon className="w-5 h-5" />
                {email}
              </li>
              {phones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  {phone}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-800 text-center text-secondary-400">
          <p>
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
