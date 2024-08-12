import React from "react";
import styles from "./cpFilter.module.scss";


interface prop{
  handleClicked:any;
}

const CpFilter = (props:prop) => {



  return (
    <div className={`${styles["cpFilter"]}`}>
      <h5 className={`${styles["title"]}`}>Filter</h5>
      <div className={`${styles["line"]}`}></div>

      <h6 className={`${styles["category"]}`}>Category</h6>
      <div>
        <input type="checkbox" id="Jewelry" value='jewelery' onChange={props.handleClicked}/>
        <label htmlFor="Jewelry"> Jewelry</label>
      </div>
      <div>
        <input type="checkbox" id="electronics" value='electronics' onChange={props.handleClicked}/>
        <label htmlFor="electronics"> Electronics</label>
      </div>
      <div>
        <input type="checkbox" id="mens_clothing" value={`men's clothing`} onChange={props.handleClicked}/>
        <label htmlFor="mens_clothing"> Men's Clothing</label>
      </div>
      <div>
        <input type="checkbox" id="womens_clothing" value={`women's clothing`} onChange={props.handleClicked}/>
        <label htmlFor="womens_clothing"> Women's Clothing</label>
      </div>
      <div className={`${styles["line"]}`}></div>
    </div>
  );
};

export default CpFilter;
