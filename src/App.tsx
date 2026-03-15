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
      footerDescription="Creating memorable team building experiences and outdoor adventures that bring people together."
      footerEmail={appConfig.contact.email}
      footerPhones={appConfig.contact.phones}
      footerSocials={socials}
    >
      <HomePage />
    </Layout>
  );
}

export default App;
