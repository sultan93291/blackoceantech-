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
    <section id="why-choose-us" className="pt-28 xl:pt-[150px] h-auto w-full  ">
      <div className="container flex flex-col gap-y-[50px] ">
        <div
          className="
        flex flex-col lg:flex-row w-full justify-between gap-y-10 lg:items-center"
        >
          <h2 className=" text-[42px] sm:text-[64px] xl:text-[80px] 2xl:text-[100px] 3xl:text-[136px] font-[590] text-primary-gray leading-[120%] ">
            Why <br /> <span className="text-white">Choose</span> Us.
          </h2>
          <p className="primary-heading max-w-[344px]! ">
            With years of expertise in enterprise storage, high-performance
            computing, and advanced cooling solutions,
          </p>
        </div>
        <div className="h-auto w-full rounded-4xl xl:rounded-[48px] p-6 xl:p-12 bg-secondary-black">
          <div className="flex flex-wrap justify-between gap-6 xl:gap-x-8 xl:gap-y-12 relative">
            {FeaturesArr.map((feature, idx) => (
              <div
                key={idx}
                className="2xl:py-8 xl:px-6 xl:py-6 px-4 py-4 2xl:px-12 rounded-[100px] bg-secondary-gray text-secondary-white text-center text-base sm:text-xl xl:text-[26px] 2xl:text-[36px] font-[590]"
              >
                {feature}
              </div>
            ))}
            <img
              src={logo_small}
              className=" absolute right-1/2 bottom-0 translate-x-1/2 max-w-[140px] lg:max-w-[194px] w-full max-h-[120px] lg:max-h-[165px] h-full object-cover"
              alt="not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
