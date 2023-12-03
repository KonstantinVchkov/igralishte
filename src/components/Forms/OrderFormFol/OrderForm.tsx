import React, { useState } from "react";
// import { Formik, Field, form } from "formik";
import { Button, Modal } from "react-bootstrap";
import style from "./style.module.css";
import SubmissionModal from "./modals/SubmissionModal";
interface IOrderForm {
  popUp: boolean;
  handleClose: () => void;
}

const OrderForm = ({ popUp, handleClose }: IOrderForm) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    number: "",
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
      <Modal
        centered
        show={popUp}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <img src="/images/icons/sparks-elements-icon.png" alt="" />
            <p>Ве молиме внесете ги потребните информации</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={style.Form} onSubmit={handleSubmitForm}>
            <label>
              <input className={style.checkbox} type="checkbox" name="toggle" />
              Внеси ги податоците од профилот
            </label>

            <label htmlFor="firstName">Име</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
            />
            <label htmlFor="lastName">Презиме</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
            <label htmlFor="adress">Адреса</label>
            <input
              type="text"
              name="adress"
              onChange={handleChange}
              value={values.adress}
            />

            <label htmlFor="number">Број Контакт</label>
            <input
              type="number"
              name="number"
              onChange={handleChange}
              value={values.number}
            />

            <label htmlFor="email">Емаил Адреса</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
          </form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button
              type="submit"
              onClick={handleSubmitForm}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
      {showSubmissionModal && (
        <SubmissionModal submissionPopUp={showSubmissionModal} handleClick={handleClose} />
      )}
    </>
  );
};

export default OrderForm;
