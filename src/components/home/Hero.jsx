/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:mt-[29px] ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[10px] mx-auto">
        <div className="col-span-12 sm:col-span-12 md:col-span-7 px-5 lg:ps-[70px] py-4 lg:py-[90px]">
          <h1 className="text-[24px] lg:text-[48px] text-[#3D3D3D] font-black">
            Stress-Free <span className="text-[#6F0C88]">Dog Grooming</span>:
            Where Your Pet's Happiness Matters.
          </h1>
          <h6 className="text-[14px] text-[#3D3D3D] font-normal py-[30px] pr-0 lg:pr-5">
            {
              "We prioritize your dog's comfort, providing a soothing and stress-free grooming experience. Your furry friend deserves the best, and we're here to pamper them with care and love."
            }
          </h6>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 lg:gap-6 pt-4 lg:pt-0">
              <Image
                className="max-w-[40px] max-h-[40px] lg:max-w-[50px] lg:max-h-[50px]"
                src="/images/whatsapp.svg"
                width={50}
                height={50}
                alt="whatsapp"
              />
              <h1 className="text-[#6F0C88] text-4xl md:text-6xl lg:text-6xl font-bold lg:font-black">
                236-700-8487
              </h1>
            </div>
            <h1 className="text-[#B92A6F] text-[40px] font-black">Book now!</h1>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-5">
          <Image
            src="/images/Dog.svg"
            width={608}
            height={625}
            layout="responsive"
            alt="hero_image"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
