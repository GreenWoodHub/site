import { Hero, Services, WhyUs, Contact } from "@/components/home";
import appConfig from "@/config/app.config";

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Contact email={appConfig.contact.email} phones={appConfig.contact.phones} />
    </>
  );
}
