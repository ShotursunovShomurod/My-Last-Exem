import { FC, useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';

const Login: FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(phone.trim() !== '' && password.length >= 6);
  }, [phone, password]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Faqat "Войти" tugmasini bosganda localStorage'ga saqlash
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);
    console.log('Logged in with:', { phone, password });

    // Ma'lumotlarni inputlardan tozalash
    setPhone('');
    setPassword('');

    // Sahifani yo'naltirish
    navigate('/');
  };

  return (
   <div className=''>
    <Header/>
     <div className="flex items-center justify-center overflow-y-hidden h-full py-[205px] bg-[#FFA500]">
      <div className="bg-white rounded-md p-8 w-[400px] shadow-lg">
        <h2 className="text-center text-lg font-semibold mb-6">Войти в аккаунт</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="text-sm text-gray-700">Номер телефона</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <span role="img" aria-label="phone">📞</span>
              <input
                type="text"
                required
                className="flex-grow outline-none ml-2"
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {phone.trim() === '' && (
              <p className="text-red-500 text-xs mt-1">Телефон номер обязательный</p>
            )}
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-700">Пароль</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <span role="img" aria-label="lock">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="flex-grow outline-none ml-2"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
            {password.length > 0 && password.length < 6 && (
              <p className="text-red-500 text-xs mt-1">Пароль должен содержать не менее 6 символов</p>
            )}
          </div>
          <div className="mb-4 text-sm text-[#FCA311] cursor-pointer">
            Забыли пароль?
          </div>
          <button
            type="submit"
            className={`w-full bg-[#FFA500] text-white py-2 rounded hover:bg-[#e69500] transition ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isFormValid}
          >
            Войти
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-500">
          Еще не зарегистрированы? 
          <Link to="/register">
          <button>
          <span className="text-[#FCA311] cursor-pointer">Создать аккаунт</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;