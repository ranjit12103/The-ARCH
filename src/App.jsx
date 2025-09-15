import React from "react";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

export default function App() {
  return (
    <>
      <Nav />
      <section id="home"><SectionOne/></section>
      <section id="location"><SectionTwo /></section>
      <section id="work"><SectionThree /></section>
      <section id="about"><SectionFour /></section>
      <section id="contact"><h1>Contact Section</h1></section>
    </>
  )
}
