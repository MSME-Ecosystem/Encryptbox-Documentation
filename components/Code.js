import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "@/styles/Home.module.css";
import { TbCopy, TbClipboardCopy } from "react-icons/tb";
import { Prism } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Cookies from "js-cookie";
function Code({ code, language }) {
  const [isCopied, setIsCopied] = useState(false);
 
  return (
    <div className="media-body">
      <div className={styles.parentDiv}>
        <CopyToClipboard
          onCopy={() => setIsCopied(true)}
          className={styles.copyButton}
          text={code}
        >
          <button className={styles.cbtn}>
            {isCopied ? <TbClipboardCopy /> : <TbCopy />}
          </button>
        </CopyToClipboard>
        <Prism language={language} style={nightOwl}>
          {code}
        </Prism>
      </div>
    </div>
  );
}

export default Code;
