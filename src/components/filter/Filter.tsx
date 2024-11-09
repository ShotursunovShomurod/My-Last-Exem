import  { useState } from "react";
import logo from "../../images/full-logo-to-home.svg";
import humburger from "../../assets/Menu.png";
import { Link } from "react-router-dom";

const Filter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Продажа");
  const [isRemontSelected, setIsRemontSelected] = useState<boolean>(false);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleRemontSelect = () => {
    setIsRemontSelected(!isRemontSelected);
  };

  return (
    <div className="fixed top-0 left-0 w-[400px] h-screen px-[38px] pt-[38px] bg-white shadow-lg">
      <div className="mb-[35px]">
        <img className="cursor-pointer" src={humburger} alt="Menu" />
      </div>

      <div className="border-b pb-[26px] mb-[33px]">
        <Link to="/">
        <img src={logo} alt="Utopia logo" />
        </Link>
      </div>

      <p className="text-lg font-semibold mb-[33px]">Фильтр</p>

      <div className="flex items-center gap-3 mb-[30px]">
        {["Продажа", "Аренда", "Сожит."].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-md ${
              activeFilter === filter
                ? "bg-[#FCA311]"
                : "bg-[#F3F3F3]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 mb-5">
        {["Категория недвижимости", "Область", "Район"].map((label, idx) => (
          <select
            key={idx}
            className="w-full px-4 py-2 bg-[#F3F3F3] rounded-md cursor-pointer"
          >
            <option>{label}</option>
          </select>
        ))}

        <select
          onChange={handleRemontSelect}
          className="w-full px-4 py-2 bg-[#F3F3F3] rounded-md cursor-pointer"
        >
          <option>Ремонт</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="flex items-center justify-between mb-5 transition-all duration-300 ease-in-out">
        <label className="flex-grow mr-4">Комнат</label>
        <input
          type="number"
          placeholder="от"
          className="w-20 px-2 py-2 bg-[#F3F3F3] rounded-md text-center"
        />
        <span className="mx-2">до</span>
        <input
          type="number"
          placeholder="до"
          className="w-20 px-2 py-2 bg-[#F3F3F3] rounded-md text-center"
        />
      </div>
      <div className="flex items-center justify-between mb-5">
        <label className="flex-grow mr-4">Площадь</label>
        <input
          type="number"
          placeholder="от"
          className="w-20 px-2 py-2 bg-[#F3F3F3] rounded-md text-center"
        />
        <span className="mx-2">до</span>
        <input
          type="number"
          placeholder="до"
          className="w-20 px-2 py-2 bg-[#F3F3F3] rounded-md text-center"
        />
        <span className="ml-2">м²</span>
      </div>

      
      <select
          className="w-full px-4 py-2 bg-[#F3F3F3] rounded-md cursor-pointer"
        >
          <option>Рядом</option>
          <option>Yes</option>
          <option>No</option>
        </select>

      <p className="mb-[11px] font-medium">Комиссионные</p>
      <div className="flex items-center justify-between pl-5 mb-6 gap-[45px]">
        <div className="flex gap-[34px]">
        <div className="flex items-center gap-2">
          <label>Да</label>
          <input type="radio" name="commission" className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-2">
          <label>Нет</label>
          <input type="radio" name="commission" className="cursor-pointer" />
        </div>
        </div>
        <button className="w-full py-3 font-semibold bg-[#FCA311] rounded-md">
          Применить
        </button>
      </div>
    </div>
  );
};

export default Filter;
