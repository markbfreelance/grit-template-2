import Image from "next/image";

const stats = [
  { value: "500+", label: "Athletes Trained" },
  { value: "12+", label: "Programs Offered" },
  { value: "98%", label: "Athlete Satisfaction" },
];

export default function MissionHome() {
  return (
    <section className="w-full bg-[#1a1a1a] overflow-hidden">
      {/* Section label */}
      <div className="border-b border-white/10 px-8 py-4 flex items-center gap-4">
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          03
        </span>
        <div className="w-8 h-px bg-white/20" />
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          OUR MISSION
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Content */}
        <div className="flex flex-col justify-center px-8 py-20 gap-8 lg:border-r border-white/10">
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            WE DON'T
            <br />
            JUST TRAIN.
            <br />
            WE FORGE
            <br />
            CHAMPIONS.
          </h2>

          <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa cum sociis natoque
            penatibus.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Elite 1-on-1 & group coaching sessions",
              "Science-backed performance methodology",
              "Mental toughness & leadership development",
              "Year-round programming for all skill levels",
            ].map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-body text-white/60 text-sm"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 mt-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#1a1a1a] px-4 py-6 text-center">
                <p className="font-display text-white text-2xl leading-none mb-1">
                  {s.value}
                </p>
                <p className="font-body text-white/30 text-[9px] tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative min-h-125 overflow-hidden">
          <Image
            src="/placeholders/player1.png"
            alt="Player"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/60 to-transparent" />

          {/* Vintage frame */}
          <div className="absolute inset-4 border border-white/10 pointer-events-none" />

          {/* Year stamp */}
          <div className="absolute bottom-8 right-8 text-right">
            <p
              className="font-display text-white/10 leading-none"
              style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
            >
              '26
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
