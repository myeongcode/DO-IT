import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function TypingLayout() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 0.8,
      }}
      className="flex justify-center py-72 w-[70%]"
    >
      <div className="md:text-[40px] xl:text-[80px] relative text-nowrap leading-snug">
        <span className="absolute md:left-[-80px] md:top-[8px] md:text-4xl xl:left-[-100px]  xl:top-[26px] xl:text-6xl text-[#E1E8ED]">
          1
        </span>
        <span className="text-[#00B8FF]">if</span> (DEVELOP TOGETHER){' '}
        <span className="text-[#00B8FF]">{'{'}</span> <br />
        <span className="absolute md:left-[-80px] md:top-[66px] md:text-4xl xl:left-[-100px] xl:top-[142px] xl:text-6xl text-[#E1E8ED]">
          2
        </span>
        <span className="absolute left-20">
          <span className="text-[#00B8FF]">return</span> {'"'}
          <Typewriter
            words={[
              'GROW TOGETHER',
              'CLIENT DEVELOPER',
              'SERVER DEVELOPER',
              'PROJECT MANAGER',
              'PRODUCT DESIGNER',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
          {'"'}
        </span>
        <br />
        <span className="absolute md:left-[-80px] md:top-[120px] md:text-4xl xl:left-[-100px] xl:top-[250px] xl:text-6xl text-[#E1E8ED]">
          3
        </span>
        <span className="text-[#00B8FF]">{'}'}</span>
      </div>
    </motion.div>
  );
}
