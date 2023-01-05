import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function PopUp({
  toast,
  customers,
  setCustomers,
  selectedCustomers,
  setSelectedCustomers,
  deleteProductsDialog,
  setDeleteProductsDialog,
}) {
  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const deleteSelectedProducts = () => {
    let _products = customers.filter((val) => !selectedCustomers.includes(val));
    setCustomers(_products);
    setDeleteProductsDialog(false);
    setSelectedCustomers(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );
  return (
    <Dialog
      visible={deleteProductsDialog}
      style={{ width: "450px" }}
      header="Confirm"
      modal
      footer={deleteProductsDialogFooter}
      onHide={hideDeleteProductsDialog}
    >
      <div className="confirmation-content">
        <i
          className="pi pi-exclamation-triangle mr-3"
          style={{ fontSize: "2rem" }}
        />
        {customers && (
          <span>Are you sure you want to delete the selected products?</span>
        )}
      </div>
    </Dialog>
  );
}
