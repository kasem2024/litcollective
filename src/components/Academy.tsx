
import bestwork from '../assets/bestwork.png'
import academy from '../assets/academy.png'
import academy1 from '../assets/academy1.png'
const Academy = () => {
  return (
    <div className='h-[720px] flex justify-center items-center'>
        <div className='min-w-[700px] relative'>
          <img src={bestwork} alt="" className='w-full h-full'/>
          <div className='absolute bottom-0 left-0 px-12'>
              <p className='text-5xl font-light w-[600px] p-4 '>it's als about creating the best work environment.</p>
              <div className='p-4'>
                <div className='bg-[#3549CB] text-white border-none cursor-pointer px-[22px] w-fit py-[14px]'>About us</div>
              </div>
          </div>
        </div>
        <div className='min-w-[700px] relative'>
          <img src={academy} alt="" className='w-full h-full'/>
          <div className='absolute top-0 left-0 px-12 mt-12'>
            <div><img src={academy1} alt="" /></div>
            <p className='font-light text-5xl'>Sharing Knowledge and growing as a community.</p>
          </div>
        </div>
    </div>
  )
}

export default Academy
