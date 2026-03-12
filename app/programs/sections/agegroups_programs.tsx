const groups = [
  {
    age: "KINDER — 6U",
    title: "LITTLE GRINDERS",
    description:
      "Fun-first fundamentals. We introduce young athletes to movement, coordination, and the love of sport.",
    features: [
      "Basic motor skills",
      "Fun & games-based",
      "Confidence building",
      "Team interaction",
    ],
    image: "/placeholders/offer3.jpg",
    number: "01",
  },
  {
    age: "8U — 10U",
    title: "JUNIOR ATHLETES",
    description:
      "Start building real athletic habits. Speed, agility, and sport-specific skills at the right intensity.",
    features: [
      "Speed fundamentals",
      "Agility ladders",
      "Sport intro skills",
      "Character development",
    ],
    image: "/placeholders/offer4.jpg",
    number: "02",
  },
  {
    age: "12U — 14U",
    title: "DEVELOPING ATHLETES",
    description:
      "The critical window. We accelerate development with structured programming across speed, strength, and skills.",
    features: [
      "Strength intro",
      "Position skills",
      "Competition prep",
      "Mental performance",
    ],
    image: "/placeholders/offer1.png",
    number: "03",
  },
  {
    age: "16U — 18U",
    title: "ELITE ATHLETES",
    description:
      "Prepare for the next level. High-intensity training for athletes serious about collegiate and professional pursuits.",
    features: [
      "Elite strength",
      "Film & IQ sessions",
      "Recruiting prep",
      "Leadership training",
    ],
    image: "/placeholders/offer2.jpg",
    number: "04",
  },
];

export default function AgeGroupsPrograms() {
  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
              04
            </span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">
              AGE GROUPS
            </h2>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-[#1a1a1a]/10">
          {groups.map((group, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 hover:bg-[#1a1a1a]/5 transition-colors duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="lg:col-span-3 relative h-50 lg:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url(${group.image})` }}
                />
                <div className="absolute inset-0 bg-[#f5f2ee]/20 group-hover:opacity-0 transition-opacity duration-500" />

                {/* Age badge */}
                <div className="absolute top-4 left-4 bg-[#1a1a1a] px-3 py-1">
                  <span className="font-display text-white text-[9px] tracking-widest">
                    {group.age}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-4">
                  <span className="font-display text-white/20 text-4xl leading-none">
                    {group.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 flex flex-col justify-center px-8 lg:px-12 py-10 border-t lg:border-t-0 lg:border-l border-[#1a1a1a]/10 gap-4">
                <h3
                  className="font-display text-[#1a1a1a] leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
                >
                  {group.title}
                </h3>
                <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-3 flex flex-col justify-center px-8 py-10 border-t lg:border-t-0 lg:border-l border-[#1a1a1a]/10 gap-3">
                {group.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="font-display text-[#1a1a1a]/20 text-xs">
                      —
                    </span>
                    <span className="font-body text-[#1a1a1a]/50 text-xs">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
