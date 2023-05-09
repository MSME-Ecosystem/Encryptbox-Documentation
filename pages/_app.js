import "@/styles/responsive.css";
import "@/styles/style.css";

import Script from "next/script";

import "@/public/assets/bootstrap/css/bootstrap.min.css";
import "@/public/assets/bootstrap/css/bootstrap-select.min.css";

import "@/public/assets/elagent-icon/style.css"; 
import "@/public/assets/font-size/css/rvfs.css";
import "@/public/assets/animation/animate.css";
import "@/public/assets/tooltipster/css/tooltipster.bundle.css";
import "@/public/assets/magnify-pop/magnific-popup.css";
import "@/public/assets/mcustomscrollbar/jquery.mCustomScrollbar.min.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Component {...pageProps} />
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
     
      <Script src="/js/onpage-menu.js" id="onPageMenu"></Script>
      <Script src="/js/main.js" id="main"></Script>
    </>
  );
}
