import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [showMediaIcons, SetShowMediaIcons] = useState(false);
  return (
    <>
      <section id="navbar-sec">
        <div className="nav-class">
          <div className="left">
            <img className="img" src="./assets/Images/Monikalogo.png" />
          </div>
          <div className={showMediaIcons ? "show" : "right"}>
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
          {/* hamburget menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => SetShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons ? <RxCross2 /> : <GiHamburgerMenu />}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
