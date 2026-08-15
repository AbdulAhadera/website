const serviceDetailVisuals = {
  "website-design-development": {
    hero:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=90",
    secondary:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=88",
  },

  "digital-marketing-growth": {
    hero:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=90",
    secondary:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=88",
  },

  "social-media-management": {
    hero:
      "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/984b6b21-17c4-4866-8176-234579d769d7/b90a448a-438b-4215-9665-48c05c206f32.jpg",
    secondary:
      "https://generalassemb.ly/wp-content/uploads/2024/05/socialmedia-strategy-picjumbo-HNCK4005.jpg",
  },

  "branding-creative-design": {
    hero:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=90",
    secondary:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=88",
  },

  "ecommerce-solutions": {
    hero:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=90",
    secondary:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=88",
  },

  "software-app-development": {
    hero:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90",
    secondary:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=88",
  },

  "ai-automation-solutions": {
    hero:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    secondary:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=88",
  },
};

const accentMap = {
  blue: "var(--color-accent)",
  orange: "var(--color-orange)",
  pink: "var(--color-pink)",
  purple: "var(--color-purple)",
  green: "var(--color-green)",
  cyan: "var(--color-cyan)",
};

const getServiceAccent = (service) =>
  accentMap[service?.accent] || "var(--color-accent)";

export { serviceDetailVisuals, getServiceAccent };