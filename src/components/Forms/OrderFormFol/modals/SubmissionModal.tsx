import ButtonComp from "@/components/ButtonComponent/ButtonComp";
import Link from "next/link";
import React from "react";
import { Button, Modal } from "react-bootstrap";
export interface ISubmissionModal {
  submissionPopUp: boolean;
  handleClick: () => void;
}
const SubmissionModal = ({
  submissionPopUp,
  handleClick,
}: ISubmissionModal) => {
  return (
    <Modal
      show={submissionPopUp}
      className="h-50 w-100 mx-auto submision-modal"
     
    >
      <Modal.Header  style={{ backgroundColor: "#FFF6F6" }} closeButton>
        <Modal.Title>Вашата нарачка е успешна!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center"  style={{ backgroundColor: "#FFF6F6" }}>
        <p>
          Очекувајте потврда за вашата нарачка на вашата емаил адреса. Keep on
          shining{" "}
        </p>
        <ButtonComp text={"Продолжи"} handleClick={handleClick} />
        <Link href={"/"}>Кон Почетна</Link>
      </Modal.Body>
    </Modal>
  );
};

export default SubmissionModal;
