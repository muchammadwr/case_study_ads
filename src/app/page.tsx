import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectionFifth from "@/components/HeroSectionFifth";
import HeroSectionFirst from "@/components/HeroSectionFirst";
import HeroSectionForth from "@/components/HeroSectionForth";
import HeroSectionSecond from "@/components/HeroSectionSecond";
import HeroSectionThird from "@/components/HeroSectionThird";
import Pricing from "@/components/Pricing";
import QuestionSection from "@/components/QuestionSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSectionFirst />
      <HeroSectionSecond />
      <HeroSectionThird />
      <HeroSectionForth />
      <HeroSectionFifth />
      <Pricing />
      <QuestionSection />
      <Footer />
    </main>
  );
}
