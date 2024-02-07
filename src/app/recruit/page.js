'use client';
import { useRouter } from 'next/navigation';

export default function Recruit() {
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const field = e.target.field.value;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, field }),
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apply`, options)
      .then((res) => res.json())
      .then((result) => {
        if (result) router.replace('/');
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <h5>이름</h5>
      <input
        type="text"
        name="name"
        required
        // value={application.field}
        // onChange={handleInputChange}
      />
      <h5>관심분야</h5>
      <input
        type="text"
        name="field"
        required
        // value={application.field}
        // onChange={handleInputChange}
      />
      {/* <h5>인적사항</h5>
      <input
        type="text"
        name="person"
        // value={application.person}
        // onChange={handleInputChange}
      />
      <h5>
        학업 외에 병행하고 있거나 향후 계획 중에 있는 활동이 있다면
        서술해주세요. (동아리, 연구실, 아르바이트, 스터디 등) 없을경우, 없음으로
        기재해주세요.
      </h5>
      <input
        type="text"
        name="otherAct"
        // value={application.otherAct}
        // onChange={handleInputChange}
      />
      <h5>자기소개 및 지원동기</h5>
      <input
        type="text"
        name="selfIntro"
        // value={application.selfIntro}
        // onChange={handleInputChange}
      />
      <h5>
        희망분야를 선택한 이유와 그 분야로 가기위해 했던 노력을 작성해주세요.
      </h5>
      <input
        type="text"
        name="fieldExp"
        // value={application.fieldExp}
        // onChange={handleInputChange}
      />
      <h5>프로젝트를 주도적으로 개발한 경험이 있습니까?</h5>
      <input
        type="text"
        name="projectExp"
        // value={application.projectExp}
        // onChange={handleInputChange}
      />
      <h5>
        본인이 생각하는 개발자/디자이너에게 중요한 것은 무엇이라 생각합니까?
      </h5>
      <input
        type="text"
        name="valuable"
        // value={application.valuable}
        // onChange={handleInputChange}
      />
      <h5>포트폴리오가 있으면 업로드해주세요.</h5>
      <input
        type="text"
        name="portfolio"
        // value={application.portfolio}
        // onChange={handleInputChange}
      />
      <h5>개인정보 수집 동의</h5>
      <input
        type="text"
        name="collectPerson"
        // value={application.collectPerson}
        // onChange={handleInputChange}
      />
      <h5>면접 시간 선택</h5>
      <input
        type="text"
        name="selectMeeting"
        // value={application.selectMeeting}
        // onChange={handleInputChange}
      /> */}
      <button type="submit">제출</button>
    </form>
  );
}
