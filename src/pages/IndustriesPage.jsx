import { IndustriesHero } from "../components/industries/IndustriesHero.jsx";
import { IndustriesDirectory } from "../components/industries/IndustriesDirectory.jsx";
import { ServiceCTA } from "../components/services/ServiceCTA.jsx";
import { IndustriesFAQ } from "../components/industries/IndustriesFAQ.jsx";

const IndustriesPage = () => {
  return (
    <>
      <IndustriesHero />
      <IndustriesDirectory />
      <IndustriesFAQ />
      <ServiceCTA />
    </>
  );
};

export { IndustriesPage };
