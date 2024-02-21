import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RecruitLanding() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#00B8FF]">
      <div className="flex flex-col w-[70%] items-center">
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
          className="flex flex-row justify-center items-end z-10"
        >
          <Image
            src="/first-recruit.png"
            width={1200}
            height={0}
            alt="recruit Logo"
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
          <span className="text-7xl text-white font-pretend">2.27 - 3.3</span>
        </motion.div>
        <div className="absolute bottom-[-6px] md:bottom-[-20px] z-0">
          <Image
            src="/notebook.png"
            width={1000}
            height={0}
            alt="notebookImage"
            className="w-[40vh] md:w-[60vw] xl:w-[44vw]"
          />
        </div>
        <div className="absolute z-0 md:bottom-20">
          <Image
            src="/notebook-bg.png"
            width={1400}
            height={0}
            alt="notebookImageBackground"
            className="md:w-[80vw] xl:w-[70vw]"
          />
        </div>
      </div>
    </div>
  );
}
