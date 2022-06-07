import React from "react";
import "./Modal.scss";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

const Modal = ({ onCloseModal }) => {
  return (
    <section className="modal-section --100vh cm" onClick={onCloseModal}>
      <div className="modal --flex-center">
        <div className="modal-content --bg-light --p --card">
          <AiOutlineClose
            color="red"
            size={16}
            className="close-icon cm"
            onClick={onCloseModal}
          />

          <div className="modal-head --flex-start">
            <AiOutlineInfoCircle color="orangered" size={18} />
            <h3 className="--text-p --ml">Do you want to continue?</h3>
          </div>
          <div className="modal-body">
            <p className="--text-sm --mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              mollitia nulla dolores sit, repellat quisquam cupiditate quam odit
              beatae, incidunt sint maiores aliquam! Exercitationem, facere?
            </p>
          </div>
          <div className="modal-footer --flex-end">
            <button className="--btn cm" onClick={onCloseModal}>
              Cancel
            </button>
            <button className="--btn --btn-primary">Proceed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
