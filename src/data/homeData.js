import { servicesData } from "./servicesData.js";
import { industriesData } from "./industriesData.js";

const getService = (id) => {
  return servicesData.find((service) => service.id === id);
};

const getIndustry = (id) => {
  return industriesData.find((industry) => industry.id === id);
};

const getIndustrySolution = (industryId, solutionId) => {
  const industry = getIndustry(industryId);

  return industry?.solutions.find((solution) => solution.id === solutionId);
};

const homepageServices = [
  {
    serviceId: "website-design-development",
    visualWeight: "elevated",
    homepageDescription:
      "Websites designed to look sharp, load fast, and turn attention into action.",
  },
  {
    serviceId: "branding-creative-design",
    visualWeight: "standard",
    homepageDescription:
      "Identity, visual systems, and creative work that make your business recognizable.",
  },
  {
    serviceId: "digital-marketing-growth",
    visualWeight: "standard",
    homepageDescription:
      "SEO, advertising, campaigns, and growth systems built to bring in customers.",
  },
  {
    serviceId: "social-media-management",
    visualWeight: "standard",
    homepageDescription:
      "Content, strategy, and management that keep your brand active and relevant.",
  },
  {
    serviceId: "ecommerce-solutions",
    visualWeight: "standard",
    homepageDescription:
      "Online stores, shopping experiences, and systems built around selling more effectively.",
  },
  {
    serviceId: "software-app-development",
    visualWeight: "elevated",
    homepageDescription:
      "Custom apps, platforms, portals, and business systems built around how you work.",
  },
  {
    serviceId: "ai-automation-solutions",
    visualWeight: "elevated",
    homepageDescription:
      "AI assistants, automation, and practical systems that take repetitive work off your team.",
  },
]
  .map((item) => {
    const service = getService(item.serviceId);

    return {
      ...item,
      id: service?.id,
      slug: service?.slug,
      title: service?.title,
      navTitle: service?.navTitle,
      accent: service?.accent,
      href: `/services/${service?.slug}`,
    };
  })
  .filter((item) => item.id);

const outcomes = [
  {
    id: "get-more-customers",
    title: "Get More Customers",
    description:
      "Bring in better traffic, stronger leads, and more opportunities to sell.",
    serviceIds: [
      "digital-marketing-growth",
      "social-media-management",
      "website-design-development",
    ],
  },
  {
    id: "sell-online",
    title: "Sell Online",
    description:
      "Launch or improve an online store built around a smoother buying experience.",
    serviceIds: [
      "ecommerce-solutions",
      "website-design-development",
      "digital-marketing-growth",
    ],
  },
  {
    id: "launch-something-new",
    title: "Launch Something New",
    description:
      "Take a new business, product, platform, or idea from concept to market.",
    serviceIds: [
      "software-app-development",
      "branding-creative-design",
      "website-design-development",
    ],
  },
  {
    id: "build-app-platform",
    title: "Build an App or Platform",
    description:
      "Create custom software around your users, workflows, and business model.",
    serviceIds: [
      "software-app-development",
      "branding-creative-design",
    ],
  },
  {
    id: "improve-brand",
    title: "Improve My Brand",
    description:
      "Build a clearer identity and digital presence that reflects where your business is going.",
    serviceIds: [
      "branding-creative-design",
      "website-design-development",
      "social-media-management",
    ],
  },
  {
    id: "run-business-better",
    title: "Run My Business Better",
    description:
      "Replace scattered processes with connected tools, dashboards, and automation.",
    serviceIds: [
      "software-app-development",
      "ai-automation-solutions",
    ],
  },
  {
    id: "bring-ai-business",
    title: "Bring AI Into My Business",
    description:
      "Use AI where it can genuinely improve customer experience or operations.",
    serviceIds: [
      "ai-automation-solutions",
      "software-app-development",
    ],
  },
];

const homepageIndustries = [
  {
    industryId: "real-estate",
    solutionIds: [
      "real-estate-crm",
      "property-management-system",
      "lead-management-routing",
      "property-portals",
      "viewing-booking-system",
    ],
  },
  {
    industryId: "healthcare",
    solutionIds: [
      "patient-management-system",
      "healthcare-booking",
      "ai-receptionist-healthcare",
      "patient-portals",
      "healthcare-marketing",
    ],
  },
  {
    industryId: "ecommerce-retail",
    solutionIds: [
      "online-store",
      "inventory-order-management",
      "loyalty-retention",
      "ecommerce-growth",
      "ai-commerce-support",
    ],
  },
  {
    industryId: "saas-startups",
    solutionIds: [
      "saas-mvp",
      "startup-branding",
      "product-onboarding",
      "subscription-billing",
      "startup-growth",
    ],
  },
  {
    industryId: "logistics-supply-chain",
    solutionIds: [
      "fleet-management",
      "shipment-tracking",
      "dispatch-system",
      "customer-logistics-portal",
      "status-automation",
    ],
  },
  {
    industryId: "professional-services",
    solutionIds: [
      "professional-crm",
      "client-project-portal",
      "booking-intake",
      "professional-billing",
      "professional-lead-gen",
    ],
  },
]
  .map((item) => {
    const industry = getIndustry(item.industryId);

    if (!industry) {
      return null;
    }

    return {
      id: industry.id,
      slug: industry.slug,
      title: industry.title,
      accent: industry.accent,
      description: industry.shortDescription,
      href: `/industries/${industry.slug}`,
      image: null,

      solutions: item.solutionIds
        .map((solutionId) =>
          getIndustrySolution(item.industryId, solutionId),
        )
        .filter(Boolean),
    };
  })
  .filter(Boolean);

