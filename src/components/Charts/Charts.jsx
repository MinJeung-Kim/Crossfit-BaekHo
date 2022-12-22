import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import styles from "./Charts.module.css";

export default function Charts() {
  return (
    <div className={styles.graphBox}>
      <div className={styles.box}>
        <PieChart />
      </div>
      <div className={styles.box}>
        <BarChart />
      </div>
    </div>
  );
}
