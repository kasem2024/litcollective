import logo from '../assets/logo.png'
import homeLogo from '../assets/homeLogo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FlagIcon } from "react-flag-kit";

const Header = () => {
  return (
  <div className=' px-[10px] lg:px-[78px] text-white'>
      <div className='h-[84px] flex justify-between items-center '>
        <div className='hidden sm:block lg:w-[220px] md:w-[110px] w-[30px]'>
          <img src={logo} alt="logo" /> 
        </div>
        <div className='flex justify-between items-center flex-1'>
          <div className='flex-1 pl-[70px]'>
            <ul className='flex justify-evenly items-center'>
              <li className='hover:text-zinc-300 flex justify-center items-center relative cursor-pointer'> <img className='hidden md:block' src={homeLogo} alt="icon" /> <div className='absolute mr-[30px]  sm:m-0' >home</div></li>
              <li className='hover:text-zinc-300 cursor-pointer'>cases studies</li>
              <li className=' hover:text-zinc-300 cursor-pointer'>about us</li>
              <li className='hover:text-zinc-300 cursor-pointer'>careers</li>
              <li className='hover:text-zinc-300 cursor-pointer'>what we do</li>
              <li className='hover:text-zinc-300 cursor-pointer'>contact</li>
            </ul>
          </div>
          <div className='md:flex justify-between items-center hidden '>

            <FlagIcon code='US' size={18} className='mx-2'/>
            <p className='text-neutral-400'>EN-US</p>
            <div className='flex justify-center items-center mx-3'><MdKeyboardArrowDown size={26}/></div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Header