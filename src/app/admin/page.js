'use client';
import { useEffect, useState } from 'react';
import styles from './admin.module.css';
import Modal from '../(components)/modal';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Admin() {
  const [applicants, setApplicants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApplicants();
      if (data && data.applicants) {
        const sortedApplicants = data.applicants.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setApplicants(sortedApplicants);
      }
    };

    const forbiddenToken = () => {
      const token = Cookies.get('AccessToken');
      if (!token) {
        toast.error('로그인 토큰 만료');
        return router.push('/admin/login');
      }
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        Cookies.remove('AccessToken');
      }
    };

    forbiddenToken();
    fetchData();
  }, []);

  const getApplicants = async () => {
    try {
      const res = await fetch(`/api/apply`, {
        method: 'GET',
        cache: 'no-store',
        credentials: 'include',
      });
      if (res.status !== 200) {
        const message = await res.json();
        toast.error(message.message);
        return router.push('/admin/login');
      }
      const data = await res.json();
      return data;
    } catch (e) {
      return null;
    }
  };

  function onClickApplicant(idx) {
    const clickedApplicant = applicants[idx];
    setSelectedApplicant(clickedApplicant);
    onShowModal();
  }

  function onShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="pt-[105px] py-20">
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
              <td>이름</td>
              <td>학번</td>
              <td>전공</td>
              <td>희망분야</td>
              <td>희망직군</td>
              <td>지원시간</td>
            </tr>
          </thead>
          <tbody>
            {applicants?.map((applicant, idx) => {
              return (
                <tr key={applicant._id} onClick={() => onClickApplicant(idx)}>
                  <td>{applicant.name}</td>
                  <td>{applicant.stdID}</td>
                  <td>{applicant.major}</td>
                  <td>{applicant.category}</td>
                  <td>{applicant.field}</td>
                  <td>{applicant.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
