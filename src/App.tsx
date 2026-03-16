import appConfig from "@/config/app.config";
import { Layout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";

function App() {
  const socials = Object.entries(appConfig.contact.socials).map(
    ([name, url]) => ({
      name,
      url,
      icon: name as "instagram" | "facebook" | "whatsapp",
    }),
  );

  return (
    <Layout
      appName={appConfig.name}
      navbarLinks={appConfig.navbarLinks}
      footerLinks={appConfig.footerLinks}
      footerDescription={appConfig.footerDescription}
      footerEmail={appConfig.contact.email}
      footerPhones={appConfig.contact.phones}
      footerLocation={appConfig.contact.location}
      footerSocials={socials}
    >
      <HomePage />
    </Layout>
  );
}

export default App;
