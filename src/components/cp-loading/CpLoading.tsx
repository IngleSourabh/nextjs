import React from "react";
import styles from "./cpLoading.module.scss";

const CpLoading = () => {
  return (
    <div className={`${styles["cp_loading"]}`}>
      <div className={`${styles["loading"]}`}></div>
    </div>
  );
};

export default CpLoading;
