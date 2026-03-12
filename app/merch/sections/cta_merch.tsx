export default function CtaMerch() {
  return (
    <section className="w-full bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
                04
              </span>
              <div className="w-8 h-px bg-white/20" />
              <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
                TEAM ORDERS
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              OUTFIT
              <br />
              YOUR
              <br />
              <span className="relative inline-block">
                WHOLE TEAM.
                <span className="absolute -bottom-2 left-0 right-0 h-0.75 bg-white/20" />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="font-body text-white/40 text-sm leading-relaxed">
              Bulk team orders available with custom embroidery and branding.
              Contact us for wholesale pricing.
            </p>
            <a
              href="/contact"
              className="relative font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200 self-start"
            >
              CONTACT FOR ORDERS
              <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
              <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
              <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
            </a>
            <a
              href="/merch"
              className="font-display text-xs tracking-widest text-white/30 hover:text-white transition-colors border-b border-white/10 pb-0.5 self-start"
            >
              BROWSE ALL MERCH →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
