const Hero = () => {
  return (
    <div className="w-full py-[3rem]  max-md:px-4 md:px-4  bg-[#FFC100] relative ">
      <div className="  xl:px-[9rem]  max-sm:px-[1rem]  md:max-w-[850px]">
        <div className=" max-sm:leading-[80px] xl:w-[600px] font-[Syne] ">
          <h1 className="md:text-[95px] tracking-tight  sm:text-[85px] max-sm:text-[70px] font-medium text-black  py-2  ">
            Stay curious.
          </h1>
        </div>
        <div className=" py-2 max-sm:pt-4 md:flex md:flex-wrap ">
          <p className="text-2xl font-medium  max-sm:text-lg  sm:text-md sm:font-normal md:leading-6 ">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
        <div className="py-7">
          <button className="bg-black text-white font-medium py-2 px-12 rounded-full text-lg mt-5">
            Start reading
          </button>
        </div>
      </div>
      <div className=" ">
        <img
          src="MM.svg"
          className=" max-[800px]:hidden xl:h-[450px] h-[430px] absolute  md:right-[-35%] min-[912px]:right-[-25%] xl:right-3 top-[-1%] lg:right-1"
        />
      </div>
    </div>
  );
};

export default Hero;
