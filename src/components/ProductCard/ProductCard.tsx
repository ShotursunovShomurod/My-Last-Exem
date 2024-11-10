// import { useState, useEffect } from "react";
import { FC,  } from "react";
import { FaRegHeart } from "react-icons/fa";
import roomIcon from "../../assets/Room.png";
import { Product } from "../../types";
import Kvadrat from "../../assets/Area.png";
import Condition from "../../assets/Condition.png";
import Eye from "../../assets/Eye.png";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  viewMode: "list" | "grid";
}

const ProductCard: FC<ProductCardProps> = ({ product, viewMode }) => {
  // const [showModal, setShowModal] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const userToken = localStorage.getItem("userToken");
  //   setIsLoggedIn(!!userToken);
  // }, []);

  // const closeModal = () => setShowModal(false);

  return (
    <div
      className={`relative rounded-xl bg-white ${
        viewMode === "grid" ? "w-[390px]" : "w-full"
      } pb-[10px] flex ${
        viewMode === "list"
          ? "flex-row items-center p-4 border-r-[10px]"
          : "flex-col border-b-[10px]"
      } border-[#FCA311]`}
    >
<Link to={`/product/${product.id}`}>
  <img
    className={`object-contain ${
      viewMode === "grid" ? "w-full h-[231px]" : "w-[120px] h-[120px]"
    } bg-white rounded-tl-xl rounded-tr-xl`}
    src={product.url[0] || "default_image_url"}
    alt="Product"
  />
</Link>
      <div className={`p-5 ${viewMode === "list" ? "flex-1 pl-6" : ""}`}>
        <h3
          className={`text-[22px] font-semibold ${
            viewMode === "list" ? "mb-2" : "mb-[20px]"
          } truncate`}
        >
          {product.title || "Hi-Tech Penthouse"}
        </h3>
        <div className="flex justify-between text-[#666]">
          <div className="flex flex-col gap-[32px] space-x-2">
            <p className="text-2xl font-light text-[#6A9B0C]">
              $ {product.price || "750,000"}
            </p>
            <div className="flex items-center gap-[10px]">
              <p className="flex items-center gap-[7px]">
                <img src={roomIcon} alt="rooms" className="inline w-5 h-5" /> 28
              </p>
              <p className="flex items-center gap-[7px]">
                <img src={Kvadrat} alt="" /> 100 m²
              </p>
              <p className="flex items-center gap-[7px]">
                <img src={Condition} alt="" />
                Евроремонт
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end gap-y-8 h-full">
            <button className="flex flex-col items-end gap-[40px]">
              <div>
                    <button>
                    <FaRegHeart className="active:scale-125 transition-all text-2xl text-gray-500" />
                    </button>             
                   </div>
              <div className="flex items-center gap-[6px]">
                <img src={Eye} alt="" />
                <p>23456</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[15px]">
          <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
          <p className="text-[#999] text-xs">22:38 25-Окт</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;