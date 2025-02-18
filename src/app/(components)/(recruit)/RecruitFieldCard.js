import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function RecruitFieldCard({ fieldItem }) {
  const [fieldsDetail, setFieldDetail] = useState(false);

  function onClickField(e) {
    e.preventDefault();
    setFieldDetail(!fieldsDetail);
  }

  return (
    <div
      onClick={onClickField}
      className="w-full font-pretendard cursor-pointer"
    >
      <div className="flex justify-between items-center py-5 md:py-10 z-20">
        <span className="text-[6vw] md:text-2xl xl:text-4xl">
          {fieldItem.field}
        </span>
        <div className="flex flex-row items-center space-x-6">
          <span className="text-[13px] md:text-base xl:text-xl">
            {fieldItem.name}
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="18"
            viewBox="0 0 34 18"
            fill="none"
            className="w-[24px]"
            variants={{
              disable: {
                rotate: 0,
              },
              visible: {
                rotate: 180,
              },
            }}
            transition={{
              duration: 0.3,
            }}
            animate={!fieldsDetail ? 'disable' : 'visible'}
          >
            <path d="M1 1L17 16L33 1" stroke="#14171A" />
          </motion.svg>
        </div>
      </div>
      <AnimatePresence>
        {fieldsDetail && (
          <motion.div
            variants={{
              visible: {
                height: 'auto',
                opacity: 1,
              },
              disable: {
                height: 0,
                opacity: 0,
              },
              exit: {
                height: 0,
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.3,
              ease: 'backOut',
            }}
            animate={fieldsDetail ? 'visible' : 'disable'}
            exit="exit"
            className="flex opacity-0 h-0 md:w-[75%] z-0"
          >
            <span
              className={`text-[4vw] md:text-base xl:text-xl text-[#657786] md:leading-[1.8] pb-5 md:pb-10 w-[90%]`}
            >
              {fieldItem.description}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <hr className="border-0 h-[1px] bg-[#14171A]" />
    </div>
  );
}
