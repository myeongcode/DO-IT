'use client';
import ProjectCard from '../(components)/(home)/ProjectCard';
import { motion } from 'framer-motion';

const categories = ['ALL', 'APP', 'WEB', 'GAME'];

const projectLists = [
  {
    id: 1,
    imgSrc: '/slide/project-app-1.png',
    type: 'APP SERVICE',
    title: 'NODE',
  },
  {
    id: 2,
    imgSrc: '/slide/project-app-2.png',
    type: 'APP SERVICE',
    title: 'Someone',
  },
  {
    id: 3,
    imgSrc: '/slide/project-app-3.png',
    type: 'APP SERVICE',
    title: 'MARU',
  },
  {
    id: 4,
    imgSrc: '/slide/project-app-4.png',
    type: 'APP SERVICE',
    title: 'CRYPTO TREND',
  },
  {
    id: 5,
    imgSrc: '/slide/project-web-1.png',
    type: 'WEB SERVICE',
    title: '든든한끼',
  },
];

export default function Projects() {
  return (
    <div className="flex justify-center pt-[105px] w-full bg-[#14171A]">
      <div className="flex flex-col w-[70%] py-16">
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
        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-6">
          {projectLists.map((item, idx) => {
            return <ProjectCard key={idx} item={item} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
