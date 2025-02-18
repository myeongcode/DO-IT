import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Q6Form({
  setFormData,
  formData,
  setFile,
  file,
  setFileUrl,
  fileUrl,
}) {
  function onChangeFile(e) {
    const file = e.target.files?.[0];
    const maxFileSize = 1024 * 1024 * 50; //50MB
    console.log(file.size);

    if (maxFileSize < file.size) {
      toast.error('파일 크기가 너무 큽니다! 50MB이내의 파일로 첨부해주세요');
      return;
    }
    setFile(file);
    setFormData({ ...formData, q6File: e.target.files[0] });

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  }

  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">10</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col md:w-[40%] pt-10 justify-between">
          <div className="flex flex-col">
            <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
              포트폴리오가 있다면 링크 혹은 파일로 첨부해주세요.
            </span>
          </div>
          <span className="text-[#8A9FB1]">
            * 디자이너 직군은 본인이 진행한 과제, 작업물 등이나 포트폴리오
            첨부를 권장하고 있어요. <br />* 파일은 50MB이내의 크기로
            첨부해주세요! <br />* 파일은 .pdf, .png, .jpg, .jpeg로만
            제출해주세요!
          </span>
        </div>
        <div className="md:w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretendard pb-64">
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">링크</label>
            <input
              name="q6Link"
              type="text"
              value={formData.q6Link}
              onChange={(e) =>
                setFormData({ ...formData, q6Link: e.target.value })
              }
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA] text-[#14171A]"
              placeholder="Github, Notion, Blog, Website 등"
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">파일 첨부</label>
            <label
              htmlFor="input-file"
              className={`flex flex-row border-b p-2 w-[70%] ${
                formData.q6File !== '' ? 'text-[#14171A]' : 'text-[#C8D3DA]'
              }`}
            >
              {formData.q6File !== ''
                ? formData.q6File.name
                : '클릭하여 파일 첨부하기'}
            </label>
            <input
              id="input-file"
              name="q6File"
              type="file"
              accept=".pdf, .png, .jpg, .jpeg"
              onChange={(e) => {
                onChangeFile(e);
              }}
              className="border-b p-2 w-[70%] outline-none placeholder:text-[#C8D3DA] hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
