import CartIcon from "./CartIcon"
import { useState } from "react";

const NavBar = () => {
  const [ itemCount, setItemCount ] = useState(0);
  return(
    <nav className="fixed z-50 w-full h-[68px] grid grid-cols-3 items-center bg-white/25 bg-origin-padding bg-no-repeat bg-left-top backdrop-blur-[10px] backdrop-brightness-[1.8] px-[50px] font-brandon font-bold text-[15px] leading-[22px] tracking-[1.5px] text-black uppercase">
      <div className="flex space-x-[40px]">
        <a href="#">Shop</a>
        <a href="#">Why Biom</a>
        <a href="#">Scents</a>
      </div>
      <div className="flex justify-center">
        <a href="#">
          <img src="/logo.svg" className="h-[30px] w-auto" alt="Biom Logo" />
        </a>
      </div>
      <div className="flex justify-end space-x-[40px]">
        <a href="#">Sign In</a>
        <a href="#" className="flex gap-[12.21px]" onClick={()=>setItemCount(itemCount+1)}>
          Cart
          <CartIcon itemCount={itemCount} />
        </a>
      </div>
    </nav>
  )
} 

export default NavBar;