const offers = [
  {
    number: "01",
    title: "SPEED & AGILITY",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer1.png",
    tag: "ALL AGES",
  },
  {
    number: "02",
    title: "STRENGTH TRAINING",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer2.jpg",
    tag: "14U+",
  },
  {
    number: "03",
    title: "MENTAL STRENGTH",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer3.jpg",
    tag: "ALL AGES",
  },
  {
    number: "04",
    title: "TEAM PROGRAMS",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer4.jpg",
    tag: "TEAMS",
  },
];

export default function OfferHome() {
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
              WHAT WE OFFER
            </h2>
          </div>
          <a
            href="/programs"
            className="font-display text-xs tracking-widest text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors border-b border-[#1a1a1a]/20 pb-0.5"
          >
            ALL PROGRAMS →
          </a>
        </div>

        {/* Offers — horizontal list style */}
        <div className="flex flex-col">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-12 border-b border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 transition-colors duration-300 cursor-pointer"
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-center px-0 py-8 md:py-0">
                <span
                  className="font-display text-[#1a1a1a]/20 group-hover:text-[#1a1a1a]/40 transition-colors duration-300"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  {offer.number}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-2 py-4">
                <div
                  className="w-full h-56 md:h-32 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 overflow-hidden"
                  style={{ backgroundImage: `url(${offer.image})` }}
                />
              </div>

              {/* Title */}
              <div className="md:col-span-4 flex items-center px-0 md:px-8 py-4 md:py-0">
                <h3
                  className="font-display text-[#1a1a1a] leading-none group-hover:text-[#1a1a1a] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
                >
                  {offer.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-4 flex items-center py-4 md:py-0">
                <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Tag + arrow */}
              <div className="md:col-span-1 flex items-center justify-end py-4 md:py-0 gap-4">
                <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30 hidden lg:block">
                  {offer.tag}
                </span>
                <span className="font-display text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] transition-colors duration-300 text-lg">
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
