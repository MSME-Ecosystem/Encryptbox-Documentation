import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback"; 
import {
  TXFee,
  TXFeeEp,
  availableCoin,
  buycoin,
  buycoinEp,
  getavailablecoinEp,
  getbuyrate,
  getbuyrateEp,
  getsellrate,
  getsellrateEp,
  verifyTransaction,
  verifyTransactionEp,
} from "@/components/endpoints";

export default function Crypto() {
  const [sampleVerifyTX, setIssampleVerifyTX] = useState(false);

  const [sampleAvailableCoin, setIssampleAvailableCoin] = useState(false);

  const [sampleGetbuyrate, setIsSampleBuyActive] = useState(false);
  const [sampleGetsellrate, setIsSampleSellActive] = useState(false);
  const [sampleGetTXFee, setsampleGetTXFeeActive] = useState(false);
  const [sampleBuycoin, setIsSampleBuycoinActive] = useState(false);

  const __getavailablecoin = useRef(null);
  const __getbuyrate = useRef(null);
  const __getsellrate = useRef(null);
  const __getTXfee = useRef(null);
  const __buycoin = useRef(null);
  const __verifyTransaction = useRef(null);

  useEffect(() => {
    const __getavailablecoinSection = __getavailablecoin.current;
    const __getbuyrateSection = __getbuyrate.current;
    const __getsellrateSection = __getsellrate.current;
    const __getTXfeeSection = __getTXfee.current;
    const __buycoinSection = __buycoin.current;
    const __verifyTransactionSection = __verifyTransaction.current;

    const handleScroll = () => {
      if (
        __getavailablecoinSection &&
        __getbuyrateSection &&
        __getsellrateSection &&
        __getTXfeeSection &&
        __buycoinSection &&
        __verifyTransactionSection
      ) {
        const getavailablecoin = __getavailablecoin.current.offsetTop;
        const getbuyrate = __getbuyrate.current.offsetTop;
        const getsellrate = __getsellrate.current.offsetTop;
        const getTXfee = __getTXfee.current.offsetTop;
        const buycoin = __buycoin.current.offsetTop;
        const verifyTransaction = __verifyTransaction.current.offsetTop;

        const scrollPosition = window.scrollY + 50;

        if (
          (scrollPosition <= getavailablecoin ||
            scrollPosition >= getavailablecoin) &&
          scrollPosition < getbuyrate
        ) {
          setIssampleAvailableCoin(true);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(false);
          setsampleGetTXFeeActive(false);
          setIsSampleBuycoinActive(false);
          setIssampleVerifyTX(false);
        } else if (
          scrollPosition >= getbuyrate &&
          scrollPosition < getsellrate
        ) {
          setIssampleAvailableCoin(true);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(false);
          setsampleGetTXFeeActive(false);
          setIsSampleBuycoinActive(false);
          setIssampleVerifyTX(false);
        } else if (scrollPosition >= getsellrate && scrollPosition < getTXfee) {
          setIssampleAvailableCoin(false);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(true);
          setsampleGetTXFeeActive(false);
          setIsSampleBuycoinActive(false);
          setIssampleVerifyTX(false);
        } else if (scrollPosition >= getTXfee && scrollPosition < buycoin) {
          setIssampleAvailableCoin(false);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(false);
          setsampleGetTXFeeActive(true);
          setIsSampleBuycoinActive(false);
          setIssampleVerifyTX(false);
        } else if (
          scrollPosition >= buycoin &&
          scrollPosition < verifyTransaction
        ) {
          setIssampleAvailableCoin(false);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(false);
          setsampleGetTXFeeActive(false);
          setIsSampleBuycoinActive(true);
          setIssampleVerifyTX(false);
        } else if (scrollPosition >= verifyTransaction) {
          setIssampleAvailableCoin(false);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(false);
          setsampleGetTXFeeActive(false);
          setIsSampleBuycoinActive(false);
          setIssampleVerifyTX(true);
        } else {
          setIssampleAvailableCoin(false);
          setIsSampleBuyActive(false);
          setIsSampleSellActive(false);
          setsampleGetTXFeeActive(false);
          setIsSampleBuycoinActive(false);
          setIssampleVerifyTX(false);
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
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="documentation_info" id="post">
                    {/*doc*/}
                    <article
                      className="documentation_body doc-section pt-0"
                      id="crypto"
                    >
                      <div className="shortcode_title">
                        <h2>Crypto Wallet</h2>
                        <p>
                          <span>
                            The EncryptBox Crypto Wallet endpoints can be used
                            to initiate crypto/voucher transactions
                          </span>
                        </p>

                        <div
                          className="shortcode_info pt-0"
                          ref={__getavailablecoin}
                        >
                          <div className="shortcode_title">
                            <h4 className="s_title">Fetch Available Coin</h4>
                            <p>
                              Purpose: To fetch the coin list supported by
                              EncryptBox
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
                                  {"{"}api-domain{"}"}/api/{"{"}version{"}"}/
                                  {"{"}
                                  environment{"}"}/availablecoin
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
                            <Code code={availableCoin} language="json"></Code>
                          </div>
                          <div className="shortcode_title">
                            <h4 className="s_title" id="tab2">
                              Sample Response Codes
                            </h4>
                            <div className="alert media message_alert fade show">
                              <div className="media-body">
                                <p>202</p>
                                <span>Available Coin Fetched successfully</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="shortcode_info pt-0" ref={__getbuyrate}>
                          <div className="shortcode_title">
                            <h4 className="s_title">Get Buy Rate</h4>
                            <p>
                              Purpose: Know the current crypto currency buy
                              price
                            </p>
                            <p>
                              Note: You can only fetch the current buy price of
                              our supported Crypto currencies. This can be
                              achieve by passing the coin name to the
                              <code>&quot;coin_name&quot;</code> payload
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
                                  {"{"}api-domain{"}"}/api/{"{"}version{"}"}/
                                  {"{"}
                                  environment{"}"}/getbuyrate
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
                            <Code code={getbuyrate} language="json"></Code>
                          </div>
                          <div className="shortcode_title">
                            <h4 className="s_title" id="tab2">
                              Sample Response Codes
                            </h4>
                            <div className="alert media message_alert fade show">
                              <div className="media-body">
                                <p>202</p>
                                <span>Price Fetched successfully</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="shortcode_info" ref={__getsellrate}>
                          <div className="shortcode_title">
                            <h4 className="s_title">Get Sell Rate</h4>
                            <p>
                              Purpose: To fetch the current Sell price of cypto
                              currencies
                            </p>
                            <p>
                              Note: You can only fetch the sell price of our
                              supported Crypto currencies. This can be achieve
                              by passing the coin name to the
                              <code>&quot;coin_name&quot;</code> payload
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
                                  {"{"}api-domain{"}"}/api/{"{"}version{"}"}/
                                  {"{"}
                                  environment{"}"}/getsellrate
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
                            <Code code={getsellrate} language="json"></Code>
                          </div>
                          <div className="shortcode_title">
                            <h4 className="s_title" id="tab2">
                              Sample Response Codes
                            </h4>
                            <div className="alert media message_alert fade show">
                              <div className="media-body">
                                <p>202</p>
                                <span>Successful</span>
                              </div>
                            </div>
                            <div className="alert media message_alert alert-info fade show">
                              <div className="media-body">
                                <h5 className="m-0">Invalid coin name</h5>
                                <p>
                                  <code>
                                    &quot;rates&quot;: &quot;error&quot;
                                  </code>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="shortcode_info" ref={__getTXfee}>
                          <div className="shortcode_title">
                            <h4 className="s_title">Get Transaction Fee</h4>
                            <p>
                              Purpose: To fetch the transaction fees which would
                              be charged for transactions at any time. It is
                              important to note that transaction fees may vary
                              from time to time.
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
                                  {"{"}api-domain{"}"}/api/{"{"}version{"}"}/
                                  {"{"}
                                  environment{"}"}/getFee
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
                            <Code code={TXFee} language="json"></Code>
                          </div>
                          <div className="shortcode_title">
                            <h4 className="s_title" id="tab2">
                              Sample Response Codes
                            </h4>
                            <div className="alert media message_alert fade show">
                              <div className="media-body">
                                <p>202</p>
                                <span>Successful</span>
                              </div>
                            </div>
                            <div className="alert media message_alert alert-info fade show">
                              <div className="media-body">
                                <h5 className="m-0">404</h5>
                                <p>Coin does not exist</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="shortcode_info pt-0" ref={__buycoin}>
                          <div className="shortcode_title">
                            <h4 className="s_title">Buy Coin</h4>
                            <p>
                              Purpose: To purchase crypto using voucher credits
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
                                  {"{"}api-domain{"}"}/api/{"{"}version{"}"}/
                                  {"{"}
                                  environment{"}"}/buycoin
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
                            <Code code={buycoin} language="json"></Code>
                          </div>
                          <div className="shortcode_title">
                            <h4 className="s_title" id="tab2">
                              Sample Response Codes
                            </h4>
                            <div className="alert media message_alert fade show">
                              <div className="media-body">
                                <p>202</p>
                                <span>Success</span>
                              </div>
                            </div>
                            <div className="alert media message_alert alert-info fade show">
                              <div className="media-body">
                                <h5 className="m-0">305</h5>
                                <p>Insufficient Balance</p>
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

                        <div
                          className="shortcode_info pt-0"
                          ref={__verifyTransaction}
                        >
                          <div className="shortcode_title">
                            <h4 className="s_title">Verify Transaction</h4>
                            <p>
                              Purpose: To fetch the details of a transaction
                              carried out. This is usually queried with the
                              transaction Id
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
                                  {"{"}api-domain{"}"}/api/{"{"}version{"}"}/
                                  {"{"}
                                  environment{"}"}/verifytransaction
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
                            <Code
                              code={verifyTransaction}
                              language="json"
                            ></Code>
                          </div>
                          <div className="shortcode_title">
                            <h4 className="s_title" id="tab2">
                              Sample Response Codes
                            </h4>
                            <div className="alert media message_alert fade show">
                              <div className="media-body">
                                <p>202</p>
                                <span>Success</span>
                              </div>
                            </div>
                            <div className="alert media message_alert alert-info fade show">
                              <div className="media-body">
                                <h5 className="m-0">404</h5>
                                <p>No transaction found</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <Feedback />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  {sampleAvailableCoin ? (
                    <div
                      className="sample-code-sticky"
                      id="sample-getavailablecoin"
                    >
                      <div className="shortcode_title">
                        <div
                          className="alert media message_alert fade show"
                          role="alert"
                        >
                          <div className="media-body">
                            <h5 className="s_title">
                              Get Available Coin Endpoint&nbsp;
                              <span className="badge badge-primary">Get</span>
                            </h5>
                            <span>/api/v1/live/availablecoin</span>
                          </div>
                        </div>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sample Request</h4>
                        <div className="media-body">
                          <Code
                            code={getavailablecoinEp}
                            language="json"
                          ></Code>
                        </div>
                      </div>
                    </div>
                  ) : sampleGetbuyrate ? (
                    <div className="sample-code-sticky" id="sample-getbuyrate">
                      <div className="shortcode_title">
                        <div
                          className="alert media message_alert fade show"
                          role="alert"
                        >
                          <div className="media-body">
                            <h5 className="s_title">
                              Get Buy Rate Endpoint&nbsp;
                              <span className="badge badge-primary">Post</span>
                            </h5>
                            <span>/api/v1/live/getbuyrate</span>
                          </div>
                        </div>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sample Request</h4>
                        <div className="media-body">
                          <Code code={getbuyrateEp} language="json"></Code>
                        </div>
                      </div>
                    </div>
                  ) : sampleGetsellrate ? (
                    <div className="sample-code-sticky" id="sample-getsellrate">
                      <div className="shortcode_title">
                        <div
                          className="alert media message_alert fade show"
                          role="alert"
                        >
                          <div className="media-body">
                            <h5 className="s_title">
                              Get Sell Rate Endpoint&nbsp;
                              <span className="badge badge-primary">POST</span>
                            </h5>
                            <p>/api/v1/live/getsellrate</p>
                          </div>
                        </div>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sample Request</h4>
                        <div className="media-body">
                          <Code code={getsellrateEp} language="json"></Code>
                        </div>
                      </div>
                    </div>
                  ) : sampleGetTXFee ? (
                    <div className="sample-code-sticky" id="sample-getTXfee">
                      <div className="shortcode_title">
                        <div
                          className="alert media message_alert fade show"
                          role="alert"
                        >
                          <div className="media-body">
                            <h5 className="s_title">
                              Get Sell Rate Endpoint&nbsp;
                              <span className="badge badge-primary">POST</span>
                            </h5>
                            <p>/api/v1/live/getFee</p>
                          </div>
                        </div>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sample Request</h4>
                        <div className="media-body">
                          <Code code={TXFeeEp} language="json"></Code>
                        </div>
                      </div>
                    </div>
                  ) : sampleBuycoin ? (
                    <div className="sample-code-sticky" id="sample-buycoin">
                      <div className="shortcode_title">
                        <div
                          className="alert media message_alert fade show"
                          role="alert"
                        >
                          <div className="media-body">
                            <h5 className="s_title">
                              Buy Coin Endpoint&nbsp;
                              <span className="badge badge-primary">POST</span>
                            </h5>
                            <p>/api/v1/live/buycoin</p>
                          </div>
                        </div>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sample Request</h4>
                        <div className="media-body">
                          <Code code={buycoinEp} language="json"></Code>
                        </div>
                      </div>
                    </div>
                  ) : sampleVerifyTX ? (
                    <div
                      className="sample-code-sticky"
                      id="sample-verifyTransaction"
                    >
                      <div className="shortcode_title">
                        <div
                          className="alert media message_alert fade show"
                          role="alert"
                        >
                          <div className="media-body">
                            <h5 className="s_title">
                              Verify Transaction Endpoint&nbsp;
                              <span className="badge badge-primary">POST</span>
                            </h5>
                            <p>/api/v1/live/verifytransaction</p>
                          </div>
                        </div>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title">Sample Request</h4>
                        <div className="media-body">
                          <Code
                            code={verifyTransactionEp}
                            language="json"
                          ></Code>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Crypto.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>      
    </>
  );
};
