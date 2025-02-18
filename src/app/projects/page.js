'use client';
import Link from 'next/link';
import ProjectCard from '../(components)/(home)/ProjectCard';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useProjects } from '../context/projectContext';

const categories = ['ALL', 'APP', 'WEB', 'GAME'];

// const projectLists = [
//   {
//     id: 1,
//     imgSrc: '/projects/1기/1/Thumbnail_YonseiHasikmoji.png',
//     type: 'APP SERVICE',
//     title: '연세대 학식모지',
//   },
//   {
//     id: 2,
//     imgSrc: '/projects/1기/2/Thumbnail_mogu.png',
//     type: 'APP SERVICE',
//     title: 'mogu',
//   },
//   {
//     id: 3,
//     imgSrc: '/projects/1기/3/Thumbnail_YONSEISPACE.png',
//     type: 'WEB SERVICE',
//     title: 'YONSEI SPACE',
//   },
//   {
//     id: 4,
//     imgSrc: '/projects/1기/4/Thumbnail_Flanning.jpeg',
//     type: 'APP SERVICE',
//     title: 'Flanning',
//   },
//   {
//     id: 5,
//     imgSrc: '/projects/1기/5/Thumbnail_YOB.png',
//     type: 'APP SERVICE',
//     title: 'YOB',
//   },
//   {
//     id: 6,
//     imgSrc: '/projects/1기/6/Thumbnail_MOCA.png',
//     type: 'APP SERVICE',
//     title: 'MOCA',
//   },
//   {
//     id: 7,
//     imgSrc: '/projects/1기/7/Thumbnail_PINS.png',
//     type: 'APP SERVICE',
//     title: 'PINS',
//   },
//   {
//     id: 8,
//     imgSrc: '/projects/1기/8/Thumbnail_Qpeed.png',
//     type: 'APP SERVICE',
//     title: 'QPEED',
//   },
// ];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -30 : 30,
    y: i % 2 === 0 ? -30 : 30,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      type: 'spring',
    },
  }),
};

export default function Projects() {
  const { projects } = useProjects();

  return (
    <>
      <div className="flex justify-center pt-[60px] md:pt-[105px] w-full bg-[#14171A]">
        <div className="flex flex-col py-16">
          <span className="hidden md:block text-[9vw] text-left md:text-5xl text-[#fff] pb-10 font-suit font-semibold">
            PROJECTS
          </span>
          {/* 카페고리 필터링 탭 */}
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
          <motion.div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-self-start gap-[3px] md:gap-[6px]">
            {projects.map((project, idx) => {
              return (
                <Link
                  key={`project-${idx}`}
                  href={`/projects/${project.id}`}
                  className="flex"
                >
                  <motion.div
                    custom={idx} // 각 아이템의 인덱스를 custom 속성으로 전달
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
