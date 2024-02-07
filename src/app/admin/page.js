'use client';
import { useEffect, useState } from 'react';

export default function Admin() {
  const [applicants, setApplicants] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apply`, {
        cache: 'no-store',
      });
      const data = await resp.json();
      setApplicants(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Admin페이지</h1>
      {!applicants && <h4>지원자들 정보 불러오는 중...</h4>}
      {applicants?.map((applicant) => {
        return (
          <div key={applicant.id}>
            <h3>{applicant.name}</h3>
            <h5>희망분야 : {applicant.field}</h5>
          </div>
        );
      })}
      {/* {recruits.map((applicant) => {
        return (
          <div key={applicant.id}>
            <h3>{applicant.name}</h3>
            <h5>희망분야 : {applicant.field}</h5>
          </div>
        );
      })} */}
    </div>
  );
}
