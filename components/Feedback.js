import React from "react";
 

function Feedback() {
  return (
    <article className="shortcode_info doc-section">
      <div className="border_bottom" />
      <div className="row feedback_link">
        <div className="col-lg-6">
          <h6>
            <i className="icon_mail_alt" />
            Still stuck?{" "}
            <a href="#" data-toggle="modal" data-target="#exampleModal2">
              How can we help?
            </a>
          </h6>
        </div>
        <div className="col-lg-6">
          <p>
            Was this page helpful?{" "}
            <a href="#" className="h_btn">
              Yes
            </a>
            <a href="#" className="h_btn">
              No
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Feedback;
