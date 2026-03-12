"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Program Registration",
  "Team Programs",
  "Merch Order",
  "Media & Press",
  "Other",
];

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <section className="w-full bg-[#1a1a1a]">
      <div className="border-b border-white/10 px-8 py-4 flex items-center gap-4">
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          02
        </span>
        <div className="w-8 h-px bg-white/20" />
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          SEND A MESSAGE
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left — pull quote */}
        <div className="lg:col-span-4 flex flex-col justify-between px-8 py-16 border-b lg:border-b-0 lg:border-r border-white/10 gap-12">
          <div className="flex flex-col gap-6">
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              WE'D LOVE
              <br />
              TO HEAR
              <br />
              FROM YOU.
            </h2>
            <p className="font-body text-white/40 text-sm leading-relaxed">
              Fill out the form and a member of our team will get back to you
              within 24 hours.
            </p>
          </div>

          {/* Response time */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
            {[
              { label: "RESPONSE TIME", value: "Within 24hrs" },
              { label: "OFFICE HOURS", value: "Mon–Sat 8am–6pm" },
              { label: "LOCATION", value: "Performance City, USA" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display text-[9px] tracking-widest text-white/20">
                  {item.label}
                </span>
                <span className="font-body text-white/50 text-xs">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-8 px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-white/30">
                FULL NAME *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 font-display tracking-wide placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-white/30">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@email.com"
                className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 font-display tracking-wide placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-white/30">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+1 (555) 000-0000"
                className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 font-display tracking-wide placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-white/30">
                SUBJECT *
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="bg-[#1a1a1a] border border-white/10 text-white/50 text-sm px-4 py-3 font-display tracking-wide focus:outline-none focus:border-white/40 transition-colors duration-200 cursor-pointer"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-white/30">
                MESSAGE *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us how we can help..."
                rows={6}
                className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 font-display tracking-wide placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="button"
                className="relative font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-10 py-4 hover:bg-[#b01730] transition-colors duration-200"
              >
                SEND MESSAGE →
                <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
                <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
                <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
                <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
