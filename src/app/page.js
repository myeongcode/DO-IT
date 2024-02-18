'use client';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-[105px] flex flex-col w-full items-center overflow-visible">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex justify-center py-40 w-3/4"
      >
        <div className="text-7xl relative text-nowrap leading-snug">
          <span className="absolute left-[-100px] top-[20px] text-6xl text-[#E1E8ED]">
            1
          </span>
          <span className="text-[#00B8FF]">if</span> (DEVELOP TOGETHER){' '}
          <span className="text-[#00B8FF]">{'{'}</span> <br />
          <span className="absolute left-[-100px] top-[124px] text-6xl text-[#E1E8ED]">
            2
          </span>
          <span className="absolute left-20">
            <span className="text-[#00B8FF]">return</span> {'"'}
            <Typewriter
              words={[
                'GROW TOGETHER',
                'CLIENT DEVELOPER',
                'SERVER DEVELOPER',
                'PROJECT MANAGER',
                'PRODUCT DESIGNER',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
            {'"'}
          </span>
          <br />
          <span className="absolute left-[-100px] top-[226px] text-6xl text-[#E1E8ED]">
            3
          </span>
          <span className="text-[#00B8FF]">{'}'}</span>
        </div>
      </motion.div>
      <div className="flex flex-col w-3/4">
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-right justify-right py-16"
        >
          <span className="text-4xl text-[#657786] leading-snug">
            개인과 팀 모두가 함께 성장하는
            <br />
            IT 개발동아리 <span className="text-[#00B8FF]">DO IT.</span>
          </span>
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-left justify-right py-16"
        >
          <span className="text-4xl text-[#657786] leading-snug">
            새로운 도전과 협업의 경험으로
            <br />
            우리는 한걸음 더 성장해 나갑니다.
          </span>
        </motion.div>
      </div>
      <div className="flex flex-col pt-40 w-3/4">
        <span className="text-left text-5xl">
          WHAT DO {"'"}DO IT{"'"}
        </span>
        <div className="w-full py-20">
          <Image
            src="/project-img.jpg"
            width={2400}
            height={0}
            alt="projectImage"
            className="max-h-64 object-cover mb-10 brightness-50"
          />
          <div className="flex w-full">
            <div className="w-1/2 leading-[2.2]">
              <span className="text-4xl font-light">PROJECT</span> <br />
              <span className="text-xl">프로젝트</span>
            </div>
            <div className="w-1/2">
              <span className="text-[#657786] leading-[1.8]">
                모든 동아리 구성원이 한 학기동안 팀빌딩을 통해 프로젝트를
                진행하고, 중간발표를 통해 각 팀들의 진행상황을 공유하는 시간을
                가집니다.
              </span>
              <br />
              <br />
              <span className="text-[#657786] leading-[1.8]">
                또한 성과 공유회 Dev IT. 에서 한학기에 진행한 프로젝트를 체험할
                수 있는 부스 행사와 프로젝트 진행 중 직면했던 문제점을 공유하고
                원인 분석과 해결 방안을 도출합니다.
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 w-full">
          <div className="w-1/2">
            <Image
              src="/networking-img.jpg"
              width={2400}
              height={0}
              alt="projectImage"
              className="max-h-64 object-cover mb-10 brightness-50"
            />
            <div className="flex flex-col w-full">
              <div className="leading-[2.2]">
                <span className="text-4xl font-light">NETWORKING DAY</span>{' '}
                <br />
                <span className="text-xl">네트워킹 데이</span>
              </div>
              <div className="py-10 pb-14">
                <span className="text-[#657786] leading-[1.8]">
                  구성원 모두가 참여해 서로 교류하며 친목을 도모하는 네트워킹
                  데이를 진행합니다.
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/seminar-img.jpg"
              width={2400}
              height={0}
              alt="projectImage"
              className="max-h-64 object-cover mb-10 brightness-50"
            />
            <div className="flex flex-col w-full">
              <div className="leading-[2.2]">
                <span className="text-4xl font-light">SEMINAR</span> <br />
                <span className="text-xl">세미나</span>
              </div>
              <div className="py-10 pb-14">
                <span className="text-[#657786] leading-[1.8]">
                  선배/현직자 등을 초청해 직무, 업계 현황, 조언 등 동아리
                  구성원에게 도움이 되는 주제로 세미나를 개최합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col py-20 w-3/4">
        <span className="text-left text-5xl">GOALS</span>
        <div className="flex justify-end">
          <div className="flex flex-row w-3/4 py-20 space-x-8">
            <div className="flex flex-col">
              <span className="text-4xl pb-14">성장</span>
              <span className="text-[#657786] leading-[1.8]">
                우리는 모든 단계에서 고민을 해야합니다. 고민 끝의 시도는 본인을
                성장시킬 뿐만 아니라 모두를 성장시키는 큰 힘을 가지고 있습니다.
                매사에 {"'"}Do it{"'"}이라는 정신을 가지며 활동을 추구합니다.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl pb-14">열정</span>
              <span className="text-[#657786] leading-[1.8]">
                목표를 설정한다는 것은 결실을 맺을 때까지 지속적으로 추구하는
                것을 의미합니다. 흔들리지 않는 열정으로 접근해 프로젝트를
                성공으로 이끌 수 있도록 도와주는 동아리입니다.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl pb-14">커뮤니케이션</span>
              <span className="text-[#657786] leading-[1.8]">
                혼자서는 모든 것을 해낼 수 없습니다. 혼자서는 작은 한 방울이지만
                함께 모이면 바다를 이루듯이, 팀과 혹은 동료들과 소통을 하며 함께
                목표를 향해 달려나가 서로를 동기부여 할 수 있도록 장려하는
                동아리입니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-[#14171A]">
        <div className="flex flex-row py-20 w-3/4 justify-between">
          <span className="text-left text-5xl text-white">AWARDS</span>
          <div className="text-white align-text-bottom">
            <span>2024</span>
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
