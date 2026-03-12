const news = [
  {
    id: 1,
    tag: "ANNOUNCEMENT",
    date: "MAR 5, 2026",
    title: "GRIT OPENS NEW STATE-OF-THE-ART TRAINING FACILITY",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: "/placeholders/offer1.png",
    issue: "VOL. 12",
  },
  {
    id: 2,
    tag: "PROGRAM",
    date: "FEB 28, 2026",
    title: "SPRING SPEED CAMP NOW OPEN FOR REGISTRATION",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/placeholders/offer2.jpg",
    issue: "VOL. 11",
  },
  {
    id: 3,
    tag: "ATHLETE",
    date: "FEB 20, 2026",
    title: "ALUMNI SPOTLIGHT: FROM GRIT TO THE PROS",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/placeholders/offer3.jpg",
    issue: "VOL. 10",
  },
  {
    id: 4,
    tag: "TRAINING",
    date: "FEB 10, 2026",
    title: "WHY MENTAL REPS ARE AS IMPORTANT AS PHYSICAL ONES",
    excerpt: "Lorem ipsum dolor sit amet.",
    image: "/placeholders/offer4.jpg",
    issue: "VOL. 09",
  },
];

export default function NewsHome() {
  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">04</span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">LATEST NEWS</h2>
          </div>
          <a
            href="/news"
            className="font-display text-xs tracking-widest text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors border-b border-[#1a1a1a]/20 pb-0.5"
          >
            MORE NEWS
          </a>
        </div>

        {/* Magazine-style grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#1a1a1a]/10">

          {/* Featured — left, large */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]/10 py-10 pr-0 lg:pr-10 group cursor-pointer">
            <div
              className="w-full h-64 bg-cover bg-center mb-6 overflow-hidden relative"
              style={{ backgroundImage: `url(${news[0].image})` }}
            >
              <div className="absolute inset-0 bg-[#1a1a1a]/20 group-hover:bg-[#1a1a1a]/10 transition-colors duration-300" />
              {/* Vintage frame */}
              <div className="absolute inset-2 border border-white/20 pointer-events-none" />
              <div className="absolute top-4 left-4 bg-[#1a1a1a] px-3 py-1">
                <span className="font-display text-white text-[9px] tracking-widest">{news[0].issue}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/40 border border-[#1a1a1a]/20 px-2 py-0.5">
                {news[0].tag}
              </span>
              <span className="font-body text-[10px] text-[#1a1a1a]/30">{news[0].date}</span>
            </div>
            <h3
              className="font-display text-[#1a1a1a] leading-tight mb-3 group-hover:opacity-70 transition-opacity duration-300"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
            >
              {news[0].title}
            </h3>
            <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed mb-4">{news[0].excerpt}</p>
            <span className="font-display text-xs tracking-widest text-[#1a1a1a]/40 border-b border-[#1a1a1a]/20 pb-0.5">
              READ MORE →
            </span>
          </div>

          {/* Right — stacked list */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#1a1a1a]/10">
            {news.slice(1).map((item, i) => (
              <div
                key={item.id}
                className="group grid grid-cols-12 gap-6 py-8 px-0 lg:px-10 cursor-pointer hover:bg-[#1a1a1a]/5 transition-colors duration-300"
              >
                {/* Image */}
                <div className="col-span-3 relative overflow-hidden">
                  <div
                    className="w-full h-full min-h-20 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute top-1 left-1 bg-[#1a1a1a] px-2 py-0.5">
                    <span className="font-display text-white text-[8px] tracking-widest">{item.issue}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-9 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/40 border border-[#1a1a1a]/20 px-2 py-0.5">
                      {item.tag}
                    </span>
                    <span className="font-body text-[10px] text-[#1a1a1a]/30">{item.date}</span>
                  </div>
                  <h3 className="font-display text-[#1a1a1a] text-base leading-tight group-hover:opacity-70 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <span className="font-display text-[10px] tracking-widest text-[#1a1a1a]/30 border-b border-[#1a1a1a]/10 pb-0.5 self-start">
                    READ MORE →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}