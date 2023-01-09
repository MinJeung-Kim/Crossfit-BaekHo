import { Dropdown } from "primereact/dropdown";

const getStatusLabel = (status) => {
  switch (status) {
    case "Y":
      return "Y"; 
    case "N":
      return "N";
    default:
      return "NA";
  }
};

export const statusBodyTemplate = (rowData) => {
    console.log("statusBodyTemplate"); 
  return getStatusLabel(rowData.inventoryStatus);
};

export const statusEditor = (options) => {
  const statuses = [
    { label: "Y", value: "Y" },
    { label: "N", value: "N" },
  ];

  return (
    <Dropdown
      value={options.value}
      options={statuses}
      optionLabel="label"
      optionValue="value"
      onChange={(e) => options.editorCallback(e.value)}
      placeholder="Y"
      itemTemplate={(option) => {
        return (
          <span
            className={`product-badge status-${option.value.toLowerCase()}`}
          >
            {option.label}
          </span>
        );
      }}
    />
  );
};
