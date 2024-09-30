import productImage from "/public/WhiteBg.png";

const ProductAdmin = () => {
  return (
    <div className="mx-auto flex gap-5">
      <img
        src={productImage}
        alt="product_image"
        className="w-[250px] h-[250px] object-cover"
      />
      <div className="w-full max-w-[350px] ">
        <div className="text-[#363636] text-2xl lg:text-[25px] font-bold mb-2 mt-[-7px]">
          Назв товара
        </div>
        <div className="text-base lg:text-[25px] font-normal text-[#363636] leading-7">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Litora tempus
          consequat interdum suscipit sodales condimentum auctor? Sit orci
          tempor cursus suspendi
        </div>
        <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[25px] font-bold mb-20 mt-3">
          <div>000₽</div>
          <div className="opacity-50">/1м²</div>
        </div>
        <div className="flex items-center justify-between flex-row gap-4"></div>
      </div>
    </div>
  );
};

export default ProductAdmin;
