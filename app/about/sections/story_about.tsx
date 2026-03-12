import Image from "next/image";

export default function StoryAbout() {
  return (
    <section className="w-full bg-[#1a1a1a]">
      <div className="border-b border-white/10 px-8 py-4 flex items-center gap-4">
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          02
        </span>
        <div className="w-8 h-px bg-white/20" />
        <span className="font-display text-[10px] tracking-[0.4em] text-white/30">
          OUR STORY
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-125 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
          <Image
            src="/placeholders/player1.png"
            alt="Our Story"
            fill
            className="object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/30" />
          <div className="absolute inset-4 border border-white/10 pointer-events-none" />

          {/* Floating stat */}
          <div className="absolute bottom-8 left-8 bg-[#f5f2ee] px-6 py-4">
            <p className="font-display text-[#1a1a1a] text-3xl leading-none">
              10+
            </p>
            <p className="font-body text-[#1a1a1a]/50 text-xs tracking-widest mt-1">
              YEARS OF EXCELLENCE
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 gap-8">
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            MORE THAN
            <br />
            A TRAINING
            <br />
            PROGRAM.
          </h2>

          <p className="font-body text-white/50 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <p className="font-body text-white/50 text-sm leading-relaxed">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>

          <div className="border-t border-white/10 pt-6">
            <p className="font-body text-white/20 text-sm italic">
              "We don't just train athletes. We forge champions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
