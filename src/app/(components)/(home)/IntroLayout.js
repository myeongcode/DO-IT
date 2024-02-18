import { motion } from 'framer-motion';

export default function IntroLayout() {
  return (
    <div className="flex flex-col w-[70%]">
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
        <span className="text-6xl text-[#657786] leading-snug">
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
        <span className="text-6xl text-[#657786] leading-snug">
          새로운 도전과 협업의 경험으로
          <br />
          우리는 한걸음 더 성장해 나갑니다.
        </span>
      </motion.div>
    </div>
  );
}
