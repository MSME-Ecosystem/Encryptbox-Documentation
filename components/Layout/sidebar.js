import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
 
      <aside className="doc_left_sidebarlist">
        <h3 className="nav_title">Doc Navigation</h3>
        <div className="scroll">
          <ul className="list-unstyled nav-sidebar doc-nav">
            <li className="nav-item active">
              <Link href="#doc" className="nav-link">               
                Getting Started
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/authentication" className="nav-link">
                <img src="img/side-nav/briefcase.png" alt="briefcase" />
                Authentication
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/account-apis" className="nav-link">
                <img src="img/side-nav/chat1.png" alt="" />
                Users
              </Link>
              <span className="icon">
                <i className="arrow_carrot-right"></i>
                <i className="arrow_carrot-down"></i>
              </span>
              <ul className="list-unstyled dropdown_nav">
                <li className="nav-item">
                  <Link href="/account-apis#createUsers" className="nav-link">
                    Create Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/account-apis#enterpriseDetails" className="nav-link">
                    Personal Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/account-apis#userDetails" className="nav-link">
                    Users Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/account-apis#multipleUserDetails"
                    className="nav-link"
                  >
                    All Users
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/voucher-apis" className="nav-link">
                <img src="img/side-nav/document.png" alt="" />
                Voucher Transactions
              </Link>
              <span className="icon">
                <i className="arrow_carrot-right"></i>
                <i className="arrow_carrot-down"></i>
              </span>
              <ul className="list-unstyled dropdown_nav">
                <li className="nav-item">
                  <Link href="/voucher-apis#getBalance" className="nav-link">
                    Get Balance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/voucher-apis#transferVoucher" className="nav-link">
                    Transfer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/voucher-apis#sellVoucher" className="nav-link">
                    Sell Voucher
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/voucher-apis#customerTransactions"
                    className="nav-link"
                  >
                    Customer Transactions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/voucher-apis#multipleUsersTransactions"
                    className="nav-link"
                  >
                    All Transactions
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/crypto-apis" className="nav-link">
                <img src="img/side-nav/clock.png" alt="" />
                Crypto Transactions
              </Link>
              <span className="icon">
                <i className="arrow_carrot-right"></i>
                <i className="arrow_carrot-down"></i>
              </span>
              <ul className="list-unstyled dropdown_nav">
                <li className="nav-item">
                  <Link href="/crypto-apis#getbuyrate" className="nav-link">
                    Get Buy Rate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/crypto-apis#getsellrate" className="nav-link">
                    Get Sell Rate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/crypto-apis#buycoin" className="nav-link">
                    Buy Coin
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/dispute-api" className="nav-link">
                <img src="img/side-nav/support.png" alt="" />
                Manage Dispute
              </Link>
            </li>
          </ul>
        </div>
      </aside>
   
  );
}

export default Sidebar;
