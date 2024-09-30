import ProductCard from "./ProductAdmin";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductList = () => {
  return (
    <div className="bg-[#DFDFDF] pb-40 ">
      <div className="w-[87%] m-auto">
        <div className="flex items-center text-[18px] pt-[4rem]">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          Товары
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-10 ">
            Список товаров
          </div>
          <Link
            to="CreateProduct"
            className="bg-[#ff8900] text-white text-[20px] sm:text-[20px] md:text-[30px] p-2 py-4 w-[300px] text-center block hover:bg-[#ff6a00] hover:scale-[1.01] transition-all duration-200"
          >
            {" "}
            Добавить Товар
          </Link>
        </div>
        <div className="flex gap-5 mb-10 text-[18px]">
          <div className="p-1 flex shadow-md bg-white px-2">
            <option value="">
              Все
              <div />
            </option>
          </div>

          <div className="p-1 flex shadow-md bg-white px-2">
            <option value="">В продаже</option>
          </div>

          <div className="p-1 flex shadow-md bg-white px-2">
            <option value="">Готовых к продаже</option>
          </div>

          <div className="p-1 flex shadow-md bg-white px-2">
            <option value="">Ошибки</option>
          </div>

          <div className="p-1 flex shadow-md bg-white px-2">
            <option value="">Сняты с продажи</option>
          </div>
        </div>
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
