import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-[1300px] mx-auto mt-[18px]">
      <div className="flex justify-center items-center gap-[14px]">
        <Image src="/images/logo.svg" width={74} height={74} alt="logo" />
        <Image
          src="/images/PAWS.PLACE.svg"
          width={191}
          height={24}
          alt="brand_name"
        />
      </div>
      <div className="">
        <ul className="flex justify-center items-center gap-[25px] text-[#3D3D3D] text-[16px] font-medium">
          <li className="cursor-pointer">SERVICES</li>
          <li className="cursor-pointer">GALLERY</li>
          <li className="cursor-pointer">ABOUT US</li>
          <li className="bg-[#6F0C88] text-white py-[14px] px-[28px] rounded-[7px] cursor-pointer">
            BOOK NOW
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
