import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

export default function App() {
  const [showBtn, setshowBtn] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setshowBtn(1);
      } else {
        setshowBtn(0);
      }
    });
  });

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="devider" />
      <Main />
      <div className="devider" />
      <Contact />
      <div className="devider" />
      <Footer />

        <a style={{opacity:showBtn,transition:"1s"}} href="#up">
          <button className="scroll-top icon-keyboard_arrow_up"></button>
        </a>

    </div>
  );
}
