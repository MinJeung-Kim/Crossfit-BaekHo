import React, { useState } from "react";
import styles from "./Pagination.module.css";
export default function Pagination() {
  const [page, setPage] = useState(1);
  const total = 100;
  const limit = 20;
  const numPages = Math.ceil(total / limit);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  console.log(page);

  return (
    <div className={styles.pagination_buttons}>
      <button
        className={`${styles.page_btn} ${styles.start_page}`}
        disabled={page === 1}
      >
        <i className="bx bx-chevrons-left"></i>
      </button>
      <button
        className={`${styles.page_btn} ${styles.prev_page}`}
        onClick={handlePrev}
        disabled={page === 1}
      >
        <i className="bx bx-chevron-left"></i>
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className={styles.page_btn}
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className={`${styles.page_btn} ${styles.next_page}`}
        onClick={handleNext}
        disabled={page === numPages}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
      <button
        className={`${styles.page_btn} ${styles.end_page}`}
        disabled={page === total}
      >
        <i className="bx bx-chevrons-right"></i>
      </button>
    </div>
  );
}
