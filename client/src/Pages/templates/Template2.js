import React from "react";
import "../../Resources/stylesheets/templates.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="templateParent">
        <div className="top d-flex flex-column">
          <div className="top d-flex flex-row justify-content-around">
            <h1>
              {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
            </h1>
          </div>
          <div className="top d-flex flex-row justify-content-around">
            <h3>
              {user.about}
            </h3>
          </div>

          <div className="divider mt-5"></div>
          <div className="details">
            <p>{user.email}</p>
            <p>{user.mobileNumber}</p>
            <p>{user.address}</p>
            <a href={user.portfolio}>
              <p>Portfolio</p>
            </a>
          </div>
        </div>
        <div className="divider mt-5"></div>

        <div className="education mt-5">
          <h3 className="highlightedHeading">Education</h3>
          <ul>
            {user.education.map((edu) => {
              return (
                <div className="d-flex flex-column mt-2">
                  <li>{edu}</li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="divider mt-5"></div>

        <div className="experience mt-5">
          <h3 className="highlightedHeading">Experience</h3>
          <ul>
            {user.experience.map((experience) => {
              return (
                <div className="d-flex flex-column mt-2">
                  <li>{experience}</li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="divider mt-5"></div>

        <div className="projects mt-5">
          <h3 className="highlightedHeading">Projects</h3>
          <ul>
            {user.projects.map((project) => {
              return (
                <div className="d-flex flex-column mt-2">
                  <li>{project}</li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="divider mt-5"></div>

        <div className="skills mt-5">
          <h3 className="highlightedHeading">Skills</h3>
          <ul>
            {user.skills.map((skill) => {
              return (
                <div className="d-flex flex-column mt-2">
                  <li>{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="divider mt-5"></div>
      </div>
    </div>
  );
}

export default Template2;
