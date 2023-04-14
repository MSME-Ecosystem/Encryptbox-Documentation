import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="simple_footer">
        <div className="container ">
          <p className="text-center">
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <Link
              href="https://encryptbox.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              EncryptBox
            </Link>
          </p>
        </div>
      </footer>

      <a id="back-to-top" title="Back to Top" />
    </>
  );
}

export default Footer;
