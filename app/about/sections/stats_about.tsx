const stats = [
  { value: "500+", label: "Athletes Trained" },
  { value: "12+", label: "Programs Offered" },
  { value: "98%", label: "Athlete Satisfaction" },
  { value: "10+", label: "Years of Excellence" },
];

export default function StatsAbout() {
  return (
    <section className="w-full bg-[#f5f2ee] border-b border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#f5f2ee] px-8 py-12 flex flex-col gap-2"
            >
              <p
                className="font-display text-[#1a1a1a] leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                {stat.value}
              </p>
              <div className="w-8 h-px bg-[#1a1a1a]/20" />
              <p className="font-body text-[#1a1a1a]/40 text-xs tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
