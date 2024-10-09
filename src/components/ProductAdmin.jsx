import productImage from "/public/WhiteBg.png"; // You can change this to dynamic images if needed

const ProductCard = ({ product }) => {
  return (
    <div className="mx-auto flex gap-5">
      <img
        src={productImage} // You can replace this with actual image URL from product if available
        alt="product_image"
        className="w-[250px] h-[250px] object-cover"
      />
      <div className="w-full max-w-[350px]">
        <div className="text-[#363636] text-2xl lg:text-[25px] font-bold mb-2 mt-[-7px]">
          {product.name}
        </div>
        <div className="text-base lg:text-[25px] font-normal text-[#363636] leading-7">
          {product.description}
        </div>
        <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[25px] font-bold mb-20 mt-3">
          <div>{product.price}₽</div>
          <div className="opacity-50">/1м²</div> {/* Adjust if needed */}
        </div>
        <div className="flex items-center justify-between flex-row gap-4"></div>
      </div>
    </div>
  );
};

export default ProductCard;
