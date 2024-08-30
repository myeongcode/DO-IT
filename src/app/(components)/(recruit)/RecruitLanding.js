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
import { duration } from 'moment';

export default function RecruitLanding() {
  const [animationStage, setAnimationStage] = useState(0);

  const draw = (fillColor, easeType = 'easeInOut') => ({
    hidden: { pathLength: 0, opacity: 0, fill: '#ffffff', rotate: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.5;
      return {
        strokeWidth: 2,
        pathLength: 1,
        opacity: 1,
        fill: fillColor,
        rotate: i % 2 == 0 ? 360 : -360,
        transition: {
          pathLength: { delay, type: 'spring', duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          fill: { delay: delay + 2.5, duration: 1 },
          rotate: {
            delay: delay + 3,
            duration: i + 20,
            ease: easeType,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0,
          },
        },
      };
    },
  });

  return (
    <div className="flex relative justify-center items-center h-screen w-full md:h-screen bg-[#ffffff]">
      <div className="absolute flex flex-col md:flex-row top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-suit">
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
                className="bg-black w-full"
              >
                <motion.h2 className="text-5xl 2xl:text-8xl md:text-7xl font-semibold text-black relative z-10">
                  2ND RECRUIT
                </motion.h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="absolute right-1/2 -bottom-20 transform translate-x-1/2 md:translate-x-0 md:-bottom-1/2 md:right-0">
          {/* 박스가 확장되었다가 사라지면서 텍스트가 드러나는 효과 */}
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
                className="bg-black w-full"
              >
                <motion.h2 className="text-5xl 2xl:text-7xl md:text-6xl font-medium">
                  8.31 - 9.8
                </motion.h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-center gap-y-[6vw] md:flex-row md:gap-x-40">
          <motion.div className="flex w-[24vw] h-[24vw] 2xl:w-[350px] 2xl:h-[350px] md:w-[250px] md:h-[250px] justify-center items-center">
            <motion.svg
              width="350"
              height="350"
              viewBox="0 0 263 263"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
              className="2xl:overflow-visible"
            >
              <motion.path
                d="M263 108.53H186.971L240.732 54.7565L208.243 22.2679L154.482 76.0293V0H108.53V76.0293L54.7565 22.2679L22.2679 54.7565L76.0293 108.53H0V154.482H76.0293L22.2679 208.243L54.7565 240.732L108.53 186.971V263H154.482V186.971L208.243 240.732L240.732 208.243L186.971 154.482H263V108.53Z"
                stroke="#FE74EF"
                variants={draw('#FE74EF')}
                custom={1}
              />
            </motion.svg>
          </motion.div>
          <motion.div className="flex w-[24vw] h-[24vw] 2xl:w-[350px] 2xl:h-[350px] md:w-[250px] md:h-[250px] justify-center items-center">
            <motion.svg
              width="350"
              height="350"
              viewBox="0 0 279 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
              className="2xl:overflow-visible"
            >
              <motion.path
                d="M279 140C279 118.751 261.84 101.529 240.667 101.529H232.041L238.141 95.4077C253.114 80.3815 253.114 56.0204 238.141 41.0054C223.168 25.9791 198.894 25.9791 183.933 41.0054L177.833 47.1268V38.4709C177.833 17.2214 160.674 0 139.5 0C118.326 0 101.167 17.2214 101.167 38.4709V47.1268L95.067 41.0054C80.0944 25.9791 55.8203 25.9791 40.859 41.0054C25.8864 56.0317 25.8864 80.3928 40.859 95.4077L46.9585 101.529H38.3335C17.1599 101.529 0 118.751 0 140C0 161.25 17.1599 178.471 38.3335 178.471H46.9585L40.859 184.592C25.8864 199.619 25.8864 223.98 40.859 238.995C55.8316 254.021 80.1057 254.021 95.067 238.995L101.167 232.873V241.529C101.167 262.779 118.326 280 139.5 280C160.674 280 177.833 262.779 177.833 241.529V232.873L183.933 238.995C198.906 254.021 223.18 254.021 238.141 238.995C253.114 223.968 253.114 199.607 238.141 184.592L232.041 178.471H240.667C261.84 178.471 279 161.25 279 140Z"
                stroke="#DCF052"
                variants={draw('#DCF052')}
                custom={2}
              />
            </motion.svg>
          </motion.div>
          <motion.div className="flex w-[24vw] h-[24vw] 2xl:w-[350px] 2xl:h-[350px] md:w-[250px] md:h-[250px] justify-center items-center">
            <motion.svg
              width="350"
              height="350"
              viewBox="0 0 306 306"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
              className="2xl:overflow-visible"
            >
              <motion.path
                d="M306 153L292.328 148.193C264.917 138.558 245.654 130.045 230.58 120.864C234.747 103.712 242.346 84.0785 254.917 57.877L261.189 44.8107L248.123 51.0825C221.922 63.6537 202.288 71.2528 185.136 75.4203C175.955 60.3459 167.442 41.0833 157.807 13.6715L153 0L148.193 13.6715C138.558 41.0833 130.044 60.339 120.864 75.4203C103.712 71.2528 84.0716 63.6537 57.877 51.0825L44.8107 44.8107L51.0825 57.877C63.6537 84.0785 71.2528 103.719 75.4203 120.864C60.3459 130.045 41.0833 138.558 13.6715 148.193L0 153L13.6715 157.807C41.0833 167.442 60.3459 175.955 75.4203 185.136C71.2528 202.288 63.6537 221.928 51.0825 248.123L44.8107 261.189L57.877 254.917C84.0716 242.346 103.705 234.747 120.864 230.58C130.044 245.654 138.558 264.917 148.193 292.329L153 306L157.807 292.329C167.442 264.917 175.955 245.654 185.136 230.58C202.288 234.747 221.928 242.346 248.123 254.917L261.189 261.189L254.917 248.123C242.346 221.922 234.747 202.281 230.58 185.136C245.654 175.955 264.917 167.442 292.328 157.807L306 153Z"
                stroke="#6439FE"
                variants={draw('#6439FE')}
                custom={2.5}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
