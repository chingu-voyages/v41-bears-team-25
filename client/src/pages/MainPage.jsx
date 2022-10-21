import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";
import "./MainPage.scss";

const MainPage = () => {
  // move the styling to the css file
  return (
    <>
      <div className="layout-container">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
