"use client";

import { useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

export default function GoLiveForm() {
  const shouldReduce = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mkovalpz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    {
      id: "name",
      label: "Your Name",
      type: "text" as const,
      required: true,
      placeholder: "Jane Smith",
      colSpan: "sm:col-span-1",
    },
    {
      id: "email",
      label: "Your Email",
      type: "email" as const,
      required: true,
      placeholder: "jane@newsnetwork.com",
      colSpan: "sm:col-span-1",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <m.div
          key="success"
          variants={shouldReduce ? undefined : successVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col items-center justify-center text-center py-20 gap-6 bg-[#08202E] border border-[#C28B30]/30 px-8"
        >
          {/* Signal sent badge */}
          <div className="flex items-center gap-3 border border-[#C28B30]/60 px-6 py-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C28B30]" />
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#C28B30] font-mono">
              SIGNAL SENT
            </span>
          </div>

          <h3 className="font-display text-3xl font-bold text-white">Message Received</h3>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Thanks for reaching out. Every message is read personally — I&apos;ll be in touch soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs tracking-[0.25em] uppercase font-mono text-white/30 hover:text-white/70 transition-colors"
            data-cursor="hover-link"
          >
            Send Another Message
          </button>
        </m.div>
      ) : (
        <m.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fields.map((field, i) => (
              <m.div
                key={field.id}
                custom={i}
                variants={shouldReduce ? undefined : fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <label
                  htmlFor={field.id}
                  className="block text-xs font-semibold tracking-widest uppercase text-white/30 mb-2 font-mono"
                >
                  {field.label} *
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C28B30]/60 transition-colors"
                  data-cursor="hover-link"
                />
              </m.div>
            ))}
          </div>

          {/* Subject */}
          <m.div
            custom={2}
            variants={shouldReduce ? undefined : fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label
              htmlFor="subject"
              className="block text-xs font-semibold tracking-widest uppercase text-white/30 mb-2 font-mono"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-white/10 bg-[#0D2235] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C28B30]/60 transition-colors appearance-none"
              data-cursor="hover-link"
            >
              <option value="">Select a subject...</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Internship">Internship</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Media Inquiry">Media Inquiry</option>
              <option value="General">General Inquiry</option>
            </select>
          </m.div>

          {/* Message */}
          <m.div
            custom={3}
            variants={shouldReduce ? undefined : fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label
              htmlFor="message"
              className="block text-xs font-semibold tracking-widest uppercase text-white/30 mb-2 font-mono"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or what you have in mind..."
              className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C28B30]/60 transition-colors resize-none"
              data-cursor="hover-link"
            />
          </m.div>

          {status === "error" && (
            <p className="text-[#C53A32] text-sm">
              Something went wrong. Email directly at{" "}
              <a href="mailto:Mekhic602@gmail.com" className="underline">
                Mekhic602@gmail.com
              </a>
            </p>
          )}

          {/* GO LIVE button */}
          <m.div
            custom={4}
            variants={shouldReduce ? undefined : fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <m.button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#C53A32] hover:bg-[#D45850] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold tracking-[0.2em] uppercase text-sm transition-colors"
              whileHover={status !== "loading" ? { scale: 1.01 } : {}}
              whileTap={status !== "loading" ? { scale: 0.99 } : {}}
              data-cursor="hover-link"
            >
              {status === "loading" ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-white rec-dot" />
                  <span className="font-mono">BROADCASTING...</span>
                </>
              ) : (
                <span className="font-mono">GO LIVE</span>
              )}
            </m.button>
          </m.div>

          <m.p
            className="text-white/20 text-xs text-center font-mono"
            custom={5}
            variants={shouldReduce ? undefined : fieldVariants}
            initial="hidden"
            animate="visible"
          >
            or email directly:{" "}
            <a
              href="mailto:Mekhic602@gmail.com"
              className="text-[#C28B30]/60 hover:text-[#C28B30] transition-colors"
              data-cursor="hover-link"
            >
              Mekhic602@gmail.com
            </a>
          </m.p>
        </m.form>
      )}
    </AnimatePresence>
  );
}
