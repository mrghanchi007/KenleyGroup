"use client";

import { useCallback, useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhoWeSupport from "@/components/WhoWeSupport";
import HomesGallery from "@/components/HomesGallery";
import Network from "@/components/Network";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem("kenleyIntroPlayed", "1");
    setIntroDone(true);
  }, []);

  // Skip the intro if it has already played this session
  useEffect(() => {
    if (sessionStorage.getItem("kenleyIntroPlayed")) {
      setIntroDone(true);
    }
  }, []);

  // Lock scrolling while the intro is playing
  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  return (
    <>
      {!introDone && <Preloader onFinish={finishIntro} />}
      <Header showBadge={introDone} />
      <main>
        <Hero show={introDone} />
        <WhoWeAre />
        <WhoWeSupport />
        <HomesGallery />
        <Network />
        <Testimonials />
        <FAQSection />
        <CTASection
          watermark="Partner With Us"
          title="Partner With Us"
          text="Transforming lives through housing, support and social innovation — we work with professionals, local authorities and landlords who share our purpose."
          buttons={[
            { label: "Make a Referral", href: "/referrals" },
            { label: "Become a Landlord Partner", href: "/landlords" },
          ]}
        />
        <Footer />
      </main>
    </>
  );
}
