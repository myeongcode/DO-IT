import { Typewriter } from 'react-simple-typewriter';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

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
      className="flex justify-center py-40 w-[90%] md:w-[60%] h-screen items-center text-[#14171A]"
    >
      <div className="flex w-full justify-start flex-col space-y-8 md:hidden leading-tight mt-10 font-suit font-bold">
        <motion.div className="flex flex-col text-[16vw]">
          <span className="text-[#00B8FF]">
            <Typewriter
              words={['{DEVELOP}', '{GROW}']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
          <span>TOGETHER</span>
        </motion.div>
      </div>
      <div className="hidden md:flex">
        <div className="text-[6vw] md:text-[40px] lg:text-[68px] 2xl:text-[100px] relative text-nowrap whitespace-nowrap leading-snug left-[-20px] font-suit md:font-bold">
          <span className="absolute text-[5vw] left-[-6vw] top-[0.8vw] md:left-[-54px] md:top-[8px] md:text-4xl lg:left-[-82px] lg:top-[18px] lg:text-6xl 2xl:left-[-100px] 2xl:top-[32px] 2xl:text-7xl text-[#E1E8ED]">
            1
          </span>
          <span className="text-[#00B8FF]">if</span> (DEVELOP TOGETHER){' '}
          <span className="text-[#00B8FF]">{'{'}</span> <br />
          <span className="absolute text-[5vw] left-[-6vw] top-[9.5vw] md:left-[-54px] md:top-[66px] md:text-4xl lg:left-[-82px] lg:top-[118px] lg:text-6xl 2xl:left-[-100px] 2xl:top-[180px] 2xl:text-7xl text-[#E1E8ED]">
            2
          </span>
          <span className="absolute left-[7vw] md:left-14 xl:left-20">
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
          <span className="absolute text-[5vw] left-[-6vw] top-[17.3vw] md:left-[-54px] md:top-[118px] md:text-4xl lg:left-[-82px] lg:top-[204px] lg:text-6xl  2xl:left-[-100px] 2xl:top-[310px] 2xl:text-7xl text-[#E1E8ED]">
            3
          </span>
          <span className="text-[#00B8FF]">{'}'}</span>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{
            translateY: 0,
          }}
          animate={{
            translateY: 20,
          }}
          exit={{
            translateY: 0,
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'circIn',
            duration: 1,
          }}
          className="absolute bottom-10 md:bottom-14"
        >
          <Image
            src="/DownBtn2.png"
            width={70}
            height={0}
            alt="downBtn"
            className="w-[11vw] md:w-[70px]"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
