import React, { useState } from "react";
import style from "./style.module.css";
import { Accordion } from "react-bootstrap";
const Boxes = () => {
  const [openAccordion, setOpen] = useState<number | null>(null);
  const toggleItem = (eventKey: number) => {
    setOpen(openAccordion === eventKey ? null : eventKey);
  };
  return (
    <div className={style.Accordion}>
      <Accordion>
        <Accordion.Item  onClick={() => toggleItem(0)} eventKey="0">
          <Accordion.Header>
            <img
              src="/images/icons/circle-check-black.png"
              alt="circle-check-icon"
            />
            <span className="ml-2">Контрола На Квалитет</span>
            <img
              src={`${
                openAccordion?.toString() === "0"
                  ? "/images/icons/x-icon.png"
                  : "/images/icons/ph_plus-light.png"
              }`}
              alt=""
            />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item onClick={() => toggleItem(1)} eventKey="1">
          <Accordion.Header>
            <img src="/images/icons/box-with-arrow-left.png" alt="box icon" />
            <span className="ml-2">Политика на враќање</span>
            <img
              src={`${
                openAccordion?.toString() === "1"
                  ? "/images/icons/x-icon.png"
                  : "/images/icons/ph_plus-light.png"
              }`}
              alt=""
            />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item onClick={() => toggleItem(2)} eventKey="2">
          <Accordion.Header>
            <img
              src="/images/icons/delivery-truck-icon.png"
              alt="delivery icon"
            />
            <span className="ml-2">Достава</span>
            <img
              src={`${
                openAccordion?.toString() === "2"
                  ? "/images/icons/x-icon.png"
                  : "/images/icons/ph_plus-light.png"
              }`}
              alt=""
            />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item onClick={() => toggleItem(3)} eventKey="3">
          <Accordion.Header>
            <img
              src="/images/icons/question-mark-icon.png"
              alt="question-icon"
            />
            <span className="ml-2">Помош</span>
            <img
              src={`${
                openAccordion?.toString() === "3"
                  ? "/images/icons/x-icon.png"
                  : "/images/icons/ph_plus-light.png"
              }`}
              alt=""
            />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Boxes;
