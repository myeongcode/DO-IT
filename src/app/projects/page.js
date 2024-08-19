'use client';
import Link from 'next/link';
import ProjectCard from '../(components)/(home)/ProjectCard';
import { motion } from 'framer-motion';

const categories = ['ALL', 'APP', 'WEB', 'GAME'];

const projectLists = [
  {
    id: 1,
    imgSrc: '/slide/1-project-app-1.png',
    type: 'APP SERVICE',
    title: '학식모지',
  },
  {
    id: 2,
    imgSrc: '/ready_img.png',
    type: 'APP SERVICE',
    title: '모구',
  },
  {
    id: 3,
    imgSrc: '/ready_img.png',
    type: 'WEB SERVICE',
    title: 'YONSEI SPACE',
  },
  {
    id: 4,
    imgSrc: '/ready_img.png',
    type: 'APP SERVICE',
    title: 'Flanning',
  },
  {
    id: 5,
    imgSrc: '/ready_img.png',
    type: 'APP SERVICE',
    title: '교내 통학버스',
  },
  {
    id: 6,
    imgSrc: '/ready_img.png',
    type: 'APP SERVICE',
    title: 'MOCA',
  },
  {
    id: 7,
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP SERVICE',
    title: 'PINS',
  },
  {
    id: 8,
    imgSrc: '/ready_img.png',
    type: 'APP SERVICE',
    title: 'QPEED',
  },
];

export default function Projects() {
  return (
    <div className="flex justify-center pt-[105px] w-full bg-[#14171A]">
      <div className="flex flex-col py-16">
        <span className="text-[9vw] text-center md:text-left md:text-5xl text-[#fff] pb-10 font-suit font-semibold">
          PROJECTS
        </span>
        {/* <ul className="flex w-full py-10 space-x-6">
          {categories.map((category, idx) => {
            return (
              <li className="text-4xl text-white font-suit" key={idx}>
                {category}
              </li>
            );
          })}
        </ul> */}
        {/* <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-6"> */}
        <motion.div className="grid grid-cols-2 2xl:grid-cols-4 place-self-start gap-[6px] sm:gap-[30px]">
          {projectLists.map((item, idx) => {
            return (
              <Link
                key={`project-${idx}`}
                href={`/projects/${item.id}`}
                className="flex"
              >
                <ProjectCard item={item} />
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
