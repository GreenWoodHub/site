import appConfig from "@/config/app.config";
import { Layout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";

function App() {
  return (
    <Layout
      appName={appConfig.app.name}
      footerDescription="Creating memorable team building experiences and outdoor adventures that bring people together."
      footerEmail={appConfig.contact.email}
      footerPhones={appConfig.contact.phones}
    >
      <HomePage email={appConfig.contact.email} />
    </Layout>
  );
}

export default App;
