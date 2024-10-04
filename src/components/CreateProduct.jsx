import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react"; // Add this import

const CreateProduct = () => {
  const apiUrl = "https://api.bigbolts.ru";

  const [formData, setFormData] = useState({
    article: "",
    brand: "",
    brand_id: "",
    name: "",
    description: "", // Add this new field
    // ... other form fields ...
  });

  const [materials, setMaterials] = useState([]); // Add state for materials
  const [categories, setCategories] = useState([]); // Add state for categories
  const [brands, setBrands] = useState([]); // Add state for brands

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(apiUrl + "/material");
        setMaterials(response.data); // Assuming the API returns an array of materials
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(apiUrl + "/category");
        setCategories(response.data); // Assuming the API returns an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get(apiUrl + "/brand");
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        
      };

      const response = await axios.post(apiUrl + "/seller/item", requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Product created successfully");
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
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
        <form onSubmit={handleSubmit} className="w-5/12">
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
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              required
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
              name="material"
              value={formData.material}
              onChange={handleInputChange}
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            >
              <option value="">Выберите материал</option>
              {materials.map((material) => (
                <option key={material.id} value={material.name}>
                  {material.name}
                </option>
              ))}
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="bg-[#DFDFDF] border border-[#363636] p-4 my-2"
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="articleNumber"
              value={formData.articleNumber}
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
              name="discountPrice"
              value={formData.discountPrice}
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