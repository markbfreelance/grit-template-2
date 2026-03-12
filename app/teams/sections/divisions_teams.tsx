const divisions = [
  {
    age: "KINDER — 6U",
    label: "LITTLE GRINDERS",
    number: "01",
    description:
      "Introduction to team sports and movement. Fun-first environment focused on building love for the game.",
    focus: ["Coordination", "Fun & play", "Basic rules", "Teamwork"],
    spots: "12 spots per team",
  },
  {
    age: "8U — 10U",
    label: "FUTURE ELITE",
    number: "02",
    description:
      "Athletes begin developing real skills and competitive instincts in a supportive team environment.",
    focus: ["Fundamentals", "Position intro", "Agility", "Competition"],
    spots: "14 spots per team",
  },
  {
    age: "12U — 14U",
    label: "DEVELOPING ELITE",
    number: "03",
    description:
      "The bridge between youth and competitive play. High-level skill development and team systems.",
    focus: ["Team systems", "Strength intro", "Film review", "Leadership"],
    spots: "16 spots per team",
  },
  {
    age: "16U — 18U",
    label: "GRIT ELITE",
    number: "04",
    description:
      "Our flagship competitive division. Built for athletes serious about playing at the next level.",
    focus: [
      "Elite training",
      "Recruiting support",
      "Film study",
      "College prep",
    ],
    spots: "18 spots per team",
  },
];

export default function DivisionsTeams() {
  return (
    <section className="w-full bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
              03
            </span>
            <div className="w-8 h-px bg-white/20" />
            <h2 className="font-display text-white text-2xl tracking-tight">
              AGE DIVISIONS
            </h2>
          </div>
        </div>

        {/* Divisions — horizontal rows */}
        <div className="flex flex-col divide-y divide-white/10">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 hover:bg-white/5 transition-colors duration-300 cursor-pointer py-10"
            >
              {/* Number */}
              <div className="hidden lg:flex lg:col-span-1 items-start pt-1">
                <span className="font-display text-white/10 group-hover:text-white/30 transition-colors duration-300 text-4xl leading-none">
                  {div.number}
                </span>
              </div>

              {/* Age badge + label */}
              <div className="lg:col-span-3 flex flex-col gap-3 mb-4 lg:mb-0">
                <div className="self-start bg-[#f5f2ee] px-3 py-1">
                  <span className="font-display text-[#1a1a1a] text-[9px] tracking-widest">
                    {div.age}
                  </span>
                </div>
                <h3
                  className="font-display text-white leading-none group-hover:opacity-70 transition-opacity duration-300"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  {div.label}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4 flex items-center lg:px-8 mb-4 lg:mb-0">
                <p className="font-body text-white/40 text-sm leading-relaxed">
                  {div.description}
                </p>
              </div>

              {/* Focus areas */}
              <div className="lg:col-span-3 flex flex-col justify-center gap-2 lg:px-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0">
                {div.focus.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="font-display text-white/20 text-xs">
                      —
                    </span>
                    <span className="font-body text-white/40 text-xs">{f}</span>
                  </div>
                ))}
                <p className="font-display text-[9px] tracking-widest text-white/20 mt-2">
                  {div.spots}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-end">
                <span className="font-display text-white/20 group-hover:text-white transition-colors duration-300 text-lg">
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
