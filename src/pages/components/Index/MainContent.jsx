import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-full.png";
import ElevateVideoReveal from "../../../elevate-logo-reveal.mp4";

export default function MainContent() {
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

  const fade2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: easing,
      },
    },
  };

  const fade3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: easing,
      },
    },
  };

  const fade4 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 4,
        ease: easing,
      },
    },
  };

  return (
    <motion.div
      variants={fade1}
      className="pb-0 pb-md-4"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={fade2}
        style={{ minHeight: "90vh" }}
        className="d-flex justify-content-between align-items-center flex-column"
      >
        <div className="d-md-flex justify-content-md-between container mt-4">
          <div className="d-flex align-items-center py-3 justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex d-md-none d-block justify-content-center"
            >
              <img src={logo} alt="conf_elevate" className="elevate-logo" />
            </Link>

            <h5 className="text-secondary text-left d-none d-lg-block ">
              An interactive online experience, free for everyone.
            </h5>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="text-secondary text-center d-none d-md-block">
              Hosted by{" "}
              <a href="https://pattarai.in/" className="link-to-light">
                <b>Pattarai</b>
              </a>
            </h5>
          </div>
        </div>

        <div className="container text-secondary text-center mt-md-5 d-lg-none">
          <h5>An interactive online experience, free for everyone.</h5>
        </div>

        <div className="my-md-5  mt-lg-0 mt-5 px-0 ">
          <motion.div
            className="d-md-block d-none"
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fade2}>
            <div
              style={{
                filter: "saturate(20%) contrast(200%)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                height: "200px",
              }}
              className="container pb-0 pb-md-5 pl-5"
            >
              <video
                className="pt-0 pt-md-4"
                autoPlay="true"
                src={ElevateVideoReveal}
                width="100%"
              ></video>
            </div>
            </motion.div>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade3}>
              <div className="text-white underbox text-center d-md-block d-none h2">
                <span>Global Engineering Conference by Pattarai</span>
              </div>
              <div className="text-white landing-big-text d-md-none d-block text-center">
                Global Engineering Conference by Pattarai
              </div>
              <div className="text-uppercase text-center text-light mt-5 ">
                <h4 className="font-weight-semi-bold">
                  <span className="font-weight-normal">MARCH 2021</span>
                  <span className="text-secondary px-3">|</span>
                  Online
                </h4>
              </div>

              <span className="d-block d-md-flex container py-5 justify-content-center ">
                <div className="text-uppercase text-center text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <a
                      href="https://www.eventbrite.com/e/elevate-tickets-136634472385"
                      className="gradient-button btn btn-rounded btn-lg"
                    >
                      Buy Free Tickets
                    </a>
                  </h6>
                </div>

                <div className="text-uppercase text-center  text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <Link
                      to={"/tracks"}
                      className="gradient-button btn btn-rounded btn-lg"
                    >
                      View Tracks
                    </Link>
                  </h6>
                </div>

                <div className="text-uppercase text-center text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <Link
                      to="/registerspeakers"
                      className="gradient-button btn btn-rounded btn-lg"
                    >
                      Submit a Proposal
                    </Link>
                  </h6>
                </div>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
