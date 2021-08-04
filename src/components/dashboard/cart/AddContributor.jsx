import React from "react";
import Modal from "react-modal";
import { AddCircle, Cancel, Search } from "@material-ui/icons";

function AddContributor({ setModalIsOpen, modalIsOpen, names }) {
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
      <span className="flex__right">
        <Cancel
          className="contributor__green"
          onClick={() => setModalIsOpen(false)}
        />
      </span>
      <h2 className="contributor__text">Add a contributor</h2>
      <div className="add__contributor__group">
        <input
          className="contributor__control"
          type="text"
          placeholder="search a person"
        />
        <Search />
      </div>
      <ul className="add__collective_user">
        {names.map((name) => (
          <li key="name" className="add__collective__item">
            <p className="collective__name">{name}</p>
            <span className="collective__flex">
              <AddCircle className="contributor__green" /> <p>Add</p>
            </span>
          </li>
        ))}
      </ul>
      <div className="add__collective__btn">
        <button className="collective__btn">Confirm</button>
      </div>
    </Modal>
  );
}

export default AddContributor;
