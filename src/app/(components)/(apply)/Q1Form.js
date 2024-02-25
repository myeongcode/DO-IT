import { useState } from 'react';

export default function Q1Form({ setFormData, formData }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">05</span>
      </div>
      <div className="flex flex-row w-full justify-between pb-20">
        <div className="flex flex-col w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-3xl">
              학업 외에 병행하고 있거나
              <br />
              향후 계획 중에 있는 활동이 있다면
              <br />
              서술해주세요.
            </span>
            <br />
            <span className="text-[#8A9FB1]">
              (동아리, 연구실, 아르바이트, 스터디, 다중전공 등)
            </span>
          </div>
          <span className="text-[#8A9FB1]">
            없을 경우, 없음으로 기재해주세요
          </span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend">
          <div className="flex flex-row items-center justify-between pt-10">
            <textarea
              name="q1"
              type="text"
              required
              value={formData.q1}
              onChange={(e) => setFormData({ ...formData, q1: e.target.value })}
              className="border-b border-t py-4 w-full resize-none outline-none placeholder:text-[#C8D3DA] min-h-[300px]"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