const homeData = {
  sectionOrder: [
    "hero",
    "services",
    "featuredWork",
    "aiShowcase",
    "outcomes",
    "industries",
    "whyZapmind",
    "process",
    "insights",
    "finalCta",
  ],

  hero: {
    eyebrow: "Full-Service Digital Agency",

    headline: "We Build the Digital Side of Your Business",

    supportingCopy:
      "Websites, apps, branding, marketing, e-commerce and AI — one team, connected end to end.",

    primaryCta: {
      label: "Start a Project",
      href: "/contact",
    },

    secondaryCta: {
      label: "See Our Work",
      href: "/work",
    },

    visual: {
      type: "layered-interface",
      theme: "dark",
      showGrid: true,
      showAiInterface: true,

      layers: [
        {
          id: "commerce",
          type: "ecommerce",
          speed: 0.15,
        },
        {
          id: "software",
          type: "dashboard",
          speed: 0.25,
        },
        {
          id: "ai",
          type: "ai-assistant",
          speed: 0.35,
        },
      ],
    },

    motion: {
      enabled: true,
      gridSpeed: 0.3,
      fadeHeadlineOnExit: true,
      disableOnMobile: true,
    },
  },

  services: {
    eyebrow: "What We Do",
    headline: "Everything You Need, Under One Roof",

    supportingCopy:
      "From your first impression to the systems behind the business, we connect the pieces that move you forward.",

    items: homepageServices,

    cta: {
      label: "Explore All Services",
      href: "/services",
    },

    layout: {
      type: "editorial-list",
      columns: 2,
      useCards: false,
      showNumbers: true,
      showVisual: true,
      imagePosition: "right",
    },

    motion: {
      lineReveal: true,
      staggerItems: true,
      imageParallaxSpeed: 0.15,
      hoverImageChange: true,
      disableHoverImageOnMobile: true,
    },
  },

  featuredWork: {
    eyebrow: "Selected Work",
    headline: "The Work",

    supportingCopy:
      "Selected projects across websites, products, systems, commerce, and brand.",

    homepageCount: 4,

    allowedLabels: [
      "Client Work",
      "Concept",
      "In-house Product",
      "Design Exploration",
    ],

    cta: {
      label: "View All Projects",
      href: "/work",
    },

    layout: {
      type: "editorial-grid",
      useCards: true,
      cardRadius: "none",
      mixedSizes: true,
    },

    motion: {
      imageScaleOnHover: 1.03,
      imageParallaxSpeed: 0.2,
      staggerDelay: 60,
      darkenOverlayOnHover: true,
    },
  },

  aiShowcase: {
    eyebrow: "AI & Automation",
    headline: "AI That Does Real Work",

    supportingCopy:
      "Useful AI for customer conversations, lead handling, support, and repetitive business tasks.",

    offerings: [
      {
        id: "ai-assistant",
        title: "AI Assistant",
        description:
          "Answer questions, handle requests, and guide customers around the clock.",
      },
      {
        id: "ai-receptionist",
        title: "AI Receptionist",
        description:
          "Handle enquiries, capture leads, and help schedule appointments.",
      },
      {
        id: "lead-qualification",
        title: "Lead Qualification",
        description:
          "Ask the right questions and route stronger opportunities to your team.",
      },
      {
        id: "customer-support",
        title: "Customer Support",
        description:
          "Handle common questions quickly while escalating cases that need people.",
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        description:
          "Connect systems and remove repetitive steps from everyday operations.",
      },
    ],

    cta: {
      label: "See What We Can Automate",
      href: "/services/ai-automation-solutions",
    },

    visual: {
      type: "ai-interface",
      theme: "dark",
      image: null,
      showSignalAnimation: true,
    },

    motion: {
      panelEntry: "right",
      mockupParallaxSpeed: 0.2,
      staggerOfferings: true,
      disableOnMobile: true,
    },
  },

  outcomes: {
    eyebrow: "Start With the Goal",
    headline: "What Are You Trying to Achieve?",

    supportingCopy:
      "You don't need to know the service name. Start with what needs to change.",

    items: outcomes,

    layout: {
      type: "typographic-list",
      desktopDirection: "horizontal",
      mobileDirection: "vertical",
      useCards: false,
      useIcons: false,
    },

    motion: {
      horizontalScrollDesktop: true,
      disableHorizontalScrollMobile: true,
    },
  },

  industries: {
    eyebrow: "Industries",
    headline: "Built Around Your Business",

    supportingCopy:
      "Different businesses need different systems. Explore what we can build, improve, and grow in your industry.",

    homepageCount: 6,

    items: homepageIndustries,

    cta: {
      label: "Explore All Industries",
      href: "/industries",
    },

    layout: {
      type: "interactive-panels",
      desktop: "sticky-list-panel",
      mobile: "accordion",
      useCards: false,
    },

    motion: {
      stickyList: true,
      crossfadeContent: true,
      imageTransitionDuration: 200,
      disableStickyOnMobile: true,
    },
  },

  whyZapmind: {
    eyebrow: "Why Zapmind",
    headline: "One Partner. Every Part of Your Digital Business.",

    supportingCopy:
      "Branding, marketing, software, websites, e-commerce and AI work better when they are not treated as separate problems.",

    differentiators: [
      {
        id: "strategy-first",
        number: "01",
        title: "Business First",
        description:
          "We start with what the business needs to achieve before deciding what should be built.",
      },
      {
        id: "connected-disciplines",
        number: "02",
        title: "Connected Disciplines",
        description:
          "Brand, design, software, marketing and AI are planned to work together.",
      },
      {
        id: "customer-operations",
        number: "03",
        title: "Growth + Operations",
        description:
          "We can improve what customers see and what happens behind the scenes.",
      },
      {
        id: "long-term",
        number: "04",
        title: "Beyond Launch",
        description:
          "The work is designed with what comes after launch in mind.",
      },
      {
        id: "practical-ai",
        number: "05",
        title: "AI Where It Helps",
        description:
          "AI is used where it can remove friction, save time, or improve customer experience.",
      },
    ],

    layout: {
      type: "split-numbered-list",
      useCards: false,
      showConnectingLine: true,
    },

    motion: {
      minimal: true,
    },
  },

  process: {
    eyebrow: "Our Process",
    headline: "How We Work",

    supportingCopy:
      "A clear path from the first conversation to launch and everything after.",

    steps: [
      {
        id: "discover",
        number: "01",
        title: "Discover",
        description:
          "We understand the business, goals, users, and problem.",
      },
      {
        id: "define",
        number: "02",
        title: "Define",
        description:
          "We turn the problem into a clear scope, direction, and plan.",
      },
      {
        id: "design",
        number: "03",
        title: "Design",
        description:
          "We shape the experience, structure, and visual direction.",
      },
      {
        id: "build",
        number: "04",
        title: "Build",
        description:
          "We develop, integrate, test, and refine the solution.",
      },
      {
        id: "launch",
        number: "05",
        title: "Launch",
        description:
          "We take it live, review the experience, and make sure everything works.",
      },
      {
        id: "grow",
        number: "06",
        title: "Grow",
        description:
          "We improve, expand, market, and optimize as the business evolves.",
      },
    ],

    layout: {
      type: "sticky-story",
      stickySide: "left",
      mobile: "vertical",
    },

    motion: {
      stickyDesktop: true,
      activeStepOnScroll: true,
      disableStickyOnMobile: true,
    },
  },

  insights: {
    eyebrow: "Insights",
    headline: "Thinking Out Loud",

    supportingCopy:
      "Practical thinking on digital growth, technology, design, and AI — without the unnecessary jargon.",

    homepageCount: 3,

    cta: {
      label: "Read All Articles",
      href: "/insights",
    },

    layout: {
      type: "editorial",
      desktopColumns: 3,
      mobileColumns: 1,
      cardRadius: "none",
    },

    imageStyle: {
      type: "branded-editorial",
      useStockPhotography: false,
    },

    suggestedTopics: [
      "Why Most Business Websites Don't Generate Leads",
      "When Does Your Business Actually Need Custom Software?",
      "SEO vs Paid Ads: Where Should You Spend First?",
      "The Real Cost of Running a Business on Manual Processes",
      "What AI Can Realistically Do for a Small Business",
      "Why Your Shopify Store Has Traffic but No Sales",
      "What to Look for When Choosing a Digital Agency",
      "Why Branding Should Come Before Marketing",
      "How Technology Can Improve Real Estate Sales Operations",
      "What Happens After Your Website Launches?",
    ],
  },

  finalCta: {
    headline: "Let's Build What Your Business Actually Needs",

    supportingCopy:
      "Know exactly what you need? Great. Only know the problem? That's enough to start.",

    primaryCta: {
      label: "Start a Project",
      href: "/contact",
    },

    secondaryCta: {
      label: "Not sure where to start?",
      href: "/contact?mode=diagnostic",
    },

    visual: {
      theme: "dark",
      backgroundWord: "START",
      image: null,
    },

    motion: {
      backgroundTextParallaxSpeed: 0.1,
      disableOnMobile: true,
    },
  },
};

export { homeData };