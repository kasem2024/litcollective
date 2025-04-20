import nominee from '../assets/nominee.png'
import { RxArrowTopRight } from "react-icons/rx";
const Hero = () => {
  return (
    <div className='flex justify-start items-center w-full h-[400px]'>
      <div className='mt-[100px]'>
        <img src={nominee} alt="" className='nowinee' />
      </div>
      <div className='flex-1 flex-col flex items-start justify-center  ml-[100px] mt-[200px]'>
        <div className='text-6xl font-light max-w-[500px] mb-[50px] font-sans'>
          We design experiences that move businesses to the future.
        </div>
        <div className='flex justify-start items-center w-full gap-x-[50px]'>
          <button className='ml-[22px] mr-0'> 
            <div className='flex justify-between items-center'>
              <div className='mr-[20px]'>Play showreal</div> 
              <RxArrowTopRight className='text-white' size={30}/>
            </div> 
          </button>
          <button>About us</button>
        </div>
      </div>
    </div>
  )
}

export default Hero