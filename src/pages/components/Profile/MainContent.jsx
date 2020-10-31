import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiMarker } from "@mdi/js";
import { mdiLinkVariant } from "@mdi/js";
import { mdiAt } from "@mdi/js";
import { mdiPhone } from "@mdi/js";
import { mdiBriefcase } from "@mdi/js";
import { mdiAccountStar } from "@mdi/js";
import useSWR from "swr";
import fetch from "unfetch";

export default function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeIn1 = {
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

  const fadeIn2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easing,
      },
    },
  };

  const fadeIn3 = {
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

  const fadeIn4 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: easing,
      },
    },
  };

  const fetcher = (url) => fetch(url).then((r) => r.json());

  // Get data from API
  const { data, error } = useSWR(
    "http://localhost:8080/elevate-be-staging/get-profile.php?id=" +
      localStorage.id +
      "&auth_token=" +
      localStorage.auth_token,
    fetcher
  );

  if (!data) return <h2>Loading...</h2>;
  if (error) return <h2 className="text-danger">Error</h2>;
  return (
    <React.Fragment>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeIn1}>
          <div
            className="profile-header"
            style={{ backgroundImage: `url(${data.profile_header_url})` }}
          />
          <div className="container d-flex justify-content-between px-lg-4">
            <div
              className="profile-picture-container"
              style={{ backgroundImage: `url(${data.profile_picture_url})` }}
            ></div>
            <div className="mt-3">
              <button className="btn btn-outline-primary rounded-pill px-3 py-2 font-weight-semi-bold">
                Edit Profile
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeIn2}>
          <div className="container mt-4 px-lg-4">
            <p className="font-weight-bold text-secondary text-uppercase my-0">
              Name
            </p>
            <div
              className="profile-name-container text-grey font-weight-bold"
              id="profile-name-container"
            >
              {data.full_name}
            </div>
            <p className="font-weight-bold text-secondary text-uppercase mt-4 mb-0">
              About
            </p>
            <div
              className="profile-intro text-grey mt-2"
              id="profile-bio-container"
            >
              {data.bio}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeIn3}>
          <div className="container mt-4 px-lg-4">
            <p className="font-weight-bold text-secondary text-uppercase my-3">
              Contact
            </p>
            <div className="d-inline">
              <Icon path={mdiPhone} size={1} className="pb-1" />
              <span
                className="ml-1 text-grey"
                id="profile-current-location-container"
              >
                {data.phone}
              </span>
            </div>
            <div className="d-inline ml-4">
              <Icon path={mdiLinkVariant} size={1} className="pb-1" />
              <span className="ml-1" id="profile-current-website-container">
                <a
                  href="https://thedanielmark.com/"
                  className="link-to-light text-grey"
                >
                  {data.website}
                </a>
              </span>
            </div>
            <div className="d-block d-md-inline ml-md-4">
              <Icon path={mdiAt} size={1} className="pb-1" />
              <span
                className="ml-1 text-grey"
                id="profile-primary-email-container"
              >
                {data.email}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeIn4}>
          <div className="container mt-4 px-lg-4">
            <p className="font-weight-bold text-secondary text-uppercase my-3">
              Work
            </p>
            <div className="d-inline">
              <Icon path={mdiBriefcase} size={1} className="pb-1" />
              <span
                className="ml-1 text-grey"
                id="profile-current-location-container"
              >
                {data.organization}
              </span>
            </div>
            <div className="d-inline ml-4">
              <Icon path={mdiAccountStar} size={1} className="pb-1" />
              <span
                className="ml-1 text-grey"
                id="profile-current-website-container"
              >
                {data.role}
              </span>
            </div>
            <div className="d-block d-md-inline ml-md-4">
              <Icon path={mdiMapMarker} size={1} className="pb-1" />
              <span
                className="ml-1 text-grey"
                id="profile-primary-email-container"
              >
                {data.location}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
