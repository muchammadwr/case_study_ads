import Footer from "@/components/Footer";
import HeroSectionFifth from "@/components/HeroSectionFifth";
import HeroSectionFirst from "@/components/HeroSectionFirst";
import HeroSectionSecond from "@/components/HeroSectionSecond";
import HeroSectionForth from "@/components/HeroSectionForth";
import HeroSectionThird from "@/components/HeroSectionThird";
import Pricing from "@/components/Pricing";
import QuestionSection from "@/components/QuestionSection";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeroSectionFirst />
        <HeroSectionSecond />
        <HeroSectionThird />
        <HeroSectionForth />
        <HeroSectionFifth />
        <Pricing />
        <QuestionSection />
        <Footer />
      </div>
    </main>
  );
}
