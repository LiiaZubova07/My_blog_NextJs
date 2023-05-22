import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const PostGrid = ({className}:any) => {
  return <div className={cl(className, styles.postGrid)}>Пост</div>;
};

export default PostGrid;
