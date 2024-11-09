import { FaRegUser, FaRegHeart, FaWallet, FaIdBadge } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { FC } from "react";

const ProfilePage: FC = () => {
  const navigate = useNavigate();


  const logoutHandler = () => {
    localStorage.clear(); // Barcha localStorage ma'lumotlarini o'chirish
    navigate("/login"); // Login sahifasiga yo'naltirish
  };
  

//   const logoutHandler = () => {
//     // Faqat sessiya kalitini o'chirish
//     localStorage.removeItem("authToken"); // Bu yerda "authToken" ni o'zingiz foydalangan kalit nomi bilan almashtiring
//     navigate("/login"); // Login sahifasiga yo'naltirish
// };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto pt-[68px] text-gray-800">
        <h2 className="text-[30px] ml-[75px] font-semibold mb-[54px]">
          Мой аккаунт
        </h2>

        <div className="flex min-h-screen ml-[75px] mr-[75px] mb-[86px] rounded-[25px] pl-[60px] pt-[60px] bg-white text-gray-800">
          <aside className="w-1/4 p-6 border-r border-gray-50">
            <nav className="space-y-[35px]">
              <SidebarItem icon={<FaRegUser />} text="Мой профиль" />
              <SidebarItem icon={<AiOutlineAppstore />} text="Мои объявления" />
              <Link to="/wishlist">
                <SidebarItem icon={<FaRegHeart />} text="Избранное" />
              </Link>
              <SidebarItem icon={<FaWallet />} text="Баланс: 10,000 UZS" />
              <SidebarItem icon={<FaIdBadge />} text="Ваш ID: 1001" />
              <SidebarItem icon={<FaRegUser />} text="Тарифы" />
              <SidebarItem icon={<MdRateReview />} text="Отзывы" />
            </nav>
            <div className="mt-[258px]">
              <button onClick={logoutHandler} className="flex items-center text-red-500 font-medium">
                <BiLogOut className="mr-2" /> Выйти из аккаунта
              </button>
            </div>
          </aside>

          <section className="w-3/4 p-4">
            <h2 className="text-[36px] font-bold mb-[68px]">Изменить профиль</h2>
            <form className="flex flex-col">
              <div className="mb-[30px]">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#999999]"
                >
                  Имя
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Александр"
                  className="mt-1 block w-[330px] outline-[#FCA311] p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#999999]"
                >
                  Телефон
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+998 99 895 90-95"
                  className="mt-1 block w-[330px] p-2 outline-[#FCA311] border border-gray-300 rounded bg-gray-100"
                />
              </div>

              <div className="mt-[30px] mb-[20px]">
                <button
                  type="button"
                  className="w-[254px] mt-6 py-2 px-4 bg-[#FCA311] text-white rounded font-semibold"
                >
                  Сохранить
                </button>
              </div>
            </form>

            <div className="mt-8 space-y-4">
              <div className="mb-[30px]">
                <p className="text-sm text-gray-500">Текущий тариф</p>
                <p className="text-lg font-semibold">Optimal Plan 3</p>
              </div>
              <div className="flex flex-col gap-[10px] mb-[30px]">
                <p className="text-sm text-gray-500">
                  Разрешение на размещение объявлений
                </p>
                <p className="text-green-500 text-[20px] font-medium">Есть ✓</p>
              </div>
              <div className="flex flex-col gap-[15px] mb-[30px]">
                <p className="text-sm text-gray-500">
                  Разрешение на просмотр дополнительной информации об объявлении
                </p>
                <p className="text-red-500 font-medium flex items-center">
                  Нет X
                  <button className="text-[#161A1D] ml-[55px]">
                    Подписаться на{" "}
                    <span className="text-[#FCA311]">тарифный план</span>
                  </button>
                </p>
              </div>

              <button className="w-[254px] py-2 px-4 bg-[#FCA311] text-white rounded font-semibold mt-6">
                Поднять объявление в топ
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

const SidebarItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-gray-700 hover:text-black">
    <div className="text-xl">{icon}</div>
    <p>{text}</p>
  </div>
);




// import { FaRegUser, FaRegHeart, FaWallet, FaIdBadge } from "react-icons/fa";
// import { AiOutlineAppstore } from "react-icons/ai";
// import { MdRateReview } from "react-icons/md";
// import { BiLogOut } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { FC } from "react";

// const ProfilePage: FC = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto pt-[68px] text-gray-800">
//         <h2 className="text-[30px] ml-[75px] font-semibold mb-[54px]">
//           Мой аккаунт
//         </h2>

//         <div className="flex min-h-screen ml-[75px] mr-[75px] mb-[86px] rounded-[25px] pl-[60px] pt-[60px] bg-white text-gray-800">
//           <aside className="w-1/4 p-6 border-r border-gray-50">
//             <nav className="space-y-[35px]">
//               <SidebarItem icon={<FaRegUser />} text="Мой профиль" />
//               <SidebarItem icon={<AiOutlineAppstore />} text="Мои объявления" />
//               <Link to="/wishlist">
//                 <SidebarItem icon={<FaRegHeart />} text="Избранное" />
//               </Link>
//               <SidebarItem icon={<FaWallet />} text="Баланс: 10,000 UZS" />
//               <SidebarItem icon={<FaIdBadge />} text="Ваш ID: 1001" />
//               <SidebarItem icon={<FaRegUser />} text="Тарифы" />
//               <SidebarItem icon={<MdRateReview />} text="Отзывы" />
//             </nav>
//             <div className="mt-[258px]">
//               <button className="flex items-center text-red-500 font-medium">
//                 <BiLogOut className="mr-2" /> Выйти из аккаунта
//               </button>
//             </div>
//           </aside>

//           <section className="w-3/4 p-4">
//             <h2 className="text-[36px] font-bold mb-[68px]">Изменить профиль</h2>
//             <form className="flex flex-col">
//               <div className="mb-[30px]">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-[#999999]"
//                 >
//                   Имя
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder="Александр"
//                   className="mt-1 block w-[330px] outline-[#FCA311] p-2 border border-gray-300 rounded"
//                 />
//               </div>

