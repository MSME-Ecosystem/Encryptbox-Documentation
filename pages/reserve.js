// import HomeLayout from "@/components/Layout/HomeLayout";
// import Sidebar from "@/components/Layout/sidebar";
// import Script from "next/script";
// import Link from "next/link";

// export default function Home() {
//   const succesMessage = `
//     {
//       "reference": "hjerj3784ufikj394iuiwwriw",
//       "first_name": "Alaoo",
//       "last_name": "Miracle",
//       "mobile_number": "08144889589597u",
//       "address": "hgfghjkjhgfghjkhg",
//       "email": "mikexenon12@yahoo.com",
//       "nin": "12223457",
//       "bvn": "234567898987658"
//     }  
//   `;
//   return (
//     <>
//       <section
//         className="doc_documentation_area onepage_doc_area"
//         id="sticky_doc"
//       >
//         <div className="overlay_bg" />

//         <div className="container-fluid pl-60 pr-60">
//           <div className="row doc-container">
//             <div className="col-lg-2 doc_mobile_menu doc-sidebar display_none">
//               <aside className="doc_left_sidebarlist">
//                 <h3 className="nav_title">Doc Navigation</h3>
//                 <div className="scroll">
//                   <ul className="list-unstyled nav-sidebar doc-nav">
//                     <li className="nav-item active">
//                       <a href="#doc" className="nav-link">
//                         <img src="img/onepage-icon/smiles-icon.png" alt="" />
//                         Getting Started
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#shortcodes" className="nav-link">
//                         <img src="img/side-nav/briefcase.png" alt="briefcase" />
//                         Shortcodes
//                       </a>
//                       <ul className="list-unstyled dropdown_nav">
//                         <li className="nav-item">
//                           <a href="#tabs" className="nav-link">
//                             Tab
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#accordian" className="nav-link">
//                             Accordian
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#notice" className="nav-link">
//                             Notices
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#tooltip" className="nav-link">
//                             Tooltip
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#table" className="nav-link">
//                             Table
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#lightbox" className="nav-link">
//                             Lightbox
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#footnote" className="nav-link">
//                             Footnote
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#can-use" className="nav-link">
//                             Can I Use
//                           </a>
//                         </li>
//                       </ul>
//                       <span className="icon">
//                         <i className="icon_plus" />
//                         <i className="icon_minus-06" />
//                       </span>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#tour" className="nav-link">
//                         <img src="img/side-nav/chat1.png" alt="" />
//                         Tour
//                       </a>
//                       <span className="icon">
//                         <i className="icon_plus" />
//                         <i className="icon_minus-06" />
//                       </span>
//                       <ul className="list-unstyled dropdown_nav">
//                         <li className="nav-item">
//                           <a href="#pointing" className="nav-link">
//                             Image Hotspots
//                           </a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#typography" className="nav-link">
//                         <img src="img/side-nav/document.png" alt="" />
//                         Content
//                       </a>
//                       <span className="icon">
//                         <i className="icon_plus" />
//                         <i className="icon_minus-06" />
//                       </span>
//                       <ul className="list-unstyled dropdown_nav">
//                         <li className="nav-item">
//                           <a href="#code" className="nav-link">
//                             Code
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#img" className="nav-link">
//                             Image
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a href="#video" className="nav-link">
//                             Video
//                           </a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#changelog" className="nav-link">
//                         <img src="img/side-nav/clock.png" alt="" />
//                         Change Log
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#cheatsheet" className="nav-link">
//                         <img src="img/side-nav/book.png" alt="" />
//                         Cheatsheet
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#ex1" className="nav-link">
//                         <img src="img/side-nav/chat.png" alt="" />
//                         Example Item
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#ex2" className="nav-link">
//                         <img src="img/side-nav/layout.png" alt="" />
//                         Example Item 02
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a href="#ex3" className="nav-link">
//                         <img src="img/side-nav/support.png" alt="" />
//                         Example Item 03
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </aside>
//             </div>
//             <div className="col-lg-8 col-md-8">
//               <div className="documentation_info" id="post">
//                 {/*doc*/}
//                 <article
//                   className="documentation_body doc-section pt-0"
//                   id="doc"
//                 >
//                   <div className="shortcode_title">
//                     <h2>Introduction to EncryptBox</h2>
//                     <p>
//                       <span>
//                         Greetings and welcome to the EncryptBox Documentation!{" "}
//                       </span>{" "}
//                       Here, you will discover how to create exceptional payment
//                       experiences. By integrating EncryptBox into your products,
//                       you can swiftly start receiving cryptocurrency payments in
//                       as little as five minutes.{" "}
//                     </p>
//                     <p>
//                       EncryptBox provides two environments for development
//                       (testing) and production (live). You can switch between
//                       the two environments using the toggle at the top of the
//                       dashboard.
//                     </p>
//                     <h5>Test</h5>
//                     <p>
//                       For the purpose of product integration and testing on the
//                       Binance Smart Chain testnet, EncryptBox offers a test
//                       environment. This environment provides developers with API
//                       keys and addresses to facilitate experimentation. It's
//                       worth noting that the API keys and addresses used in the
//                       test environment are distinct from those used in the live
//                       environment.
//                     </p>
//                     <h5>Live</h5>
//                     <p>
//                       Once the integration and testing of EncryptBox have been
//                       successfully conducted on the test environment, merchants
//                       can proceed to use it in the production environment to
//                       receive actual funds on the Binance Smart Chain mainnet.
//                       It's important to note that the API keys and addresses
//                       used in the live environment are different from those used
//                       in the test environment.
//                     </p>
//                     <p>
//                       To integrate EncryptBox into your product, please refer to
//                       the guide below. 
//                     </p>
//                     <div
//                       className="alert media message_alert alert-info fade show"
//                       role="alert"
//                     >
//                       <i className="icon_info_alt" />
//                       <div className="media-body">
//                         <h5>Questions and Feedbacks</h5>
//                         <p>
//                         We highly value your input and welcome any questions or feedback you may have regarding our developer documentation. If you require assistance, please don't hesitate to create a new thread under the docs category on EncryptBox's official forums. If you have any feedback you'd like to share, we invite you to drop your comments on the contact us form. We are eager to hear from you. 
//                         </p>                       
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/folder.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Working with Docs</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/envelope.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Formatting Content</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/layout.html" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Development</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/smartphone.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Mobile App</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/management.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Account Management</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/briefcase.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Shortcodes</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/newspaper.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Productivity</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/side-nav/issuin.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Issuing</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img
//                             src="img/home_one/icon/color-palette.png"
//                             alt=""
//                           />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Introduction</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/side-nav/terminals.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Terminal</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/android.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>Getting Started</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6">
//                       <div className="media documentation_item">
//                         <div className="icon">
//                           <img src="img/home_one/icon/lock.png" alt="" />
//                         </div>
//                         <div className="media-body">
//                           <a href="#">
//                             <h5>This Document</h5>
//                           </a>
//                           <p>
//                             He lost his bottle bubble and squeak knackered.!
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border_bottom" />
//                 </article>
//                 {/*shortcode*/}
//                 <article
//                   className="documentation_body shortcode_text doc-section"
//                   id="shortcodes"
//                 >
//                   <div className="shortcode_title">
//                     <h2>Getting Started</h2>
//                     <p>
//                       <span>Welcome to Docy !</span> Get familiar with the
//                       Stripe products and explore their features:
//                     </p>
//                   </div>
//                   <p>
//                     To use Docy WordPress theme you must have WordPress engine
//                     installed. We assume you have a working version of WordPress
//                     already up and running. We also encourage you to actively
//                     use the links below. These useful resources cover most of
//                     the general WordPress questions you may have:
//                   </p>
//                   <ul className="ul">
//                     <li>
//                       What is WordPress?&nbsp;
//                       <strong>
//                         <a
//                           href="https://en.wikipedia.org/wiki/WordPress"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Wikipedia
//                         </a>
//                       </strong>{" "}
//                       and WordPress FAQ&nbsp;
//                       <strong>
//                         <a
//                           href="https://codex.wordpress.org/FAQ_New_To_WordPress"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Read here!
//                         </a>
//                       </strong>
//                     </li>
//                     <li>
//                       Tutorial on how to Install WordPress?&nbsp;
//                       <strong>
//                         <a
//                           href="https://www.youtube.com/watch?v=ell0SiTZyX8"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Watch Video
//                         </a>
//                       </strong>
//                     </li>
//                     <li>
//                       WordPress Lessons&nbsp;
//                       <strong>
//                         <a
//                           href="https://codex.wordpress.org/WordPress_Lessons"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Visit Articles
//                         </a>
//                       </strong>
//                     </li>
//                   </ul>
//                   <h4 className="c_head" id="article">
//                     Articles
//                   </h4>
//                   <ul className="list-unstyled article_list tag_list">
//                     <li>
//                       <a href="tab.html">
//                         <i className="icon_document_alt" />
//                         Tabs
//                       </a>
//                     </li>
//                     <li>
//                       <a href="accordion.html">
//                         <i className="icon_document_alt" />
//                         Accordion
//                       </a>
//                     </li>
//                     <li>
//                       <a href="notice.html">
//                         <i className="icon_document_alt" />
//                         Notices
//                       </a>
//                     </li>
//                     <li>
//                       <a href="doc-content-tables.html">
//                         <i className="icon_document_alt" />
//                         Table
//                       </a>
//                     </li>
//                     <li>
//                       <a href="doc-element-lightbox.html">
//                         <i className="icon_document_alt" />
//                         Image Lightbox
//                       </a>
//                     </li>
//                     <li>
//                       <a href="tooltip.html">
//                         <i className="icon_document_alt" />
//                         Tooltip
//                       </a>
//                     </li>
//                     <li>
//                       <a href="image-pointing.html">
//                         <i className="icon_document_alt" />
//                         Image Hotspots
//                       </a>
//                     </li>
//                     <li>
//                       <a href="code.html">
//                         <i className="icon_document_alt" />
//                         Code
//                       </a>
//                     </li>
//                   </ul>
//                   <div className="border_bottom" />
//                   <div className="shortcode_info" id="tabs">
//                     <div className="tab_shortcode">
//                       <h4 className="s_title" id="tab">
//                         Tabs
//                       </h4>
//                       <ul className="nav nav-tabs" id="myTabs" role="tablist">
//                         <li className="nav-item">
//                           <a
//                             className="nav-link active"
//                             id="home-tab"
//                             data-toggle="tab"
//                             href="#home"
//                             role="tab"
//                             aria-controls="home"
//                             aria-selected="true"
//                           >
//                             Conclusions
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             id="profile-tab"
//                             data-toggle="tab"
//                             href="#profile"
//                             role="tab"
//                             aria-controls="profile"
//                             aria-selected="false"
//                           >
//                             Forum
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             id="contact-tab"
//                             data-toggle="tab"
//                             href="#contact"
//                             role="tab"
//                             aria-controls="contact"
//                             aria-selected="false"
//                           >
//                             Reporting
//                           </a>
//                         </li>
//                       </ul>
//                       <div className="tab-content" id="myTabContents">
//                         <div
//                           className="tab-pane fade show active"
//                           id="home"
//                           role="tabpanel"
//                           aria-labelledby="home-tab"
//                         >
//                           Don't get shirty with me what a plonker on your bike
//                           mate bugger all mate chip shop bits and bobs smashing
//                           mush bugger cup of char, in my flat.
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="profile"
//                           role="tabpanel"
//                           aria-labelledby="profile-tab"
//                         >
//                           Don't get shirty with me what a plonker on your bike
//                           mate bugger all mate chip shop bits and bobs smashing
//                           mush bugger cup of char, in my flat.
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="contact"
//                           role="tabpanel"
//                           aria-labelledby="contact-tab"
//                         >
//                           Don't get shirty with me what a plonker on your bike
//                           mate bugger all mate chip shop bits and bobs smashing
//                           mush bugger cup of char, in my flat.
//                         </div>
//                       </div>
//                     </div>
//                     <div className="shortcode_title">
//                       <h4 className="s_title" id="tab2">
//                         Process Tab
//                       </h4>
//                       <p>
//                         Try the Docy API in seconds. Create your first customer,
//                         charge, and more by following the step below.
//                       </p>
//                     </div>
//                     <div className="process_tab_shortcode">
//                       <ul
//                         className="nav nav-tabs v_menu"
//                         id="myTab"
//                         role="tablist"
//                       >
//                         <li className="nav-item">
//                           <a
//                             className="nav-link active"
//                             id="card-tab"
//                             data-toggle="tab"
//                             href="#card"
//                             role="tab"
//                             aria-controls="card"
//                             aria-selected="true"
//                           >
//                             <span>1</span>Card
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             id="customer-tab"
//                             data-toggle="tab"
//                             href="#customer"
//                             role="tab"
//                             aria-controls="customer"
//                             aria-selected="false"
//                           >
//                             <span>2</span>Customer
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             id="charge-tab"
//                             data-toggle="tab"
//                             href="#charge"
//                             role="tab"
//                             aria-controls="charge"
//                             aria-selected="false"
//                           >
//                             <span>3</span>Charge
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             id="sub-tab"
//                             data-toggle="tab"
//                             href="#sub"
//                             role="tab"
//                             aria-controls="sub"
//                             aria-selected="false"
//                           >
//                             <span>4</span>Subscription
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             id="success-tab"
//                             data-toggle="tab"
//                             href="#success"
//                             role="tab"
//                             aria-controls="success"
//                             aria-selected="false"
//                           >
//                             <span>5</span>Success!
//                           </a>
//                         </li>
//                       </ul>
//                       <div className="tab-content" id="myTabContent">
//                         <div
//                           className="tab-pane fade show active"
//                           id="card"
//                           role="tabpanel"
//                           aria-labelledby="card-tab"
//                         >
//                           <p>
//                             Twit brilliant he legged it he nicked it amongst
//                             hotpot chinwag spend a penny lemon squeezy he lost
//                             his bottle porkies, Why it's your round happy days.
//                           </p>
//                           <div className="version">
//                             <div className="v_head">Docy run hello-world</div>
//                             <div className="v_middle">
//                               <p>
//                                 Unable to find image{" "}
//                                 <span className="red">
//                                   'hello-world:latest'
//                                 </span>{" "}
//                                 locally
//                               </p>
//                               <p>latest: Pulling from library/hello-world</p>
//                               <p>
//                                 ca4f61b1923c: Pull{" "}
//                                 <span className="green">complete</span>
//                               </p>
//                               <p>
//                                 Digest:
//                                 sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
//                               </p>
//                               <p>
//                                 Status: Downloaded newer image for
//                                 hello-world:latest
//                               </p>
//                             </div>
//                             <div className="v_footer">
//                               <p>
//                                 Hello from Docy!
//                                 <br /> This message shows that your installation
//                                 appears to be working correctly. <br />
//                                 ...
//                               </p>
//                             </div>
//                           </div>
//                           <p>
//                             <span>Usage:</span> Click "Submit" to create a
//                             token.
//                           </p>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="customer"
//                           role="tabpanel"
//                           aria-labelledby="customer-tab"
//                         >
//                           <p>
//                             Twit brilliant he legged it he nicked it amongst
//                             hotpot chinwag spend a penny lemon squeezy he lost
//                             his bottle porkies, Why it's your round happy days.
//                           </p>
//                           <div className="version">
//                             <div className="v_head">Docy run hello-world</div>
//                             <div className="v_middle">
//                               <p>
//                                 Unable to find image{" "}
//                                 <span className="red">
//                                   'hello-world:latest'
//                                 </span>{" "}
//                                 locally
//                               </p>
//                               <p>latest: Pulling from library/hello-world</p>
//                               <p>
//                                 ca4f61b1923c: Pull{" "}
//                                 <span className="green">complete</span>
//                               </p>
//                               <p>
//                                 Digest:
//                                 sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
//                               </p>
//                               <p>
//                                 Status: Downloaded newer image for
//                                 hello-world:latest
//                               </p>
//                             </div>
//                             <div className="v_footer">
//                               <p>
//                                 Hello from Docy!
//                                 <br /> This message shows that your installation
//                                 appears to be working correctly. <br />
//                                 ...
//                               </p>
//                             </div>
//                           </div>
//                           <p>
//                             <span>Usage:</span> Click "Submit" to create a
//                             token.
//                           </p>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="charge"
//                           role="tabpanel"
//                           aria-labelledby="charge-tab"
//                         >
//                           <p>
//                             Twit brilliant he legged it he nicked it amongst
//                             hotpot chinwag spend a penny lemon squeezy he lost
//                             his bottle porkies, Why it's your round happy days.
//                           </p>
//                           <div className="version">
//                             <div className="v_head">Docy run hello-world</div>
//                             <div className="v_middle">
//                               <p>
//                                 Unable to find image{" "}
//                                 <span className="red">
//                                   'hello-world:latest'
//                                 </span>{" "}
//                                 locally
//                               </p>
//                               <p>latest: Pulling from library/hello-world</p>
//                               <p>
//                                 ca4f61b1923c: Pull{" "}
//                                 <span className="green">complete</span>
//                               </p>
//                               <p>
//                                 Digest:
//                                 sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
//                               </p>
//                               <p>
//                                 Status: Downloaded newer image for
//                                 hello-world:latest
//                               </p>
//                             </div>
//                             <div className="v_footer">
//                               <p>
//                                 Hello from Docy!
//                                 <br /> This message shows that your installation
//                                 appears to be working correctly. <br />
//                                 ...
//                               </p>
//                             </div>
//                           </div>
//                           <p>
//                             <span>Usage:</span> Click "Submit" to create a
//                             token.
//                           </p>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="sub"
//                           role="tabpanel"
//                           aria-labelledby="sub-tab"
//                         >
//                           <p>
//                             Twit brilliant he legged it he nicked it amongst
//                             hotpot chinwag spend a penny lemon squeezy he lost
//                             his bottle porkies, Why it's your round happy days.
//                           </p>
//                           <div className="version">
//                             <div className="v_head">Docy run hello-world</div>
//                             <div className="v_middle">
//                               <p>
//                                 Unable to find image{" "}
//                                 <span className="red">
//                                   'hello-world:latest'
//                                 </span>{" "}
//                                 locally
//                               </p>
//                               <p>latest: Pulling from library/hello-world</p>
//                               <p>
//                                 ca4f61b1923c: Pull{" "}
//                                 <span className="green">complete</span>
//                               </p>
//                               <p>
//                                 Digest:
//                                 sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
//                               </p>
//                               <p>
//                                 Status: Downloaded newer image for
//                                 hello-world:latest
//                               </p>
//                             </div>
//                             <div className="v_footer">
//                               <p>
//                                 Hello from Docy!
//                                 <br /> This message shows that your installation
//                                 appears to be working correctly. <br />
//                                 ...
//                               </p>
//                             </div>
//                           </div>
//                           <p>
//                             <span>Usage:</span> Click "Submit" to create a
//                             token.
//                           </p>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="success"
//                           role="tabpanel"
//                           aria-labelledby="success-tab"
//                         >
//                           <p>
//                             Twit brilliant he legged it he nicked it amongst
//                             hotpot chinwag spend a penny lemon squeezy he lost
//                             his bottle porkies, Why it's your round happy days.
//                           </p>
//                           <div className="version">
//                             <div className="v_head">Docy run hello-world</div>
//                             <div className="v_middle">
//                               <p>
//                                 Unable to find image{" "}
//                                 <span className="red">
//                                   'hello-world:latest'
//                                 </span>{" "}
//                                 locally
//                               </p>
//                               <p>latest: Pulling from library/hello-world</p>
//                               <p>
//                                 ca4f61b1923c: Pull{" "}
//                                 <span className="green">complete</span>
//                               </p>
//                               <p>
//                                 Digest:
//                                 sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
//                               </p>
//                               <p>
//                                 Status: Downloaded newer image for
//                                 hello-world:latest
//                               </p>
//                             </div>
//                             <div className="v_footer">
//                               <p>
//                                 Hello from Docy!
//                                 <br /> This message shows that your installation
//                                 appears to be working correctly. <br />
//                                 ...
//                               </p>
//                             </div>
//                           </div>
//                           <p>
//                             <span>Usage:</span> Click "Submit" to create a
//                             token.
//                           </p>
//                         </div>
//                         <button className="btn btn-info btn-lg previous">
//                           <i className="arrow_carrot-left" />
//                         </button>
//                         <button className="btn btn-info btn-lg next">
//                           <i className="arrow_carrot-right" />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="border_bottom" />
//                   </div>
//                   {/*accordian*/}
//                   <div className="shortcode_info" id="accordian">
//                     <div className="shortcode_title">
//                       <h2>Accordian</h2>
//                       <p>
//                         <span>Welcome to Docy !</span> Get familiar with the
//                         Stripe products and explore their features:
//                       </p>
//                     </div>
//                     <div className="toggle_shortcode">
//                       <h4 className="s_title load-order-2" id="toggle">
//                         Toggle
//                       </h4>
//                       <a
//                         className="toggle_btn"
//                         data-toggle="collapse"
//                         href="#multiCollapseExample1"
//                         role="button"
//                         aria-expanded="false"
//                         aria-controls="multiCollapseExample1"
//                       >
//                         Super Professional
//                       </a>
//                       <div
//                         className="collapse multi-collapse show"
//                         id="multiCollapseExample1"
//                       >
//                         <div className="card card-body toggle_body">
//                           He lost his bottle arse fanny around do one cheesed
//                           off crikey bevy mufty the full monty nancy boy cup of
//                           tea spend a penny, golly gosh what a plonker.
//                         </div>
//                       </div>
//                       <a
//                         className="toggle_btn mt-1 collapsed"
//                         data-toggle="collapse"
//                         href="#multiCollapseExample2"
//                         role="button"
//                         aria-expanded="false"
//                         aria-controls="multiCollapseExample2"
//                       >
//                         Dashboard
//                       </a>
//                       <div
//                         className="collapse multi-collapse"
//                         id="multiCollapseExample2"
//                       >
//                         <div className="card card-body toggle_body">
//                           He lost his bottle arse fanny around do one cheesed
//                           off crikey bevy mufty the full monty nancy boy cup of
//                           tea spend a penny, golly gosh what a plonker.
//                         </div>
//                       </div>
//                     </div>
//                     <div className="accordion_shortcode">
//                       <h4 className="s_title load-order-2" id="accordions">
//                         Accordion
//                       </h4>
//                       <div id="accordion">
//                         <div className="card doc_accordion">
//                           <div className="card-header" id="headingOne">
//                             <h5 className="mb-0">
//                               <button
//                                 className="btn btn-link"
//                                 data-toggle="collapse"
//                                 data-target="#collapseOne"
//                                 aria-expanded="true"
//                                 aria-controls="collapseOne"
//                               >
//                                 Super Professional
//                                 <i className="icon_plus" />
//                                 <i className="icon_minus-06" />
//                               </button>
//                             </h5>
//                           </div>
//                           <div
//                             id="collapseOne"
//                             className="collapse show"
//                             aria-labelledby="headingOne"
//                             data-parent="#accordion"
//                           >
//                             <div className="card-body toggle_body">
//                               He lost his bottle arse fanny around do one
//                               cheesed off crikey bevy mufty the full monty nancy
//                               boy cup of tea spend a penny, golly gosh what a
//                               plonker.
//                             </div>
//                           </div>
//                         </div>
//                         <div className="card doc_accordion">
//                           <div className="card-header" id="headingTwo">
//                             <h5 className="mb-0">
//                               <button
//                                 className="btn btn-link collapsed"
//                                 data-toggle="collapse"
//                                 data-target="#collapseTwo"
//                                 aria-expanded="false"
//                                 aria-controls="collapseTwo"
//                               >
//                                 Online Marketing
//                                 <i className="icon_plus" />
//                                 <i className="icon_minus-06" />
//                               </button>
//                             </h5>
//                           </div>
//                           <div
//                             id="collapseTwo"
//                             className="collapse"
//                             aria-labelledby="headingTwo"
//                             data-parent="#accordion"
//                           >
//                             <div className="card-body toggle_body">
//                               He lost his bottle arse fanny around do one
//                               cheesed off crikey bevy mufty the full monty nancy
//                               boy cup of tea spend a penny, golly gosh what a
//                               plonker.
//                             </div>
//                           </div>
//                         </div>
//                         <div className="card doc_accordion">
//                           <div className="card-header" id="headingThree">
//                             <h5 className="mb-0">
//                               <button
//                                 className="btn btn-link collapsed"
//                                 data-toggle="collapse"
//                                 data-target="#collapseThree"
//                                 aria-expanded="false"
//                                 aria-controls="collapseThree"
//                               >
//                                 Amazing Support <i className="icon_plus" />
//                                 <i className="icon_minus-06" />
//                               </button>
//                             </h5>
//                           </div>
//                           <div
//                             id="collapseThree"
//                             className="collapse"
//                             aria-labelledby="headingThree"
//                             data-parent="#accordion"
//                           >
//                             <div className="card-body toggle_body">
//                               He lost his bottle arse fanny around do one
//                               cheesed off crikey bevy mufty the full monty nancy
//                               boy cup of tea spend a penny, golly gosh what a
//                               plonker.
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/*accordian*/}
//                   {/*notice*/}
//                   <div className="shortcode_info" id="notices">
//                     <div className="shortcode_title">
//                       <h2>Shortcodes</h2>
//                       <p>
//                         <span>Welcome to Docy !</span> Get familiar with the
//                         Stripe products and explore their features:
//                       </p>
//                     </div>
//                     <h4 className="s_title" id="alert">
//                       Messages Alerts
//                     </h4>
//                     <div
//                       className="alert media message_alert fade show"
//                       role="alert"
//                     >
//                       <i className="icon_volume-low" />
//                       <div className="media-body">
//                         <h5>Your Message Title Here</h5>
//                         <p>
//                           Do one don't get shirty with me naff only a quid the
//                           full monty at public school burke Jeffrey smashing,
//                           blatant ruddy fanny around Charles.
//                         </p>
//                         <button
//                           type="button"
//                           className="close"
//                           data-dismiss="alert"
//                           aria-label="Close"
//                         >
//                           <i className="icon_close" />
//                         </button>
//                       </div>
//                     </div>
//                     <div
//                       className="alert media message_alert alert-danger fade show"
//                       role="alert"
//                     >
//                       <i className="icon_close_alt2" />
//                       <div className="media-body">
//                         <h5>Key Warnings</h5>
//                         <p>
//                           Do one don't get shirty with me naff only a quid the
//                           full monty at public school burke Jeffrey smashing,
//                           blatant ruddy fanny around Charles.
//                         </p>
//                         <button
//                           type="button"
//                           className="close"
//                           data-dismiss="alert"
//                           aria-label="Close"
//                         >
//                           <i className="icon_close" />
//                         </button>
//                       </div>
//                     </div>
//                     <div
//                       className="alert media message_alert alert-success fade show"
//                       role="alert"
//                     >
//                       <i className=" icon_check_alt2" />
//                       <div className="media-body">
//                         <h5>Packaged with useful shortcodes</h5>
//                         <p>
//                           Do one don't get shirty with me naff only a quid the
//                           full monty at public school burke Jeffrey smashing,
//                           blatant ruddy fanny around Charles.
//                         </p>
//                         <button
//                           type="button"
//                           className="close"
//                           data-dismiss="alert"
//                           aria-label="Close"
//                         >
//                           <i className="icon_close" />
//                         </button>
//                       </div>
//                     </div>
//                     <div
//                       className="alert media message_alert alert-warning fade show"
//                       role="alert"
//                     >
//                       <i className="icon_error-circle_alt" />
//                       <div className="media-body">
//                         <h5>Your Message Title Here</h5>
//                         <p>
//                           Do one don't get shirty with me naff only a quid the
//                           full monty at public school burke Jeffrey smashing,
//                           blatant ruddy fanny around Charles.
//                         </p>
//                         <button
//                           type="button"
//                           className="close"
//                           data-dismiss="alert"
//                           aria-label="Close"
//                         >
//                           <i className="icon_close" />
//                         </button>
//                       </div>
//                     </div>
//                     <div
//                       className="alert media message_alert alert-info fade show"
//                       role="alert"
//                     >
//                       <i className="icon_info_alt" />
//                       <div className="media-body">
//                         <h5>Information Message</h5>
//                         <p>
//                           Do one don't get shirty with me naff only a quid the
//                           full monty at public school burke Jeffrey smashing,
//                           blatant ruddy fanny around Charles.
//                         </p>
//                         <button
//                           type="button"
//                           className="close"
//                           data-dismiss="alert"
//                           aria-label="Close"
//                         >
//                           <i className="icon_close" />
//                         </button>
//                       </div>
//                     </div>
//                     <h4 className="s_title" id="notice">
//                       Notices
//                     </h4>
//                     <blockquote className="media notice notice-success">
//                       <i className="icon_menu-square_alt2" />
//                       <div className="media-body">
//                         <h5>Note</h5>
//                         <p>
//                           <span>Easy peasy</span> car boot hunky-dory brolly
//                           blow off <span>down the pub</span> show off show off
//                           pick your nose and blow off matie <span>boy</span>{" "}
//                           cobblers spiffing, bleeder the full monty excuse my{" "}
//                           <strong>French</strong> say bugger cack barney.
//                         </p>
//                       </div>
//                     </blockquote>
//                     <blockquote className="media notice notice-warning">
//                       <i className="icon_ribbon_alt" />
//                       <div className="media-body">
//                         <p>
//                           <strong>Admins:</strong> can choose to require users
//                           to enter their details by enabling the checkbox
//                           Require Name and Email address beside User Details
//                           option.
//                         </p>
//                         <p>
//                           <strong>This will:</strong> automatically register
//                           users to your site. User has to enter his/her Name and
//                           E-Mail in the following fields
//                         </p>
//                       </div>
//                     </blockquote>
//                     <blockquote className="media notice notice-danger">
//                       <i className="icon_ribbon_alt" />
//                       <div className="media-body">
//                         <p>
//                           To do this, simple navigate to{" "}
//                           <strong>
//                             wp-dashboard-&gt;User Frontend-&gt;Settings. From
//                             Settings,
//                           </strong>{" "}
//                           open the <strong>E-Mails</strong> page. The first 2
//                           fields are all that you need to configure the email
//                           notification for guest users.
//                         </p>
//                       </div>
//                     </blockquote>
//                     <h4 className="s_title" id="explanation">
//                       Explanations
//                     </h4>
//                     <p className="explanation expn-left">
//                       I assumed I could start "recording" then click around
//                       different areas of the site and watch that unused number
//                       go down as different pages with different HTML are
//                       rendered, but alas, when the page refreshes, so does the
//                       Coverage tab. It's not very useful in getting?
//                     </p>
//                   </div>
//                   {/*notice*/}
//                   {/*tooltip*/}
//                   <div className="shortcode_info" id="tooltip">
//                     <h4 className="s_title" id="tooltip-t">
//                       Tooltip
//                     </h4>
//                     <div className="tooltip_content">
//                       <h6>What is an Extension?</h6>
//                       <p>
//                         So I said cup of tea Queen's English owt to do with me I
//                         don't want no agro cheers cheeky bugger fanny around
//                         baking cakes down the pub happy days,{" "}
//                         <span className="direction_steps">
//                           <span className="direction_step">James</span>
//                           <span className="direction_step">Bond</span>
//                         </span>{" "}
//                         daft a load of old tosh buggered he lost his bottle lost
//                         the plot he nicked it a blinding shot.{" "}
//                       </p>
//                       <p>
//                         <a
//                           href="#"
//                           className="tooltips"
//                           data-tooltip-content="#tooltipOne"
//                         >
//                           James Bond David
//                         </a>{" "}
//                         mufty quaint no biggie cras baking cakes barney
//                         bamboozled, what a plonker bum bag he legged it young
//                         delinquent knees up Eaton the full monty arse over tit,
//                         my lady buggered happy days amongst bugger all mate are
//                         you taking the piss brolly.
//                         <a
//                           href="#"
//                           className="tooltips"
//                           data-tooltip-content="#tooltipTwo"
//                         >
//                           William bite your arm
//                         </a>{" "}
//                         off a blinding shot matie boy old gosh barney grub
//                         dropped a clanger.
//                       </p>
//                       <p>
//                         Tosser are you taking the piss cuppa porkies pardon you
//                         butty lost the plot William bog lemon squeezy bite your
//                         arm off Richard, say what a load of rubbish cockup I
//                         don't want no agro twit young delinquent cack bodge a
//                         bonnet.
//                       </p>
//                     </div>
//                     <div className="border_bottom" />
//                   </div>
//                   {/*tooltip*/}
//                   {/*table*/}
//                   <div className="shortcode_info">
//                     <h4 className="s_title" id="table">
//                       Table
//                     </h4>
//                     <div className="table-responsive">
//                       <table className="table table_shortcode">
//                         <thead>
//                           <tr>
//                             <th>Sample ID</th>
//                             <th>Reading #1</th>
//                             <th>Reading #2</th>
//                             <th>Reading #3</th>
//                             <th>Reading #4</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th>Timeline</th>
//                             <td>16</td>
//                             <td>94</td>
//                             <td>74</td>
//                             <td>56</td>
//                           </tr>
//                           <tr>
//                             <th>Sample #1</th>
//                             <td>24</td>
//                             <td>19</td>
//                             <td>44</td>
//                             <td>74</td>
//                           </tr>
//                           <tr>
//                             <th>Pomodoro timer</th>
//                             <td>12</td>
//                             <td>63</td>
//                             <td>82</td>
//                             <td>66</td>
//                           </tr>
//                           <tr>
//                             <th>Tags</th>
//                             <td>95</td>
//                             <td>46</td>
//                             <td>62</td>
//                             <td>24</td>
//                           </tr>
//                           <tr>
//                             <th>Tracking time</th>
//                             <td>19</td>
//                             <td>66</td>
//                             <td>31</td>
//                             <td>99</td>
//                           </tr>
//                           <tr>
//                             <th>Keyboard</th>
//                             <td>57</td>
//                             <td>15</td>
//                             <td>57</td>
//                             <td>9</td>
//                           </tr>
//                           <tr>
//                             <th>Shortcuts</th>
//                             <td>69</td>
//                             <td>46</td>
//                             <td>16</td>
//                             <td>33</td>
//                           </tr>
//                           <tr>
//                             <th>Manually</th>
//                             <td>18</td>
//                             <td>93</td>
//                             <td>84</td>
//                             <td>57</td>
//                           </tr>
//                           <tr>
//                             <th>Timeline</th>
//                             <td>92</td>
//                             <td>10</td>
//                             <td>69</td>
//                             <td>35</td>
//                           </tr>
//                           <tr>
//                             <th>Adding</th>
//                             <td>4</td>
//                             <td>87</td>
//                             <td>51</td>
//                             <td>22</td>
//                           </tr>
//                           <tr>
//                             <th>Sample #2</th>
//                             <td>24</td>
//                             <td>23</td>
//                             <td>85</td>
//                             <td>34</td>
//                           </tr>
//                           <tr>
//                             <th>Pomodoro</th>
//                             <td>92</td>
//                             <td>6</td>
//                             <td>67</td>
//                             <td>65</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="basic_table">
//                       <h4 className="s_title load-order-2" id="basic">
//                         Basic Tables
//                       </h4>
//                       <p>
//                         Since Docy is based on Bootstrap 4, so you can safley
//                         use Bootstrap's table classes to style your table. We
//                         also added more table styles and functionality to our
//                         template.
//                       </p>
//                       <table className="table basic_table_info">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">1</th>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">2</th>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">3</th>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="basic_table">
//                       <h4 className="s_title load-order-2" id="strip">
//                         Striped Table
//                       </h4>
//                       <p>
//                         Use{" "}
//                         <code className="highlighter-rouge">
//                           .table-striped
//                         </code>{" "}
//                         to add zebra-striping to any table row within the{" "}
//                         <code className="highlighter-rouge">&lt;tbody&gt;</code>
//                         .
//                       </p>
//                       <table className="table table-striped table-dark">
//                         <thead>
//                           <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Handle</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">1</th>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">2</th>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">3</th>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="basic_table">
//                       <h4 className="s_title load-order-2" id="hover">
//                         Hover Tables
//                       </h4>
//                       <p>
//                         Since Docy is based on Bootstrap 4, so you can safley
//                         use Bootstrap's table classes to style your table. We
//                         also added more table styles and functionality to our
//                         template.
//                       </p>
//                       <table className="table basic_table_info table-hover">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">1</th>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">2</th>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">3</th>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                   {/*table*/}
//                   {/*lightbox*/}
//                   <div className="shortcode_info" id="lightbox">
//                     <div className="shortcode_title">
//                       <h4 className="s_title">Image Lightbox</h4>
//                       <p>
//                         A Dashboard is a convenient way to get an overview of
//                         the the current status of your tasks and monitorthe
//                         progress of your team.
//                       </p>
//                     </div>
//                     <div className="lightbox_shortcode">
//                       <img src="img/image-lightbox.jpg" alt="lightbox" />
//                       <a href="img/lightbox-preview.jpg" className="img_popup">
//                         <i className="icon_plus" />
//                       </a>
//                     </div>
//                   </div>
//                   {/*lightbox*/}
//                   {/*footnote*/}
//                   <div className="shortcode_info" id="footnote">
//                     <div className="shortcode_title">
//                       <h2>Footnotes</h2>
//                       <p>
//                         <span>Welcome to Docy !</span> Get familiar with the
//                         Stripe products and explore their features:
//                       </p>
//                     </div>
//                     <p>
//                       Apparently we had reached a{" "}
//                       <span title="Lorem ipsum dolor sit">great height</span> in
//                       the atmosphere, for the sky was a dead black, and the
//                       stars had ceased to twinkle. By the{" "}
//                       <span title="Lorem ipsum dolor, sit amet consectetur adipisicing">
//                         same illusion
//                       </span>{" "}
//                       which lifts the horizon of the sea to the level of the
//                       spectator on a hillside, the sable cloud beneath was
//                       dished out, and the car seemed to float in the middle of
//                       an immense dark sphere, whose upper half was strewn with
//                       silver. Looking down into the dark gulf below, I could see
//                       a{" "}
//                       <span
//                         className="tooltip-trigger"
//                         title="Lorem ipsum dolor"
//                       >
//                         ruddy light
//                       </span>{" "}
//                       streaming through a rift in the clouds.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Quod labore suscipit{" "}
//                       <a
//                         href="#note-name-a"
//                         id="note-link-1"
//                         className="footnotes-link tooltips"
//                         data-tooltip-content="#note-link-a"
//                       />{" "}
//                       animi consequatur. Accusantium quibusdam dolorum at a,
//                       numquam deserunt.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit{" "}
//                       <a
//                         href="#note-name-b"
//                         id="note-link-2"
//                         className="footnotes-link tooltips"
//                         data-tooltip-content="#note-link-b"
//                       />{" "}
//                       amet consectetur, adipisicing elit. Quia quos autem veniam
//                       libero! Deleniti nemo quas optio voluptas voluptatibus
//                       sint ratione. Id vel error quia ipsam sit saepe hic at
//                       amet excepturi ea. Voluptas sunt ratione consequatur{" "}
//                       <a
//                         href="#note-name-c"
//                         id="note-link-3"
//                         className="footnotes-link tooltips"
//                         data-tooltip-content="#note-link-c"
//                       />{" "}
//                       optio porro eaque nam quod ex illum modi id animi fugiat
//                       vero explicabo illo officiis assumenda nulla rerum,
//                       dignissimos sed dicta pariatur quis eum. Beatae ea cumque
//                       alias ducimus quos maxime sed, modi illum at repellendus,
//                       ex deleniti nesciunt tempore placeat in accusantium!
//                     </p>
//                     <div className="footnotes margin-top-xl">
//                       <h4>Footnotes</h4>
//                       <ol>
//                         <li id="note-name-a" className="footnotes_item">
//                           <strong>Footnote Name A</strong>
//                           <br />
//                           Lorem ipsum dolor, sit amet consectetur adipisicing
//                           elit. Amet voluptas dicta dolor.
//                           <a href="#note-link-1" aria-label="Back to article">
//                             ↑
//                           </a>
//                         </li>
//                         <li id="note-name-b" className="footnotes_item">
//                           <strong>Footnote Name B</strong>{" "}
//                           <a href="#0">[PDF]</a>
//                           <br />
//                           Lorem ipsum dolor, sit amet consectetur adipisicing
//                           elit. Amet voluptas dicta dolor.
//                           <a href="#note-link-2" aria-label="Back to article">
//                             ↑
//                           </a>
//                         </li>
//                         <li id="note-name-c" className="footnotes_item">
//                           <strong>Footnote Name C</strong>
//                           <br />
//                           Lorem ipsum dolor, sit amet consectetur adipisicing
//                           elit. Amet voluptas dicta dolor.
//                           <a href="#note-link-3" aria-label="Back to article">
//                             ↑
//                           </a>
//                         </li>
//                       </ol>
//                     </div>
//                   </div>
//                   {/*footnote*/}
//                   {/*can I use*/}
//                   <div className="shortcode_info" id="can-use">
//                     <div className="caniuse">
//                       <h4 className="s_title">Can I Use</h4>
//                       <div className="caniuse_section">
//                         <h6 className="load-order-2" id="desk">
//                           Desktop
//                         </h6>
//                         <ul className="list-unstyled caniuse_agents_list">
//                           <li className="caniuse_agents_item light_blue">
//                             <img src="img/desktop_icon1.png" alt="" />
//                             <span className="agents_version">72</span>
//                           </li>
//                           <li className="caniuse_agents_item light_blue">
//                             <img src="img/desktop_icon2.png" alt="" />
//                             <span className="agents_version">64*</span>
//                           </li>
//                           <li className="caniuse_agents_item light_red">
//                             <img src="img/desktop_icon3.png" alt="" />
//                             <span className="agents_version">No</span>
//                           </li>
//                           <li className="caniuse_agents_item light_blue">
//                             <img src="img/desktop_icon4.png" alt="" />
//                             <span className="agents_version">42</span>
//                           </li>
//                           <li className="caniuse_agents_item light_blue">
//                             <img src="img/desktop_icon5.png" alt="" />
//                             <span className="agents_version">45</span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="caniuse_section">
//                         <h6 className="load-order-2" id="mobile">
//                           Mobile / Tablet
//                         </h6>
//                         <ul className="list-unstyled caniuse_agents_list">
//                           <li className="caniuse_agents_item blue">
//                             <img src="img/mobile_icon1.png" alt="" />
//                             <span className="agents_version">9.0</span>
//                           </li>
//                           <li className="caniuse_agents_item blue">
//                             <img src="img/mobile_icon2.png" alt="" />
//                             <span className="agents_version">86</span>
//                           </li>
//                           <li className="caniuse_agents_item light_red">
//                             <img src="img/mobile_icon3.png" alt="" />
//                             <span className="agents_version">No</span>
//                           </li>
//                           <li className="caniuse_agents_item blue">
//                             <img src="img/mobile_icon4.png" alt="" />
//                             <span className="agents_version">76</span>
//                           </li>
//                           <li className="caniuse_agents_item blue">
//                             <img src="img/mobile_icon5.png" alt="" />
//                             <span className="agents_version">76*</span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="caniuse_section_legend">
//                         <p>* denotes prefix required.</p>
//                         <div className="border_bottom" />
//                         <div className="d-flex caniuse_legend_list">
//                           <span>Supported:</span>
//                           <div className="caniuse_button">
//                             <a href="#" className="blue">
//                               Yes
//                             </a>
//                             <a href="#" className="purpale_btn">
//                               No
//                             </a>
//                             <a href="#" className="green_btn">
//                               Partially
//                             </a>
//                             <a href="#" className="violate_btn">
//                               Polyfill
//                             </a>
//                           </div>
//                         </div>
//                         <p>
//                           Stats from <a href="#">Docy.com</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/*can I use*/}
//                 </article>
//                 <article className="documentation_body doc-section" id="tour">
//                   <div className="shortcode_title">
//                     <h2>Welcome to Tour</h2>
//                     <p>
//                       Documentation and examples for typography, including
//                       global settings, headings, body text, lists, and more.With
//                       your help, we're working together to build a library of
//                       detailed answers to every question about programming.
//                     </p>
//                   </div>
//                   <div className="border_bottom" />
//                   <div className="tour_item">
//                     <h4 className="c_head load-order-2" id="head">
//                       Ask questions, get answer no distractions
//                     </h4>
//                     <div className="row align-items-center">
//                       <div className="col-sm-5 tour_info_content">
//                         <p>
//                           This site is all about <b>getting answers.</b> It's
//                           not a discussion forum. There's no chit-chat.
//                         </p>
//                         <div className="just_question">
//                           <div className="just_text question_top">
//                             <p>Just questions....</p>
//                             <div
//                               className="arrow wow fadeInLeft"
//                               data-wow-delay="0.8s"
//                             >
//                               <img src="img/arrow_top.png" alt="" />
//                             </div>
//                           </div>
//                           <div className="just_text answer_bottom">
//                             <p>Just questions....</p>
//                             <div
//                               className="arrow wow fadeInLeft"
//                               data-wow-delay="0.9s"
//                             >
//                               <img src="img/arrow_bottom.png" alt="" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-7">
//                         <div
//                           className="tour_preview_img wow fadeInRight"
//                           data-wow-delay="0.3s"
//                         >
//                           <img
//                             className="img-fluid"
//                             src="img/tour_img1.png"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border_bottom" />
//                   <div className="tour_item">
//                     <h4 className="c_head">
//                       Get answers to practical, detailed questions
//                     </h4>
//                     <div className="row flex-row-reverse align-items-center tour_intro_item">
//                       <div className="col-sm-7">
//                         <div
//                           className="tour_preview_img wow fadeInRight"
//                           data-wow-delay="0.3s"
//                         >
//                           <img
//                             className="img-fluid"
//                             src="img/tour_img2.png"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-5 tour_info_content">
//                         <div
//                           className="arrow wow fadeInLeft"
//                           data-wow-delay="0.6s"
//                         >
//                           <img src="img/arrow_bottom.png" alt="" />
//                         </div>
//                         <p>
//                           Focus on questions about an actual problem you have
//                           faced. Include details about what you have tried and
//                           exactly what you are trying to do.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="row align-items-center tour_intro_item">
//                       <div className="col-sm-7">
//                         <div
//                           className="tour_preview_img wow fadeInLeft"
//                           data-wow-delay="0.7s"
//                         >
//                           <img
//                             className="img-fluid"
//                             src="img/tour_img3.png"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-5 tour_info_content">
//                         <div
//                           className="arrow wow fadeInRight"
//                           data-wow-delay="0.9s"
//                         >
//                           <img src="img/arrow_3.png" alt="" />
//                         </div>
//                         <p>
//                           Focus on questions about an actual problem you have
//                           faced. Include details about what you have tried and
//                           exactly what you are trying to do.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border_bottom" />
//                   <div className="tour_item">
//                     <h4 className="c_head load-order-2">
//                       Tags make it easy to find interesting questions
//                     </h4>
//                     <div className="row align-items-center">
//                       <div className="col-sm-4 tour_info_content">
//                         <p>
//                           All questions are tagged with their subject areas.
//                           Each can have up to 5 tags, since a question might be
//                           related to several subjects.
//                         </p>
//                         <div
//                           className="arrow text-right wow fadeInLeft"
//                           data-wow-delay="0.6s"
//                         >
//                           <img src="img/arrow_bottom.png" alt="" />
//                         </div>
//                       </div>
//                       <div className="col-sm-8">
//                         <div
//                           className="tour_preview_img wow fadeInRight"
//                           data-wow-delay="0.4s"
//                         >
//                           <img
//                             className="img-fluid"
//                             src="img/tour_img4.png"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border_bottom" />
//                   <div className="shortcode_info">
//                     <h4 className="s_title load-order-2" id="pointing">
//                       Image Hotspots
//                     </h4>
//                     <div className="pointing_img_container pointing_img_two">
//                       <img
//                         className="img-fluid"
//                         src="img/home2-large.jpg"
//                         alt="large"
//                       />
//                       <div
//                         className="img_pointing one tooltips"
//                         data-tooltip-content="#img_tooltipone"
//                       >
//                         <div className="dot" />
//                       </div>
//                       <div
//                         className="img_pointing two tooltips"
//                         data-tooltip-content="#img_tooltiptwo"
//                       >
//                         <div className="dot" />
//                       </div>
//                       <div
//                         className="img_pointing three tooltips"
//                         data-tooltip-content="#img_tooltipthree"
//                       >
//                         <div className="dot" />
//                       </div>
//                       <div
//                         className="img_pointing four tooltips"
//                         data-tooltip-content="#img_tooltipfour"
//                       >
//                         <div className="dot" />
//                       </div>
//                     </div>
//                     <div className="image_pointer">
//                       <h6 className="load-order-2" id="demo">
//                         Demo Edit Guide
//                       </h6>
//                       <p>
//                         Via edit guide you can find where to edit elements,
//                         header, footer, etc.
//                       </p>
//                       <div className="row">
//                         <div className="col-lg-6 col-sm-6">
//                           <div className="pointing_img">
//                             <a
//                               href="#"
//                               data-toggle="modal"
//                               data-target="#exampleModal"
//                             >
//                               <img src="img/img-pointer1.jpg" alt="" />
//                             </a>
//                             <h6>
//                               How to edit <a href="#">Docy</a>
//                             </h6>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-sm-6">
//                           <div className="pointing_img">
//                             <a
//                               href="#"
//                               data-toggle="modal"
//                               data-target="#exampleModal2"
//                             >
//                               <img src="img/img-pointer2.jpg" alt="" />
//                             </a>
//                             <h6>
//                               How to edit <a href="#">Docy2</a>
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//                 {/*typography*/}
//                 <article
//                   className="shortcode_info documentation_body typography_content doc-section"
//                   id="typography"
//                 >
//                   <div className="shortcode_title">
//                     <h2>Typography</h2>
//                     <p>
//                       <span>Welcome to Docy !</span> Documentation and examples
//                       for typography, including global settings, headings, body
//                       text, lists, and more.
//                     </p>
//                   </div>
//                   <h4 className="c_head load-order-2">Headings</h4>
//                   <p>
//                     All HTML headings, <code>&lt;h1&gt;</code> through{" "}
//                     <code>&lt;h6&gt;</code>, are available.
//                   </p>
//                   <div className="code-preview">
//                     <h1 className="h1">h1. Sample heading</h1>
//                     <h2 className="h2">h2. Sample heading</h2>
//                     <h3 className="h3">h3. Sample heading</h3>
//                     <h4 className="h4">h4. Sample heading</h4>
//                     <h5 className="h5">h5. Sample heading</h5>
//                     <h6 className="h6">h6. Sample heading</h6>
//                   </div>
//                   <pre className="snippets">
//                     {"                                    "}
//                     <code className="language-html" data-lang="html">
//                       {"\n"}
//                       {"                                        "}
//                       &lt;h1&gt;h1. Sample heading&lt;h1&gt;{"\n"}
//                       {"                                        "}
//                       &lt;h2&gt;h2. Sample heading&lt;h2&gt;{"\n"}
//                       {"                                        "}
//                       &lt;h3&gt;h3. Sample heading&lt;h3&gt;{"\n"}
//                       {"                                        "}
//                       &lt;h4&gt;h4. Sample heading&lt;h4&gt;{"\n"}
//                       {"                                        "}
//                       &lt;h5&gt;h5. Sample heading&lt;h5&gt;{"\n"}
//                       {"                                        "}
//                       &lt;h6&gt;h6. Sample heading&lt;h6&gt;{"\n"}
//                       {"                                    "}
//                     </code>
//                     {"\n"}
//                     {"                                "}
//                   </pre>
//                   <p>
//                     <code>.h1</code> through <code>.h6</code> classes are also
//                     available, for when you want to match the font styling of a
//                     heading but cannot use the associated HTML element.
//                   </p>
//                   <div className="code_item" id="code">
//                     <h4 className="c_head load-order-2" id="anchor">
//                       Anchor titles
//                     </h4>
//                     <p>
//                       All HTML headings, <code>&lt;h1&gt;</code> through{" "}
//                       <code>&lt;h6&gt;</code>, are available.
//                     </p>
//                     <div className="code-preview">
//                       <h5 id="header-name">
//                         Header Title
//                         <a className="anchor" href="#header-name" />
//                       </h5>
//                     </div>
//                     <pre className="snippet">
//                       {"                                        "}
//                       <code className="language-html" data-lang="html">
//                         {"\n"}
//                         {"                                            "}&lt;h5
//                         id="header-name"&gt;Header Title&lt;h5&gt;{"\n"}
//                         {"                                        "}
//                       </code>
//                       {"\n"}
//                       {"                                    "}
//                     </pre>
//                   </div>
//                   <div className="code_item">
//                     <h4 className="c_head load-order-2" id="inline">
//                       Inline text elements
//                     </h4>
//                     <p>Styling for common inline HTML5 elements.</p>
//                     <div className="code-preview">
//                       <p>
//                         You can use the mark tag to <mark>highlight</mark> text.
//                       </p>
//                       <p>
//                         <del>
//                           This line of text is meant to be treated as deleted
//                           text.
//                         </del>
//                       </p>
//                       <p>
//                         <s>
//                           This line of text is meant to be treated as no longer
//                           accurate.
//                         </s>
//                       </p>
//                       <p>
//                         <ins>
//                           This line of text is meant to be treated as an
//                           addition to the document.
//                         </ins>
//                       </p>
//                       <p>
//                         <u>This line of text will render as underlined</u>
//                       </p>
//                       <p>
//                         <small>
//                           This line of text is meant to be treated as fine
//                           print.
//                         </small>
//                       </p>
//                       <p>
//                         <strong>This line rendered as bold text.</strong>
//                       </p>
//                       <p>
//                         <em>This line rendered as italicized text.</em>
//                       </p>
//                     </div>
//                     <pre className="snippet">
//                       {"                                        "}
//                       <code className="language-html" data-lang="html">
//                         {"\n"}
//                         {"                                            "}
//                         &lt;p&gt;You can use the mark tag to
//                         &lt;mark&gt;highlight&lt;mark&gt; text.&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;del&gt;This line of text is meant treated
//                         as deleted text.&lt;del&gt;&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;s&gt;This line of text is meant treated as
//                         longer accurate.&lt;s&gt;&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;ins&gt;This line text is meant treated
//                         addition document.&lt;ins&gt;&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;u&gt;This line of text will render as
//                         underlined&lt;u&gt;&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;small&gt;This line of text is meant to
//                         treated as fine.&lt;small&gt;&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;strong&gt;This line rendered as bold
//                         text.&lt;strong&gt;&lt;p&gt;{"\n"}
//                         {"                                            "}
//                         &lt;p&gt;&lt;em&gt;This line rendered as italicized
//                         text.&lt;em&gt;&lt;p&gt;{"\n"}
//                         {"                                        "}
//                       </code>
//                       {"\n"}
//                       {"                                    "}
//                     </pre>
//                   </div>
//                   <div className="code_item">
//                     <h4 className="c_head load-order-2" id="list">
//                       Lists
//                     </h4>
//                     <p>
//                       Display a list of items inside your content, rendered with
//                       a number, a bullet, or none.
//                     </p>
//                     <div className="unorderlist">
//                       <h4 className="c_head load-order-2">Unordered list</h4>
//                       <code>&lt;ul&gt;</code>
//                       <ul className="single_list">
//                         <li>Go to Theme Settings &gt; Header Settings,</li>
//                         <li>Consectetur adipiscing elit</li>
//                         <li>Integer molestie lorem at massa</li>
//                         <li>Facilisis in pretium nisl aliquet</li>
//                       </ul>
//                     </div>
//                     <div className="unorderlist">
//                       <h4 className="c_head load-order-2">Ordered list</h4>
//                       <code>&lt;ol&gt;</code>
//                       <div className="steps-panel">
//                         <ol className="ordered-list">
//                           <li>
//                             Go to{" "}
//                             <span className="direction_steps">
//                               <span className="direction_step">
//                                 Docy Settings
//                               </span>
//                               <span className="direction_step">Header</span>{" "}
//                               <span className="direction_step">Logo</span>{" "}
//                             </span>
//                           </li>
//                           <li>Consectetur adipiscing elit</li>
//                           <li>Integer molestie lorem at massa</li>
//                           <li>Facilisis in pretium nisl aliquet</li>
//                         </ol>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="documentation_body typography_content"
//                     id="img"
//                   >
//                     <div className="shortcode_title">
//                       <h2>Image</h2>
//                       <p>
//                         <span>Welcome to Docy !</span> Documentation and
//                         examples for typography, including global settings,
//                         headings, body text, lists, and more.
//                       </p>
//                     </div>
//                     <h4 className="c_head load-order-2" id="responsive">
//                       Responsive images
//                     </h4>
//                     <p>
//                       Images in Bootstrap are made responsive with{" "}
//                       <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
//                       <code>height: auto;</code> are applied to the image so
//                       that it scales with the parent element.
//                     </p>
//                     <div className="code-preview p-0">
//                       <img
//                         src="img/blog-single/single_post_img_two.jpg"
//                         className="img-fluid"
//                         alt="Responsive image"
//                       />
//                     </div>
//                     <pre className="snippets">
//                       {"                                        "}
//                       <code className="language-html" data-lang="html">
//                         {"\n"}
//                         {"                                            "}
//                         &lt;img src="..." class="img-fluid" alt="Responsive
//                         image" &gt;{"\n"}
//                         {"                                        "}
//                       </code>
//                       {"\n"}
//                       {"                                    "}
//                     </pre>
//                     <div className="code_item">
//                       <h4 className="c_head load-order-2" id="shap">
//                         Images Shapes
//                       </h4>
//                       <p>
//                         Easily create images in different shapes with adding one
//                         class to the <em>&lt;img&gt;</em> tag.
//                       </p>
//                       <div className="code-preview">
//                         <div className="row">
//                           <div className="col-md-4 text-center">
//                             <img
//                               src="img/1.jpg"
//                               className="rounded"
//                               alt="Round image"
//                             />
//                           </div>
//                           <div className="col-md-4 text-center">
//                             <img
//                               src="img/2.jpg"
//                               className="rounded-circle"
//                               alt="Circle image"
//                             />
//                           </div>
//                           <div className="col-md-4 text-center">
//                             <img
//                               src="img/3.jpg"
//                               className="img-thumbnail"
//                               alt="Thumbnail"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <pre className="snippet">
//                         {"                                            "}
//                         <code className="language-html" data-lang="html">
//                           {"\n"}
//                           {"                                                "}
//                           &lt;img src="..." class="rounded" alt="Round image"
//                           &gt;{"\n"}
//                           {"                                                "}
//                           &lt;img src="..." class="rounded-circle" alt="Circle
//                           image" &gt;{"\n"}
//                           {"                                                "}
//                           &lt;img src="..." class="img-thumbnail"
//                           alt="Thumbnail" &gt;{"\n"}
//                           {"                                            "}
//                         </code>
//                         {"\n"}
//                         {"                                        "}
//                       </pre>
//                     </div>
//                     <div className="code_item">
//                       <h4 className="c_head load-order-2" id="align">
//                         Aligning images
//                       </h4>
//                       <p>
//                         Align images with the{" "}
//                         <a href="#">helper float classes</a> or{" "}
//                         <a href="#">text alignment classes</a>.{" "}
//                         <code className="highlighter-rouge">block</code>-level
//                         images can be centered using{" "}
//                         <a href="#">
//                           the{" "}
//                           <code className="highlighter-rouge">.mx-auto</code>{" "}
//                           margin utility class
//                         </a>
//                         .
//                       </p>
//                       <div className="code-preview">
//                         <div className="overflow-hidden">
//                           <img
//                             src="img/flot-left.jpg"
//                             className="rounded float-left img-fluid"
//                             alt="..."
//                           />
//                           <img
//                             src="img/flot-right.jpg"
//                             className="rounded float-right img-fluid"
//                             alt="..."
//                           />
//                         </div>
//                       </div>
//                       <pre className="snippet">
//                         {"                                            "}
//                         <code className="language-html" data-lang="html">
//                           {"\n"}
//                           {"                                               "}
//                           &lt;div class="overflow-hidden mb-20"&gt;{"\n"}
//                           {
//                             "                                                    "
//                           }
//                           &lt;img src="assets/images/thumb/l-1.jpg"
//                           class="rounded float-left" alt="..."&gt;{"\n"}
//                           {
//                             "                                                    "
//                           }
//                           &lt;img src="assets/images/thumb/l-2.jpg"
//                           class="rounded float-right" alt="..."&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"                                            "}
//                         </code>
//                         {"\n"}
//                         {"                                        "}
//                       </pre>
//                       <div className="code-preview">
//                         <div className="overflow-hidden">
//                           <img
//                             src="img/flot-left.jpg"
//                             className="rounded mx-auto d-block"
//                             alt="..."
//                           />
//                         </div>
//                       </div>
//                       <pre className="snippet">
//                         {"                                            "}
//                         <code className="language-html" data-lang="html">
//                           {"\n"}
//                           {"                                               "}
//                           &lt;div class="overflow-hidden mb-20"&gt;{"\n"}
//                           {
//                             "                                                    "
//                           }
//                           &lt;img src="assets/images/thumb/l-1.jpg"
//                           class="rounded mx-auto d-block" alt="..."&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"                                            "}
//                         </code>
//                         {"\n"}
//                         {"                                        "}
//                       </pre>
//                       <div className="code-preview">
//                         <div className="text-center">
//                           <img
//                             src="img/flot-left.jpg"
//                             className="rounded"
//                             alt="..."
//                           />
//                         </div>
//                       </div>
//                       <pre className="snippet">
//                         {"                                            "}
//                         <code className="language-html" data-lang="html">
//                           {"\n"}
//                           {"                                               "}
//                           &lt;div class="text-center mb-20"&gt;{"\n"}
//                           {
//                             "                                                    "
//                           }
//                           &lt;img src="assets/images/thumb/l-1.jpg"
//                           class="rounded" alt="..."&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"                                            "}
//                         </code>
//                         {"\n"}
//                         {"                                        "}
//                       </pre>
//                     </div>
//                   </div>
//                   <div
//                     className="documentation_body typography_content"
//                     id="video"
//                   >
//                     <div className="shortcode_title">
//                       <h2>Video</h2>
//                       <p>
//                         <span>Welcome to Docy !</span>Create responsive video or
//                         slideshow embeds based on the width of the parent by
//                         creating an intrinsic ratio that scales on any device.
//                       </p>
//                     </div>
//                     <h4 className="c_head load-order-2" id="about">
//                       About
//                     </h4>
//                     <p>
//                       Rules are directly applied to{" "}
//                       <code className="highlighter-rouge">&lt;iframe&gt;</code>,{" "}
//                       <code className="highlighter-rouge">&lt;embed&gt;</code>,{" "}
//                       <code className="highlighter-rouge">&lt;video&gt;</code>,
//                       and{" "}
//                       <code className="highlighter-rouge">&lt;object&gt;</code>{" "}
//                       elements; optionally use an explicit descendant class{" "}
//                       <code className="highlighter-rouge">
//                         .embed-responsive-item
//                       </code>{" "}
//                       when you want to match the styling for other attributes.
//                     </p>
//                     <div className="code_item">
//                       <h4 className="c_head load-order-2" id="example">
//                         Example
//                       </h4>
//                       <p>
//                         Wrap any embed like an{" "}
//                         <code className="highlighter-rouge">
//                           &lt;iframe&gt;
//                         </code>{" "}
//                         in a parent element with{" "}
//                         <code className="highlighter-rouge">
//                           .embed-responsive
//                         </code>{" "}
//                         and an aspect ratio. The{" "}
//                         <code className="highlighter-rouge">
//                           .embed-responsive-item
//                         </code>{" "}
//                         isn’t strictly required, but we encourage it.
//                       </p>
//                       <div className="code-preview">
//                         <div className="embed-responsive embed-responsive-16by9">
//                           <iframe
//                             className="embed-responsive-item"
//                             src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
//                             allowFullScreen
//                           />
//                         </div>
//                       </div>
//                       <pre className="snippet">
//                         {"                                            "}
//                         <code className="language-html" data-lang="html">
//                           {"\n"}
//                           {"                                                "}
//                           &lt;div class="embed-responsive
//                           embed-responsive-16by9"&gt;{"\n"}
//                           {
//                             "                                                    "
//                           }
//                           &lt;iframe class="embed-responsive-item" src="..."
//                           allowfullscreen&gt;&lt;iframe&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"                                            "}
//                         </code>
//                         {"\n"}
//                         {"                                        "}
//                       </pre>
//                     </div>
//                     <div className="code_item">
//                       <h4 className="c_head load-order-2" id="ratio">
//                         Aspect ratios
//                       </h4>
//                       <p>
//                         Aspect ratios can be customized with modifier classes.
//                       </p>
//                       <pre className="snippet">
//                         {"                                            "}
//                         <code className="language-html" data-lang="html">
//                           {"\n"}
//                           {"                                                "}
//                           {/* 21:9 aspect ratio */}
//                           {"\n"}
//                           {"                                                "}
//                           &lt;div class="embed-responsive
//                           embed-responsive-21by9"&gt;{"\n"}
//                           {"                                                  "}
//                           &lt;iframe class="embed-responsive-item"
//                           src="..."&gt;&lt;iframe&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"\n"}
//                           {"                                                "}
//                           {/* 16:9 aspect ratio */}
//                           {"\n"}
//                           {"                                                "}
//                           &lt;div class="embed-responsive
//                           embed-responsive-16by9"&gt;{"\n"}
//                           {"                                                  "}
//                           &lt;iframe class="embed-responsive-item"
//                           src="..."&gt;&lt;iframe&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"\n"}
//                           {"                                                "}
//                           {/* 4:3 aspect ratio */}
//                           {"\n"}
//                           {"                                                "}
//                           &lt;div class="embed-responsive
//                           embed-responsive-4by3"&gt;{"\n"}
//                           {"                                                  "}
//                           &lt;iframe class="embed-responsive-item"
//                           src="..."&gt;&lt;iframe&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"\n"}
//                           {"                                                "}
//                           {/* 1:1 aspect ratio */}
//                           {"\n"}
//                           {"                                                "}
//                           &lt;div class="embed-responsive
//                           embed-responsive-1by1"&gt;{"\n"}
//                           {"                                                  "}
//                           &lt;iframe class="embed-responsive-item"
//                           src="..."&gt;&lt;iframe&gt;{"\n"}
//                           {"                                                "}
//                           &lt;div&gt;{"\n"}
//                           {"                                            "}
//                         </code>
//                         {"\n"}
//                         {"                                        "}
//                       </pre>
//                     </div>
//                     <div className="code_item">
//                       <h4 className="c_head load-order-2" id="custom_video">
//                         Local Video
//                       </h4>
//                       <p>
//                         While it's always better to host your videos on a video
//                         sharing website, but we provided a sample for you to
//                         include local videos in your pages.
//                       </p>
//                       <div
//                         className="code-preview video_img"
//                         id="inline-popups"
//                       >
//                         <img src="img/blog-single/single_post_img.jpg" alt="" />
//                         <a className="popup-youtube video_icon" href="#vid2">
//                           <i className="arrow_triangle-right" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//                 <article className="shortcode_info doc-section" id="changelog">
//                   <div className="shortcode_title">
//                     <h2>Change Log</h2>
//                     <p>
//                       <span>Welcome to Docy !</span> Get familiar with the
//                       Stripe products and explore their features:
//                     </p>
//                   </div>
//                   <div className="changelog_inner">
//                     <div className="row changelog_info" id="v1">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>Jun 14, 2020 </h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.6</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="improve">Improvement</span>Can I
//                             use just the Grid?
//                           </p>
//                           <p>
//                             <span className="new">New</span>Added WooCommerce
//                             functionality
//                           </p>
//                           <p>
//                             <span className="new">New</span> Template Header
//                           </p>
//                           <p>
//                             <span className="new">New</span>SEO Agency Prebuilt
//                             Website
//                           </p>
//                           <p>
//                             <span className="new">New</span>Why is Foundation
//                             free?
//                           </p>
//                           <p>
//                             <span className="new">New</span>Added Services,
//                             Cases pages
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row changelog_info" id="v2">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>July 14, 2020 </h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.5</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="improve">Improvement</span>Can I
//                             use just the Grid?
//                           </p>
//                           <p>
//                             <span className="new">New</span>Added WooCommerce
//                             functionality
//                           </p>
//                           <p>
//                             <span className="new">New</span> Template Header
//                           </p>
//                           <p>
//                             <span className="new">New</span>SEO Agency Prebuilt
//                             Website
//                           </p>
//                           <p>
//                             <span className="new">New</span>Why is Foundation
//                             free?
//                           </p>
//                           <p>
//                             <span className="new">New</span>Added Services,
//                             Cases pages
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row changelog_info" id="v2-1">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>April 10, 2019</h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.5.1</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="improve">Improvement</span>3d
//                             Effects not Working in Tabs
//                           </p>
//                           <p>
//                             <span className="improve">Improvement</span>Option
//                             to Disable the Parallax on Default Posts
//                           </p>
//                           <p>
//                             <span className="improve">Improvement</span>{" "}
//                             Transition to Sticky Menu
//                           </p>
//                           <p>
//                             <span className="improve">Improvement</span>Liquid
//                             Events Scroll Indicator
//                           </p>
//                           <p>
//                             <span className="update">Update</span>improve
//                             Improvement
//                           </p>
//                           <p>
//                             <span className="update">Update</span>Testimonial
//                             Carousel Issue
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row changelog_info" id="v2-2">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>April 10, 2019</h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.5.2</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="fixed">fixed</span>3d Effects not
//                             Working in Tabs
//                           </p>
//                           <p>
//                             <span className="improve">Improvement</span>Option
//                             to Disable the Parallax on Default Posts
//                           </p>
//                           <p>
//                             <span className="improve">Improvement</span>{" "}
//                             Transition to Sticky Menu
//                           </p>
//                           <p>
//                             <span className="improve">Improvement</span>Liquid
//                             Events Scroll Indicator
//                           </p>
//                           <p>
//                             <span className="update">Update</span>improve
//                             Improvement
//                           </p>
//                           <p>
//                             <span className="update">Update</span>Testimonial
//                             Carousel Issue
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row changelog_info" id="v2-3">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>Sep 20, 2019</h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.5.3</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="fixed">Fixed</span>Another Submenu
//                             Action
//                           </p>
//                           <p>
//                             <span className="fixed">Fixed</span>How to Paginate
//                             a Post?
//                           </p>
//                           <p>
//                             <span className="fixed">Fixed</span> Template Header
//                           </p>
//                           <p>
//                             <span className="fixed">Fixed</span>SEO Agency
//                             Prebuilt Website
//                           </p>
//                           <p>
//                             <span className="new">New</span>Added Services,
//                             Cases pages
//                           </p>
//                           <p>
//                             <span className="improve">Improvment</span>Why is
//                             Foundation free?
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row changelog_info" id="v3">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>June 23, 2019</h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.4</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="update">Update</span>Added
//                             Services, Cases pages
//                           </p>
//                           <p>
//                             <span className="update">Update</span>Added
//                             WooCommerce functionality
//                           </p>
//                           <p>
//                             <span className="update">Update</span> Template
//                             Header
//                           </p>
//                           <p>
//                             <span className="update">Update</span>How many
//                             people run Foundation?
//                           </p>
//                           <p>
//                             <span className="update">Update</span>Why doesn't
//                             Foundation Have
//                           </p>
//                           <p>
//                             <span className="update">Update</span>Can I use just
//                             the Grid?
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row changelog_info" id="v4">
//                       <div className="col-lg-3 changelog_date">
//                         <div className="c_date">
//                           <h6>March 23, 2019</h6>
//                           <p>Version Name</p>
//                         </div>
//                       </div>
//                       <div className="col-lg-2">
//                         <div className="version_info">
//                           <div className="c_version">1.3</div>
//                           <div className="line bottom_half" />
//                         </div>
//                       </div>
//                       <div className="col-lg-7">
//                         <div className="changelog_content">
//                           <p>
//                             <span className="improve">Improvment</span>How to
//                             use Conditional Logic
//                           </p>
//                           <p>
//                             <span className="improve">Improvment</span>How to
//                             Setup Automatic Post Expiration
//                           </p>
//                           <p>
//                             <span className="improve">Improvment</span>Add Multi
//                             Column Classes to Post Forms
//                           </p>
//                           <p>
//                             <span className="fixed">Fixed</span>Preview Post
//                             Forms before posting
//                           </p>
//                           <p>
//                             <span className="fixed">Fixed</span>How to Allow
//                             Guest Posting
//                           </p>
//                           <p>
//                             <span className="fixed">Fixed</span>How to Limit
//                             Post Form Entries
//                           </p>
//                           <div className="download-links">
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_document_alt" />
//                               Zip
//                             </a>
//                             <a href="#" className="changelog_btn">
//                               <i className="icon_cloud-download_alt" />
//                               Download
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border_bottom" />
//                   <div className="row feedback_link">
//                     <div className="col-lg-6">
//                       <h6>
//                         <i className="icon_mail_alt" />
//                         Still stuck?{" "}
//                         <a
//                           href="#"
//                           data-toggle="modal"
//                           data-target="#exampleModal2"
//                         >
//                           How can we help?
//                         </a>
//                       </h6>
//                     </div>
//                     <div className="col-lg-6">
//                       <p>
//                         Was this page helpful?{" "}
//                         <a href="#" className="h_btn">
//                           Yes
//                         </a>
//                         <a href="#" className="h_btn">
//                           No
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-4 doc_right_mobile_menu">
//               <div className="open_icon" id="right">
//                 <i className="arrow_carrot-left" />
//                 <i className="arrow_carrot-right" />
//               </div>
//               <div className="doc_rightsidebar">
//                 <ul className="list-unstyled doc_right_link">
//                   <li>
//                     <a href="#">
//                       <i className=" icon_pencil" />
//                       Edit this page
//                     </a>
//                   </li>
//                 </ul>
//                 <pre>
//                   <code>{succesMessage}</code>
//                 </pre>
//                 <select id="mySelect">
//                   <option data-content="<i class='fab fa-windows'></i> Windows">
//                     Windows
//                   </option>
//                   <option data-content="<i class='fab fa-apple'></i> Ios">
//                     Ios
//                   </option>
//                 </select>
//                 <div
//                   id="font-switcher"
//                   className="d-flex justify-content-between align-items-center"
//                 >
//                   <div
//                     id="rvfs-controllers"
//                     className="fontsize-controllers group"
//                   />
//                   <a href="javascript:window.print()" className="print">
//                     <i className="icon_printer" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer className="simple_footer">
//         <div className="container ">
//           <div className="row">
//             <div className="col-lg-6">
//               <p>
//                 © 2020 All Rights Reserved by <a href="index-2.html">Docy</a>
//               </p>
//             </div>
//             <div className="col-lg-6 text-right">
//               <ul className="list-unstyled f_social_icon">
//                 <li>
//                   <a href="#">
//                     <i className="social_facebook" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="social_twitter" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="social_vimeo" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="social_linkedin" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <a id="back-to-top" title="Back to Top" />
//       {/* Optional JavaScript */}
//       {/* jQuery first, then Popper.js, then Bootstrap JS */}
//     </>
//   );
// }

