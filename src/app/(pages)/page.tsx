import Image from "next/image";
import HeroSection from "./__components/HeroSection";
import FeatureShowcase from "./__components/FeatureShowcase";
import DemoSection from "./__components/DemoSection";
import TestimonialsSection from "./__components/TestimonialSection";
import FooterSection from "./__components/FooterSection";

export default function Home() {
  return (
   <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center">
        <HeroSection />
        <FeatureShowcase />
        <div className="w-full max-w-7xl mx-auto">
          <DemoSection />
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <div className="">
            <TestimonialsSection />
          </div>
        </div>
   

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
