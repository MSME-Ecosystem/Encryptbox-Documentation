import { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Link from "next/link";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";
 
import {
  createReq,
  getCustomers,
  getCustomersEP,
  getacustomer,
  getacustomerEp,
  pdetails,
  pdetailsEp,
  verifyUser,
  verifyUserEp,
} from "@/components/endpoints";
export default function Account() {
  const [sampleVerifyUser, setIsVerifyUser] = useState(false);
  const [sampleCreateAccount, setIsSampleCreateAccount] = useState(false);
  const [samplePersonalDetails, setIsSamplePersonalDetails] = useState(false);
  const [sampleCustomerDetails, setIsSampleCustomerDetails] = useState(false);
  const [sampleAllCustomerDetails, setIsSampleAllCustomerDetails] = useState(
    false
  );

  const createRef = useRef(null);
  const personalDetailsRef = useRef(null);
  const enterpriseDetailsRef = useRef(null);
  const userDetailsRef = useRef(null);
  const multipleUserDetailsRef = useRef(null);

  useEffect(() => {
    const createUserSection = createRef.current; //document.getElementById("createUsers");
    const enterpriseDetailsSection = enterpriseDetailsRef.current; //document.getElementById("enterpriseDetails");
    const personalDetailsSection = personalDetailsRef.current;
    const userDetailsSection = userDetailsRef.current;
    const multipleUserDetailsSection = multipleUserDetailsRef.current;

    const handleScroll = () => {
      if (
        createUserSection &&
        enterpriseDetailsSection &&
        personalDetailsSection &&
        userDetailsSection &&
        multipleUserDetailsSection
      ) {
        const createUserOffset = createRef.current.offsetTop;
        const personalDetailsOffset = personalDetailsRef.current.offsetTop;
        const enterpriseDetailsOffset = enterpriseDetailsRef.current.offsetTop;
        const userDetailsOffset = userDetailsRef.current.offsetTop;
        const multipleUserDetailsOffset =
          multipleUserDetailsRef.current.offsetTop;

      
        const scrollPosition = window.scrollY + 50;

    

        if (
          (scrollPosition <= createUserOffset || scrollPosition >= createUserOffset ) &&
          scrollPosition < personalDetailsOffset
        ) {
         
          setIsSampleCreateAccount(true);
          setIsVerifyUser(false);
          setIsSamplePersonalDetails(false);
          setIsSampleCustomerDetails(false);
          setIsSampleAllCustomerDetails(false);
        } else if (
          scrollPosition >= personalDetailsOffset &&
          scrollPosition < enterpriseDetailsOffset
        ) {
          
          setIsSampleCreateAccount(false);
          setIsVerifyUser(true);
          setIsSamplePersonalDetails(false);
          setIsSampleCustomerDetails(false);
          setIsSampleAllCustomerDetails(false);
        } else if (
          scrollPosition >= enterpriseDetailsOffset &&
          scrollPosition < userDetailsOffset
        ) {      
          setIsSampleCreateAccount(false);
          setIsVerifyUser(false);
          setIsSamplePersonalDetails(true);
          setIsSampleCustomerDetails(false);
          setIsSampleAllCustomerDetails(false);
        } else if (
          scrollPosition >= userDetailsOffset &&
          scrollPosition < multipleUserDetailsOffset
        ) {
         
          setIsSampleCreateAccount(false);
          setIsVerifyUser(false);
          setIsSamplePersonalDetails(false);
          setIsSampleCustomerDetails(true);
          setIsSampleAllCustomerDetails(false);
        } else if (scrollPosition >= multipleUserDetailsOffset) {
          
          setIsSampleCreateAccount(false);
          setIsVerifyUser(false);
          setIsSamplePersonalDetails(false);
          setIsSampleCustomerDetails(false);
          setIsSampleAllCustomerDetails(true);
        } else {
          
          setIsSampleCreateAccount(false);
          setIsVerifyUser(false);
          setIsSamplePersonalDetails(false);
          setIsSampleCustomerDetails(false);
          setIsSampleAllCustomerDetails(false);
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
                  id="account"
                >
                  <div className="shortcode_title">
                    <h2>Users</h2>
                    <p>
                      <span>
                        The EncryptBox User endpoints can be used to create
                        users and also have access to user details. &nbsp;
                      </span>
                      <span>
                        The EncryptBox platform includes server-side API for
                        this.
                      </span>
                    </p>
             
                    <div className="shortcode_info pt-0" ref={createRef}>
                      <div className="shortcode_title">
                        <h4 className="s_title">Create Users</h4>
                        <p>Purpose: To create Voucher Credit wallet users</p>
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
                              environment{"}"}/createaccount
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
                              <p>You can only create one user at a time</p>
                            </li>
                            <li>
                              <p>
                                Refer to
                                <a href="/account#enterpriseDetails">
                                  Get User API
                                </a>
                                to fetch the created user details
                              </p>
                            </li>
                          </ul>
                        </div>
                      </blockquote>
                      <div className="shortcode_title">
                        <h4 className="s_title" id="tab2">
                          Sample Response Codes
                        </h4>
                        <div className="alert media message_alert fade show">
                          <div className="media-body">
                            <p>200</p>
                            <span>User created</span>
                          </div>
                        </div>
                        <div className="alert media message_alert alert-info fade show">
                          <div className="media-body">
                            <h5 className="m-0">403</h5>
                            <p>User exists</p>
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
                
                    <div className="shortcode_info" ref={personalDetailsRef}>
                      <div className="shortcode_title">
                        <h4 className="s_title">Verify Users Details</h4>
                        <p>
                          Purpose: To verify that verification numbers submitted
                          by users meet government standards
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
                              environment{"}"}/verifyuser
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
                        <Code code={verifyUser} language="json"></Code>
                      </div>
                      <div className="shortcode_title">
                        <h4 className="s_title" id="tab2">
                          Sample Response Codes
                        </h4>
                        <div className="alert media message_alert fade show">
                          <div className="media-body">
                            <p>202</p>
                            <span>OK</span>
                          </div>
                        </div>
                        <div className="alert media message_alert alert-info fade show">
                          <div className="media-body">
                            <h5 className="m-0">404</h5>
                            <p>Customers does not exist</p>
                          </div>
                        </div>
                      </div>
                    </div>
               
                    <div className="shortcode_info" ref={enterpriseDetailsRef}>
                      <div className="shortcode_title">
                        <h4 className="s_title">View Personal Details</h4>
                        <p>
                          Purpose: To view details of an entity registered with
                          <strong>&nbsp;EncryptBox</strong>
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
                              environment{"}"}/getpersonaldetail
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
                        <Code code={pdetails} language="json"></Code>
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
                            <h5 className="m-0">405</h5>
                            <p>Unauthorized Request</p>
                          </div>
                        </div>
                      </div>
                    </div>
               
                    <div className="shortcode_info" ref={userDetailsRef}>
                      <div className="shortcode_title">
                        <h4 className="s_title">Fetch a Single User Details</h4>
                        <p>
                          Purpose: To fetch the details of an user affiliated
                          with your platform using &nbsp;
                          <strong>EncryptBox</strong> API
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
                              environment{"}"}/getacustomer
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
                        <Code code={getacustomer} language="json"></Code>
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
                            <h5 className="m-0">404</h5>
                            <p>Customer doesn&apos;t exist</p>
                          </div>
                        </div>
                      </div>
                    </div>
              
                    <div
                      className="shortcode_info"
                      ref={multipleUserDetailsRef}
                    >
                      <div className="shortcode_title">
                        <h4 className="s_title">Fetch all users details</h4>
                        <p>
                          Purpose: To fetch the details of all your users,
                          affiliated with your platform using&nbsp;
                          <strong>EncryptBox</strong> API
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
                              environment{"}"}/getcustomers
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
                        <Code code={getCustomers} language="json"></Code>
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
                            <h5 className="m-0">404</h5>
                            <p>Customer doesn&apos;t exist</p>
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
              {sampleCreateAccount ? (
                <div className="sample-code-sticky">
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Create Account Endpoint&nbsp;
                          <span className="badge badge-primary">Post</span>
                        </h5>
                        <span>/api/v1/live/createaccount</span>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={createReq} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : sampleVerifyUser ? (
                <div className="sample-code-sticky">
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Verify User Details Endpoint&nbsp;
                          <span className="badge badge-primary">Post</span>
                        </h5>
                        <p>/api/v1/live/verifyuser</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={verifyUserEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : samplePersonalDetails ? (
                <div className="sample-code-sticky">
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Personal Details Endpoint&nbsp;
                          <span className="badge badge-primary">Get</span>
                        </h5>
                        <p>/api/v1/live/getpersonaldetail</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={pdetailsEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : sampleCustomerDetails ? (
                <div className="sample-code-sticky">
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Get a customer Endpoint&nbsp;
                          <span className="badge badge-primary">Post</span>
                        </h5>
                        <p>/api/v1/live/getacustomer</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={getacustomerEp} language="json"></Code>
                    </div>
                  </div>
                </div>
              ) : sampleAllCustomerDetails ? (
                <div
                  className="sample-code-sticky"
                  id="sample-allCustomerDetails"
                >
                  <div className="shortcode_title">
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <div className="media-body">
                        <h5 className="s_title">
                          Get all customer Endpoint&nbsp;
                          <span className="badge badge-primary">Get</span>
                        </h5>
                        <p>/api/v1/live/getcustomers</p>
                      </div>
                    </div>
                  </div>
                  <div className="shortcode_title">
                    <h4 className="s_title">Sample Request</h4>
                    <div className="media-body">
                      <Code code={getCustomersEP} language="json"></Code>
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

Account.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>       
    </>
  );
};
