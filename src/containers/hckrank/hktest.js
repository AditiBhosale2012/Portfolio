import React from "react";
import { hackerrankSection } from "../../portfolio";

export default function hackerrank() {
  if (hackerrankSection.display) {
    return (
      <div className="hk-section" id="hk">
        <h1 className="hk-heading">{ hackerrank.title}</h1>
        <div className="hk-card-container">
          {hackerrank.Badges.map((card, index) => (
            <div>
              <p>{card.title}</p>
              <img src={card.image} alt="sorry"></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}