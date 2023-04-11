import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script"; 
import Feedback from "@/components/Feedback";

export default function Home() {

  return (
    <>
      <section
        className="doc_documentation_area onepage_doc_area"
        id="sticky_doc"
      >
        <div className="overlay_bg" />

        <div className="container-fluid pl-60 pr-60">
          <div className="row doc-container">
            <div className="col-lg-2 doc_mobile_menu doc-sidebar display_none">
            <Sidebar/>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="documentation_info" id="post">
                {/*doc*/}
                <article
                  className="documentation_body doc-section pt-0"
                  id="doc"
                >
                  <div className="shortcode_title">
                    <h2>Introduction to EncryptBox</h2>
                    <p>
                      <span>
                        Greetings and welcome to the EncryptBox Documentation!{" "}
                      </span>{" "}
                      Here, you will discover how to create exceptional payment
                      experiences. By integrating EncryptBox into your products,
                      you can swiftly start receiving cryptocurrency payments in
                      as little as five minutes.{" "}
                    </p>
                    <p>
                      EncryptBox provides two environments for development
                      (testing) and production (live). You can switch between
                      the two environments using the toggle at the top of the
                      dashboard.
                    </p>
                    <h5>Test</h5>
                    <p>
                      For the purpose of product integration and testing on the
                      Binance Smart Chain testnet, EncryptBox offers a test
                      environment. This environment provides developers with API
                      keys and addresses to facilitate experimentation. It&apos;s
                      worth noting that the API keys and addresses used in the
                      test environment are distinct from those used in the live
                      environment.
                    </p>
                    <h5>Live</h5>
                    <p>
                      Once the integration and testing of EncryptBox have been
                      successfully conducted on the test environment, merchants
                      can proceed to use it in the production environment to
                      receive actual funds on the Binance Smart Chain mainnet.
                      It&apos;s important to note that the API keys and addresses
                      used in the live environment are different from those used
                      in the test environment.
                    </p>
                    <p>
                      To integrate EncryptBox into your product, please refer to
                      the guide in this documentation.
                    </p>
                    <div
                      className="alert media message_alert alert-info fade show"
                      role="alert"
                    >
                      <i className="icon_info_alt" />
                      <div className="media-body">
                        <h5>Questions and Feedbacks</h5>
                        <p>
                          We highly value your input and welcome any questions
                          or feedback you may have regarding our developer
                          documentation. If you require assistance, please don&apos;t
                          hesitate to create a new thread under the docs
                          category on EncryptBox&apos;s official forums. If you have
                          any feedback you&apos;d like to share, we invite you to
                          drop your comments on the contact us form. We are
                          eager to hear from you.
                        </p>
                      </div>
                    </div>
                  </div>
                   
                  {/* <div className="row">
                    <div className="col-6 d-flex justify-content-start align-items-center">
                    <button className="fs-20 btn btn-xs btn-primary light me-1">
                        Previous
                      </button>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <button className="fs-20 btn btn-xs btn-primary light me-1">
                        Next
                      </button>
                    </div>
                  </div> */}
                </article>

                <Feedback/>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 "></div>
          </div>
        </div>
      </section>
      
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>
      <Script src="/js/jquery-3.5.1.min.js" id="jquery"></Script> 
      <Script src="/assets/bootstrap/js/popper.min.js" id="popper"></Script>
      <Script src="/assets/bootstrap/js/bootstrap.min.js" id="boostrapmin"></Script>
      <Script src="/assets/bootstrap/js/bootstrap-select.min.js" id="boottrapselect"></Script>
      <Script src="/js/parallaxie.js" id="paralaxie"></Script>
      <Script src="/js/TweenMax.min.js" id="TweenMax"></Script>
      <Script src="/js/anchor.js" id="anchor"></Script>
      <Script src="/assets/wow/wow.min.js" id="wow"></Script> 
      <Script src="/assets/niceselectpicker/jquery.nice-select.min.js" id="niceselect"></Script>
      <Script src="/assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js" id="customcrollbar"></Script>
      <Script src="/assets/magnify-pop/jquery.magnific-popup.min.js" id="popup"></Script>
      <Script src="/assets/tooltipster/js/tooltipster.bundle.min.js" id="tooltipster"></Script>
      <Script src="/assets/font-size/js/rv-jquery-fontsize-2.0.3.js" id="rvjquery"></Script>
      <Script src="https://unpkg.com/ionicons@latest/dist/ionicons.js" id="ionicons"></Script>
      <Script src="/js/onpage-menu.js" id="onPageMenu"></Script>
      <Script src="/js/main.js" id="main"></Script>
    </>
  );
};
