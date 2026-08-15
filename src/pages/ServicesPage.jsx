import { ServiceHero } from "../components/services/ServiceHero.jsx";
import { ServiceDirectory } from "../components/services/ServiceDirectory.jsx";
import { ServiceBlend } from "../components/services/ServiceBlend.jsx";
import { ServiceProcess } from "../components/services/ServiceProcess.jsx";
import { ServiceFAQ } from "../components/services/ServiceFAQ.jsx";
import { ServiceCTA } from "../components/services/ServiceCTA.jsx";

const ServicesPage = () => {
  return (
    <>
      <ServiceHero />
      <ServiceDirectory />
      <ServiceBlend />
      <ServiceProcess />
      <ServiceFAQ />
      <ServiceCTA />
    </>
  );
};

export { ServicesPage };