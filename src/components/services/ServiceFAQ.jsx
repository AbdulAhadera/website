import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What if I don’t know exactly what service I need?",
    answer:
      "That’s completely fine. Start with the problem, goal, or bottleneck you’re dealing with. We’ll help figure out whether the right solution is design, development, marketing, automation, or a combination of them.",
  },
  {
    question: "Can we work with Zapmind for just one service?",
    answer:
      "Yes. You can start with a single project such as a website, branding, marketing, software, or automation. If other capabilities become useful later, they can be added without forcing everything into one package.",
  },
  {
    question: "Do you work with existing websites, systems, and tools?",
    answer:
      "Yes. We don’t automatically replace what already works. We can improve, redesign, integrate, automate, or build around your existing setup depending on what makes the most sense.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the scope. A focused project can move quickly, while larger websites, applications, or connected systems naturally take longer. Before work begins, we’ll give you a clear scope, timeline, and direction.",
  },
  {
    question: "Does every project involve AI?",
    answer:
      "No. AI is one capability, not the answer to every problem. We use it when it creates a meaningful advantage. If a simpler website, workflow, campaign, or software solution is better, that’s what we’ll recommend.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "That depends on what you need. We can continue improving, managing, optimizing, or expanding what we build, or hand everything over clearly so your team can take it forward.",
  },
];

const ServiceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                FAQ
              </span>
            </div>

            <div className="mt-8 max-w-[360px]">
              <h2 className="text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-text-primary sm:text-[44px] md:text-[50px]">
                Before we
                <br />
                get started.
              </h2>

              <p className="mt-5 max-w-[330px] text-[14px] leading-6 text-text-subtle">
                A few things clients usually want to know before starting a
                conversation.
              </p>
            </div>
          </div>

          {/* FAQ LIST */}
          <div className="border-t border-border-strong">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-border-strong"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-8 py-6 text-left md:py-7"
                  >
                    <span
                      className={`max-w-[760px] text-[19px] font-semibold leading-[1.35] tracking-[-0.025em] transition-colors duration-150 md:text-[22px] ${
                        isOpen
                          ? "text-text-primary"
                          : "text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-150 ${
                        isOpen
                          ? "border-bg-dark bg-bg-dark"
                          : "border-border-strong bg-bg-1 group-hover:border-text-muted"
                      }`}
                    >
                      {isOpen ? (
                        <FiMinus
                          className="text-[15px]"
                          style={{
                            color: "var(--color-text-inverse)",
                          }}
                        />
                      ) : (
                        <FiPlus
                          className="text-[15px]"
                          style={{
                            color: "var(--color-text-primary)",
                          }}
                        />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pr-12 md:pr-20">
                          <p className="max-w-[760px] text-[14px] leading-7 text-text-subtle md:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-10 flex items-center gap-3 border-t border-border-light pt-6">
          <span className="h-[6px] w-[6px] bg-accent" />

          <p className="text-[13px] text-text-subtle">
            Still unsure where to start? Bring us the problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export { ServiceFAQ };