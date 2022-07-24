import React, { useEffect, useState } from "react";
import logo from "../utils/logo.png";
import profile from "../utils/profile.png";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src={logo}
        onClick={() => window.location.reload()}
        className="nav__logo"
      />
      <img alt="User logged" src={profile} className="nav__avatar" />
    </nav>
  );
};

export default Nav;
