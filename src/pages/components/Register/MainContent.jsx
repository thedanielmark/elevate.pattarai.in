import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-xs.png";

function MainContent(props) {
  const [state, setState] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    successMessage: null,
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const resetForm = (e) => {
    document
      .getElementById("sign-up-button")
      .removeAttribute("disabled", "disabled");
    document.getElementById("sign-up-button-text").classList.remove("d-none");
    document.getElementById("sign-up-button-loader").classList.add("d-none");
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    document
      .getElementById("sign-up-button")
      .setAttribute("disabled", "disabled");
    document.getElementById("sign-up-button-text").classList.add("d-none");
    document.getElementById("sign-up-button-loader").classList.remove("d-none");
    document.getElementById("full_name").classList.remove("red-outline");
    document.getElementById("email").classList.remove("red-outline");
    document.getElementById("password").classList.remove("red-outline");
    document.getElementById("confirm_password").classList.remove("red-outline");
    if (
      state.full_name == "" ||
      state.email == "" ||
      state.password == "" ||
      state.confirm_password == ""
    ) {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Please fill all fields.",
      }));

      if (state.full_name == "") {
        document.getElementById("full_name").classList.add("red-outline");
      }
      if (state.email == "") {
        document.getElementById("email").classList.add("red-outline");
      }
      if (state.password == "") {
        document.getElementById("password").classList.add("red-outline");
      }
      if (state.confirm_password == "") {
        document
          .getElementById("confirm_password")
          .classList.add("red-outline");
      }

      document
        .getElementById("sign-up-button")
        .removeAttribute("disabled", "disabled");
      document.getElementById("sign-up-button-text").classList.remove("d-none");
      document.getElementById("sign-up-button-loader").classList.add("d-none");
    } else {
      if (state.password != "" && state.confirm_password != "") {
        if (state.password != state.confirm_password) {
          document.getElementById("password").classList.add("red-outline");
          document
            .getElementById("confirm_password")
            .classList.add("red-outline");
          setState((prevState) => ({
            ...prevState,
            errorMessage: "Passwords don't match.",
          }));
          resetForm();
        } else {
          document.getElementById("full_name").classList.remove("red-outline");
          document.getElementById("email").classList.remove("red-outline");
          document.getElementById("password").classList.remove("red-outline");
          document
            .getElementById("confirm_password")
            .classList.remove("red-outline");
          setState((prevState) => ({
            ...prevState,
            errorMessage: "",
          }));
          axios
            .post(
              localStorage.APIRoute +
                "register.php?full_name=" +
                state.full_name +
                "&email=" +
                state.email +
                "&password=" +
                state.password
            )
            .then(function (response) {
              console.log(response);
              if (response.data === "db-error") {
                setState((prevState) => ({
                  ...prevState,
                  errorMessage:
                    "An error occurred. Please try again or report this error to us. Code - 1000.",
                }));
                resetForm();
              } else if (response.data === "mail-error") {
                setState((prevState) => ({
                  ...prevState,
                  errorMessage:
                    "An error occurred. Please try again or report this error to us. Code - 5000.",
                }));
                resetForm();
              } else if (response.data === "critical-error") {
                setState((prevState) => ({
                  ...prevState,
                  errorMessage:
                    "An error occurred. Please try again or report this error to us. Code - 9000.",
                }));
                resetForm();
              } else if (response.data === "user-exists") {
                setState((prevState) => ({
                  ...prevState,
                  errorMessage: "An account with that email already exists.",
                }));
                resetForm();
              } else if (response.data) {
                localStorage.email = response.data.email;
                localStorage.auth_token = response.data.auth_token;
                redirectToVerify();

                props.showError(null);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
  };

  const redirectToVerify = () => {
    props.history.push("/verify-account");
  };

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
      <motion.div variants={fade1}>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="main-panel" style={{ backgroundColor: "#000" }}>
              <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                  <div className="col-lg-6 col-xl-5 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                      <div className="mb-3">
                        <img src={logo} alt="logo" />
                      </div>
                      <h4 className="font-weight-bold">
                        Hello! Let's get started!
                      </h4>
                      <h6 className="font-weight-semi-bold">
                        Sign up for a free account.
                      </h6>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="full_name"
                            placeholder="Full Name"
                            value={state.full_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="email"
                            placeholder="Email"
                            value={state.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="password"
                            placeholder="Password (At least 6 characters)"
                            value={state.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            value={state.confirm_password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="text-danger font-weight-bold text-small">
                          {state.errorMessage}
                        </div>
                        <div className="mt-3">
                          <button
                            id="sign-up-button"
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn text-white"
                            onClick={handleSubmitClick}
                          >
                            <span id="sign-up-button-text">SIGN UP</span>
                            <span
                              id="sign-up-button-loader"
                              className="spinner-border spinner-border-sm d-none"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                        <div className="my-2">
                          <span className="text-muted">
                            By signing up, you agree to adhere to the{" "}
                            <Link to={"/code-of-conduct"}>code of conduct</Link>
                            .
                          </span>
                        </div>
                        <div className="mt-4">
                          <Link to={"/login"}>
                            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                              SIGN IN INSTEAD
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
      </motion.div>
    </motion.div>
  );
}

export default withRouter(MainContent);
