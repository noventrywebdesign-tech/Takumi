import Hero from "@/components/sections/Hero";
import RamenAusSapporo from "@/components/sections/RamenAusSapporo";
import BowlIsHero from "@/components/sections/BowlIsHero";
import NoRamenNoLife from "@/components/sections/NoRamenNoLife";
import Menu from "@/components/sections/Menu";
import DortmundJapan from "@/components/sections/DortmundJapan";
import Itadakimasu from "@/components/sections/Itadakimasu";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Reviews from "@/components/sections/Reviews";
import RamenAtHome from "@/components/sections/RamenAtHome";
import Anfahrt from "@/components/sections/Anfahrt";

export default function Home() {
  return (
    <main>
      <Hero />
      <RamenAusSapporo />
      <BowlIsHero />
      <NoRamenNoLife />
      <Menu />
      <DortmundJapan />
      <Itadakimasu />
      <InstagramGallery />
      <Reviews />
      <RamenAtHome />
      <Anfahrt />
    </main>
  );
}
