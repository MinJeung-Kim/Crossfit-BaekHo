import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <article className={styles.dashboard}>
      <Card />
      <section className={styles.sales_boxes}>
        <div className={`${styles.recent_sale} ${styles.box}`}>
          <div className={styles.title}>Recet Sales</div>
          <div className={styles.sales_details}>
            <ul className={styles.details}>
              <li className={styles.topic}>Date</li>
              <li>
                <a href="">02 Jan 2021</a>
              </li>
              <li>
                <a href="">02 Jan 2021</a>
              </li>
              <li>
                <a href="">02 Jan 2021</a>
              </li>
              <li>
                <a href="">02 Jan 2021</a>
              </li>
              <li>
                <a href="">02 Jan 2021</a>
              </li>
              <li>
                <a href="">02 Jan 2021</a>
              </li>
            </ul>
            <ul className={styles.details}>
              <li className={styles.topic}>Customer</li>
              <li>
                <a href="">Alex Doe</a>
              </li>
              <li>
                <a href="">Alex Doe</a>
              </li>
              <li>
                <a href="">Alex Doe</a>
              </li>
              <li>
                <a href="">Alex Doe</a>
              </li>
              <li>
                <a href="">Alex Doe</a>
              </li>
              <li>
                <a href="">Alex Doe</a>
              </li>
            </ul>
            <ul className={styles.details}>
              <li className={styles.topic}>Sale</li>
              <li>
                <a href="">Delivered</a>
              </li>
              <li>
                <a href="">Returned</a>
              </li>
              <li>
                <a href="">Delivered</a>
              </li>
              <li>
                <a href="">Pending</a>
              </li>
              <li>
                <a href="">Delivered</a>
              </li>
              <li>
                <a href="">Delivered</a>
              </li>
            </ul>
            <ul className={styles.details}>
              <li className={styles.topic}>Total</li>
              <li>
                <a href="">$100</a>
              </li>
              <li>
                <a href="">$100</a>
              </li>
              <li>
                <a href="">$123,33</a>
              </li>
              <li>
                <a href="">$100</a>
              </li>
              <li>
                <a href="">$100</a>
              </li>
              <li>
                <a href="">$100</a>
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <a href="">See All</a>
          </div>
        </div>
        <div className={`${styles.top_sale} ${styles.box}`}>
          <div className={styles.title}>Top Selling Product</div>
          <ul className={styles.details}>
            <li>
              <a href="">
                <img src="images/products/5.webp" alt="" />
                <span className="product_name">Gucci women's bag </span>
              </a>
              <span className="price">$14.66</span>
            </li>
            <li>
              <a href="">
                <img src="images/products/5.webp" alt="" />
                <span className="product_name">Gucci women's bag </span>
              </a>
              <span className="price">$14.66</span>
            </li>
            <li>
              <a href="">
                <img src="images/products/5.webp" alt="" />
                <span className="product_name">Gucci women's bag </span>
              </a>
              <span className="price">$14.66</span>
            </li>
            <li>
              <a href="">
                <img src="images/products/5.webp" alt="" />
                <span className="product_name">Gucci women's bag </span>
              </a>
              <span className="price">$14.66</span>
            </li>
            <li>
              <a href="">
                <img src="images/products/5.webp" alt="" />
                <span className="product_name">Gucci women's bag </span>
              </a>
              <span className="price">$14.66</span>
            </li>
            <li>
              <a href="">
                <img src="images/products/5.webp" alt="" />
                <span className="product_name">Gucci women's bag </span>
              </a>
              <span className="price">$14.66</span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
