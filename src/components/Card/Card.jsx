import React from "react";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BsCartX, BsCartCheck } from "react-icons/bs";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <section className={styles.home_content}>
      <div className={styles.overview_boxes}>
        <div className={styles.box}>
          <div className={styles.left_side}>
            <div className={styles.box_topic}>Order List</div>
            <div className={styles.number}>40,876</div>
            <div className={styles.indicator}>
              <i>
                <BsArrowUpCircle />
              </i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={styles.cart}>
            <AiOutlineShoppingCart />
          </i>
        </div>
        <div className={styles.box}>
          <div className={styles.left_side}>
            <div className={styles.box_topic}>Total Sales</div>
            <div className={styles.number}>38,876</div>
            <div className={styles.indicator}>
              <i>
                <BsArrowUpCircle />
              </i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={` ${styles.cart} ${styles.two}`}>
            <MdAddShoppingCart />
          </i>
        </div>
        <div className={styles.box}>
          <div className={styles.left_side}>
            <div className={styles.box_topic}>Total Profit</div>
            <div className={styles.number}>12,876</div>
            <div className={styles.indicator}>
              <i className={styles.down}>
                <BsArrowDownCircle />
              </i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={` ${styles.cart} ${styles.three}`}>
            <BsCartX />
          </i>
        </div>
        <div className={styles.box}>
          <div className={styles.left_side}>
            <div className={styles.box_topic}>Total Profit</div>
            <div className={styles.number}>12,876</div>
            <div className={styles.indicator}>
              <i>
                <BsArrowUpCircle />
              </i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={`${styles.cart} ${styles.four}`}>
            <BsCartCheck />
          </i>
        </div>
      </div>
    </section>
  );
}
