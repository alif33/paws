"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Menu from "./Menu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex lg:grid lg:grid-cols-2 justify-between items-center max-w-[1300px] px-10 mx-auto mt-[18px]">
      <div className="col-span-2 sm:col-span-2 md:col-span-1">
        <div className="flex justify-center sm:justify-center md:justify-normal items-center gap-[14px]">
          <Image src="/images/logo.svg" width={74} height={74} alt="logo" />
          <Image
            src="/images/PAWS.PLACE.svg"
            width={191}
            height={24}
            alt="brand_name"
          />
        </div>
      </div>
      <div className="hidden lg:block col-span-2 sm:col-span-2 md:col-span-1">
        <ul className="lg:flex justify-center sm:justify-center md:justify-end items-center gap-[25px] text-[#3D3D3D] text-[16px] font-medium">
          <li className="cursor-pointer">
            <Link href="/#services">SERVICES</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#gallery">GALLERY</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#about-us">ABOUT US</Link>
          </li>
          <li className="bg-[#6F0C88] text-white py-[14px] px-[28px] rounded-[7px] cursor-pointer">
            BOOK NOW
          </li>
        </ul>
      </div>
      {menu ? (
        <div className="col-span-2 lg:hidden" onClick={() => setMenu(!menu)}>
          <RxCross1 size={28} />
        </div>
      ) : (
        <div className="col-span-2 lg:hidden" onClick={() => setMenu(!menu)}>
          <AiOutlineMenu size={28} />
        </div>
      )}
      {menu && (
        <div className="relative">
          <Menu />
        </div>
      )}
    </div>
  );
};
export default Header;
