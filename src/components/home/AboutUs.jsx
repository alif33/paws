"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
export default function AboutUs() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const breakPoints = {
    330: {
      slidesPerView: 1,
    },
    1014: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    }
  };

  return (
    <div
      id="about-us"
      className="bg-[url('/images/shapes/BgAboutUs.svg')] bg-cover bg-no-repeat pt-[7rem] pb-24 lg:pb-32 px-0 sm:px-2 md:px-[100px] mt-[-8rem]"
    >
      <h1 className="text-[#6F0C88] text-[20px] lg:text-[40px] font-black text-center pt-[50px] pb-[25px] lg:pb-[50px]">
        What our clients tell about us
      </h1>
      <div className="flex justify-around lg:justify-center items-center gap-1 sm:gap-[10px] md:gap-[30px] pb-[40px]">
        <button
          ref={prevRef}
          className="flex justify-center items-center min-h-[40px] min-w-[40px] sm:min-w-[50px] sm:min-h-[50px] lg:min-w-[80px] lg:h-[80px] bg-white rounded-full shadow-lg cursor-pointer"
        >
          <BsChevronLeft size={28} />
        </button>
        <Swiper
          slidesPerView={1}
          breakpoints={breakPoints}
          spaceBetween={20}
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: ".pagination-container",
          }}
          onInit={() => setInit(true)}
        >
          <SwiperSlide>
            <div className="bg-[#FFFFFF] rounded-[20px] w-[200px] min-w-[278px] max-w-[278px] lg:min-h-[310px] max-h-[310px] mx-auto relative">
              <div className="flex justify-center z-10 mt-[50px]">
                <div className="absolute -top-11">
                  <Image
                    src="/images/person1.svg"
                    width={98}
                    height={98}
                    alt="person1"
                  />
                </div>
              </div>
              <p className="pt-16 px-[20px] pb-[20px] text-[14px]">
                Feugiat erat mi cum accumsan nulla gravida erat dignissim.
                Congue dignissim eu ut blandit aliquet arcu molestie at. Porta
                vel eget et enim magna et ornare id sollicitudin. In tortor
                mattis dapibus in iaculis cras condimentum auctor...
              </p>
              <h1 className="text-[#3D3D3D] text-center font-bold pb-[50px]">
                Cheyenne Dorwart
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#6F0C88] text-white rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px] mx-auto relative">
              <div className="flex justify-center z-10 mt-[50px]">
                <div className="absolute -top-11">
                  <Image
                    src="/images/person2.svg"
                    width={98}
                    height={98}
                    alt="person2"
                  />
                </div>
              </div>
              <p className="pt-16 px-[20px] pb-[40px] text-[14px]">
                Lacinia amet mi risus amet lacus scelerisque aliquet. Sed est
                gravida facilisis risus eros eget. Placerat enim commodo blandit
                libero risus arcu...
              </p>
              <h1 className="text-[#FFFFFF] text-center font-bold pb-[50px]">
                Cheyenne Dorwart
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px] mx-auto relative">
              <div className="flex justify-center z-10 mt-[50px]">
                <div className="absolute -top-11">
                  <Image
                    src="/images/person3.svg"
                    width={98}
                    height={98}
                    alt="person3"
                  />
                </div>
              </div>
              <p className="pt-16 px-[20px] pb-[20px] text-[14px]">
                Nulla non scelerisque nunc nisi. Amet justo aliquet volutpat
                nullam tortor maecenas. Eget mauris quam a facilisis urna
                placerat diam. Vel dictum nisl facilisi posuere bibendum.
                Pellentesque lectus in aliquet mattis vitae...
              </p>
              <h1 className="text-[#3D3D3D] text-center font-bold pb-[50px]">
                Cheyenne Dorwart
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#6F0C88] text-white rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px] mx-auto relative">
              <div className="flex justify-center z-10 mt-[50px]">
                <div className="absolute -top-11">
                  <Image
                    src="/images/person2.svg"
                    width={98}
                    height={98}
                    alt="person2"
                  />
                </div>
              </div>
              <p className="pt-16 px-[20px] pb-[40px] text-[14px]">
                Lacinia amet mi risus amet lacus scelerisque aliquet. Sed est
                gravida facilisis risus eros eget. Placerat enim commodo blandit
                libero risus arcu...
              </p>
              <h1 className="text-[#FFFFFF] text-center font-bold pb-[50px]">
                Cheyenne Dorwart
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px] mx-auto relative">
              <div className="flex justify-center z-10 mt-[50px]">
                <div className="absolute -top-11">
                  <Image
                    src="/images/person1.svg"
                    width={98}
                    height={98}
                    alt="person1"
                  />
                </div>
              </div>
              <p className="pt-16 px-[20px] pb-[20px] text-[14px]">
                Feugiat erat mi cum accumsan nulla gravida erat dignissim.
                Congue dignissim eu ut blandit aliquet arcu molestie at. Porta
                vel eget et enim magna et ornare id sollicitudin. In tortor
                mattis dapibus in iaculis cras condimentum auctor...
              </p>
              <h1 className="text-[#3D3D3D] text-center font-bold pb-[50px]">
                Cheyenne Dorwart
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          ref={nextRef}
          className="flex justify-center items-center min-h-[40px] min-w-[40px] sm:min-w-[50px] sm:min-h-[50px] lg:min-w-[80px] lg:h-[80px] bg-white rounded-full shadow-lg cursor-pointer"
        >
          <BsChevronRight size={28} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-[10px] pb-[80px] pagination-container"></div>
    </div>
  );
}
