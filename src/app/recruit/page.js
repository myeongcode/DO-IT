'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RecruitLanding from '../(components)/(recruit)/RecruitLanding';
import RecruitFieldCard from '../(components)/(recruit)/RecruitFieldCard';

const fields = [
  {
    id: 0,
    field: 'Product Manager',
    name: '기획자',
    description:
      '프로덕트 기획 및 프로젝트가 원활히 진행될 수 있도록 전략수립과 개발자/디자이너와의 소통을 통해 효율적인 프로젝트 관리를 진행합니다.',
  },
  {
    id: 1,
    field: 'Product Designer',
    name: '디자이너',
    description:
      '브랜드 아이덴티티 (BI), 사용자 인터페이스 및 경험 (UI/UX) 디자인 등을 통해 프로젝트의 시각화 및 전반적인 사용 경험을 디자인합니다.',
  },
  {
    id: 2,
    field: 'Front-end Developer',
    name: '개발자',
    description:
      '프론트엔드 개발자로 서비스가 실제로 사용자에게 동작되고, SERVER와의 통신을 원활히 할 수 있도록 개발합니다.',
  },
  {
    id: 3,
    field: 'Back-end Developer',
    name: '개발자',
    description:
      '백엔드 개발자로 사용자가 요청하는 데이터를 저장하고 처리하며 CLIENT와의 통신을 원활히 할 수 있도록 개발합니다.',
  },
  {
    id: 4,
    field: 'Project Learner',
    name: '프로젝트 러너',
    description:
      '팀 프로젝트에 바로 참여하는 것이 어려운 분들을 위한 예비 학습자입니다. DO IT 활동(중간 발표, 성과공유회, 네트워킹, 세미나 등)들을 참여하며 다음 기수에 팀 프로젝트를 할 수 있도록 성장해 나갑니다.',
  },
];

const faqs = [
  {
    id: 0,
    category: '지원',
    questions: [
      {
        q: '비전공자인데 지원이 가능할까요?',
        a: '네, 가능합니다. 하지만 실제로 지원하고자 하시는 분야(기획 or 개발 or 디자인)에 대한 기본적인 지식은 알고 계셔야합니다. 팀 프로젝트 참여에 부담이 되신다면, Project Learner로 지원하셔서 추후에 팀 프로젝트로 참여하시길 바랍니다.',
      },
      {
        q: '프로젝트 경험이 없어도 가능한가요?',
        a: '가능합니다. DO IT은 프로젝트 협업 능력을 향상시키고 다양한 경험을 통해 성장해나가는 동아리입니다.',
      },
      {
        q: '4학년인데 지원이 가능할까요?',
        a: '가능합니다. 하지만 2학기 이상 필수로 활동하셔야 합니다.',
      },
      {
        q: '직군 간 중복지원이 가능할까요?',
        a: '불가능합니다. 본인이 원하고자 하시는 분야에만 지원해주시길 바랍니다.',
      },
    ],
  },
  {
    id: 1,
    category: '면접',
    questions: [
      {
        q: '면접은 어떻게 진행되나요?',
        a: '지원자분께서 작성해주신 지원서를 기반으로 10-15분 정도의 면접이 진행됩니다.',
      },
      {
        q: '면접(인터뷰) 일정을 조정하고 싶어요.',
        a: '해당 면접 기간과 일정이 겹치신다면 DO IT 이메일로 연락주시기 바랍니다.',
      },
    ],
  },
  {
    id: 2,
    category: '활동',
    questions: [
      {
        q: 'DO IT에서는 어떤 활동을 하게 되나요?',
        a: 'DO IT은 관심 분야가 일치하는 팀원들과 한 학기에 하나의 프로젝트를 진행하게 되며 팀장들은 주간회의, 모든 팀원들은 중간발표를 통해 프로젝트의 진행사항과 피드백을 주고받는 시간을 가집니다. 또한 성과공유회를 통해 한 학기동안 진행한 프로젝트를 발표하고 전시합니다.',
      },
      {
        q: '동아리 활동 기간은 어떻게 되나요?',
        a: '1학기는 3월부터 7월까지 활동하게 되며, 2학기는 9월부터 1월까지 진행합니다.',
      },
      {
        q: '팀빌딩은 어떻게 이뤄지나요?',
        a: "처음 활동하시는 분은 지원하는 분야에 맞춰 팀빌딩이 진행됩니다. 기존 기수 멤버들은 '팀빌딩 세션'을 통해 마음이 맞는 사람들과 따로 팀을 꾸리거나 임의로 배정될 수 있습니다.",
      },
      {
        q: '불가피한 사정이 생겨 활동을 더 이상 못하게 될 것 같아요',
        a: '혹여라도 활동 중 사정이 생겨 활동을 못하게 된다면, 운영진 내부 회의를 통해 활동 여부를 결정 할 예정입니다.',
      },
      {
        q: '활동 회비는 어떻게 되나요?',
        a: 'DO IT에서는 회비로 30,000원을 받고 있습니다. 활동하는데 만족할 수 있도록 깊이있게 활용하도록 하겠습니다.',
      },
      {
        q: 'Project Learner의 경우 구체적으로 어떤 활동들을 하게 되나요?',
        a: 'Learner분들은 관심 직군/분야로의 성장을 위해 DO IT의 활동(네트워킹, 세미나, 중간발표, 성과공유회 등)들을 참여하며 다양한 탐색을 수행하고, 관심 직군/분야의 간단한 개인프로젝트도 1개씩 진행하여 성과공유회 발표세션에서 Learner가 수행한 개인프로젝트를 회고하는 발표를 진행합니다.',
      },
    ],
  },
];

