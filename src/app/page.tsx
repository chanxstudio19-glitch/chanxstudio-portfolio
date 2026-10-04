import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StudioSection from "@/components/StudioSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import SelectedWork from "@/components/SelectedWork";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStack from "@/components/TechStack";
import FounderSection from "@/components/FounderSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A09] text-[#E8E8E3] font-sans selection:bg-[#1C2A22] selection:text-[#D4B978]">
      <Header />
      <HeroSection />
      <StudioSection />
      <WhatWeBuild />
      <SelectedWork />
      <ProcessTimeline />
      <TechStack />
      <FounderSection />
      <PrinciplesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
