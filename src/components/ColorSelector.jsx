import { ButtonIcon } from "./Buttons";
import arrowGreen from "../assets/icons/arrowgreen.svg";
import green from "../assets/images/biom-green.png";
import white from "../assets/images/biom-white.png";
import black from "../assets/images/biom-black.png";

const ColorSelector = () => {
  return(
    <div className="flex flex-row items-center min-h-[400px] pt-[120px]">
      <div className="pl-[69px] pr-[39px]">
        <h1 className="font-black font-chronicle text-[36px] leading-[44px] text-black w-[297px]">Ready to start wiping out waste?</h1>
        <ButtonIcon link="#" label="CHOOSE YOUR VESSEL COLOR" className="mt-[35px]">
          <img src={arrowGreen} className="h-[22px] w-auto" alt="Biom Logo" />
        </ButtonIcon>
      </div>
      <div className="w-full h-[400px] relative">
        <div className="z-10 w-[400px] aspect-square absolute left-0 flex items-end justify-start group">
          <img src={green} alt="biom picture green" className="absolute inset-0 w-full h-auto transition-transform duration-300 ease-out group-hover:translate-x-1/4"/>
          <div className="pb-[50px] pl-[10px] z-20 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100">
            <h2 className="font-black font-chronicle text-[22px] leading-[28px] tracking-[2.2px] text-black">Biom Dispenser</h2>
            <p className="font-medium font-brandon text-[14px] leading-[28px] tracking-[1.4px] text-black uppercase">Ocean Teal</p>
          </div>
        </div>
        <div className="z-20 w-[400px] aspect-square absolute inset-x-0 mx-auto flex items-end justify-start group">
          <img src={white} alt="biom picture white" className="absolute inset-0 w-full h-auto transition-transform duration-300 ease-out group-hover:translate-x-1/4"/>
          <div className="pb-[50px] pl-[10px] z-30 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100">
            <h2 className="font-black font-chronicle text-[22px] leading-[28px] tracking-[2.2px] text-black">Biom Dispenser</h2>
            <p className="font-medium font-brandon text-[14px] leading-[28px] tracking-[1.4px] text-black uppercase">White</p>
          </div>
        </div>
        <div className="z-30 w-[400px] aspect-square absolute right-0 flex items-end justify-start group">
          <img src={black} alt="biom picture black" className="absolute inset-0 w-full h-auto transition-transform duration-300 ease-out group-hover:translate-x-1/4"/>
          <div className="pb-[50px] pl-[10px] z-40 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100">
            <h2 className="font-black font-chronicle text-[22px] leading-[28px] tracking-[2.2px] text-black">Biom Dispenser</h2>
            <p className="font-medium font-brandon text-[14px] leading-[28px] tracking-[1.4px] text-black uppercase">Ink Black</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorSelector;