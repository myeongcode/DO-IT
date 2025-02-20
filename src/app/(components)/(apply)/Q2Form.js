import { useState } from 'react';

export default function Q2Form({ setFormData, formData }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">06</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between pb-20">
        <div className="flex flex-col md:w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
              DO IT에 지원하게 된 계기가 무엇인가요?
            </span>
            <br />
            <span className="text-[#8A9FB1]">
              간략한 자기소개와 함께 작성해주세요.
            </span>
          </div>
        </div>
        <div className="md:w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretendard">
          <div className="flex flex-row items-center justify-between pt-10">
            <textarea
              name="q2"
              type="text"
              required
              value={formData.q2}
              onChange={(e) => setFormData({ ...formData, q2: e.target.value })}
              className="border-b border-t py-4 w-full resize-none outline-none placeholder:text-[#C8D3DA] min-h-[300px] text-[#14171A]"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
