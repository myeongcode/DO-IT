import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import useMeasure from 'react-use-measure';

const slideImages = [
  {
    id: 1,
    imgSrc: '/slide/1.png',
    type: 'APP SERVICE',
    title: 'Test 1',
  },
  {
    id: 2,
    imgSrc: '/slide/2.png',
    type: 'APP SERVICE',
    title: 'Test 2',
  },
  {
    id: 3,
    imgSrc: '/slide/3.png',
    type: 'APP SERVICE',
    title: 'Test 3',
  },
  {
    id: 4,
    imgSrc: '/slide/4.png',
    type: 'APP SERVICE',
    title: 'Test 4',
  },
  {
    id: 5,
    imgSrc: '/slide/5.png',
    type: 'APP SERVICE',
    title: 'Test 5',
  },
  {
    id: 6,
    imgSrc: '/slide/6.png',
    type: 'APP SERVICE',
    title: 'Test 6',
  },
];

export default function ProjectLayout() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <div className="flex flex-col items-center w-full  py-28">
      <div className="w-[70%]">
        <div className="flex flex-row justify-between pb-32">
          <span className="text-left text-6xl">PROJECTS</span>
          <motion.button
            whileHover={{
              rotate: 180,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className="text-6xl"
          >
            <Image src="/plus_icon.png" width="50" height="50" alt="plus" />
          </motion.button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          style={{ x: xTranslation }}
          className="grid grid-flow-col md:auto-cols-[200px] xl:auto-cols-max gap-6 overflow-hidden"
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...slideImages, ...slideImages].map((item, idx) => {
            return <ProjectCard item={item} key={idx} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
