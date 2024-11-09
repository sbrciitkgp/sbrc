import React, { Component } from "react";
import "./teamloader.css";
import "../Team/Teams";
class teamloader extends Component {
  
  preloader() {
    let video = document.getElementById('test-img');

let preload = document.querySelector(".preloader");

setTimeout(() => {
  preload.style.opacity = "0";
  setTimeout(() => {
    preload.style.display = "none";
  }, 500);
}, 2000);
    video.addEventListener('load', () => {
      // Video is loaded
      setTimeout(() => {
        preload.style.opacity = "0";
        setTimeout(() => {
          preload.style.display = "none";
        }, 1000);
      }, 1000);
    });    
}

  componentDidMount() {
    this.preloader();
  }


  render() {
    return (
      
      <div className="preloader">
      
        <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
        </div>
    
    );
  }
}

export default teamloader;
