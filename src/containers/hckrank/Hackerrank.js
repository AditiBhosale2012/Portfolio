import React, {useContext } from "react";
import { hackerrankSection } from "../../portfolio";
import HackerrankCard from "../../components/HackerrankCard/HackerrankCard";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Hackerrank.scss";

export default function Hackerrank() {
  const { isDark } = useContext(StyleContext);
  if (!hackerrankSection.display) {
    return null;
  }
  if (hackerrankSection.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="hk">
          <div className="hacker-main-div">
            <div className="hacker-header">
              <h1 className={
                isDark
                  ? "dark-mode heading hacker-heading"
                  : "heading hacker-heading"
              }>
                {hackerrankSection.title}
              </h1>
            </div>
            <div className="hacker-cards-div">
              {hackerrankSection.Badges.map((card, index) => {
                return (
                  <HackerrankCard
                    key={index}
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      image: card.image,
                    }}
                  />
                );
              }
              )}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}

// (
//   <div>
//     <p>{card.title}</p>
//     <img ref={imgRef} src={card.image} alt="sorry"></img>
//   </div>
// )