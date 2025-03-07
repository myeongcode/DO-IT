'use client';
import Link from 'next/link';
import ProjectCard from '../(components)/(home)/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useProjects } from '../context/projectContext';
import { useEffect, useState } from 'react';

const termList = [
  {
    id: 0,
    term: 'ALL',
  },
  {
    id: 2,
    term: '2기',
  },
  {
    id: 1,
    term: '1기',
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -10 : 10,
    y: i % 2 === 0 ? -10 : 10,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'fade',
    },
  }),
};

export default function Projects() {
  const { projects } = useProjects();
  const [projectList, setProjectList] = useState([]);
  const [filter, setFilter] = useState(termList[0].id);

  useEffect(() => {
    if (projects) {
      // 기수가 높은 순서대로 정렬
      const sortedProjects = [...projects].sort((a, b) => {
        const aNums = a.term.filter((item) => typeof item === 'number');
        const bNums = b.term.filter((item) => typeof item === 'number');

        const aValue = aNums.length > 0 ? Math.max(...aNums) : 0;
        const bValue = bNums.length > 0 ? Math.max(...bNums) : 0;
        return bValue - aValue;
      });

      if (filter === 0) {
        setProjectList(sortedProjects);
      } else {
        const filterTermProjects = sortedProjects.filter((project) =>
          project.term.includes(filter)
        );
        setProjectList(filterTermProjects);
      }
    }
  }, [projects, filter]);

  return (
    <>
      <div className="flex justify-center pt-[60px] md:pt-[105px] w-full bg-[#14171A]">
        <div className="flex flex-col py-16">
          <span className="hidden md:block text-[9vw] text-left md:text-5xl text-[#fff] pb-10 font-suit font-semibold">
            PROJECTS
          </span>
          {/* 추후에 기수 필터링 탭으로 사용하기 */}
          <ul className="flex w-full py-10 space-x-6 text-[9vw] md:text-4xl">
            {termList.map((term, idx) => {
              const isActive = term.id === filter;
              return (
                <li
                  onClick={() => {
                    setFilter(term.id);
                  }}
                  key={`term-${idx}`}
                  className={`${
                    isActive ? 'text-[#FFFFFF]' : 'text-[#657786]'
                  } cursor-pointer transition-colors duration-200`}
                >
                  {term.term}
                </li>
              );
            })}
          </ul>
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-self-start gap-[3px] md:gap-[6px]"
              key={filter}
            >
              {projectList.map((project, idx) => {
                return (
                  <Link
                    key={`project-${idx}`}
                    href={`/projects/${project.id}`}
                    className="flex"
                  >
                    <motion.div
                      custom={idx}
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
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
