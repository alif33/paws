"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules

export default function Clients() {
  return (
    <div className="px-[70px] pt-[80px]">
      <div className="flex justify-between">
        <div className="text-[40px] font-black w-[896px] text-[#6F0C88]">
          {
            "Pet gallery, take a look on our special clients and how they look like"
          }
        </div>
        <div className="flex justify-center items-center gap-[10px] rounded-[7px] h-[52px] bg-[#6F0C88] text-white py-[20px] ps-[35px] pr-[20px] my-auto cursor-pointer">
          <span>See more</span>
          <Image src="/images/seeMore.svg" width={20} height={20} alt="arrow" />
        </div>
      </div>
      <div className="flex justify-center pt-[40px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog1.svg"
                width={256}
                height={273}
                alt="Dog1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog2.svg"
                width={256}
                height={273}
                alt="Dog2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[269px] h-[287px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog3.svg"
                width={256}
                height={273}
                alt="Dog3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog4.svg"
                width={256}
                height={273}
                alt="Dog4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog2.svg"
                width={256}
                height={273}
                alt="Dog2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[269px] h-[287px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog3.svg"
                width={256}
                height={273}
                alt="Dog3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
              <Image
                src="/images/dog1.svg"
                width={256}
                height={273}
                alt="Dog5"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[2px] w-[270px] h-[285px] border-dashed border-[#6F0C88] rounded-[20px] px-1 py-1">
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
