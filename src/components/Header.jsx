"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex lg:grid lg:grid-cols-2 justify-between items-center max-w-[1300px] px-10 mx-auto mt-[18px] relative">
      <div className="col-span-2 sm:col-span-2 md:col-span-1">
        <div className="flex justify-center sm:justify-center md:justify-normal items-center gap-[14px]">
          <div className="w-14 h-14 lg:w-[74px] lg:h-[74px]">
            <Image src="/images/logo.svg" width={74} height={74} alt="logo" />
          </div>
          <div className="w-44 lg:w-[191px] lg:h-[24px]">
            <Image
              src="/images/PAWS.PLACE.svg"
              width={191}
              height={24}
              alt="brand_name"
            />
          </div>
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
      <div className="md:hidden">
        <button onClick={() => setMenu(!menu)} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        {menu && (
          <div className="absolute top-full left-0 right-0 bg-white z-20 shadow">
            <div className="flex flex-col items-center gap-5 p-4 z-50">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
