import React from "react";
import Socials from "./Socials";
function Latest({ latest }) {
  return (
    <div className="row pt-4 latest-container  m-0">
      <div className="col-10 offset-1 row latest p-1 overflow-hidden overflow-md-scroll">
        <div className="col-md-6 p-2 video">
          <div className="iframe-container"> {latest.video}</div>
          <div>
            <h3 className="py-2 px-1 name">
              <b>{latest.name}</b>
            </h3>
            <div>
              <p className="card-text">
                <i className="fa-solid fa-user-graduate p-1"></i>
                {latest.department}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-hotel p-1"></i> {latest.hall}
              </p>
              {latest.work && (
                <p className="card-text">
                  <i className="fa-solid fa-briefcase p-1"></i> {latest.work}
                </p>
              )}
              <section className="mt-4 d-none d-md-block">
                <Socials social={latest} />
              </section>
            </div>
          </div>
        </div>
        <div className="col-md-6  p-2 medium-article mt-0 mt-md-2 ">
          <p>
            <b>{latest.mediumArticle.introduction}</b>
          </p>
          {latest.mediumArticle.questions.map((q, index) => {
            return (
              <section key={index} className="pb-4">
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
          <p>{latest.mediumArticle.interviewedBy}</p>

          <section className="d-block d-md-none">
            <Socials social={latest} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Latest;