//               <div className="">
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-[#999999]"
//                 >
//                   Телефон
//                 </label>
//                 <input
//                   id="phone"
//                   type="text"
//                   placeholder="+998 99 895 90-95"
//                   className="mt-1 block w-[330px] p-2 outline-[#FCA311] border border-gray-300 rounded bg-gray-100 text-gray-500"
//                   disabled
//                 />
//               </div>

//               <div className="mt-[30px] mb-[20px]">
//                 <button
//                   type="button"
//                   className="w-[254px] mt-6 py-2 px-4 bg-[#FCA311] text-white rounded font-semibold"
//                 >
//                   Сохранить
//                 </button>
//               </div>
//             </form>

//             <div className="mt-8 space-y-4">
//               <div className="mb-[30px]">
//                 <p className="text-sm text-gray-500">Текущий тариф</p>
//                 <p className="text-lg font-semibold">Optimal Plan 3</p>
//               </div>
//               <div className="flex flex-col gap-[10px] mb-[30px]">
//                 <p className="text-sm text-gray-500">
//                   Разрешение на размещение объявлений
//                 </p>
//                 <p className="text-green-500 text-[20px] font-medium">Есть ✓</p>
//               </div>
//               <div className="flex flex-col gap-[15px] mb-[30px]">
//                 <p className="text-sm text-gray-500">
//                   Разрешение на просмотр дополнительной информации об объявлении
//                 </p>
//                 <p className="text-red-500 font-medium flex items-center">
//                   Нет X
//                   <button className="text-[#161A1D] ml-[55px]">
//                     Подписаться на{" "}
//                     <span className="text-[#FCA311]">тарифный план</span>
//                   </button>
//                 </p>
//               </div>

//               <button className="w-[254px] py-2 px-4 bg-[#FCA311] text-white rounded font-semibold mt-6">
//                 Поднять объявление в топ
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// const SidebarItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
//   <div className="flex items-center space-x-3 text-gray-700 hover:text-black">
//     <div className="text-xl">{icon}</div>
//     <p>{text}</p>
//   </div>
// );



// // import React from "react";
// // import { FaRegUser, FaRegHeart, FaWallet, FaIdBadge } from "react-icons/fa";
// // import { AiOutlineAppstore } from "react-icons/ai";
// // import { MdRateReview } from "react-icons/md";
// // import { BiLogOut } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const ProfilePage = () => {
// //   return (
// //     <div className="bg-gray-50 ">
// //     <div className="flex flex-col min-h-screen container mx-auto bg-gray-50 pt-[68px] text-gray-800">
// //       <div>
// //         <h2 className="text-[30px] ml-[75px] font-semibold mb-[54px]">
// //           Мой аккаунт
// //         </h2>
// //       </div>

// //       <div className="flex min-h-screen ml-[75px] mr-[75px] mb-[86px] rounded-[25px] pl-[60px] pt-[60px] bg-white text-gray-800">
// //         <aside className="w-1/4 p-6 border-r border-gray-50">
// //           <nav className="space-y-[35px]">
// //             <SidebarItem icon={<FaRegUser />} text="Мой профиль" />
// //             <SidebarItem icon={<AiOutlineAppstore />} text="Мои объявления" />
// //             <Link to="/wishlist">
// //             <SidebarItem icon={<FaRegHeart />} text="Избранное" />
// //             </Link>
// //             <SidebarItem icon={<FaWallet />} text="Баланс: 10,000 UZS" />
// //             <SidebarItem icon={<FaIdBadge />} text="Ваш ID: 1001" />
// //             <SidebarItem icon={<FaRegUser />} text="Тарифы" />
// //             <SidebarItem icon={<MdRateReview />} text="Отзывы" />
// //           </nav>
// //           <div className="mt-[258px]">
// //             <button className="flex items-center text-red-500 font-medium">
// //               <BiLogOut className="mr-2" /> Выйти из аккаунта
// //             </button>
// //           </div>
// //         </aside>

// //         <section className="w-3/4 p-4">
// //           <h2 className="text-[36px] font-bold mb-[68px]">Изменить профиль</h2>
// //           <form className="flex flex-col">
// //             <div className="mb-[30px]">
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-[#999999]"
// //               >
// //                 Имя
// //               </label>
// //               <input
// //                 id="name"
// //                 type="text"
// //                 placeholder="Александр"
// //                 className="mt-1 block w-[330px] outline-[#FCA311] p-2 border border-gray-300 rounded"
// //               />
// //             </div>

// //             <div className="">
// //               <label
// //                 htmlFor="phone"
// //                 className="block text-sm font-medium text-[#999999]"
// //               >
// //                 Телефон
// //               </label>
// //               <input
// //                 id="phone"
// //                 type="number"
// //                 placeholder="+998 99 895 90-95"
// //                 className="mt-1 block w-[330px] p-2 outline-[#FCA311] border border-gray-300 rounded bg-gray-100 text-gray-500"
// //               />
// //             </div>

// //             <div className="mt-[30px] mb-[20px]">
// //               <button
// //                 type="button"
// //                 className="w-[254px] mt-6 py-2 px-4 bg-[#FCA311] rounded font-semibold"
// //               >
// //                 Сохранить
// //               </button>
// //             </div>
// //           </form>

// //           <div className="mt-8 space-y-4">
// //             <div className="mb-[30px]">
// //               <p className="text-sm text-gray-500">Текущий тариф</p>
// //               <p className="text-lg font-semibold">Optimal Plan 3</p>
// //             </div>
// //             <div className="flex flex-col gap-[10px] mb-[30px]">
// //               <p className="text-sm text-gray-500">
// //                 Разрешение на размещение объявлений
// //               </p>
// //               <p className="text-green-500 text-[20px] font-medium">Есть ✓</p>
// //             </div>
// //             <div className="flex flex-col gap-[15px] mb-[30px]">
// //               <p className="text-sm text-gray-500">
// //                 Разрешение на просмотр дополнительной информации об объявлении
// //               </p>
// //               <p className="text-red-500 font-medium flex items-center">
// //                 Нет X
// //                 <button className="text-[#161A1D]  ml-[55px]">
// //                   Подписаться на{" "}
// //                   <span className="text-[#FCA311]">тарифный план</span>
// //                 </button>
// //               </p>
// //             </div>

// //             <button className="w-[254px] py-2 px-4 bg-[#FCA311] rounded font-semibold mt-6">
// //               Поднять объявление в топ
// //             </button>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;

// // const SidebarItem = ({
// //   icon,
// //   text,
// // }: {
// //   icon: React.ReactNode;
// //   text: string;
// // }) => (
// //   <div className="flex items-center space-x-3 text-gray-700 hover:text-black">
// //     <div className="text-xl">{icon}</div>
// //     <p>{text}</p>
// //   </div>
// // );
