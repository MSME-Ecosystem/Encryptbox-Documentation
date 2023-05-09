import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";
import {
  getbalance,
  getbalanceEp,
  sell,
  sellEp,
  transfer,
  transferEp,
} from "@/components/endpoints";

export default function Voucher() {
  const [isSampleBalanceActive, setIsSampleBalanceActive] = useState(false);
  const [isSampleTransferActive, setIsSampleTransferActive] = useState(false);
  const [isSampleSellActive, setIsSampleSellActive] = useState(false);

  const __getBalanceRef = useRef(null);
  const __sellVoucher = useRef(null);
  const __transferVoucher = useRef(null);

  useEffect(() => {
    const __getBalanceSection = __getBalanceRef.current;
    const __sellVoucherSection = __sellVoucher.current;
    const __transferVoucherSection = __transferVoucher.current;

    const handleScroll = () => {
      if (
        __getBalanceSection &&
        __sellVoucherSection &&
        __transferVoucherSection
      ) {
        const getBalanceOffset = __getBalanceRef.current.offsetTop;
        const sellVoucherOffset = __sellVoucher.current.offsetTop;
        const transferVoucherOffset = __transferVoucher.current.offsetTop;

        const scrollPosition = window.scrollY + 50;

        if (
          (scrollPosition <= getBalanceOffset ||
            scrollPosition >= getBalanceOffset) &&
          scrollPosition < transferVoucherOffset
        ) {
          setIsSampleBalanceActive(true);
          setIsSampleTransferActive(false);
          setIsSampleSellActive(false);
        } else if (
          scrollPosition >= transferVoucherOffset &&
          scrollPosition < sellVoucherOffset
        ) {
          setIsSampleBalanceActive(false);
          setIsSampleTransferActive(true);
          setIsSampleSellActive(false);
        } else if (scrollPosition >= sellVoucherOffset) {
          setIsSampleBalanceActive(false);
          setIsSampleTransferActive(false);
          setIsSampleSellActive(true);
        } else {
          setIsSampleBalanceActive(false);
          setIsSampleTransferActive(false);
          setIsSampleSellActive(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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

                    <div className="shortcode_info pt-0" ref={__getBalanceRef}>
                      <div className="shortcode_title">
                        <h4 className="s_title">Get Balance</h4>
                        <p>
                          Purpose: To view available voucher credit users have
                          in their voucher wallet
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
                                You can only fetch the balance of one user at a
                                time
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

                    {/* Transfer Voucher */}
                    <div className="shortcode_info" ref={__transferVoucher}>
                      <div className="shortcode_title">
                        <h4 className="s_title">Transfer Voucher</h4>
                        <p>
                          Purpose: To transfer voucher from one user to another
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

                    {/* Sell Voucher */}
                    <div className="shortcode_info pt-0" ref={__sellVoucher}>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sell Voucher</h4>
                        <p>
                          Purpose: To sell voucher in exchange for Fiat currency
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
    </>
  );
};
