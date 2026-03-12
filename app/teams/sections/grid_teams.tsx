"use client";

import { useState } from "react";
import Image from "next/image";

const teams = [
  {
    name: "GRIT ELITE 18U",
    division: "18U",
    season: "SPRING 2026",
    record: "12 — 3",
    players: 18,
    coach: "COACH DREW",
    status: "ACTIVE",
    image: "/placeholders/offer1.png",
    coachImage: "/placeholders/coach3.png",
    number: "01",
  },
  {
    name: "GRIT ELITE 16U",
    division: "16U",
    season: "SPRING 2026",
    record: "9 — 4",
    players: 16,
    coach: "COACH JORDAN",
    status: "ACTIVE",
    image: "/placeholders/offer2.jpg",
    coachImage: "/placeholders/coach2.png",
    number: "02",
  },
  {
    name: "GRIT ELITE 14U",
    division: "14U",
    season: "SPRING 2026",
    record: "11 — 2",
    players: 15,
    coach: "COACH PHIL",
    status: "ACTIVE",
    image: "/placeholders/offer3.jpg",
    coachImage: "/placeholders/coach1.png",
    number: "03",
  },
  {
    name: "GRIT ELITE 12U",
    division: "12U",
    season: "SPRING 2026",
    record: "8 — 5",
    players: 14,
    coach: "COACH ISAIAH",
    status: "ACTIVE",
    image: "/placeholders/offer4.jpg",
    coachImage: "/placeholders/coach4.png",
    number: "04",
  },
  {
    name: "GRIT FUTURE 10U",
    division: "10U",
    season: "SPRING 2026",
    record: "7 — 3",
    players: 12,
    coach: "COACH PHIL",
    status: "ACTIVE",
    image: "/placeholders/offer1.png",
    coachImage: "/placeholders/coach1.png",
    number: "05",
  },
  {
    name: "GRIT FUTURE 8U",
    division: "8U",
    season: "SPRING 2026",
    record: "6 — 4",
    players: 12,
    coach: "COACH ISAIAH",
    status: "RECRUITING",
    image: "/placeholders/offer2.jpg",
    coachImage: "/placeholders/coach4.png",
    number: "06",
  },
];

const filters = ["ALL", "18U", "16U", "14U", "12U", "10U", "8U"];

export default function GridTeams() {
  const [active, setActive] = useState("ALL");
  const filtered =
    active === "ALL" ? teams : teams.filter((t) => t.division === active);

  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#1a1a1a]/10 pb-8">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
              02
            </span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">
              ALL TEAMS
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-display text-[10px] tracking-widest px-4 py-2 border transition-all duration-200 ${
                  active === f
                    ? "bg-[#1a1a1a] border-[#1a1a1a] text-white"
                    : "border-[#1a1a1a]/20 text-[#1a1a1a]/40 hover:border-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Teams list */}
        <div className="flex flex-col">
          {filtered.map((team, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 border-b border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5 transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <div className="hidden lg:flex lg:col-span-1 items-center py-8">
                <span className="font-display text-[#1a1a1a]/15 group-hover:text-[#1a1a1a]/40 transition-colors duration-300 text-3xl">
                  {team.number}
                </span>
              </div>

              {/* Image */}
              <div className="lg:col-span-2 flex items-center py-4 lg:py-6">
                <div className="relative w-full h-24 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${team.image})` }}
                  />
                  {/* Division badge */}
                  <div className="absolute top-2 left-2 bg-[#1a1a1a] px-2 py-0.5">
                    <span className="font-display text-white text-[8px] tracking-widest">
                      {team.division}
                    </span>
                  </div>
                </div>
              </div>

              {/* Team name */}
              <div className="lg:col-span-3 flex flex-col justify-center px-0 lg:px-8 py-4 lg:py-6 gap-1">
                <p className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30">
                  {team.season}
                </p>
                <h3
                  className="font-display text-[#1a1a1a] leading-none group-hover:opacity-70 transition-opacity duration-300"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
                >
                  {team.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30">
                    {team.players} ATHLETES
                  </span>
                  {team.status === "RECRUITING" && (
                    <span className="font-display text-[8px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/30 px-1.5 py-0.5">
                      RECRUITING
                    </span>
                  )}
                </div>
              </div>

              {/* Record */}
              <div className="lg:col-span-3 flex items-center py-4 lg:py-6 gap-8 border-t lg:border-t-0 lg:border-l border-[#1a1a1a]/10 lg:px-8">
                <div>
                  <p className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30 mb-1">
                    RECORD
                  </p>
                  <p className="font-display text-[#1a1a1a] text-xl leading-none">
                    {team.record}
                  </p>
                </div>
                <div className="w-px h-8 bg-[#1a1a1a]/10" />
                <div>
                  <p className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30 mb-1">
                    DIVISION
                  </p>
                  <p className="font-display text-[#1a1a1a] text-xl leading-none">
                    {team.division}
                  </p>
                </div>
              </div>

              {/* Coach */}
              <div className="lg:col-span-3 flex items-center justify-between py-4 lg:py-6 border-t lg:border-t-0 lg:border-l border-[#1a1a1a]/10 lg:px-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 overflow-hidden rounded-full border border-[#1a1a1a]/20">
                    <Image
                      src={team.coachImage}
                      alt={team.coach}
                      fill
                      className="object-cover object-top grayscale"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30">
                      COACH
                    </p>
                    <p className="font-display text-[#1a1a1a] text-xs tracking-wider">
                      {team.coach}
                    </p>
                  </div>
                </div>
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
