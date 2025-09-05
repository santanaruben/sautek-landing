import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { SectorsSection } from "@/components/sectors-section"
import { BrochureSection } from "@/components/brochure-section"
import { PowerSolutionsSection } from "@/components/power-solutions-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <SectorsSection />
      <BrochureSection />
      <PowerSolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
