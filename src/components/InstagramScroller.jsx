import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ButtonIconIg } from "./Buttons";
import ig1 from "../assets/images/ig1.jpg";
import ig2 from "../assets/images/ig2.jpg";
import ig3 from "../assets/images/ig3.jpg";
import ig4 from "../assets/images/ig4.jpg";
import ig5 from "../assets/images/ig5.png";
import ig6 from "../assets/images/ig6.jpg";

const InstagramScroller = () => {
  const ref = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const parentWidth = ref.current.offsetWidth;
      const childWidth = ref.current.firstChild.offsetWidth;
      setScrollRange(childWidth - parentWidth );
    }
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const xSpring = useSpring(x, { stiffness: 100, damping: 50 })
  return (
    <div className="py-[80px] flex flex-col items-center">
      <h1 className="font-chronicle font-black text-[36px] leading-[44px] text-teal-dark text-center">#cleanwithbiom</h1>
      <div ref={ref} className='w-full relative overflow-x-hidden mt-[50px] mb-[40px]'>
        <motion.div className="flex flex-row w-max gap-[10px] px-[25px]" style={{ x: xSpring }}>
          <span className="px-[20px] pb-[20px]"><img src={ig1} alt="ig picture 1" className="w-[250px] h-auto" /></span>
          <span className="pt-[20px]"><img src={ig2} alt="ig picture 2" className="w-[270px] h-auto" /></span>
          <span className="px-[20px] pb-[20px]"><img src={ig3} alt="ig picture 3" className="w-[250px] h-auto" /></span>
          <span className="pt-[20px]"><img src={ig4} alt="ig picture 4" className="w-[270px] h-auto" /></span>
          <span className="px-[20px] pb-[20px]"><img src={ig5} alt="ig picture 5" className="w-[250px] h-auto" /></span>
          <span className="pt-[20px]"><img src={ig6} alt="ig picture 6" className="w-[250px] h-auto" /></span>
        </motion.div>
      </div>
      <ButtonIconIg link="#" label="FOLLOW US ON INSTAGRAM" />
    </div>
  )
}

export default InstagramScroller;