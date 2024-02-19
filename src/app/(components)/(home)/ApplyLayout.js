import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ApplyLayout() {
  return (
    <div className="flex w-full bg-[#00B8FF] justify-center">
      <div className="flex py-28 w-[70%] justify-between items-center">
        <div>
          <span className="text-3xl text-white leading-[1.5]">
            DO IT은 함께 성장해나갈
            <br />
            열정적인 당신을 기다립니다.
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
                fontWeight: 700,
              }}
              transition={{
                duration: 0.6,
              }}
              className="px-10 py-3 text-3xl  rounded-full border-2 border-[#fff] text-white"
            >
              지원하기
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
