"use client";
import InformationSection from "../modules/home-page/components/informationSection/index";
import IntroSection from "../modules/home-page/components/introSection/index";
import NavBar from "../modules/home-page/components/navbar/index";
import ReveiwSection from "../modules/home-page/components/reviewsSection/index";
import SectionSeparator from "../modules/home-page/components/sectionSeparator/index";
import SessionTypeSection from "../modules/home-page/components/sessionTypeSection/index";
import SpecialitySection from "../modules/home-page/components/specialitySection/index";
import Footer from "../modules/home-page/components/footer/index";
import ColaborationsSection from "../modules/home-page/components/colaborationsSection/index";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <IntroSection />
      <SpecialitySection />
      <SectionSeparator
        image={"sections/sessionTypes.svg"}
        subtitle={"Tipo de sesiones"}
      />
      <SessionTypeSection />
      <SectionSeparator
        image={"sections/information.svg"}
        subtitle={"Que puedes encontrar"}
      />
      <InformationSection />
      <SectionSeparator
        image={"sections/opinions.svg"}
        subtitle={"Conoce sus experiencias"}
      />
      <ReveiwSection></ReveiwSection>
      <SectionSeparator
        image={"sections/colaboration.svg"}
        subtitle={"Colaboraciones"}
      />
      <ColaborationsSection />
      <Footer />
    </>
  );
}
