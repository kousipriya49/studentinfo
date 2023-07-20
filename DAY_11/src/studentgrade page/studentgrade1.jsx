import React from "react";

const Score = props => (
  <div class="score-date">
    <div class="score">
      <h4>Score: {props.score.score}</h4>
    </div>
    <div class="date">
      <h4>Date: {props.score.date}</h4>
    </div>
  </div>
);

export default Score;
