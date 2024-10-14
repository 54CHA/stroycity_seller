import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RegisterSeller from "./RegisterSeller"; // Correct import

const Navbar = () => {
  const [showRegisterSeller, setShowRegisterSeller] = useState(false); // State to control visibility

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
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[50px] md:ml-10 mx-5"
            />
            <div className="text-[#ff8800] text-[30px] xs:text-[30px] lg:text-[40px] xl:text-[50px] font-bold border-[#cacaca] h-[100px] lg:flex items-center pr-10 hidden">
              СТРОЙ СИТИ
            </div>
          </Link>
        </div>
        <div className="flex items-center border-l border-r border-[#cacaca] h-full ">
          <button
            onClick={() => setShowRegisterSeller(true)}
            className="text-[#ff8800] text-[14px] sm:text-[18px] md:text-[25px] font-bold px-8 sm:px-5 md:px-10 h-full flex items-center"
          >
            Стать продавцом
          </button>
        </div>
        <div className="space-x-8">
          <div className="text-[#363636] text-[14px] sm:text-[18px] md:text-[25px] h-full flex items-center font-medium hover:text-[#ff8800] transition duration-300 px-3 pl-4 sm:px-5 md:px-10 flex-wrap">
            <Link to="/Store">Войти в кабинет</Link>
          </div>
        </div>
      </div>
      {/* Display the modal when showRegisterSeller is true */}
      {showRegisterSeller && (
        <RegisterSeller
          isOpen={showRegisterSeller}
          onClose={() => setShowRegisterSeller(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
