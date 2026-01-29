import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Location from "@/components/sections/Location";
import Typologies from "@/components/sections/Typologies";
import Materials from "@/components/sections/Materials";
import ReadyToLive from "@/components/sections/ReadyToLive";
import Investment from "@/components/sections/Investment";
import ProgressGallery from "@/components/sections/ProgressGallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      {isHeroLoaded && <Header />}
      <main>
        <Hero onLoaded={setIsHeroLoaded} />
        {isHeroLoaded && (
          <>
            <Concept />
            <Location />
            <Typologies />
            <Materials />
            <ReadyToLive />
            <Investment />
            <ProgressGallery />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
