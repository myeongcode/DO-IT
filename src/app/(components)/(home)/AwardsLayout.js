'use client';

import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    year: '2023',
    element: [
      {
        id: '23-1',
        awardName: '2023 SW창업경진대회',
        award: '장려상',
        member: ['최원', '김태경', '우명규', '백지윤'],
      },
      {
        id: '23-2',
        awardName: '2023 강원 ICT 이노베이션스퀘어 해커톤 대회',
        award: '최우수상',
        member: ['김태경', '우명규'],
      },
      {
        id: '23-3',
        awardName: '제 6회 전국 스마트 IoT 아이디어 경진대회',
        award: '최우수상',
        member: ['우명규', '김태경', '박보현', '정지은', '채민석'],
      },
      {
        id: '23-4',
        awardName: '2023년 인공지능융합기술학회 하계학술대회',
        award: '우수 발표 논문상',
        member: ['최원', '백지윤', '홍정표', '최서현', '김서윤'],
      },
      {
        id: '23-5',
        awardName: '2023 학생 창업유망팀 U-300',
        award: '성장트랙 선정',
        member: ['박보현', '우명규', '김태경', '최서현', '홍정표'],
      },
    ],
  },
  {
    year: '2024',
    element: [
      {
        id: '24-1',
        awardName: '2024년 스노우맨프로젝트 창업경진대회',
        award: '장려상',
        member: ['우명규', '정연재', '전소희'],
      },
      {
        id: '24-2',
        awardName: 'AI기반 의료 데이터 분석 경진대회',
        award: '우수상',
        member: ['우명규', '김태경'],
      },
      {
        id: '24-3',
        awardName: '2024년 미래여성기업인 창업 아이디어 경진대회',
        award: '은상',
        member: ['백지윤'],
      },
      {
        id: '24-4',
        awardName: '2024학년도 디지털헬스케어 창업 경진대회',
        award: '대상',
        member: ['백지윤', '박세희'],
      },
      {
        id: '24-5',
        awardName: '2024년 인공지능융합기술학회 춘계학술대회',
        award: '우수 발표 논문상',
        member: ['정연재'],
      },
    ],
  },
  {
    year: '2025',
    element: [
      {
        id: '25-1',
        awardName: '창업 아이디어 스테이지 IR 경진대회',
        award: '대상',
        member: ['배진우', '우명규', '진기원'],
      },
    ],
  },
];

const fadeInAnimationLists = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.05 * index + 0.2,
    },
  }),
  transition: {
    delay: 0.8,
  },
};

export default function AwardsLayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].year);
  const [hoveredId, setHoveredId] = useState(null);

  function onChangeYear(e) {
    e.preventDefault();
    setActiveTab(e.target.innerHTML);
  }

  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      className="flex flex-col items-center w-full bg-[#14171A]"
    >
      <div className="w-[90%] md:w-[56%] py-14 md:py-28">
        <div className="flex flex-col md:flex-row justify-between pb-0 md:pb-32">
          <span className="text-left text-[9.3vw] md:text-6xl text-white font-suit font-semibold mb-4 md:mb-0">
            AWARDS
          </span>
          <ul className="flex flex-row items-end text-white align-text-bottom py-4 pb-6 md:pb-0 md:py-0 space-x-4">
            {tabs.map((tab, idx) => {
              return (
                <motion.li
                  key={tab.year}
                  onClick={onChangeYear}
                  className="flex relative m-0 text-2xl cursor-pointer font-pretendard"
                  variants={{
                    active: {
                      color: '#FFF',
                      fontSize: '30px',
                      fontWeight: 500,
                    },
                    inactive: {
                      color: '#657786',
                      fontSize: '24px',
                      fontWeight: 400,
                    },
                  }}
                  animate={activeTab === tab.year ? 'active' : 'inactive'}
                >
                  <span>{tab.year}</span>
                  {activeTab === tab.year ? (
                    <motion.div
                      className="absolute bottom-[-10px] left-[0px] right-[0px] h-[2px] bg-white"
                      layoutId="underline"
                    />
                  ) : null}
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col w-full">
          {tabs.map((item) => {
            return (
              <div key={item.year} className="divide-y divide-[#8c8e8f]">
                {item.element.map((element, index) => {
                  return (
                    activeTab === item.year && (
                      <motion.div
                        key={element.id}
                        variants={fadeInAnimationLists}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: true,
                        }}
                        custom={index}
                        onHoverStart={() => setHoveredId(element.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        className="flex flex-col md:flex-row w-full justify-between py-4 px-4 md:py-6 text-white font-pretendard hover:bg-white hover:text-black transition-colors duration-300 xl:items-center cursor-default"
                      >
                        <span className="text-[4.5vw] md:text-2xl pb-2 md:pb-0 ">
                          {element.awardName}
                        </span>
                        <AnimatePresence mode="wait">
                          {hoveredId === element.id &&
                          element.member.length > 0 ? (
                            <span className="text-[4vw] md:text-xl text-[#454545]">
                              {element.member.join(', ')}
                            </span>
                          ) : (
                            <span className="text-[4vw] md:text-2xl text-[#C8D3DA]">
                              {element.award}
                            </span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
