import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(
      localStorage.APIRoute +
        "get-profile.php?email=" +
        localStorage.email +
        "&auth_token=" +
        localStorage.auth_token
    )
      .then((res) => res.json().then(console.log(res)))
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const logout = () => {
      localStorage.auth_token = "";
      props.history.push("/login");
    };

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

    const fadeIn5 = {
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

    const fadeIn6 = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 3.5,
          ease: easing,
        },
      },
    };

    const { error, isLoaded, data } = this.state;

    if (error) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <h3 className="text-white">
            Uh oh! The back-end server isn't responding.
          </h3>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {/* <div className="container-fluid px-0">
            <div className="main-panel pb-5">
              <div className="content-wrapper px-0">
                <motion.div
                  exit={{ opacity: 0 }}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeIn1}>
                    <div
                      className="profile-header"
                      style={{
                        backgroundImage: `url(${data.profile_header_url})`,
                      }}
                    />
                    <div className="container d-flex justify-content-between px-lg-4">
                      <div
                        className="profile-picture-container"
                        style={{
                          backgroundImage: `url(${data.profile_picture_url})`,
                        }}
                      ></div>
                      <div className="mt-3">
                        <Link to={"/edit-profile"}>
                          <button className="btn btn-outline-primary rounded-pill px-3 py-2 font-weight-semi-bold">
                            Edit Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  exit={{ opacity: 0 }}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeIn2}>
                    <div className="container mt-5 px-lg-4">
                      <p className="font-weight-bold text-secondary text-uppercase my-0">
                        Name
                      </p>
                      <div
                        className="profile-name-container font-weight-bold"
                        id="profile-name-container"
                      >
                        {data.full_name}
                      </div>
                      <p className="font-weight-bold text-secondary text-uppercase mt-4 mb-0">
                        About
                      </p>
                      <div
                        className="profile-intro mt-2 font-weight-semi-bold"
                        id="profile-bio-container"
                      >
                        {data.bio}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3 grid-margin stretch-card">
                      <motion.div
                        exit={{ opacity: 0 }}
                        initial="initial"
                        animate="animate"
                        className="card icon-card-primary"
                      >
                        <motion.div variants={fadeIn3}>
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <div className="icon mb-0 mb-md-2 mb-xl-0 mr-2">
                                <i className="mdi mdi-star-circle" />
                              </div>
                              <p className="font-weight-medium mb-0">Contact</p>
                            </div>
                            <div className="d-flex align-items-center mt-3 flex-wrap">
                              <h5 className="font-weight-normal mb-0 mr-2">
                                {data.phone}
                              </h5>
                            </div>
                            <small className="font-weight-medium d-block mt-2">
                              {data.email}
                            </small>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 grid-margin stretch-card">
                      <motion.div
                        exit={{ opacity: 0 }}
                        initial="initial"
                        animate="animate"
                        className="card icon-card-success"
                      >
                        <motion.div variants={fadeIn4}>
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <div className="icon mb-0 mb-md-2 mb-xl-0 mr-2">
                                <i className="mdi mdi-truck" />
                              </div>
                              <p className="font-weight-medium mb-0">Work</p>
                            </div>
                            <div className="d-flex align-items-center mt-3 flex-wrap">
                              <h5 className="font-weight-normal mb-0 mr-2">
                                {data.organization}
                              </h5>
                            </div>
                            <small className="font-weight-medium d-block mt-2">
                              {data.role}
                            </small>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 grid-margin stretch-card">
                      <motion.div
                        exit={{ opacity: 0 }}
                        initial="initial"
                        animate="animate"
                        className="card icon-card-info"
                      >
                        <motion.div variants={fadeIn5}>
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <div className="icon mb-0 mb-md-2 mb-xl-0 mr-2">
                                <i className="mdi mdi-basket" />
                              </div>
                              <p className="font-weight-medium mb-0">
                                Additional Info
                              </p>
                            </div>
                            <div className="mt-3">
                              <h5 className="font-weight-normal mb-0 mr-2">
                                <a
                                  href={"https://" + data.website}
                                  className="link-to-light"
                                >
                                  {data.website}
                                </a>
                              </h5>
                              <small className="font-weight-medium d-block mt-2">
                                {data.location}
                              </small>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 grid-margin stretch-card">
                      <motion.div
                        exit={{ opacity: 0 }}
                        initial="initial"
                        animate="animate"
                        className="card icon-card-dark"
                      >
                        <motion.div variants={fadeIn6}>
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <div className="icon mb-0 mb-md-2 mb-xl-0 mr-2">
                                <i className="mdi mdi-package-down" />
                              </div>
                              <p className="font-weight-medium mb-0">
                                Submissions
                              </p>
                            </div>
                            <div className="d-flex align-items-center mt-3 flex-wrap">
                              <h5 className="font-weight-normal mb-0 mr-2">
                                {data.total_submissions + " "}Submissions
                              </h5>
                            </div>
                            <small className="font-weight-medium d-block mt-2">
                              Includes both submitted and non-approved
                              submissions.
                            </small>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh", width: "100vw" }}
          >
            Thank you for signing up for Elevate by Pattarai. <br /> The CfP
            Portal is still under active development but don't worry; we've got
            your email ID and we'll shoot you an email as soon as the CfP is
            open so you can submit your proposals and check out all the fun
            stuff we've got in store for you! <br /> Thank you for your
            patience! :) <br /> <Link to={"/home"} onClick={logout}>Logout</Link>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MainContent;