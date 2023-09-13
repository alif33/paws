const Hero = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-5xl font-black">
            {"Stress-Free Dog Grooming: Where Your Pet's Happiness Matters."}
          </h1>
          <h6 className="text-sm font-normal">
            {
              "Experience grooming like never before at our pet spa. We prioritize your dog's comfort, providing a soothing and stress-free grooming experience. Your furry friend deserves the best, and we're here to pamper them with care and love."
            }
          </h6>
          <button className="bg-[#6F0C88] text-white py-2 px-3 rounded">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
