import React, { useEffect } from "react";
import { FaCopyright } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section id="footer-sec">
        <div className="footer-cont">
          <div className="top">
            <div className="left" data-aos="fade-right">
              <h1>Let's Make Something Amazing Together</h1>
              <h2>
                Start by &nbsp;
                <span className="color-box">Saying Hii</span>
              </h2>
            </div>
            <div className="right">
              <h1>Related Links</h1>
              <ul>
                <li>
                  <MdKeyboardDoubleArrowRight className="item" />
                  Home
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="item" />
                  Resume
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="item" />
                  Project
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="item" />
                  Education
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="item" />
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h3>Monika kumari</h3>
            <p>
              <FaCopyright size={15} />
              Copyright 2024 by Monika. All Right Reserved
            </p>
          </div>
          <div className="right">
            <div className="itemicon">
              <span className="icon1">
                <ImLinkedin fontSize={25} className="icon" />
              </span>
              <span className="icon3">
                <FaGithub size={25} className="icon" />
              </span>
              <span className="icon1">
                <BsTwitter size={25} className="icon" />
              </span>
              <span className="icon2">
                <FiInstagram size={25} className="icon" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
