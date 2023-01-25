import React from "react";
import { format } from "date-fns";
import { TiTick } from "react-icons/ti";

const Card = (Props) => {
  const longEnUSFormatter = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Props.img} alt="banner" className="banner" />
            <div className="banner-footer">
              <div className="task-title">
                <p className="title">{Props.title}</p>
                <p className="date">{longEnUSFormatter.format(Props.date)}</p>
              </div>
              <div className="abs">
                <div
                  className="status"
                  style={{
                    background: Props.status ? "#fffff" : "#ff450f",
                  }}
                >
                  <TiTick className="tike" />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <p className="desc">{Props.desc}</p>
            <button
              className="complete"
              style={{
                background: Props.status ? "green" : "#ff450f",
              }}
              onClick={Props.complete}
            >
              {Props.status ? "Completed.." : "Pending.."}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
