import Image from "next/image";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:pb-10">
      <div className="col-span-8 flex flex-col items-center justify-center gap-[30px] px-0 lg:px-[100px]">
        <h3 className="text-[#3D3D3D] text-[25px] lg:text-[40px] font-medium">
          Don’t wait more,{" "}
          <span className="text-[#1672EC] font-black">Book now!</span>{" "}
        </h3>
        <div className="flex items-center gap-6 pt-4 lg:pt-0">
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
        <h1 className="text-[25px] pt-5 lg:pt-0 lg:text-[40px] text-[#B92A6F] font-black text-center">
          20535-A Douglas Crescent Langley BC, Canada, V3A 0N4
        </h1>
      </div>
      <div className="md:flex md:justify-center lg:col-span-4">
        <Image
          src="/images/contactDog.svg"
          width={368}
          height={313}
          alt="dog"
        />
      </div>
    </div>
  );
}
