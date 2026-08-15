import { useState } from "react";
import { FiArrowDownRight, FiMinus } from "react-icons/fi";

import { getServiceAccent } from "../../../data/serviceDetailVisuals.js";

const formatList = (items = []) => {
  if (!items.length) return "";

  if (items.length === 1) {
    return items[0];
  }

  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
};

const ServiceDetailFAQ = ({ service }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accent = getServiceAccent(service);

  const faqs = [
    {
      question: "Where can we start?",
      answer: `Common starting points include ${formatList(
        service.commerciallySellable,
      )}. We can begin with one clear requirement and build from there.`,
    },

    {
      question: "Can we keep the scope focused?",
      answer: `Yes. Typical focused needs include ${formatList(
        service.smePurchases,
      )}. There is no need to add more unless it helps solve the problem.`,
    },

    {
      question: "What about complex requirements?",
      answer: `We can also support larger requirements including ${formatList(
        service.enterprisePurchases,
      )}.`,
    },

    {
      question: "What tools can be involved?",
      answer: `Depending on the project, we can work with ${formatList(
        service.tools.slice(0, 6),
      )}. The stack follows the requirement.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-bg-2">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.13em]"
              style={{ color: accent }}
            >
              FAQ
            </span>

            <h2 className="mt-5 max-w-[520px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[50px] md:text-[56px]">
              A few things
              <br />

              <span className="text-text-muted">
                worth knowing.
              </span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-text-subtle">
              Enough clarity to get started. The rest can be figured out
              together.
            </p>
          </div>

          {/* QUESTIONS */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-t border-border-strong last:border-b"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="group flex w-full items-start justify-between gap-8 py-6 text-left"
                  >
                    <div className="flex gap-5">
                      <span
                        className="mt-[8px] h-[7px] w-[7px] shrink-0"
                        style={{
                          backgroundColor: isOpen
                            ? accent
                            : "var(--color-border-strong)",
                        }}
                      />

                      <span
                        className={`text-[19px] font-semibold leading-[1.3] tracking-[-0.03em] transition-colors duration-150 md:text-[22px] ${
                          isOpen
                            ? "text-text-primary"
                            : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {isOpen ? (
                      <FiMinus
                        className="mt-1 shrink-0 text-[18px]"
                        style={{ color: accent }}
                      />
                    ) : (
                      <FiArrowDownRight className="mt-1 shrink-0 text-[18px] text-text-muted transition-transform duration-150 group-hover:translate-x-[2px] group-hover:translate-y-[2px]" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="pb-7 pl-12">
                      <p className="max-w-[700px] text-[15px] leading-7 text-text-subtle">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceDetailFAQ };