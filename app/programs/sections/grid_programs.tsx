const programs = [
  {
    number: "01",
    title: "SPEED & AGILITY",
    tag: "ALL AGES",
    duration: "8 WEEKS",
    sessions: "3X / WEEK",
    description:
      "Build explosive first-step quickness, lateral speed, and elite agility through proven drills and progressive overload.",
    image: "/placeholders/offer1.png",
    featured: true,
  },
  {
    number: "02",
    title: "STRENGTH & POWER",
    tag: "14U+",
    duration: "10 WEEKS",
    sessions: "4X / WEEK",
    description:
      "Science-backed strength programming designed to build functional power without sacrificing athleticism.",
    image: "/placeholders/offer2.jpg",
    featured: false,
  },
  {
    number: "03",
    title: "MENTAL PERFORMANCE",
    tag: "ALL AGES",
    duration: "6 WEEKS",
    sessions: "2X / WEEK",
    description:
      "Train your mind like you train your body. Focus, confidence, and composure under pressure.",
    image: "/placeholders/offer3.jpg",
    featured: false,
  },
  {
    number: "04",
    title: "ELITE TEAM CAMP",
    tag: "TEAM",
    duration: "5 DAYS",
    sessions: "INTENSIVE",
    description:
      "A full-immersion team camp experience built around chemistry, communication, and competitive excellence.",
    image: "/placeholders/offer4.jpg",
    featured: false,
  },
  {
    number: "05",
    title: "SKILLS & TECHNIQUE",
    tag: "ALL AGES",
    duration: "8 WEEKS",
    sessions: "3X / WEEK",
    description:
      "Position-specific skills work focused on technique refinement, lacrosse IQ, and game-speed execution.",
    image: "/placeholders/offer1.png",
    featured: false,
  },
  {
    number: "06",
    title: "YEAR-ROUND ELITE",
    tag: "16U+",
    duration: "12 MONTHS",
    sessions: "5X / WEEK",
    description:
      "Our flagship program. Full-year development across speed, strength, skills, and mental performance.",
    image: "/placeholders/offer2.jpg",
    featured: false,
  },
];

export default function GridPrograms() {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
              02
            </span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">
              ALL PROGRAMS
            </h2>
          </div>
        </div>

        {/* Featured — split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#1a1a1a]/10">
          {/* Image */}
          <div className="relative h-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1a1a1a]/10">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className="absolute inset-0 bg-[#f5f2ee]/10" />
            <div className="absolute inset-4 border border-[#1a1a1a]/10 pointer-events-none" />

            {/* Featured stamp */}
            <div className="absolute top-6 left-6 bg-[#1a1a1a] px-4 py-2">
              <span className="font-display text-white text-[9px] tracking-widest">
                FEATURED
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-10 lg:p-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="font-display text-[#1a1a1a]/20 text-5xl leading-none">
                  {featured.number}
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/40 border border-[#1a1a1a]/20 px-2 py-0.5">
                      {featured.tag}
                    </span>
                    <span className="font-body text-[10px] text-[#1a1a1a]/30">
                      {featured.duration}
                    </span>
                    <span className="font-body text-[10px] text-[#1a1a1a]/30">
                      {featured.sessions}
                    </span>
                  </div>
                </div>
              </div>

              <h3
                className="font-display text-[#1a1a1a] leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {featured.title}
              </h3>

              <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
                {featured.description}
              </p>
            </div>

            <a
              href="/register"
              className="relative font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200 self-start mt-8"
            >
              REGISTER NOW
              <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
              <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
              <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
            </a>
          </div>
        </div>

        {/* Rest — horizontal list rows */}
        <div className="flex flex-col">
          {rest.map((program, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-12 border-b border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 transition-colors duration-300 cursor-pointer"
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-center py-8">
                <span className="font-display text-[#1a1a1a]/20 group-hover:text-[#1a1a1a]/50 transition-colors duration-300 text-3xl">
                  {program.number}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-2 flex items-center py-4">
                <div
                  className="w-full h-20 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
              </div>

              {/* Title */}
              <div className="md:col-span-3 flex items-center px-8 py-4">
                <h3
                  className="font-display text-[#1a1a1a] leading-none"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  {program.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-4 flex items-center py-4">
                <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed line-clamp-2">
                  {program.description}
                </p>
              </div>

              {/* Meta + arrow */}
              <div className="md:col-span-2 flex items-center justify-end gap-4 py-4">
                <div className="hidden lg:flex flex-col items-end gap-1">
                  <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30">
                    {program.duration}
                  </span>
                  <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30">
                    {program.tag}
                  </span>
                </div>
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
