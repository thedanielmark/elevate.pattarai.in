/*index.jsx*/
import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import { motion } from "framer-motion";
import logosquare from "../../src/images/elevate_square.png";
import logo from "../../src/images/logo-full.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "confetti-react";

import { Modal, Button } from "react-bootstrap";

function RegisterSpeakerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Speaker
          <p classname="text-primary pt-5">
            *You can come back anytime to continue the registration.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <iframe
          title="speaker-register-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfrnJKV5_r4eIl8GeuOACL3UfbBX06kGAbZ2jyaDFlYJ2bH7g/viewform?usp=sf_link"
          height="1600px"
          width="1600px"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-md-between">
        <p classname="font-weight-bold text-primary">
          *You can come back anytime to continue the registration.
        </p>
        <Button className="bg-primary btn-lg  btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function CfPModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submit Proposal
          <p classname="text-primary pt-5">
            *You can come back anytime to submit the proposal.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <iframe
          title="speaker-register-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdDFQ_NaCZpRhgGOsgSvtDxykcXUawYOIApo7cioMq5yDyYRw/viewform?embedded=true"
          height="1250px"
          width="1600px"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-md-between">
        <p classname="font-weight-bold text-primary">
          *You can come back anytime to submit the proposal.
        </p>
        <Button className="bg-primary btn-lg  btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Functional Component
export default function RegisterSpeakers() {
  const [
    registerSpeakerModalShow,
    setregisterSpeakerModalShow,
  ] = React.useState(false);
  const [cfpmodalShow, setcfpmodalShow] = React.useState(false);

  const { width, height } = useWindowSize();

  function fireConfetti() {
    var holder = document.querySelector("#confettiHolder");
    ReactDOM.render(<Confetti width={width} height={height} />, holder);
  }

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

  const fade4 = {
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

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1} className="pt-3 pb-1">
        <div
          id="register-speaker-script-holder"
          className="container py-5 text-center"
        >
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center"
          >
            <img style={{ height: "10vh" }} className="pl-4" src={logo}></img>
          </Link>
          <section>
            <Carousel
              showIndicators={true}
              showArrows={true}
              dynamicHeight={true}
            >
              <div
                style={{ background: "#000", height: "500px" }}
                className="text-white"
              >
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">Step 01</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    Register yourself as a speaker <br />
                  </div>
                  <a
                    target="_blank"
                    onClick={() => setregisterSpeakerModalShow(true)}
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Register</div>
                  </a>
                </div>
              </div>
              <div
                style={{ background: "#000", height: "500px" }}
                className="text-white"
              >
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">Step 02</div>
                  <div className="p text-secondary">OPTIONAL</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    Register a secondary speaker <br />
                  </div>
                  <a
                    onClick={() => setregisterSpeakerModalShow(true)}
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Register</div>
                  </a>
                </div>
              </div>
              <div
                style={{ background: "#000", height: "500px" }}
                className="text-white"
              >
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">Step 03</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    Submit your proposal <br />
                  </div>
                  <a
                    onClick={() => setcfpmodalShow(true)}
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Submit</div>
                  </a>
                </div>
              </div>

              <div
                style={{ background: "#000", height: "500px" }}
                className="text-white"
              >
                <div className="card-body align-items-center justify-content-center my-5">
                  <div className="h1 font-weight-bold">You're good to go!</div>
                  <div style={{ lineHeight: "40px" }} className="h4 pt-3 pb-5 ">
                    You will be notified via mail with further instructions
                    <br />
                  </div>
                  <a
                    onClick={fireConfetti}
                    className="btn gradient-button btn-rounded btn-lg text-white"
                  >
                    <div className="h2">Celebrate</div>
                  </a>
                </div>
              </div>
            </Carousel>
            <RegisterSpeakerModal
              show={registerSpeakerModalShow}
              onHide={() => setregisterSpeakerModalShow(false)}
            />
            <CfPModal
              show={cfpmodalShow}
              onHide={() => setcfpmodalShow(false)}
            />
          </section>
        </div>
      </motion.div>
      <motion.div variants={fade4}>
        <Link
          to="/"
          style={{ background: "#111111" }}
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
      </motion.div>
      <div id="confettiHolder"></div>
      <Footer></Footer>
    </motion.div>
  );
}
