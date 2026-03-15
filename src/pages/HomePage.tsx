import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";

interface HomePageProps {
  email: string;
}

export function HomePage({ email }: HomePageProps) {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Contact email={email} />
    </>
  );
}
