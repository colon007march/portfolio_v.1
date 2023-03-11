import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/puttipong.punsinsiri">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.gmail.com/">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/p.kasinpoj/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/colon007march">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Peet</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "My Dev Story 😃 ",
                    1000,
                    "About education 📑",
                    1000,
                    "About work 🏤",
                    1000,
                    "And about my skills. 🖥️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Hi everyone ! Thank you for visiting.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="ehizcv.pdf" download="profile.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
