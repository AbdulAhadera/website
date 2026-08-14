import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const featuredProjects = [
  {
    id: "warehouse",
    title: "Warehouse Command",
    category: "Warehousing",
    description:
      "Inventory visibility, order flow and warehouse operations brought into one connected system.",
    href: "/work/warehouse-command",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    accent: "var(--color-cyan)",
  },
  {
    id: "ecommerce",
    title: "Commerce One",
    category: "E-Commerce",
    description:
      "A modern commerce experience connecting products, customers, orders and growth.",
    href: "/work/commerce-one",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    accent: "var(--color-orange)",
  },
  {
    id: "healthcare",
    title: "Healthcare Automation",
    category: "Healthcare",
    description:
      "Patient intake, scheduling, communication and operational automation designed as one workflow.",
    href: "/work/healthcare-automation",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=85",
    accent: "var(--color-green)",
  },
  {
    id: "property-os",
    title: "PropertyOS CRM",
    category: "Real Estate",
    description:
      "A real-estate CRM connecting leads, properties, follow-ups, viewings and client communication.",
    href: "/work/property-os",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85",
    accent: "var(--color-accent)",
  },
];

const FeaturedWork = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-2">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] bg-accent" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                Featured Work
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Digital systems
              <br />

              <span className="text-text-muted">
                built around real work.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              A look at the software, automation and digital product thinking
              behind the kind of work we build.
            </p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mt-14 md:mt-16">
          {featuredProjects.map((project, index) => (
            <ProjectStory
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-border-strong pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-6 text-text-subtle">
            More products and digital experiences are always in progress.
          </p>

          <Link
            to="/work"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
          >
            Explore all work

            <FiArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectStory = ({
  project,
  reverse,
  reduceMotion,
}) => {
  return (
    <article className="grid gap-8 border-t border-border-strong py-10 md:py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14">
      {/* IMAGE */}
      <div className={reverse ? "lg:order-2" : ""}>
        <Link
          to={project.href}
          className="group relative block overflow-hidden"
        >
          <div className="relative aspect-[1.5/1] overflow-hidden bg-bg-3">
            <motion.img
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.025,
                    }
              }
              transition={{
                duration: 0.35,
              }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-bg-dark/[0.08]" />

            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <span className="bg-bg-dark/80 px-3 py-2 text-[12px] font-semibold text-text-inverse backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-surface sm:bottom-5 sm:right-5">
              <FiArrowUpRight
                className="text-[18px]"
                style={{
                  color: project.accent,
                }}
              />
            </div>

            <motion.span
              initial={{
                scaleX: 0.25,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              className="absolute bottom-0 left-0 h-[3px] w-[38%] origin-left"
              style={{
                backgroundColor: project.accent,
              }}
            />
          </div>
        </Link>
      </div>

      {/* COPY */}
      <div className={reverse ? "lg:order-1" : ""}>
        <span
          className="text-[12px] font-semibold uppercase tracking-[0.12em]"
          style={{
            color: project.accent,
          }}
        >
          Concept Project
        </span>

        <h3 className="mt-4 text-[34px] font-semibold leading-[0.98] tracking-[-0.05em] text-text-primary sm:text-[40px] lg:text-[46px]">
          {project.title}
        </h3>

        <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-text-subtle">
          {project.description}
        </p>

        <Link
          to={project.href}
          className="group mt-6 inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary"
        >
          Explore project

          <FiArrowUpRight
            className="text-[16px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            style={{
              color: project.accent,
            }}
          />
        </Link>
      </div>
    </article>
  );
};

export { FeaturedWork };