"use client";

import { useState } from "react";
import Image from "next/image";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function FeaturedMerch() {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <section className="w-full bg-[#1a1a1a]">
      <div className="border-b border-white/10 px-8 py-4 flex items-center gap-4">
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          02
        </span>
        <div className="w-8 h-px bg-white/20" />
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          FEATURED DROP
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-125 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
          <Image
            src="/placeholders/offer1.png"
            alt="Featured Product"
            fill
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/20" />
          <div className="absolute inset-4 border border-white/10 pointer-events-none" />

          {/* NEW badge */}
          <div className="absolute top-6 left-6 bg-[#f5f2ee] px-4 py-2">
            <span className="font-display text-[#1a1a1a] text-[9px] tracking-widest">
              NEW DROP
            </span>
          </div>

          {/* Edition stamp */}
          <div className="absolute bottom-6 right-6">
            <p
              className="font-display text-white/10 leading-none text-right"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
            >
              '26
            </p>
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col justify-between px-8 lg:px-16 py-16 gap-8">
          <div className="flex flex-col gap-6">
            {/* Category + price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-display text-[9px] tracking-widest text-white/40 border border-white/20 px-2 py-0.5">
                  HOODIE
                </span>
                <span className="font-body text-[10px] text-white/30">
                  SPRING 2026
                </span>
              </div>
              <span className="font-display text-white text-xl">$89.99</span>
            </div>

            {/* Name */}
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              GRIT ELITE
              <br />
              PULLOVER
            </h2>

            <p className="font-body text-white/40 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Heavyweight cotton blend. Embroidered Grit crest. Built for the
              grind and the stands.
            </p>

            {/* Size selector */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-display text-[9px] tracking-widest text-white/40">
                  SELECT SIZE
                </p>
                <span className="font-body text-[10px] text-white/20 underline cursor-pointer">
                  Size guide
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-display text-[10px] tracking-widest px-4 py-2.5 border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-[#f5f2ee] border-[#f5f2ee] text-[#1a1a1a]"
                        : "border-white/20 text-white/40 hover:border-white/60 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button className="relative font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-8 py-4 hover:bg-[#b01730] transition-colors duration-200">
              ADD TO CART
              <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
              <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
              <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
            </button>
            <button className="font-display text-xs tracking-widest text-white/40 border border-white/20 px-8 py-4 hover:border-white/60 hover:text-white transition-all duration-200">
              VIEW FULL DETAILS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
