import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
// import { ServicesPage } from "./pages/ServicesPage.jsx";
// import { ServiceDetailPage } from "./pages/services/ServiceDetailPage.jsx";

// import { IndustriesPage } from "./pages/IndustriesPage.jsx";
// import { IndustryDetailPage } from "./pages/industries/IndustryDetailPage.jsx";

// import { WorkPage } from "./pages/WorkPage.jsx";
// import { CaseStudyPage } from "./pages/work/CaseStudyPage.jsx";

// import { AboutPage } from "./pages/AboutPage.jsx";
// import { InsightsPage } from "./pages/InsightsPage.jsx";
// import { ContactPage } from "./pages/ContactPage.jsx";
// import { NotFoundPage } from "./pages/NotFoundPage.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* <Route path="/services" element={<ServicesPage />} />
      <Route
        path="/services/:serviceSlug"
        element={<ServiceDetailPage />}
      />

      <Route path="/industries" element={<IndustriesPage />} />
      <Route
        path="/industries/:industrySlug"
        element={<IndustryDetailPage />}
      />

      <Route path="/work" element={<WorkPage />} />
      <Route
        path="/work/:projectSlug"
        element={<CaseStudyPage />}
      />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/insights" element={<InsightsPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export { Router };