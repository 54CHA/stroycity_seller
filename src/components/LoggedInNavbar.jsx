import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const storeName = "Название магазина";

  const navigate = useNavigate();

  function deleteToken() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

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
          <Link to="/Store" className="flex items-center gap-3">
            <img src="./logo.png" alt="logo" className="w-[50px] ml-10 " />
            <div className="text-[#ff8800] text-[30px] sm:text-[40px] md:text-[50px] font-bold border-[#cacaca] h-[100px] border-r flex items-center whitespace-nowrap pr-10">
              СТРОЙ СИТИ
            </div>
          </Link>
        </div>
        <div className="flex justify-between w-full ml-[50px]">
          <div className="flex">
            <Link
              to="/productlist"
              className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 px-10 "
            >
              Товары
            </Link>
            <Link
              to="/store"
              className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 px-10 "
            >
              Финансы
            </Link>
          </div>
          <div>
            <button
              className="underline text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 "
              onClick={deleteToken}
            >
              Выйти
            </button>
            <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#7f7f7f] transition duration-300 px-10">
              "{storeName}"
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
