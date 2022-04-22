import React from "react";
import jhotums from "../../assets/images/jhotums.jpg";

function Tutorials() {
  return (
    <section className="tutorials">
      <div>
        <h1>tutorials</h1>
        <p>Tutorial thumbnail links to go here</p>
        <img src={jhotums} alt="jhotums"/>
      </div>
    </section>
  );
}

export default Tutorials;
