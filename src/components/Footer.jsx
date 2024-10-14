const Footer = () => {
  return (
    <footer className=" w-[87%] m-auto transition-all">
      <div className=" justify-center gap-[200px] mt-20 mb-20 lg:text-[25px] font-thin text-gray-400 hidden mn:text-[18px] mn:flex">
        <div className="flex-col">
          <b className="text-black">Популярные разделы</b>
          <p className="hover:text-gray-600">
            <a href="/">О компании</a>
          </p>
          <p className="hover:text-gray-600">
            <a href="/">Оплата и доставка</a>
          </p>
        </div>
        <div className="flex-col">
          <b className="text-black">Наши контакты</b>
          <p>
            <a
              href="mailto:support@stroycity.ru"
              className="hover:text-gray-600"
            >
              support@stroycity.ru
            </a>
          </p>
        </div>
      </div>
      <hr className="border-gray-400 my-4" />
      <div className="text-gray-400 justify-between m-10 text-[18px] block mn:flex">
        <p className="my-2 mn:my-0">©2024 Stroycity. Все права защищены.</p>
        <p className="my-2 mn:my-0">Политика конфиденциальности</p>
        <p className="my-2 mn:my-0">
          <a href="/">Разработка сайта</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
