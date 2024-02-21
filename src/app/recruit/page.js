'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RecruitLanding from '../(components)/(recruit)/RecruitLanding';

export default function Recruit() {
  return (
    <div className="flex flex-col w-full items-center overflow-hidden">
      <RecruitLanding />
      <div className="flex justify-center w-full py-40">
        <div className="flex flex-col w-[70%]">
          <div className="flex flex-col space-y-3">
            <span className="text-6xl text-[#00B8FF]">DO IT.</span>
            <span className="text-6xl">1기 신규부원 모집</span>
          </div>
          <div>ddd</div>
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
