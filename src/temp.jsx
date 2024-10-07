import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const CreateProduct = () => {
  const apiUrl = "https://api.bigbolts.ru";

  const [formData, setFormData] = useState({
    article: "",
    brand_id: "",
    category_id: "",
    name: "",
    description: "",
    height: "",
    length: "",
    material_id: "",
    price: "",
    price_with_discount: "",
    quantity: "0",
    weight: "",
    width: "",
  });

  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwt="))
    ?.split("=")[1];

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(apiUrl + "/material", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setMaterials(response.data); // Assuming the API returns an array of materials
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(apiUrl + "/category", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data); // Assuming the API returns an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get(apiUrl + "/brand", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setBrands(response.data); // Assuming the API returns an array of brands
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchMaterials();
    fetchCategories();
    fetchBrands(); // Fetch brands on component mount
  }, []); // Fetch materials and categories on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here
    const files = e.target.files;
    // You can process the files here, e.g., upload them to a server
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        article: formData.article,
        brand_id: parseInt(formData.brand_id),
        category_id: parseInt(formData.category_id),
        description: formData.description,
        height: parseInt(formData.height),
        length: parseInt(formData.length),
        material_id: parseInt(formData.material_id),
        name: formData.name,
        price: parseFloat(formData.price),
        price_with_discount: parseFloat(formData.price_with_discount) || null,
        quantity: 0, // You may want to add a field for quantity in your form
        weight: parseInt(formData.weight),
        width: parseInt(formData.width),
      };

      const response = await axios.post(apiUrl + "/seller/item", requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        console.log("Product created successfully");
        // You may want to add some user feedback here, like a success message or redirect
      } else {
        console.error("Failed to create product");
        // You may want to add some user feedback here, like an error message
      }
    } catch (error) {
      console.error("Error:", error);
      // You may want to add some user feedback here, like an error message
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
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-[#363636] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 mt-5">
              Изображения
            </h1>
            <div className="relative">
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="block bg-[#DFDFDF] border border-[#363636] px-4 py-2 text-[#363636] font-bold text-center cursor-pointer text-lg sm:text-md md:text-lg lg:text-xl"
              >
                Добавить фото
              </label>
            </div>
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
              Завершить создание
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
