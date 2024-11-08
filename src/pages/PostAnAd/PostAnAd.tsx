import React, { useState } from "react";

interface FormData {
  region: string;
  city: string;
  neighborhood: string;
  street: string;
  houseNumber: string;
  price: number | "";
  area: number | "";
  residential: boolean;
  prepayment: string;
  materials: string;
  floors: number | "";
  yearBuilt: number | "";
  ceilingHeight: number | "";
  heatingType: string;
  coolingType: string;
  repair: string;
  hasBalcony: boolean;
  phoneNumber: string;
  additionalInfo: string;
}

const PostAnAd: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    region: "",
    city: "",
    neighborhood: "",
    street: "",
    houseNumber: "",
    price: "",
    area: "",
    residential: true,
    prepayment: "",
    materials: "",
    floors: "",
    yearBuilt: "",
    ceilingHeight: "",
    heatingType: "",
    coolingType: "",
    repair: "",
    hasBalcony: false,
    phoneNumber: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Разместить объявление</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Продажа</h2>

          {/* Location Information */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Регион</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Выберите регион</option>
                <option value="region1">Регион 1</option>
                <option value="region2">Регион 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Город</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Выберите город</option>
                <option value="city1">Город 1</option>
                <option value="city2">Город 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Цена (USD)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Цена"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Общая площадь (кв.м)</label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Площадь"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Residential Option */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Жилой</label>
            <div className="flex items-center mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="residential"
                  value="yes"
                  checked={formData.residential === true}
                  onChange={() => setFormData((prevData) => ({ ...prevData, residential: true }))}
                  className="mr-1"
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="residential"
                  value="no"
                  checked={formData.residential === false}
                  onChange={() => setFormData((prevData) => ({ ...prevData, residential: false }))}
                  className="mr-1"
                />
                Нет
              </label>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Материалы</label>
              <input
                type="text"
                name="materials"
                value={formData.materials}
                onChange={handleChange}
                placeholder="Материалы"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Количество этажей</label>
              <input
                type="number"
                name="floors"
                value={formData.floors}
                onChange={handleChange}
                placeholder="Этажей"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Номер телефона</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+998"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Дополнительная информация</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Введите текст"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white p-3 rounded-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Опубликовать
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostAnAd;