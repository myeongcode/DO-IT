import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  {
    year: '2023',
    label: '2023',
    element: [
      {
        awardName: '2023 SW창업경진대회',
        award: '우수상 / 장려상',
      },
      {
        awardName: '2023 강원 ICT 이노베이션스퀘어 해커톤 대회',
        award: '최우수상',
      },
      {
        awardName: '2023 의료 빅데이터 활용 AI 온라인 해커톤 대회',
        award: '우수상',
      },
      {
        awardName: '제 6회 전국 스마트 IoT 아이디어 경진대회',
        award: '최우수상',
      },
      {
        awardName: '2023 인공지능융합기술학회 하계학술대회',
        award: '최우수상',
      },
      {
        awardName: '2023 학생 창업유망팀 U-300',
        award: '성장트랙 선정',
      },
      {
        awardName: '2023 SW창업 아이디어 경진대회',
        award: '장려상',
      },
      {
        awardName: '',
        award: '',
      },
    ],
  },
  {
    year: '2024',
    label: '2024',
    element: [
      {
        awardName: '2024 SW창업경진대회',
        award: '우수상',
      },
      {
        awardName: '',
        award: '',
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
      delay: 0.05 * index,
    },
  }),
};

export default function AwardsLayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].year);

  function onChangeYear(e) {
    e.preventDefault();
    setActiveTab(e.target.innerHTML);
  }

  return (
    <div className="flex flex-col items-center w-full bg-[#14171A] min-h-[1027px]">
      <div className="w-[70%] py-28">
        <div className="flex flex-row justify-between pb-32">
          <span className="text-left text-6xl text-white">AWARDS</span>
          <ul className="flex flex-row items-end text-white align-text-bottom">
            {tabs.map((tab, idx) => {
              return (
                <motion.li
                  key={tab.year}
                  onClick={onChangeYear}
                  className="flex relative m-3 text-2xl cursor-pointer"
                  variants={{
                    active: {
                      color: '#FFF',
                      fontSize: '30px',
                      fontWeight: 600,
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
                        key={element.awardName}
                        variants={fadeInAnimationLists}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: true,
                        }}
                        custom={index}
                        className="flex w-full justify-between py-6 text-white"
                      >
                        <span className="text-2xl">{element.awardName}</span>
                        <span className="text-2xl">{element.award}</span>
                      </motion.div>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
