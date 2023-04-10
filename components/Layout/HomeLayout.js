import React from "react";
import Head from "next/head";
 
import Navbar from "./navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>EncryptBox Documentation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="EncryptBox API Documentatio" />
        <meta property="og:site" content="docs.encryptbox.co.uk" />
        <meta property="og:title" content="EncryptBox" />
        <meta
          property="og:description"
          content="Voucher/Crypto On-Ramp & Off-Ramp"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://encryptbox.co.uk/register" />
        <meta property="og:type" content="article" />
      </Head>

     
        <div className="body_wrapper sticky_menu">
            <Navbar/>
          <main>{children}</main>
        </div>
      
    </>
  );
}
