import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://shuvoetc.com/public/images/slider/slider-966046886498990.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            {" "}
            <a href="#slide2" className="btn btn-xs btn-primary mr-3">
              ❮
            </a>
            <a href="#slide2" className="btn btn-xs btn-primary mr-3">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://shuvoetc.com/public/images/slider/slider-640989150526780.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide1" className="btn btn-xs btn-primary mr-3">
              ❮
            </a>
            <a href="#slide1" className="btn btn-xs btn-primary mr-3">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
