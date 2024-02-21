import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ActivityLayout() {
  return (
    <div className="flex flex-col pt-40 w-[90%] md:w-[70%]">
      <motion.span
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="text-left text-[8.6vw] md:text-6xl"
      >
        WHAT DO {"'"}DO IT{"'"}
      </motion.span>
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
          delay: 0.8,
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="w-full py-10 md:py-20"
      >
        <Image
          src="/project-img.jpg"
          width={2400}
          height={0}
          alt="projectImage"
          className="max-h-40 md:max-h-64 object-cover md:mb-10 brightness-50"
        />
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex justify-between items-center w-full md:block md:w-1/2 leading-[2.2]">
            <span className="text-[6vw] md:text-4xl font-light">PROJECT</span>{' '}
            <br />
            <span className="text-[4.4vw] md:text-xl">프로젝트</span>
          </div>
          <div className="md:w-1/2">
            <span className="text-[#657786] text-[3.6vw] md:text-base leading-[1.8]">
              모든 동아리 구성원이 한 학기동안 팀빌딩을 통해 프로젝트를
              진행하고, 중간발표를 통해 각 팀들의 진행상황을 공유하는 시간을
              가집니다.
            </span>
            <br />
            <br />
            <span className="text-[#657786] text-[3.6vw] md:text-base leading-[1.8]">
              또한 성과 공유회 Dev IT. 에서 한학기에 진행한 프로젝트를 체험할 수
              있는 부스 행사와 프로젝트 진행 중 직면했던 문제점을 공유하고 원인
              분석과 해결 방안을 도출합니다.
            </span>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row md:space-x-5 w-full">
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
            delay: 1,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="w-full py-4 md:w-1/2 md:py-0"
        >
          <Image
            src="/networking-img.jpg"
            width={2400}
            height={0}
            alt="projectImage"
            className="max-h-40 md:max-h-64 object-cover md:mb-10 brightness-50"
          />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center md:block leading-[2.2]">
              <span className="text-[6vw] md:text-4xl font-light">
                NETWORKING DAY
              </span>{' '}
              <br />
              <span className="text-[4.4vw] md:text-xl">네트워킹 데이</span>
            </div>
            <div className="md:py-10 md:pb-14">
              <span className="text-[#657786] text-[3.6vw] md:text-base leading-[1.8]">
                구성원 모두가 참여해 서로 교류하며 친목을 도모하는 네트워킹
                데이를 진행합니다.
              </span>
            </div>
          </div>
        </motion.div>
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
            delay: 1.4,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="w-full py-4 md:w-1/2 md:py-0"
        >
          <Image
            src="/seminar-img.jpg"
            width={2400}
            height={0}
            alt="projectImage"
            className="max-h-40 md:max-h-64 object-cover md:mb-10 brightness-50"
          />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center md:block leading-[2.2]">
              <span className="text-[6vw] md:text-4xl font-light">SEMINAR</span>{' '}
              <br />
              <span className="text-[4.4vw] md:text-xl">세미나</span>
            </div>
            <div className="md:py-10 md:pb-14">
              <span className="text-[#657786] text-[3.6vw] md:text-base leading-[1.8]">
                선배/현직자 등을 초청해 직무, 업계 현황, 조언 등 동아리
                구성원에게 도움이 되는 주제로 세미나를 개최합니다.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <hr />
    </div>
  );
}
