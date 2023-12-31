/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Card from "../cards/Service";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[url('/images/shapes/BgService.svg')] bg-cover bg-no-repeat lg:px-[70px] pt-44 mt-[-7rem] lg:mt-[-11rem] z-10"
    >
      <div className="pt-[8rem]">
        <div className="text-[#3D3D3D] font-medium text-[24px] lg:text-[40px] px-5 lg:px-0 w-[400px] lg:w-[896px]">
          <span className="font-black text-[#6F0C88]">Our services</span> are
          customized to perfectly meet your pet's unique needs.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] pt-[50px] mx-2 sm:mx-20 md:mx-3 lg:mx-0 xl:mx-0 2xl:mx-20 lg:pr-4 pb-32">
        {/* Card-1 */}
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[#1672EC] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src="/images/ser1.svg"
              width={64}
              height={64}
              alt="Grooming Package"
            />
            <h1 className={`text-[#1672EC] text-[18px] lg:text-[35px] font-bold`}>
              Grooming Package
            </h1>
            <div className={`flex flex-col text-[#1672EC]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">$75</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
         {/* Card-2 */}
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[#ED9526] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src="/images/ser2.svg"
              width={64}
              height={64}
              alt="Nail Trim / Dremel"
            />
            <h1 className={`text-[#ED9526] text-[18px] lg:text-[35px] font-bold`}>
              Nail Trim / Dremel
            </h1>
            <div className={`flex flex-col text-[#ED9526]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">$15</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
         {/* Card-3 */}
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[#2AB930] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src="/images/ser3.svg"
              width={64}
              height={64}
              alt="Ear Plucking"
            />
            <h1 className={`text-[#2AB930] text-[18px] lg:text-[35px] font-bold`}>
              Ear Plucking
            </h1>
            <div className={`flex flex-col text-[#2AB930]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">$15</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
         {/* Card-4 */}
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[#F7716E] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src="/images/ser4.svg"
              width={64}
              height={64}
              alt="Bath & Brush"
            />
            <h1 className={`text-[#F7716E] text-[18px] lg:text-[35px] font-bold`}>
              Bath & Brush
            </h1>
            <div className={`flex flex-col text-[#F7716E]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">$50</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
         {/* Card-5 */}
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[#B92A6F] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src="/images/ser5.svg"
              width={64}
              height={64}
              alt="Sanitary Trim"
            />
            <h1 className={`text-[#B92A6F] text-[18px] lg:text-[35px] font-bold`}>
              Sanitary Trim
            </h1>
            <div className={`flex flex-col text-[#B92A6F]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">$45</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
         {/* Card-6 */}
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[#6F0C88] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src="/images/ser6.svg"
              width={64}
              height={64}
              alt="Pet Hair Color"
            />
            <h1 className={`text-[#6F0C88] text-[18px] lg:text-[35px] font-bold`}>
              Pet Hair Color
            </h1>
            <div className={`flex flex-col text-[#6F0C88]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">$50</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
