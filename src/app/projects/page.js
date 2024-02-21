'use client';
import ProjectCard from '../(components)/(home)/ProjectCard';
import { motion } from 'framer-motion';

const categories = ['ALL', 'APP', 'WEB', 'GAME'];

const projectLists = [
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

export default function Projects() {
  return (
    <div className="flex justify-center pt-[105px] w-full bg-[#14171A]">
      <div className="flex flex-col w-[70%] py-40">
        <ul className="flex w-full py-10 space-x-6">
          {categories.map((category, idx) => {
            return (
              <li className="text-4xl text-white font-suit" key={idx}>
                {category}
              </li>
            );
          })}
        </ul>
        <motion.div className="grid grid-cols-4 place-items-center gap-y-6">
          {projectLists.map((item, idx) => {
            return <ProjectCard key={idx} item={item} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
