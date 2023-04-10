import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "@/styles/Home.module.css";
import { TbCopy, TbClipboardCopy } from "react-icons/tb";

function Code({ children, language }) {
    const [isCopied, setIsCopied] = useState(false)
  return (
    <div className="media-body">
      <div className={styles.parentDiv}>
        <CopyToClipboard onCopy={() => setIsCopied(true)} className={styles.copyButton} text={children}>
          <button className={styles.cbtn}>          
            {isCopied? <TbClipboardCopy/> :<TbCopy/>} 
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Code;
