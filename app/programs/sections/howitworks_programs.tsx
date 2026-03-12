const steps = [
  {
    number: "01",
    title: "CHOOSE YOUR PROGRAM",
    description:
      "Browse our programs and find the one that fits your age group, goals, and schedule.",
  },
  {
    number: "02",
    title: "REGISTER & ENROLL",
    description:
      "Complete your registration online. Our team will confirm your spot and send you everything you need.",
  },
  {
    number: "03",
    title: "GET ASSESSED",
    description:
      "Every athlete starts with a baseline assessment so we can track your progress from day one.",
  },
  {
    number: "04",
    title: "TRAIN & DOMINATE",
    description:
      "Show up, put in the work, and watch your game transform under our elite coaching staff.",
  },
];

export default function HowItWorksPrograms() {
  return (
    <section className="w-full bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
              03
            </span>
            <div className="w-8 h-px bg-white/20" />
            <h2 className="font-display text-white text-2xl tracking-tight">
              HOW IT WORKS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-[#1a1a1a] hover:bg-[#f5f2ee] transition-colors duration-500 p-10 flex flex-col gap-6 cursor-pointer"
            >
              <span
                className="font-display text-white/10 group-hover:text-[#1a1a1a]/10 leading-none transition-colors duration-500"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                {step.number}
              </span>

              <div className="w-8 h-px bg-white/20 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500" />

              <h3 className="font-display text-white group-hover:text-[#1a1a1a] text-sm tracking-wider leading-tight transition-colors duration-500">
                {step.title}
              </h3>

              <p className="font-body text-white/40 group-hover:text-[#1a1a1a]/50 text-xs leading-relaxed transition-colors duration-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
