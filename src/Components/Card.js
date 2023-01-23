import React from "react";
import { TiTick } from "react-icons/ti";

const Card = () => {
  return (
    <>
      {/* <div className="card">
        <div className="banner">
          <h1 className="title">Designing...</h1>
          <img
            src="../Assets/imagesdhsrtg.jpg"
            alt="banner"
            className="banner-img"
          />
        </div>
        <div className="Task-details">
          <p className="Desc">
            Task implies work imposed by a person in authority or an employer or
            by circumstance charged with a variety of tasks. duty implies an
            obligation to perform or responsibility for performance.
          </p>
          <div className="Status">
            <button>Completed</button>
            <h4>3 Sep 2023</h4>
          </div>
        </div>
      </div> */}

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQx5pB6py4twIFGBfFT4IS8E13iYj_pzGyKw&usqp=CAU"
              alt="banner"
              className="banner"
            />
            <div class="banner-footer">
              <div class="task-title">
                <p class="title">Designing..</p>
                <p class="date">23 Sep 2023</p>
              </div>
              <div class="abs">
                <div class="status">
                  <TiTick class="tike" />
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <p class="desc">
              Task implies work imposed by a person in authority or an employer
              or by circumstance charged with a variety of tasks. duty implies
              an obligation to perform or responsibility for performance.
            </p>
            <button class="complete">completed</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
