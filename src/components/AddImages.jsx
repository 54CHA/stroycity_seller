import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddImages = () => {
  const { itemId } = useParams();

  const apiUrl = "https://api.bigbolts.ru";
  const handleImageSelection = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]); // Append each image file
    }

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    try {
      const response = await axios.post(
        `${apiUrl}/seller/item/image?item_id=${itemId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          params: {
            item_id: { itemId },
          },
        }
      );
      console.log("Images uploaded:", response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error uploading images:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-[#DFDFDF] pb-40">
      <div className="w-[87%] m-auto">
        <div className="mb-5 flex-col items-center justify-between ">
          <h1 className="text-[#363636] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 mt-5 ">
            Изображения ПОКА НЕ РАБОТАЮТ
          </h1>
          <div className="relative">
            <input
              type="file"
              multiple
              onChange={handleImageSelection}
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="block bg-[#DFDFDF] border border-[#363636] px-4 py-2 text-[#363636] font-bold text-center cursor-pointer text-lg sm:text-md md:text-lg lg:text-xl mb-5"
            >
              Добавить фото
            </label>
          </div>
          <Link
            to="/productlist"
            type="submit"
            className="block bg-[#ff8900] hover:bg-[#ff6a00] hover:scale-[1.01] px-4 py-2 text-[#ffffff]  text-center cursor-pointer text-lg sm:text-md md:text-lg lg:text-xl"
          >
            Завершить
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddImages;
