import styles from "./index.module.scss";
import cl from "classnames";
import React from "react";

const Button = ({
  className,
  children,
  onClick,
  disabled
}: any) => {
  return (
    <button
      className={cl(className, styles.button)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
