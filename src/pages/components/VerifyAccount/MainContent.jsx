import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-xs.png";

function MainContent(props) {
  const [state, setState] = useState({
    code: "",
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

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.code == "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Please enter a code.",
      }));
      document.getElementById("code").classList.add("red-outline");
    } else {
      document.getElementById("code").classList.remove("red-outline");
      axios
        .post(
          localStorage.APIRoute +
            "verify-account.php?email=" +
            localStorage.email +
            "&code=" +
            state.code
        )
        .then(function (response) {
          console.log(response);
          if (response.data === "db-error") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "An unknown error occurred. Code - 1001.",
            }));
          } else if (response.data === "invalid-password") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "Email and password do not match.",
            }));
          } else if (response.data === "user-doesnt-exist") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "Account does not exist.",
            }));
          } else {
            localStorage.id = response.data.id;
            localStorage.email = response.data.email;
            localStorage.auth_token = response.data.auth_token;

            if (response.data.emailConfirmed == 0) {
              redirectToVerify();
            } else {
              redirectToHome();
            }
            props.showError(null);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const redirectToHome = () => {
    props.history.push("/home");
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
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                      <div className="mb-3">
                        <img src={logo} alt="logo" />
                      </div>
                      <h4 className="font-weight-bold">Account Verification</h4>
                      <h6 className="font-weight-semi-bold">
                        Enter the code sent to {localStorage.email} to continue.
                      </h6>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="code"
                            placeholder="6 Digit Code"
                            value={state.code}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="text-danger font-weight-bold text-small">
                          {state.errorMessage}
                        </div>
                        <div className="mt-3">
                          <button
                            id="verify-account-button"
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn text-white"
                            onClick={handleSubmitClick}
                          >
                            <span id="verify-account-button-text">
                              Verify Account
                            </span>
                            <span
                              id="verify-account-button-loader"
                              className="spinner-border spinner-border-sm d-none"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                        <div className="mt-4 text-muted">Not your email?</div>
                        <div className="mt-3">
                          <Link to={"/register"}>
                            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                              Change Email ID
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
