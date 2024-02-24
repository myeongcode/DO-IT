export default function Q4Form() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">08</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">
            누군가와 함께 프로젝트를
            <br /> 진행한 경험이 있으신가요?
          </span>
        </div>
        <div className="w-[60%] 2xl:w-[45%] pt-10 space-y-4">
          <div className="w-full font-pretend cursor-pointer text-[#8A9FB1]">
            <div className="flex justify-between items-center py-4 z-20">
              <span className="text-[4vw] md:text-2xl xl:text-2xl">
                네, 협업한 적이 있습니다.
              </span>
            </div>
            <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
          </div>
          <div className="w-full font-pretend cursor-pointer text-[#8A9FB1]">
            <div className="flex justify-between items-center py-4 z-20">
              <span className="text-[4vw] md:text-2xl xl:text-2xl">
                아니요, 아직 없습니다.
              </span>
            </div>
            <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">
            어떤 프로젝트에서 어떤 역할을
            <br /> 수행했는지 서술해주세요.
          </span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend">
          <div className="flex flex-row items-center justify-between pt-10">
            <textarea
              name="major"
              type="text"
              className="border-b border-t py-4 w-full resize-none outline-none placeholder:text-[#C8D3DA] min-h-[300px]"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
