import React from "react";
import "./HackerrankCard.scss";

export default function HackerrankCard({ cardInfo, isDark }) {
  return (
    <div className={isDark ? "dark-mode badge-card" : "badge-card"}>
      <div className="badge-detail-div">
        <h5 className={isDark ? "dark-mode badge-title" : "badge-title"}>
          {cardInfo.title}
        </h5>
      </div>
      <div className="badge-image-div">
        <img src={cardInfo.image} alt="PWA" className="badge-image"></img>
      </div>
    </div>
  )
}