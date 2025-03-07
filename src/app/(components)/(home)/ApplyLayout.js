import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ApplyLayout() {
  return (
    <div className="flex w-full bg-[#00B8FF] justify-center">
      <div className="flex flex-col md:flex-row mx-8 py-8 md:py-28 w-[90%] md:w-[56%] justify-between md:items-center md:mx-0">
        <div className="md:text-left pt-4 pb-6 md:pt-0 md:pb-0">
          <span className="text-[6.3vw] md:text-3xl text-white md:leading-[1.5] font-suit">
            DO IT은 함께 성장해나갈 <br /> 열정적인 당신을 기다립니다.
          </span>
        </div>
        <div>
          <Link href="/recruit">
            <motion.button
              initial={{
                backgroundColor: '#00B8FF',
                color: '#fff',
              }}
              whileHover={{
                backgroundColor: '#fff',
                color: '#00B8FF',
              }}
              transition={{
                duration: 0.6,
              }}
              className="px-[6vw] py-[1vw] md:px-10 md:py-3 text-[5vw] md:text-3xl  rounded-full border-2 border-[#fff] text-white font-pretendard"
            >
              지원하기
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
