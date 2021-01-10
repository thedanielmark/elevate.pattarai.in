import React from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-full.png";

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
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div
        variants={fade1}
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-between flex-column"
      >
        <div className="container d-md-flex justify-content-md-between mt-4">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} className="elevate-logo" />
            <h5
              className="text-secondary col-6 text-left d-none d-lg-block"
              style={{ borderLeft: "1px solid #666" }}
            >
              An interactive online experience by the committee, free for
              everyone.
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
          <h5>
            An interactive online experience by the committee, free for
            everyone.
          </h5>
        </div>

        <div className="container my-md-5 pt-lg-5 mt-lg-0 mt-5 mb-5 px-0">
          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade2}>
              <div className="landing-big-text text-center col-12">
                Global Engineering Conference by Pattarai
              </div>
            </motion.div>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade3}>
              <div className="text-uppercase text-center text-light mt-5 ">
                <h4 className="font-weight-semi-bold">
                  <span className="font-weight-normal">February 2021</span>
                  <span className="text-secondary px-3">|</span>
                  Online
                </h4>
              </div>

              <span className='d-block d-md-flex container justify-content-center '>
                <div className="text-uppercase text-center text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <Link to={"/register"} className="gradient-button font-weight-normal btn btn-rounded btn-lg">
                      Buy Free Tickets
                    </Link>
                  </h6>
                </div>

                <div className="text-uppercase text-center text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <Link to={"/tracks"} className="gradient-button font-weight-normal btn btn-rounded btn-lg">
                      View Tracks
                    </Link>
                  </h6>
                </div>
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
          <motion.div variants={fade4}>
            <div className="text-secondary text-center py-4 d-md-none">
              <h5>
                Hosted by{" "}
                <strong>
                  <a href="https://pattarai.in/" className="link-to-light">
                    Pattarai
                  </a>
                </strong>
              </h5>
            </div>

            <div className="container mb-4 text-center text-secondary">
              <ul className="nav justify-content-center d-block d-lg-flex flex-row-reverse">
                <li className="nav-item">
                  <a
                    className="nav-link link-to-light"
                    href="mailto:elevate@pattarai.in"
                    target="top"
                  >
                    elevate@pattarai.in
                  </a>
                </li>

                <li className="nav-item">
                  <Link to="/proposal-guidelines">
                    <span className="nav-link link-to-light">
                      Proposal Guidelines
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/code-of-conduct">
                    <span className="nav-link link-to-light">
                      Code of Conduct
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/privacy-policy">
                    <span className="nav-link link-to-light">
                      Privacy Policy
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link link-to-light">
                    Copyright &copy; 2020 Pattarai. All Rights Reserved.
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
