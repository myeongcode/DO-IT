'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Recruit() {
  const [expProject, setExpProject] = useState(true);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    fetch(`/api/apply`, options)
      .then((res) => res.json())
      .then((result) => {
        if (result) router.replace('/');
      });
  }

  function onChange(e) {
    setExpProject(JSON.parse(e.target.value));
  }

  return (
    <form onSubmit={onSubmit}>
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
          프로젝트를 잘 마무리하기 위한 자신만의 의지를 말씀해주시고, 한 학기의
          각오를 적어주세요.
        </h5>
      )}
      <textarea name="question_05" required />
      <button type="submit">제출</button>
    </form>
  );
}
