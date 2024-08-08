import { ButtonLight } from "./Buttons";
import videoOcean from "../assets/videos/ocean.mp4";
import { Suspense } from "react";

const Video = () => {
  return (
    <div className='h-[calc(100vh-68px)] w-full relative'>
      <div className="absolute text-center inset-x-[25px] top-0 bottom-[25px] rounded-[14px] bg-teal bg-origin-padding bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center">
        <Suspense>
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
        </Suspense>
        <p className="z-10 font-brandon font-normal text-[14px] tracking-[2.1px] text-gray-light uppercase">CLEANING OUR OCEANS WITH EVERY WIPE</p>
        <h1 className="z-10 font-chronicle font-black text-[36px] text-gray-light mt-[6px]">Wipes have plastic in them. We don’t.</h1>
        <p className="z-10 font-brandon font-normal text-[18px] leading-[28px] text-gray-light mt-[10px] w-1/2">We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</p>
        <ButtonLight link="#" className="z-10 mt-[24px]">
          Learn More
        </ButtonLight>
      </div>
    </div>
  )
}

export default Video;