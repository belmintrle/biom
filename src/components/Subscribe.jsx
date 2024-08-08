import { ButtonDark } from "./Buttons";
import section6bg1 from "../assets/images/section6-1.jpg";
import section6bg2 from "../assets/images/section6-2.jpg";
import section6icon1 from "../assets/images/biodegradable-icon.png";
import section6icon2 from "../assets/images/plastic-free-icon.png";
import section6icon3 from "../assets/images/plant-based-icon.png";

const Subscribe = () => {
  return (
    <div className='min-h-[calc(100vh-68px)] lg:min-h-fit w-full relative grid grid-rows-2 lg:grid-rows-none grid-cols-none lg:grid-cols-2 px-[25px] lg:px-[69px] my-[90px]'>
      <div className="absolute rounded-[12px] bg-teal-light top-[36px] bottom-[49px] right-[calc(50%-160px)] lg:right-[69px] left-[calc(50%-160px)]">
      </div>
      <div className="relative w-full">
        <img src={section6bg1} alt="biom product image" className="absolute lg:bottom-[94px] lg:right-[140px] bottom-auto right-auto left-0 top-0 lg:left-auto lg:top-auto w-full lg:w-[496px] h-auto z-20" />
        <img src={section6bg2} alt="biom product image" className="absolute bottom-0 right-0 w-full lg:w-[308px] h-auto z-30" />
      </div>
      <div className="h-max z-10 pl-[35px] lg:pl-[30px] pr-[35px] lg:pr-[0px] pb-[25px] pt-[96px] flex flex-col justify-end text-[18px] text-black relative">
        <p className="font-brandon font-normal text-[14px] leading-[28px] tracking-[2.1px] uppercase text-teal-dark">BIOM WIPES</p>
        <h1 className="font-black font-chronicle text-[36px] leading-[44px] mt-[10px] text-black">Better for you, and the planet.</h1>
        <p className="pt-[12px] max-w-[555px] text-teal-dark text-[18px] leading-[28px]">The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home.</p>
        <div className="flex flex-row items-center ml-[0px] lg:ml-[46px] gap-[22px] mt-[40px]">
          <img src={section6icon1} className="h-[66px] w-auto" alt="Biodegradable icon" />
          <p>100% biodegradable</p>
        </div>
        <div className="flex flex-row items-center ml-[0px] lg:ml-[46px] gap-[22px] mt-[35px]">
          <img src={section6icon2} className="h-[66px] w-auto" alt="Plastic free icon" />
          <p>Plastic-free</p>
        </div>
        <div className="flex flex-row items-center ml-[0px] lg:ml-[46px] gap-[22px] mt-[35px]">
          <img src={section6icon3} className="h-[66px] w-auto" alt="Plant based icon" />
          <p>100% plant-based</p>
        </div>
        <ButtonDark link="#" className="mt-[45px] ml-[0px] lg:ml-[46px]">
          Subscribe Now
        </ButtonDark>
      </div>
    </div>
  )
}

export default Subscribe;