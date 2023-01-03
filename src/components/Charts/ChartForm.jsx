import styles from "./ChartForm.module.css";
import BarChart from "./Chart/BarChart";
import PieChart from "./Chart/PieChart";
import Charts from "./Chart/Charts";

export default function ChartForm() {
  return (
    <div className={styles.graphBox}>
      <div className={styles.box}>
        <Charts type={"polarArea"} />
        {/* <PieChart /> */}
      </div>
      <div className={styles.box}>
        <Charts type={"bar"} />
        {/* <BarChart /> */}
      </div>
    </div>
  );
}
