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
    <section id="products" className="h-auto w-full pt-[150px] ">
      <div className="container flex flex-col gap-y-[238px] items-center  ">
        <h3 className="text-[36px] font-[510] leading-[150%] text-secondary-white max-w-[1050px] ">
          Empowering businesses with reliable, high-performance storage and
          cooling solutions — delivering speed, scalability, and innovation for
          modern data infrastructure.
        </h3>
        <div className="flex flex-col w-full relative gap-y-[150px] ">
          {featuresArr.map((feature, idx) => {
            return (
              <div
                key={idx}
                className={`flex w-full relative min-h-[639px] ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } justify-between items-center `}
              >
                <div className="flex flex-1 max-w-[492px] flex-col gap-y-12 px-4">
                  {" "}
                  <h3 className="text-[56px] text-white font-[590] leading-[120%] max-w-[492px]">
                    {feature.title}
                  </h3>
                  <ul className="flex flex-col gap-y-1">
                    {feature.features.map((item, fIdx) => (
                      <li className="list-disc text-primary-gray!" key={fIdx}>
                        <p className="primary-heading">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={feature.bgImg}
                  alt={feature.title}
                  className="flex-1 max-w-[639px] max-h-[639px] w-auto h-auto object-contain px-4"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
