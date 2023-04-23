import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";
import { Waypoint } from "react-waypoint";
import { gethistories, gethistory, gethistoryEp, type } from "@/components/endpoints";

export default function Voucher() { 
  const [isSamplecustomerTxActive, setIsSamplecustomerTxActive] = useState(
    false
  );
  const [isSamplemultipleTxActive, setIsSamplemultipleTxActive] = useState(
    false
  );

  const handleWaypointEnter = (id) => {
    if (id === "sample-customerTransactions") {
      setIsSamplecustomerTxActive(true);
      setIsSamplemultipleTxActive(false);
    } else if (id === "sample-multipleUsersTransactions") {
      setIsSamplecustomerTxActive(false);
      setIsSamplemultipleTxActive(true);
    } else {
      setIsSamplecustomerTxActive(false);
      setIsSamplemultipleTxActive(false);
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
                    <h2>Transaction History</h2>
                    <p>
                      <span>
                        The EncryptBox transaction history endpoints can be used
                        to fetch all transactions carried out by customers.
                        Transaction History can be fetched for individual users
                        or for all users using specific date range
                      </span>
                    </p>
                    <p>
                      <span>
                        To Initialize this APIs, the transaction type must be
                        added to the payload
                      </span>
                    </p>
                    <div className="shortcode_title">
                      <h4 className="s_title" id="tab2">
                        Sample Types
                      </h4>
                      <div className="alert media message_alert alert-info">
                        <div className="media-body">
                          <span>
                            <pre>
                              <code>{`{"type": "1"}`}</code>
                            </pre>
                          </span>
                          <p>Fetch all crypto and voucher based transactions</p>
                        </div>
                      </div>
                      <div className="alert media message_alert alert-info">
                        <div className="media-body">
                          <span>
                            <pre>
                              <code>{`{"type": "2"}`}</code>
                            </pre>
                          </span>
                          <p>Fetch all voucher based transactions only</p>
                        </div>
                      </div>
                      <div className="alert media message_alert alert-info">
                        <div className="media-body">
                          <span>
                            <pre>
                              <code>{`{"type": "3"}`}</code>
                            </pre>
                          </span>
                          <p>Fetch all crypto based transactions only</p>
                        </div>
                      </div>
                      <div className="code_item">
                          <h4 className="c_head load-order-2" id="inline">
                            Success Type Response
                          </h4>
                          <Code code={type} language="json"></Code>
                        </div>
                    </div>

                    <Waypoint
                      onEnter={() =>
                        handleWaypointEnter("sample-customerTransactions")
                      }
                      onLeave={() =>
                        handleWaypointLeave("sample-customerTransactions")
                      }
                    >
                      <div className="shortcode_info" id="customerTransactions">
                        <div className="shortcode_title">
                          <h4 className="s_title">
                            Fetch transaction history of a customer
                          </h4>
                          <p>
                            Purpose: To fetch the transaction history of a
                            customer. This is only restricted to transactions
                            within a year
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
                                environment{"}"}/gethistory
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
                          <Code code={gethistory} language="json"></Code>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Sample Response Codes
                          </h4>
                          <div className="alert media message_alert fade show">
                            <div className="media-body">
                              <p>202</p>
                              <span>History Fetched</span>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">404</h5>
                              <p>Customer doesn&apos;t exist</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Waypoint>
                    <Waypoint
                      onEnter={() =>
                        handleWaypointEnter("sample-multipleUsersTransactions")
                      }
                      onLeave={() =>
                        handleWaypointLeave("sample-multipleUsersTransactions")
                      }
                    >
                      <div
                        className="shortcode_info"
                        id="multipleUsersTransactions"
                      >
                        <div className="shortcode_title">
                          <h4 className="s_title">
                            Fetch all users transaction histories
                          </h4>
                          <p>
                            Purpose: To fetch the summary of transactions
                            carried out by users within a period of time
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
                                environment{"}"}/gethistories
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
                          <Code code={gethistories} language="json"></Code>
                        </div>
                        <div className="shortcode_title">
                          <h4 className="s_title" id="tab2">
                            Sample Response Codes
                          </h4>
                          <div className="alert media message_alert fade show">
                            <div className="media-body">
                              <p>200</p>
                              <span>OK</span>
                            </div>
                          </div>
                          <div className="alert media message_alert alert-info fade show">
                            <div className="media-body">
                              <h5 className="m-0">406</h5>
                              <p>Account doesn&apos;t exist</p>
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
              {isSamplecustomerTxActive ? (
                <div
                  className="sample-code-sticky"
                  id="sample-customerTransactions"
                >
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Get a customer transaction History Endpoint&nbsp;
                          <span className="badge badge-primary">Post</span>
                        </h5>
                        <p>/api/v1/live/gethistory</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={gethistoryEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : isSamplemultipleTxActive ? (
                <div
                  className="sample-code-sticky"
                  id="sample-multipleUsersTransactions"
                >
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Get customer transactions Endpoint&nbsp;
                          <span className="badge badge-primary">POST</span>
                        </h5>
                        <p>/api/v1/live/gethistories</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={gethistoriesEp} language="json"></Code>
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
