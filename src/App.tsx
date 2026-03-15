import appConfig from "@/config/app.config";
import { Layout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";

function App() {
  const socials = Object.entries(appConfig.contact.social).map(
    ([name, url]) => ({
      name,
      url,
      icon: name as "instagram" | "facebook" | "twitter" | "linkedin",
    }),
  );

  return (
    <Layout
      appName={appConfig.app.name}
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
