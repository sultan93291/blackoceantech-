import React from "react";
import logo_small from "../../../assets/logo-small.png";

const GetInTouch = () => {
  return (
    <section id="contact-us" className="h-auto w-full pt-[200px] pb-[150px] ">
      <div className="container w-full relative flex flex-col gap-y-[150px] items-end ">
        <div className="flex w-full flex-row items-center justify-between ">
          <div className="flex flex-col gap-y-[75px] items-start ">
            <p className="primary-heading max-w-[408px]! ">
              Looking to upgrade your storage infrastructure? Our specialists
              can help you design the perfect setup for speed, efficiency, and
              scalability.
            </p>
            <button className="primary-btn">Contact with Us</button>
          </div>
          <img
            src={logo_small}
            className="max-w-[194px] w-full max-h-[165px] h-full object-cover"
            alt="not found"
          />
        </div>
        <h2 className="text-[136px] font-[590] leading-[120%] text-white ">
          Get in Touch
        </h2>
      </div>
    </section>
  );
};

export default GetInTouch;
