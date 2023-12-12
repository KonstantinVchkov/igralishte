import React, { useState } from "react";
import SubmissionModal from "./modals/SubmissionModal";
import OrderFormModal from "./modals/OrderFormModal";
import { IOrderForm } from "@/types/ProjectTypes";

const OrderForm = ({ popUp, handleClose }: IOrderForm) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    number: 0,
    email: "",
  });
  const [isSubmitting, setSubmitting] = useState(true);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  if (!popUp) {
    return null;
  }
  const handleSubmitForm = () => {
    localStorage.setItem("orderComplete", JSON.stringify(values));
    setShowSubmissionModal(true);
    setSubmitting(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setSubmitting(false);
  };
  return (
    <>
      <OrderFormModal
        showPopUp={popUp}
        closeModal={handleClose}
        submitForm={handleSubmitForm}
        handlingChange={handleChange}
        firstName={values.firstName}
        lastName={values.lastName}
        number={values.number}
        email={values.email}
        adress={values.adress}
        submitted={isSubmitting}
      />
      {showSubmissionModal && (
        <SubmissionModal
          submissionPopUp={showSubmissionModal}
          handleClick={handleClose}
        />
      )}
    </>
  );
};

export default OrderForm;
