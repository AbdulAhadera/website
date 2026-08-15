import { AboutHero } from "../components/about/AboutHero.jsx";
import { AboutPrinciples } from "../components/about/AboutPrinciples.jsx";
import { AboutSystem } from "../components/about/AboutSystem.jsx";
import { AboutCTA } from "../components/about/AboutCTA.jsx";

const AboutPage = () => {
  return (
    <>
      <AboutHero />

      <AboutPrinciples />

      <AboutSystem />

      <div id="about-contact">
        <AboutCTA />
      </div>
    </>
  );
};

export { AboutPage };