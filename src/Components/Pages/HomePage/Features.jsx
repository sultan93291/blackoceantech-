import React from "react";
import rack from "../../../assets/img/rack.png";
import ssd_cooling from "../../../assets/img/ssd_cooling.png";

const featuresArr = [
  {
    title: "Rackmount Storage Servers",
    bgImg: rack,
    features: [
      "High-density, reliable storage for enterprise workloads.",
      "Optimized for virtualization, databases, and high-availability clusters.",
      `Available in 12, 24, and 36-bay configurations.`,
    ],
  },
  {
    title: "NVMe & SSD Cooling Solutions",
    bgImg: ssd_cooling,
    features: [
      "Maintain peak performance under heavy load.",
      "Advanced thermal management for M.2 NVMe drives.",
      `Ideal for gaming rigs, servers, and AI workstations.`,
    ],
  },
];

const Features = () => {
  return (
    <section id="products" className="h-auto w-full pt-24 xl:pt-[150px] ">
      <div className="container flex flex-col  gap-y-12 lg:gap-y-20  xl:gap-y-[150px]  items-center  ">
        
          {featuresArr.map((feature, idx) => {
            return (
              <div
                key={idx}
                className={`flex w-full relative max-h-[639px] ${
                  idx % 2 === 0
                    ? "flex-col-reverse lg:flex-row gap-y-4"
                    : "flex-col-reverse lg:flex-row-reverse gap-y-12"
                } justify-between items-center`}
              >
                <div className="flex flex-1 max-w-[492px] flex-col gap-y-10 xl:gap-y-12 px-4">
                  {" "}
                  <h3 className=" text-[30px] lg:text-[36px] xl:text-[42px] 2xl:text-[56px] text-white font-[590] leading-[120%] max-w-[492px]">
                    {feature.title}
                  </h3>
                  <ul className="flex flex-col gap-y-1">
                    {feature.features.map((item, fIdx) => (
                      <li
                        className="list-disc text-sm xl:text-base text-primary-gray!"
                        key={fIdx}
                      >
                        <p className="primary-heading">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={feature.bgImg}
                  alt={feature.title}
                  className="flex-1 max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[639px] max-h-[600px] 2xl:max-h-[639px] w-auto h-auto object-contain px-4"
                />
              </div>
            );
          })}
        
      </div>
    </section>
  );
};

export default Features;
