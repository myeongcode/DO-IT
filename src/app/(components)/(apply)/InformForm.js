import { useState } from 'react';

export default function InformForm() {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">03</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">
            인적 사항을
            <br /> 입력해주세요.
          </span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend">
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">이름</label>
            <input
              name="name"
              type="text"
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">학번</label>
            <input
              name="std_id"
              type="text"
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
              placeholder="학번을 입력해주세요."
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">전공</label>
            <input
              name="major"
              type="text"
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
              placeholder="전공을 입력해주세요."
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">연락처</label>
            <input
              name="major"
              type="text"
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
              placeholder="연락처를 입력해주세요."
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">이메일</label>
            <input
              name="email"
              type="text"
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
              placeholder="이메일을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
