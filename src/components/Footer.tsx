
import bottom from '../assets/bottom.png'
import top from '../assets/up.png'

import { RxArrowTopRight } from 'react-icons/rx'

const Footer = () => {
  return (
    <div className='flex justify-center items-center relative h-[325px]'>
      <div className='absolute top-0 right-32'>
        <img src={bottom} alt="" />
      </div>
      <div className='absolute bottom-0 right-64'>
        <img src={top} alt="" />
      </div>
      <div className='w-full px-[100px] mt-3 '>
        <div className='flex justify-between items-start w-full'>
          <p className='text-4xl font-extralight w-[343px]'>
              Your business will never be the same  
          </p>
          <div className='flex justify-center items-center gap-x-[30px]'>
             <button className='ml-[22px] mr-0'> 
                <div className='flex justify-between items-center'>
                  <div className='mr-[20px]'>Talk to a specialist</div> 
                  <RxArrowTopRight className='text-white' size={30}/>
                </div> 
            </button>
            <div className='bg-[#3549CB] cursor-pointer text-white px-[25px] py-[16px]'>Get in touch</div>
          </div>
        </div>
        <div className='flex justify-between items-center mt-3 '>
            <p>LitCollective © 2025</p>
        </div>  
      </div>
    </div>
  )
}

export default Footer