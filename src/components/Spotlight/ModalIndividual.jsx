import React from "react";
import Socials from "./Socials";
function ModalIndividual({ modalValue, isModalOpen }) {
  return (
    <div className="row" id="individual">
      <div className="card p-3 h-100">
        <div className="row g-0">
          <div className="col-12 col-xl-6  d-flex align-items-center justify-content-start p-0 pt-4 flex-column">
            <div className="overflow-hidden iframe-container">
              {isModalOpen ? modalValue.video : null}
            </div>{" "}
            <div
              style={{ width: "100%" }}
              className="d-flex col-xl-5 justify-content-center content align-items-start overflow-y-hidden max-h-lg-90
              "
            >
              <div className="card-body px-0 px-lg-4 py-4 about-container">
                <h5 className="card-title">
                  <b>{modalValue.name}</b>
                </h5>

                <p className="card-text">
                  <i className="fa-solid fa-user-graduate mt-1"></i>
                  <span> {modalValue.department}</span>
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-hotel mt-1"></i> {modalValue.hall}
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-briefcase mt-1"></i>
                  <span>{modalValue.work}</span>
                </p>

                <p className="mt-4  d-none d-xl-block">
                  <Socials social={modalValue} />
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6  d-flex align-items-center justify-content-start p-lg-4 pt-4 flex-column medium-article">
            <p>
              <b>{modalValue.about}</b>
            </p>
            {modalValue.mediumArticle &&
              modalValue.mediumArticle.questions.map((q, index) => {
                return (
                  <section key={index} className="pb-4 d-block">
                    <p>
                      <b>
                        {"Q)"} {q.question}
                      </b>
                    </p>
                    <p style={{ whiteSpace: "pre-line" }}>
                      <b>Ans: </b>
                      {q.answer}
                    </p>
                  </section>
                );
              })}
            {modalValue.mediumArticle && (
              <p>{modalValue.mediumArticle.interviewedBy}</p>
            )}
            <section className="mt-4 d-xl-none d-block">
              <Socials social={modalValue} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalIndividual;
