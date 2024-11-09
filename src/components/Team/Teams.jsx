import "./Teams.css";
import {
  gensecdata,
  webHead,
  eventHead,
  designHead,
  sponsHead,
  aish,
} from "./Heads";
import studData from "./StudentMembers";
import asmData from "./AssociateMembers";
import { motion } from "framer-motion";

function Teams() {
  return (
    <>
      <section id="team">
        <img
          id="test-img"
          src={aish}
          style={{ width: "0", height: "0", opacity: "0" }}
        />
        <h1
          className="team-title text-center"
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
              className=" team-title senior-title"
              style={{ color: "#08707f" }}
            >
              <span style={{ fontFamily: "Raleway,sans-serif" }}>
                EXECUTIVE TEAM{" "}
              </span>
              2023
            </h3>
            <div className="gSec">
              {gensecdata.map((gsec) => {
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
              {sponsHead.map((spons) => {
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
              {webHead.map((web) => {
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
            </div>
            <div className="events">
              {eventHead.map((event) => {
                return (
                  <div
                    key={event.name}
                    className="col-sm-6 col-md-6 col-lg-4 my-auto"
                  >
                    <div className="our-team">
                      <motion.div className="team_img">
                        <motion.img
                          className="head-img"
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
                  </div>
                );
              })}
            </div>
            <div className="design">
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
            </div>
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
                      className="studmemb row col-lg-5 col-md-7 my-4 col-sm-5 d-flex align-items-center card_ mx-auto"
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
            <h3
              className="team-title"
              style={{
                color: "#08707f",
                fontFamily: "Raleway,sans-serif",
                marginBottom: "4rem",
                marginTop: "5rem",
              }}
            >
              ASSOCIATE MEMBERS
            </h3>
            <div className="row">
              {asmData.map((ele, i) => {
                // console.log(ele.img);

                return (
                  <>
                    <div
                      className="studmemb row col-lg-5 col-md-7 my-4 col-sm-5 d-flex align-items-center card_ mx-auto"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;
