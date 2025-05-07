
import HeroSection from "@/components/Home/HeroSection";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import DemoSection from "@/components/Home/DemoSection";
import TestimonialsSection from "@/components/Home/TestimonialSection";
import FooterSection from "@/components/Home/FooterSection";
export default async function Home() {

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
