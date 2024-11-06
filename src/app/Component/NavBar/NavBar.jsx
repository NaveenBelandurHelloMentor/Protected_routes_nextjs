import React from "react";
import Link from "next/link";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="navbar-container">
          <li className="navbar_link_hide">
            <Link className="navbar_anchor" href="/">
              Home
            </Link>
          </li>
          <li className="navbar_link_hide">
            <Link className="navbar_anchor" href="/hoc">
              With Higher Order Components
            </Link>
          </li>
          <li className="navbar_link_hide">
            <Link className="navbar_anchor" href="/Middleware">
              Middleware
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
