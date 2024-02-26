import { useState } from 'react';

export default function Q5Form({ setFormData, formData }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">09</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between pb-20">
        <div className="flex flex-col md:w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
              본인이 생각하는 기획자/디자이너/개발자에게 중요하게 생각하는 점을
              서술해주세요.
            </span>
          </div>
          <br />
          <span className="text-[#8A9FB1]">
            본인 지원 직군에 맞춰 작성해주시면 됩니다.
          </span>
        </div>
        <div className="md:w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend">
          <div className="flex flex-row items-center justify-between pt-10">
            <textarea
              name="q5"
              type="text"
              required
              value={formData.q5}
              onChange={(e) => setFormData({ ...formData, q5: e.target.value })}
              className="border-b border-t py-4 w-full resize-none outline-none placeholder:text-[#C8D3DA] min-h-[300px] text-[#14171A]"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
