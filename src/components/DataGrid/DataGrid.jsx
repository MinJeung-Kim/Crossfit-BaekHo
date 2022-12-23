import { useState } from "react";
import { data, title } from "../../util/dataGridData";
import styles from "./DataGrid.module.css";

export default function DataGrid() {
  const [checkItems, setCheckItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <section className={styles.dataGrid}>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false}
              />
            </th>

            {title.map((title) => {
              return (
                <>
                  <th key={title}>
                    {title} <span className={styles.resize_handle}></span>
                  </th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              First_name,
              Last_name,
              Email,
              Street,
              Country,
              University,
              IBAN,
              Action
            }) => {
              return (
                <tr key={id}>
                  <td className={styles.table_data}>
                    <input
                      type="checkbox"
                      name={`select-${id}`}
                      onChange={(e) => handleSingleCheck(e.target.checked, id)}
                      checked={checkItems.includes(id) ? true : false}
                    />
                  </td>
                  <td>{id}</td>
                  <td>{First_name}</td>
                  <td>{Last_name}</td>
                  <td>{Email}</td>
                  <td>{Street}</td>
                  <td>{Country}</td>
                  <td>{University}</td>
                  <td>{IBAN}</td>
                  <td>{Action}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </section>
  );
}
