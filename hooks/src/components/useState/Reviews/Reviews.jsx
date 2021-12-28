import React, { useState } from "react";
import "./reviews.css";
import ReviewData from "../Reviews/Reviewdata";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, info, image } = ReviewData[index];

  const checkNumber = (number) => {
    if (number > ReviewData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return ReviewData.length - 1;
    }
    return number;
  };

  const preBtnHandle = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextBtnHandle = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="reviews-container">
      <h3>Reviews</h3>
      <div key={id} className="people-list">
        <div className="image">
          <img
            src={image}
            alt={name}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="info-container">
          <h1 style={{ color: "black" }}>{name}</h1>
          <p>{info}</p>
        </div>
        <div className="btn">
          <div className="btn-grad" onClick={preBtnHandle}>
            <LeftOutlined
              style={{
                position: "absolute",
                top: "5px",
                left: 0,
              }}
            />
          </div>
          <div className="btn-grad" onClick={nextBtnHandle}>
            <RightOutlined
              style={{
                position: "absolute",
                top: "5px",
                right: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
