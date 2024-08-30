import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function TermForm({ formData, setFormData }) {
  const [selectedInformTerm, setSelectedInformTerm] = useState(
    formData.informTerm
  );
  const [viewInformTerm, setViewInformTerm] = useState(false);
  const [selectedPortfolioTerm, setSelectedPortfolioTerm] = useState(
    formData.portfolioTerm
  );
  const [viewPortfolioTerm, setViewPortfolioTerm] = useState(false);

  const informTerms = [true, false];
  const portfolioTerms = [true, false];

  useEffect(() => {
    setFormData({
      ...formData,
      informTerm: selectedInformTerm,
      portfolioTerm: selectedPortfolioTerm,
    });
  }, [selectedInformTerm, selectedPortfolioTerm]);

  return (
    <div className="flex flex-col w-full font-suit">
      <AnimatePresence>
        {viewInformTerm ? (
          <Term1Modal
            setViewInformTerm={setViewInformTerm}
            viewInformTerm={viewInformTerm}
          />
        ) : null}
        {viewPortfolioTerm ? (
          <Term2Modal
            setViewPortfolioTerm={setViewPortfolioTerm}
            viewPortfolioTerm={viewPortfolioTerm}
          />
        ) : null}
      </AnimatePresence>

      <div className="w-full">
        <span className="text-2xl text-[#657786]">11</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="md:w-[40%] pt-10">
          <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
            개인정보 수집에 대한 동의
          </span>
        </div>
        <div className="md:w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend pb-40 space-y-16">
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="flex flex-row w-[30%] text-[#8A9FB1]">
              개인정보(인적사항) 수집
              <Image
                src="/question-mark.png"
                width={15}
                height={15}
                alt="questionMark"
                className="object-contain ml-2 w-[30px] md:w-[20px]"
                onClick={() => {
                  setViewInformTerm(true);
                }}
              />
            </label>
            <div className="grid grid-cols-2 w-[60%] gap-4 gap-y-6">
              {informTerms.map((term, idx) => {
                return (
                  <InformTermCard
                    key={idx}
                    term={term}
                    setSelectedInformTerm={setSelectedInformTerm}
                    selectedInformTerm={selectedInformTerm}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="flex flex-row w-[30%] text-[#8A9FB1]">
              개인정보(포트폴리오) 수집
              <Image
                src="/question-mark.png"
                width={15}
                height={15}
                alt="questionMark"
                className="object-contain ml-2 w-[30px] md:w-[20px]"
                onClick={() => {
                  setViewPortfolioTerm(true);
                }}
              />
            </label>
            <div className="grid grid-cols-2 w-[60%] gap-4 gap-y-6">
              {portfolioTerms.map((term, idx) => {
                return (
                  <PortfolioTermCard
                    key={idx}
                    term={term}
                    setSelectedPortfolioTerm={setSelectedPortfolioTerm}
                    selectedPortfolioTerm={selectedPortfolioTerm}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InformTermCard({ term, setSelectedInformTerm, selectedInformTerm }) {
  return (
    <div
      onClick={() => {
        setSelectedInformTerm(term);
      }}
      className="w-full cursor-pointer font-pretend"
    >
      <div
        className={`flex flex-col items-center space-y-3 pb-3  ${
          selectedInformTerm === term ? 'text-[#14171A]' : 'text-[#8A9FB1]'
        }`}
      >
        <span className="text-[4vw] md:text-xl">
          {term ? '동의함' : '동의하지 않음'}
        </span>
      </div>
      <hr
        className={`border-0 h-[1px]  ${
          selectedInformTerm === term ? 'bg-[#14171A]' : 'bg-[#C8D3DA]'
        }`}
      />
    </div>
  );
}

function PortfolioTermCard({
  term,
  setSelectedPortfolioTerm,
  selectedPortfolioTerm,
}) {
  return (
    <div
      onClick={() => {
        setSelectedPortfolioTerm(term);
      }}
      className="w-full cursor-pointer font-pretend"
    >
      <div
        className={`flex flex-col items-center space-y-3 pb-3  ${
          selectedPortfolioTerm === term ? 'text-[#14171A]' : 'text-[#8A9FB1]'
        }`}
      >
        <span className="text-[4vw] md:text-xl">
          {term ? '동의함' : '동의하지 않음'}
        </span>
      </div>
      <hr
        className={`border-0 h-[1px]  ${
          selectedPortfolioTerm === term ? 'bg-[#14171A]' : 'bg-[#C8D3DA]'
        }`}
      />
    </div>
  );
}

function Term1Modal({ setViewInformTerm, viewInformTerm }) {
  return (
    <motion.div
      initial={{
        translateY: '100%',
      }}
      animate={{
        translateY: '-5%',
      }}
      exit={{
        translateY: '100%',
      }}
      transition={{
        duration: 0.4,
      }}
      onClick={() => {
        setViewInformTerm(!viewInformTerm);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-[50%] left-[50%] w-[90vw] md:w-[1000px] h-[800px] p-[40px] bg-[#14171ad2] backdrop-blur-[10px] z-10 overflow-y-scroll scrollbar-hide translate-x-[-50%] translate-y-[-5%] rounded-[40px]"
      >
        <div className="flex flex-col text-white pb-[400px]">
          <div className="flex justify-end w-full">
            <Image
              src="/exitBtn.png"
              width={50}
              height={0}
              alt="exitBtn"
              onClick={() => {
                setViewInformTerm(!viewInformTerm);
              }}
              className="w-[43px] p-[10px] rounded-full bg-[#657786] cursor-pointer"
            />
          </div>
          <div className="flex flex-col font-pretend md:w-[75%] space-y-16">
            <span className="text-[6vw] md:text-3xl">
              개인정보(인적사항) 수집에 대한 안내
            </span>
            <span className="text-[3vw] md:text-base font-light">
              DO IT은 개인정보보호법 등 관련 법규에 의거하여 {"'"}DO IT. 1기
              신입부원 모집 지원서{"'"} 수집을 위해 아래와 같이 개인정보를 수집,
              이용하고자 합니다. 내용을 면밀히 읽으신 후 동의 여부를
              결정해주세요.
            </span>
            <span className="text-[3vw] md:text-base font-light leading-loose text-[#00B8FF]">
              1. 수집 이용 항목 : 이름, 학번, 전공, 연락처, 이메일
              <br />
              2. 수집 이용 목적 : 지원 절차 진행 및 연락
              <br />
              3. 정보 보유 기간 : 신입부원 선발 완료(2024.8.31) 후 1년
              <br />
            </span>
            <span className="text-[3vw] md:text-base font-light">
              위의 개인정보 수집 이용에 대한 동의를 거부할 권리가 있습니다.
              <br />
              그러나 동의를 거부할 경우 모집 절차의 원활한 진행이 불가능하여
              선발에 제한을 받을 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Term2Modal({ setViewPortfolioTerm, viewPortfolioTerm }) {
  return (
    <motion.div
      initial={{
        translateY: '100%',
      }}
      animate={{
        translateY: '-5%',
      }}
      exit={{
        translateY: '100%',
      }}
      transition={{
        duration: 0.4,
      }}
      onClick={() => {
        setViewPortfolioTerm(!viewPortfolioTerm);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-[50%] left-[50%] w-[90vw] md:w-[1000px] h-[800px] p-[40px] bg-[#14171ad2] backdrop-blur-[10px] z-10 overflow-y-scroll scrollbar-hide translate-x-[-50%] translate-y-[-5%] rounded-[40px]"
      >
        <div className="flex flex-col text-white pb-[400px]">
          <div className="flex justify-end w-full">
            <Image
              src="/exitBtn.png"
              width={50}
              height={0}
              alt="exitBtn"
              onClick={() => {
                setViewPortfolioTerm(!viewPortfolioTerm);
              }}
              className="w-[43px] p-[10px] rounded-full bg-[#657786] cursor-pointer"
            />
          </div>
          <div className="flex flex-col font-pretend md:w-[75%] space-y-16">
            <span className="text-3xl">
              개인정보(포트폴리오) 수집에 대한 안내
            </span>
            <span className="text-[3vw] md:text-base font-light">
              DO IT은 개인정보보호법 등 관련 법규에 의거하여 {"'"}DO IT. 1기
              신입부원 모집 지원서{"'"} 수집을 위해 아래와 같이 개인정보를 수집,
              이용하고자 합니다. 내용을 면밀히 읽으신 후 동의 여부를
              결정해주세요.
            </span>
            <span className="text-[3vw] md:text-base font-light leading-loose text-[#00B8FF]">
              1. 수집 이용 항목 : 포트폴리오 내 작품 정보 (작품명, 작품 이미지,
              작품 내용 등)
              <br />
              2. 수집 이용 목적 : 지원 절차 진행 및 연락
              <br />
              3. 정보 보유 기간 : 신입부원 선발 완료(2024.8.31) 후 1년
              <br />
            </span>
            <span className="text-[3vw] md:text-base font-light">
              위의 개인정보 수집 이용에 대한 동의를 거부할 권리가 있습니다.
              <br />
              그러나 동의를 거부할 경우 모집 절차의 원활한 진행이 불가능하여
              선발에 제한을 받을 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
