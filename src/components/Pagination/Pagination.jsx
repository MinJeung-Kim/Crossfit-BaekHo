import React, { useState } from "react";
import { BiChevronLeft, BiChevronsLeft } from "react-icons/bi";
import { FiChevronRight, FiChevronsRight } from "react-icons/fi";
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
        <i>
          <BiChevronsLeft />
        </i>
      </button>
      <button
        className={`${styles.page_btn} ${styles.prev_page}`}
        onClick={handlePrev}
        disabled={page === 1}
      >
        <i>
          <BiChevronLeft />
        </i>
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
        <i>
          <FiChevronRight />
        </i>
      </button>
      <button
        className={`${styles.page_btn} ${styles.end_page}`}
        disabled={page === total}
      >
        <i>
          <FiChevronsRight />
        </i>
      </button>
    </div>
  );
}
