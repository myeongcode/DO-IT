export default function AttendForm() {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">04</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">
            재학 상태를
            <br /> 입력해주세요.
          </span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend">
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">학년</label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">1학년</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">2학년</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">3학년</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">4학년</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">학기</label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">1학기</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">2학기</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">재학 여부</label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">재학 중</span>
                </div>
                <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
              </div>
              <div className="w-full cursor-pointer font-pretend">
                <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
                  <span className="text-xl">휴학 중</span>
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
