import React from 'react'
import Link from 'next/link';
import styles from "./cpfooter.module.scss";

const CpFooterBottom = () => {
  return (
    <div className={`container ${styles["cp-footer-bottom"]}`}>
        <div className={`${styles["footer-logo"]}`}>
            <h2 className={`${styles["logo"]}`}>venia</h2>
        </div>
        <p className={`${styles["footer_add"]}`}>@.company Home address avn.city name ZIP</p>
        <div className={`${styles["footer-links"]}`}>
            <Link href="#" className={`${styles["link"]}`}>terms to use</Link>
            <Link href="#" className={`${styles["link"]}`}>Privacy policy</Link>
        </div>
    </div>
  )
}

export default CpFooterBottom