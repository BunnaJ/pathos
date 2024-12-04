import React from "react";
import Image from "next/image";
import emirate from "../components/images/airlines/Emirates-Logo.png";
import airpeace from "../components/images/airlines/airpeace.webp";
import ethiopia from "../components/images/airlines/ethiopia.png";
import egypt from "../components/images/airlines/egyptairmainlogo.png";
import brithish from "../components/images/airlines/British-Airways-Logo.png";
import turkish from "../components/images/airlines/Turkish_Airlines-Logo.wine.png";
import qatarAir from "../components/images/airlines/Qatar-Airways-Logo.png";

export default function Airlines() {
  return (
    <div className="flex items-center justify-center gap-9 pt-5 ">
      <div className="">
        <Image src={airpeace} width={100} height={100} alt="airpeace"/>
      </div>

      <div className="">
        <Image src={ethiopia} width={100} height={100} alt="ethiopia" />
      </div>
      <div className="">
        <Image src={egypt} width={70} height={100} alt="egypt" />
      </div>

      <div className="">
        <Image src={qatarAir} width={70} height={100} alt="qatarAir" />
      </div>

      <div className="">
        <Image src={brithish} width={100} height={100} alt="brithish" />
      </div>

      <div className="">
        <Image src={turkish} width={130} height={100} alt="turkish" />
      </div>

      <div className="">
        <Image src={emirate} width={70} alt="emirate" />
      </div>
    </div>
  );
}
