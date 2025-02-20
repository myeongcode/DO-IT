import { useState } from 'react';

export default function Q1Form({ setFormData, formData }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">05</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between pb-20">
        <div className="flex flex-col md:w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
              본인 직무에 맞게 활용해본 툴 혹은 기술스택을 작성해주세요.
            </span>
            <br />
            <span className="text-[#8A9FB1]">
              (React, HTML, CSS, Figma, FastAPI, 일러스트, Jira, Notion 등)
            </span>
          </div>
          <br />

          <div className="flex flex-col gap-y-2">
            <span className="text-[#8A9FB1]">
              없을 경우, 없음으로 기재해주세요
            </span>
            <span className="text-[#8A9FB1]">
              *팀빌딩에 참고하기 위한 용도로 사용됩니다.
            </span>
          </div>
        </div>
        <div className="md:w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretendard">
          <div className="flex flex-row items-center justify-between pt-10">
            <textarea
              name="q1"
              type="text"
              required
              value={formData.q1}
              onChange={(e) => setFormData({ ...formData, q1: e.target.value })}
              className="border-b border-t py-4 w-full resize-none outline-none placeholder:text-[#C8D3DA] min-h-[300px] text-[#14171A]"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
