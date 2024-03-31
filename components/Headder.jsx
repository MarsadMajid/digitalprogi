import React from "react";
import Button from "./Button";

const Headder = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-8 w-4/5 p-24">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <p className="text-5xl font-bold mb-10">
              Do You Have An Idea or Need a Solution?
            </p>
            <p className="text-3xl text-blue-400">Trust the experts!</p>
          </div>
          <div className="mb-10">
            <p className=" text-lg mb-9">
              It's simple, we have built apps for the last 10 <br /> years and
              with over 100 Mobile Application <br /> projects under our belt,
              we want to share <br /> our knowledge with you!
            </p>
            <Button buttonText="Get Started" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto"
            src="https://static.wixstatic.com/media/25f9e8_13d3450992e04fe1b17684b22d00df28~mv2.png/v1/crop/x_0,y_3,w_1366,h_1197/fill/w_634,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FC7DD0FE-7172-4EA7-B009-F38D8ABCCD6B.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Headder;
