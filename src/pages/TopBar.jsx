import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import fetch from "unfetch";
import useSWR from "swr";

export default function TopBar() {
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
  if (error) return <h2 className="text-danger">Error bitches</h2>;

  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-between flex-column"
        style={{ height: "100vh" }}
      >
        <div>
          <img
            src="images/logo-full.png"
            className="w-100 ml-2 px-5 pt-3 pb-5 d-none d-md-block"
          />

          <div className="my-1 ml-5">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={clickedHome}
            >
              <a>
                <Link to={"/home"}>
                  <div
                    className="sidebar-link d-inline-flex align-items-center"
                    data-sidebar="bio-link"
                  >
                    <Icon path={mdiAccountCircle} size={1.2} className="mr-3" />
                    <span className="d-none d-lg-block">Profile</span>
                  </div>
                </Link>
              </a>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
                id="bio-spinner"
              ></div>
            </div>
          </div>

          <div className="my-1 ml-5">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={clickedDiscover}
            >
              <a>
                <Link to={"/discover"}>
                  <div
                    className="sidebar-link d-inline-flex align-items-center"
                    data-sidebar="discover-link"
                  >
                    <Icon path={mdiCloudSearch} size={1.2} className="mr-3" />
                    <span className="d-none d-lg-block">Discover</span>
                  </div>
                </Link>
              </a>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
                id="discover-spinner"
              ></div>
            </div>
          </div>

          <div className="my-1 ml-5">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={clickedMyProposals}
            >
              <a>
                <Link to={"/my-proposals"}>
                  <div
                    className="sidebar-link d-inline-flex align-items-center"
                    data-sidebar="my-proposals-link"
                  >
                    <Icon
                      path={mdiFileDocumentMultiple}
                      size={1.2}
                      className="pb-1 mr-3"
                    />
                    <span className="d-none d-lg-block">Proposed</span>
                  </div>
                </Link>
              </a>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
                id="my-proposals-spinner"
              ></div>
            </div>
          </div>

          <div className="my-1 ml-5">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={clickedApprovedProposals}
            >
              <a>
                <Link to={"/approved-proposals"}>
                  <div
                    className="sidebar-link d-inline-flex align-items-center"
                    data-sidebar="approved-proposals-link"
                  >
                    <Icon
                      path={mdiTextBoxCheck}
                      size={1.2}
                      className="pb-1 mr-3"
                    />
                    <span className="d-none d-lg-block">Approved</span>
                  </div>
                </Link>
              </a>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
                id="approved-proposals-spinner"
              ></div>
            </div>
          </div>

          <div className="my-1 ml-5">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={clickedSubmitPropsals}
            >
              <a>
                <Link to={"/bookmarks"}>
                  <div
                    className="sidebar-link d-inline-flex align-items-center"
                    data-sidebar="submit-proposals-link"
                  >
                    <Icon path={mdiBookmark} size={1.2} className="pb-1 mr-3" />
                    <span className="d-none d-lg-block">Bookmarks</span>
                  </div>
                </Link>
              </a>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
                id="submit-proposal-spinner"
              ></div>
            </div>
          </div>

          <div className="my-1 ml-5">
            <div
              className="d-flex justify-content-between align-items-center"
              id="logoutButton"
            >
              <div
                className="sidebar-link d-inline-flex align-items-center"
                data-sidebar="logout-link"
              >
                <Icon path={mdiLogout} size={1.2} className="pb-1 mr-3" />
                <span className="d-none d-lg-block">Logout</span>
              </div>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
                id="logout-spinner"
              ></div>
            </div>
          </div>

          <div className="mt-4 mx-5">
            <div className="d-flex justify-content-between align-items-center">
              <Link to={"/create-proposal"}
                className="btn btn-primary btn-lg rounded-pill w-100 font-weight-semi-bold"
                style={{ fontSize: "1rem" }}
              >
                Create Proposal
              </Link>

              <div
                className="spinner-border spinner-border-sm mr-4 text-grey d-none"
                role="status"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-5 mb-4 dropup">
            <div
              className="d-flex justify-content-between user-select-none"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex">
                <img
                  style={{
                    backgroundImage: `url(${data.profile_picture_url})`,
                  }}
                  className="mr-3 sidebar-profile-picture"
                />
                <div>
                  <p
                    className="font-weight-bold my-0"
                    style={{ lineHeight: 1 }}
                  >
                    {data.full_name}
                  </p>
                  <span className="text-grey">Manage</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Icon path={mdiChevronUp} size={1.4} className="mr-3" />
              </div>
            </div>
            <div
              className="dropdown-menu mb-4 dropdown-dark"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="">
                <Icon path={mdiAccountPlus} size={1} className="pb-1 mr-3" />
                Add Account
              </a>
              <a className="dropdown-item" href="">
                <Icon path={mdiCog} size={1} className="pb-1 mr-3" />
                Settings
              </a>
              <a
                className="dropdown-item"
                data-sidebar="logout-link"
                style={{ cursor: "pointer" }}
              >
                <Icon path={mdiLogout} size={1} className="pb-1 mr-3" />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function clickedHome() {
  document.getElementById("bio-spinner").classList.remove("d-none");
}

function clickedDiscover() {
  document.getElementById("discover-spinner").classList.remove("d-none");
}

function clickedSubmitPropsals() {
  document.getElementById("submit-proposal-spinner").classList.remove("d-none");
}

function clickedMyProposals() {
  document.getElementById("my-proposals-spinner").classList.remove("d-none");
}

function clickedApprovedProposals() {
  document
    .getElementById("approved-proposals-spinner")
    .classList.remove("d-none");
}