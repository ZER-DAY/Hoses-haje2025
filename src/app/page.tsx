import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import Cards from "@/sections/cards";
import BuildStages from "@/sections/BuildStages";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />

      <BuildStages />
      <Footer />
    </>
  );
}
