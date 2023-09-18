import React from 'react';
import Image from 'next/image';

const Card = ({title, img, price, color, desc }) =>{
    return(
        <div className="col-span-1 bg-[#FFFFFF] rounded-[20px] border-[1px] border-[#DBD3DC] shadow-sm">
          <div className="flex justify-between items-center pt-3 px-[15px]">
            <Image
              className={`bg-[${color}] rounded-full p-2 max-w-[54px] max-h-[54px] lg:max-w-[64px] lg:max-h-[64px]`}
              src={img}
              width={64}
              height={64}
              alt={title}
            />
            <h1 className={`text-[${color}] text-[18px] lg:text-[35px] font-bold`}>
              {title}
            </h1>
            <div className={`flex flex-col text-[${color}]`}>
              <span className="text-[16px] lg:text-[26px]">FROM</span>
              <span className="text-[25px] lg:text-[35px] font-bold">${price}</span>
            </div>
          </div>
          <p className="pt-[20px] pb-[11px] ps-[31px] pr-[14px] text-[#818181] text-[14px] lg:text-[23px]">
            We offer a bath with quality shampoo, followed by a nice dry and
            conditioner, the nails and ears cleaning are also included.
          </p>
        </div>
    )
}
export default Card;