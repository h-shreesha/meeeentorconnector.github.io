import React from "react";
import "../../components/homeContent/becomeInstructor.css";

function BecomeInstructor() {
  return (
    <div className="becomeInstructorDiv">
      <hr></hr>
      <div className="backgroundColorDiv"></div>
      <img
        src="../appu.jpeg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading">Become a Mentor</h2>
        <p className="about">
          Top Mentors from around the world teach millions of students on
          Mentor Connector.{" "}
        </p>
        <div className="startTeching button">Start teaching today</div>
      </div>
    </div>
  );
}

export default BecomeInstructor;
