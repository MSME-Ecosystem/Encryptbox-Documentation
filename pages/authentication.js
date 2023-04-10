import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Link from "next/link";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";

export default function Home() {
  const language = "javascript";
  const children = `
    {
      "reference": "hjerj3784ufikj394iuiwwriw",
      "first_name": "Alaoo",
      "last_name": "Miracle",
      "mobile_number": "08144889589597u",
      "address": "hgfghjkjhgfghjkhg",
      "email": "mikexenon12@yahoo.com",
      "nin": "12223457",
      "bvn": "234567898987658"
    }  
  `;
  const auth = ` 
  headers: {
    token: PK_LIVE,
    "Content-Type": "application/json",
  }
  `;
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
              <Sidebar />
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="documentation_info" id="auth">
                {/*doc*/}
                <article
                  className="documentation_body doc-section pt-0"
                  id="doc"
                >
                  <div className="shortcode_title">
                    <h2>Authentication</h2>
                    <p>
                      <span>
                        Authenticate your API calls by including your secret key
                        or public key depending on the request you're making in
                        the header of request you make.
                      </span>{" "}
                    </p>
                    <p>
                      Generally, we provide both public and secret keys. Public
                      keys are meant to be used from your front-end when
                      integrating EncryptBox Box APIs. By design, public keys
                      cannot modify any part of your account besides initiating
                      transactions. The secret keys however, are to be kept
                      secret. If for any reason you believe any of your keys has
                      been compromised or you wish to reset them, you can do so
                      from your{" "}
                      <Link
                        href="https://dashboard.encryptbox.co.uk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        EncryptBox Dashboard
                      </Link>
                    </p>
                    <div
                      className="alert media message_alert alert-danger fade show"
                      role="alert"
                    >
                      <i className="icon_close_alt2" />
                      <div className="media-body">
                        <h5>Key Warnings</h5>
                        <p>
                          Do not commit any of your keys to git, or use them in
                          client-side code.
                        </p>
                      </div>
                    </div>
                    <h5 className="mt-3">
                      Authorization headers should be in the following format
                    </h5>
                    <p>Authorization: Bearer PUBLIC_kEY</p>

                    <div className="p-2 ">
                      <div className="steps-panel p-2">
                        <h5>Sample Authorization Headers</h5>
                        <Code children={auth} language={JSON} />
                      </div>
                    </div>
                  </div>

                  <div class="container">
                    <div class="row justify-content-between">
                      <div class="col-5">
                        <Link href="/" className="steps-panel">
                          Previous
                        </Link>
                      </div>

                      <div class="col-5 ">
                      <div class="col-5">
                        <Link href="/" className="steps-panel">
                          Next
                        </Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </article>

                <Feedback />
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
      <Script src="/js/jquery-3.5.1.min.js"></Script>
      <Script src="/assets/bootstrap/js/popper.min.js"></Script>
      <Script src="/assets/bootstrap/js/bootstrap.min.js"></Script>
      <Script src="/assets/bootstrap/js/bootstrap-select.min.js"></Script>
      <Script src="/js/parallaxie.js"></Script>
      <Script src="/js/TweenMax.min.js"></Script>
      <Script src="/js/anchor.js"></Script>
      <Script src="/assets/wow/wow.min.js"></Script>
      {/* 
      <Script src="/assets/prism/prism.js"></Script> */}
      <Script src="/assets/niceselectpicker/jquery.nice-select.min.js"></Script>
      <Script src="/assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js"></Script>
      <Script src="/assets/magnify-pop/jquery.magnific-popup.min.js"></Script>
      <Script src="/assets/tooltipster/js/tooltipster.bundle.min.js"></Script>
      <Script src="/assets/font-size/js/rv-jquery-fontsize-2.0.3.js"></Script>
      <Script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></Script>
      <Script src="/js/onpage-menu.js"></Script>
      <Script src="/js/main.js"></Script>
    </>
  );
};
