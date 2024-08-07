import AutoScrollText from "./components/AutoScrollText"; 
import { ButtonLight, ButtonDark, ButtonIcon, ButtonIconIg } from "./components/Buttons";
import InstagramScroller from "./components/InstagramScroller";
import RoomScroller from "./components/RoomScroller";
import ColorSelector from "./components/ColorSelector";
import Testimonials from "./components/Testimonials";
import section1bg from "./assets/images/section1bg.png"
import section2bg from "./assets/images/section2bg.png"
import section2icon1 from "./assets/images/beautiful-design-icon.png"
import section2icon2 from "./assets/images/durable-stainless-steel-icon.png"
import section2icon3 from "./assets/images/non-toxic-icon.png"
import section6bg1 from "./assets/images/section6-1.png"
import section6bg2 from "./assets/images/section6-2.png"
import section6icon1 from "./assets/images/biodegradable-icon.png"
import section6icon2 from "./assets/images/plastic-free-icon.png"
import section6icon3 from "./assets/images/plant-based-icon.png"
import videoOcean from "./assets/videos/ocean.mp4"


function HomePage() {
  return (
    <>
      <div className='h-[calc(100vh-25px)] w-full relative'>
        <div className="absolute top-[68px] left-[25px] right-[25px] rounded-[14px] bottom-0 bg-origin-padding bg-center bg-no-repeat bg-cover pl-[85px] flex flex-col justify-center" style={{ backgroundImage: `url(${section1bg})` }}>
          <h1 className="font-chronicle font-black text-[56px] leading-[62px] tracking-[0px] text-gray-light w-[237px]">So fresh. So green.</h1>
          <p className="mt-[14px] font-brandon font-normal text-[20px] leading-[28px] tracking-[0px] text-gray-light w-[407px]">We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free.</p>
          <ButtonLight link="#" className="mt-[24px]">
            Get Started
          </ButtonLight>
        </div>
      </div>

      <div className='min-h-[730px] w-full relative overflow-hidden text-teal-dark font-normal'>
        <img src={section2bg} alt="biom product image" className="absolute bottom-0 w-full h-auto"/>
        <AutoScrollText />
        <div className="absolute inset-0 pl-[50%] pr-[140px] flex flex-col justify-center text-[18px] leading-[28px]">
          <p className="text-[14px] tracking-[2.1px] uppercase">The Biom Dispenser</p>
          <h1 className="font-black font-chronicle text-[36px] mt-[8px]">Redefine your experience of clean.</h1>
          <p className="pt-[12px]">A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach.</p>
          <div className="flex flex-row items-center gap-[22px] mt-[42px]">
            <img src={section2icon1} className="h-[66px] w-auto" alt="Beautiful design icon"/>
            <p>Beautiful design, fit for your home</p>
          </div>
          <div className="flex flex-row items-center gap-[22px] mt-[35px]">
            <img src={section2icon2} className="h-[66px] w-auto" alt="Durable stainless steel icon"/>
            <p>Durable stainless steel exterior</p>
          </div>
          <div className="flex flex-row items-center gap-[22px] mt-[35px]">
            <img src={section2icon3} className="h-[66px] w-auto" alt="Non toxic icon"/>
            <p>Non-toxic, BPA free</p>
          </div>
          <ButtonDark link="#" className="mt-[45px]">
            Shop Now
          </ButtonDark>
        </div>
      </div>

      <RoomScroller />

      <ColorSelector />
      
      <div className="w-full pt-[90px] pb-[55px] bg-gray">
        <Testimonials />
      </div>

      <div className='min-h-[calc(100vh-68px)] w-full relative grid grid-cols-2 px-[69px] my-[90px]'>
        <div className="absolute rounded-[12px] bg-teal-light top-[36px] bottom-[74px] right-[69px] left-[30%]">
        </div>
        <div className="relative w-full h-full">
          <img src={section6bg1} alt="biom product image" className="absolute top-0 left-0 w-[496px] h-auto z-20"/>
          <img src={section6bg2} alt="biom product image" className="absolute bottom-0 right-0 w-[308px] h-auto z-30"/>
        </div>
        <div className="z-10 pl-[30px] pb-[64px] pt-[96px] flex flex-col justify-center text-[18px] text-black relative">
          <p className="font-brandon font-normal text-[14px] leading-[28px] tracking-[2.1px] uppercase text-teal-dark">BIOM WIPES</p>
          <h1 className="font-black font-chronicle text-[36px] leading-[44px] mt-[10px] text-black">Better for you, and the planet.</h1>
          <p className="pt-[12px] w-[555px] text-teal-dark text-[18px] leading-[28px]">The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home.</p>
          <div className="flex flex-row items-center ml-[46px] gap-[22px] mt-[40px]">
            <img src={section6icon1} className="h-[66px] w-auto" alt="Biodegradable icon"/>
            <p>100% biodegradable</p>
          </div>
          <div className="flex flex-row items-center ml-[46px] gap-[22px] mt-[35px]">
            <img src={section6icon2} className="h-[66px] w-auto" alt="Plastic free icon"/>
            <p>Plastic-free</p>
          </div>
          <div className="flex flex-row items-center ml-[46px] gap-[22px] mt-[35px]">
            <img src={section6icon3} className="h-[66px] w-auto" alt="Plant based icon"/>
            <p>100% plant-based</p>
          </div>
          <ButtonDark link="#" className="mt-[45px] ml-[46px]">
            Subscribe Now
          </ButtonDark>
        </div>
      </div>

      <div className='h-[calc(100vh-68px)] w-full relative'>
        <div className="absolute text-center inset-x-[25px] top-0 bottom-[25px] rounded-[14px] bg-teal bg-origin-padding bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center">
          <video 
            className="absolute w-full h-full object-cover rounded-[14px] opacity-35"
            src={videoOcean} 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <p className="z-10 font-brandon font-normal text-[14px] tracking-[2.1px] text-gray-light uppercase">CLEANING OUR OCEANS WITH EVERY WIPE</p>
          <h1 className="z-10 font-chronicle font-black text-[36px] text-gray-light mt-[6px]">Wipes have plastic in them. We don’t.</h1>
          <p className="z-10 font-brandon font-normal text-[18px] leading-[28px] text-gray-light mt-[10px] w-1/2">We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</p>
          <ButtonLight link="#" className="z-10 mt-[24px]">
            Learn More
          </ButtonLight>
        </div>
      </div>

      <div className="py-[80px] flex flex-col items-center">
        <h1 className="font-chronicle font-black text-[36px] leading-[44px] text-teal-dark text-center">#cleanwithbiom</h1>
        <InstagramScroller />
        <ButtonIconIg link="#" label="FOLLOW US ON INSTAGRAM"/>
      </div>
    </>
  )
}

export default HomePage;
