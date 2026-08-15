import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiPhone,
  FiRefreshCw,
} from "react-icons/fi";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx61VP-Vi2L3Qb1VJUz0qCQg7JaAVaB9rigXx6XrVaB6gqcKJCvatMUhafwIxrZuMAc/exec";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
};

const fields = [
  {
    id: "name",
    label: "Your name",
    placeholder: "John Doe",
    type: "text",
    required: true,
    width: "half",
  },
  {
    id: "email",
    label: "Business email",
    placeholder: "you@company.com",
    type: "email",
    required: true,
    width: "half",
  },
  {
    id: "phone",
    label: "Phone number",
    placeholder: "+1 305 000 0000",
    type: "tel",
    required: true,
    width: "half",
  },
  {
    id: "company",
    label: "Company",
    placeholder: "Company name",
    type: "text",
    required: true,
    width: "half",
  },
  {
    id: "website",
    label: "Website",
    placeholder: "yourcompany.com",
    type: "url",
    required: false,
    width: "full",
  },
];

const ContactPage = () => {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_STATE);
    setStatus("idle");
  };

  return (
    <section className="relative w-full overflow-hidden border border-border-strong bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />
      <span className="absolute left-0 top-0 z-20 h-[4px] w-[30%] bg-accent" />
      <span className="absolute right-0 top-0 z-20 h-[4px] w-[12%] bg-purple" />

      <div className="relative z-10 flex min-h-[680px] flex-col lg:flex-row">
        {/* LEFT */}
        <div className="relative overflow-hidden bg-bg-dark px-6 py-10 md:px-9 md:py-12 lg:w-[38%] lg:px-10 lg:py-12">
          <div className="grid-dark pointer-events-none absolute inset-0 opacity-70" />
          <div className="pointer-events-none absolute -left-24 top-20 h-[300px] w-[300px] bg-accent/15 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-20 right-[-80px] h-[260px] w-[260px] bg-purple/15 blur-[130px]" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Start a project
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-[480px] text-[42px] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-[50px] lg:text-[54px]"
            >
              Start with the
              <br />
              <span className="text-white/30">problem.</span>
            </motion.h2>

            <p className="mt-6 max-w-[390px] text-[14px] leading-7 text-white/45">
              You don&apos;t need a polished brief. Tell us what is slowing the business down, what you want to improve, or what you want to build.
            </p>

            <div className="mt-10 border-t border-white/10">
              <div className="flex gap-5 border-b border-white/10 py-5">
                <span className="mt-[2px] text-[10px] font-semibold tracking-[0.14em] text-accent">
                  01
                </span>

                <div>
                  <p className="text-[14px] font-semibold text-white">
                    Tell us what&apos;s happening
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-white/35">
                    A challenge, idea, bottleneck or opportunity.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-white/10 py-5">
                <span className="mt-[2px] text-[10px] font-semibold tracking-[0.14em] text-purple">
                  02
                </span>

                <div>
                  <p className="text-[14px] font-semibold text-white">
                    We review the context
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-white/35">
                    We look at what actually needs solving first.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-5">
                <span className="mt-[2px] text-[10px] font-semibold tracking-[0.14em] text-green">
                  03
                </span>

                <div>
                  <p className="text-[14px] font-semibold text-white">
                    Shape the next move
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-white/35">
                    Clear scope before unnecessary complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-7 lg:flex-col xl:flex-row">
              <div className="flex items-center gap-2.5">
                <FiMail className="text-[14px] text-white/35" />

                <span className="text-[11px] text-white/40">
                  Business enquiries
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <FiPhone className="text-[14px] text-white/35" />

                <span className="text-[11px] text-white/40">
                  Project conversations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex-1 px-6 py-10 md:px-10 md:py-12 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex min-h-[560px] flex-col justify-center"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/20 bg-accent-soft text-accent">
                  <FiCheck size={20} />
                </div>

                <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Message received
                </span>

                <h3 className="mt-4 max-w-[650px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[50px]">
                  Thanks.
                  <br />
                  <span className="text-text-muted">We&apos;ll take it from here.</span>
                </h3>

                <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-text-subtle">
                  Your details have been sent successfully. We&apos;ll review what you shared and get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-text-primary/20 pb-1 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:border-text-primary"
                >
                  <FiRefreshCw className="text-[14px] transition-transform duration-300 group-hover:rotate-180" />
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
              >
                <div className="flex items-end justify-between border-b border-border-strong pb-6">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                      Your details
                    </span>

                    <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.045em] text-text-primary sm:text-[34px]">
                      Tell us a little about you.
                    </h3>
                  </div>

                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.13em] text-text-muted sm:block">
                    * Required
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-7">
                  {fields.map((field) => (
                    <label
                      key={field.id}
                      className={field.width === "half" ? "w-full sm:w-[calc(50%-14px)]" : "w-full"}
                    >
                      <span className="flex items-center justify-between text-[12px] font-semibold text-text-body">
                        {field.label}

                        {field.required ? (
                          <span className="text-[10px] font-semibold text-accent">
                            REQUIRED
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-text-muted">
                            OPTIONAL
                          </span>
                        )}
                      </span>

                      <input
                        type={field.type}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        autoComplete={field.id === "name" ? "name" : field.id}
                        className="mt-2 w-full border-0 border-b border-border-strong bg-transparent px-0 py-3 text-[15px] text-text-primary outline-none transition-colors duration-150 placeholder:text-text-muted/65 focus:border-accent"
                      />
                    </label>
                  ))}
                </div>

                <label className="mt-8 block">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-text-body">
                      What are we solving?
                    </span>

                    <span className="text-[10px] font-semibold text-accent">
                      REQUIRED
                    </span>
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about the project, challenge, idea, or what you want to improve..."
                    className="mt-3 w-full resize-none border border-border-strong bg-bg-2 px-5 py-4 text-[15px] leading-7 text-text-primary outline-none transition-colors duration-150 placeholder:text-text-muted/65 focus:border-accent"
                  />
                </label>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 border-l-2 border-red bg-red-soft px-4 py-3"
                  >
                    <p className="text-[13px] font-medium text-red-strong">
                      Something went wrong while sending your message. Please try again.
                    </p>
                  </motion.div>
                )}

                <div className="mt-8 flex flex-col gap-5 border-t border-border-strong pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[380px] text-[11px] leading-5 text-text-muted">
                    By sending this form, you&apos;re sharing these details so we can respond to your enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative inline-flex h-[48px] min-w-[190px] items-center justify-between overflow-hidden bg-bg-dark px-5 text-white transition-colors duration-150 hover:bg-surface-dark-3 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <div className="grid-dark-small pointer-events-none absolute inset-0 opacity-60" />

                    <span className="absolute left-0 top-0 h-[18px] w-[2px] bg-accent" />
                    <span className="absolute left-0 top-0 h-[2px] w-[22px] bg-accent" />

                    <span className="absolute right-0 top-0 h-[18px] w-[2px] bg-purple" />
                    <span className="absolute right-0 top-0 h-[2px] w-[22px] bg-purple" />

                    <span className="absolute bottom-0 right-0 h-[18px] w-[2px] bg-green" />
                    <span className="absolute bottom-0 right-0 h-[2px] w-[22px] bg-green" />

                    <span className="relative z-10 text-[13px] font-semibold">
                      {status === "submitting" ? "Sending..." : "Start the conversation"}
                    </span>

                    {status === "submitting" ? (
                      <span className="relative z-10 h-4 w-4 animate-spin border-2 border-white/25 border-t-white" />
                    ) : (
                      <FiArrowUpRight className="relative z-10 text-[16px] transition-transform duration-150 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export { ContactPage };