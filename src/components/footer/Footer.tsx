import { FaTelegramPlane, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-4 border-t">
      <div className="container px-[75px] mx-auto flex justify-between items-start space-y-4 md:space-y-0 md:space-x-16 flex-col md:flex-row">
        <div>
          <h2 className="font-semibold text-lg mb-2">Полезные Ссылки</h2>
          <ul className="text-gray-500 space-y-1">
            <li>О Нас</li>
            <li>Пользовательское Соглашение</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">Наши Страницы</h2>
          <div className="flex justify-center space-x-4  text-gray-500">
            <FaTelegramPlane className="hover:text-blue-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-800 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-lg" />
            <div>
              <p>Тех. поддержка</p>
            </div>
          </div>
            <div>
              <p className="font-semibold text-lg">+998 99 880 80-80</p>
            </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-lg" />
            <p>info@utopia.uz</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiHome className="text-lg" />
            <p>г. Ташкент, Чиланзарский р-н, ул. Гулхани, д-52</p>
          </div>
        </div>
      </div>

      <div className="text-gray-500 container mx-auto pl-[75px] text-sm mt-6">
        © 2021 <span className="font-semibold text-gray-700">Utopia</span> | Все права защищены
      </div>
    </footer>
  );
};

export default Footer;