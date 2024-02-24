'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { upload } from '@vercel/blob/client';
import { motion } from 'framer-motion';
import FieldsForm from '@/app/(components)/(apply)/FieldsForm';
import CategoriesForm from '@/app/(components)/(apply)/CategoriesForm';
import InformForm from '@/app/(components)/(apply)/InformForm';
import AttendForm from '@/app/(components)/(apply)/AttendForm';
import Q1Form from '@/app/(components)/(apply)/Q1Form';
import Q2Form from '@/app/(components)/(apply)/Q2Form';
import Q3Form from '@/app/(components)/(apply)/Q3Form';
import Q4Form from '@/app/(components)/(apply)/Q4Form';
import Q5Form from '@/app/(components)/(apply)/Q5Form';
import Q6Form from '@/app/(components)/(apply)/Q6Form';
import TermForm from '@/app/(components)/(apply)/TermForm';

const steps = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function Apply() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [expProject, setExpProject] = useState(true);
  const router = useRouter();
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  async function onSubmit(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const jsonData = {};
    // const file = inputFileRef.current.files[0];

    // const newBlob = await upload(file.name, file, {
    //   access: 'public',
    //   handleUploadUrl: '/api/apply/uploads',
    // });

    // setBlob(newBlob);

    // formData.forEach((value, key) => {
    //   jsonData[key] = value;
    // });

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(jsonData),
    // };

    // fetch(`/api/apply`, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result) router.replace('/');
    //   });
  }

  function onChange(e) {
    setExpProject(JSON.parse(e.target.value));
  }

  return (
    <div className="flex pt-[105px] w-full justify-center py-20">
      <div className="flex flex-col w-[60%] font-suit font-bold">
        <div className="text-5xl pt-20 leading-snug">
          <span className="text-[#00B8FF]">DO IT.</span>
          <br />
          <span>신규부원 모집신청</span>
        </div>
        {/* Form Step */}
        <nav className="py-10">dd</nav>

        {/* Form */}
        <FieldsForm />
        {/* <CategoriesForm /> */}
        {/* <InformForm /> */}
        {/* <AttendForm /> */}
        {/* <Q1Form /> */}
        {/* <Q2Form /> */}
        {/* <Q3Form /> */}
        {/* <Q4Form /> */}
        {/* <Q5Form /> */}
        {/* <Q6Form /> */}
        {/* <TermForm /> */}
        <div className="flex w-full justify-end font-pretend pt-20">
          <div className="flex flex-row text-2xl space-x-4">
            <motion.button
              whileHover={{
                backgroundColor: '#D6DBDF',
              }}
              className="py-3 px-14 rounded-full bg-[#E1E8ED] text-[#657786]"
            >
              이전
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: '#00ADF2',
              }}
              className="py-3 px-14 rounded-full bg-[#00B8FF] text-[#FFFFFF]"
            >
              다음
            </motion.button>
          </div>
        </div>
      </div>
      {/* <form onSubmit={onSubmit} className="pt-[105px]">
        <h3>지원직군</h3>
        <select name="category">
          <option value="pm">PM (Project Manager)</option>
          <option value="fe">FE (Front-end Developer)</option>
          <option value="be">BE (Back-end Developer)</option>
          <option value="de">DE (Project Designer)</option>
        </select>
        <h3>관심분야</h3>
        <select name="field">
          <option value="web">WEB</option>
          <option value="app">APP</option>
          <option value="game">GAME</option>
        </select>
        <h3>기본 인적사항</h3>
        <h5>이름</h5>
        <input type="text" name="name" required />
        <h5>학번</h5>
        <input type="text" name="std_id" required />
        <h5>전공</h5>
        <input type="text" name="major" required />
        <h5>연락처</h5>
        <input type="tel" name="phone_num" required />
        <h5>이메일</h5>
        <input type="email" name="email" required />
        <h5>학년</h5>
        <select name="grade">
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
          <option value="4">4학년</option>
        </select>
        <h5>학기</h5>
        <select name="semester">
          <option value="1">1학기</option>
          <option value="2">2학기</option>
        </select>
        <h5>재학여부</h5>
        <select name="attend">
          <option value="true">재학 중</option>
          <option value="false">휴학 중</option>
        </select>
        <h3>질문사항</h3>
        <h5>
          학업 외에 병행하고 있거나 향후 계획 중에 있는 활동이 있다면
          서술해주세요. (동아리, 연구실, 아르바이트, 스터디, 복수전공, 연계전공
          등) 없을경우, 없음으로 기재해주세요.
        </h5>
        <textarea name="question_01" required />
        <h5>자기소개 및 지원동기</h5>
        <textarea name="question_02" required />
        <h5>
          희망분야를 선택한 이유와 그 분야로 가기위해 했던 노력을 작성해주세요.
        </h5>
        <textarea name="question_03" required />
        <h5>누군가와 함께 프로젝트를 진행한 경험이 있으신가요?</h5>
        <select onChange={onChange} className="exp_project" name="question_04">
          <option value="true">네, 협업한 적이 있습니다.</option>
          <option value="false">아니요, 아직 없습니다.</option>
        </select>
        {expProject ? (
          <h5>어떤 프로젝트에서 어떤 역할을 수행하셨습니까?</h5>
        ) : (
          <h5>
            프로젝트를 잘 마무리하기 위한 자신만의 의지를 말씀해주시고, 한
            학기의 각오를 적어주세요.
          </h5>
        )}
        <textarea name="question_05" required />
        <input type="file" ref={inputFileRef} name="file" />
        <button type="submit">제출</button>
      </form> */}
      {/* {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )} */}
    </div>
  );
}
