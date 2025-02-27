import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  delay,
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useAnimation,
} from 'framer-motion';

export default function RecruitLanding() {
  const [field, setField] = useState('');
  const [fieldModile, setFieldMobile] = useState('');
  // const controls = useAnimation();
  // const [strokeColor1, setStrokeColor1] = useState('#FE74EF');
  // const [fillColor1, setFillColor1] = useState('#FFFFFF');
  // const [strokeColor2, setStrokeColor2] = useState('#DCF052');
  // const [fillColor2, setFillColor2] = useState('#FFFFFF');
  // const [strokeColor3, setStrokeColor3] = useState('#6439FE');
  // const [fillColor3, setFillColor3] = useState('#FFFFFF');
  // const [backgroundFill, setbackgroundFill] = useState(false);

  useEffect(() => {
    const values = ['management', 'frontend', 'backend', 'design'];
    let index = 0;
    let intervalId;
    let timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setFieldMobile(values[index]);
        index = (index + 1) % values.length;
      }, 2000);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   let sequenceIndex = 0;
  //   const sequences = [
  //     {
  //       strokeColor1: '#FE74EF',
  //       fillColor1: '#FE74EF',
  //       strokeColor2: '#DCF052',
  //       fillColor2: '#DCF052',
  //       strokeColor3: '#6439FE',
  //       fillColor3: '#6439FE',
  //       backgroundColor: '#ffffff',
  //     },
  //     {
  //       strokeColor1: '#6439FE',
  //       fillColor1: '#6439FE',
  //       strokeColor2: '#FFFFFF',
  //       fillColor2: '#FFFFFF',
  //       strokeColor3: '#FE74EF',
  //       fillColor3: '#FE74EF',
  //       backgroundColor: '#DCF052',
  //     },
  //     {
  //       strokeColor1: '#DCF052',
  //       fillColor1: '#DCF052',
  //       strokeColor2: '#6439FE',
  //       fillColor2: '#6439FE',
  //       strokeColor3: '#FFFFFF',
  //       fillColor3: '#FFFFFF',
  //       backgroundColor: '#FE74EF',
  //     },
  //     {
  //       strokeColor1: '#FFFFFF',
  //       fillColor1: '#FFFFFF',
  //       strokeColor2: '#FE74EF',
  //       fillColor2: '#FE74EF',
  //       strokeColor3: '#DCF052',
  //       fillColor3: '#DCF052',
  //       backgroundColor: '#6439FE',
  //     },
  //   ];

  //   function updateFrame() {
  //     if (!isMounted) return;

  //     const currentSequence = sequences[sequenceIndex];
  //     setStrokeColor1(currentSequence.strokeColor1);
  //     setFillColor1(currentSequence.fillColor1);
  //     setStrokeColor2(currentSequence.strokeColor2);
  //     setFillColor2(currentSequence.fillColor2);
  //     setStrokeColor3(currentSequence.strokeColor3);
  //     setFillColor3(currentSequence.fillColor3);

  //     if (currentSequence.backgroundColor === '#6439FE') {
  //       setbackgroundFill(true);
  //     } else {
  //       setbackgroundFill(false);
  //     }
  //     controls.start({
  //       backgroundColor: currentSequence.backgroundColor,
  //       transition: { duration: 0.5 },
  //     });

  //     sequenceIndex = (sequenceIndex + 1) % sequences.length;

  //     setTimeout(() => {
  //       requestAnimationFrame(updateFrame);
  //     }, 5000);
  //   }

  //   setTimeout(() => {
  //     requestAnimationFrame(updateFrame);
  //   }, 3000);

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [controls]);

  return (
    <motion.div
      initial={
        {
          // backgroundColor: '#000000',
        }
      }
      // animate={controls}
      transition={
        {
          // delay: 4,
          // ease: 'easeInOut',
        }
      }
      className="flex relative justify-center items-center h-screen w-full md:h-screen bg-[#f1f1f1]"
    >
      <motion.div className="absolute top-36 transform md:top-40 z-10">
        <motion.div className="whitespace-nowrap overflow-hidden">
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 0.4, ease: 'easeInOut' }}
            className="z-20"
          >
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{
                delay: 2.4,
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className="bg-[#2955DC] w-full"
            >
              <motion.h2 className="text-5xl 2xl:text-8xl md:text-7xl font-medium relative z-10 transition-colors duration-300 text-[#2955DC]">
                3RD RECRUIT
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="absolute bottom-36 transform md:bottom-40 z-10">
        <motion.div className="whitespace-nowrap overflow-hidden">
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 2.4, duration: 0.4, ease: 'easeInOut' }}
            className="z-20"
          >
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{
                delay: 2.8,
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className="bg-[#000000] w-full"
            >
              <motion.h2 className="text-5xl 2xl:text-8xl md:text-7xl font-medium transition-colors duration-300 text-[#000000]">
                2.28 - 3.7
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 모바일 */}
      <div className="flex flex-col lg:hidden p-10 gap-4 w-full">
        <div className="flex flex-row gap-4">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,

              delay: 0.6,
            }}
            className="flex"
          >
            <Image
              src={'recruit/3/Management-icon.svg'}
              alt=""
              width={100}
              height={100}
              className={`object-cover ${
                fieldModile === 'management' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="flex w-full"
          >
            <Image
              src={'recruit/3/Design.svg'}
              width={100}
              height={100}
              alt=""
              className={`object-cover w-full ${
                fieldModile === 'design' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>
        <div className="flex flex-row gap-4">
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="flex"
            onHoverStart={() => setField('frontend')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Front-end-icon.svg'}
              width={20}
              height={20}
              alt=""
              className={`object-cover w-full ${
                fieldModile === 'frontend' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="flex"
          >
            <Image
              src={'recruit/3/Management.svg'}
              width={20}
              height={20}
              alt=""
              className={`object-contain w-full ${
                fieldModile === 'management' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>

        {/* <div className="flex flex-row gap-4">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="flex"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT1.svg'}
              alt=""
              width={20}
              height={20}
              className={`object-cover w-full hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="flex w-full"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT2.svg'}
              width={20}
              height={20}
              alt=""
              className={`object-contain w-full hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div> */}

        <div className="flex flex-row gap-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="flex"
          >
            <Image
              src={'recruit/3/Back-end.svg'}
              alt=""
              width={20}
              height={20}
              className={`object-contain w-full ${
                fieldModile === 'backend' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="flex"
          >
            <Image
              src={'recruit/3/Design-icon.svg'}
              width={20}
              height={20}
              alt=""
              className={`object-contain w-full ${
                fieldModile === 'design' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>
        <div className="flex flex-row gap-4">
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="flex"
          >
            <Image
              src={'recruit/3/Back-end-icon.svg'}
              width={20}
              height={20}
              alt=""
              className={`object-contain w-full ${
                fieldModile === 'backend' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="flex"
          >
            <Image
              src={'recruit/3/Front-end.svg'}
              width={20}
              height={20}
              alt=""
              className={`object-contain w-full ${
                fieldModile === 'frontend' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>
        {/* <div className="top-40 left-1/2 transform -translate-x-1/2 flex flex-row gap-4 w-full">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="flex"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT4.svg'}
              width={200}
              height={20}
              alt=""
              className={`object-contain hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="flex"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT3.svg'}
              width={60}
              height={200}
              alt=""
              className={`object-contain hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div> */}
      </div>

      {/* PC */}
      <div className="hidden flex-col items-center gap-6 lg:flex">
        <div className="flex flex-row items-center gap-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,

              delay: 0.6,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('management')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Management-icon.svg'}
              alt=""
              width={200}
              height={200}
              className={`object-contain w-full hover:scale-125 ${
                field === 'management' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('design')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Design.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-125 ${
                field === 'design' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('frontend')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Front-end-icon.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-125 ${
                field === 'frontend' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('management')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Management.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-125 ${
                field === 'management' ? 'scale-125 z-10' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>
        <div className="flex flex-row items-center gap-6 w-full">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT1.svg'}
              alt=""
              width={200}
              height={200}
              className={`object-contain w-full hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT2.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT3.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('doit')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/DOIT4.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-[1.05] ${
                field === 'doit' ? 'scale-[1.05] z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>
        <div className="flex flex-row items-center gap-6 w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('backend')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Back-end.svg'}
              alt=""
              width={200}
              height={200}
              className={`object-contain w-full hover:scale-125 ${
                field === 'backend' ? 'scale-125 z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('design')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Design-icon.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-125 ${
                field === 'design' ? 'scale-125 z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('frontend')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Front-end.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-125 ${
                field === 'frontend' ? 'scale-125 z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="flex relative lg:h-[100px] 2xl:h-[140px]"
            onHoverStart={() => setField('backend')}
            onHoverEnd={() => setField('')}
          >
            <Image
              src={'recruit/3/Back-end-icon.svg'}
              width={200}
              height={200}
              alt=""
              className={`object-contain w-full hover:scale-125 ${
                field === 'backend' ? 'scale-125 z-40' : ''
              } transition-all duration-200`}
            />
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute flex flex-col md:flex-row top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suit">
        <motion.div className="absolute left-1/2 -top-20 transform -translate-x-1/2 md:translate-x-0 md:-top-1/2 md:left-0">
          <motion.div className="whitespace-nowrap overflow-hidden">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 1, duration: 0.4, ease: 'easeInOut' }}
              className="z-20"
            >
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{
                  delay: 1.4,
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="bg-[#14171A] w-full"
              >
                <motion.h2
                  className={`text-5xl 2xl:text-8xl md:text-7xl font-semibold relative z-10 transition-colors duration-300 ${
                    backgroundFill === true ? 'text-white' : 'text-[#14171A]'
                  }`}
                >
                  2ND RECRUIT
                </motion.h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="absolute right-1/2 -bottom-20 transform translate-x-1/2 md:translate-x-0 md:-bottom-1/2 md:right-0">
          <motion.div className="whitespace-nowrap overflow-hidden">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.4, duration: 0.4, ease: 'easeInOut' }}
              className="z-20"
            >
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{
                  delay: 1.8,
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="bg-[#14171A] w-full"
              >
                <motion.h2
                  className={`text-5xl 2xl:text-8xl md:text-7xl font-medium transition-colors duration-300 ${
                    backgroundFill === true ? 'text-white' : 'text-[#14171A]'
                  }`}
                >
                  8.31 - 9.8
                </motion.h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-center gap-y-[6vw] md:flex-row md:gap-x-40">
          <motion.div className="flex w-[24vw] h-[24vw] 2xl:w-[350px] 2xl:h-[350px] md:w-[250px] md:h-[250px] justify-center items-center">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 263 263"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
              className="overflow-visible"
            >
              <motion.path
                d="M263 108.53H186.971L240.732 54.7565L208.243 22.2679L154.482 76.0293V0H108.53V76.0293L54.7565 22.2679L22.2679 54.7565L76.0293 108.53H0V154.482H76.0293L22.2679 208.243L54.7565 240.732L108.53 186.971V263H154.482V186.971L208.243 240.732L240.732 208.243L186.971 154.482H263V108.53Z"
                fill={fillColor1}
                strokeWidth={2}
                initial={{
                  pathLength: 0,
                  opacity: 0,
                  fill: fillColor1,
                  stroke: strokeColor1,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  rotate: 360,
                  fill: fillColor1,
                  stroke: strokeColor1,
                }}
                transition={{
                  pathLength: {
                    delay: 0.5,
                    type: 'spring',
                    duration: 3,
                    bounce: 0,
                  },
                  stroke: { duration: 1 },
                  opacity: { delay: 0.5, duration: 0.01 },
                  fill: { duration: 1 },
                  rotate: {
                    delay: 4,
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0,
                  },
                }}
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
          <motion.div className="flex w-[24vw] h-[24vw] 2xl:w-[350px] 2xl:h-[350px] md:w-[250px] md:h-[250px] justify-center items-center">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 279 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
              className="overflow-visible"
            >
              <motion.path
                d="M279 140C279 118.751 261.84 101.529 240.667 101.529H232.041L238.141 95.4077C253.114 80.3815 253.114 56.0204 238.141 41.0054C223.168 25.9791 198.894 25.9791 183.933 41.0054L177.833 47.1268V38.4709C177.833 17.2214 160.674 0 139.5 0C118.326 0 101.167 17.2214 101.167 38.4709V47.1268L95.067 41.0054C80.0944 25.9791 55.8203 25.9791 40.859 41.0054C25.8864 56.0317 25.8864 80.3928 40.859 95.4077L46.9585 101.529H38.3335C17.1599 101.529 0 118.751 0 140C0 161.25 17.1599 178.471 38.3335 178.471H46.9585L40.859 184.592C25.8864 199.619 25.8864 223.98 40.859 238.995C55.8316 254.021 80.1057 254.021 95.067 238.995L101.167 232.873V241.529C101.167 262.779 118.326 280 139.5 280C160.674 280 177.833 262.779 177.833 241.529V232.873L183.933 238.995C198.906 254.021 223.18 254.021 238.141 238.995C253.114 223.968 253.114 199.607 238.141 184.592L232.041 178.471H240.667C261.84 178.471 279 161.25 279 140Z"
                fill={fillColor2}
                strokeWidth={2}
                initial={{
                  pathLength: 0,
                  opacity: 0,
                  fill: fillColor2,
                  stroke: strokeColor2,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  rotate: -360,
                  fill: fillColor2,
                  stroke: strokeColor2,
                }}
                transition={{
                  pathLength: {
                    delay: 0.5,
                    type: 'spring',
                    duration: 3,
                    bounce: 0,
                  },
                  stroke: { duration: 1 },
                  opacity: { delay: 0.5, duration: 0.01 },
                  fill: { duration: 1 },
                  rotate: {
                    delay: 4,
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0,
                  },
                }}
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
          <motion.div className="flex w-[24vw] h-[24vw] 2xl:w-[350px] 2xl:h-[350px] md:w-[250px] md:h-[250px] justify-center items-center">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 306 306"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
              className="overflow-visible"
            >
              <motion.path
                d="M306 153L292.328 148.193C264.917 138.558 245.654 130.045 230.58 120.864C234.747 103.712 242.346 84.0785 254.917 57.877L261.189 44.8107L248.123 51.0825C221.922 63.6537 202.288 71.2528 185.136 75.4203C175.955 60.3459 167.442 41.0833 157.807 13.6715L153 0L148.193 13.6715C138.558 41.0833 130.044 60.339 120.864 75.4203C103.712 71.2528 84.0716 63.6537 57.877 51.0825L44.8107 44.8107L51.0825 57.877C63.6537 84.0785 71.2528 103.719 75.4203 120.864C60.3459 130.045 41.0833 138.558 13.6715 148.193L0 153L13.6715 157.807C41.0833 167.442 60.3459 175.955 75.4203 185.136C71.2528 202.288 63.6537 221.928 51.0825 248.123L44.8107 261.189L57.877 254.917C84.0716 242.346 103.705 234.747 120.864 230.58C130.044 245.654 138.558 264.917 148.193 292.329L153 306L157.807 292.329C167.442 264.917 175.955 245.654 185.136 230.58C202.288 234.747 221.928 242.346 248.123 254.917L261.189 261.189L254.917 248.123C242.346 221.922 234.747 202.281 230.58 185.136C245.654 175.955 264.917 167.442 292.328 157.807L306 153Z"
                fill={fillColor3}
                strokeWidth={2}
                initial={{
                  pathLength: 0,
                  opacity: 0,
                  fill: fillColor3,
                  stroke: strokeColor3,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  rotate: 360,
                  fill: fillColor3,
                  stroke: strokeColor3,
                }}
                transition={{
                  pathLength: {
                    delay: 0.5,
                    type: 'spring',
                    duration: 3,
                    bounce: 0,
                  },
                  stroke: { duration: 1 },
                  opacity: { delay: 0.5, duration: 0.01 },
                  fill: { duration: 1 },
                  rotate: {
                    delay: 4,
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0,
                  },
                }}
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div> */}
      {/* 아래 스크롤 아이콘 애니메이션 */}
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 md:bottom-20 md:left-1/2 transform -translate-x-1/2"
        >
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
            className=""
          >
            <Image
              src="/DownBtn2.png"
              width={70}
              height={0}
              alt="downBtn"
              className="w-[15vw] md:w-[80px]"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
