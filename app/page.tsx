import Hero360 from "@/components/Hero360";
import Showcase from "@/components/Showcase";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import About from "@/components/About";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChoose from "@/components/WhyChoose";
import Portfolio3D from "@/components/Portfolio3D";
import VisionMission from "@/components/VisionMission";
import ScopeSection from "@/components/ScopeSection";
import Contact from "@/components/Contact";
import ContactCards from "@/components/ContactCards";
import FooterPremium from "@/components/FooterPremium";

export default function Home() {
  return (
    <main>
      <Hero360 />
      <Showcase />
      <InteractiveShowcase />
      <About />
      <Services />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChoose />
      <Portfolio3D />
      <VisionMission />
      <ScopeSection />
      <Contact />
      <ContactCards />
      <FooterPremium />
    </main>
  );
}