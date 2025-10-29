import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [allImages, setAllImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const frame = {
    currentFrame: 0,
    maxIndex: 390,
  };

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

  const updateFrame = frameIndex => {
    setCurrentFrame(Math.min(frameIndex, frame.maxIndex - 1));
  };

  useEffect(() => {
    const images = preloadImages();
    setAllImages(images);

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "+=300%",
      scrub: 2,
      onUpdate: self => {
        const scrollProgress = self.progress;
        const frameIndex = Math.floor(scrollProgress * frame.maxIndex);
        if (self.direction === -1) {
          updateFrame(frame.maxIndex - frameIndex);
        } else {
          updateFrame(frameIndex);
        }
      },
      pin: true,
    });

    // Cleanup ScrollTrigger when component unmounts
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section className="hero-section h-screen w-full relative overflow-hidden">
      <div className="image-gallery w-full h-full relative">
        <img
          src={allImages[currentFrame]}
          alt={`frame-${currentFrame}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center  w-full h-screen  z-10">
          <div className="container flex flex-row items-center w-full justify-between ">
            <div className="flex flex-col gap-y-[223px] items-start ">
              <p className="text-2xl font-normal leading-[150%] text-off-gray max-w-[449px] ">
                From scalable rackmount storage systems to ultra fast NVMe
                cooling we deliver the technology that drives modern data
                centers.
              </p>
              <button className="primary-btn">Get a Free Consultation</button>
            </div>
            <h2 className="text-[56px] font-[590] text-white leading-[120%] max-w-[492px] ">
              Empower Your Data Infrastructure with Enterprise Grade Performance
              .
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
