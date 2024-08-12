"use client";

import React, { useState } from "react";
import Link from "next/link";
import CpNavbarLinks from "./CpNavbarLinkData";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import styles from "./cpNavbar.module.scss";

const CpNavbar = () => {
  const[menuButton,setMenuButton]=useState(false);
  console.log(menuButton,"menu")

  const handleOpen=()=>{
    setMenuButton(true);
  }

  const handleClose=()=>{
    setMenuButton(false);
  }
  return (
    <nav className={`${styles["navbar"]}`}>
      <div className={`container ${styles["navbar-menu"]}`}>
        <button onClick={handleOpen} className={`${styles["menubar"]}`}>
          <TiThMenu />
        </button>

        <div className={`${styles["company-logo"]}`}>
          <h2 className={`${styles["logo"]}`}>VENIA</h2>
        </div>
        
        <ul className={`${styles["list-wrap"]} ${!menuButton ? styles['close']:styles['open']}`}>
          {CpNavbarLinks.map((links) => {
            return (
              <>
                <li key={links.id} className={`${styles["list"]}`}>
                  <Link href={links.link} className={`${styles["links"]}`}>
                    {links.title}
                  </Link>
                </li>
              </>
            );
          })}
          <button onClick={handleClose} className={`${styles["close_button"]}`}>x</button>
        </ul>

        <div className={`${styles["cart-wrap"]}`}>
          <FaShoppingCart />
          <p className={`${styles["cart-count"]}`}>10</p>
        </div>
      </div>
    </nav>
  );
};

export default CpNavbar;
