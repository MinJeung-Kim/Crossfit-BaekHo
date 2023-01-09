import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import styles from "./Buttons.module.css";
import "./Buttons.css";
import PopUp from "../PopUp/PopUp";
import Modal from "../Modal/Modal";

export default function Buttons({
  customers,
  setCustomers,
  selectedCustomers,
  setSelectedCustomers,
}) {
  let emptyProduct = {
    desc: "",
    status: "",
    locker: "n",
    periodMonth: 1,
    job: "",
    email: "",
    age: 0,
    user: {
      name: "",
      image: null,
    }, 
    id: null,
    totalPrice: 0,
  };

  const toast = useRef(null);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);

  const [product, setProduct] = useState(emptyProduct);
  const [submitted, setSubmitted] = useState(false);
  const [productDialog, setProductDialog] = useState(false);

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  return (
    <div className={styles.buttons}>
      <Toast ref={toast} />
      <Button
        label="New"
        icon="pi pi-plus"
        className="p-button-success mr-2"
        onClick={openNew}
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        className="p-button-danger"
        onClick={confirmDeleteSelected}
        disabled={!selectedCustomers || !selectedCustomers.length}
      />

      <PopUp
        toast={toast}
        customers={customers}
        setCustomers={setCustomers}
        selectedCustomers={selectedCustomers}
        setSelectedCustomers={setSelectedCustomers}
        deleteProductsDialog={deleteProductsDialog}
        setDeleteProductsDialog={setDeleteProductsDialog}
      />

      <Modal
        toast={toast}
        emptyProduct={emptyProduct}
        customers={customers}
        setCustomers={setCustomers}
        product={product}
        setProduct={setProduct}
        submitted={submitted}
        setSubmitted={setSubmitted}
        productDialog={productDialog}
        setProductDialog={setProductDialog}
      />
    </div>
  );
}
