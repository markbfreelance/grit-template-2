const values = [
  {
    number: "01",
    title: "GRIT OVER GLORY",
    description:
      "We believe the grind matters more than the spotlight. Every rep, every drill, every early morning builds the foundation of a champion.",
  },
  {
    number: "02",
    title: "ATHLETE FIRST",
    description:
      "Every decision we make starts with the athlete. Programs, coaching, environment — all designed around your development.",
  },
  {
    number: "03",
    title: "ELITE STANDARDS",
    description:
      "We don't settle for average and neither should you. Our coaches hold every athlete to the highest standard because that's what it takes.",
  },
  {
    number: "04",
    title: "COMMUNITY & CHARACTER",
    description:
      "Champions aren't just built in the gym. We develop leaders, teammates, and people of strong character on and off the field.",
  },
];

export default function ValuesAbout() {
  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
              03
            </span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">
              OUR VALUES
            </h2>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-[#1a1a1a]/10">
          {values.map((value, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 hover:bg-[#1a1a1a]/5 transition-colors duration-300 cursor-pointer px-0"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-display text-[#1a1a1a]/20 group-hover:text-[#1a1a1a]/50 transition-colors duration-300 text-4xl">
                  {value.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3
                  className="font-display text-[#1a1a1a] leading-none"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex items-center justify-end">
                <span className="font-display text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] transition-colors duration-300 text-xl">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
