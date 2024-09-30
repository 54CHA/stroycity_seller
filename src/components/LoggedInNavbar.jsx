import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      <div className="w-full h-[100px] bg-white flex items-center justify-between border border-[#cacaca]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="./logo.png" alt="logo" className="w-[50px] ml-10" />
            <div className="text-[#ff8800] text-[30px] sm:text-[40px] md:text-[50px] font-bold border-[#cacaca] h-[100px] flex items-center">
              СТРОЙ СИТИ
            </div>
          </Link>
        </div>
        <div className="flex items-center border-l border-r border-[#cacaca] h-full align-">
          <div
            className=" cursor-pointer items-center flex"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="size-[20px] h-[100px] pl-10 text-[#ff8800] transition duration-300"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-[100px] left-0 bg-white border border-[#cacaca] p-4">
              <Link to="/" className="block py-2 hover:text-[#ff8800]">
                Главная
              </Link>
              <Link to="/about" className="block py-2 hover:text-[#ff8800]">
                О компании
              </Link>
              <Link to="/contact" className="block py-2 hover:text-[#ff8800]">
                Контакты
              </Link>
            </div>
          )}
          <Link
            to="/catalog"
            className="text-[#ff8800] text-[18px] sm:text-[25px] font-bold pr-10 pl-5 h-full flex items-center"
          >
            Каталог товаров
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300">
            Доставка и оплата
          </a>
          <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300">
            О компании
          </a>
          <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300">
            Стать продавцом
          </a>
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
          />
          <div className="relative">
            <FontAwesomeIcon
              icon={faHeart}
              className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
            />
            <div className="w-4 h-4 rounded-full bg-[#FF8900] absolute top-12 left-[52px]"></div>
            <div className="text-[13px] absolute top-[46px] left-[56.3px]">
              0
            </div>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
            />
            <div className="w-4 h-4 rounded-full bg-[#FF8900] absolute top-12 left-[52px]"></div>
            <div className="text-[13px] absolute top-[46px] left-[56.3px]">
              0
            </div>
          </div>
          <Link to="/user">
            <FontAwesomeIcon
              icon={faUserRegular}
              className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