export default function Recruit() {
  const [faqCategory, setFaqCategory] = useState(0);

  function onChangeFaq(e, idx) {
    e.preventDefault();
    setFaqCategory(idx);
  }

  return (
    <div className="flex flex-col w-full items-center overflow-hidden text-[#14171A] font-pretend">
      <RecruitLanding />
      <div className="flex justify-center w-full py-20 md:py-40">
        <div className="flex flex-col w-[90%] 2xl:w-[56%] md:w-[80%]">
          <div className="flex flex-col leading-snug md:leading-snug xl:leading-snug pb-20 md:pb-40 font-suit font-semibold text-[10.5vw] md:text-4xl xl:text-6xl">
            <span className="text-[#00B8FF]">DO IT.</span>
            <span>2기 신규부원 모집</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row w-full justify-between py-10 md:py-20">
              <span className="text-[10vw] md:text-4xl xl:text-5xl font-suit">
                SCHEDULE
              </span>
              <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row w-full md:w-3/5 justify-between items-start md:items-end md:space-x-6 pt-14 md:pt-0">
                <div className="flex flex-col w-[85%] md:w-full md:justify-between items-start md:flex-col md:space-y-3 md:items-start">
                  <span className="text-[10vw] md:text-4xl xl:text-[40px]">
                    8/31 - 9/8
                  </span>
                  <span className="text-[6vw] md:text-base xl:text-xl text-[#657786]">
                    서류 접수
                  </span>
                </div>
                <div className="flex flex-col w-[85%] md:w-full md:justify-between items-start md:flex-col md:space-y-3 md:items-start">
                  <span className="text-[10vw] md:text-4xl xl:text-[40px]">
                    9/10 - 9/12
                  </span>
                  <span className="text-[6vw] md:text-base xl:text-xl text-[#657786]">
                    면접 진행
                  </span>
                </div>
                <div className="flex flex-col w-[85%] md:w-full md:justify-between items-start md:flex-col md:space-y-3 md:items-start">
                  <span className="text-[10vw] md:text-4xl xl:text-[40px]">
                    9/15
                  </span>
                  <span className="text-[6vw] md:text-base xl:text-xl text-[#657786]">
                    최종 결과
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row w-full justify-between py-10 md:py-20">
              <span className="text-[10vw] md:text-4xl xl:text-5xl font-suit">
                FIELDS
              </span>
              <div className="flex flex-row w-full md:w-3/5 pt-10 md:pt-20">
                <div className="flex flex-col w-full">
                  {fields.map((fieldItem) => {
                    return (
                      <RecruitFieldCard
                        key={fieldItem.id}
                        fieldItem={fieldItem}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col w-full justify-between py-10 md:py-20">
              <span className="text-[10vw] md:text-4xl xl:text-5xl font-suit">
                FAQ
              </span>
              <div className="flex flex-col w-full">
                <div className="flex justify-start md:justify-start flex-row space-x-6 md:space-x-14">
                  {faqs.map((faq) => {
                    return (
                      <div key={faq.id} className="flex py-10 md:py-16">
                        <motion.button
                          variants={{
                            visible: {
                              fontWeight: 'bold',
                              color: '#14171A',
                            },
                            disable: {
                              fontWeight: 'normal',
                              color: '#8A9FB1',
                            },
                          }}
                          animate={
                            faqCategory === faq.id ? 'visible' : 'disable'
                          }
                          onClick={(e) => onChangeFaq(e, faq.id)}
                          className={`text-[7vw] md:text-3xl xl:text-4xl  ${
                            faqCategory === faq.id
                              ? 'text-[#14171A] font-bold'
                              : 'text-[#8A9FB1]'
                          }`}
                        >
                          {faq.category}
                        </motion.button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col">
                  {faqs.map((faq) => {
                    return (
                      faqCategory === faq.id &&
                      faq.questions.map((faqItem, idx) => {
                        return (
                          <motion.div
                            variants={{
                              visible: {
                                opacity: 1,
                              },
                              disable: {
                                opacity: 0,
                              },
                            }}
                            initial="disable"
                            animate="visible"
                            transition={{
                              duration: 0.8,
                            }}
                            key={idx}
                            className="flex flex-col md:flex-row justify-between py-4 md:py-6 space-y-2 md:space-y-0"
                          >
                            <div className="flex flex-row space-x-2 w-[85%] md:w-[50%]">
                              <span className="text-[5vw] md:text-xl xl:text-2xl font-suit font-black text-[#8A9FB1] md:leading-[1.3]">
                                Q
                              </span>
                              <span className="text-[5vw] md:text-xl xl:text-2xl md:leading-[1.3]">
                                {faqItem.q}
                              </span>
                            </div>
                            <div className="flex pl-[5.5vw] w-[85%] md:w-[45%]">
                              <span className="text-[4vw] md:text-sm xl:text-base text-[#657786] md:leading-[1.5]">
                                {faqItem.a}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })
                    );
                  })}
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col w-full justify-between py-10 md:py-20">
              <span className="text-[10vw] md:text-4xl xl:text-5xl font-suit">
                MUST DO
              </span>
              <div className="flex flex-col items-start md:flex-row md:justify-evenly space-y-10 md:space-y-0 md:space-x-6 pt-10 md:pt-40">
                <div className="flex flex-col w-[85%] md:w-2/4 space-y-6 md:space-y-20 md:items-center">
                  <span className="text-[7vw] md:text-3xl xl:text-[38px]">
                    2학기 이상 활동
                  </span>
                  <span className="text-[4vw] md:text-base xl:text-xl md:leading-[1.8] text-[#657786] md:text-center">
                    개인적인 사정을 제외하고, 모든 동아리원은 반드시 2학기 이상
                    필수로 활동에 참여해야 합니다.
                  </span>
                </div>
                <div className="flex flex-col w-[85%] md:w-2/4 space-y-6 md:space-y-20 md:items-center">
                  <span className="text-[7vw] md:text-3xl xl:text-[38px]">
                    프로젝트 필수 참여
                  </span>
                  <span className="text-[4vw] md:text-base xl:text-xl md:leading-[1.8] text-[#657786] md:text-center">
                    프로젝트의 성공적인 마무리를 위해 Pre-Learner를 제외한 모든
                    동아리원이 적극적으로 참여해야 합니다.
                  </span>
                </div>
                <div className="flex flex-col w-[85%] md:w-2/4 space-y-6 md:space-y-20 md:items-center">
                  <span className="text-[7vw] md:text-3xl xl:text-[38px]">
                    대면 활동
                  </span>
                  <span className="text-[4vw] md:text-base xl:text-xl md:leading-[1.8] text-[#657786] md:text-center">
                    팀원들과의 원활한 소통, 프로젝트 진행을 위해서 대면활동을
                    원칙으로 진행합니다.
                  </span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="mb-20 md:mb-40">
        <Link href="/recruit/apply">
          <motion.button className="flex py-3 px-8 md:py-3 md:px-10 xl:py-5 xl:px-16 bg-[#00B8FF] rounded-full text-[6vw] md:text-2xl xl:text-3xl text-white disabled:opacity-45">
            지원 하기
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
