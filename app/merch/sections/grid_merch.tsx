const products = [
  {
    name: "GRIT ELITE TEE",
    category: "T-SHIRT",
    price: "$34.99",
    image: "/placeholders/offer2.jpg",
    tag: "BESTSELLER",
  },
  {
    name: "PERFORMANCE SHORTS",
    category: "SHORTS",
    price: "$44.99",
    image: "/placeholders/offer3.jpg",
    tag: "NEW",
  },
  {
    name: "GRIT SNAPBACK",
    category: "HEADWEAR",
    price: "$29.99",
    image: "/placeholders/offer4.jpg",
    tag: null,
  },
  {
    name: "TRAINING JOGGERS",
    category: "PANTS",
    price: "$59.99",
    image: "/placeholders/offer1.png",
    tag: "NEW",
  },
  {
    name: "GRIT QUARTER-ZIP",
    category: "OUTERWEAR",
    price: "$74.99",
    image: "/placeholders/offer2.jpg",
    tag: null,
  },
  {
    name: "COMPRESSION LONG SLEEVE",
    category: "TOPS",
    price: "$39.99",
    image: "/placeholders/offer3.jpg",
    tag: "BESTSELLER",
  },
];

export default function GridMerch() {
  return (
    <section className="w-full bg-[#f5f2ee] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <span className="font-display text-xs tracking-[0.4em] text-[#1a1a1a]/40">
              03
            </span>
            <div className="w-8 h-px bg-[#1a1a1a]/30" />
            <h2 className="font-display text-[#1a1a1a] text-2xl tracking-tight">
              ALL PRODUCTS
            </h2>
          </div>
          <span className="font-body text-xs text-[#1a1a1a]/30">
            {products.length} ITEMS
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10">
          {products.map((product, i) => (
            <div
              key={i}
              className="group bg-[#f5f2ee] cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-[#f5f2ee]/10 group-hover:opacity-0 transition-opacity duration-500" />

                {/* Vintage frame */}
                <div className="absolute inset-3 border border-[#1a1a1a]/10 pointer-events-none" />

                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-[#1a1a1a] px-3 py-1">
                    <span className="font-display text-white text-[9px] tracking-widest">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick shop overlay */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="relative font-display text-[10px] tracking-widest text-white bg-[#DA1D3A] px-6 py-2.5 hover:bg-[#b01730] transition-colors duration-200">
                    QUICK SHOP
                    <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-white/30" />
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-white/30" />
                    <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-white/30" />
                    <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-white/30" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 border-t border-[#1a1a1a]/10 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-body text-[#1a1a1a]/30 text-[9px] tracking-widest">
                    {product.category}
                  </p>
                  <h3 className="font-display text-[#1a1a1a] text-sm tracking-wide leading-none">
                    {product.name}
                  </h3>
                </div>
                <span className="font-display text-[#1a1a1a] text-sm">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
