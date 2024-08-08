import CartIcon from "./CartIcon"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [ itemCount, setItemCount ] = useState(0);
  const [ menuOpen, setMenuOpen ] = useState(false);
  return(
    <motion.nav 
      className="fixed z-50 w-full flex flex-col items-center justify-between bg-white/25 bg-origin-padding bg-no-repeat bg-left-top backdrop-blur-[10px] backdrop-brightness-[1.8] px-[50px] font-brandon font-bold text-[15px] leading-[22px] tracking-[1.5px] text-black uppercase"
      animate={{ height: menuOpen ? '100%' : '68px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-[68px] grid grid-cols-2 lg:grid-cols-3 items-center z-40">
        <div className="lg:flex hidden space-x-[40px]">
          <a href="#">Shop</a>
          <a href="#">Why Biom</a>
          <a href="#">Scents</a>
        </div>
        <div className="flex justify-start lg:justify-center">
          <a href="#">
            <img src="/logo.svg" className="h-[30px] w-auto" alt="Biom Logo" />
          </a>
        </div>
        <div className="lg:flex hidden justify-end space-x-[40px]">
          <a href="#">Sign In</a>
          <a href="#" className="flex gap-[12.21px]" onClick={()=>setItemCount(itemCount+1)}>
            Cart
            <CartIcon itemCount={itemCount} />
          </a>
        </div>
        <button className="flex justify-end lg:hidden" title="menu burger" onClick={()=>setMenuOpen(!menuOpen)}>
          <svg className="fill-teal-dark w-[30px] h-[30px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"/>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute inset-0 my-auto mx-auto flex flex-col gap-[20px] items-center justify-center text-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#">Shop</a>
            <a href="#">Why Biom</a>
            <a href="#">Scents</a>
            <a href="#">Sign In</a>
            <a href="#" className="flex gap-[12.21px]" onClick={() => setItemCount(itemCount + 1)}>
              Cart
              <CartIcon itemCount={itemCount} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 

export default NavBar;