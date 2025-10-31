import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MinningFeatures = [
  "Data Centers & Cloud Providers",
  "AI/ML Compute Clusters",
  "Enterprise Backup & Recovery Systems",
];

const Hero = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frame = { maxIndex: 255 };

  // Preload all frames
  useEffect(() => {
    const imgs = [];
    for (let i = 1; i <= frame.maxIndex; i++) {
      const path = new URL(
        `../../../assets/img/frames/frame_${i
          .toString()
          .padStart(4, "0")}.jpeg`,
        import.meta.url
      ).href;
      const img = new Image();
      img.src = path;
      imgs.push(img);
    }
    setImages(imgs);
  }, []);

  // Draw current frame
  const drawFrame = index => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!images[index]) return;

    const img = images[index];
    const { width, height } = canvas;

    context.clearRect(0, 0, width, height);

    // Maintain aspect ratio
    const scale = Math.max(width / img.width, height / img.height);
    const x = width / 2 - (img.width / 2) * scale;
    const y = height / 2 - (img.height / 2) * scale;

    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    if (!images.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        onUpdate: self => {
          const frameIndex = Math.round(self.progress * (frame.maxIndex - 1));
          drawFrame(frameIndex);
        },
      },
    });

    drawFrame(0);

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [images]);

  return (
    <section
      id="hero"
      className="hero-section h-screen w-full relative overflow-hidden bg-black"
    >
      {/* Canvas replaces <img> */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        width={1920}
        height={1080}
      />

      <div className="absolute bg-black/25 inset-0 flex justify-center items-center w-full h-screen z-10">
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
            Empower Your Data Infrastructure with Enterprise Grade Performance.
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 h-auto w-full mb-8 ">
          <div className="container flex flex-row flex-wrap gap-y-2 justify-between ">
            {MinningFeatures.map((minning, idx) => (
              <p key={idx} className="primary-heading">
                {minning}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
