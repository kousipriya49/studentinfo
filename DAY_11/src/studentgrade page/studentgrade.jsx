import React from "react";
import Score from "./studentgrade1";
import "./studentgrade.css";
const Student = props => (
  <>
    <div className="student">
      <div class="student-name"> {props.student.name} </div>
      <div class="bio"> {props.student.bio} </div>
      <div>
        {props.student.scores.map((score, idx) => (
          <Score score={score} key={idx} />
        ))}
      </div>
    </div>
  </>
);

export default Student;
