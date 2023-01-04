import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../api/UsersApi/customerService";

import styles from "./DataGrid.module.css";
import "./DataGrid.css";
import { dateEditor } from "../../util/Inputs/dateInput";
import { textEditor } from "../../util/Inputs/textInput";
import { balanceTemplate, priceEditor } from "../../util/Inputs/numberInput";
import { columns } from "../../util/dataGridData";

export default function DataGrid() {
  const [customers, setCustomers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);

  const customerService = new CustomerService();

  useEffect(() => {
    customerService.getCustomersMedium().then((data) => {
      setCustomers(data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRowEditComplete = (e) => {
    let _products2 = [...customers];
    let { newData, index } = e;

    _products2[index] = newData;
    setCustomers(_products2);
  };

  const onSelectionChange = (event) => {
    const value = event.value;
    setSelectedCustomers(value);
  };

  const onSelectAllChange = (event) => {
    const selectAll = event.checked;

    if (selectAll) {
      customerService.getCustomers().then((data) => {
        setSelectAll(true);
        setSelectedCustomers(data.customers);
      });
    } else {
      setSelectAll(false);
      setSelectedCustomers([]);
    }
  };

  const handleEditorType = (options) => {
    switch (options.field) {
      case "date":
        return dateEditor(options);
      case "balance":
        return priceEditor(options);
      default:
        return textEditor(options);
    }
  };

  const dynamicColumns = columns.map(({ field, header }, i) => {
    return (
      <Column
        key={i}
        field={field}
        header={header}
        body={field === "balance" && balanceTemplate}
        editor={(options) => handleEditorType(options)}
        style={
          field === "id"
            ? {
                display: "block",
                width: "100px",
                lineHeight: "initial",
              }
            : {
                width: "180px",
                position: "relative",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                display: "block",
                lineHeight: "initial",
              }
        }
      />
    );
  });

  return (
    <section className={styles.dataGrid}>
      <DataTable
        value={customers}
        scrollable
        scrollHeight="400px"
        scrollDirection="both"
        onRowEditComplete={onRowEditComplete}
        editMode="row"
        dataKey="id"
        selection={selectedCustomers}
        onSelectionChange={onSelectionChange}
        selectAll={selectAll}
        onSelectAllChange={onSelectAllChange}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 25, 50]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3em" }}
        ></Column>
        {dynamicColumns}
        <Column
          rowEditor
          header="Editor"
          style={{ width: "7rem" }}
          bodyStyle={{ boxShadow: "-3px 0 3px -4px rgba(0, 55, 162, 0.97)" }}
          alignFrozen="right"
          frozen
        ></Column>
      </DataTable>
    </section>
  );
}
