import { Link } from "react-router-dom";
import { useState } from "react";

const MainPage = () => {
  const backgrounds = [
    "/images/sunrise.jpg",
    // "/images/workers.jpg",
    // "/images/construction.jpg",
  ];

  const changeBackground = () => {
    setCurrentBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgrounds.length
    );
  };

  return (
    <div
      className={`relative bg-[url("/images/sunrise.jpg")] bg-cover bg-center h-screen`}
    >
      {/* Grey tint overlay */}
      <div className="absolute inset-0 bg-slate-600 bg-opacity-30"></div>

      <div className="relative h-[86vh] w-[87%] m-auto">
        <div className=" h-full left-0 top-0 absolute" />
        <div className=" text-[#f9e6e4] text-[8vw] mn:text-[6.5vw] font-bold w-7/12 pt-20 mb-[100px] 3xl:mb-0">
          КАЧЕСТВО, НАДЕЖНОСТЬ, ПРОФЕССИОНАЛИЗМ.
        </div>
        <Link
          to="/store"
          className="  text-white  bg-[#FF8900] py-5 px-7 hover:bg-[#ff6a00] hover:scale-[1.01] transition-all duration-200
          3xl:ml-[40%] 3xl:text-[2vw]
          mn:text-[4vw]
          m-auto text-[8vw]
          "
        >
          Открыть каталог
        </Link>
        <div
          className="w-[2.5%] h-[5%] left-[92.5%] top-[35%] absolute transition-colors hover:bg-[#ff5a00]/50 mt-20 cursor-pointer"
          onClick={changeBackground}
        >
          <button className="w-full h-full left-0 top-0 absolute bg-[#ff8800]/50 hidden mn:block" />
          <img
            src="/arrowRight.svg"
            className="absolute w-full h-full hidden mn:block"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
