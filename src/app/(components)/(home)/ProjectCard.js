'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => setShowOverlay(!showOverlay)}
      className="w-[180px] h-[300px] sm:w-[200px] sm:h-[340px] lg:w-[310px] lg:h-[510px] relative flex"
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex justify-start items-end"
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{
                y: 50,
                transition: {
                  duration: 0.6,
                },
              }}
              className="flex flex-col text-white z-10 text-start m-5 leading-7 font-suit"
            >
              <h1 className="text-sm sm:text-base">{project.type}</h1>
              <h1 className="font-bold text-base sm:text-xl">
                {project.title}
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        className="object-cover"
        src={project.imgSrc}
        fill
        sizes="310px"
        alt="slide1"
      />
    </motion.div>
  );
}
