import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'
import brand7 from '../assets/brand7.png'
import brand8 from '../assets/brand8.png'
import brand9 from '../assets/brand9.png'
import brand10 from '../assets/brand10.png'
import brand11 from '../assets/brand11.png'
import brand12  from '../assets/brand12.png'
import { RxArrowTopRight } from 'react-icons/rx'

const Brands = () => {
  return (
    <div className='h-[665.5px] w-full flex flex-col items-center justify-center'>
      {/* brands  */}
      <div className=' w-[831px] h-[247px]'>
          <div className='flex justify-between items-center'>
                 <img src={brand1}  alt="" />
                 <img src={brand2}  alt="" />
                 <img src={brand3}  alt="" />
          </div>
            <div className="flex justify-between items-center">
                 <img src={brand4}  alt="" />
                 <img src={brand5}  alt="" />
                 <img src={brand6}  alt="" />
          </div>
           <div className="flex justify-between items-center">
                 <img src={brand7}  alt="" />
                 <img src={brand8}  alt="" />
                 <img src={brand9}  alt="" />
          </div>
            <div className="flex justify-between items-center">
                 <img src={brand10}  alt="" />
                 <img src={brand11}  alt="" />
                 <img src={brand12}  alt="" />
          </div>
      </div>
      {/* buttons  */}
      <div className='mt-14 flex justify-between items-center gap-x-[60px]'>
        <button className='ml-[22px] mr-0'> 
          <div className='flex justify-between items-center'>
            <div className='mr-[20px]'>What we do</div> 
            <RxArrowTopRight className='text-white' size={30}/>
          </div> 
        </button>
        <button>
          Testmonials
        </button>
      </div>
    </div>
  )
}

export default Brands