import { motion } from 'framer-motion';

export default function GoalsLayout() {
  return (
    <div className="flex flex-col w-[90%] py-10 md:py-20 md:w-[56%]">
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
          delay: 1,
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="text-left text-[9.3vw] md:text-6xl font-suit font-semibold"
      >
        GOALS
      </motion.span>
      <div className="flex md:justify-end">
        <div className="flex flex-col md:flex-row md:w-3/4 md:py-20 md:pt-32 md:space-x-8">
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
              delay: 1.2,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col py-10 pb-0 md:py-0"
          >
            <span className="text-[7.6vw] pb-6 md:text-4xl md:pb-14 font-suit fonr-medium">
              성장
            </span>
            <span className="w-[85%] md:w-full text-[#657786] text-[3.8vw] md:text-base md:leading-[1.8] font-pretend">
              우리는 모든 단계에서 고민을 해야합니다. 고민 끝의 시도는 본인을
              성장시킬 뿐만 아니라 모두를 성장시키는 큰 힘을 가지고 있습니다.
              매사에 {"'"}DO IT{"'"}이라는 정신을 가지며 활동을 추구합니다.
            </span>
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
              delay: 1.3,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col py-10 pb-0 md:py-0"
          >
            <span className="text-[7.6vw] pb-6 md:text-4xl md:pb-14 font-suit fonr-medium">
              열정
            </span>
            <span className="w-[85%] md:w-full text-[#657786] text-[3.8vw] md:text-base md:leading-[1.8] font-pretend">
              목표를 설정한다는 것은 결실을 맺을 때까지 지속적으로 추구하는 것을
              의미합니다. 흔들리지 않는 열정으로 접근해 프로젝트를 성공으로 이끌
              수 있도록 도와주는 동아리입니다.
            </span>
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
            className="flex flex-col py-10 pb-0 md:py-0"
          >
            <span className="text-[7.6vw] pb-6 md:text-4xl md:pb-14 font-suit">
              소통
            </span>
            <span className="w-[85%] md:w-full text-[#657786] text-[3.8vw] md:text-base md:leading-[1.8] font-pretend">
              혼자서는 모든 것을 해낼 수 없습니다. 혼자서는 작은 한 방울이지만,
              함께 모이면 바다를 이루듯이 팀과 혹은 동료들과 소통을 하며 함께
              목표를 향해 달려나가 서로를 동기부여 할 수 있도록 장려하는
              동아리입니다.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
