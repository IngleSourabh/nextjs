"use client";
import React, { Suspense, useEffect, useState } from "react";
import CpFilter from "../cp-filter/CpFilter";
import CpLoading from "../cp-loading/CpLoading";
import CpCard from "../cp-single-card/CpCard";
import styles from "./cpCards.module.scss";
import { CiSearch } from "react-icons/ci";

const CpCards = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>();
  const [visibleItems, setVisibleItems] = useState<number>(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  let filteredData: any;
  const handleClicked = (e: any) => {
    const { value, checked } = e.target;

    setFilterCategory((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        filteredData = data;
        return prev.filter((category) => category !== value);
      }
    });
  };

  const handleSortChange = (e: any) => {
    setSortOption(e.target.value);
  };

  filteredData = data
    .filter(
      (item: any) =>
        (filterCategory.length === 0 ||
          filterCategory.includes(item.category.toLowerCase())) &&
        item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a: any, b: any) => {
      if (sortOption === "LowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "HighToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 10);
  };

  let visibleData = filteredData.slice(0, visibleItems);

  if (data.length === 0) {
    return <CpLoading />;
  }
  return (
    <div className="container">
      <div className={`${styles["cp_cards"]}`}>
        <div className={`${styles["cards_lhs"]}`}>
          <div>Clothing / Men's / Outerwear</div>
          <div className={`${styles["lhs_filter"]}`}>
            <CpFilter handleClicked={handleClicked} />
          </div>
        </div>
        <div className={`${styles["card_rhs"]}`}>
          <div className={`${styles["search"]}`}>
            <input
              type="text"
              placeholder="search here..."
              className={`${styles["search_input"]}`}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className={`${styles["search_button"]}`}>
              <CiSearch />
            </button>
          </div>
          <div className={`${styles["sort_block"]}`}>
            <p className={`${styles["total_result"]}`}>{data.length} Results</p>
            <div className={`${styles["sort_select"]}`}>
              <label
                htmlFor="sorting"
                className={`${styles["hide_product"]}`}
                id="sortingLabel"
              >
                Sort by
              </label>
              <select
                className={`${styles["select"]}`}
                name="sort"
                id="sorting"
                onChange={handleSortChange}
                value={sortOption}
              >
                <option
                  className={`${styles["product_option"]}`}
                  value="LowToHigh"
                >
                  Low to High Price
                </option>
                <option
                  className={`${styles["product_option"]}`}
                  value="HighToLow"
                >
                  High to Low Price
                </option>
              </select>
            </div>
          </div>

          {visibleData.length === 0 ? (
            <h3 style={{textAlign:"center",color:"grey",fontWeight:"bold",margin:"3rem"}}>No Such Data Found !</h3>
          ) : (
            <ul className={`${styles["list_wrap"]}`}>
              {visibleData.map((item: any) => (
                <li key={item.id}>
                  <CpCard data={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={`${styles["loadMore_button"]}`}>
        {visibleItems < filteredData.length && (
          <button className={`${styles["loadMore"]}`} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default CpCards;
