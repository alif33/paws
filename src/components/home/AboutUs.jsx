import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div className="bg-[#FDF4FF] px-[100px] mt-[90px]">
      <h1 className="text-[#6F0C88] text-[40px] font-black text-center pt-[50px] pb-[90px]">
        What our clients tell about us
      </h1>
      <div className="flex justify-center items-center gap-[30px] pb-[40px]">
        <div className="flex justify-center items-center min-w-[80px] h-[80px] bg-white rounded-full shadow-lg cursor-pointer">
          <BsChevronLeft size={28} />
        </div>
        <div className="bg-[#FFFFFF] rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px]">
          <div className="flex justify-center z-10 mt-[-50px]">
            <Image
              src="/images/person1.svg"
              width={98}
              height={98}
              alt="person1"
            />
          </div>
          <p className="pt-[25px] px-[20px] pb-[20px] text-[14px]">
            Feugiat erat mi cum accumsan nulla gravida erat dignissim. Congue
            dignissim eu ut blandit aliquet arcu molestie at. Porta vel eget et
            enim magna et ornare id sollicitudin. In tortor mattis dapibus in
            iaculis cras condimentum auctor...
          </p>
          <h1 className="text-[#3D3D3D] text-center font-bold pb-[50px]">
            Cheyenne Dorwart
          </h1>
        </div>
        <div className="bg-[#6F0C88] text-white rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px]">
          <div className="flex justify-center z-10 mt-[-50px]">
            <Image
              src="/images/person2.svg"
              width={98}
              height={98}
              alt="person2"
            />
          </div>
          <p className="pt-[25px] px-[20px] pb-[40px] text-[14px]">
            Lacinia amet mi risus amet lacus scelerisque aliquet. Sed est
            gravida facilisis risus eros eget. Placerat enim commodo blandit
            libero risus arcu...
          </p>
          <h1 className="text-[#FFFFFF] text-center font-bold pb-[50px]">
            Cheyenne Dorwart
          </h1>
        </div>
        <div className="bg-[#FFFFFF] rounded-[20px] min-w-[278px] max-w-[278px] min-h-[310px] max-h-[310px]">
          <div className="flex justify-center z-10 mt-[-50px]">
            <Image
              src="/images/person3.svg"
              width={98}
              height={98}
              alt="person3"
            />
          </div>
          <p className="pt-[25px] px-[20px] pb-[20px] text-[14px]">
            Nulla non scelerisque nunc nisi. Amet justo aliquet volutpat nullam
            tortor maecenas. Eget mauris quam a facilisis urna placerat diam.
            Vel dictum nisl facilisi posuere bibendum. Pellentesque lectus in
            aliquet mattis vitae...
          </p>
          <h1 className="text-[#3D3D3D] text-center font-bold pb-[50px]">
            Cheyenne Dorwart
          </h1>
        </div>
        <div className="flex justify-center items-center min-w-[80px] h-[80px] bg-white rounded-full shadow-lg cursor-pointer">
          <BsChevronRight size={28} />
        </div>
      </div>
      <div className="flex justify-center items-center gap-[10px] pb-[80px]">
        <div className="min-w-[23px] min-h-[23px] bg-[#D9D9D9] rounded-full"></div>
        <div className="min-w-[23px] min-h-[23px] bg-[#6F0C88] rounded-full"></div>
        <div className="min-w-[23px] min-h-[23px] bg-[#D9D9D9] rounded-full"></div>
      </div>
    </div>
  );
}
