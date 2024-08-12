import React from "react";
import styles from "./cpBanner.module.scss";
import Image from "next/image";

const CpBanner = () => {
  return (
    <div className={` ${styles["cp_banner"]}`}>
      <div className={` ${styles["banner_lhs"]}`}>
        <div className={` ${styles["banner_lhs_center"]}`}>
          <h2 className={` ${styles["title"]}`}>Men's </h2>
          <h3 className={` ${styles["title"]}`}>Outerwear</h3>
          <div className={` ${styles["line"]}`}></div>
        </div>
      </div>

      <div className={` ${styles["banner_rhs"]}`}>
        <Image src='/images/banner.png' alt='banner Image' className={` ${styles["banner_img"]}`} fill/>
      </div>
    </div>
  );
};

export default CpBanner;
