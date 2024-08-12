import React from "react";
import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import styles from "./cpfooter.module.scss";
import CpFooterBottom from "./CpFooterBottom";

const CpFooter = () => {
  return (
    <>
      <div className={`${styles["line"]}`}></div>
      <div className={`container ${styles["cp-footer"]}`}>
        <div className={`${styles["footer-wrap"]}`}>
          <h6 className={`${styles["link-title"]}`}>Account</h6>
          <ul className={`${styles["link-wrap"]}`}>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Sigh In
              </Link>
            </li>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Register
              </Link>
            </li>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Order Status
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles["footer-wrap"]}`}>
          <h6 className={`${styles["link-title"]}`}>About Us</h6>
          <ul className={`${styles["link-wrap"]}`}>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Our Story
              </Link>
            </li>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles["footer-wrap"]}`}>
          <h6 className={`${styles["link-title"]}`}>Help</h6>
          <ul className={`${styles["link-wrap"]}`}>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Contact us
              </Link>
            </li>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Order Status
              </Link>
            </li>
            <li className={`${styles["link-list"]}`}>
              <Link href="#" className={`${styles["link"]}`}>
                Returns
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles["follow"]}`}>
          <h6 className={`${styles["link-title"]}`}>Follow us!</h6>
          <p className={`${styles["link-desc"]}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis
            repellat repellendus error similique. Nisi tenetur vero ea maiores
            atque.
          </p>
          <ul className={`${styles["social-wrap"]}`}>
            <li className={`${styles["media-icon"]}`}>
              <Link href="#" className={`${styles["icon-link"]}`}>
                <FaInstagram />
              </Link>
            </li>
            <li className={`${styles["media-icon"]}`}>
              <Link href="#" className={`${styles["icon-link"]}`}>
                <LuFacebook />
              </Link>
            </li>
            <li className={`${styles["media-icon"]}`}>
              <Link href="#" className={`${styles["icon-link"]}`}>
                <CiTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles["line"]}`}></div>

      <CpFooterBottom />

      
    </>
  );
};

export default CpFooter;
