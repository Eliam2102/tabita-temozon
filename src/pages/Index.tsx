import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Location from "@/components/sections/Location";
import Typologies from "@/components/sections/Typologies";
import Materials from "@/components/sections/Materials";
import ReadyToLive from "@/components/sections/ReadyToLive";
import Investment from "@/components/sections/Investment";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Location />
        <Typologies />
        <Materials />
        <ReadyToLive />
        <Investment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
