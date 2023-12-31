import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { SiYoutube } from "react-icons/si";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <div>Google map</div>,
});

export default function Footer() {
  return (
    <div className="flex flex-col lg:grid grid-cols-1 pt-2 lg:grid-cols-12 bg-[#190020] min-h-[510px] text-white pb-5 lg:pb-0">
      <div className="ps-2 sm:ps-10 pt-3 lg:ps-0 lg:col-span-4 lg:mx-auto my-auto">
        <div className="flex justify-start items-center gap-[7px]">
          <Image
            src="/images/fologo.svg"
            width={75}
            height={75}
            alt="footer_logo"
          />
          <Image
            src="/images/fobrand.svg"
            width={156}
            height={20}
            alt="footer_brand"
          />
        </div>
        <div className="pt-[40px]">
          <h1 className="text-[20px] lg:text-[30px] font-bold">Social media</h1>
          <div className="flex items-center gap-[10px] pt-[30px]">
            <Link href="/"><IoLogoFacebook color="white" size={28} /></Link>
            <Link href="/"><SiYoutube color="white" size={27} /></Link>
            <Link href="/"><AiFillInstagram color="white" size={28} /></Link>
          </div>
          <div className="pt-[40px]">
            <h3 className="text-[16px] font-medium">Contact</h3>
            <h1 className="text-[15px] lg:text-[24px] font-bold pt-[20px]">
              236 700 8487
            </h1>
          </div>
        </div>
      </div>
      <div className="ps-2 sm:ps-10 lg:ps-0 lg:col-span-5 bg-[#190020] pt-5 lg:pt-0 lg:mx-auto my-auto">
        <h1 className="text-[20px] lg:text-[30px] font-bold">
          Location
        </h1>
        <div className="flex items-center ps-3 gap-[11px] pt-[18px]">
          <Image
            src="/images/location.svg"
            width={16}
            height={22}
            alt="location"
          />
          <span className="text-[14px] font-normal">
            Aliquam nullam eget posuere ut curabitur et convallis tortor orci.
          </span>
        </div>
        <div className="pt-[20px] mx-auto">
          <Map width={370} height={286} />
        </div>
      </div>
      <div className="ps-2 sm:ps-10 lg:ps-0 lg:col-span-3 pb-6 lg:pb-0 bg-[#190020] lg:mx-auto pt-[70px]">
        <h1 className="text-[20px] lg:text-[30px] font-bold">Explore</h1>
        <ul>
          <li className="text-[16px] font-medium pt-[30px]">Home</li>
          <li className="text-[16px] font-medium py-[15px]">Services</li>
          <li className="text-[16px] font-medium pb-[15px]">Gallery</li>
          <li className="text-[16px] font-medium">About Us</li>
        </ul>
      </div>
    </div>
  );
}
