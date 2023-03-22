import { Outlet } from "react-router-dom";
import SideNav from "./Sidenav";
import { IoMenuOutline } from "react-icons/io5";
import profilePic from "../assets/img/helu.png";
import { useState, useEffect } from "react";

function Layout() {
  const [show, setShow] = useState("");
  const [padding, setPadding] = useState("");

  const toggleNavigation = () => {
    setShow((prev) => {
      if (prev === "") return "show";
      return "";
    });
    setPadding((prev) => {
      if (prev === "") return "body-pd";
      return "";
    });
  };

  return (
    <>
      <header className={`header ${padding}`} id="header">
        <button
          onClick={toggleNavigation}
          className="toggle_btn"
          id="toggle_btn"
        >
          <IoMenuOutline className="icon" />
        </button>
        <div className="profile">
          <p>
            Hello, <span>Helu</span>
          </p>
          <picture>
            <img src={profilePic} alt="profile pic" />
          </picture>
        </div>
      </header>
      <SideNav show={show} setShow={setShow} />
      <Outlet />
    </>
  );
}

export default Layout;
