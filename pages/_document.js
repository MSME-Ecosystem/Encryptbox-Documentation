import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="doc full-width-doc sticky-nav-doc onepage-doc"
        data-spy="scroll"
        data-target=".navbar"
        data-offset="-120"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
