import "./Teams.css";
import {
  gensecdata,
  webHead,
  eventHead,
  designHead,
  sponsHead,
  aish,
  gsec2024,
  eventHead2024,
  publicHead2024,
  sponsHead2024,

} from "./Heads";
import {  gensec2022, designHead2022, eventHead2022 } from "./ExTeam2022";
import {  gensec2021, designHead2021, eventHead2021 } from "./ExTeam2021";
import { gensec2020,sponsHead2020, designHead2020, eventHead2020 } from "./ExTeam2020";

import studData from "./StudentMembers";
// import asmData from "./AssociateMembers";
import { motion } from "framer-motion";

import React, { useState } from 'react';

//   return (
//     <div>
//       <DropdownButton id="dropdown-basic-button" title="Dropdown" onSelect={handleSelect}>
//         <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
//         <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
//       </DropdownButton>
//       <div className="mt-3">
//         <h3>{content}</h3>
//       </div>
//     </div>
//   );
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Bootstrap Dropdown Example</h1>
//         <DropdownComponent />
//       </header>
//     </div>
//   );
// }

function Teams() {
  const [content, setContent] = useState("2024");
  const options = ["2024", "2023","2022","2021","2020"];
  const data = {
    "2024": [gsec2024,sponsHead2024,publicHead2024],
    "2023": [gensecdata,sponsHead,eventHead,designHead],
    "2022": [gensec2022, eventHead2022,designHead2022],
    "2021": [ gensec2021,eventHead2021,designHead2021],
    "2020": [gensec2020,sponsHead2020,eventHead2020, designHead2020],
  };

  return (
    <>
      <section id="team">
        <img
          id="test-img"
          src={aish}
          style={{ width: "0", height: "0", opacity: "0" }}
        />
        <h1
          className="team-title text-center mb-0 mt-2"
          style={{
            color: "#08707f",
            fontSize: "3rem",
            fontFamily: "Raleway,sans-serif",
          }}
        >
          OUR PEOPLE
        </h1>
        <div className="demo">
          <div className="container text-center">
            <h3
              className=" team-title senior-title pt-0 mt-0"
              style={{ color: "#08707f" }}
            >
              <span style={{ fontFamily: "sans-serif" }} >
              <div class="btn-group align-items-center">
              <span class="mx-auto my-auto"> EXECUTIVE TEAM {content} </span>
                <button
                  className=" dropdown-toggle mx-auto my-auto"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* {content} */}
                  <i class="fa-solid fa-caret-down" style={{color: "#08707f"}}></i>
                </button> <ul className="dropdown-menu dropdown-menu-end fade" aria-labelledby="dropdownMenuButton">
                  {options.map((option, index) => (
                     <li key={index}>
                      <button
                        className="dropdown-item"
                        onClick={() => setContent(option)}
                      >
                        {option}
                      </button>
                     </li>
                    ))}
                  </ul>
                  </div>
                  </span>
            </h3>
            {/* <div className="gSec">
              {data[content][0].map((gsec) => {
                return (
                  <div
                    key={gsec.name}
                    className="col-sm-6 col-md-6 col-lg-4 my-auto"
                  >
                    <div className="our-team">
                      <motion.div className="team_img">
                        <motion.img
                          className="head-img"
                          src={gsec.img}
                        ></motion.img>
                        <ul className="social-team">
                          <li>
                            <a href={gsec.fb} target="_blank" rel="noreferrer">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={
                                "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                                gsec.mail
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={gsec.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={"tel:" + gsec.contact}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-mobile"></i>
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                      <div className="team-content">
                        <h3 className="team-title">{gsec.name}</h3>
                        <span style={{ color: "red " }} className="post">
                          {gsec.pos}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="spons">
              {data[content][1].map((spons) => {
                return (
                  <div
                    key={spons.name}
                    className="col-sm-6 col-md-6 col-lg-4 my-auto"
                  >
                    <div className="our-team">
                      <motion.div className="team_img">
                        <motion.img
                          className="head-img"
                          src={spons.img}
                        ></motion.img>
                        <ul className="social-team">
                          <li>
                            <a href={spons.fb} target="_blank" rel="noreferrer">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={
                                "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                                spons.mail
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={spons.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={"tel:" + spons.contact}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-mobile"></i>
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                      <div className="team-content">
                        <h3 className="team-title">{spons.name}</h3>
                        <span style={{ color: "red " }} className="post">
                          {spons.pos}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="web">
              {data[content][2].map((web) => {
                return (
                  <div
                    key={web.name}
                    className="col-sm-6 col-md-6 col-lg-4 my-auto"
                  >
                    <div className="our-team">
                      <motion.div className="team_img">
                        <motion.img
                          className="head-img"
                          src={web.img}
                        ></motion.img>
                        <ul className="social-team">
                          <li>
                            <a href={web.fb} target="_blank" rel="noreferrer">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={
                                "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                                web.mail
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={web.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={"tel:" + web.contact}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-mobile"></i>
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                      <div className="team-content">
                        <h3 className="team-title">{web.name}</h3>
                        <span style={{ color: "red " }} className="post">
                          {web.pos}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
            {/* /* <div className="web">
              {data[content].map((pos) => (
                {pos.map((event,index) => {
                  return (
                    <div
                      key={event.name}
                      className="col-sm-6 col-md-6 col-lg-4 my-auto"
                    >
                      <div className="our-team">
                        <motion.div className="team_img">
                          <motion.img
                            className={`head-img ${index==0? 'scale':""}`}
                            src={event.img}
                          ></motion.img>
                          <ul className="social-team">
                            <li>
                              <a href={event.fb} target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href={
                                  "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                                  event.mail
                                }
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fa fa-envelope"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href={event.linkedin}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href={"tel:" + event.contact}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fa fa-mobile"></i>
                              </a>
                            </li>
                          </ul>
                        </motion.div>
                        <div className="team-content">
                          <h3 className="team-title">{event.name}</h3>
                          <span style={{ color: "red " }} className="post">
                            {event.pos}
                          </span>
                        </div>
                      </div>
                    </div> );}
                )}
              ))}
            </div> */}
          {data[content].map((posholder,index) => (
            <div className="spons">
              {posholder.map((event, i) => (
                <div key={event.name} className="col-sm-6 col-md-6 col-lg-4 my-auto">
                  <div className="our-team">
                    <motion.div className="team_img">
                      <motion.img
                        className={`head-img ${ index === 2 && i === 0 ? "scale" : ""}`}
                        // className="head-img"
                        src={event.img}
                        alt={event.name}
                      />
                      <ul className="social-team">
                        <li>
                          <a href={event.fb} target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${event.mail}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                        <li>
                          <a href={event.linkedin} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href={`tel:${event.contact}`} target="_blank" rel="noreferrer">
                            <i className="fa fa-mobile"></i>
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                    <div className="team-content">
                      <h3 className="team-title">{event.name}</h3>
                      <span style={{ color: "red " }} className="post">
                        {event.pos}
                      </span>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          ))}
            {/* <div className="design">
              {designHead.map((design) => {
                return (
                  <div
                    key={design.name}
                    className="col-sm-6 col-md-6 col-lg-4 my-auto"
                  >
                    <div className="our-team">
                      <motion.div className="team_img">
                        <motion.img
                          className="head-img"
                          src={design.img}
                        ></motion.img>
                        <ul className="social-team">
                          <li>
                            <a
                              href={design.fb}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={
                                "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                                design.mail
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={design.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={"tel:" + design.contact}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-mobile"></i>
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                      <div className="team-content">
                        <h3 className="team-title">{design.name}</h3>
                        <span style={{ color: "red " }} className="post">
                          {design.pos}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
            {/* <div className="row d-flex justify-content-center align-items-center">
            {gensecdata.map((ele, i) => {
              return (
                <>
                  <div className=" col-lg-4 col-md-6 my-4 col-sm-6  " >
                    <div className="our-team">
                      <motion.div 
                       className="team_img">
                        <motion.img 
                        className="head-img" src={ele.img} 
                        ></motion.img>
                        <ul className="social-team">
                          <li><a  href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook" ></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          <li><a href={"tel:" + ele.contact} target="_blank" rel="noreferrer"><i className="fa fa-mobile" ></i></a></li>
                        </ul>
                      </motion.div>
                      <div className="team-content">
                        <h3 className="team-title">{ele.name}</h3>
                        <span style={{color:"red "}} className="post">{ele.pos}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
            </div>


          <div className="row">
            {headsData.map((ele, i) => {
         
              return (
                <>
                  <div className=" col-lg-4 col-md-6 my-4 col-sm-6 ">
                    <div className="our-team">
                      <div className="team_img">
                        <motion.img  className="head-img" src={ele.img} ></motion.img>
                        <ul className="social-team">
                          <li><a href={ele.fb} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"https://mail.google.com/mail/?view=cm&fs=1&to="+ele.mail} target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a></li>
                          <li><a href={"tel:" + ele.contact} target="_blank" rel="noreferrer"><i className="fa fa-mobile" ></i></a></li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">{ele.name}</h3>
                        <span style={{color:"red "}} className="post">{ele.pos}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          
          </div> */}
          {(content === "2024") &&<> 
            <h3
              className="team-title"
              style={{
                color: "#08707f",
                fontFamily: "Raleway,sans-serif",
                marginBottom: "4rem",
                marginTop: "5rem",
              }}
            >
              STUDENT MEMBERS
            </h3>
            <div className="row">
              {studData.map((ele, i) => {
                console.log(ele.img);

                return (
                  <>
                    <div
                      className="studmemb row col-lg-5 col-md-7 my-4 col-sm-11 col-11 d-flex align-items-center card_ mx-auto"
                      style={{ borderRadius: "20px" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="col-md-4 col-sm-4 pfp"
                      >
                        <img
                          style={{ border: "solid #62466b 4px" }}
                          alt={ele.pos}
                          className="smimage"
                          src={ele.img}
                        ></img>
                      </motion.div>
                      <div className="card-body col-md-8 col-sm-8">
                        <h4
                          className="card-title my-2"
                          style={{
                            color: "white",
                            fontFamily: "Raleway,sans-serif",
                          }}
                        >
                          {ele.name}
                        </h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* <h3
              className="team-title"
              style={{
                color: "#08707f",
                fontFamily: "Raleway,sans-serif",
                marginBottom: "4rem",
                marginTop: "5rem",
              }}
            >
            /*  ASSOCIATE MEMBERS
            </h3>
            <div className="row">
              {asmData.map((ele, i) => {
                // console.log(ele.img);

                return (
                  <>
                    <div
                      className="studmemb row col-lg-5 col-md-7 my-4 col-sm-5 col-11 d-flex align-items-center card_ mx-auto"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="card-body col-md-8 col-sm-8">
                        <h4
                          className="card-title my-2"
                          style={{
                            color: "white",
                            fontFamily: "Raleway,sans-serif",
                          }}
                        >
                          {ele.name}
                        </h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>  */}
          </>}
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;