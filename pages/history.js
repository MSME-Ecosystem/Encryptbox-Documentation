import React, { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback"; 
import {
  gethistories,
  gethistory,
  gethistoryEp,
  type,
} from "@/components/endpoints";

export default function Voucher() {
  const [isSamplecustomerTxActive, setIsSamplecustomerTxActive] = useState(
    false
  );
  const [isSamplemultipleTxActive, setIsSamplemultipleTxActive] = useState(
    false
  );
  const __customerTransactions = useRef(null);
  const __multipleUsersTransactions = useRef(null);

  useEffect(() => {
    const customerTransactionsSection = __customerTransactions.current;
    const multipleUsersTransactionsSection =
      __multipleUsersTransactions.current;

    const handleScroll = () => {
      if (customerTransactionsSection && multipleUsersTransactionsSection) {
        const customerTransactionsOffset = __customerTransactions.current.offsetTop;
        const multipleUsersTransactionsOffset =
          __multipleUsersTransactions.current.offsetTop;

        const scrollPosition = window.scrollY + 50;

        if (
          (scrollPosition <= customerTransactionsOffset ||
            scrollPosition >= customerTransactionsOffset) &&
          scrollPosition < multipleUsersTransactionsOffset
        ) {
          setIsSamplecustomerTxActive(true);
          setIsSamplemultipleTxActive(false);
        } else if (
          scrollPosition >= multipleUsersTransactionsOffset 
        ) {
          setIsSamplecustomerTxActive(false);
          setIsSamplemultipleTxActive(true);
        } else {
          setIsSamplecustomerTxActive(false);
          setIsSamplemultipleTxActive(false);
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

                    <div
                      className="shortcode_info"
                      ref={__customerTransactions}
                    >
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
                      ref={__multipleUsersTransactions}
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
                      <Code code={gethistoryEp} language="json"></Code>
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
