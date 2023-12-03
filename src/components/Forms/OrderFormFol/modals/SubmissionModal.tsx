import React from 'react'
import { Button, Modal } from 'react-bootstrap'
export interface ISubmissionModal {
    submissionPopUp:boolean;
    handleClick:() => void;
}
const SubmissionModal = ({submissionPopUp,handleClick}:ISubmissionModal) => {
  return (
    <Modal show={submissionPopUp}>
    <Modal.Header closeButton>
      <Modal.Title>Вашата нарачка е успешна!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Очекувајте потврда за вашата нарачка на вашата емаил адреса. Keep on
      shining{" "}
    </Modal.Body>
    <Modal.Footer>
      <Button>Продолжи</Button>
      <Button variant="secondary" onClick={handleClick}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default SubmissionModal