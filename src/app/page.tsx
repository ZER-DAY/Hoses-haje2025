import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import Cards from "@/sections/cards";
import BuildStages from "@/sections/BuildStages";
import RiteQuality from "@/sections/RiteQuality";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <RiteQuality />
      <BuildStages />

      <Footer />
    </>
  );
}
