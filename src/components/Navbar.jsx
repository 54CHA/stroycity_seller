import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66edd5d3e5982d6c7bb1e780/1i88gmgs6";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <nav>
      <div className="w-full h-[100px] bg-white flex items-center border border-[#cacaca]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="./logo.png" alt="logo" className="w-[50px] ml-10" />
            <div className="text-[#ff8800] text-[30px] sm:text-[40px] md:text-[50px] font-bold border-[#cacaca] h-[100px] flex items-center pr-10">
              СТРОЙ СИТИ
            </div>
          </Link>
        </div>
        <div className="flex items-center border-l border-r border-[#cacaca] h-full ">
          <Link
            to="/catalog"
            className="text-[#ff8800] text-[18px] sm:text-[25px] font-bold px-10 h-full flex items-center"
          >
            Стать продавцом
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          <div className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 px-10">
            <Link to="/Store">Войти в кабинет</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
