'use client';
import { useEffect, useState } from 'react';
import styles from './admin.module.css';
import Modal from '../(components)/modal';

const getApplicants = async () => {
  try {
    const res = await fetch(`/api/apply`, {
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
  const [applicants, setApplicants] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApplicants();
      if (data) {
        setApplicants(data.applicants);
      }
    };
    fetchData();
  }, []);

  function onClickApplicant(idx) {
    const clickedApplicant = applicants[idx];
    setSelectedApplicant(clickedApplicant);
    onShowModal();
  }

  function onShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="pt-[105px]">
      {showModal && (
        <Modal
          onShowModal={onShowModal}
          selectedApplicant={selectedApplicant}
        />
      )}
      <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Admin페이지</h1>
      {!applicants && (
        <h4 style={{ textAlign: 'center' }}>지원자들 정보 불러오는 중...</h4>
      )}
      {applicants && (
        <table className={styles.table}>
          <thead>
            <tr>
              <td>ID</td>
              <td>이름</td>
              <td>학번</td>
              <td>전공</td>
              <td>지원직군</td>
              <td>희망분야</td>
            </tr>
          </thead>
          <tbody>
            {applicants?.map((applicant, idx) => {
              return (
                <tr key={applicant._id} onClick={() => onClickApplicant(idx)}>
                  <td>{applicant._id}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.std_id}</td>
                  <td>{applicant.major}</td>
                  <td>{applicant.category.toUpperCase()}</td>
                  <td>{applicant.field.toUpperCase()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
