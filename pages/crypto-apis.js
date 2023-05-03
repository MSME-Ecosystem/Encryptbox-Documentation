import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";
 

export default function Crypto() {
  const getbuyrate = `{
    statuscode: "202",
    status: true,
    coin: 2.600780234070221,
    rate: 769,
    updated_at: "2023-04-11T10:58:45.000Z",
  }`;
  const getsellrate = `{
    statuscode: "202",
    status: true,
    amount: 11550,
    rate: 770,
    updated_at: "2023-04-06T12:23:52.000Z",
  }`;
  const buycoin = `{
    statuscode: "202",
    status: true,
    message: "Transfer successful",
    current_balance: 220,
    coin_quantity: 0.12990387113535984,
  }`;
  const getbuyrateEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate",
    {
      amount: 2000,
      coin_name: "bus",
      status: "buy",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
  const getsellrateEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getsellrate",
    {
      coin: 15,
      coin_name: "busd",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
  const buycoinEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/buycoin",
    {
      reference: "reference96665568",
      sender_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
      amount: "100git ",
      currency: "msme",
      wallet_address: "0xBed65907D3cE38a36E09897ab2f709E2B9563aeFF",
      transaction_desc: "Testing busd on encryptbox",
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
                        <div className="shortcode_info pt-0" id="getbuyrate">
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
                        <div className="shortcode_info" id="getsellrate">
                          <div className="shortcode_title">
                            <h4 className="s_title">Get Sell Rate</h4>
                            <p>
                              Purpose: To fetch the current Sell price of cypto
                              currencies
                            </p>
                            <p>
                              Note: You can only fetch the sell price of our
                              supported Crypto currencies. This can be achieved
                              by passing the coin name to the 
                              <code>&nbsp;&quot;coin_name&quot;</code> payload
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
                        <div className="shortcode_info pt-0" id="buycoin">
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
                      </div>
                    </article>
                    <Feedback />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div id="sample-getbuyrate ">
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
                  <div id="sample-getsellrate">
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
                  <div id="sample-buycoin">
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
