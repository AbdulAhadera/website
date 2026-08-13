import { servicesData } from "./servicesData.js";
import { industriesData } from "./industriesData.js";

const getService = (id) => {
  return servicesData.find((service) => service.id === id);
};

const servicesMenuGroups = [
  {
    id: "presence-growth",
    title: "Digital Presence & Growth",
    items: [
      getService("website-design-development"),
      getService("digital-marketing-growth"),
      getService("social-media-management"),
      getService("branding-creative-design"),
    ].filter(Boolean),
  },
  {
    id: "commerce-systems",
    title: "Commerce & Technology",
    items: [
      getService("ecommerce-solutions"),
      getService("software-app-development"),
    ].filter(Boolean),
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    items: [
      getService("ai-automation-solutions"),
    ].filter(Boolean),

    featured: {
      eyebrow: "AI Spotlight",
      title: "AI Receptionists & Voice Agents",
      description:
        "Handle enquiries, qualify leads, and support customers around the clock.",
      href: "/services/ai-automation-solutions/ai-receptionist-voice-agents",
      accent: "purple",
    },
  },
];

const industriesMenuItems = industriesData
  .filter((industry) => industry.navFeatured)
  .map((industry) => ({
    id: industry.id,
    title: industry.navTitle,
    slug: industry.slug,
    href: `/industries/${industry.slug}`,
    accent: industry.accent,
    description: industry.shortDescription,
  }));

const navigationData = {
  logo: {
    label: "Zapmind",
    href: "/",
  },

  mainLinks: [
    {
      id: "services",
      label: "Services",
      type: "mega-menu",
    },
    {
      id: "industries",
      label: "Industries",
      type: "mega-menu",
    },
    {
      id: "work",
      label: "Work",
      type: "link",
      href: "/work",
    },
    {
      id: "about",
      label: "About",
      type: "link",
      href: "/about",
    },
    {
      id: "insights",
      label: "Insights",
      type: "link",
      href: "/insights",
    },
  ],

  servicesMenu: {
    eyebrow: "What We Do",
    title: "Everything digital, under one roof.",
    groups: servicesMenuGroups,

    footerLinks: [
      {
        label: "Explore All Services",
        href: "/services",
      },
    ],
  },

  industriesMenu: {
    eyebrow: "Industries",
    title: "Built around how your business works.",
    items: industriesMenuItems,

    footerLinks: [
      {
        label: "View All Industries",
        href: "/industries",
      },
    ],
  },

  primaryCta: {
    label: "Start a Project",
    href: "/contact",
  },

  mobile: {
    servicesLabel: "Explore Services",
    industriesLabel: "Explore Industries",
  },
};

export { navigationData };