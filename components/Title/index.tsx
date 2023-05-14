import React from 'react';
import styles from "./index.module.scss";
import cl from "classnames";

const Title = ({ children, className }:any) => {
  return (
    <h2 className={cl(className, styles.title)}>Title</h2>
  )
}

export default Title;