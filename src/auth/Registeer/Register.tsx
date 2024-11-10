import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import border from "../../assets/Vector 8.png";

const RegisterForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    // Save user data to localStorage
    const userData = {
      phone,
      name,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Reset form fields after submission
    setPhone("");
    setName("");
    setPassword("");
    setConfirmPassword("");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCA311]">
      <div className="bg-white shadow-md w-full rounded-[25px] max-w-md">
        <div className="w-full rounded-t-[25px] bg-[#FDB541] p-2 flex items-center justify-center">
          <h2 className="text-2xl font-bold pt-[58px] text-center text-white">
            Зарегистрироваться
          </h2>
        </div>
        <img src={border} alt="Border decoration" />
        
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label className="text-orange-500 font-bold">НОМЕР ТЕЛЕФОНА</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 99 880 80-80"
              className="border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
              required
            />
          </div>

          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-gray-500 font-bold">ИМЯ</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              className="border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label className="text-gray-500 font-bold">ПАРОЛЬ</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col">
            <label className={`font-bold ${passwordMatch ? "text-gray-500" : "text-red-500"}`}>
              ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className={`border-b-2 py-2 outline-none ${
                passwordMatch ? "border-gray-300 focus:border-orange-500" : "border-red-500"
              }`}
              required
            />
            {!passwordMatch && (
              <span className="text-red-500 text-sm">Пароли не совпадают</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FCA311] text-white py-2 rounded mt-4 transition-all hover:bg-orange-600"
          >
            Далее
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-500 mt-4">
            Уже есть аккаунт?{" "}
            <Link to="/login">
              <button className="text-orange-500 font-bold">Войти</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;







// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// import border from "../../assets/Vector 8.png";

// const RegisterForm = () => {
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordMatch, setPasswordMatch] = useState(true);

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setPasswordMatch(false);
//       return;
//     } else {
//       setPasswordMatch(true);
//     }

//     // Save to localStorage
//     const userData = {
//       phone,
//       name,
//       password,
//     };
//     localStorage.setItem("userData", JSON.stringify(userData));

//     // Reset form fields
//     setPhone("");
//     setName("");
//     setPassword("");
//     setConfirmPassword("");
    
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#FCA311]">
//       <div className="bg-white shadow-md w-full rounded-[25px] max-w-md">
//         <div className="w-full rounded-t-[25px] bg-[#FDB541] p-2 flex items-center justify-center">
//           <h2 className="text-2xl font-bold mb-6 pt-[58px] text-center text-white">
//             Зарегистрироваться
//           </h2>
//         </div>
//         <img src={border} alt="" />
//         <form onSubmit={handleSubmit} className="space-y-4 p-6">
//           <div className="flex flex-col">
//             <label className="text-orange-500 font-bold">НОМЕР ТЕЛЕФОНА</label>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="+998 99 880 80-80"
//               className="border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
//               required
//             />
//           </div>

//           {/* Name */}
//           <div className="flex flex-col">
//             <label className="text-gray-500 font-bold">ИМЯ</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Введите ваше имя"
//               className="border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label className="text-gray-500 font-bold">ПАРОЛЬ</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="********"
//               className="border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label
//               className={`font-bold ${
//                 passwordMatch ? "text-gray-500" : "text-red-500"
//               }`}
//             >
//               ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
//             </label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="********"
//               className={`border-b-2 py-2 outline-none ${
//                 passwordMatch
//                   ? "border-gray-300 focus:border-orange-500"
//                   : "border-red-500"
//               }`}
//               required
//             />
//             {!passwordMatch && (
//               <span className="text-red-500 text-sm">Пароли не совпадают</span>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#FCA311] text-white py-2 rounded mt-4 transition-all hover:bg-orange-600"
//           >
//             Далее
//           </button>

//           <p className="text-center text-gray-500 mt-4">
//             Уже есть аккаунт?{" "}
//             <Link to="/login">
//               <button className="text-orange-500 font-bold">Войти</button>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;