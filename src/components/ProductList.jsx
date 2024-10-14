import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductAdmin";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Change this value to set items per page
  const apiUrl = "https://api.bigbolts.ru";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="))
          .split("=")[1];
        const response = await axios.get(apiUrl + "/seller", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Check if response.data.items is an array before setting it
        setProducts(
          Array.isArray(response.data.items) ? response.data.items : []
        );
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Calculate the current products to display
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-10 ">
            Список товаров
          </h1>
          <Link
            to="CreateProduct"
            className="bg-[#ff8900] text-white text-[20px] sm:text-[20px] md:text-[30px] p-2 py-4 w-[300px] text-center block hover:bg-[#ff6a00] hover:scale-[1.01] transition-all duration-200"
          >
            Добавить Товар
          </Link>
        </div>

        {/* Map through current products and render each one using ProductCard */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {currentProducts.map((product) => (
              <div>
                <ProductCard key={product.id} product={product} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl mt-10">Товары отсутвуют</p>
        )}

        {/* Pagination Controls */}
        <div className="flex mt-20 flex-wrap justify-center mn:justify-start">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-[18px] py-2 rounded-full text-[20px] ${
                currentPage === index + 1
                  ? "bg-[#ff8900] text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {currentProducts.length > 0 && ( // Only show if there are products
            <button
              onClick={handleNextPage}
              className={`mx-1 px-3 py-1 rounded text-[25px]  ${
                currentPage < totalPages ? " text-[#ff8800]" : "opacity-30"
              }`}
              disabled={currentPage >= totalPages} // Disable if on the last page
            >
              <span className="">Следующая страница</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-1 translate-y-[2px]"
              />{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
