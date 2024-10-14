import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SalesFunnel = () => {
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="))
          .split("=")[1];
        const response = await axios.get("https://api.bigbolts.ru/seller", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching the sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="bg-[#DFDFDF] pb-40">
      <div className="w-[87%] m-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center text-[18px] pt-[4rem]">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-400 mx-1" />
          Воронка продаж
        </div>

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-10">
            Воронка продаж
          </h1>
        </div>

        {/* Sales Funnel Data */}
        {salesData ? (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Динамика оборота</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-lg font-medium">Текущая неделя</p>
                <h3 className="text-4xl font-bold">{salesData.balance} ₽</h3>
                <p className="text-lg">0%</p>
                <p className="text-sm text-gray-600">с 10.09 по 16.09</p>
              </div>
              <div>
                <p className="text-lg font-medium">Прошлая неделя</p>
                <h3 className="text-4xl font-bold">0 ₽</h3>
                <p className="text-sm text-gray-600">с 03.09 по 09.09</p>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <button className="bg-[#ff8900] text-white text-[20px] p-2 py-4 w-[250px] text-center block hover:bg-[#ff6a00] hover:scale-[1.01] transition-all duration-200">
                Вывести средства
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl mt-10">Данные о продажах недоступны</p>
        )}
      </div>
    </div>
  );
};

export default SalesFunnel;
