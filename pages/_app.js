 import "@/styles/responsive.css";
import "@/styles/style-main.css";

import "@/public/assets/bootstrap/css/bootstrap.min.css";
import "@/public/assets/bootstrap/css/bootstrap-select.min.css";
 
import "@/public/assets/elagent-icon/style.css";
import "@/public/assets/niceselectpicker/nice-select.css";
import "@/public/assets/font-size/css/rvfs.css";
import "@/public/assets/animation/animate.css"; 
import "@/public/assets/tooltipster/css/tooltipster.bundle.css";/* 
import "@/public/assets/prism/prism.css";
import "@/public/assets/prism/prism-coy.css"; */
import "@/public/assets/magnify-pop/magnific-popup.css";
import "@/public/assets/mcustomscrollbar/jquery.mCustomScrollbar.min.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
