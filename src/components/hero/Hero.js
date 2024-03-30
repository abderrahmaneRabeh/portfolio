import "./hero.css";
import animation1 from "./animation/pcAnimation1.json";
import Lottie from "lottie-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform:"scale(0)" }}
            animate={{ transform:"scale(1)" }}
            transition={{ duration: 1.4 ,type:"spring"}}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Full-Stack Devoloper, and Computer Science Student
        </motion.h1>
        <motion.p
          className="sub-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
        >
          My name is Abderrahmane Rabeh, a 20-year-old Moroccan residing in
          Safi. Currently pursuing studies in Full-Stack / Computer Science, I'm
          fervently delving into the ever-evolving realms of technology and
          computer programming.
        </motion.p>
        <div className="icons flex">
          <a
            href="https://github.com/abderrahmaneRabeh"
            className="icon icon-github"
          >
            {" "}
          </a>
          <a
            href="https://www.linkedin.com/in/abderrahmane-rabeh-7122b0266/"
            className="icon icon-linkedin"
          >
            {" "}
          </a>
          <div className="icon icon-instagram"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          className="pc-animation"
          style={{ width: "400px", height: "400px" }}
          animationData={animation1}
        />
      </div>
    </section>
  );
}
