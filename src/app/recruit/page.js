'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RecruitLanding from '../(components)/(recruit)/RecruitLanding';

const fields = [
  {
    id: 0,
    field: 'Product Manager (PM)',
    name: '기획자',
    description:
      '프로덕트 기획 및 프로젝트가 원활히 진행될 수 있도록 전략수립과 개발자/디자이너와의 소통을 통해 효율적인 프로젝트 관리를 진행합니다.',
  },
  {
    id: 1,
    field: 'Product Designer (PD)',
    name: '디자이너',
    description:
      '브랜드 아이덴티티 (BI), 사용자 인터페이스 및 경험 (UI/UX) 디자인 등을 통해 프로젝트의 시각화 및 전반적인 사용 경험을 디자인합니다.',
  },
  {
    id: 2,
    field: 'Front-end Developer (FE)',
    name: 'CLIENT 개발자',
    description:
      '프론트엔드 개발자로 서비스가 실제로 사용자에게 동작되고, SERVER와의 통신을 원활히 할 수 있도록 개발합니다.',
  },
  {
    id: 3,
    field: 'Back-end Developer (BE)',
    name: 'SERVER 개발자',
    description:
      '백엔드 개발자로 사용자가 요청하는 데이터를 저장하고 처리하며 CLIENT와의 통신을 원활히 할 수 있도록 개발합니다.',
  },
];

