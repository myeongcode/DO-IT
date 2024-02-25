import { useEffect, useState } from 'react';

export default function Q6Form({ setFormData, formData }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">10</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-3xl">
              포트폴리오가 있다면
              <br />
              링크 혹은 파일로 첨부해주세요.
            </span>
          </div>
          <span className="text-[#8A9FB1]">
            * 디자이너 직군은 본인이 진행한 과제, 작업물 등이나 포트폴리오
            첨부를 권장하고 있어요.
          </span>
        </div>
        <div className="w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretend pb-64">
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">링크</label>
            <input
              name="q6Link"
              type="text"
              value={formData.q6Link}
              onChange={(e) =>
                setFormData({ ...formData, q6Link: e.target.value })
              }
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
              placeholder="Github, Notion, Blog, Website 등"
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">파일 첨부</label>
            <input
              name="q6File"
              type="file"
              value={formData.q6File}
              onChange={(e) =>
                setFormData({ ...formData, q6File: e.target.value })
              }
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
