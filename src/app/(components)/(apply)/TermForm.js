import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function TermForm({ formData, setFormData }) {
  const [selectedInformTerm, setSelectedInformTerm] = useState(
    formData.informTerm
  );
  const [selectedPortfolioTerm, setSelectedPortfolioTerm] = useState(
    formData.portfolioTerm
  );

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
      <div className="w-full">
        <span className="text-2xl text-[#657786]">11</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">개인정보 수집에 대한 동의</span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend pb-40 space-y-16">
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="flex flex-row w-[30%] text-[#8A9FB1]">
              개인정보(인적사항) 수집
              <Image
                src="/question-mark.png"
                width={15}
                height={15}
                alt="questionMark"
                className="object-contain ml-2"
              />
            </label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
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
                className="object-contain ml-2"
              />
            </label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
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
        <span className="text-xl">{term ? '동의함' : '동의하지 않음'}</span>
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
        <span className="text-xl">{term ? '동의함' : '동의하지 않음'}</span>
      </div>
      <hr
        className={`border-0 h-[1px]  ${
          selectedPortfolioTerm === term ? 'bg-[#14171A]' : 'bg-[#C8D3DA]'
        }`}
      />
    </div>
  );
}
