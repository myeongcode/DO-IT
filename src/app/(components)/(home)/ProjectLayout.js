'use client';

import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import useMeasure from 'react-use-measure';
import Link from 'next/link';

const projectLists = [
  {
    id: 1,
    imgSrc: '/projects/1기/1/Thumbnail_YonseiHasikmoji.png',
    type: 'APP SERVICE',
    title: '연세대 학식모지',
  },
  {
    id: 2,
    imgSrc: '/projects/1기/2/Thumbnail_mogu.png',
    type: 'APP SERVICE',
    title: 'mogu',
  },
  {
    id: 3,
    imgSrc: '/projects/1기/3/Thumbnail_YONSEISPACE.png',
    type: 'WEB SERVICE',
    title: 'YONSEI SPACE',
  },
  {
    id: 4,
    imgSrc: '/projects/1기/4/Thumbnail_Flanning.jpeg',
    type: 'APP SERVICE',
    title: 'Flanning',
  },
  {
    id: 5,
    imgSrc: '/projects/1기/5/Thumbnail_YOB.png',
    type: 'APP SERVICE',
    title: 'YOB',
  },
  {
    id: 6,
    imgSrc: '/projects/1기/6/Thumbnail_MOCA.png',
    type: 'APP SERVICE',
    title: 'MOCA',
  },
  {
    id: 7,
    imgSrc: '/projects/1기/7/Thumbnail_PINS.png',
    type: 'APP SERVICE',
    title: 'PINS',
  },
  {
    id: 8,
    imgSrc: '/projects/1기/8/Thumbnail_Qpeed.png',
    type: 'APP SERVICE',
    title: 'QPEED',
  },
];

export default function ProjectLayout() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const FAST_DURATION = 25;
  const SLOW_DURATION = 100000;
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 4 - 6;

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
    <div className="hidden flex-col items-center w-full py-10  md:py-28 overflow-hidden md:flex">
      <div className="w-[90%] md:w-[56%]">
        <div className="flex flex-row justify-between pb-32 items-center">
          <span className="text-left text-[8.6vw] md:text-6xl font-suit font-semibold">
            PROJECTS
          </span>
          <Link href="/projects">
            <motion.button
              whileHover={{
                rotate: 180,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
              }}
              className="flex items-center"
            >
              <Image
                src="/plus_icon.png"
                width="50"
                height="50"
                alt="plus"
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              />
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
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
          {[
            ...projectLists,
            ...projectLists,
            ...projectLists,
            ...projectLists,
          ].map((item, idx) => {
            return <ProjectCard item={item} key={idx} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
