
import handUp from '../assets/handUp.png'
import video from "../assets/video.png"
import handDwon from '../assets/handDown.png'
import  play from '../assets/play.png'
const Video = () => {
  return (
    <div className='h-[636px] relative flex justify-center items-center'>
      <div className='absolute top-0 left-0 w-[300px] h-[203px]'>
        <img src={handUp} alt="img " />
      </div>
      <div className='h-[514.5px] w-[760px] flex items-center justify-center'>
        <img src={video} alt="img" />
        <img className='absolute cursor-pointer' src={play} alt="" />
      </div>
      <div className='absolute bottom-0 right-0  w-[300px] h-[203px] hidden md:block'>
        <img src={handDwon} alt="img" />
      </div>
    </div>
  )
}

export default Video