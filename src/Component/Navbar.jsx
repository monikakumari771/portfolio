import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section id="navbar-sec">
        <div className="nav-class">
          <div className="left">
            <img className="img" src="./Images/Monikalogo.png" />
          </div>
          <div className="right">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Resume">
                <li>Resume</li>
              </Link>
              <Link to="/Projects">
                <li>Project</li>
              </Link>
              <Link to="/Education">
                <li>Education/Certificate</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
