import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const CreateProduct = () => {
  const apiUrl = "https://api.bigbolts.ru";
  const [formData, setFormData] = useState({
    name: "",
    brand_id: null,
    material_id: null,
    category_id: null,
    article: "",
    price: null,
    price_with_discount: null,
    description: "",
    length: null,
    width: null,
    height: null,
    weight: null,
  });
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwt="))
    ?.split("=")[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [brandsResponse, materialsResponse, categoriesResponse] =
          await Promise.all([
            axios.get(`${apiUrl}/brand`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(`${apiUrl}/material`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(`${apiUrl}/category`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);

        setBrands(brandsResponse.data);
        setMaterials(materialsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    // Convert specific fields to integers
    if (
      [
        "brand_id",
        "material_id",
        "category_id",
        "price",
        "price_with_discount",
        "length",
        "width",
        "height",
        "weight",
      ].includes(name)
    ) {
      parsedValue = value === "" ? "" : parseInt(value, 10);
    }

    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/seller/item`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Product created:", response.data);
      const createdItemId = response.data; // Store the item ID
      navigate(`/photo/${createdItemId}`); // Pass item_id in the URL
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-[#DFDFDF] pb-40">
      <div className="w-[87%] m-auto">
        <div className="flex items-center text-[18px] pt-[4rem]">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          Товары
        </div>
        <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-10 ">
          Список товаров
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
        <form onSubmit={handleSubmit} className="w-full md:w-5/12">
          <div className="flex flex-col mb-5 ">
            <h1 className="text-[#363636] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 mt-5 ">
              Информация о товаре
            </h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Название"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
            <select
              name="brand_id"
              value={formData.brand_id}
              onChange={handleInputChange}
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            >
              <option value="">Выберите бренд</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            <select
              name="material_id"
              value={formData.material_id}
              onChange={handleInputChange}
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            >
              <option value="">Выберите материал</option>
              {materials.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleInputChange}
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="article"
              value={formData.article}
              z
              onChange={handleInputChange}
              placeholder="Артикул"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Ваша цена, ₽ "
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
            <input
              type="number"
              name="price_with_discount"
              value={formData.price_with_discount}
              onChange={handleInputChange}
              placeholder="Цена со скидкой, ₽ "
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
          </div>

          {/* New description section */}
          <div className="flex flex-col mb-5">
            <h1 className="text-[#363636] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 mt-5">
              Описание товара
            </h1>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Введите описание товара"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2 h-40 resize-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <h1 className="text-[#363636] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 mt-5">
              Габариты и вес
            </h1>
            <input
              type="number"
              name="length"
              value={formData.length}
              onChange={handleInputChange}
              placeholder="Длина упаковки, мм"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
            <input
              type="number"
              name="width"
              value={formData.width}
              onChange={handleInputChange}
              placeholder="Ширина упаковки, мм"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="Высота упаковки, мм"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Вес с упаковкой, г"
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            />
          </div>

          <div className="flex justify-between">
            <Link to="/admin">
              <button
                type="button"
                className="block bg-[#DFDFDF] border border-[#363636] px-4 py-2 text-[#363636] font-bold text-center cursor-pointer text-lg sm:text-md md:text-lg lg:text-xl"
              >
                Отмена
              </button>
            </Link>
            <button
              type="submit"
              className="block bg-[#ff8900] hover:bg-[#ff6a00] hover:scale-[1.01] px-4 py-2 text-[#ffffff]  text-center cursor-pointer text-lg sm:text-md md:text-lg lg:text-xl"
            >
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
