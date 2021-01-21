/*index.jsx*/
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logosquare from "../../src/images/elevate_square.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Footer";
import ElevateVideoReveal from "../elevate-logo-reveal.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Functional Component
export default function RegisterSpeakersHead() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1} className="pt-3 pb-1">
        <div
          id="register-speaker-script-holder"
          className="container py-5 text-center"
        >
          <Link to="/" className="d-md-flex d-block align-items-center justify-content-center">
            <div
              style={{
                filter: "saturate(20%) contrast(200%)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                height: "100px",
              }}
              className="container pb-0 pb-md-5 pl-5"
            >
              <video
                className="pt-0 pt-md-2"
                autoPlay="true"
                src={ElevateVideoReveal}
                width="100%"
                height="300px"
              ></video>
            </div>
          </Link>
          <section>
            <Carousel
             
              showIndicators={true}
              showArrows={true}
              dynamicHeight={true}
            >
              <div style={{ background: "#000", height: "500px" }} className="text-white">
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">Step 01</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    Register yourself as a speaker. <br />
                  </div>
                  <a
                    href=""
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Register</div>
                  </a>
                </div>
              </div>
              <div style={{ background: "#000", height: "500px"  }} className="text-white">
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">Step 02</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    Submit your Proposal. <br />
                  </div>
                  <a
                    href=""
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Submit</div>
                  </a>
                </div>
              </div>
              <div style={{ background: "#000", height: "500px"  }} className="text-white">
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">Step 03</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    If needed, register a secondary speaker <br />
                  </div>
                  <a
                    href=""
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Register</div>
                  </a>
                </div>
              </div>
            </Carousel>
          </section>
        </div>
      </motion.div>
      <Link
        to="/"
        style={{background:"#111111"}}
        className="d-block d-md-flex container mb-3  justify-content-center align-items-center btn "
      >
        <img
          src={logosquare}
          alt="conf_elevate"
          height="90vh"
          className="py-2"
          srcset=""
        />
        <div
          style={{ fontFamily: "Montserrat" }}
          className="h4 text-white pb-2 pb-md-0 pl-md-3 pl-0"
        >
          connect. learn. <strong>elevate.</strong>
        </div>
      </Link>
      <Footer></Footer>
    </motion.div>
  );
}
