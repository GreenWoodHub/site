import { Hero } from "@/components/home/Hero";
// import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { Contact } from "@/components/home/Contact";
import appConfig from "@/config/app.config";

export function HomePage() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <WhyUs />
      <Services />
      <Contact email={appConfig.contact.email} />
    </>
  );
}
