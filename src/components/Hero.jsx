import { ButtonLight } from "./Buttons";
import section1bg from "../assets/images/section1bg.jpg";

const Hero = () => {
  return (
    <div className='h-[calc(100vh-25px)] w-full relative'>
      <div className="absolute top-[68px] left-[25px] right-[25px] rounded-[14px] bottom-0 bg-origin-padding bg-center bg-no-repeat bg-cover lg:pl-[85px] pl-[15px] pr-[15px] flex flex-col justify-center" style={{ backgroundImage: `url(${section1bg})` }}>
        <h1 className="drop-shadow-md lg:drop-shadow-none font-chronicle font-black text-[56px] leading-[62px] tracking-[0px] text-gray-light max-w-[237px]">So fresh. So green.</h1>
        <p className="drop-shadow-md lg:drop-shadow-none mt-[14px] font-brandon font-normal text-[20px] leading-[28px] tracking-[0px] text-gray-light max-w-[407px]">We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free.</p>
        <ButtonLight link="#" className="mt-[24px]">
          Get Started
        </ButtonLight>
      </div>
    </div>
  )
}

export default Hero;