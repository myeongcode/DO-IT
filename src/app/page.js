'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Typing from './(components)/(home)/TypingLayout';
import Intro from './(components)/(home)/IntroLayout';
import Activity from './(components)/(home)/ActivityLayout';
import Goals from './(components)/(home)/GoalsLayout';
import Awards from './(components)/(home)/AwardsLayout';

export default function Home() {
  const [awardYear, setAwardYear] = useState();

  return (
    <div className="pt-[105px] flex flex-col w-full items-center overflow-visible">
      <Typing />
      <Intro />
      <Activity />
      <Goals />
      <Awards />
      <div className="flex flex-col items-center w-full">
        <div className="w-[70%] py-28">
          <div className="flex flex-row justify-between pb-32">
            <span className="text-left text-6xl ">PROJECTS</span>
            <div className="align-text-bottom">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
