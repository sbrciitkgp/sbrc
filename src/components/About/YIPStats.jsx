import React, { useState } from "react";
import classnames from "classnames";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  TabContent,
  TabPane,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import YIP from "./YIPdata.js";

function YIPstats() {
  const [iconTabs, setIconsTabs] = useState(5);
  const ref = useRef(null);
  const ref2=useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="yipstats">
      <motion.div >
     <motion.div
     ref={ref}
     style={{
          transform: isInView ? "none" : "translateY(+50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
     >
      <h3 className="yipstats-heading">Young Innovators Program</h3>
      </motion.div>
      <motion.div className="yipcard"
       ref={ref2}
     style={{
          transform: isInView2 ? "none" : "translateY(+50px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}>
        <CardHeader className="yipnav d-flex justify-content-center align-items-center">
          <Nav
            className=" nav-tabs-success d-flex justify-content-center align-items-center"
            role="tablist"
            tabs
          >
            <div style={{ width: "0", height: "0" }} ref={ref}></div>
            {YIP.map((navitem) => {
              return (
                <motion.div
                
                  key={navitem.year}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 1.2 }}
                >
                  <div>
                    <NavItem>
                      <NavLink
                        id={"yip-button" + navitem.id}
                        className={"yip-button "+classnames({
                          active: iconTabs === navitem.id
                        })}
                        onClick={(e) => setIconsTabs(navitem.id)}
                        href="#"
                      >
                        <span className="text-success">
                          <p>YIP {navitem.year}</p>
                        </span>
                      </NavLink>
                    </NavItem>
                  </div>
                </motion.div>
              );
            })}
          </Nav>
        </CardHeader>
        <CardBody className="yipcardbody">
          <TabContent className="tab-space" activeTab={"link" + iconTabs}>
            {YIP.map((item) => {
               function count(e) {
                return <CountUp end={parseInt(e, 10)} duration={10} redraw={true} />;
              }
              
              return (
                <TabPane key={item.year} tabId={"link" + item.id}>
                  <div className="yipitems">
                    <div className="count-card d-flex flex-column justify-content-center align-items-center mx-4">
                      <h1 className="h1-seo text-center">
                        <span id={item.idFirst}> 
                        {count(item.school,0)}
                        </span>
                      </h1>
                      <div className="count-title ">Schools participated</div>
                    </div>
                    <div className="count-card d-flex flex-column justify-content-center align-items-center mx-4">
                      <h1 className="h1-seo text-center">
                        <span id={item.idSecond}>
                        {count(item.student,1)}
                       </span>
                      </h1>
                      <div className="count-title">Students participated</div>
                    </div>
                    <div className="count-card d-flex flex-column justify-content-center align-items-center mx-4">
                      <h1 className="h1-seo text-center" id={item.idThird}>
                      {count(item.teams,2)}
                     </h1>
                      <div className="count-title">Teams participated</div>
                    </div>
                  </div>
                </TabPane>
              );
            })}
          </TabContent>
        </CardBody>
      </motion.div>   
      </motion.div>
    </div>
  );
}

export default YIPstats;
