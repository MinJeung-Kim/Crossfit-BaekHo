import React from "react";
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

const content = [
  {
    id: "000001",
    First_name: "Lani",
    Last_name: "Ovendale",
    Email: "lovendale0@w3.org",
    Street: "7850 Old Shore Drive",
    Country: "United Kingdom",
    University: "University of Plymouth",
    IBAN: "BG34 MPVP 8782 88EX H1CJ SC",
  },
  {
    id: "000002",
    First_name: "Israel",
    Last_name: "Tassell",
    Email: "itassell1@ow.ly",
    Street: "245 Merchant Circle",
    Country: "Macedonia",
    University: "South East European University",
    IBAN: "FR11 4824 2942 41H9 XBHC 46P2 O86",
  },
  {
    id: "000003",
    First_name: "Eveleen",
    Last_name: "Mercer",
    Email: "emercer2@ow.ly",
    Street: "70700 Kipling Pass",
    Country: "Portugal",
    University: "Instituto Superior Novas Profissões - INP",
    IBAN: "GR96 7559 456P GUAN WTAJ 3VPB S0P",
  },
  {
    id: "000004",
    First_name: "Conn",
    Last_name: "Whitley",
    Email: "cwhitley3@wsj.com",
    Street: "03 Service Terrace",
    Country: "Albania",
    University: "Epoka University",
    IBAN: "LI59 1813 2T7T VKTO 6RKE X",
  },
  {
    id: "000005",
    First_name: "Cherye",
    Last_name: "Smitheram",
    Email: "csmitheram4@rambler.ru",
    Street: "9 Eliot Parkway",
    Country: "Indonesia",
    University: "Universitas Mahasaraswati Denpasar",
    IBAN: "BR27 4570 4226 4255 5239 0197 316T J",
  },
];

export default function DataGrid() {
  const table = document.querySelector("table");
  let headerBeingResized;
  const columns = [];
  const min = 150;

  const initResize = ({ target }) => {
    headerBeingResized = target.parentNode;
    headerBeingResized.classList.add("header--being-resized");
  };

  const handleClassName = ({ target }) => {
    headerBeingResized = target.parentNode.classList.remove(
      "header--being-resized"
    ); 
  };

  const handleMoveDom = (e) => requestAnimationFrame(() => {
    
    // Calculate the desired width
    const horizontalScrollOffset = document.documentElement.scrollLeft;
    const width = (horizontalScrollOffset + e.clientX) - headerBeingResized.offsetLeft;
    
    // Update the column object with the new size value
    const column = columns.find(({ header }) => header === headerBeingResized);
    column.size = Math.max(min, width) + 'px'; // Enforce our minimum
    
    // For the other headers which don't have a set width, fix it to their computed width
    columns.forEach((column) => {
      if(column.size.startsWith('minmax')){ // isn't fixed yet (it would be a pixel value otherwise)
        column.size = parseInt(column.header.clientWidth, 10) + 'px';
        console.log('onMouseMove', column.size);
      }
    });
    
    /* 
      Update the column sizes
      Reminder: grid-template-columns sets the width for all columns in one value
    */
    table.style.gridTemplateColumns = columns
      .map(({ header, size }) => size)
      .join(' ');
  });

  return (
    <section className={styles.dataGrid}>
      <table>
        <thead>
          {title.map((title, index) => {
            return (
              <tr key={index}>
                <th
                  onMouseDown={initResize}
                  onMouseUp={handleClassName}
                  onMouseMove={handleMoveDom}
                >
                  {title} <span className={styles.resize_handle}></span>
                </th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {content.map(
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
                <tr>
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
