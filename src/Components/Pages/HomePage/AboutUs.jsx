import logo_light from "../../../assets/img/logo-white.png";

const AboutUs = () => {
  return (
    <section id="about-us" className=" h-auto w-full pt-28 xl:pt-[200px]  ">
      <div className="container flex flex-col-reverse 2xl:flex-col gap-y-4 lg:gap-y-[72px] items-start ">
        <p className=" text-xl 2xl:text-2xl font-[510] leading-[150%] text-secondary-white max-w-[685px] ">
          Empowering businesses with reliable, high-performance storage and
          cooling solutions — delivering speed, scalability, and innovation for
          modern data infrastructure.
        </p>

        <div className="flex flex-col gap-y-6 2xl:gap-y-10 2xl:flex-row w-full justify-between ">
          <div className="flex flex-col-reverse 2xl:flex-col gap-y-10 md:gap-y-[60px] 2xl:gap-y-[127px] ">
            <h4 className=" text-[46px] md:text-[50px] 2xl:text-[56px] font-[590] leading-[120%] text-white ">
              About Us
            </h4>
            <img
              src={logo_light}
              alt="not found"
              className="  max-w-[140px] lg:max-w-[194px] max-h-[120px] lg:max-h-[165.536px] object-cover h-full w-full  "
            />
          </div>
          <div className="flex flex-col gap-y-6  ">
            <p className="text-base font-normal leading-[150%] text-secondary-off-gray 2xl:max-w-[732px] ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-base font-normal leading-[150%] text-secondary-off-gray 2xl:max-w-[732px] ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
