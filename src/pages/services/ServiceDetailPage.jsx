import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { servicesData } from "../../data/servicesData.js";
import { serviceDetailVisuals } from "../../data/serviceDetailVisuals.js";

import { ServiceDetailHero } from "../../components/services/detail/ServiceDetailHero.jsx";
import { ServiceStory } from "../../components/services/detail/ServiceStory.jsx";
import { ServiceCapabilities } from "../../components/services/detail/ServiceCapabilities.jsx";
import { ServiceDetailFAQ } from "../../components/services/detail/ServiceDetailFAQ.jsx";
import { ServiceDetailCTA } from "../../components/services/detail/ServiceDetailCTA.jsx";

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === serviceSlug,
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [serviceSlug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const visuals =
    serviceDetailVisuals[service.slug] ??
    serviceDetailVisuals["website-design-development"];

  return (
    <>
      <ServiceDetailHero
        service={service}
        image={visuals.hero}
      />

      <ServiceStory service={service} />

      <ServiceCapabilities
        service={service}
        image={visuals.secondary}
      />

      <ServiceDetailFAQ service={service} />

      <ServiceDetailCTA service={service} />
    </>
  );
};

export { ServiceDetailPage };