import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
const BlockContent = require('@sanity/block-content-to-react')
import { clientConfig } from "@/lib/client";

const Content = ({ className, body }: any) => {
  console.log(body);
  return (
 
    <div className={cl(styles.content, className)}>

      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: "max" }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
