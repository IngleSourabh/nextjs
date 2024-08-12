"use client";

import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "../cp-single-card/cpCard.module.scss";

const CpCardButton = () => {
  const [click, setClick] = useState(false);
  return (
    <button
      className={`${styles["cards_whishlist"]}`}
      onClick={() => setClick(!click)}
    >
      {click ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default CpCardButton;
