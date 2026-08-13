const industriesData = [
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate",
    navTitle: "Real Estate",
    accent: "blue",
    featured: true,
    navFeatured: true,
    homepageOrder: 1,

    shortDescription:
      "Digital systems, marketing, and AI solutions built for property businesses.",

    problems: [
      "Leads getting lost or followed up too slowly",
      "Properties managed across disconnected systems",
      "Manual booking and viewing coordination",
      "Poor client communication",
      "Weak digital presence",
    ],

    solutions: [
      {
        id: "real-estate-crm",
        title: "Real Estate CRM",
        description:
          "Manage leads, buyers, sellers, investors, agents, and follow-ups in one system.",
        serviceIds: [
          "software-app-development",
          "ai-automation-solutions",
        ],
      },
      {
        id: "property-management-system",
        title: "Property Management System",
        description:
          "Manage properties, tenants, payments, maintenance, and internal operations.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "lead-management-routing",
        title: "Lead Management & Routing",
        description:
          "Capture, qualify, assign, and follow up with property leads faster.",
        serviceIds: [
          "ai-automation-solutions",
          "digital-marketing-growth",
        ],
      },
      {
        id: "property-portals",
        title: "Property & Listing Portals",
        description:
          "Custom searchable portals for property listings, developments, and investors.",
        serviceIds: [
          "software-app-development",
          "website-design-development",
        ],
      },
      {
        id: "viewing-booking-system",
        title: "Viewing & Booking System",
        description:
          "Let prospects schedule viewings and consultations without manual coordination.",
        serviceIds: [
          "software-app-development",
          "ai-automation-solutions",
        ],
      },
      {
        id: "real-estate-marketing",
        title: "Property Marketing & Lead Generation",
        description:
          "Generate qualified buyer, seller, and investor enquiries through digital campaigns.",
        serviceIds: [
          "digital-marketing-growth",
          "social-media-management",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "ai-automation-solutions",
      "website-design-development",
      "digital-marketing-growth",
      "branding-creative-design",
      "social-media-management",
    ],

    outcomes: [
      "Generate more property leads",
      "Respond to leads faster",
      "Manage properties more efficiently",
      "Improve client experience",
      "Strengthen digital presence",
    ],

    idealFor: [
      "Real estate agencies",
      "Property developers",
      "Brokerages",
      "Property managers",
      "Real estate investment firms",
    ],
  },

  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare",
    navTitle: "Healthcare",
    accent: "green",
    featured: true,
    navFeatured: true,
    homepageOrder: 2,

    shortDescription:
      "Digital experiences and operational systems for clinics, practices, and healthcare businesses.",

    problems: [
      "Too much manual appointment scheduling",
      "Missed calls and enquiries",
      "Disconnected patient information",
      "Poor patient communication",
      "Weak local visibility",
    ],

    solutions: [
      {
        id: "patient-management-system",
        title: "Patient Management System",
        description:
          "Organize patient information, appointments, workflows, and internal operations.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "healthcare-booking",
        title: "Appointment & Scheduling System",
        description:
          "Allow patients to book, reschedule, and manage appointments online.",
        serviceIds: [
          "software-app-development",
          "ai-automation-solutions",
        ],
      },
      {
        id: "ai-receptionist-healthcare",
        title: "AI Receptionist",
        description:
          "Handle common enquiries, appointment requests, and patient intake around the clock.",
        serviceIds: [
          "ai-automation-solutions",
          "software-app-development",
        ],
      },
      {
        id: "patient-portals",
        title: "Patient Portals",
        description:
          "Provide patients with a secure digital place to access services and information.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "healthcare-website",
        title: "Healthcare Websites",
        description:
          "Modern websites designed around services, doctors, locations, and patient conversion.",
        serviceIds: [
          "website-design-development",
          "branding-creative-design",
        ],
      },
      {
        id: "healthcare-marketing",
        title: "Patient Acquisition & Local SEO",
        description:
          "Help practices become easier to discover and generate more qualified enquiries.",
        serviceIds: [
          "digital-marketing-growth",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "ai-automation-solutions",
      "website-design-development",
      "digital-marketing-growth",
      "branding-creative-design",
    ],

    outcomes: [
      "Book more appointments",
      "Reduce administrative workload",
      "Respond to patients faster",
      "Improve patient experience",
      "Increase local visibility",
    ],

    idealFor: [
      "Clinics",
      "Dental practices",
      "Medical practices",
      "Wellness businesses",
      "Specialist healthcare providers",
    ],
  },

  {
    id: "ecommerce-retail",
    slug: "ecommerce-retail",
    title: "E-Commerce & Retail",
    navTitle: "E-Commerce & Retail",
    accent: "orange",
    featured: true,
    navFeatured: true,
    homepageOrder: 3,

    shortDescription:
      "Commerce systems and growth solutions built to increase sales and simplify operations.",

    problems: [
      "Low online conversion rates",
      "Poor shopping experience",
      "Disconnected inventory",
      "High cart abandonment",
      "Weak customer retention",
    ],

    solutions: [
      {
        id: "online-store",
        title: "Online Store",
        description:
          "Build high-converting Shopify and custom commerce experiences.",
        serviceIds: [
          "ecommerce-solutions",
          "website-design-development",
        ],
      },
      {
        id: "inventory-order-management",
        title: "Inventory & Order Management",
        description:
          "Track products, stock, orders, and fulfillment from one connected system.",
        serviceIds: [
          "ecommerce-solutions",
          "software-app-development",
        ],
      },
      {
        id: "loyalty-retention",
        title: "Loyalty & Retention Systems",
        description:
          "Increase repeat purchases through customer retention and loyalty experiences.",
        serviceIds: [
          "ecommerce-solutions",
          "digital-marketing-growth",
        ],
      },
      {
        id: "marketplace-platform",
        title: "Marketplace Solutions",
        description:
          "Connect or build multi-vendor and marketplace commerce experiences.",
        serviceIds: [
          "ecommerce-solutions",
          "software-app-development",
        ],
      },
      {
        id: "ecommerce-growth",
        title: "E-Commerce Growth",
        description:
          "Increase traffic, conversions, retention, and online revenue.",
        serviceIds: [
          "digital-marketing-growth",
          "ecommerce-solutions",
        ],
      },
      {
        id: "ai-commerce-support",
        title: "AI Shopping & Customer Support",
        description:
          "Help customers discover products, get answers, and receive support faster.",
        serviceIds: [
          "ai-automation-solutions",
          "ecommerce-solutions",
        ],
      },
    ],

    relevantServices: [
      "ecommerce-solutions",
      "digital-marketing-growth",
      "branding-creative-design",
      "social-media-management",
      "ai-automation-solutions",
      "software-app-development",
    ],

    outcomes: [
      "Increase online sales",
      "Improve conversion rates",
      "Increase repeat purchases",
      "Simplify store operations",
      "Improve customer experience",
    ],

    idealFor: [
      "D2C brands",
      "Retail stores",
      "Online retailers",
      "Wholesale businesses",
      "Consumer brands",
    ],
  },

  {
    id: "saas-startups",
    slug: "saas-startups",
    title: "SaaS & Startups",
    navTitle: "SaaS & Startups",
    accent: "purple",
    featured: true,
    navFeatured: true,
    homepageOrder: 4,

    shortDescription:
      "From idea to launch, we help startups build products, brands, and growth engines.",

    problems: [
      "Need to validate an idea quickly",
      "No internal product team",
      "Weak product onboarding",
      "Unclear positioning",
      "Difficulty acquiring early customers",
    ],

    solutions: [
      {
        id: "saas-mvp",
        title: "SaaS MVP Development",
        description:
          "Turn an idea into a working product ready for users and validation.",
        serviceIds: [
          "software-app-development",
          "branding-creative-design",
        ],
      },
      {
        id: "startup-branding",
        title: "Startup Branding",
        description:
          "Create positioning, identity, and messaging that make the company credible.",
        serviceIds: [
          "branding-creative-design",
        ],
      },
      {
        id: "product-onboarding",
        title: "User Onboarding Systems",
        description:
          "Design smoother onboarding journeys that help users reach value faster.",
        serviceIds: [
          "software-app-development",
          "website-design-development",
        ],
      },
      {
        id: "subscription-billing",
        title: "Billing & Subscription Systems",
        description:
          "Build subscription, account, billing, and customer management experiences.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "product-dashboards",
        title: "Product & Analytics Dashboards",
        description:
          "Give teams visibility into customers, activity, and business performance.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "startup-growth",
        title: "Startup Growth Marketing",
        description:
          "Build acquisition systems for early traction and scalable customer growth.",
        serviceIds: [
          "digital-marketing-growth",
          "social-media-management",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "branding-creative-design",
      "website-design-development",
      "digital-marketing-growth",
      "ai-automation-solutions",
    ],

    outcomes: [
      "Launch faster",
      "Validate ideas",
      "Acquire early customers",
      "Build a stronger product",
      "Create a credible brand",
    ],

    idealFor: [
      "Early-stage startups",
      "SaaS founders",
      "Funded startups",
      "Product teams",
      "Entrepreneurs launching digital products",
    ],
  },

  {
    id: "fintech-financial-services",
    slug: "fintech-financial-services",
    title: "FinTech & Financial Services",
    navTitle: "FinTech & Finance",
    accent: "cyan",
    featured: true,
    navFeatured: true,
    homepageOrder: 5,

    shortDescription:
      "Modern digital systems and customer experiences for finance-focused businesses.",

    problems: [
      "Manual client administration",
      "Poor reporting visibility",
      "Disconnected documents and client data",
      "Slow customer onboarding",
      "Outdated digital experiences",
    ],

    solutions: [
      {
        id: "financial-client-portals",
        title: "Client Portals",
        description:
          "Give customers a central place to access information, documents, and services.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "finance-management-system",
        title: "Finance Management Systems",
        description:
          "Custom systems for managing financial workflows, clients, and internal operations.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "billing-invoicing",
        title: "Billing & Invoicing Systems",
        description:
          "Digitize billing, invoicing, payment tracking, and financial administration.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "finance-dashboards",
        title: "Reporting Dashboards",
        description:
          "Turn business data into clearer operational and performance reporting.",
        serviceIds: [
          "software-app-development",
          "ai-automation-solutions",
        ],
      },
      {
        id: "document-workflows",
        title: "Document Workflows",
        description:
          "Simplify document collection, processing, routing, and internal workflows.",
        serviceIds: [
          "ai-automation-solutions",
          "software-app-development",
        ],
      },
      {
        id: "financial-lead-qualification",
        title: "AI Lead Qualification",
        description:
          "Capture, qualify, and route potential customers more efficiently.",
        serviceIds: [
          "ai-automation-solutions",
          "digital-marketing-growth",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "ai-automation-solutions",
      "website-design-development",
      "branding-creative-design",
      "digital-marketing-growth",
    ],

    outcomes: [
      "Improve customer onboarding",
      "Simplify financial operations",
      "Improve reporting",
      "Reduce repetitive administration",
      "Create better digital experiences",
    ],

    idealFor: [
      "FinTech companies",
      "Financial advisory firms",
      "Accounting businesses",
      "Lending businesses",
      "Financial service providers",
    ],
  },

  {
    id: "logistics-supply-chain",
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    navTitle: "Logistics",
    accent: "orange",
    featured: true,
    navFeatured: true,
    homepageOrder: 6,

    shortDescription:
      "Connected digital systems for tracking, dispatch, logistics operations, and customer visibility.",

    problems: [
      "Limited shipment visibility",
      "Manual dispatch coordination",
      "Disconnected operational data",
      "Poor customer status communication",
      "Slow reporting",
    ],

    solutions: [
      {
        id: "fleet-management",
        title: "Fleet Management System",
        description:
          "Manage vehicles, drivers, assignments, activity, and operational information.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "shipment-tracking",
        title: "Shipment Tracking",
        description:
          "Give teams and customers visibility into shipments and delivery status.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "dispatch-system",
        title: "Dispatch Management",
        description:
          "Coordinate deliveries, assignments, routes, and dispatch operations.",
        serviceIds: [
          "software-app-development",
          "ai-automation-solutions",
        ],
      },
      {
        id: "customer-logistics-portal",
        title: "Customer Portal",
        description:
          "Give customers access to tracking, documents, orders, and service information.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "status-automation",
        title: "Automated Status Updates",
        description:
          "Automatically communicate shipment and delivery updates to customers.",
        serviceIds: [
          "ai-automation-solutions",
        ],
      },
      {
        id: "logistics-dashboard",
        title: "Operations Dashboard",
        description:
          "Centralize key logistics information and operational performance.",
        serviceIds: [
          "software-app-development",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "ai-automation-solutions",
      "website-design-development",
      "digital-marketing-growth",
    ],

    outcomes: [
      "Improve shipment visibility",
      "Reduce manual coordination",
      "Improve customer communication",
      "Centralize operations",
      "Make faster operational decisions",
    ],

    idealFor: [
      "Logistics companies",
      "Freight businesses",
      "Delivery companies",
      "Transport operators",
      "Supply chain businesses",
    ],
  },

  {
    id: "warehousing",
    slug: "warehousing",
    title: "Warehousing",
    navTitle: "Warehousing",
    accent: "yellow",
    featured: true,
    navFeatured: false,
    homepageOrder: 7,

    shortDescription:
      "Warehouse systems that improve inventory visibility, fulfillment, staffing, and dispatch operations.",

    problems: [
      "Poor stock visibility",
      "Manual inventory tracking",
      "Slow order fulfillment",
      "Disconnected warehouse operations",
      "Weak reporting",
      "Dispatch delays",
    ],

    solutions: [
      {
        id: "warehouse-management-system",
        title: "Warehouse Management System",
        description:
          "Manage stock, locations, receiving, picking, packing, and warehouse operations.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "inventory-tracking",
        title: "Inventory Tracking",
        description:
          "Track inventory movement, quantities, locations, and availability.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "order-fulfillment",
        title: "Order Fulfillment System",
        description:
          "Coordinate picking, packing, fulfillment, and outgoing orders.",
        serviceIds: [
          "software-app-development",
          "ecommerce-solutions",
        ],
      },
      {
        id: "barcode-qr",
        title: "Barcode & QR Workflows",
        description:
          "Digitize stock movement and warehouse processes using scan-based workflows.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "warehouse-client-portal",
        title: "Client Portal",
        description:
          "Give warehouse clients visibility into inventory, orders, and fulfillment status.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "warehouse-automation",
        title: "Warehouse Workflow Automation",
        description:
          "Automate notifications, data entry, reporting, and repetitive warehouse tasks.",
        serviceIds: [
          "ai-automation-solutions",
          "software-app-development",
        ],
      },
      {
        id: "warehouse-dashboard",
        title: "Warehouse Analytics Dashboard",
        description:
          "Monitor stock, orders, fulfillment performance, and warehouse activity.",
        serviceIds: [
          "software-app-development",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "ai-automation-solutions",
      "ecommerce-solutions",
      "website-design-development",
    ],

    outcomes: [
      "Improve inventory accuracy",
      "Speed up fulfillment",
      "Reduce manual warehouse work",
      "Improve operational visibility",
      "Improve client communication",
    ],

    idealFor: [
      "Warehousing companies",
      "3PL providers",
      "Distribution centers",
      "Retail warehouses",
      "E-Commerce fulfillment businesses",
    ],
  },

  {
    id: "professional-services",
    slug: "professional-services",
    title: "Professional Services",
    navTitle: "Professional Services",
    accent: "purple",
    featured: true,
    navFeatured: true,
    homepageOrder: 8,

    shortDescription:
      "Digital systems and growth tools for businesses built around clients, projects, and expertise.",

    problems: [
      "Manual client intake",
      "Scattered project information",
      "Slow proposal and follow-up processes",
      "Weak lead generation",
      "Poor client visibility",
    ],

    solutions: [
      {
        id: "professional-crm",
        title: "Client CRM",
        description:
          "Manage prospects, customers, communication, and client relationships.",
        serviceIds: [
          "software-app-development",
          "ai-automation-solutions",
        ],
      },
      {
        id: "client-project-portal",
        title: "Client Portal & Project Tracker",
        description:
          "Give clients visibility into projects, documents, updates, and deliverables.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "booking-intake",
        title: "Booking & Client Intake",
        description:
          "Automate consultation booking, enquiries, forms, and client onboarding.",
        serviceIds: [
          "ai-automation-solutions",
          "software-app-development",
        ],
      },
      {
        id: "professional-billing",
        title: "Billing & Invoicing",
        description:
          "Simplify billing, invoices, payments, and client administration.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "professional-lead-gen",
        title: "B2B Lead Generation",
        description:
          "Build predictable pipelines for new business opportunities.",
        serviceIds: [
          "digital-marketing-growth",
          "ai-automation-solutions",
        ],
      },
      {
        id: "professional-website",
        title: "Professional Website & Brand",
        description:
          "Create a digital presence that communicates expertise and builds trust.",
        serviceIds: [
          "website-design-development",
          "branding-creative-design",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "digital-marketing-growth",
      "ai-automation-solutions",
      "website-design-development",
      "branding-creative-design",
      "social-media-management",
    ],

    outcomes: [
      "Win more clients",
      "Improve client experience",
      "Reduce administrative work",
      "Manage projects more clearly",
      "Build a stronger professional brand",
    ],

    idealFor: [
      "Consulting firms",
      "Accounting firms",
      "Legal firms",
      "Agencies",
      "Advisory businesses",
      "Business service providers",
    ],
  },

  {
    id: "hospitality-restaurants",
    slug: "hospitality-restaurants",
    title: "Hospitality & Restaurants",
    navTitle: "Hospitality",
    accent: "pink",
    featured: true,
    navFeatured: true,
    homepageOrder: 9,

    shortDescription:
      "Digital experiences that help hospitality businesses attract, serve, and retain more customers.",

    problems: [
      "Manual booking management",
      "Low repeat customer rate",
      "Poor online reputation",
      "Weak social presence",
      "Disconnected ordering experiences",
    ],

    solutions: [
      {
        id: "reservation-system",
        title: "Reservation & Booking System",
        description:
          "Make it easier for customers to reserve tables, rooms, or services online.",
        serviceIds: [
          "software-app-development",
          "website-design-development",
        ],
      },
      {
        id: "ordering-system",
        title: "Online Ordering",
        description:
          "Create smoother direct ordering experiences across website and digital channels.",
        serviceIds: [
          "ecommerce-solutions",
          "software-app-development",
        ],
      },
      {
        id: "hospitality-loyalty",
        title: "Customer Loyalty",
        description:
          "Encourage repeat visits with customer loyalty and retention systems.",
        serviceIds: [
          "software-app-development",
          "digital-marketing-growth",
        ],
      },
      {
        id: "review-management",
        title: "Reputation & Review Management",
        description:
          "Improve online reputation and build stronger customer trust.",
        serviceIds: [
          "digital-marketing-growth",
          "social-media-management",
        ],
      },
      {
        id: "hospitality-social",
        title: "Social Media Management",
        description:
          "Keep the business visible and attractive across social channels.",
        serviceIds: [
          "social-media-management",
          "branding-creative-design",
        ],
      },
      {
        id: "hospitality-ai",
        title: "AI Customer Assistant",
        description:
          "Answer common questions, support bookings, and assist customers around the clock.",
        serviceIds: [
          "ai-automation-solutions",
        ],
      },
    ],

    relevantServices: [
      "social-media-management",
      "website-design-development",
      "digital-marketing-growth",
      "ai-automation-solutions",
      "ecommerce-solutions",
      "branding-creative-design",
    ],

    outcomes: [
      "Increase bookings",
      "Generate more repeat customers",
      "Improve online reputation",
      "Strengthen social presence",
      "Improve customer service",
    ],

    idealFor: [
      "Restaurants",
      "Hotels",
      "Cafes",
      "Hospitality groups",
      "Event venues",
      "Service-based hospitality businesses",
    ],
  },

  {
    id: "education",
    slug: "education",
    title: "Education & E-Learning",
    navTitle: "Education",
    accent: "cyan",
    featured: true,
    navFeatured: false,
    homepageOrder: 10,

    shortDescription:
      "Digital platforms and systems that simplify learning, enrollment, and student support.",

    problems: [
      "Manual enrollment processes",
      "Disconnected student information",
      "Poor online learning experience",
      "High administrative workload",
      "Slow student support",
    ],

    solutions: [
      {
        id: "student-management",
        title: "Student Management System",
        description:
          "Manage students, enrollment, records, communication, and administration.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "lms",
        title: "LMS & Learning Portals",
        description:
          "Build or integrate digital learning environments for students and educators.",
        serviceIds: [
          "software-app-development",
          "website-design-development",
        ],
      },
      {
        id: "course-enrollment",
        title: "Course Enrollment & Billing",
        description:
          "Simplify registration, enrollment, payment, and course administration.",
        serviceIds: [
          "software-app-development",
          "ecommerce-solutions",
        ],
      },
      {
        id: "education-ai",
        title: "AI Student Support",
        description:
          "Answer common student questions and provide faster digital assistance.",
        serviceIds: [
          "ai-automation-solutions",
        ],
      },
      {
        id: "education-marketing",
        title: "Student Lead Generation",
        description:
          "Generate enquiries and applications through targeted digital campaigns.",
        serviceIds: [
          "digital-marketing-growth",
          "social-media-management",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "digital-marketing-growth",
      "website-design-development",
      "ai-automation-solutions",
      "social-media-management",
    ],

    outcomes: [
      "Increase enrollments",
      "Reduce administrative work",
      "Improve student experience",
      "Improve support availability",
      "Modernize learning experiences",
    ],

    idealFor: [
      "Schools",
      "Training institutes",
      "Universities",
      "E-Learning companies",
      "Education startups",
    ],
  },

  {
    id: "construction-manufacturing",
    slug: "construction-manufacturing",
    title: "Construction & Manufacturing",
    navTitle: "Construction & Manufacturing",
    accent: "yellow",
    featured: true,
    navFeatured: false,
    homepageOrder: 11,

    shortDescription:
      "Operational systems that connect projects, teams, orders, customers, and business data.",

    problems: [
      "Manual project tracking",
      "Poor field visibility",
      "Disconnected operational systems",
      "Slow quotation processes",
      "Limited supply chain visibility",
    ],

    solutions: [
      {
        id: "project-management-system",
        title: "Project Management System",
        description:
          "Track projects, milestones, teams, documents, and operational progress.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "scheduling-system",
        title: "Scheduling & Workforce Management",
        description:
          "Coordinate workers, jobs, schedules, and field activities.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "field-reporting",
        title: "Field Reporting Dashboard",
        description:
          "Capture and centralize field activity, progress, and operational information.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "quotation-portal",
        title: "Quotation & B2B Portal",
        description:
          "Digitize quotation requests, customer orders, and business-to-business workflows.",
        serviceIds: [
          "software-app-development",
          "website-design-development",
        ],
      },
      {
        id: "supply-order-tracking",
        title: "Supply & Order Tracking",
        description:
          "Improve visibility into materials, orders, deliveries, and supply activity.",
        serviceIds: [
          "software-app-development",
        ],
      },
      {
        id: "construction-automation",
        title: "Operations Automation",
        description:
          "Automate repetitive reporting, notifications, document flows, and administration.",
        serviceIds: [
          "ai-automation-solutions",
          "software-app-development",
        ],
      },
    ],

    relevantServices: [
      "software-app-development",
      "website-design-development",
      "ai-automation-solutions",
      "digital-marketing-growth",
    ],

    outcomes: [
      "Improve project visibility",
      "Reduce manual reporting",
      "Improve workforce coordination",
      "Speed up quotations",
      "Connect operations more effectively",
    ],

    idealFor: [
      "Construction companies",
      "Manufacturers",
      "Contractors",
      "Industrial businesses",
      "B2B suppliers",
    ],
  },
];

export { industriesData };