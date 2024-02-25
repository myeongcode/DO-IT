import { useState } from 'react';

export default function Q3Form({ setFormData, formData }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">07</span>
      </div>
      <div className="flex flex-row w-full justify-between pb-20">
        <div className="flex flex-col w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-3xl">
              희망분야를 선택한 이유와 <br /> 그 분야로 가기위해 <br /> 노력한
              경험을 서술해주세요
            </span>
          </div>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend">
          <div className="flex flex-row items-center justify-between pt-10">
            <textarea
              name="q3"
              type="text"
              required
              value={formData.q3}
              onChange={(e) => setFormData({ ...formData, q3: e.target.value })}
              className="border-b border-t py-4 w-full resize-none outline-none placeholder:text-[#C8D3DA] min-h-[300px]"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
