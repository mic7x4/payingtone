import React from "react";
import Modal from "react-modal";

function ConfirmContributionModal({ modalIsOpen, setModalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          background: "rgba(34, 34, 34, 0.900)",
          zIndex: "200",
        },
      }}
    >
      <div className="confirmation__modal">
        <div className="text__holder">
          <h1>Opt Code</h1>
          <p>Fill an opt code sent to your phone</p>
        </div>
        <div className="confirmation__form">
          <input type="text" className='conf__input' placeholder="OTP Code" />
          <button className="confmodal__btn">Confirm</button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmContributionModal;
