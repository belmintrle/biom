import { motion } from 'framer-motion';

const AutoScrollText = () => {
  return (
    <div className="absolute whitespace-nowrap inset-0 -z-10 font-brandon font-bold text-[225px] leading-[322px] -tracking-[5.63px] text-gray lowercase">
      <motion.div
        className="inline-block"
        animate={{ y: ['0%', '500%'] }}
        style={{ rotate: "-90deg", transformOrigin: "top left" }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        <span className="">
          Meet Biom
        </span>
      </motion.div>
    </div>
  );
};

export default AutoScrollText;