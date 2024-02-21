export default function Footer() {
  return (
    <div className="flex w-full justify-center bg-[#C8D3DA]">
      <div className="flex flex-col w-[90%] md:w-[70%] py-16 font-pretend">
        <div className="pb-10">
          <span className="text-[#657786] text-[3.4vw] md:text-sm">
            DO IT (연세대학교 미래캠퍼스 IT 개발동아리)
            <br />
            Copyright ⓒ DO IT. All Rights Reserved
          </span>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-5 md:space-y-0">
          <div>
            <span className="text-[#657786] text-[3.4vw] md:text-sm font-semibold">
              CONTACT US
            </span>
            <br />
            <span className="text-[#657786] text-[3.4vw] md:text-sm">
              yonsei.do.it@gmail.com
            </span>
          </div>
          <div>
            <span className="text-[#657786] text-[3.4vw] md:text-sm font-semibold">
              LOCATION
            </span>
            <br />
            <span className="text-[#657786] text-[3.4vw] md:text-sm text-nowrap overflow-hidden">
              연세대학교 미래캠퍼스 컨버전스홀 창업 컨테이너홀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
