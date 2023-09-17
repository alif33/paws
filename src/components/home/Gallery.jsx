"use client";
import Image from "next/image";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Gallery() {
  const breakPoints = {
    100: {
      slidesPerView: 1,
    },
    710: {
      slidesPerView: 2,
    },
    1015: {
      slidesPerView: 3,
    },
    1310: {
      slidesPerView: 4,
    },
  };

  return (
    <div
      id="gallery"
      className="bg-[#FFE2E1] mt-[-6rem] px-2 sm:px-2 md:px-[70px] pb-[10rem] pt-[130px] overflow-x-hidden"
    >
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="text-[20px] lg:text-[40px] font-black px-5 lg:px-0 pb-3 lg:pb-0 w-[400px] lg:w-[896px] text-[#6F0C88]">
          {
            "Pet gallery, take a look on our special clients and how they look like"
          }
        </div>
        <div className="flex justify-center items-center gap-[10px] rounded-[7px] h-[52px] bg-[#6F0C88] text-white py-[20px] ps-[35px] pr-[20px] my-auto cursor-pointer">
          <span>See more</span>
          <Image src="/images/seeMore.svg" width={20} height={20} alt="arrow" />
        </div>
      </div>
      <div className="flex justify-center items-center pt-[40px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={breakPoints}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog1.svg"
                width={256}
                height={273}
                alt="Dog1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog2.svg"
                width={256}
                height={273}
                alt="Dog2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[269px] h-[287px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog3.svg"
                width={256}
                height={273}
                alt="Dog3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog4.svg"
                width={256}
                height={273}
                alt="Dog4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog2.svg"
                width={256}
                height={273}
                alt="Dog2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[269px] h-[287px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog3.svg"
                width={256}
                height={273}
                alt="Dog3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog1.svg"
                width={256}
                height={273}
                alt="Dog5"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1 mx-auto">
              <Image
                src="/images/dog2.svg"
                width={256}
                height={273}
                alt="Dog2"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
