'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    pathname !== '/recruit/apply' && (
      <div className="flex w-full justify-center bg-[#DEE5E8]">
        <div className="flex flex-col w-[90%] md:w-[56%] py-16 font-pretend">
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
                연세대학교 미래캠퍼스 컨버전스홀 201호 학생창업보육실
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
