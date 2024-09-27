const Footer = () => {
  return (
    <footer className=" w-[87%] m-auto">
      <div className="flex justify-between mt-20 mb-20 text-[25px] font-thin text-gray-400">
        <div className="flex-col">
          <b className="text-black">Покупателям </b>
          <p>Вопросы и ответы</p>
          <br />
          <b className="text-black">Продавцам </b>
          <p>Стать продавцом</p>
          <br/>
          <b className="text-black">Курьерам </b>
          <p>Стать курьером</p>
        </div>
        <div className="flex-col">
          <b className="text-black">Каталог товаров</b>
          <p>Материалы</p>
          <p>Инструменты</p>
          <p>Сантехника</p>
          <p>Электрооборудование</p>
        </div>
        <div className="flex-col">
          <b className="text-black">Популярные разделы</b>
          <p>О компании</p>
          <p>Оплата и доставка</p>
          <p>Контакты</p>
        </div>
        <div className="flex-col">
          <b className="text-black">Наши контакты</b>
          <p>
            <a href="mailto:support@stroycity.ru">support@stroycity.ru</a>
          </p>
        </div>
      </div>
      <hr className="border-gray-400 my-4" />
      <div className="text-gray-400 flex justify-between m-10">
        <p>©2024 Stroycity. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
        <p>Разработка сайта</p>
      </div>
    </footer>
  );
};

export default Footer;
