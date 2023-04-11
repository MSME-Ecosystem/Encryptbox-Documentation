import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "@/styles/Home.module.css";
import { TbCopy, TbClipboardCopy } from "react-icons/tb";
import { darkula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Prism } from 'react-syntax-highlighter';
function Code({ code, language }) {
    const [isCopied, setIsCopied] = useState(false)
  return (
    <div className="media-body">
      <div className={styles.parentDiv}>
        <CopyToClipboard onCopy={() => setIsCopied(true)} className={styles.copyButton} text={code}>
          <button className={styles.cbtn}>          
            {isCopied? <TbClipboardCopy/> :<TbCopy/>} 
          </button>
        </CopyToClipboard>
        <Prism language={language} style={darkula} wrapLongLines>{code}</Prism>
      </div>
    </div>
  );
}

export default Code;
