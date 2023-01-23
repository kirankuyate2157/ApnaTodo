import React from "react";
import { TiTick } from "react-icons/ti";

const Card = (Props) => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={Props.img} alt="banner" className="banner" />
            <div class="banner-footer">
              <div class="task-title">
                <p class="title">{Props.title}</p>
                <p class="date">{Props.date}</p>
              </div>
              <div class="abs">
                <div class="status">
                  <TiTick class="tike" />
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <p class="desc">{Props.desc}</p>
            <button class="complete">completed</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
