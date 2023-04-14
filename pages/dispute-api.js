import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";

export default function Dispute() {
  const dispute = ` {
    statuscode: "202",
    message: "Dispute sent",
  }`;
  const disputeEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate",
    {
      dispute_file: "mjerepro.png",
      topic: "Transactional Errors",
      message: "I was trying to send money but the transaction was not successful",
      ticket_no: "0000",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;

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
                  id="dispute"
                >
                  <div className="shortcode_title">
                    <h2>Dispute API</h2>
                    <p>
                      <span>
                        The EncryptBox dispute API endpoints allows registered
                        members to send in their queries from their dashboard
                      </span>
                    </p>
                    <div className="shortcode_info pt-0" id="getbuyrate">
                      <div className="shortcode_title">
                        <h4 className="s_title">Manage Dispute</h4>
                        <p>Purpose: To open a support ticket for any queries</p>
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
                              environment{"}"}/dispute
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
                        <Code code={dispute} language="json"></Code>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title" id="tab2">
                          Sample Response Codes
                        </h4>
                        <div className="alert media message_alert fade show">
                          <div className="media-body">
                            <p>202</p>
                            <span>Dispute Sent</span>
                          </div>
                        </div>
                        <div className="alert media message_alert fade show">
                          <div className="media-body">
                            <p>501</p>
                            <span>Missing input parameter</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <Feedback />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className=" " id="sample-getbuyrate ">
                <div className="shortcode_title">
                  <div
                    className="alert media message_alert fade show"
                    role="alert"
                  >
                    <div className="media-body">
                      <h5 className="s_title">
                        Manage Dispute Endpoint&nbsp;
                        <span className="badge badge-primary">Post</span>
                      </h5>
                      <span>/api/v1/live/dispute</span>
                    </div>
                  </div>
                </div>
                <div className="shortcode_title">
                  <h4 className="s_title">Sample Request</h4>
                  <div className="media-body">
                    <Code code={disputeEp} language="json"></Code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Dispute.getLayout = function getLayout(page) {
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
