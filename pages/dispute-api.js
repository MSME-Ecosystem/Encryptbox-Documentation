import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";
import { dispute, disputeEp } from "@/components/endpoints";

export default function Dispute() { 

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
              <div className="sample-code-sticky" id="sample-dispute">
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
    </>
  );
};
