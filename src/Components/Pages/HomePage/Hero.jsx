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

  // Preload frames
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

  // Draw a single frame
  const drawFrame = index => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!images[index]) return;

    // Match canvas resolution to screen size
    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth;
    canvas.height = clientHeight;

    const img = images[index];
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Scroll animation setup
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
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
      />

      {/* Overlay Content */}
      <div className="absolute bg-black/20 inset-0 flex justify-center items-center w-full h-screen z-10">
        <div className="container flex flex-col-reverse xl:flex-row gap-y-8 md:gap-y-10 xl:items-center w-full justify-between">
          <div className="flex flex-col gap-y-[252px]">
            <div className="flex flex-col gap-y-12 md:gap-y-20 xl:gap-y-[150px] 3xl:gap-y-[223px] items-start">
              <p className="text-lg md:text-xl 3xl:text-2xl font-normal leading-[120%] md:leading-[150%] text-off-gray max-w-[449px]">
                From scalable rackmount storage systems to ultra fast NVMe
                cooling we deliver the technology that drives modern data
                centers.
              </p>

              <button className="primary-btn">Get a Free Consultation</button>
            </div>
          </div>

          <h2 className="text-[30px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[56px] font-[590] text-white leading-[120%] max-w-[650px] xl:max-w-[380px] 2xl:max-w-[578px]">
            Empower Your Data Infrastructure with Enterprise Grade Performance.
          </h2>
        </div>

        {/* Bottom Features */}
        <div className="absolute bottom-0 left-0 h-auto w-full mb-8">
          <div className="container flex flex-row flex-wrap gap-y-2 justify-between">
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
