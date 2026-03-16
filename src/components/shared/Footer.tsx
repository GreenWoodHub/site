import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  WhatsAppIcon,
  TelegramIcon,
  MeetupIcon,
} from "@/assets/icons/icons";
import { NavLink } from "@/components/ui/NavLink";

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon:
    | "instagram"
    | "facebook"
    | "twitter"
    | "linkedin"
    | "whatsapp"
    | "telegram"
    | "meetup";
}

export interface FooterProps {
  name: string;
  description: string;
  links: FooterLink[];
  email: string;
  phones: string[];
  location: string;
  socials?: SocialLink[];
}

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  meetup: MeetupIcon,
};

export function Footer({
  name,
  description,
  links,
  email,
  phones,
  location,
  socials = [],
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-white hover:text-primary-400 transition-colors">
                {name}
              </span>
            </a>
            <p className="mt-4 text-slate-400">{description}</p>
            {socials.length > 0 && (
              <div className="flex gap-4 mt-4">
                {socials.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-primary-400 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                <span>{location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <MailIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
              {phones.map((phone, index) => (
                <li key={index}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
