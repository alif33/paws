/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[29px] min-h-[620px]">
      <div className="grid grid-cols-12 gap-[10px]">
        <div className="col-span-7 ps-[70px] py-[90px]">
          <h1 className="text-[48px] text-[#3D3D3D] font-black">
            Stress-Free <span className="text-[#6F0C88]">Dog Grooming</span>:
            Where Your Pet's Happiness Matters.
          </h1>
          <h6 className="text-[14px] text-[#3D3D3D] font-normal py-[30px]">
            {
              "Experience grooming like never before at our pet spa. We prioritize your dog's comfort, providing a soothing and stress-free grooming experience. Your furry friend deserves the best, and we're here to pamper them with care and love."
            }
          </h6>
          <button className="bg-[#6F0C88] text-white py-[20px] px-[50px] rounded-[7px]">
            BOOK NOW
          </button>
        </div>
        <div className="col-span-5">
          <Image
            src="/images/Dog.png"
            width={608}
            height={625}
            alt="hero_image"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
