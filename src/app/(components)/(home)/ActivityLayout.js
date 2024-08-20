import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ActivityLayout() {
  return (
    <div className="flex flex-col pt-20 md:pt-40 w-[90%] md:w-[56%]">
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
          delay: 0.4,
          duration: 1,
        }}
        viewport={{
          once: true,
          amount: 1,
        }}
        className="text-left text-[9.3vw] md:text-6xl font-suit font-semibold"
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
          duration: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="w-full py-8 md:py-20"
      >
        <Image
          src="/IMG_2206.JPG"
          width={2400}
          height={0}
          alt="projectImage"
          className="h-40 md:h-[400px] object-cover md:mb-10 brightness-[80%]"
        />
        <div className="flex flex-col w-full md:flex-row justify-between">
          <div className="flex flex-col items-start w-full leading-[1.5] md:w-1/2 md:leading-[2.2] my-6 mb-8 md:my-0 md:mb-0">
            <span className="text-[7.6vw] md:text-4xl font-light font-suit">
              PROJECT
            </span>
            <span className="text-[4.4vw] md:text-xl font-suit">프로젝트</span>
          </div>
          <div className="w-[85%] md:w-3/4 tracking-tight">
            <span className="text-[#657786] text-[3.6vw] md:text-base md:leading-[1.8] font-pretend">
              모든 동아리 구성원이 한 학기동안 팀빌딩을 통해 프로젝트를
              진행하고, 중간발표를 통해 각 팀들의 진행상황을 공유하는 시간을
              가집니다.
            </span>
            <br />
            <br />
            <span className="text-[#657786] text-[3.6vw] md:text-base md:leading-[1.8] font-pretend">
              또한 성과 공유회 Dev IT. 부스세션을 통해 프로젝트를 전시하고, 발표
              세션을 통해 프로젝트 진행 중 직면했던 문제점과 해결 과정을
              공유합니다.
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
            duration: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="w-full py-8 md:w-1/2 md:py-0"
        >
          <Image
            src="/IMG_2470.JPG"
            width={2400}
            height={0}
            alt="projectImage"
            className="h-40 md:h-60 xl:h-80 object-cover md:mb-10 brightness-50"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-start leading-[1.5] my-6 mb-8 md:my-0 md:mb-0">
              <span className="text-[7.6vw] md:text-4xl font-light font-suit">
                NETWORKING DAY
              </span>
              <span className="text-[4.4vw] md:text-xl font-suit">
                네트워킹 데이
              </span>
            </div>
            <div className="w-[85%] md:w-full md:pt-6 md:pb-14 tracking-tight">
              <span className="text-[#657786] text-[3.6vw] md:text-base md:leading-[1.8] font-pretend">
                구성원 모두 참여해 서로 교류하며 친목을 도모하는 네트워킹 데이를
                진행합니다.
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
            delay: 0.4,
            duration: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="w-full py-8 pb-16 md:w-1/2 md:py-0"
        >
          <Image
            src="/seminar-img.jpg"
            width={2400}
            height={0}
            alt="projectImage"
            className="h-40 md:h-60 xl:h-80 object-cover md:mb-10 brightness-50"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-start leading-[1.5] my-6 mb-8 md:my-0 md:mb-0">
              <span className="text-[7.6vw] md:text-4xl font-light font-suit">
                SEMINAR
              </span>
              <span className="text-[4.4vw] md:text-xl font-suit">세미나</span>
            </div>
            <div className="w-[85%] md:w-full md:pt-6 md:pb-14 tracking-tight">
              <span className="text-[#657786] text-[3.6vw] md:text-base md:leading-[1.8] font-pretend">
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
