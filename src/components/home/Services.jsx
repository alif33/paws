/* eslint-disable react/no-unescaped-entities */
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] pt-[50px] mx-2 sm:mx-20 md:mx-3 lg:mx-3 xl:mx-7 2xl:mx-20 lg:pr-4 pb-32">
        <Card
          title={"Grooming Package"}
          img={"/images/ser1.svg"}
          price={75}
          color={"#1672EC"}
          desc={""}
        />
        <Card
          title={"Nail Trim / Dremel"}
          img={"/images/ser2.svg"}
          price={15}
          color={"#ED9526"}
          desc={""}
        />
        <Card
          title={"Ear Plucking"}
          img={"/images/ser3.svg"}
          price={75}
          color={"#2AB930"}
          desc={""}
        />
        <Card
          title={"Bath & Brush"}
          img={"/images/ser4.svg"}
          price={50}
          color={"#F7716E"}
          desc={""}
        />
        <Card
          title={"Sanitary Trim"}
          img={"/images/ser5.svg"}
          price={45}
          color={"#F7716E"}
          desc={""}
        />
        <Card
          title={"Pet Hair Color"}
          img={"/images/ser6.svg"}
          price={50}
          color={"#6F0C88"}
          desc={""}
        />
      </div>
    </div>
  );
};
export default Services;
