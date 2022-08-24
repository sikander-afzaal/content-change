import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <div className="team about">
      <div className="text">
        <Fade top cascade>
          <h1>Who We Are</h1>
          <p className="about-desc">
            Russian PRO-CERTIFIAD coaches Dubai winner Eyelash extension | Semi
            Permanent Makeup | Nails professional trainings
          </p>
        </Fade>
      </div>
      <Fade delay={1000}>
        <div className="row-about row1">
          <img src="./images/new/about (1).png" alt="" />
          <img src="./images/new/about (2).png" alt="" />
          <img src="./images/new/about (3).png" alt="" />
        </div>
      </Fade>
      <p className="about-desc">
        We train eyelash extension, nails and SPMU from zero. Also we have
        upgraded courses. Choose a course which is suitable your level.{" "}
      </p>
      <div className="certify">
        <Fade delay={1000} cascade>
          {" "}
          <h1>We are certified by KHDA Dubai government. </h1>
          <div className="row-about">
            <img src="./images/new/dubai1.png" alt="" />
            <img src="./images/new/dubai2.png" alt="" />
          </div>
        </Fade>
      </div>
      <div className="text">
        <Fade top cascade>
          {" "}
          <h1>Why Choose Us </h1>
          <p className="about-desc">
            As We Know Beauty Therapists Demand Is Increasing Nowadays, So This
            Is Our Honest To Provide A Platform For Them Who Really Want To Make
            A Place In Beauty Industry And Can Get Various Opportunities. Our
            Classes Are Taught By Professional Trainers Who Are Internationally
            Certified And Each Trainer Is Highly Skilled. You Will Get
            Theoretical As Well As Practical Knowledge. We Provide An Education
            That Teaches Students Up To Date Techniques, Trends, Methods. Our
            Vision Is To Create Expert Professionals From The Institute With
            Extraordinary Knowledge.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default About;
