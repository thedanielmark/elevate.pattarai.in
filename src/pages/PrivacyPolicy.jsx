/*index.jsx*/
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logo from "../../src/images/elevate_square.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Footer";

//Functional Component
export default function PrivacyPolicy() {
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
      <motion.div variants={fade1} className="container py-3">
        <div className="container py-5 text-center docs">
          <Link to="/" className='d-flex justify-content-center'>
            <img src={logo} alt="" height="150vh" className="pb-3 " srcset="" />
          </Link>
          <h4>
            PRIVACY POLICY
          </h4>
          <h5
            className="text-justify pt-5"
            style={{ color: "rgb(170, 170, 170)", lineHeight: "25px" }}
          >
            This Privacy Policy explains how Pattarai will process the personal
            information that is collected in the registration form. You can find
            this form on our{" "}
            <a href="https://elevate.pattarai.in "> website </a>.
            <br />
            This document explains the Privacy Policy that is in force at each
            moment, being your obligation as user or attendee to check it
            periodically to verify that you still agree with it. Please, in case
            you do not agree with our Privacy Policy, do not continue browsing
            our website or do not include information in the forms available on
            our website.
            <br />
            <br />
            <strong>DATA CONTROLLER</strong>
            <br />
            Pattarai is the data controller of all the data collected. The
            website is owned by Pattarai. You can find all of our contact
            information on our
            <a href="https://elevate.pattarai.in ">&nbsp;website </a>.
            <br />
            <br />
            <strong>DATA WE COLLECT</strong>
            <br />
            We collect the communication information through the ‘Buy Tickets’
            form and ‘Registration’ form on our website. This information is
            necessary for sending you our newsletter and information about the
            event.
            <br />
            <br />
            <strong>PURPOSE OF THE TREATMENT</strong>
            <br />
            The personal data provided may be used for the following purpose:
            <br />
            Sending you commercial communications, to keep you informed about
            the future editions of the Elevate Conference or other professional
            events promoted by Pattarai.
            <br />
            <br />
            Disclaimer: We will not make profiling or automated decisions from
            the data you provide us with.
            <br />
            <br />
            <strong>DATA CONSERVATION</strong>
            <br />
            The personal data provided will not be stored longer than necessary
            for the data processing and, specifically, regarding the data we
            request in each of the forms.
            <br /> <br />
            Data of the Newsletter’s subscription form: We will keep your data
            until you request us to unsubscribe. You can be removed from our
            newsletter list by sending an email with ‘unsubscribe’ in the
            subject line to &nbsp;
            <a href="mailto:elevate@pattarai.in">elevate@pattarai.in</a> <br />
            <br />
            In case that you revoke your consent to the processing of your data,
            we will proceed to the deletion of your data. This means that we
            will not be able to access your information and it will only be
            stored during the periods established by the applicable regulations
            to respond to requests from the competent authorities and to deal
            with possible responsibilities arising from the processing.
            <br />
            <br />
            <strong>LEGITIMATION OF DATA PROCESSING</strong>
            <br />
            The legal basis for processing your data is your consent. You can
            revoke it at any time, but the data processing made previously for
            that purpose will not lose its legality since the consent has been
            revoked.
            <br />
            <br />
            <strong>COMMUNICATION OF THE DATA </strong>
            <br />
            Pattarai will not transfer the personal data of the users or/and
            attendees, to any third party without a legal basis that legitimizes
            that data processing. This means that we will not share your data
            with third parties except:
            <br />
          </h5>
          <h5
            style={{
              color: "rgb(170, 170, 170)",
              lineHeight: "25px",
              textAlign: "left",
            }}
          >
            <ul>
              <li>
                When we have a legal obligation, we will be able to communicate
                your information to the authorities and entities that require it
                to us
              </li>
              <li>
                For the correct provision of the services requested by the user.
                Pattarai’s Data Processors (that is to say, our service
                providers) will be able to access your data to be able to
                develop the functions for which they were hired, among others:
                being able to manage your registration to the Event, accessing
                the Event and to the Event’s Website. Also, we want to inform
                you that these service providers sign Data Processing Contracts
                that cover all the appropriate security measures to guarantee
                the protection of your data, by the data protection regulations.
              </li>
            </ul>
            We will not make international transfers of your data.
          </h5>

          <br />

          <h5
            className="text-justify pt-2"
            style={{ color: "rgb(170, 170, 170)", lineHeight: "25px" }}
          >
            <strong>YOUR RIGHTS AND HOW WE EXERCISE THEM</strong>
            <br />
            <strong>Right of access</strong>
            <br />
            You have the right to request information about what personal data
            of yours we are dealing with if any. The information that we can
            give you in this regard is what type of data is, what is the purpose
            of their processing or if we have communicated them to third parties
            or Data Processors, among other aspects <br /> <br />
            <strong>Right of rectification</strong>
            <br />
            The information you provide us must be correct and accurate. In case
            you think we have to rectify some information you can request us to
            correct it as soon as possible. <br /> <br />
            <strong>
              Right of suppression and limitation of the treatment
            </strong>
            <br /> In case you do not want us to continue using your data, or
            that we only use them for limited purposes, you can exercise this
            right by indicating if you want us to proceed in this way, either
            because you do not want us to continue processing the data for which
            we collected them, or because the reason that originated their
            processing has disappeared. <br /> <br />
            <strong>
              Right of opposition and not to be the object of individualized
              decisions
            </strong>
            <br />
            We will not process your information in case you oppose the data
            processing, nor to make individualized decisions nor to elaborate
            personalized profiles. <br /> <br />
            <strong>Right to complain</strong>
            <br /> If you consider that your rights have been violated, you can
            complain to the Elevate - Public Relations Committee
            <br />
            <br />
            By the IND IT Act, you, as an attendee (including Speakers and
            Sponsors) are informed about the collection of your data and your
            rights, as described above. You can exercise the above-mentioned
            rights by notice in writing at{" "}
            <a href="https://elevate.pattarai.in "> website</a> accompanied with
            a copy of your ID or similar document that allows the Organizers to
            properly identify you.
            <br />
          </h5>
        </div>
      </motion.div>
      <Footer></Footer>
    </motion.div>
  );
}
