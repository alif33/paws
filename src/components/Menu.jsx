import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-white absolute top-6 right-0 w-full">
      <ul className="flex flex-col justify-center items-center gap-[25px] text-[#3D3D3D] text-[10px]">
        <li className="cursor-pointer">
          <Link href="/#services">SERVICES</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/#gallery">GALLERY</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/#about-us">ABOUT US</Link>
        </li>
        <li className="bg-[#6F0C88] text-white py-[7px] px-[10px] rounded-[7px] cursor-pointer">
          BOOK NOW
        </li>
      </ul>
    </div>
  );
}
