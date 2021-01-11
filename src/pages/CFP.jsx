/*index.jsx*/
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logosquare from "../../src/images/elevate_square.png";
import logofull from "../../src/images/logo-full.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

//Functional Component
export default function CallForProposal() {
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
        <motion.div className='bg-dark' exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants="{fade1}" className="container py-3">
                <div className="container py-5 text-center">
                    <Link to="/">
                        <img src={logofull} className="elevate-logo" />
                    </Link>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdDFQ_NaCZpRhgGOsgSvtDxykcXUawYOIApo7cioMq5yDyYRw/viewform?embedded=true" className='col-12' style={{ height: '1000px' }} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                    <Link to="/" className='pt-5'>
                        <img src={logosquare} alt="" height="150vh" className="pb-3 " srcset="" />
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
}
