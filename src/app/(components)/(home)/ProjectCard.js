'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ item }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => setShowOverlay(!showOverlay)}
      className="w-[40vw] h-[64vw] sm:w-[310px] sm:h-[510px] relative flex"
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
              <h1>{item.type}</h1>
              <h1 className="font-bold text-xl">{item.title}</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Image className="object-cover" src={item.imgSrc} fill alt="slide1" />
    </motion.div>
  );
}
