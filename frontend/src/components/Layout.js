import { Outlet } from "react-router-dom";
import SideNav from "./Sidenav";
import { IoMenuOutline } from "react-icons/io5";
import profilePic from "../assets/img/helu.png";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

function getLastName(token) {
  const tokenArray = token.split(".");
  return JSON.parse(atob(tokenArray[1])).last_name;
}

function Layout() {
  const [show, setShow] = useState("");
  const [padding, setPadding] = useState("");
  const { auth } = useAuth();

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
            Hello, <span>{getLastName(auth.accessToken)}</span>
          </p>
        </div>
      </header>
      <SideNav show={show} setShow={setShow} />
      <Outlet />
    </>
  );
}

export default Layout;
