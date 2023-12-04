import React from "react";
import { Button, Modal } from "react-bootstrap";
import style from "../style.module.css";
interface IOrderFormModal {
  showPopUp: boolean;
  closeModal: () => void;
  submitForm: () => void;
  handlingChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  firstName: string;
  lastName: string;
  number: number;
  email: string;
  adress: string;
  submitted: boolean;
}
const OrderFormModal = ({
  showPopUp,
  closeModal,
  submitForm,
  handlingChange,
  firstName,
  lastName,
  number,
  email,
  adress,
  submitted,
}: IOrderFormModal) => {
  return (
    <Modal
      centered
      show={showPopUp}
      onHide={closeModal}
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
        <form className={style.Form} onSubmit={submitForm}>
          <label>
            <input className={style.checkbox} type="checkbox" name="toggle" />
            Внеси ги податоците од профилот
          </label>

          <label htmlFor="firstName">Име</label>
          <input
            type="text"
            name="firstName"
            onChange={handlingChange}
            value={firstName}
          />
          <label htmlFor="lastName">Презиме</label>
          <input
            type="text"
            name="lastName"
            onChange={handlingChange}
            value={lastName}
          />
          <label htmlFor="adress">Адреса</label>
          <input
            type="text"
            name="adress"
            onChange={handlingChange}
            value={adress}
          />

          <label htmlFor="number">Број Контакт</label>
          <input
            type="number"
            name="number"
            onChange={handlingChange}
            value={number}
          />

          <label htmlFor="email">Емаил Адреса</label>
          <input
            type="email"
            name="email"
            onChange={handlingChange}
            value={email}
          />
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <button type="submit" onClick={submitForm} disabled={submitted}>
            Submit
          </button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default OrderFormModal;
