import React from "react";
import Card from "../../components/Card/Card";
import DataGrid from "../../components/DataGrid/DataGrid";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <article className={styles.dashboard}>
      <Card />
      <DataGrid />
    </article>
  );
}
