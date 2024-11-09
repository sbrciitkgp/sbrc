import React from "react";
import PageNavbar from "../../PageNavbar/PageNavbar";
import ScrollTop from "../../ScrollTop/scrolltop";
import Teamloader from "../../Team Loader/teamloader"
import Team from "../../Team/Teams";
import Footer from "../../PageFooter/Footer";


function TeamPage(){
    return (
        <div>
        <ScrollTop />
        <Teamloader/>
        <PageNavbar/>
        <Team/>
        <Footer/>
        </div>
    );
  }
  
  export default TeamPage;