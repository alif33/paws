import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="bg-[url('/images/shapes/BgTestimonial.svg')] bg-cover bg-no-repeat mt-[-8rem] lg:min-w-[600px] px-0 lg:px-[70px] pb-10 sm:pb-10 md:pb-7 z-0 lg:z-1">
      <div className="pt-[7rem]">
        <h1 className="text-[#3D3D3D] text-center lg:text-left text-[20px] lg:text-[40px] font-medium">
          Why we are{" "}
          <span className="text-[#6F0C88] font-black">different?</span>{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-[60px] gap-1 lg:gap-[100px]">
          <div className="flex flex-col items-center gap-[13px]">
            <Image
              className="bg-[#1672EC] rounded-[40px] p-4"
              src="/images/test1.svg"
              width={106}
              height={106}
              alt="testimonial1"
            />
            <h1 className="text-[#1B74EB] text-[26px] sm:text-[28px] md:text-[30px] xl:text-[35px] font-bold">
              We give time!
            </h1>
            <p className="text-center text-[#818181] lg:text-[26px] pb-[100px]">
              Dogs needs time, they need breaks at the table to release stress
              and get comfortable.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[13px]">
            <Image
              className="bg-[#ED9526] rounded-[40px] p-4"
              src="/images/test1.svg"
              width={106}
              height={106}
              alt="testimonial1"
            />
            <h1 className="text-[#ED9526] text-[26px] sm:text-[28px] md:text-[30px] xl:text-[35px] font-bold">
              We give time!
            </h1>
            <p className="text-center text-[#818181] lg:text-[26px] pb-[100px]">
              Details matter and we try hard to keep them, small things like,
              the scent you like, or a little lace to decorate in you pappy
            </p>
          </div>
          <div className="flex flex-col items-center gap-[13px]">
            <Image
              className="bg-[#B92A6F] rounded-[40px] p-4"
              src="/images/test1.svg"
              width={106}
              height={106}
              alt="testimonial1"
            />
            <h1 className="text-[#B92A6F] text-[26px] sm:text-[28px] md:text-[30px] xl:text-[35px] font-bold">
              We give time!
            </h1>
            <p className="text-center text-[#818181] lg:text-[26px] pb-[100px]">
              Details matter and we try hard to keep them, small things like,
              the scent you like, or a little lace to decorate in you pappy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
