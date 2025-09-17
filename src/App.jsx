import React from "react";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Nav />
      <section id="home"><SectionOne/></section>
      <section id="location"><SectionTwo /></section>
      <section id="work"><SectionThree /></section>
      <section id="about"><SectionFour /></section>
      <SectionFive/>
      <section id="contact"><SectionSix /></section>
      <footer className="p-20 flex items-center justify-around">
        <div className="font-bold text-2xl">The ARCH.co</div>
        <ul className="flex flex-col gap-4 items-center font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="border border-black/10 p-4 rounded-full cursor-pointer">
            <FaTwitter />
          </div>
          <div className="border border-black/10 p-4 rounded-full cursor-pointer">
            <FaFacebook />
          </div>
          <div className="border border-black/10 p-4 rounded-full cursor-pointer">
            <FaInstagram />
          </div>
        </div>
      </footer>
    </>
  )
}
