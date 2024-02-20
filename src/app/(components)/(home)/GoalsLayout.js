import { motion } from 'framer-motion';

export default function GoalsLayout() {
  return (
    <div className="flex flex-col py-20 w-[70%]">
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
        className="text-left text-6xl"
      >
        GOALS
      </motion.span>
      <div className="flex justify-end">
        <div className="flex flex-row w-3/4 py-20 pt-32 space-x-8">
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
            className="flex flex-col"
          >
            <span className="text-4xl pb-14">성장</span>
            <span className="text-[#657786] leading-[1.8]">
              우리는 모든 단계에서 고민을 해야합니다. 고민 끝의 시도는 본인을
              성장시킬 뿐만 아니라 모두를 성장시키는 큰 힘을 가지고 있습니다.
              매사에 {"'"}Do it{"'"}이라는 정신을 가지며 활동을 추구합니다.
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
              delay: 1,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col"
          >
            <span className="text-4xl pb-14">열정</span>
            <span className="text-[#657786] leading-[1.8]">
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
              delay: 1.2,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col"
          >
            <span className="text-4xl pb-14">커뮤니케이션</span>
            <span className="text-[#657786] leading-[1.8]">
              혼자서는 모든 것을 해낼 수 없습니다. 혼자서는 작은 한 방울이지만
              함께 모이면 바다를 이루듯이, 팀과 혹은 동료들과 소통을 하며 함께
              목표를 향해 달려나가 서로를 동기부여 할 수 있도록 장려하는
              동아리입니다.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
