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
      className="flex justify-center py-40 w-[70%]"
    >
      <div className="text-[80px] relative text-nowrap leading-snug">
        <span className="absolute left-[-100px] top-[26px] text-6xl text-[#E1E8ED]">
          1
        </span>
        <span className="text-[#00B8FF]">if</span> (DEVELOP TOGETHER){' '}
        <span className="text-[#00B8FF]">{'{'}</span> <br />
        <span className="absolute left-[-100px] top-[142px] text-6xl text-[#E1E8ED]">
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
        <span className="absolute left-[-100px] top-[250px] text-6xl text-[#E1E8ED]">
          3
        </span>
        <span className="text-[#00B8FF]">{'}'}</span>
      </div>
    </motion.div>
  );
}
