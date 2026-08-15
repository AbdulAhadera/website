import { insightsData } from "../data/insightsData.js";

import { InsightsHero } from "../components/insights/InsightsHero.jsx";
import { FeaturedInsight } from "../components/insights/FeaturedInsights.jsx";

import { InsightsFeed } from "../components/insights/InsightsFeed.jsx";
import { InsightsCTA } from "../components/insights/InsightsCTA.jsx";

const InsightsPage = () => {
  const orderedInsights = [...insightsData].sort(
    (a, b) => (a.homepageOrder || 999) - (b.homepageOrder || 999),
  );

  const featuredInsight =
    orderedInsights.find((insight) => insight.featured) ||
    orderedInsights[0];

  return (
    <main>
      <InsightsHero />

      <FeaturedInsight insight={featuredInsight} />

      <InsightsFeed excludeSlug={featuredInsight?.slug} />

      <InsightsCTA />
    </main>
  );
};

export { InsightsPage };