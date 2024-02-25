import { motion } from 'framer-motion';

export default function IntroLayout() {
  return (
    <div className="flex flex-col w-[90%] md:w-[70%] font-pretend">
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
        className="text-right justify-right py-20"
      >
        <span className="text-[5.4vw] md:text-4xl xl:text-6xl text-[#657786] md:leading-[1.5]">
          개인과 팀 모두가 함께 성장하는
          <br />
          IT 개발동아리 <span className="text-[#00B8FF]">DO IT.</span>
        </span>
      </motion.div>
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        className="text-left justify-right py-20 pt-40"
      >
        <span className="text-[5.4vw] md:text-4xl xl:text-6xl text-[#657786] md:leading-[1.5]">
          새로운 도전과 협업의 경험으로
          <br />
          우리는 한걸음 더 성장해 나갑니다.
        </span>
      </motion.div>
    </div>
  );
}
