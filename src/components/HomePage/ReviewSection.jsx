import React, { useState } from "react";

const people = [
  {
    photo: "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg",
    name: "Susan Smith",
    profession: "WEB DEVELOPER",
    description:
      "Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese."
  },
  {
    photo: "https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg",
    name: "Anna Grey",
    profession: "UFC FIGHTER",
    description:
      "I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape."
  },
  {
    photo: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
    name: "Branson Cook",
    profession: "ACTOR",
    description:
      "Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine."
  }
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? people.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === people.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const { photo, name, profession, description } = people[currentIndex];

  return (
    <>
    <div className="content-wrapper pt-5">
      <h1 className="pb-3">Our Reviews</h1>
      {/* <div className="blue-line"></div> */}
      <div className="wrapper-for-arrows">
        <div className="left-arrow-wrap arrow-wrap" onClick={handlePrev}>
          <div className="arrow"></div>
        </div>
        <div className="review-wrap">
          <div
            id="imgDiv"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
          <div id="personName">{name}</div>
          <div id="profession">{profession}</div>
          <div id="description">{description}</div>
        </div>
        <div className="right-arrow-wrap arrow-wrap" onClick={handleNext}>
          <div className="arrow"></div>
        </div>
      </div>
    </div>

    <div className="getedu">
        <h1 className="fw-bold text-center pt-5">Unlock New Skills, <br/>
          Unlock New Opportunities.</h1>
        <div className="text-center mt-4 pb-5">
          <button className="btn btn-teal">
            Get Started Now <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
