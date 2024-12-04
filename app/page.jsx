import React from "react";
import FirstSection from "./components/sections/FirstSection";
import SecondSection from "./components/sections/SecondSection";
import Airlines from "./components/Airlines";
import ThirdSection from "./components/sections/ThirdSection";
import ForthSection from "./components/sections/ForthSection"
import SixthSection from "./components/sections/SixthSection";

export default function page() {
  return (
    <>
      <div className="">
        <FirstSection />
        <Airlines />
        <SecondSection />
        <ThirdSection />
        <SixthSection/>
        <ForthSection/>
      
      </div>
    </>
  );
}
