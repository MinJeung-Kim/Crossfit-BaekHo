import { PieChart } from "./Chart/PieChart";
import { BarChart } from "./Chart/BarChart";
import styles from "./ChartForm.module.css"; 

export default function ChartForm() {
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
