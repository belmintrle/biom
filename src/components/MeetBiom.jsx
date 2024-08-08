import { ButtonDark } from "./Buttons";
import AutoScrollText from "./AutoScrollText";
import section2bg from "../assets/images/section2bg.png";
import section2icon1 from "../assets/images/beautiful-design-icon.png";
import section2icon2 from "../assets/images/durable-stainless-steel-icon.png";
import section2icon3 from "../assets/images/non-toxic-icon.png";

const MeetBiom = () => {
  return (
    <div className='min-h-[730px] w-full relative overflow-hidden text-teal-dark font-normal flex items-end'>
      <img src={section2bg} alt="biom product image" className="absolute lg:static w-full h-auto z-10" />
      <AutoScrollText />
      <div className="static lg:absolute inset-0 pb-[50%] lg:pb-[0%] pt-[50%] lg:pt-[0%] pl-[25px] lg:pl-[50%] pr-[25px] lg:pr-[140px] flex flex-col justify-center items-start text-[18px] leading-[28px] z-20">
        <p className="text-[14px] tracking-[2.1px] uppercase">The Biom Dispenser</p>
        <h1 className="font-black font-chronicle text-[36px] mt-[8px]">Redefine your experience of clean.</h1>
        <p className="pt-[12px]">A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach.</p>
        <div className="flex flex-row items-center gap-[22px] mt-[42px]">
          <img src={section2icon1} className="h-[66px] w-auto" alt="Beautiful design icon" />
          <p>Beautiful design, fit for your home</p>
        </div>
        <div className="flex flex-row items-center gap-[22px] mt-[35px]">
          <img src={section2icon2} className="h-[66px] w-auto" alt="Durable stainless steel icon" />
          <p>Durable stainless steel exterior</p>
        </div>
        <div className="flex flex-row items-center gap-[22px] mt-[35px]">
          <img src={section2icon3} className="h-[66px] w-auto" alt="Non toxic icon" />
          <p>Non-toxic, BPA free</p>
        </div>
        <ButtonDark link="#" className="mt-[45px]">
          Shop Now
        </ButtonDark>
      </div>
    </div>
  )
}

export default MeetBiom;