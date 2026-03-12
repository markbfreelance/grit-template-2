import Image from "next/image";

const coaches = [
  {
    name: "COACH PHIL",
    role: "HEAD COACH — 8U-10U",
    image: "/placeholders/coach1.png",
    number: "01",
  },
  {
    name: "COACH JORDAN",
    role: "STRENGTH — 12U-14U",
    image: "/placeholders/coach2.png",
    number: "02",
  },
  {
    name: "COACH DREW",
    role: "SKILLS — 16U-18U",
    image: "/placeholders/coach3.png",
    number: "03",
  },
  {
    name: "COACH ISAIAH",
    role: "YOUTH — KINDER-6U",
    image: "/placeholders/coach4.png",
    number: "04",
  },
];

export default function CoachesHome() {
  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
              05
            </span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">
              OUR COACHES
            </h2>
          </div>
          <a
            href="/coaches"
            className="font-display text-xs tracking-widest text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors border-b border-[#1a1a1a]/20 pb-0.5"
          >
            VIEW ALL →
          </a>
        </div>

        {/* Coaches — editorial card grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
          {coaches.map((coach, i) => (
            <div
              key={i}
              className="group bg-[#f5f2ee] hover:bg-[#1a1a1a] transition-colors duration-500 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Vintage overlay */}
                <div className="absolute inset-0 bg-[#f5f2ee]/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />

                {/* Number stamp */}
                <div className="absolute top-3 right-3 w-8 h-8 border border-[#1a1a1a]/30 group-hover:border-white/30 flex items-center justify-center transition-colors duration-500">
                  <span className="font-display text-[10px] text-[#1a1a1a]/50 group-hover:text-white/50 transition-colors duration-500">
                    {coach.number}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 border-t border-[#1a1a1a]/10 group-hover:border-white/10 transition-colors duration-500">
                <h3 className="font-display text-[#1a1a1a] group-hover:text-white text-sm tracking-wider leading-none mb-1 transition-colors duration-500">
                  {coach.name}
                </h3>
                <p className="font-body text-[#1a1a1a]/40 group-hover:text-white/40 text-[10px] leading-relaxed transition-colors duration-500">
                  {coach.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
