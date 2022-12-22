import { useState } from "react";
import styles from "./DataGrid.module.css";

const title = [
  "ID",
  "First name",
  "Last name",
  "Email",
  "Street",
  "Country",
  "University",
  "IBAN",
];

const data = [
  {
    id: 1,
    First_name: "Israel",
    Last_name: "Tassell",
    Email: "itassell1@ow.ly",
    Street: "245 Merchant Circle",
    Country: "Macedonia",
    University: "South East European University",
    IBAN: "FR11 4824 2942 41H9 XBHC 46P2 O86",
  },
  {
    id: 2,
    First_name: "Eveleen",
    Last_name: "Mercer",
    Email: "emercer2@ow.ly",
    Street: "70700 Kipling Pass",
    Country: "Portugal",
    University: "Instituto Superior Novas Profissões - INP",
    IBAN: "GR96 7559 456P GUAN WTAJ 3VPB S0P",
  },
  {
    id: 3,
    First_name: "Conn",
    Last_name: "Whitley",
    Email: "cwhitley3@wsj.com",
    Street: "03 Service Terrace",
    Country: "Albania",
    University: "Epoka University",
    IBAN: "LI59 1813 2T7T VKTO 6RKE X",
  },
  {
    id: 4,
    First_name: "Cherye",
    Last_name: "Smitheram",
    Email: "csmitheram4@rambler.ru",
    Street: "9 Eliot Parkway",
    Country: "Indonesia",
    University: "Universitas Mahasaraswati Denpasar",
    IBAN: "BR27 4570 4226 4255 5239 0197 316T J",
  },
  {
    id: 5,
    First_name: "Lani",
    Last_name: "Ovendale",
    Email: "lovendale0@w3.org",
    Street: "7850 Old Shore Drive",
    Country: "United Kingdom",
    University: "University of Plymouth",
    IBAN: "BG34 MPVP 8782 88EX H1CJ SC",
  },
];

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
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </section>
  );
}