export default function Recruit() {
  const [fieldsDetail, setFieldDetail] = useState(false);

  function onClickField(e) {
    e.preventDefault();
    setFieldDetail(!fieldsDetail);
  }

  return (
    <div className="flex flex-col w-full items-center overflow-hidden">
      <RecruitLanding />
      <div className="flex justify-center w-full py-40">
        <div className="flex flex-col w-[70%]">
          <div className="flex flex-col space-y-3 pb-40 font-suit font-bold">
            <span className="text-6xl text-[#00B8FF]">DO IT.</span>
            <span className="text-6xl">1기 신규부원 모집</span>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full justify-between py-20">
              <span className="text-5xl font-suit">SCHEDULE</span>
              <div className="flex flex-row w-3/5 justify-between font-pretend">
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">2/27 - 3/3</span>
                  <span className="text-xl text-[#657786]">서류 접수</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">3/5 - 3/7</span>
                  <span className="text-xl text-[#657786]">면접 진행</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">3/9</span>
                  <span className="text-xl text-[#657786]">최종 결과</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex w-full justify-between py-20">
              <span className="text-5xl font-suit">FIELDS</span>
              <div className="flex flex-row w-3/5 font-pretend">
                <div className="flex flex-col w-full">
                  {fields.map((fieldItem, idx) => {
                    return (
                      <div key={idx} className="w-full">
                        <div className="flex justify-between items-center py-10">
                          <span className="text-4xl">{fieldItem.field}</span>
                          <div className="flex flex-row items-center space-x-4">
                            <span className="text-xl text-[#657786]">
                              {fieldItem.name}
                            </span>
                            <button onClick={onClickField}>
                              <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="18"
                                viewBox="0 0 34 18"
                                fill="none"
                                className="w-[24px]"
                                variants={{
                                  disable: {
                                    rotate: 0,
                                  },
                                  visible: {
                                    rotate: 180,
                                  },
                                }}
                                transition={{
                                  duration: 0.3,
                                }}
                                animate={!fieldsDetail ? 'disable' : 'visible'}
                              >
                                <path d="M1 1L17 16L33 1" stroke="#14171A" />
                              </motion.svg>
                            </button>
                          </div>
                        </div>
                        <motion.div
                          className={`${
                            fieldsDetail ? 'block' : 'hidden'
                          } pb-10`}
                        >
                          <span className="text-xl text-[#657786]">
                            {fieldItem.description}
                          </span>
                        </motion.div>
                        <hr />
                      </div>
                    );
                  })}
                  {/* 
                  <div className="w-full">
                    <div className="flex justify-between items-center py-10">
                      <span className="text-4xl">Product Designer (PD)</span>
                      <div className="flex flex-row items-center space-x-4">
                        <span className="text-xl text-[#657786]">디자이너</span>
                        <span>아이콘</span>
                      </div>
                    </div>
                    <div className="hidden pb-10">
                      <span className="text-xl text-[#657786]">
                        브랜드 아이덴티티 (BI), 사용자 인터페이스 및 경험
                        (UI/UX) 디자인 등을 통해 프로젝트의 시각화 및 전반적인
                        사용 경험을 디자인합니다.
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="w-full">
                    <div className="flex justify-between items-center py-10">
                      <span className="text-4xl">Front-end Developer (FE)</span>
                      <div className="flex flex-row items-center space-x-4">
                        <span className="text-xl text-[#657786]">
                          CLIENT 개발자
                        </span>
                        <span>아이콘</span>
                      </div>
                    </div>
                    <div className="hidden pb-10">
                      <span className="text-xl text-[#657786]">
                        프론트엔드 개발자로 서비스가 실제로 사용자에게 동작되고,
                        SERVER와의 통신을 원활히 할 수 있도록 개발합니다.
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="w-full">
                    <div className="flex justify-between items-center py-10">
                      <span className="text-4xl">Back-end Developer (FE)</span>
                      <div className="flex flex-row items-center space-x-4">
                        <span className="text-xl text-[#657786]">
                          SERVER 개발자
                        </span>
                        <span>아이콘</span>
                      </div>
                    </div>
                    <div className="hidden pb-10">
                      <span className="text-xl text-[#657786]">
                        백엔드 개발자로 사용자가 요청하는 데이터를 저장하고
                        처리하며 CLIENT와의 통신을 원활히 할 수 있도록
                        개발합니다.
                      </span>
                    </div>
                  </div> */}
                  <hr />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex w-full justify-between py-20">
              <span className="text-5xl font-suit">FAQ</span>
              <div className="flex flex-row space-x-36 font-pretend">
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">2/27 - 3/3</span>
                  <span className="text-xl text-[#657786]">서류 접수</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">3/5 - 3/7</span>
                  <span className="text-xl text-[#657786]">면접 진행</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">3/9</span>
                  <span className="text-xl text-[#657786]">최종 결과</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex w-full justify-between py-20">
              <span className="text-5xl font-suit">MUST DO</span>
              <div className="flex flex-row space-x-36 font-pretend">
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">2/27 - 3/3</span>
                  <span className="text-xl text-[#657786]">서류 접수</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">3/5 - 3/7</span>
                  <span className="text-xl text-[#657786]">면접 진행</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-5xl">3/9</span>
                  <span className="text-xl text-[#657786]">최종 결과</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="">
          <span className="">DO IT.</span>
          <br />
          <span className="">1기 신규부원 모집</span>

          <div className="">
            <div className="">
              <p className="">SCHEDULE</p>
            </div>
            <div className="">
              <span className="">2/27 - 3/3</span>
              <div className="">서류 접수</div>
            </div>

            <div className="">
              <span className="">3/5 - 3/7</span>
              <div className="">면접 진행</div>
            </div>

            <div className="">
              <span className="">3/9</span>
              <div className="">최종 결과</div>
            </div>
          </div>
        </div>
      </div> */}

      <div></div>

      <div>
        <p>FIELDS</p>
      </div>

      <div></div>

      <div>
        <div className="">
          <div>FAQ</div>
        </div>

        <div className="">
          <div className="">지원</div>
          <div className="">면접</div>
          <div className="">활동</div>
        </div>

        {/* {activeTab === '지원' && (
          <>
            <div className={s.inlineContainer}>
              <div className={s.faq_icon}>Q</div>
              <div
                className={s.faq_Q}
                style={{
                  marginTop: '99px',
                  marginLeft: '26px',
                }}
              >
                비전공자인데 지원이 가능할까요?
              </div>
              <div
                className={s.faq_A}
                style={{
                  marginTop: '99px',
                  marginLeft: '30px',
                  marginRight: '300px',
                }}
              >
                네, 가능합니다. 하지만 실제로 지원하고자 하시는 분야(기획 or
                개발 or 디자인)에 <br />
                대한 지식을 가지고 계셔야합니다.
              </div>
            </div>

            <div className={s.inlineContainer}>
              <div
                className={s.faq_icon}
                style={{
                  marginTop: '87px',
                }}
              >
                Q
              </div>
              <div
                className={s.faq_Q}
                style={{
                  marginTop: '87px',
                  marginLeft: '26px',
                }}
              >
                프로젝트 경험이 없어도 가능한가요?
              </div>
              <div
                className={s.faq_A}
                style={{
                  marginTop: '87px',
                  marginLeft: '30px',
                  marginRight: '300px',
                }}
              >
                가능합니다. DO IT은 프로젝트 협업 능력을 향상시키고 다양한
                경험을 통해 성장해
                <br />
                나가는 동아리입니다.
              </div>
            </div>

            <div className={s.inlineContainer}>
              <div
                className={s.faq_icon}
                style={{
                  marginTop: '87px',
                }}
              >
                Q
              </div>
              <div
                className={s.faq_Q}
                style={{
                  marginTop: '87px',
                  marginLeft: '26px',
                }}
              >
                4학년인데 지원이 가능할까요?
              </div>
              <div
                className={s.faq_A}
                style={{
                  marginTop: '87px',
                  marginLeft: '30px',
                  marginRight: '300px',
                }}
              >
                가능합니다. 하지만 2학기 이상 필수로 활동하셔야 합니다.
              </div>
            </div>

            <div className={s.inlineContainer}>
              <div
                className={s.faq_icon}
                style={{
                  marginTop: '87px',
                }}
              >
                Q
              </div>
              <div
                className={s.faq_Q}
                style={{
                  marginTop: '87px',
                  marginLeft: '26px',
                }}
              >
                직군 간 중복지원이 가능할까요?
              </div>
              <div
                className={s.faq_A}
                style={{
                  marginTop: '87px',
                  marginLeft: '30px',
                  marginRight: '300px',
                }}
              >
                불가능합니다. 본인이 원하고자 하시는 분야에만 지원해주시길
                바랍니다.
              </div>
            </div>
          </>
        )} */}
        {/* 
        {activeTab === '면접' && <div>면접에 대한 내용</div>}
        {activeTab === '활동' && <div>활동에 대한 내용</div>} */}

        <div></div>

        <div className="">MUST DO</div>

        <div className="">
          <div className="">2학기 이상 활동</div>

          <div className="">프로젝트 필수 참여</div>

          <div>대면 할동</div>
        </div>

        <div className="">
          <div className="">
            개인적인 사정을 제외하고, 모든 동아리원은
            <br />
            반드시 2학기 이상 필수로 활동에 참여해야 합니다.
          </div>

          <div className="">
            프로젝트의 성공적인 마무리를 위해
            <br />
            모든 동아리원들이 적극적으로 참여해야 합니다.
          </div>

          <div className="">
            팀원들과의 원활한 소통, 프로젝트 진행을 위해서
            <br />
            대면 활동을 원칙으로 진행합니다.
          </div>
        </div>
        <div></div>
      </div>

      <div>
        <button className="">
          <Link href="/recruit/apply">지원하기</Link>
        </button>
      </div>
    </div>
  );
}
