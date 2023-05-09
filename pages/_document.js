import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="doc full-width-doc sticky-nav-doc onepage-doc"
        data-spy="scroll"
        data-target="#navbar-example3"
        data-scroll-animation="true"
        data-offset="70"
      >
        <Main />
        <NextScript />        
      </body>
    </Html>
  );
}
