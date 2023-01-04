import { InputText } from "primereact/inputtext";

export const textEditor = (options) => {
  return (
    <InputText
      type="text"
      value={options.value}
      style={{ width: "100%", padding: "0.5rem" }}
      onChange={(e) => {
        options.editorCallback(e.target.value);
      }}
    />
  );
};
