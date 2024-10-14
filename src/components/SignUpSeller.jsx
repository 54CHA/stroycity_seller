import { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link, useNavigate } from "react-router-dom";
import "toastr/build/toastr.min.css";

const AuthPage = () => {
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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-[90%] sm:w-[70%] mn:w-[50%] lg:w-[40%] xl:w-[30%] 3xl:w-[20%]">
        <h2 className="text-2xl font-bold mb-6">{"Регистрация"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              Название магазина
            </label>
            <input
              type="text"
              id="shopname"
              value={shop_name}
              onChange={handleShopNameChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              Имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-[#ff8800] text-white px-4 py-2 rounded-md transition-all hover:bg-[#ff5500] w-full"
            >
              {"Зарегистрироваться"}
            </button>
            <p className="m-auto mt-1">
              Уже есть аккаунт?
              <Link to="/SignIn" className=" text-[#ff8800] mx-1">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className=""></div>
    </div>
  );
};

export default AuthPage;
