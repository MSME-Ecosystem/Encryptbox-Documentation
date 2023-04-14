import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg menu_one dark_menu sticky-nav">
      <div className="container-fluid pl-60 pr-60">
        <Link className="navbar-brand header_logo" href="/">
          <img
            className="first_logo sticky_logo main_logo"
            src="/img/logo-dark.png"
            srcSet="/img/logo-dark.png"
            alt="logo"
          />
          <img
            className="white_logo"
            src="/img/logo-light.png"
            srcSet="/img/logo-light.png"
            alt="logo"
          />
        </Link>
        <div className="mobile-dark-mode d-lg-none">
          <label htmlFor="something" className="tab-btn tab-btns">
            <i style={{ fontSize: "30px" }} className="icon_lightbulb_alt" />
          </label>
          <label htmlFor="something" className="tab-btn"></label>
        </div>
        <div className="mobile-dark-mode d-lg-none">
          <label htmlFor="something" className="tab-btn tab-btns">
            {/*    <i style="font-size: 30px;" class="icon_lightbulb_alt"></i>   */}
          </label>
          <label htmlFor="something" className="tab-btn"></label>
        </div>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="menu_toggle">
            <span className="hamburger">
              <span />
              <span />
              <span />
            </span>
            <span className="hamburger-cross">
              <span />
              <span />
            </span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav menu ml-auto">
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="#" className="nav-link">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Services
              </Link>
            </li>
          </ul>
          <div className="right-nav">
            <Link
              className="nav_btn tp_btn m-2"
              href="https://dashboard.encryptbox.co.uk/"
            >
              Merchant Login
            </Link>
            <Link
              className="nav_btn tp_btn ml-3"
              href="https://dashboard.encryptbox.co.uk/signup"
              target="_blank"
              rel="noreferrer"
            >
              Get Started
            </Link>
            <div
              className="px-2 js-darkmode-btn d-flex align-items-center justify-content-center"
              title="Toggle dark mode"
            >
              <label htmlFor="something" className="tab-btn tab-btns">
                <i
                  style={{ fontSize: "30px" }}
                  className="icon_lightbulb_alt"
                />
              </label>
              <input
                type="checkbox"
                name="something"
                id="something"
                className="dark_mode_switcher"
              />
              <label htmlFor="something" className="tab-btn"></label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
