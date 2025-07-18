import Footer from "@/components/Common/Footer/Footer";
import Header from "@/components/Common/Header/Header";
import ContactSection from "@/components/MenuPageComponents/ContactSection/ContactSection";
import HeroSection from "@/components/MenuPageComponents/HeroSection/HeroSection";
import MenuSection from "@/components/MenuPageComponents/MenuSection/MenuSection";
import TabSection from "@/components/MenuPageComponents/TabSection/TabSection";
import React from "react";

const page = () => {
  return (
    <>
        <Header />

      <section>
        <HeroSection />
      </section>
      <section>
        <TabSection />
      </section>
      <section>
        <MenuSection />
      </section>
      <section>
        <ContactSection />
      </section>
        <Footer/>

    </>
  );
};

export default page;
