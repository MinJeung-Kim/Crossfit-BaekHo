import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { CustomerService } from "../../api/UsersApi/customerService";

import styles from "./DataGrid.module.css";

export default function DataGrid() {
  const [customers2, setCustomers2] = useState([]);
  const customerService = new CustomerService();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;

  let minDate = new Date();
  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);

  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);

  addLocale("en", {
    firstDayOfWeek: 1,
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Hoy",
    clear: "Limpiar",
  });

  useEffect(() => {
    customerService.getCustomersMedium().then((data) => {
      setCustomers2(data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRowEditComplete1 = (e) => {
    let _products2 = [...customers2];
    let { newData, index } = e;

    _products2[index] = newData;

    setCustomers2(_products2);
  };

  const balanceTemplate2 = (rowData) => {
    return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        style={{ width: "100%", padding: "0.5rem" }}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const priceEditor = (options) => {
    return (
      <InputNumber
        value={options.value}
        style={{ width: "100%", padding: "0.5rem" }}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const dateEditor = (options) => {
    return (
      <Calendar
        value={options.value}
        dateFormat="yy-mm-dd"
        style={{ height: "34.5px" }}
        onValueChange={(e) => options.editorCallback(e.value)}
        showIcon
      />
    );
  };
  const onSelectionChange = (event) => {
    const value = event.value;
    setSelectedCustomers(value);
    //   setSelectAll(value.length === totalRecords);
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

  return (
    <section className={styles.dataGrid}>
      <DataTable
        value={customers2}
        scrollable
        scrollHeight="400px"
        scrollDirection="both"
        onRowEditComplete={onRowEditComplete1}
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
        <Column
          field="id"
          header="Id" 
          style={{ width: "100px" }}
        ></Column>
        <Column
          field="name"
          header="Name"
          editor={(options) => textEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="country.name"
          header="Country"
          editor={(options) => textEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="date"
          header="Date"
          editor={(options) => dateEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="company"
          header="Company"
          editor={(options) => textEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          editor={(options) => textEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="activity"
          header="Activity"
          editor={(options) => textEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="representative.name"
          header="Representative"
          editor={(options) => textEditor(options)}
          style={{ width: "150px", position: "relative" }}
        ></Column>
        <Column
          field="balance"
          header="Balance"
          editor={(options) => priceEditor(options)}
          body={balanceTemplate2}
          style={{ width: "120px", position: "relative" }}
        ></Column>
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
