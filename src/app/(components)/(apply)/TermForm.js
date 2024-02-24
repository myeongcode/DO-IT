import Image from 'next/image';

export default function TermForm() {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">11</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">개인정보 수집에 대한 동의</span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend pb-72 space-y-16">
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
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">동의함</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">동의하지 않음</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
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
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">동의함</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">동의하지 않음</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
