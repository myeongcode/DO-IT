export default function Footer() {
  return (
    <div className="flex w-full justify-center bg-[#C8D3DA]">
      <div className="flex w-[70%] py-16 justify-between">
        <div>
          <span className="text-[#657786] text-sm">
            DO IT (연세대학교 미래캠퍼스 IT 개발동아리)
            <br />
            Copyright ⓒ DO IT. All Rights Reserved
          </span>
        </div>
        <div className="flex flex-row w-[46%] justify-between">
          <div>
            <span className="text-[#657786] text-sm font-semibold">
              CONTACT US
            </span>
            <br />
            <span className="text-[#657786] text-sm">
              yonsei.do.it@gmail.com
            </span>
          </div>
          <div>
            <span className="text-[#657786] text-sm font-semibold">
              LOCATION
            </span>
            <br />
            <span className="text-[#657786] text-sm text-nowrap overflow-hidden">
              연세대학교 미래캠퍼스 컨버전스홀 창업 컨테이너홀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
