import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [storeName, setStoreName] = useState("Название магазина");
  const navigate = useNavigate();

  function deleteToken() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

  useEffect(() => {
    const fetchStoreName = async () => {
      try {
        // Assuming you have the JWT token stored in cookies
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="))
          ?.split("=")[1];

        const response = await axios.get("https://api.bigbolts.ru/seller", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the auth token
          },
        });

        // Update store name from the response
        setStoreName(response.data.shop_name || "Название магазина");
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    fetchStoreName();

    // Tawk.to chat script
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
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[50px] ml-5 md:ml-10"
            />
            <div className="text-[#ff8800] text-[30px] sm:text-[40px] md:text-[50px] font-bold border-[#cacaca] h-[100px] border-r lg:flex items-center md:pr-10 hidden whitespace-nowrap">
              СТРОЙ СИТИ
            </div>
          </Link>
        </div>
        <div className="flex justify-around w-full md:ml-[50px]">
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
            <Link
              to="/productlist"
              className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 px-10 "
            >
              Товары
            </Link>
            <Link
              to="/Finances"
              className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 px-10 "
            >
              Финансы
            </Link>
          </div>
          <div className="flex flex-col-reverse gap-2 md:gap-0 md:flex-row">
            <button
              className="underline text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300 "
              onClick={deleteToken}
            >
              Выйти
            </button>
            <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#7f7f7f] transition duration-300 md:px-10 whitespace-nowrap">
              "{storeName}"
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
