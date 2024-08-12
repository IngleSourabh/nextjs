import React from "react";
import Image from "next/image";
import styles from "./cpCard.module.scss";
import CpCardButton from "../cp-card-button/CpCardButton";
interface prop {
  data: any;
}

const CpCard = (props: prop) => {
  return (
    <div className={`${styles["cp_cards"]}`}>
      <div className={`${styles["card_image"]}`}>
        <Image
          src={props.data.image}
          alt={props.data.title}
          className={`${styles["image"]}`}
          fill
        />
      </div>
      <h4 className={`${styles["cards_title"]}`}>{props.data.title}</h4>
      <p className={`${styles["cards_price"]}`}>
        <span className={`${styles["cards_currency"]}`}>$</span>
        {props.data.price}
      </p>

      <CpCardButton />
    </div>
  );
};

export default CpCard;
