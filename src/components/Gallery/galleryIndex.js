import React from "react";
import "./gallerycss.css";
import jhotums from "../../assets/images/jhotums.jpg";

function Gallery() {
  return (
    <section>
      <p>Gallery icons to go here </p>
      <img src={jhotums} alt="me" className="gallery-thumb" />
    </section>
  );
}

export default Gallery;
