export default function CtaTeams() {
  return (
    <section className="w-full bg-[#f5f2ee] py-24 border-t border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
                04
              </span>
              <div className="w-8 h-px bg-[#1a1a1a]/30" />
              <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
                JOIN A TEAM
              </span>
            </div>
            <h2
              className="font-display text-[#1a1a1a] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              READY TO
              <br />
              JOIN A
              <br />
              <span className="relative inline-block">
                TEAM?
                <span className="absolute -bottom-2 left-0 right-0 h-0.75 bg-[#1a1a1a]" />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed">
              Spots fill fast. Register now to secure your place on a Grit team
              for Spring 2026.
            </p>
            <a
              href="/register"
              className="relative font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200 self-start"
            >
              REGISTER NOW
              <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
              <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
              <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
            </a>
            <a
              href="/contact"
              className="font-display text-xs tracking-widest text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors border-b border-[#1a1a1a]/20 pb-0.5 self-start"
            >
              CONTACT US →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
