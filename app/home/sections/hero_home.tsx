"use client";

import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative w-full min-h-screen bg-[#f5f2ee] overflow-hidden flex flex-col">
      {/* Vintage grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top label bar */}
      <div className="relative z-10 border-b border-[#1a1a1a]/10 px-8 py-3 flex items-center justify-between">
        <span className="font-display text-[10px] tracking-[0.4em] text-[#1a1a1a]/40">
          EST. 2014 — GRIT DIGITAL PERFORMANCE
        </span>
        <span className="font-display text-[10px] tracking-[0.4em] text-[#1a1a1a]/40">
          SPRING 2026
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-12 gap-0 py-12">
        {/* Left — Big headline */}
        <div className="lg:col-span-7 flex flex-col justify-between py-8">
          {/* Category stamp */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#1a1a1a]/30" />
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/50">
              PERFORMANCE TRAINING
            </span>
          </div>

          {/* Giant headline */}
          <div>
            <h1
              className="font-display text-[#1a1a1a] leading-none tracking-tight"
              style={{ fontSize: "clamp(4rem, 11vw, 10rem)" }}
            >
              GRIT
              <br />
              <span className="relative inline-block">
                DIGITAL
                {/* Underline stroke */}
                <span className="absolute -bottom-2 left-0 right-0 h-0.75 bg-[#1a1a1a]" />
              </span>
              <br />
              SPORTS
            </h1>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between mt-12 gap-6">
            <p className="font-body text-[#1a1a1a]/50 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Built for athletes who refuse to
              settle.
            </p>
            <a
              href="/register"
              className="relative shrink-0 font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-8 py-4 hover:bg-[#b01730] transition-colors duration-200"
            >
              REGISTER NOW
              <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
              <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
              <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
            </a>
          </div>
        </div>

        {/* Right — Image + stats */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-8 lg:border-l border-[#1a1a1a]/10">
          {/* Main image */}
          <div className="relative flex-1 min-h-100 overflow-hidden bg-[#1a1a1a]/5">
            <Image
              src="/placeholders/player1.png"
              alt="Athlete"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Vintage border frame */}
            <div className="absolute inset-2 border border-[#1a1a1a]/20 pointer-events-none" />

            {/* Season stamp */}
            <div className="absolute bottom-4 left-4 bg-[#1a1a1a] px-4 py-2">
              <span className="font-display text-white text-xs tracking-widest">
                SPRING '26
              </span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {[
              { value: "500+", label: "Athletes" },
              { value: "12+", label: "Programs" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f5f2ee] px-4 py-4 text-center">
                <p className="font-display text-[#1a1a1a] text-2xl leading-none mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-[#1a1a1a]/40 text-[10px] tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-[#1a1a1a]/10 py-3 overflow-hidden bg-[#1a1a1a]">
        <div
          className="flex gap-12 whitespace-nowrap w-max"
          style={{ animation: "ticker 25s linear infinite" }}
        >
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="font-display text-xs tracking-[0.3em] text-white/50 shrink-0"
              >
                {i % 2 === 0 ? "GRIT DIGITAL PERFORMANCE" : "◆"}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
