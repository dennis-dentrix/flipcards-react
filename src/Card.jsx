import "./card.css";
import { useState } from "react";

export const Card = () => {
  const [content, setContent] = useState(null);
  function handleClick(event) {
    event.currentTarget.classList.toggle("flipped");
    setContent(event.currentTarget.lastChild.textContent);
    console.log(content);
  }
  return (
    <section className="card">
      <div className="heading">
        <h2 className="game-heading">Click to flip</h2>
      </div>

      <div className="card-box">
        <div className="card-row">
          <div className="card-col card-1" onClick={handleClick}>
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
        </div>

        <div className="card-row">
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
          <div className="card-col card-1">
            <div className="card-side card-side__front">Front</div>
            <div className="card-side card-side__back">Back</div>
          </div>
        </div>
      </div>

      <button className="start">Start</button>
    </section>
  );
};
