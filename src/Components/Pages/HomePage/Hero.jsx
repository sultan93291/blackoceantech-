import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MinningFeatures = [
  "Data Centers & Cloud Providers",
  "AI/ML Compute Clusters",
  "Enterprise Backup & Recovery Systems",
];

const Hero = () => {
  const [allImages, setAllImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  const frame = {
    maxIndex: 255,
  };

  // Preload images
  const preloadImages = () => {
    const images = [];
    for (let i = 1; i <= frame.maxIndex; i++) {
      const path = new URL(
        `../../../assets/img/frames/frame_${i
          .toString()
          .padStart(4, "0")}.jpeg`,
        import.meta.url
      ).href;
      images.push(path);
    }
    return images;
  };

  useEffect(() => {
    const images = preloadImages();
    setAllImages(images);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        onUpdate: self => {
          const progress = self.progress;
          const frameIndex = Math.round(progress * (frame.maxIndex - 1));

          // Ensure index stays within range
          setCurrentFrame(prev => {
            if (frameIndex < 0) return 0;
            if (frameIndex >= frame.maxIndex) return frame.maxIndex - 1;
            return frameIndex;
          });
        },
      },
    });

    // Clean up on unmount
    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  const displayFrame =
    currentFrame >= frame.maxIndex ? frame.maxIndex - 1 : currentFrame;

  return (
    <section className="hero-section h-screen w-full relative overflow-hidden bg-black">
      <div className="image-gallery w-full h-full relative">
        {allImages.length > 0 && (
          <img
            src={allImages[displayFrame]}
            alt={`frame-${displayFrame}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute bg-black/15 inset-0 flex justify-center items-center w-full h-screen z-10">
          <div className="container flex flex-col-reverse xl:flex-row gap-y-8 md:gap-y-10 xl:items-center w-full justify-between">
            <div className="flex flex-col gap-y-[252px] ">
              <div className="flex flex-col gap-y-12 md:gap-y-20 xl:gap-y-[150px] 3xl:gap-y-[223px] items-start">
                <p className=" text-lg md:text-xl 3xl:text-2xl font-normal leading-[120%] md:leading-[150%] text-off-gray max-w-[449px]">
                  From scalable rackmount storage systems to ultra fast NVMe
                  cooling we deliver the technology that drives modern data
                  centers.
                </p>

                <button className="primary-btn">Get a Free Consultation</button>
              </div>
            </div>
            <h2 className=" text-[30px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[56px] font-[590] text-white leading-[120%] max-w-[650px]  xl:max-w-[380px] 2xl:max-w-[578px]">
              Empower Your Data Infrastructure with Enterprise Grade
              Performance.
            </h2>
          </div>
          <div className="absolute bottom-0 left-0 h-auto w-full mb-8 ">
            <div className="container flex flex-row flex-wrap justify-between ">
              {MinningFeatures.map((minning, idx) => {
                return <p key={idx} className="primary-heading"> {minning} </p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