// Home.getLayout = function getLayout(page) {
//   return (
//     <>
//       <HomeLayout>{page}</HomeLayout>
//       <Script src="/js/jquery-3.5.1.min.js"></Script>
//       <Script src="/js/pre-loader.js"> </Script>
//       <Script src="/assets/bootstrap/js/popper.min.js"></Script>
//       <Script src="/assets/bootstrap/js/bootstrap.min.js"></Script>
//       <Script src="/assets/bootstrap/js/bootstrap-select.min.js"></Script>
//       <Script src="/js/parallaxie.js"></Script>
//       <Script src="/js/TweenMax.min.js"></Script>
//       <Script src="/js/anchor.js"></Script>
//       <Script src="/assets/wow/wow.min.js"></Script>
//       <Script src="/assets/prism/prism.js"></Script>
//       <Script src="/assets/niceselectpicker/jquery.nice-select.min.js"></Script>
//       <Script src="/assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js"></Script>
//       <Script src="/assets/magnify-pop/jquery.magnific-popup.min.js"></Script>
//       <Script src="/assets/tooltipster/js/tooltipster.bundle.min.js"></Script>
//       <Script src="/assets/font-size/js/rv-jquery-fontsize-2.0.3.js"></Script>
//       <Script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></Script>
//       <Script src="/js/onpage-menu.js"></Script>
//       <Script src="/js/main.js"></Script>
//     </>
//   );
// };
