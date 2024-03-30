import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "./animation/done.json";
import contactUs from "./animation/contact.json";

import "./contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwkgrqad");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-email"></span>
        Contact us
      </h1>
      <p className="sub-title">Feel free to contact me for more information</p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="msg">Your Message:</label>
            <textarea required name="msg" id="msg"></textarea>
            <ValidationError
              prefix="Message"
              field="msg"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="animation">
        <Lottie className="contact-animation"  style={{ width: "400px" ,height:"400px"}} animationData={contactUs} />
        </div>
      </div>
      {state.succeeded && (
        <p
          style={{ fontSize: "16px", marginTop: "1.7rem" }}
          className="success flex"
        >
          <Lottie loop={false} style={{ width: "3rem" ,height:"3rem"}} animationData={doneAnimation} />
          Message sent successfully
        </p>
      )}
    </section>
  );
}
