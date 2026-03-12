import HeroTeams from "./sections/hero_teams";
import GridTeams from "./sections/grid_teams";
import DivisionsTeams from "./sections/divisions_teams";
import CtaTeams from "./sections/cta_teams";

export default function TeamsPage() {
  return (
    <main className="bg-[#f5f2ee]">
      <HeroTeams />
      <GridTeams />
      <DivisionsTeams />
      <CtaTeams />
    </main>
  );
}
