import { InputNumber } from "primereact/inputnumber";

export const balanceTemplate = (rowData) => {
  return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
};

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const priceEditor = (options) => {
  return (
    <InputNumber
      inputClassName="p-2"
      value={options.value}
      style={{ width: "100%" }}
      onValueChange={(e) => options.editorCallback(e.value)}
      mode="currency"
      currency="USD"
      locale="en-US"
    />
  );
};
