import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ApplySection from "@/components/ApplySection";
import DetailedSection from "@/components/DetailedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-200">
      <NavBar />
      <div class="mt-24 container mx-auto py-4 px-12">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <DetailedSection />
        <ApplySection />
      </div>
      <Footer />
    </main>
  );
}
