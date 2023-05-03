import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";
import { Waypoint } from "react-waypoint";
import { getbalance, getbalanceEp, sell, sellEp, transfer, transferEp } from "@/components/endpoints";

export default function Voucher() {  
  const [isSampleBalanceActive, setIsSampleBalanceActive] = useState(false);
  const [isSampleTransferActive, setIsSampleTransferActive] = useState(false);
  const [isSampleSellActive, setIsSampleSellActive] = useState(false);

  const handleWaypointEnter = (id) => {
    if (id === "sample-getBalance") {
      setIsSampleBalanceActive(true);
      setIsSampleTransferActive(false);
      setIsSampleSellActive(false);
    } else if (id === "sample-transferVoucher") {
      setIsSampleBalanceActive(false);
      setIsSampleTransferActive(true);
      setIsSampleSellActive(false);
    } else if (id === "sample-sellVoucher") {
      setIsSampleBalanceActive(false);
      setIsSampleTransferActive(false);
      setIsSampleSellActive(true);
    } else {
      setIsSampleBalanceActive(false);
      setIsSampleTransferActive(false);
      setIsSampleSellActive(false);
    }
  };

  const handleWaypointLeave = (id) => {
    // console.log("LeaveID: ", id);
    // setIsWaypointActive(false);
    // const myOtherDiv = document.getElementById(id);
    //  myOtherDiv.classList.remove("sticky-top");
  };
  return (
    <>
      <section
        className="doc_documentation_area onepage_doc_area"
        id="sticky_doc"
      >
        <div className="container-fluid pl-60 pr-60">
          <div className="row doc-container">
            <div className="col-lg-2 doc_mobile_menu doc-sidebar display_none">
              <Sidebar />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="documentation_info" id="post">
                {/*doc*/}
                <article
                  className="documentation_body doc-section pt-0"
                  id="voucher"
                >
                  <div className="shortcode_title">
                    <h2>Voucher Wallet</h2>
                    <p>
                      <span>
                        The EncryptBox Voucher Wallet endpoints can be used to
                        initiate voucher credit transactions as well as view
                        voucher credit transactional information
                      </span>
                    </p>

                    {/* Get Balance */}
                    <Waypoint
                      onEnter={() => handleWaypointEnter("sample-getBalance")}
                      onLeave={() => handleWaypointLeave("sample-getBalance")}
                    >
                      <div className="shortcode_info pt-0" id="getBalance">
                        <div className="shortcode_title">
                          <h4 className="s_title">Get Balance</h4>
                          <p>
                            Purpose: To view available voucher credit users
                            have in their voucher wallet
                          </p>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Request Details
                          </h4>
                          <div
                            className="alert media message_alert fade show"
                            role="alert"
                          >
                            <div className="media-body">
                              <h5>Request URL</h5>
                              <p>
                                {"{"}api-domain{"}"}/api/{"{"}version{"}"}/{"{"}
                                environment{"}"}/getbalance
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Header
                          </h4>
                          <div
                            className="alert media message_alert fade show"
                            role="alert"
                          >
                            <div className="media-body">
                              <span>
                                token: 1ffg4XXXXXXXXXXXXXXXXXXXXXXXX0jMnH
                              </span>
                            </div>
                          </div>
                        </div>
                        <blockquote className="media notice notice-success">
                          <div className="media-body">
                            <h5>Note</h5>
                            <ul>
                              <li>
                                <p>
                                  You can only fetch the balance of one user at
                                  a time
                                </p>
                              </li>
                              <li>
                                <p>
                                  Refer to
                                  <a href="/account#userDetails">
                                    User details API
                                  </a>
                                  to fetch more information about a user
                                </p>
                              </li>
                            </ul>
                          </div>
                        </blockquote>
                        <div className="code_item">
                          <h4 className="c_head load-order-2" id="inline">
                            Success Sample
                          </h4>
                          <Code code={getbalance} language="json"></Code>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Sample Response Codes
                          </h4>
                          <div className="alert media message_alert fade show">
                            <div className="media-body">
                              <p>202</p>
                              <span>Balance fetched successfully</span>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">404</h5>
                              <p>Customer doesn&apos;t exist</p>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">405</h5>
                              <p>Unauthorized Request</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Waypoint>
                    <Waypoint
                      onEnter={() =>
                        handleWaypointEnter("sample-transferVoucher")
                      }
                      onLeave={() =>
                        handleWaypointLeave("sample-transferVoucher")
                      }
                    >
                      <div className="shortcode_info" id="transferVoucher">
                        <div className="shortcode_title">
                          <h4 className="s_title">Transfer Voucher</h4>
                          <p>
                            Purpose: To transfer voucher from one user to
                            another
                          </p>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Request Details
                          </h4>
                          <div
                            className="alert media message_alert fade show"
                            role="alert"
                          >
                            <div className="media-body">
                              <h5>Request URL</h5>
                              <p>
                                {"{"}api-domain{"}"}/api/{"{"}version{"}"}/{"{"}
                                environment{"}"}/transfer
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Header
                          </h4>
                          <div
                            className="alert media message_alert fade show"
                            role="alert"
                          >
                            <div className="media-body">
                              <span>
                                token: 1ffg4XXXXXXXXXXXXXXXXXXXXXXXX0jMnH
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="code_item">
                          <h4 className="c_head load-order-2" id="inline">
                            Success Sample
                          </h4>
                          <Code code={transfer} language="json"></Code>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Sample Response Codes
                          </h4>
                          <div className="alert media message_alert fade show">
                            <div className="media-body">
                              <p>202</p>
                              <span>Transfer Successful</span>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">406</h5>
                              <p>Account Doesn&apos;t exist</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Waypoint>

                    <Waypoint
                      onEnter={() => handleWaypointEnter("sample-sellVoucher")}
                      onLeave={() => handleWaypointLeave("sample-sellVoucher")}
                    >
                      <div className="shortcode_info pt-0" id="sellVoucher">
                        <div className="shortcode_title">
                          <h4 className="s_title">Sell Voucher</h4>
                          <p>
                            Purpose: To sell voucher in exchange for Fiat
                            currency
                          </p>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Request Details
                          </h4>
                          <div
                            className="alert media message_alert fade show"
                            role="alert"
                          >
                            <div className="media-body">
                              <h5>Request URL</h5>
                              <p>
                                {"{"}api-domain{"}"}/api/{"{"}version{"}"}/{"{"}
                                environment{"}"}/sell
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Header
                          </h4>
                          <div
                            className="alert media message_alert fade show"
                            role="alert"
                          >
                            <div className="media-body">
                              <span>
                                token: 1ffg4XXXXXXXXXXXXXXXXXXXXXXXX0jMnH
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="code_item">
                          <h4 className="c_head load-order-2" id="inline">
                            Success Sample
                          </h4>
                          <Code code={sell} language="json"></Code>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Sample Response Codes
                          </h4>
                          <div className="alert media message_alert fade show">
                            <div className="media-body">
                              <p>202</p>
                              <span>Balance fetched successfully</span>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">404</h5>
                              <p>Customer doesn&apos;t exist</p>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">405</h5>
                              <p>Unauthorized Request</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Waypoint>
                  </div>
                </article>
                <Feedback />
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              {isSampleBalanceActive ? (
                <div className="sample-code-sticky" id="sample-getBalance">
                  <div className="shortcode_title">
                    {" "}
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Get Balance Endpoint&nbsp;
                          <span className="badge badge-primary">Post</span>
                        </h5>
                        <span>/api/v1/live/getbalance</span>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={getbalanceEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : isSampleTransferActive ? (
                <div className="sample-code-sticky" id="sample-transferVoucher">
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Voucher Transfer Endpoint&nbsp;
                          <span className="badge badge-primary">POST</span>
                        </h5>
                        <p>/api/v1/live/transfer</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={transferEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : isSampleSellActive ? (
                <div className="sample-code-sticky" id="sample-sellVoucher">
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Voucher Sale Endpoint&nbsp;
                          <span className="badge badge-primary">POST</span>
                        </h5>
                        <p>/api/v1/live/sell</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={sellEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Voucher.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>
      <Script src="/js/jquery-3.5.1.min.js" id="jquery"></Script>
      <Script src="/assets/bootstrap/js/popper.min.js" id="popper"></Script>
      <Script
        src="/assets/bootstrap/js/bootstrap.min.js"
        id="boostrapmin"
      ></Script>
      <Script
        src="/assets/bootstrap/js/bootstrap-select.min.js"
        id="boottrapselect"
      ></Script>
      <Script src="/js/parallaxie.js" id="paralaxie"></Script>
      <Script src="/js/TweenMax.min.js" id="TweenMax"></Script>
      <Script src="/js/anchor.js" id="anchor"></Script>
      <Script src="/assets/wow/wow.min.js" id="wow"></Script>
      <Script
        src="/assets/niceselectpicker/jquery.nice-select.min.js"
        id="niceselect"
      ></Script>
      <Script
        src="/assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js"
        id="customcrollbar"
      ></Script>
      <Script
        src="/assets/magnify-pop/jquery.magnific-popup.min.js"
        id="popup"
      ></Script>
      <Script
        src="/assets/tooltipster/js/tooltipster.bundle.min.js"
        id="tooltipster"
      ></Script>
      <Script
        src="/assets/font-size/js/rv-jquery-fontsize-2.0.3.js"
        id="rvjquery"
      ></Script>
      <Script
        src="https://unpkg.com/ionicons@latest/dist/ionicons.js"
        id="ionicons"
      ></Script>
      <Script src="/js/onpage-menu.js" id="onPageMenu"></Script>
      <Script src="/js/main.js" id="main"></Script>
    </>
  );
};
