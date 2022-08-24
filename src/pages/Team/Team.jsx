import React from "react";
import "./Team.css";
import Fade from "react-reveal/Fade";
function Team() {
  return (
    <div className="team">
      <Fade cascade top>
        <h1>Our Team</h1>

        <p className="desc-team">
          Our Trainer team is highly qualified and International certified. They
          are Experts in all beauty treatments, very enthusiastic and
          supportive. Their goal is to spread beauty by giving professional
          beauticians to the world by sharing their knowledge and experience.
        </p>
      </Fade>
      <div className="team-grid">
        <Fade delay={1000} left>
          <div className="team-box">
            <img src="./images/new/team1.png" alt="" />
            <h2>Nataliia</h2>
            <p className="desc-box">
              CEO at NATALIIA BEAUTY TRAINING, from Ukraine. A certified
              permanent makeup artist with 10 years experience in eyelashes.
              More than 50 happy students, pro-certified coach
            </p>
          </div>
        </Fade>
        <Fade delay={1000} bottom>
          <div className="team-box">
            <img src="./images/new/team2.png" alt="" />
            <h2>Natalia</h2>
            <p className="desc-box">
              from Ukraine. A certified permanent makeup artist with 10 years
              experience. She strongly believes in deep study, dedication,
              practice and continuous learning if you want to build a career in
              beauty industry.
            </p>
          </div>
        </Fade>
        <Fade delay={1000} right>
          <div className="team-box">
            <img src="./images/new/team3.png" alt="" />
            <h2>BALNUR</h2>
            <p className="desc-box">
              from Kazakhstan has been in the beauty industry since last 5
              years. Today, we take pride in saying that now she is a successful
              nail technician as well as trainer. She is very passionate about
              nails as a professional nail trainer and
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Team;
