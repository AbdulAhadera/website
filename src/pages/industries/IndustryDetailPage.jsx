import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { industriesData } from "../../data/industriesData.js";
import { servicesData } from "../../data/servicesData.js";
import { industryVisuals } from "../../data/industryVisuals.js";

import { IndustryDetailHero } from "../../components/industries/detail/IndustryDetailHero.jsx";
import { IndustryStory } from "../../components/industries/detail/IndustryStory.jsx";
import { IndustrySolutions } from "../../components/industries/detail/IndustrySolutions.jsx";
import { IndustryDetailCTA } from "../../components/industries/detail/IndustryDetailCTA.jsx";
import { IndustriesFAQ } from "../../components/industries/IndustriesFAQ.jsx";

const serviceMap = Object.fromEntries(
  servicesData.map((service) => [service.id, service]),
);

const IndustryDetailPage = () => {
  const { industrySlug } = useParams();

  const industry = industriesData.find((item) => item.slug === industrySlug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [industrySlug]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const image = industryVisuals[industry.slug];

  return (
    <>
      <IndustryDetailHero industry={industry} image={image} />

      <IndustryStory industry={industry} />

      <IndustrySolutions industry={industry} serviceMap={serviceMap} />

      <IndustriesFAQ industry={industry} />

      <IndustryDetailCTA industry={industry} />
    </>
  );
};

export { IndustryDetailPage };
