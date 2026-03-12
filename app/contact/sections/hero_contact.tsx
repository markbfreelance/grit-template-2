export default function HeroContact() {
  return (
    <section className="relative w-full bg-[#f5f2ee] overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top label bar */}
      <div className="relative z-10 border-b border-[#1a1a1a]/10 px-8 py-3 flex items-center justify-between">
        <span className="font-display text-[10px] tracking-[0.4em] text-[#1a1a1a]/40">
          EST. 2014 — GRIT DIGITAL PERFORMANCE
        </span>
        <span className="font-display text-[10px] tracking-[0.4em] text-[#1a1a1a]/40">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
            01
          </span>
          <div className="w-8 h-px bg-[#1a1a1a]/30" />
          <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <h1
            className="font-display text-[#1a1a1a] leading-none"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
          >
            LET'S
            <br />
            <span className="relative inline-block">
              TALK.
              <span className="absolute -bottom-2 left-0 right-0 h-0.75 bg-[#1a1a1a]" />
            </span>
          </h1>

          <div className="flex flex-col gap-6 pb-2">
            <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
              Whether you have questions about programs, want to register your
              athlete, or just want to connect — our team is ready to help.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: "EMAIL", value: "info@gritperformance.com" },
                { label: "PHONE", value: "+1 (555) 000-0000" },
                {
                  label: "LOCATION",
                  value: "123 Grit Ave, Performance City, USA",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30 w-16 shrink-0">
                    {item.label}
                  </span>
                  <div className="w-4 h-px bg-[#1a1a1a]/20" />
                  <span className="font-body text-[#1a1a1a]/60 text-xs">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
