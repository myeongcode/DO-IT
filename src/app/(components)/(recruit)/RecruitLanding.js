import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function RecruitLanding() {
  return (
    <div className="flex justify-center items-center h-screen w-full md:h-screen bg-[#00B8FF]">
      <div className="flex flex-col w-[90%] pt-20 md:w-[56%] items-center">
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col items-center md:flex-row justify-center md:items-end z-10 w-[80vw]"
        >
          <Image
            src="/first-recruit.png"
            width={900}
            height={0}
            alt="recruit Logo"
            className="hidden md:block"
          />
          <Image
            src="/FIRST-image.png"
            width={250}
            height={0}
            alt="firstImage"
            className="flex md:hidden"
          />
          <Image
            src="/RECRUIT-image.png"
            width={250}
            height={0}
            alt="firstImage"
            className="flex md:hidden mt-6"
          />
        </motion.div>
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="py-12 md:pb-[300px] xl:pb-[400px] z-10"
        >
          <span className="text-[12vw] md:text-5xl xl:text-7xl text-white font-pretend">
            2.27 - 3.3
          </span>
        </motion.div>
        <div className="absolute bottom-[-1vw] z-0">
          <Image
            src="/notebook.png"
            width={1000}
            height={0}
            alt="notebookImage"
            className="w-[90vw] md:w-[60vw] xl:w-[40vw] hidden md:flex"
          />
        </div>
        <div className="absolute z-0 bottom-8 md:bottom-20">
          <Image
            src="/notebook-bg.png"
            width={1400}
            height={0}
            alt="notebookImageBackground"
            className="w-[90vw] md:w-[80vw] xl:w-[52vw] hidden md:flex"
          />
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
            className="absolute bottom-10 block md:hidden"
          >
            <Image src="/DownBtn1.png" width={50} height={0} alt="downBtn" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
