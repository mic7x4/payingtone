import React from "react";
import Modal from "react-modal";
import { AddCircle, Cancel, RemoveCircle, Search } from "@material-ui/icons";

function RemoveContributor({ names, setRemoveModalIsOpen, removeModalIsOpen }) {
  return (
    <Modal
      isOpen={removeModalIsOpen}
      onRequestClose={() => setRemoveModalIsOpen(false)}
      style={{
        overlay: {
          background: "rgba(34, 34, 34, 0.900)",
          zIndex: "200",
          overflow: "hidden",
        },
      }}
    >
      <span className="flex__right">
        <Cancel
          className="contributor__green"
          onClick={() => setRemoveModalIsOpen(false)}
        />
      </span>
      <h2 className="contributor__text">Cart Contributors</h2>
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
              <RemoveCircle className="contributor__green" /> <p>remove</p>
            </span>
          </li>
        ))}
      </ul>
      <div className="leave__cart">
        <span className="contributor__green leave__flex">
          <RemoveCircle /> <p>Leave this cart</p>
        </span>
      </div>
      <div className="add__collective__btn">
        <button className="collective__btn">Confirm</button>
      </div>
    </Modal>
  );
}

export default RemoveContributor;
