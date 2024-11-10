import {FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../redux/api/product-api';

// interface DATA {
//   id:string,
//   url: string[],
//   title:string,
//   description:string,
//   price:number
// }

const Detail: FC = () => {
  const navigate:any = useNavigate()
  const {id} = useParams()
  const {data} =  useGetProductByIdQuery(id)


  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  
  return (
    <div className=" pl-[75px] pt-[35px] mx-auto p-6 bg-gray-50">
      <div className='container mx-auto'>
      <button onClick={()=>navigate(-1)}>{"<- Вернуться"}</button>
      <div className="grid grid-cols-1 pt-[39px] lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={data?.url[0]}
            alt="Main View"
            className="w-full h-80 object-contain rounded-lg"
            />
          

          <div className="flex space-x-2">
            {
              data?.url?.map((e:any, inx:any)=>(

                <img key={inx} src={e} alt="View 1" className="w-1/3 h-20 object-contain rounded-lg" />
              ))
            }
          </div>


          <div className="bg-gray-50 flex flex-col items-end justify-center gap-[24px] p-4 text-center">
            <div className='flex gap-[22px]'>
            <p className="text-[22px] text-[#161A1D] mt-3 font-semibold">+998 99 555 60-70</p>
            <button className="mt-3 w-[182px] h-[40px] bg-yellow-500  px-4 py-2 rounded-lg">
              Показать на карте
            </button>
            </div>
            <div className='flex gap-[22px]'>
            <p className="text-[18px] w-[300px] text-end font-sans mt-3 font-semibold">г.Ташкент, Чиланзарский р-н
            ул.Улица, Дом 65</p>
            <button className="mt-3 bg-yellow-500  px-4 py-2 rounded-lg">
              Показать на карте
            </button>
            </div>
          </div>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093667!2d144.95373531550466!3d-37.816279279751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b0e1fbef%3A0xfb9e5a0a3b6b8f55!2sTashkent!5e0!3m2!1sen!2s!4v1617182346123!5m2!1sen!2s"
              width="700px"
              height="435px"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
              ></iframe>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[25px] max-w-[545px] space-y-4">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">{data?.title}</h2>
            <p className="text-2xl text-green-600 mt-2">$ {data?.price}</p>
            <p className="text-gray-500">Стоимость м²: $18,950</p>
            <p className="text-red-500">Продано на 65%</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Месячный платеж: <span className="font-semibold">1%</span></p>
              <p>Скидка: <span className="font-semibold">11%</span></p>
              <p>Акция: <span className="font-semibold">Нет</span></p>
              <p>Комиссионное: <span className="font-semibold">Есть</span></p>
            </div>
            <div className="text-sm">
              <p>Рассрочка: <span className="font-semibold">Есть</span></p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Характеристики</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Количество комнат: 28</li>
              <li>Площадь: 100 м²</li>
              <li>Количество этажей: 3</li>
              <li>Санузел: 10</li>
              <li>Состояние: Евроремонт</li>
              <li>Год постройки: 2020</li>
              <li>Высота потолка: 3.5 м</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">В доме имеется</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Интернет', 'Таҳорат', 'Мобил', 'Кондиционер'].map((facility, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
                  {facility}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Рядом имеется</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Школа', 'Детский сад', 'Парк', 'Бассейн', 'Детская площадка'].map((amenity, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Дополнительная информация</h3>
            <p className="text-gray-600">
{data?.description}            </p>
          </div>
        </div>
      </div>
              </div>
    </div>
  );
};

export default Detail;