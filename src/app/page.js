'use client';
import Typing from './(components)/(home)/TypingLayout';
import Intro from './(components)/(home)/IntroLayout';
import Activity from './(components)/(home)/ActivityLayout';
import Goals from './(components)/(home)/GoalsLayout';
import Awards from './(components)/(home)/AwardsLayout';
import Project from './(components)/(home)/ProjectLayout';
import Apply from './(components)/(home)/ApplyLayout';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center overflow-visible">
      <Typing />
      <Intro />
      <Activity />
      <Goals />
      <Awards />
      <Project />
      <Apply />
    </div>
  );
}
