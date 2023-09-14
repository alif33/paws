/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="bg-[#FDF4FF] px-[70px] pt-[50px]">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="text-[20px] lg:text-[40px] font-black px-5 w-[400px] lg:w-[896px] text-[#6F0C88]">
          {
            "Our services are customized to perfectly meet your pet's unique needs."
          }
        </div>
        <div className="flex justify-center items-center gap-[10px] rounded-[7px] h-[52px] bg-[#6F0C88] text-white py-[20px] ps-[35px] pr-[20px] my-auto cursor-pointer">
          <span>See all</span>
          <Image src="/images/arrow.svg" width={13} height={10} alt="arrow" />
        </div>
      </div>
      <div className="grid lg:grid-cols-10 gap-[24px] pt-[40px] pb-[100px]">
        <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-2 bg-white w-[231px] h-[380px] rounded-[20px] shadow-[0_30px_60px_0_rgba(0, 0, 0, 0.10)]">
          <h3 className="text-[#3D3D3D] text-center text-[16px] font-bold pt-[15px]">
            Full Grooming
          </h3>
          <div className="flex justify-center pt-[8px]">
            <Image
              src="/images/ser1.svg"
              width={80}
              height={80}
              alt="service1"
            />
          </div>
          <p className="text-[14px] text-[#3D3D3D] px-[20px] pt-[10px] pb-[10px]">
            Indulge your pet with our Full grooming package, including a
            luxurious bath, meticulous brushing, and ear care. Our expert
            groomers leave your furry friend looking and feeling their absolute
            best, offering a pampering experience like no other at our grooming
            salon!
          </p>
        </div>
        <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-2 bg-white w-[231px] h-[380px] rounded-[20px] shadow-[0_30px_60px_0_rgba(0, 0, 0, 0.10)]">
          <h3 className="text-[#3D3D3D] text-center text-[16px] font-bold pt-[15px]">
            Nail Trim
          </h3>
          <div className="flex justify-center pt-[8px]">
            <Image
              src="/images/ser2.svg"
              width={80}
              height={80}
              alt="service2"
            />
          </div>
          <p className="text-[14px] text-[#3D3D3D] px-[20px] pt-[10px] pb-[10px]">
            Treat your furry friend to a refreshing bath that pampers and
            cleanses. Our expert groomers use gentle techniques and premium
            products to leave your pet looking and feeling their best.
          </p>
        </div>
        <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-2 bg-white w-[231px] h-[380px] rounded-[20px] shadow-[0_30px_60px_0_rgba(0, 0, 0, 0.10)]">
          <h3 className="text-[#3D3D3D] text-center text-[16px] font-bold pt-[15px]">
            Bath & Brush
          </h3>
          <div className="flex justify-center pt-[8px]">
            <Image
              src="/images/ser3.svg"
              width={80}
              height={80}
              alt="service3"
            />
          </div>
          <p className="text-[14px] text-[#3D3D3D] px-[20px] pt-[10px] pb-[10px]">
            Treat your pet to our "Bath & Brush" service, designed to rejuvenate
            their coat and invigorate their spirits. Our experienced groomers
            start with a soothing bath using premium pet-friendly products,
            followed by a thorough brushing that leaves their fur lustrous and
            tangle-free.
          </p>
        </div>
        <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-2 bg-white w-[231px] h-[380px] rounded-[20px] shadow-[0_30px_60px_0_rgba(0, 0, 0, 0.10)]">
          <h3 className="text-[#3D3D3D] text-center text-[16px] font-bold pt-[15px]">
            Ear Cleaning
          </h3>
          <div className="flex justify-center pt-[8px]">
            <Image
              src="/images/ser4.svg"
              width={80}
              height={80}
              alt="service4"
            />
          </div>
          <p className="text-[14px] text-[#3D3D3D] px-[20px] pt-[10px] pb-[10px]">
            Treat your furry friend to a refreshing bath that pampers and
            cleanses. Our expert groomers use gentle techniques and premium
            products to leave your pet looking and feeling their best.
          </p>
        </div>
        <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-2 bg-white w-[231px] h-[380px] rounded-[20px] shadow-[0_30px_60px_0_rgba(0, 0, 0, 0.10)]">
          <h3 className="text-[#3D3D3D] text-center text-[16px] font-bold pt-[15px]">
            Sanitary Trim
          </h3>
          <div className="flex justify-center pt-[8px]">
            <Image
              src="/images/ser5.svg"
              width={80}
              height={80}
              alt="service5"
            />
          </div>
          <p className="text-[14px] text-[#3D3D3D] px-[20px] pt-[10px] pb-[10px]">
            This service helps keep the area clean, reduces the risk of matting,
            and enhances the pet's overall hygiene and comfort. Sanitary
            trimming is a common and important aspect of pet grooming, ensuring
            that your dog stays clean and comfortable.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
