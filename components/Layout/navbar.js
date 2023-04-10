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
            srcSet="/img/logo-dark.png 2x"
            alt="logo"
            height={25}
            width={150}
          />
            <img
            className="white_logo"
            src="/img/logo-light.png"
            srcSet="/img/logo-light.png 2x"
            alt="logo"
            height={25}
            width={150}
          />
        
        </Link>
        <div className="search-input">
          <ion-icon className="search-icon" name="search-outline" />
          <input type="text" placeholder="Search..." defaultValue />
        </div>
        <div className="mobile-dark-mode d-lg-none">
          <label htmlFor="something" className="tab-btn tab-btns">
            <ion-icon className="light-mode" name="contrast" />
          </label>
          <label htmlFor="something" className="tab-btn">
            <ion-icon className="dark-mode" name="contrast-outline" />
          </label>
        </div>
        <div className="mobile-dark-mode d-lg-none">
          <label htmlFor="something" className="tab-btn tab-btns">
            <ion-icon className="light-mode" name="contrast" />
          </label>
          <label htmlFor="something" className="tab-btn">
            <ion-icon className="dark-mode" name="contrast-outline" />
          </label>
        </div>
        {/* <button
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
        </button> */}
        <div className="collapse navbar-collapse d-flex align-items-right" id="navbarSupportedContent">
        {/*   <ul className="navbar-nav menu ml-auto">
            <li className="nav-item dropdown submenu">
              <a href="index-2.html" className="nav-link dropdown-toggle">
                Home
              </a>
              <i
                className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                aria-hidden="false"
                data-toggle="dropdown"
              />
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="index-2.html" className="nav-link">
                    Creative Helpdesk
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index-multi.html" className="nav-link">
                    Multi Helpdesk
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index-classic.html" className="nav-link">
                    Classic Helpdesk
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu mega_menu tab-demo">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Docs
              </a>
              <i
                className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                aria-hidden="true"
                data-toggle="dropdown"
              />
              <ul className="dropdown-menu">
                <li>
                  <div className="row">
                    <div className="col-lg-5 tabHeader">
                      <ul
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <li className="nav-item active">
                          <a
                            className="nav-link"
                            id="v-pills-doc-tab"
                            data-toggle="pill"
                            href="#v-pills-doc"
                            role="tab"
                            aria-controls="v-pills-doc"
                            aria-selected="true"
                          >
                            Doc Archives
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="v-pills-code-tab"
                            data-toggle="pill"
                            href="#v-pills-code"
                            role="tab"
                            aria-controls="v-pills-code"
                            aria-selected="false"
                          >
                            Elements
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="v-pills-layout-tab"
                            data-toggle="pill"
                            href="#v-pills-layout"
                            role="tab"
                            aria-controls="v-pills-layout"
                            aria-selected="false"
                          >
                            Layouts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="v-pills-tour-tab"
                            data-toggle="pill"
                            href="#v-pills-tour"
                            role="tab"
                            aria-controls="v-pills-tour"
                            aria-selected="false"
                          >
                            Reference
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="v-pills-content-tab"
                            data-toggle="pill"
                            href="#v-pills-content"
                            role="tab"
                            aria-controls="v-pills-content"
                            aria-selected="false"
                          >
                            Content
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="v-pills-pages-tab"
                            data-toggle="pill"
                            href="#v-pills-pages"
                            role="tab"
                            aria-controls="v-pills-pages"
                            aria-selected="false"
                          >
                            Other Pages
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-7">
                      <div
                        className="tab-content tabContent"
                        id="v-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade active show"
                          id="v-pills-doc"
                          role="tabpanel"
                          aria-labelledby="v-pills-doc-tab"
                        >
                          <div className="d-flex">
                            <ul className="list-unstyled tab_list">
                              <li>
                                {" "}
                                <a href="doc-main.html"> Doc Topics </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="archive-doc-single.html">
                                  {" "}
                                  Single Product{" "}
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="archive-doc-multi.html">
                                  {" "}
                                  Multi Products{" "}
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="text">
                            <a href="doc-main.html">
                              <p>More Categories</p>
                            </a>
                            <a href="doc-main.html">
                              <p>All docs</p>
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-code"
                          role="tabpanel"
                          aria-labelledby="v-pills-code-tab"
                        >
                          <div className="d-flex">
                            <ul className="list-unstyled tab_list">
                              <li>
                                <a href="doc-element-tab.html">Tabs</a>
                              </li>
                              <li>
                                <a
                                  className="active"
                                  href="doc-element-accordion.html"
                                >
                                  Accordion
                                </a>
                              </li>
                              <li>
                                <a href="doc-element-notice.html">Notice</a>
                              </li>
                              <li>
                                <a href="doc-content-tables.html">Tables</a>
                              </li>
                            </ul>
                            <ul className="list-unstyled tab_list">
                              <li>
                                <a href="doc-element-hotspots.html">
                                  Image Hotspots
                                </a>
                              </li>
                              <li>
                                <a href="doc-element-code.html">Source Code</a>
                              </li>
                              <li>
                                <a href="doc-element-lightbox.html">
                                  Image Lightbox
                                </a>
                              </li>
                              <li>
                                <a href="doc-ref-cheatsheet.html">Cheatsheet</a>
                              </li>
                            </ul>
                          </div>
                          <div className="text">
                            <a href="#">
                              <p>More Categories</p>
                            </a>
                            <a href="doc-main.html">
                              <p>All docs</p>
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-layout"
                          role="tabpanel"
                          aria-labelledby="v-pills-layout-tab"
                        >
                          <div className="d-flex">
                            <ul className="list-unstyled tab_list">
                              <li>
                                <a href="doc-element-hotspots.html">
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="doc-content-video.html">Full-width</a>
                              </li>
                              <li>
                                <a href="doc-layout-banner-gradient.html">
                                  Gradient Banner
                                </a>
                              </li>
                              <li>
                                <a href="doc-layout-banner-empty.html">
                                  Without Banner
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="text">
                            <a href="#">
                              <p>More Categories</p>
                            </a>
                            <a href="#">
                              <p>All docs</p>
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-tour"
                          role="tabpanel"
                          aria-labelledby="v-pills-tour-tab"
                        >
                          <div className="d-flex">
                            <ul className="list-unstyled tab_list w_100">
                              <li>
                                <a href="doc-ref-cheatsheet.html">Cheatsheet</a>
                              </li>
                              <li>
                                <a href="doc-ref-footnote.html">Footnotes</a>
                              </li>
                              <li>
                                <a href="doc-tour.html">Interface Tour</a>
                              </li>
                              <li>
                                <a href="doc-ref-can-use.html">Can I Use</a>
                              </li>
                              <li>
                                <a href="doc-content-tooltip.html">
                                  Tooltips &amp; Direction
                                </a>
                              </li>
                              <li>
                                <a href="doc-ref-shortcuts.html">
                                  Keyboard Shortcuts
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="text">
                            <a href="#">
                              <p>More Categories</p>
                            </a>
                            <a href="#">
                              <p>All docs</p>
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-content"
                          role="tabpanel"
                          aria-labelledby="v-pills-content-tab"
                        >
                          <div className="d-flex">
                            <ul className="list-unstyled tab_list">
                              <li>
                                <a href="doc-content-image.html">Image</a>
                              </li>
                              <li>
                                <a
                                  className="active"
                                  href="doc-content-tables.html"
                                >
                                  Tables
                                </a>
                              </li>
                              <li>
                                <a href="doc-content-video.html">Video</a>
                              </li>
                              <li>
                                <a href="typography.html">Typography</a>
                              </li>
                              <li>
                                <a href="doc-content-tooltip.html">
                                  Tooltips &amp; Direction
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="text">
                            <a href="#">
                              <p>More Categories</p>
                            </a>
                            <a href="#">
                              <p>All docs</p>
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-pages"
                          role="tabpanel"
                          aria-labelledby="v-pills-pages-tab"
                        >
                          <div className="d-flex">
                            <ul className="list-unstyled tab_list">
                              <li>
                                {" "}
                                <a href="onepage.html">Onepage</a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="doc-main.html">Doc Topics</a>
                              </li>
                              <li>
                                {" "}
                                <a href="doc-tour.html">Cheatsheet</a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="doc-changelog.html">Changelog</a>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="text">
                            <a href="#">
                              <p>More Categories</p>
                            </a>
                            <a href="doc-main.html">
                              <p>All docs</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu active">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <i
                className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                aria-hidden="false"
                data-toggle="dropdown"
              />
              <ul className="dropdown-menu">
                <li className="nav-item active">
                  <a href="onepage.html" className="nav-link">
                    Onepage Doc
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="forums.html" className="nav-link">
                    Forum
                  </a>
                </li>
                <li className="nav-item">
                  <a href="signin.html" className="nav-link">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="signup.html" className="nav-link">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a href="typography.html" className="nav-link">
                    Typography
                  </a>
                </li>
                <li className="nav-item">
                  <a href="404-error.html" className="nav-link">
                    404 Error
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a
                className="nav-link dropdown-toggle"
                href="forums.html"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Forum
              </a>
              <i
                className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                aria-hidden="false"
                data-toggle="dropdown"
              />
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="forums.html" className="nav-link">
                    Forums Root
                  </a>
                </li>
                <li className="nav-item">
                  <a href="forum-topics.html" className="nav-link">
                    Forum Topics
                  </a>
                </li>
                <li className="nav-item">
                  <a href="forum-single.html" className="nav-link">
                    Topic Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="forum-profile.html" className="nav-link">
                    User Profile
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <i
                className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                aria-hidden="false"
                data-toggle="dropdown"
              />
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="blog-grid.html" className="nav-link">
                    Extended Grid
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog-grid-two.html" className="nav-link">
                    Grid with Sidebar
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog-list.html" className="nav-link">
                    List with Sidebar
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog-single.html" className="nav-link">
                    Post Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog-single2.html" className="nav-link">
                    Post Details Two
                  </a>
                </li>
              </ul>
            </li>
          </ul> */}
          <div className="right-nav">
            <Link
              className="nav_btn tp_btn "
              href="https://dashboard.encryptbox.co.uk/"
              target="_blank"
            >
             Login
            </Link>
            <a
              className="nav_btn tp_btn ml-3"
              href="https://dashboard.encryptbox.co.uk/signup"
              target="_blank"
              rel="noreferrer"
            >
             Sign Up
            </a>            
         
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
