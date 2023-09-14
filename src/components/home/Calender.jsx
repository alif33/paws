"use client";

import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Calender() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const breakPoints = {
    100: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    898: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  } 


  return (
    <div>
      <h1 className="text-[#6F0C88] text-[40px] font-black text-center pt-[50px]">
        Book now!
      </h1>
      <div className="flex items-center gap-[26px] px-2 sm:px-2 md:px-[70px] pt-[30px]">
        <button
          className="flex justify-center items-center min-w-[80px] h-[80px] bg-white rounded-full shadow-lg cursor-pointer"
          ref={prevRef}
        >
          <BsChevronLeft size={28} />
        </button>
        <Swiper
          slidesPerView={6}
          breakpoints={breakPoints}
          spaceBetween={60}
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={() => setInit(true)}
        >
          <SwiperSlide>
            <div className="flex flex-col bg-[#6F0C88] w-[160px] h-[198px] rounded-[20px] text-white text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">10</span>
              <span className="text-[30px] font-bold">SAT</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">11</span>
              <span className="text-[30px] font-bold">SUN</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">12</span>
              <span className="text-[30px] font-bold">MON</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">13</span>
              <span className="text-[30px] font-bold">TUE</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">14</span>
              <span className="text-[30px] font-bold">WED</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">15</span>
              <span className="text-[30px] font-bold">THU</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">16</span>
              <span className="text-[30px] font-bold">FRI</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">17</span>
              <span className="text-[30px] font-bold">SAT</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">18</span>
              <span className="text-[30px] font-bold">SUN</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-[#FDF4FF] w-[160px] h-[198px] rounded-[20px] text-[#3D3D3D] text-center mx-auto">
              <span className="text-[30px] font-bold pt-[10px]">SEP</span>
              <span className="text-[60px] font-bold">19</span>
              <span className="text-[30px] font-bold">MON</span>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="flex justify-center items-center min-w-[80px] h-[80px] bg-white rounded-full shadow-lg cursor-pointer mx-auto"
          ref={nextRef}
        >
          <BsChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
