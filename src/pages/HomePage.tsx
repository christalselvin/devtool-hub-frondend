import Seo from "../components/seo/Seo";
import AdSenseSlot from "../components/monetization/AdSenseSlot";
import PublicNavbar from "../components/layout/PublicNavbar";
import HeroSection from "../components/home/HeroSection";
import PopularToolsSection from "../components/home/PopularToolsSection";
import HomeCtaSection from "../components/home/HomeCtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Seo path="/" />
      <PublicNavbar />

      <main>
        <HeroSection />
        <PopularToolsSection />
        <AdSenseSlot />
        <HomeCtaSection />
      </main>
    </div>
  );
}
