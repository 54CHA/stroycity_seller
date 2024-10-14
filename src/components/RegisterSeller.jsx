import { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link, useNavigate } from "react-router-dom";
import "toastr/build/toastr.min.css";

const SellerSignup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shop_name, setShopName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShopNameChange = (e) => {
    setShopName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page on submit

    const userData = {
      shop_name,
      email,
      password,
      name,
    };

    try {
      const response = await axios.post(
        "https://api.bigbolts.ru/sign-up/seller",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        // Handle successful response
        toastr.success("Регистрация прошла успешно");
        console.log("User registered successfully");
        navigate("/signin"); // Redirect to the home page
      } else {
        // Handle error response
        toastr.error("Не удалось зарегистрироваться");
        console.error("Failed to register user");
      }
    } catch (error) {
      // Handle network or server error
      toastr.error("Ошибка: " + error.message);
      console.error("Error:", error);
    }
  };

  const [formData, setFormData] = useState({
    shop_name: "",
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white p-8 rounded-sm w-full max-w-md relative shadow-lg scale-90 mn:scale-150">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-6 mt-10">Пройдите регистрацию</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Shop Name Input */}
          <input
            type="text"
            name="shopname"
            placeholder="Название магазина"
            value={shop_name}
            onChange={handleShopNameChange}
            required
            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-orange-500"
          />

          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
            required
            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-orange-500"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-orange-500"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full p-3 border border-gray-300  focus:outline-none focus:border-orange-500"
          />

          {/* Button Group */}
          <div className="flex justify-between">
            <button
              type="button"
              className="w-1/3 py-2 px-4 border border-orange-500 text-orange-500 hover:bg-orange-50"
              onClick={onClose}
            >
              ЗАКРЫТЬ
            </button>
            <button
              type="submit"
              className="w-1/3 py-2 px-4 bg-orange-500 text-white  hover:bg-orange-600"
            >
              Готово
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerSignup;
