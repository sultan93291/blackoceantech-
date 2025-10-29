import React from "react";
import logo_small from "../../../assets/logo-small.png";

const FeaturesArr = [
  "Global Shipping & Warranty",
  "Enterprise-Grade Reliability",
  "Competitive Pricing",
  "Expert Configuration ",
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="pt-[150px] h-auto w-full  ">
      <div className="container flex flex-col gap-y-[50px] ">
        <div
          className="
        flex flex-row w-full justify-between items-center"
        >
          <h2 className="text-[136px] font-[590] text-primary-gray leading-[120%] ">
            Why <br /> <span className="text-white">Choose</span> Us.
          </h2>
          <p className="primary-heading max-w-[344px]! ">
            With years of expertise in enterprise storage, high-performance
            computing, and advanced cooling solutions,
          </p>
        </div>
        <div className="h-auto w-full rounded-[48px] p-12 bg-secondary-black">
          <div className="flex flex-wrap justify-between gap-y-12 relative">
            {FeaturesArr.map((feature, idx) => (
              <div
                key={idx}
                className="py-8 px-12 rounded-[100px] bg-secondary-gray text-secondary-white text-center text-[36px] font-[590]"
              >
                {feature}
              </div>
            ))}
            <img
              src={logo_small}
              className="max-w-[194px] absolute right-1/2 bottom-0 translate-x-1/2 w-full max-h-[165px] h-full object-cover"
              alt="not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
