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
      className="flex justify-center py-40 w-[70%] h-screen items-center"
    >
      <div className="md:text-[40px] lg:text-[68px] 2xl:text-[100px] relative text-nowrap leading-snug">
        <span className="absolute md:left-[-54px] md:top-[8px] md:text-4xl lg:left-[-82px] lg:top-[18px] lg:text-6xl 2xl:left-[-100px] 2xl:top-[32px] 2xl:text-7xl text-[#E1E8ED]">
          1
        </span>
        <span className="text-[#00B8FF]">if</span> (DEVELOP TOGETHER){' '}
        <span className="text-[#00B8FF]">{'{'}</span> <br />
        <span className="absolute md:left-[-54px] md:top-[66px] md:text-4xl lg:left-[-82px] lg:top-[118px] lg:text-6xl 2xl:left-[-100px] 2xl:top-[180px] 2xl:text-7xl text-[#E1E8ED]">
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
        <span className="absolute md:left-[-54px] md:top-[120px] md:text-4xl lg:left-[-82px] lg:top-[208px] lg:text-6xl  2xl:left-[-100px] 2xl:top-[320px] 2xl:text-7xl text-[#E1E8ED]">
          3
        </span>
        <span className="text-[#00B8FF]">{'}'}</span>
      </div>
    </motion.div>
  );
}
