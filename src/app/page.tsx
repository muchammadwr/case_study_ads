import HeroSectionFifth from "@/components/HeroSectionFifth";
import HeroSectionFirst from "@/components/HeroSectionFirst";
import HeroSectionForth from "@/components/HeroSectionForth";
import HeroSectionSecond from "@/components/HeroSectionSecond";
import HeroSectionThird from "@/components/HeroSectionThird";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <HeroSectionFirst />
      <HeroSectionSecond />
      <HeroSectionThird />
      <HeroSectionForth />
      <HeroSectionFifth />
      <Pricing />
    </main>
  );
}
