import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react"
import section3bg1 from "../assets/images/section3-1.jpg"
import section3bg2 from "../assets/images/section3-2.jpg"
import section3bg3 from "../assets/images/section3-3.jpg"
import section3bg4 from "../assets/images/section3-4.jpg"

const RoomScroller = () => {
  const ref = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const parentWidth = ref.current.offsetWidth;
      const childWidth = ref.current.firstChild.offsetWidth;
      setScrollRange( childWidth - parentWidth );
    }
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const xSpring = useSpring(x, { stiffness: 100, damping: 50 })
  return (
    <div ref={ref} className='w-full overflow-hidden pt-[50px] relative'>
      <motion.div className="pl-[535px] flex flex-row w-max gap-[20px]" style={{ x: xSpring }}>
        <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden">
          <img src={section3bg1} alt="Living room image" className="absolute inset-0 w-full h-auto transform transition duration-500 ease-out group-hover:scale-110"/>
          <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out group-hover:text-gray-light text-transparent text-center">living room</p>
        </div>
        <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden flex flex-col items-center justify-center text-center">
          <img src={section3bg2} alt="Office image" className="absolute inset-0 w-full h-auto transition duration-500 ease-out group-hover:scale-110 z-0"/>
          <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out group-hover:text-gray-light text-transparent text-center">office</p>
        </div>
        <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden">
          <img src={section3bg3} alt="Kitchen image" className="absolute inset-0 w-full h-auto transition duration-500 ease-out group-hover:scale-110"/>
          <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out group-hover:text-gray-light text-transparent text-center">kitchen</p>
        </div>
        <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden">
          <img src={section3bg4} alt="Bathroom image" className="absolute inset-0 w-full h-auto transition duration-500 ease-out group-hover:scale-110"/>
          <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out group-hover:text-gray-light text-transparent text-center">bathroom</p>
        </div>
      </motion.div>
      <div className="absolute inset-0 max-w-[535px] aspect-[1.28915662651] m-auto z-20 text-center flex flex-col justify-center items-center pointer-events-none">
        <p className="font-brandon font-normal text-[16px] leading-[23px] tracking-[2.4px] text-white uppercase z-20">WHERE YOU NEED IT,</p>
        <h1 className="font-chronicle font-black text-[78px] leading-[82px] -tracking-[0.78px] text-white z-20 w-4/5">when you need it.</h1>
      </div>
    </div>
  )
}

export default RoomScroller;