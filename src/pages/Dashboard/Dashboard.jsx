import React from "react";
import Card from "../../components/Card/Card";
import Charts from "../../components/Charts/Charts";
import DataGrid from "../../components/DataGrid/DataGrid";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <article className={styles.dashboard}>
      <Card />
      <Charts/>
      <DataGrid />
    </article>
  );
}
