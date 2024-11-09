import React, { useState, useEffect } from 'react';
import './testimonials.css'; 
const image1 = require('./images/bg5.png').default;


const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    clearInterval(animate);
    setActiveIndex(index);
  };


  const handleArrowClick = (next) => {
    clearInterval(animate);
    setActiveIndex((prevIndex) => {
      if (next) {
        return (prevIndex + 1) % 2; // Replace 3 with the number of circles you have
      } else {
        return prevIndex > 0 ? prevIndex - 1 : 1; // Replace 2 with the number of circles you have - 1
      }
    });
  };

  
  let animate; // Declare the animate variable outside the useEffect

  useEffect(() => {
    animate = setInterval(() => { // Assign animate inside the useEffect
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2); // Replace 3 with the number of circles you have
    }, 4000);

    return () => {
      clearInterval(animate);
    };
  }, []);
  const circles = Array.from({ length: 2 }); // Replace 3 with the number of circles you have

  return (
    <section id="testimonials-page">
    <div id="container">
    <div  style={{textAlign:"center", fontSize:"3.8rem", color:"lavender",fontFamily: "Nunito, sans-serif", fontWeight: "bold",paddingBottom:"30px"}}><p className='test-head'>TESTIMONIALS</p></div>
      <div id="holder">
        <div id="image"    style={{
        background: `url(${image1})`, // Use the image as background
      }} >
          {circles.map((circle, index) => (
            <div
              key={index}
              className={`img img-${index + 1} ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div id="right"></div>
        <div id="text">
          <div id="centerText">
            <div>
              
             <p className={`quote ${activeIndex === 0 ? 'active' : ''} p`}>
              <span className='span'   ><b>Prof. Virendra Kumar Tewari</b></span>
              <br></br>
              <span className="designation" >Director, IIT Kharagpur</span>
              <br></br>
              We have to look beyond the classroom, and try to use the knowledge gained in the class to make a difference to our own lives. I am very happy to note that the Young Innovators Program of IIT Kharagpur is encouraging this habit of critical thinking among school children. Imagination comes naturally to children, whose minds are often unfettered by the realities that adults have to deal with. YIP helps them to use their power of imagination to make changes in their own lives and those of others around them. Children are thus encouraged to think about the larger society and be more engaged creatures.
            </p>
            
            </div>
            <div>
            <p className={`quote ${activeIndex === 1 ? 'active' : ''} p`}>
            <br></br>
            <span className='span' >Prof. Baidurya Bhattacharya</span>
            <br></br>
              <span  className="designation" >Associate Dean, Alumni Affairs and Branding, IIT Kharagpur</span>
             <br></br>
              I felt really happy and delighted to see the first ever Young Innovators' Program coming into reality in our campus. Last year around November, when the Branding and Relations Cell pitched this idea to me, it seemed very novel that we will invite school children from all over the country and that we will inculcate in them the credo, the habit of innovation, to bring them to our campus and show them what we do and maybe encourage in them a desire to pursue a career in scientific research and engineering. We launched this in April, we wrote to about 100-400 schools from around the country and we had about 200+ applications and after 2 rounds of eliminations 24 schools were selected for the finals which were held in the IIT Kharagpur campus. The word innovate basically means to alter something or to change something or to create.
               </p>
            </div>
            {/* <p className={`quote ${activeIndex === 2 ? 'active' : ''}`}>
              People use CodePen for all sorts of things: prototyping new ideas, reduced test cases
              for bugs, sending clients things to look at, evaluating potential hires, to finding
              inspiration. People also use CodePen as a sort of resume and portfolio, showing off
              their best design and development work.
            </p> */}
          </div>
       
        </div>
      </div>
      <div id="bg">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`slide slide-${index + 1} ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    <br></br>
    <br></br>
      <div id="nav-cirlces">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`circle ${index === activeIndex ? 'active-circle' : ''}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Slideshow;