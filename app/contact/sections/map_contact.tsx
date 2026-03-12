export default function MapContact() {
  return (
    <section className="w-full bg-[#f5f2ee]">
      <div className="border-b border-[#1a1a1a]/10 border-t px-8 py-4 flex items-center gap-4">
        <span className="font-display text-[10px] tracking-[0.4em] text-[#1a1a1a]/40">
          03
        </span>
        <div className="w-8 h-px bg-[#1a1a1a]/30" />
        <span className="font-display text-[10px] tracking-[0.4em] text-[#1a1a1a]/40">
          FIND US
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Address info */}
        <div className="lg:col-span-4 flex flex-col justify-center px-8 py-16 gap-8 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]/10">
          <h3
            className="font-display text-[#1a1a1a] leading-none"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            VISIT
            <br />
            OUR FACILITY.
          </h3>

          <div className="flex flex-col gap-6">
            {[
              {
                label: "ADDRESS",
                lines: ["123 Grit Avenue", "Performance City, ST 00000"],
              },
              {
                label: "HOURS",
                lines: ["Mon–Fri: 6am–9pm", "Sat: 7am–5pm", "Sun: Closed"],
              },
              {
                label: "CONTACT",
                lines: ["+1 (555) 000-0000", "info@gritperformance.com"],
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="font-display text-[9px] tracking-widest text-[#1a1a1a]/30 border-b border-[#1a1a1a]/10 pb-2">
                  {item.label}
                </span>
                {item.lines.map((line, j) => (
                  <span key={j} className="font-body text-[#1a1a1a]/60 text-xs">
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-8 relative min-h-100">
          {/* Vintage frame overlay */}
          <div className="absolute inset-3 border border-[#1a1a1a]/10 pointer-events-none z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043099761!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="min-h-100"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
