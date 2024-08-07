import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react"
import ig1 from "../assets/images/ig1.png"
import ig2 from "../assets/images/ig2.png"
import ig3 from "../assets/images/ig3.png"
import ig4 from "../assets/images/ig4.png"
import ig5 from "../assets/images/ig5.png"
import ig6 from "../assets/images/ig6.png"

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
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 50 })
  const x = useTransform(scrollSpring, [0, 1], [0, -scrollRange]);
  return (
    <div ref={ref} className='w-full relative overflow-x-hidden mt-[50px] mb-[40px]'>
      <motion.div className="flex flex-row w-max gap-[10px] px-[25px]" style={{ x }}>
        <span className="px-[20px] pb-[20px]"><img src={ig1} alt="ig picture 1" className="w-[250px] h-auto" /></span>
        <span className="pt-[20px]"><img src={ig2} alt="ig picture 2" className="w-[270px] h-auto" /></span>
        <span className="px-[20px] pb-[20px]"><img src={ig3} alt="ig picture 3" className="w-[250px] h-auto" /></span>
        <span className="pt-[20px]"><img src={ig4} alt="ig picture 4" className="w-[270px] h-auto" /></span>
        <span className="px-[20px] pb-[20px]"><img src={ig5} alt="ig picture 5" className="w-[250px] h-auto" /></span>
        <span className="pt-[20px]"><img src={ig6} alt="ig picture 6" className="w-[250px] h-auto" /></span>
      </motion.div>
    </div>
  )
}

export default InstagramScroller;