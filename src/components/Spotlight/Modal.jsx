import React from "react";
import ModalIndividual from "./ModalIndividual";
import Img from "../../assets/images/sbrclogo.png";
function Modal({ modalValue }) {
  return (
    <div
      className="modal"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl modal-fullscreen-sm-down">
        <div className="modal-content p-1">
          <div className="modal-header p-2">
            {/* <img
              style={{ height: "2rem" }}
              className="logo-img d-sm-none d-inline"
              src={Img}
              alt=""
            /> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <h1 className="m-0 font-s">Soptlight</h1> */}
          <div className="modal-body p-sm-4 ">
            <ModalIndividual modalValue={modalValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
