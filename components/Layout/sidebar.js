import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <aside className="doc_left_sidebarlist">
      <h3 className="nav_title">Doc Navigation</h3>
      <div className="scroll">
        <ul className="list-unstyled nav-sidebar doc-nav">
          <li className="nav-item active">
            <Link href="/#doc" className="nav-link">
              <img src="img/side-nav/smiles-icon.png" alt="" />
              Getting Started
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/authentication#auth" className="nav-link">
              <img src="img/side-nav/briefcase.png" alt="briefcase" />
           Authentication
            </Link>            
          </li>
          <li className="nav-item">
            <a href="#tour" className="nav-link">
              <img src="img/side-nav/chat1.png" alt="" />
              Tour
            </a>
            <span className="icon">
              <i className="icon_plus" />
              <i className="icon_minus-06" />
            </span>
            <ul className="list-unstyled dropdown_nav">
              <li className="nav-item">
                <a href="#pointing" className="nav-link">
                  Image Hotspots
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#typography" className="nav-link">
              <img src="img/side-nav/document.png" alt="" />
              Content
            </a>
            <span className="icon">
              <i className="icon_plus" />
              <i className="icon_minus-06" />
            </span>
            <ul className="list-unstyled dropdown_nav">
              <li className="nav-item">
                <a href="#code" className="nav-link">
                  Code
                </a>
              </li>
              <li className="nav-item">
                <a href="#img" className="nav-link">
                  Image
                </a>
              </li>
              <li className="nav-item">
                <a href="#video" className="nav-link">
                  Video
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#changelog" className="nav-link">
              <img src="img/side-nav/clock.png" alt="" />
              Change Log
            </a>
          </li>
          <li className="nav-item">
            <a href="#cheatsheet" className="nav-link">
              <img src="img/side-nav/book.png" alt="" />
              Cheatsheet
            </a>
          </li>
          <li className="nav-item">
            <a href="#ex1" className="nav-link">
              <img src="img/side-nav/chat.png" alt="" />
              Example Item
            </a>
          </li>
          <li className="nav-item">
            <a href="#ex2" className="nav-link">
              <img src="img/side-nav/layout.png" alt="" />
              Example Item 02
            </a>
          </li>
          <li className="nav-item">
            <a href="#ex3" className="nav-link">
              <img src="img/side-nav/support.png" alt="" />
              Example Item 03
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
