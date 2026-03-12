import Image from "next/image";

const team = [
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

export default function TeamAbout() {
  return (
    <section className="w-full bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
              04
            </span>
            <div className="w-8 h-px bg-white/20" />
            <h2 className="font-display text-white text-2xl tracking-tight">
              MEET THE TEAM
            </h2>
          </div>
          <a
            href="/coaches"
            className="font-display text-xs tracking-widest text-white/30 hover:text-white transition-colors border-b border-white/20 pb-0.5"
          >
            ALL COACHES →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-0">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-[#1a1a1a] hover:bg-[#f5f2ee] transition-colors duration-500 cursor-pointer"
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/20 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-3 border border-white/10 group-hover:border-[#1a1a1a]/20 pointer-events-none transition-colors duration-500" />

                <div className="absolute top-3 left-3 w-7 h-7 border border-white/20 group-hover:border-[#1a1a1a]/30 flex items-center justify-center transition-colors duration-500">
                  <span className="font-display text-[9px] text-white/40 group-hover:text-[#1a1a1a]/40 transition-colors duration-500">
                    {member.number}
                  </span>
                </div>
              </div>

              <div className="p-5 border-t border-white/10 group-hover:border-[#1a1a1a]/10 transition-colors duration-500">
                <h3 className="font-display text-white group-hover:text-[#1a1a1a] text-sm tracking-wider leading-none mb-1 transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="font-body text-white/40 group-hover:text-[#1a1a1a]/40 text-[10px] leading-relaxed transition-colors duration-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
