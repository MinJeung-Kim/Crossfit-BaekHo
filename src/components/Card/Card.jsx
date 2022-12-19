import React from 'react'
import styles from './Card.module.css'

export default function Card() {
  return (
    <section className={styles.home_content}>
    <div className={styles.overview_boxes}>
      <div className={styles.box}>
        <div className={styles.left_side}>
          <div className={styles.box_topic}>Order List</div>
          <div className={styles.number}>40,876</div>
          <div className={styles.indicator}>
            <i className="bx bx-up-arrow-alt"></i>
            <span className={styles.text}>Up from yesterday</span>
          </div>
        </div>
        <i className={`bx bxs-cart-alt ${styles.cart}`}></i>
      </div>
      <div className={styles.box}>
        <div className={styles.left_side}>
          <div className={styles.box_topic}>Total Sales</div>
          <div className={styles.number}>38,876</div>
          <div className={styles.indicator}>
            <i className="bx bx-up-arrow-alt"></i>
            <span className={styles.text}>Up from yesterday</span>
          </div>
        </div>
        <i className={`bx bxs-cart-add ${styles.cart} ${styles.two}`}></i>
      </div>
      <div className={styles.box}>
        <div className={styles.left_side}>
          <div className={styles.box_topic}>Total Profit</div>
          <div className={styles.number}>12,876</div>
          <div className={styles.indicator}>
            <i className={`bx bx-down-arrow-alt ${styles.down}`}></i>
            <span className={styles.text}>Up from yesterday</span>
          </div>
        </div>
        <i className={`bx bxs-cart ${styles.cart} ${styles.three}`}></i>
      </div>
      <div className={styles.box}>
        <div className={styles.left_side}>
          <div className={styles.box_topic}>Total Profit</div>
          <div className={styles.number}>12,876</div>
          <div className={styles.indicator}>
            <i className="bx bx-up-arrow-alt"></i>
            <span className={styles.text}>Up from yesterday</span>
          </div>
        </div>
        <i
          className={`bx bxs-cart-download ${styles.cart} ${styles.four}`}
        ></i>
      </div>
    </div>
  </section>
  )
}
