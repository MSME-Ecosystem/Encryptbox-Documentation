import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";

export default function Voucher() {
  const getbalance = `{
    status: "202",
    customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
    message: "Customer Balance",
    time: "2023-04-11 13:53:43",
    last_balance: 100,
    current_balance: 0,
  }`;
  const transfer = `{
    statuscode: "202",
    status: true,
    message: "Transfer successful",
    current_balance: 4900,
  }`;
  const sell = ` {
    statuscode: "202",
    status: "Transaction Succesful",
    account: {
      tran_reference: "fgfgf-uifvklf-jkdkckdfe",
      message: "Balance",
      current_balance: 38987,
      date: "2023-04-11 14:47:11",
    },
  }`;
  const gethistory = `{
    status: "202",
    message: "A Customer Transaction History",
    data: [
      {
        transaction_id: "weqw452001001.3ae93f83-2308-4604-9059-7ebc19713317",
        source_acct: "mikexon12@gmail.com",
        destination_acct: "matrix@gmail.com",
        trans_type: "credit",
        transaction_desc: "this is my first test",
        transaction_amount: "100.00",
        initial_balance: "0.00",
        current_balance: "100.00",
        created: "2023-04-06T12:55:40.000Z",
      },
    ],
  }`;
  const gethistories = `{
    status: "202",
    message: "All Cusromer Transaction History",
    data: [
      {
        transaction_id: "weqw452001001.3ae93f83-2308-4604-9059-7ebc19713317",
        source_acct: "mikexon12@gmail.com",
        destination_acct: "matrix@gmail.com",
        trans_type: "credit",
        transaction_desc: "this is my first test",
        transaction_amount: "100.00",
        initial_balance: "0.00",
        current_balance: "100.00",
        created: "2023-04-06T12:55:40.000Z",
      },
      {
        transaction_id: "weqw452001001.ed10989a-5367-4942-ac70-da08f148c1ef",
        source_acct: "mikexon12@gmail.com",
        destination_acct: "matrix@gmail.com",
        trans_type: "transfer",
        transaction_desc: "this is my first test",
        transaction_amount: "100.00",
        initial_balance: "5000.00",
        current_balance: "4900.00",
        created: "2023-04-06T12:55:40.000Z",
      },
    ],
  }`;
  const getbalanceEp = `axios.post(
        "https://dashboard.encryptbox.co.uk/api/v1/live/getacustomer",
        {
          customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e78117",
        },
        {
          headers: {
            token: "putyourpublickeyhere",
            "Content-Type": "application/json",
          },
        }
      )`;
  const transferEp = `axios.get(
        "https://dashboard.encryptbox.co.uk/api/v1/live/getcustomers",
        {
          headers: {
            token: "putyourpublickeyhere",
          },
        }
      )`;
  const sellEp = `axios.get(
        "https://dashboard.encryptbox.co.uk/api/v1/live/getcustomers",
        {
          headers: {
            token: "putyourpublickeyhere",
          },
        }
      )`;
  const gethistoryEp = `axios.get(
        "https://dashboard.encryptbox.co.uk/api/v1/live/getcustomers",
        {
          headers: {
            token: "putyourpublickeyhere",
          },
        }
      )`;
  const gethistoriesEp = `axios.get(
        "https://dashboard.encryptbox.co.uk/api/v1/live/getcustomers",
        {
          headers: {
            token: "putyourpublickeyhere",
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
                    <div className="shortcode_info pt-0" id="getBalance">
                      <div className="shortcode_title">
                        <h4 className="s_title">Get Balance</h4>
                        <p>
                          Purpose: To view available voucher credit a users have
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
                    <div className="shortcode_info" id="transferVoucher">
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
                    <div className="shortcode_info pt-0" id="sellVoucher">
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
                    <div
                      className="shortcode_info"
                      id="multipleUsersTransactions"
                    >
                      <div className="shortcode_title">
                        <h4 className="s_title">
                          Fetch all users transaction histories
                        </h4>
                        <p>
                          Purpose: To fetch the summary of transactions carried
                          out by users within a period of time
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
                  </div>
                </article>
                <Feedback />
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div id="sample-getBalance ">
                <div className="shortcode_title">
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
              <div id="sample-transferVoucher">
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
              <div id="sample-sellVoucher">
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
              <div id="sample-customerTransactions">
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
              <div id="sample-multipleUsersTransactions">
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
