import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const PostGrid = ({className, children}:any) => {
  return <div className={cl(className, styles.postGrid)}>{children}</div>;
};

export default PostGrid;
