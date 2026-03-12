export default function HeroPrograms() {
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
          PROGRAMS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
            01
          </span>
          <div className="w-8 h-px bg-[#1a1a1a]/30" />
          <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
            WHAT WE OFFER
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 items-end">
          <h1
            className="font-display text-[#1a1a1a] leading-none"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
          >
            OUR
            <br />
            <span className="relative inline-block">
              PROGRAMS.
              <span className="absolute -bottom-2 left-0 right-0 h-0.75 bg-[#1a1a1a]" />
            </span>
          </h1>

          <div className="flex flex-col gap-6 pb-2 max-w-3xl">
            <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
              Every program at Grit is built with one goal in mind — developing
              complete athletes who perform at the highest level on and off the
              field.
            </p>
            <div className="flex items-center gap-6">
              {[
                { value: "6+", label: "Programs" },
                { value: "4", label: "Age Groups" },
                { value: "500+", label: "Athletes" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-display text-[#1a1a1a] text-2xl leading-none">
                    {s.value}
                  </span>
                  <span className="font-body text-[#1a1a1a]/40 text-[10px] tracking-widest">
                    {s.label}
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
