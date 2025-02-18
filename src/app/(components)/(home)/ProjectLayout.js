'use client';

import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { useProjects } from '@/app/context/projectContext';

export default function ProjectLayout() {
  const { projects } = useProjects();
  const [renderedProjects, setRenderedProjects] = useState([]);

  useEffect(() => {
    setRenderedProjects([...projects, ...projects]);
  }, [projects]);

  return (
    <div className="flex flex-col items-center w-full py-10 md:py-28 overflow-hidden">
      <div className="w-[90%] md:w-[56%]">
        <div className="flex flex-row justify-between pb-12 md:pb-32 items-center">
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
      <div className="flex items-center justify-center w-full">
        <div className="flex w-fit overflow-hidden">
          <div className="flex pr-6 gap-6 animate-infiniteSlide">
            {renderedProjects.map((project, idx) => {
              return (
                <Link href={`/projects/${project.id}`} key={`project-${idx}`}>
                  <ProjectCard project={project} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
