import { FC } from 'react'
import { BsClipboard2 } from 'react-icons/bs';
import { CiHeart, CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Header:FC
 = () => {
  return (
     <header className='px-[75px]'>
       <div className='container mx-auto'>
       <div className='py-[33px]'> 
    <div className='flex justify-between gap-[40px]'>
      <div className='bg-[#F3F3F3] px-[20px] py-[10px] mr-60 flex items-center w-[300px]'>
        <input placeholder='Найти объявления...' className='flex-1 outline-none bg-inherit' type="text" />
        <button><CiSearch className='w-[25px] h-[25px]' /></button>
      </div>
      <div>
        <Link to="/PostAnAd">
        <button className='bg-[#FCA311] py-[15px] px-[19px] font-medium rounded-[5px]'><p>Разместить объявление</p></button>
        </Link>
      </div>
      <div className='flex items-center justify-center gap-[20px] text-[30px]'>
      <BsClipboard2 />
      <CiHeart />
      <CiUser />
      </div>
      <div className='py-[12px] px-[12px] flex items-center justify-center rounded-[5px] bg-[#F3F3F3]'>
        <select className='bg-inherit outline-none text-[#9A9A9A] flex  w-[75px] gap-[10px]' name="" id="">
          <option value="">RU</option>
          <option value="">RU</option>
          <option value="">RU</option>
        </select>
      </div>
    </div>
      </div>
       </div>
     </header>
  )
}

export default Header