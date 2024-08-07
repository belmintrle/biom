import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const texts = [ 
    { subheading: "WHAT PEOPLE ARE SAYING", heading: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”", name: "- RACHAEL H." },
    { subheading: "WHAT PEOPLE ARE SAYING", heading: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”", name: "- RACHAEL H." },
    { subheading: "WHAT PEOPLE ARE SAYING", heading: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”", name: "- RACHAEL H." },
    { subheading: "WHAT PEOPLE ARE SAYING", heading: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”", name: "- RACHAEL H." },
   ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [  texts.length ]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-gray-100">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center text-teal-dark gap-[26px]"
        >
          <p className="font-brandon font-normal text-[14px] leading-[14px] tracking-[2.1px] uppercase">{texts[ currentIndex ].subheading}</p>
          <h2 className="w-[747px] font-chronicle font-bold text-[25px] leading-[42px] tracking-[0px]">{texts[ currentIndex ].heading}</h2>
          <p className="font-brandon font-medium text-[13px] leading-[13px] tracking-[1.3px] uppercase">{texts[ currentIndex ].name}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex space-x-3 pt-[50px]">
        {texts.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 cursor-pointer rounded-full border border-teal ${
              index === currentIndex ? 'bg-teal' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;