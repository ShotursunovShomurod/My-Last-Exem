import { FC, useState, useEffect } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in at initial render
    const userToken = localStorage.getItem("userToken");
    setIsLoggedIn(!!userToken);
  }, []);

  const handleHeartClick = () => {
    if (isLoggedIn) {
      // User is logged in, proceed with adding to favorites
      console.log("Added to favorites");
    } else {
      // User is not logged in, show the modal
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

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
      <img
        className={`object-contain ${
          viewMode === "grid" ? "w-full h-[231px]" : "w-[120px] h-[120px]"
        } bg-white rounded-tl-xl rounded-tr-xl`}
        src={product.images[0] || "default_image_url"}
        alt="Product"
      />
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
            <button onClick={handleHeartClick} className="flex flex-col items-end gap-[40px]">
              <div>
                <FaRegHeart className="active:scale-125 transition-all text-2xl text-gray-500" />
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg w-[300px] relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-center text-lg font-semibold mb-4">Login qilish</h2>
            <Link to="/login">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={closeModal}
              >
                Login qilish
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;





// import { FC, useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
// import roomIcon from "../../assets/Room.png";
// import { Product } from "../../types";
// import Kvadrat from "../../assets/Area.png";
// import Condition from "../../assets/Condition.png";
// import Eye from "../../assets/Eye.png";
// import { Link } from "react-router-dom";

// interface ProductCardProps {
//   product: Product;
//   viewMode: "list" | "grid";
// }

// const ProductCard: FC<ProductCardProps> = ({ product, viewMode }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleHeartClick = () => {
//     const isLoggedIn = localStorage.getItem("userToken"); // login ma'lumotini tekshirish
//     if (isLoggedIn) {
//       // User login qilingan bo'lsa, sevimlilarni qo'shish funksiyasi bu yerga yoziladi.
//       console.log("Added to favorites");
//     } else {
//       setShowModal(true); // Login bo'lmagan bo'lsa, modalni ochish
//     }
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <div
//       className={`relative rounded-xl bg-white ${
//         viewMode === "grid" ? "w-[390px]" : "w-full"
//       } pb-[10px] flex ${
//         viewMode === "list"
//           ? "flex-row items-center p-4 border-r-[10px]"
//           : "flex-col border-b-[10px]"
//       } border-[#FCA311]`}
//     >
//       <img
//         className={`object-contain ${
//           viewMode === "grid" ? "w-full h-[231px]" : "w-[120px] h-[120px]"
//         } bg-white rounded-tl-xl rounded-tr-xl`}
//         src={product.images[0] || "default_image_url"}
//         alt="Product"
//       />
//       <div className={`p-5 ${viewMode === "list" ? "flex-1 pl-6" : ""}`}>
//         <h3
//           className={`text-[22px] font-semibold ${
//             viewMode === "list" ? "mb-2" : "mb-[20px]"
//           } truncate`}
//         >
//           {product.title || "Hi-Tech Penthouse"}
//         </h3>
//         <div className="flex justify-between text-[#666]">
//           <div className="flex flex-col gap-[32px] space-x-2">
//             <p className="text-2xl font-light text-[#6A9B0C]">
//               $ {product.price || "750,000"}
//             </p>
//             <div className="flex items-center gap-[10px]">
//               <p className="flex items-center gap-[7px]">
//                 <img src={roomIcon} alt="rooms" className="inline w-5 h-5" /> 28
//               </p>
//               <p className=" flex items-center gap-[7px]">
//                 <img src={Kvadrat} alt="" /> 100 m²
//               </p>
//               <p className="flex items-center gap-[7px]">
//                 <img src={Condition} alt="" />
//                 Евроремонт
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col justify-between items-end gap-y-8 h-full">
//             <button onClick={handleHeartClick} className="flex flex-col items-end gap-[40px]">
//               <div>
//                 <FaRegHeart className="active:scale-125 transition-all text-2xl text-gray-500" />
//               </div>
//               <div className="flex items-center gap-[6px]">
//                 <img className="" src={Eye} alt="" />
//                 <p>23456</p>
//               </div>
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center justify-between mt-[15px]">
//           <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
//           <p className="text-[#999] text-xs">22:38 25-Окт</p>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded-lg w-[300px] relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600"
//               onClick={closeModal}
//             >
//               X
//             </button>
//             <h2 className="text-center text-lg font-semibold mb-4">Login qilish</h2>
//             <Link to="/login">
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded w-full"
//               onClick={() => {
//                 console.log("Redirecting to login...");
//                 closeModal();
//               }}
//               >
//               Login qilish
//             </button>
//               </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;




// // import { FC } from "react";
// // import { FaRegHeart } from "react-icons/fa";
// // import roomIcon from "../../assets/Room.png";
// // import { Product } from "../../types";
// // import Kvadrat from "../../assets/Area.png";
// // import Condition from "../../assets/Condition.png";
// // import Eye from "../../assets/Eye.png";

// // interface ProductCardProps {
// //   product: Product;
// //   viewMode: "list" | "grid";
// // }

// // const ProductCard: FC<ProductCardProps> = ({ product, viewMode }) => (
// //   <div
// //     className={`relative rounded-xl bg-white ${
// //       viewMode === "grid" ? "w-[390px]" : "w-full"
// //     } pb-[10px] flex ${
// //       viewMode === "list"
// //         ? "flex-row items-center p-4 border-r-[10px]"
// //         : "flex-col border-b-[10px]"
// //     } border-[#FCA311]`}
// //   >
// //     <img
// //       className={`object-contain ${
// //         viewMode === "grid" ? "w-full h-[231px]" : "w-[120px] h-[120px]"
// //       } bg-white rounded-tl-xl rounded-tr-xl`}
// //       src={product.images[0] || "default_image_url"}
// //       alt="Product"
// //     />
// //     <div className={`p-5 ${viewMode === "list" ? "flex-1 pl-6" : ""}`}>
// //       <h3
// //         className={`text-[22px] font-semibold ${
// //           viewMode === "list" ? "mb-2" : "mb-[20px]"
// //         } truncate`}
// //       >
// //         {product.title || "Hi-Tech Penthouse"}
// //       </h3>
// //       <div className="flex justify-between text-[#666]">
// //         <div className="flex flex-col gap-[32px] space-x-2">
// //           <p className="text-2xl font-light text-[#6A9B0C]">
// //             $ {product.price || "750,000"}
// //           </p>
// //           <div className="flex items-center gap-[10px]">
// //             <p className="flex items-center gap-[7px]">
// //               <img src={roomIcon} alt="rooms" className="inline w-5 h-5" /> 28
// //             </p>
// //             <p className=" flex items-center gap-[7px]">
// //               <img src={Kvadrat} alt="" /> 100 m²
// //             </p>
// //             <p className="flex items-center gap-[7px]">
// //               <img src={Condition} alt="" />
// //               Евроремонт
// //             </p>
// //           </div>
// //         </div>
// //         <div className="flex flex-col justify-between items-end gap-y-8 h-full">
// //           <button className="flex flex-col items-end gap-[40px]">
// //             <div>
// //               <FaRegHeart className="active:scale-125 transition-all text-2xl text-gray-500" />
// //             </div>
// //             <div className="flex items-center gap-[6px]">
// //               <img className="" src={Eye} alt="" />
// //               <p>23456</p>
// //             </div>
// //           </button>
// //         </div>
// //       </div>
// //       <div className="flex items-center justify-between mt-[15px]">
// //         <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// //         <p className="text-[#999] text-xs">22:38 25-Окт</p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default ProductCard;

// // import React from 'react';
// // import { FaRegHeart } from "react-icons/fa";
// // import roomIcon from "../../assets/Room.png";
// // import { Product } from "../../types";

// // interface ProductCardProps {
// //   product: Product;
// //   viewMode: 'list' | 'grid';
// // }

// // const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => (
// //   <div className={`relative rounded-xl bg-white ${viewMode === 'grid' ? 'w-[390px]' : 'w-full'} pb-[10px] flex ${
// //     viewMode === 'list' ? 'flex-row items-center p-4' : 'flex-col'
// //   } border-b-[10px] border-[#FCA311]`}>
// //     <img
// //       className={`object-cover ${viewMode === 'grid' ? 'w-full h-[231px]' : 'w-[120px] h-[120px]'} bg-white rounded-tl-xl rounded-tr-xl`}
// //       src={product.images[0] || 'default_image_url'}
// //       alt="Product"
// //     />
// //     <div className={`p-5 ${viewMode === 'list' ? 'flex-1 pl-6' : ''}`}>
// //       <h3 className={`text-[22px] font-semibold ${viewMode === 'list' ? 'mb-2' : 'mb-[20px]'} truncate`}>
// //         {product.title || "Hi-Tech Penthouse"}
// //       </h3>
// //       <div className="flex justify-between text-[#666]">
// //         <div className="flex items-center space-x-2">
// //           <p><img src={roomIcon} alt="rooms" className="inline w-5 h-5" /> 28</p>
// //           <p>5 - Bedrooms</p>
// //           <p>3 - Bathrooms</p>
// //           <p>100 m²</p>
// //         </div>
// //         <div className="flex flex-col justify-between items-end gap-y-8 h-full">
// //           <button className="active:scale-125">
// //             <FaRegHeart className="text-2xl text-gray-500" />
// //           </button>
// //           <p className="text-2xl font-light text-[#6A9B0C]">$ {product.price || "750,000"}</p>
// //         </div>
// //       </div>
// //       <div className="flex items-center justify-between mt-[15px]">
// //         <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// //         <p className="text-[#999] text-xs">22:38 25-Окт</p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default ProductCard;
