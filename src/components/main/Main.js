import { useState } from "react";
import "./main.css";
import { Myproject } from "./Myprojects";
import { motion } from "framer-motion";

export default function Main() {
  const HandleCategory = (category) => {
    setcurrentActive(category);
    setProjectdata(Myproject.filter((el) => el.category === category));
  };

  const [currentActive, setcurrentActive] = useState("all");

  const [Projectdata, setProjectdata] = useState(Myproject);

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            HandleCategory("all");
            setProjectdata(Myproject);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all project
        </button>
        <button
          onClick={() => HandleCategory("react")}
          className={currentActive === "react" ? "active" : null}
        >
          react & js
        </button>
        <button
          onClick={() => HandleCategory("laravel")}
          className={currentActive === "laravel" ? "active" : null}
        >
          php & Laravel
        </button>
        <button
          onClick={() => HandleCategory("node")}
          className={currentActive === "node" ? "active" : null}
        >
          node & Express
        </button>
      </section>
      <section className="right-section flex">
        {Projectdata.map((el) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1.4, type: "spring" }}
              key={el.title}
              className="card"
            >
              <img width={266} src={el.img} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h3 className="title">
                  {el.category}
                  <span> </span>
                  {el.title}
                </h3>
                <p className="subtitle">{el.subtitle}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={el.github}>
                      <span className="icon-link"></span>
                    </a>
                    <a href={el.github}>
                      <span className="icon-github"></span>
                    </a>
                  </div>
                  <a className="link flex" href="/">
                    more <span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}
