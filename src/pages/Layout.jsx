import React from "react";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function Layout(props) {
  return (
    <div>
      <div className="container-scroller">
        <TopBar></TopBar>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel" style={{ backgroundColor: "#000" }}>
            <div className="content-wrapper px-0">{props.children}</div>
          </div>
        </div>
        {/* page-body-wrapper ends */}
      </div>
      {/* container-scroller */}
    </div>
  );
}