import HeroMerch from "./sections/hero_merch";
import FeaturedMerch from "./sections/featured_merch";
import GridMerch from "./sections/grid_merch";
import CtaMerch from "./sections/cta_merch";

export default function MerchPage() {
  return (
    <main className="bg-[#f5f2ee]">
      <HeroMerch />
      <FeaturedMerch />
      <GridMerch />
      <CtaMerch />
    </main>
  );
}
