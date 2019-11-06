import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      //click the background or esc to close model
      onRequestClose={props.handleSelectionOption}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleSelectionOption}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;
