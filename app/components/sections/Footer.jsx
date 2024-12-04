import React from "react";
import Logo from "@/app/ui/Logo";
import NavList from "../reusable/NavList";
import { FaDisplay } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const products = [
  { name: "Home", link: "/" },
  { name: "Experience", link: "/experience" },
  { name: "Contact", link: "/contact" },
  { name: "Learn more", link: "/about" },
  { name: "Verified Agents", link: "/agents" },
];
const company = [
  { name: "Login", link: "/login" },
  { name: "Register", link: "/register" },
  { name: "About", link: "/about" },
  { name: "FAQ", link: "/faq" },
];
export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-around bg-active3 mt-32 p-10">
        <div className="flex-col items-center">
          <Logo />
          <div className=""></div>
          <div className="flex gap-4 justify-center">
            <a href="http://twitter.com/@Heedful__">
              <FaXTwitter />
            </a>

            <a href="https://instagram.com/callme_bunna">
              <GrInstagram />
            </a>
            <FaLinkedin />
            <FaTelegramPlane />
          </div>
        </div>
        {/* <div className=" flex items-center pr-90 gap-20">
        <div className="flex-col items-center">
          <h4 className="">products</h4>
            <NavList items={products} display="flex-colum" aline="items-center"/>
        </div>
        <div className="">
        <h4 className="">company</h4>
        <NavList items={company} display="flex-colum" aline="items-center"/>
        </div>
        </div> */}
      </div>
    </>
  );
}
