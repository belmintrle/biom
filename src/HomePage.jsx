import AutoScrollText from "./components/AutoScrollText"; 
import { ButtonLight, ButtonDark } from "./components/Buttons"

function HomePage() {

  return (
    <>
      <div className='h-[calc(100vh-25px)] w-full relative'>
        <div className="absolute top-[68px] left-[25px] right-[25px] rounded-[14px] bottom-0 bg-hero-bg bg-origin-padding bg-center bg-no-repeat bg-cover pl-[85px] flex flex-col justify-center">
          <h1 className="font-chronicle font-black text-[56px] leading-[62px] tracking-[0px] text-gray-light w-[237px]">So fresh. So green.</h1>
          <p className="mt-[14px] font-brandon font-normal text-[20px] leading-[28px] tracking-[0px] text-gray-light w-[407px]">We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free.</p>
          <ButtonLight link="#" className="mt-[24px]">
            Get Started
          </ButtonLight>
        </div>
      </div>
      <div className='min-h-[730px] w-full relative overflow-hidden text-teal-dark font-normal'>
        <img src="./src/assets/images/section2bg.png" alt="biom product image" className="absolute bottom-0 w-full h-auto"></img>
        <AutoScrollText />
        <div className="absolute inset-0 pl-[50%] pr-[140px] flex flex-col justify-center text-[18px] leading-[28px]">
          <p className="text-[14px] tracking-[2.1px] uppercase">The Biom Dispenser</p>
          <h1 className="font-black font-chronicle text-[36px] mt-[8px]">Redefine your experience of clean.</h1>
          <p className="pt-[12px]">A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach.</p>
          <div className="flex flex-row items-center gap-[22px] mt-[42px]">
            <img src="./src/assets/images/beautiful-design-icon.png" className="h-[66px] w-auto" alt="Beautiful design icon"/>
            <p>Beautiful design, fit for your home</p>
          </div>
          <div className="flex flex-row items-center gap-[22px] mt-[35px]">
            <img src="./src/assets/images/durable-stainless-steel-icon.png" className="h-[66px] w-auto" alt="durable stainless steel icon"/>
            <p>Durable stainless steel exterior</p>
          </div>
          <div className="flex flex-row items-center gap-[22px] mt-[35px]">
            <img src="./src/assets/images/non-toxic-icon.png" className="h-[66px] w-auto" alt="non toxic icon"/>
            <p>Non-toxic, BPA free</p>
          </div>
          <ButtonDark link="#" className="mt-[45px]">
            Shop Now
          </ButtonDark>
        </div>
      </div>
      <div className='h-[calc(100vh-43px)] w-full relative'>
        <div className="absolute text-center inset-x-[25px] inset-y-[25px] rounded-[14px] bg-teal bg-origin-padding bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center">
          <video 
            className="absolute w-full h-full object-cover rounded-[14px] opacity-35"
            src="./src/assets/videos/ocean.mp4" 
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
    </>
  )
}

export default HomePage;
