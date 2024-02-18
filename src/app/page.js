'use client';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="pt-[105px] flex flex-col w-full items-center h-[2000px]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex justify-center py-40 w-4/5"
      >
        <div className="text-7xl relative text-nowrap leading-snug">
          <span className="absolute left-[-80px] top-[20px] text-6xl text-[#E1E8ED]">
            1
          </span>
          <span className="text-[#00B8FF]">if</span> (DEVELOP TOGETHER){' '}
          <span className="text-[#00B8FF]">{'{'}</span> <br />
          <span className="absolute left-[-80px] top-[124px] text-6xl text-[#E1E8ED]">
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
              className="text-wrap"
            />
            {'"'}
          </span>
          <br />
          <span className="absolute left-[-80px] top-[226px] text-6xl text-[#E1E8ED]">
            3
          </span>
          <span className="text-[#00B8FF]">{'}'}</span>
        </div>
      </motion.div>
      <motion.div className="flex flex-col w-3/5">
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-right justify-right py-16"
        >
          <span className="text-4xl text-[#657786] leading-snug">
            개인과 팀 모두가 함께 성장하는
            <br />
            IT 개발동아리 <span className="text-[#00B8FF]">DO IT.</span>
          </span>
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-left justify-right py-16"
        >
          <span className="text-4xl text-[#657786] leading-snug">
            새로운 도전과 협업의 경험으로
            <br />
            우리는 한걸음 더 성장해 나갑니다.
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
