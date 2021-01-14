import React from "react";
import { motion } from "framer-motion";
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
            <Link to="/" className="d-flex justify-content-center">
              <img src={logo} alt="conf_elevate" className="elevate-logo" />
            </Link>
            <div
              className="text-secondary text-left  d-none d-lg-block"
              style={{ borderLeft: "2px solid #666", height: "80px" }}
            ></div>
            <h5 className="text-secondary col-6 text-left d-none d-lg-block ">
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

        <div className="container my-md-5 pt-lg-5 mt-lg-0 mt-5 mb-5 px-0">
          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade2}>
              <div
                className="landing-big-text text-center col-12"
                style={{ height: "200px" }}
              >
                Global Engineering Conference by Pattarai
              </div>
            </motion.div>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade3}>
              <div className="text-uppercase text-center text-light mt-5 ">
                <h4 className="font-weight-semi-bold">
                  <span className="font-weight-normal">MARCH 2021</span>
                  <span className="text-secondary px-3">|</span>
                  Online
                </h4>
              </div>

              <span className="d-block d-md-flex container justify-content-center ">
                <div className="text-uppercase text-center text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <a
                      href="https://www.eventbrite.com/e/elevate-tickets-136634472385"
                      className="gradient-button font-weight-normal btn btn-rounded btn-lg"
                    >
                      Buy Free Tickets
                    </a>
                  </h6>
                </div>

                <div className="text-uppercase text-center  text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <Link
                      to={"/tracks"}
                      className="gradient-button font-weight-normal btn btn-rounded btn-lg"
                    >
                      View Tracks
                    </Link>
                  </h6>
                </div>

                <div className="text-uppercase text-center text-light mt-5 px-md-3 px-0">
                  <h6 className="font-weight-semi-bold">
                    <Link
                      to="/registerspeakers"
                      className="gradient-button font-weight-normal btn btn-rounded btn-lg"
                    >
                      Submit a Proposal
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
                    Copyright &copy; 2021 Pattarai. All Rights Reserved.
                  </a>
                </li>
              </ul>
              <div className="text-white justify-content-center">
                <a
                  id="instagram-icon"
                  href="https://www.instagram.com/conf.elevate/"
                  class="px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  id="linkedin-icon"
                  href="https://www.linkedin.com/showcase/conf-elevate/"
                  class="px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  id="twitter-icon"
                  href="https://twitter.com/conf_elevate?s=20"
                  class="px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  id="facebook-icon"
                  href="https://www.facebook.com/Elevate-102171648513057"
                  class="px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  id="discord-icon"
                  class="px-2"
                  href="https://discord.com/invite/dBASGVcf9K"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-discord"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                    <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
