import { useState, useEffect, useRef } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Link from "next/link";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";

export default function Account() {
  const [createUserSticky, setCreateUserSticky] = useState(false);
  const [personalDetailsSticky, setPersonalDetailsSticky] = useState(false);

  useEffect(() => {
    const createUserSection = document.getElementById("createUsers");
    const personalDetailsSection = document.getElementById("enterpriseDetails");

    const handleScroll = () => {
      if (createUserSection && personalDetailsSection) {
        const createUserOffset = createUserSection.offsetTop;
        const personalDetailsOffset = personalDetailsSection.offsetTop;

        const scrollPosition = window.scrollY + 50;

        if (
          scrollPosition >= createUserOffset &&
          scrollPosition < personalDetailsOffset
        ) {
          setCreateUserSticky(true);
          setPersonalDetailsSticky(false);
        } else if (scrollPosition >= personalDetailsOffset) {
          setCreateUserSticky(false);
          setPersonalDetailsSticky(true);
        } else {
          setCreateUserSticky(false);
          setPersonalDetailsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pdetailsSuccess = `{
    status: "202",
    message: "Business Detail",
    data: [
      {
        org_name: "TesterNG",
        role_name: null,
        pk_live: "huSXXXXXXxxxxxxxxx6AselUcWfLIubZF",
        pk_test: "082b3135-xxx-xxx-xxx-xxxx",
        sk_test: "b7abxx-8fxxxd-5xxd-bxxx3-xxxxxxx",
        email: "doe.john@doe.com",
        mobile_phone: "1234567890",
        firstname: "John",
        lastname: "Doe",
      },
    ],
    account: [
      {
        bankname: "WEMA",
        account_name: "TesterNG",
        acno: "8622568401",
        last_balance: 0,
        current_balance: 0,
      },
    ],
  }`;
  const singUserDet = `{
    status: "202",
    message: "Customer Detail",
    datetime: "2023-04-11 13:6:17",
    data: [
      {
        customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
        first_name: "John",
        last_name: "Doe",
        mobile_number: "12334567889",
        email: "johndow@gmail.com",
        address: null,
        bvn: "123456789",
        nin: "12223457",
      },
    ],
    account: [
      {
        referece_id: "3931239018",
        last_balance: 100,
        current_balance: 0,
      },
    ],
  }`;
  const getCustomers = `{
    status: "202",
    message: "Customer List",
    data: [
      {
        customer_id: "2926352b-4225-5002-b89e-f72b8bdca522",
        first_name: "Encrypt",
        last_name: "Box",
        mobile_number: "2134558",
        email: "mikexenon@yahoo.com",
        address: null,
        bvn: "23456789898765",
        nin: "12223457",
      },
      {
        customer_id: "90c119d8-3498-530f-add1-b4e841a2c2d8",
        first_name: "Pyrr",
        last_name: "jagua",
        mobile_number: "08144889589597",
        email: "mikexenon1@yahoo.com",
        address: null,
        bvn: "23456789898765",
        nin: "12223457",
      },
      {
        customer_id: "52ca1762-a761-53f8-9343-cb027d790e97",
        first_name: "xee",
        last_name: "Mike",
        mobile_number: "08144889589597u",
        email: "mikexenon12@yahoo.com",
        address: null,
        bvn: "234567898987658",
        nin: "12223457",
      },
      ...{
        customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
        first_name: "Jin",
        last_name: "Xu",
        mobile_number: "1234567890",
        email: "jinxu@xu.com",
        address: null,
        bvn: "23456789898765",
        nin: "12223457",
      },
    ],
  }`;
  const createReq = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/createaccount",
    {
      reference: "e87f2dxvdrwew45345dd432",
      first_name: "John",
      last_name: "Doe",
      mobile_number: "+1234578990",
      email: "johndoe@doe.com",
      address: "John Doe to the Moon",
      bvn: "0987654332",
      nin: "12345789",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
  const pdetails = `axios.get(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getpersonaldetail",
    {
      headers: {
        token: "putyourpublickeyhere",
      },
    }
  )`;
  const getacustomerEp = `axios.post(
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
  const getCustomersEP = `axios.get(
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
              <div className="documentation_info"id="post">
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
                        users and also have access to user details
                      </span>
                      <span>
                        The EncryptBox platform includes server-side API for
                        this.
                      </span>
                    </p>
                    <div className="shortcode_info pt-0" id="createUsers">
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
                    <div className="shortcode_info" id="enterpriseDetails">
                      <div className="shortcode_title">
                        <h4 className="s_title">View Personal Details</h4>
                        <p>
                          Purpose: To view details of an entity registered with
                          <strong>EncryptBox</strong>
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
                        <Code code={pdetailsSuccess} language="json"></Code>
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
                    <div className="shortcode_info" id="userDetails">
                      <div className="shortcode_title">
                        <h4 className="s_title">Fetch a Single User Details</h4>
                        <p>
                          Purpose: To fetch the details of an user affiliated
                          with your platform using our
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
                        <Code code={singUserDet} language="json"></Code>
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
                    <div className="shortcode_info" id="multipleUserDetails">
                      <div className="shortcode_title">
                        <h4 className="s_title">Fetch all users details</h4>
                        <p>
                          Purpose: To fetch the details of all your users,
                          affiliated with your platform using
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
              <div id="sample-createaccount ">
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
              <div id="sample-personalDetails">
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
                    <Code code={pdetails} language="json"></Code>
                  </div>
                </div>
              </div>
              <div id="sample-customerDetails">
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
              <div id="sample-allCustomerDetails">
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
