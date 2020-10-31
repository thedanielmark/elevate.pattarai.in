import React from 'react';
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function Layout(props) {
  return (
    <div>
      <div
        className="container-xl d-flex px-0"
        style={{
          maxHeight: "calc(100vh - 56px)",
        }}
      >
        <div
          className="col-lg-3 d-none d-lg-block px-0"
          style={{
            height: "60vh",
          }}
        >
          <div
            className="left-sidebar px-0"
            style={{
              position: "fixed",
              height: "100vh",
            }}
          >
            <TopBar></TopBar>
          </div>
        </div>
        <div className="col-lg-9 px-0">
          {props.children}
          <div
            style={{
              height: "56px",
              width: "100%",
              marginTop: "40px",
            }}
          ></div>
        </div>
      </div>
      <div
        className="d-lg-none"
        style={{
          height: "56px",
          width: "100vw",
          position: "fixed",
          bottom: 0,
          background: "#000000",
        }}
      >
      </div>
    </div>
  );
}