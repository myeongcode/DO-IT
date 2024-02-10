'use client';
import { useEffect, useState } from 'react';

const getApplicants = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apply`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log('지원자 정보 불러오기 실패 : ', e);
    return null;
  }
};

export default function Admin() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApplicants();
      console.log(data.applicants);
      if (data) {
        setApplicants(data.applicants);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin페이지</h1>
      {!applicants && <h4>지원자들 정보 불러오는 중...</h4>}
      {applicants?.map((applicant) => {
        return (
          <div key={applicant._id}>
            <h3>{applicant.name}</h3>
            <h5>희망분야 : {applicant.field}</h5>
            <h5>학번 : {applicant.std_id}</h5>
            <h5>전공 : {applicant.major}</h5>
            <h5>휴대전화 : {applicant.phone_num}</h5>
            <h5>이메일 : {applicant.email}</h5>
            <h5>
              {applicant.grade}학년 {applicant.semester}학기 현재{' '}
              {applicant.attend === 'true' ? <>재학 중</> : <>휴학 중</>}
            </h5>
            <h5>다른 활동 여부 확인</h5>
            {applicant.question_01}
            <h5>자기소개 및 지원동기</h5>
            {applicant.question_02}
            <h5>희망 분야 선택 이유 및 노력한 경험</h5>
            {applicant.question_03}
            <h5>
              프로젝트 경험{' '}
              {applicant.question_04 === 'true' ? <>있음</> : <>없음</>}
            </h5>
            {applicant.question_05}
            <h6>지원일자 : {applicant.createdAt}</h6>
          </div>
        );
      })}
    </div>
  );
}
