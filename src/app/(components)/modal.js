import styles from './modal.module.css';

export default function Modal({ onShowModal, selectedApplicant }) {
  return (
    <>
      {!selectedApplicant && <h3>지원자 정보 불러오는 중...</h3>}
      {selectedApplicant && (
        <>
          <div className={styles.overlayStyle} onClick={onShowModal} />
          <div className={styles.modalStyle}>
            <h3 style={{ fontWeight: '800', fontSize: '30px' }}>
              {selectedApplicant.name}님
            </h3>
            <br />
            <br />
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>카테고리</p>
            <p>{selectedApplicant.category}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>희망분야</p>
            <p>{selectedApplicant.field}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>학번</p>
            <p>{selectedApplicant.stdID}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>전공</p>
            <p>{selectedApplicant.major}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>연락처</p>
            <p>{selectedApplicant.phone}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>이메일</p>
            <p>{selectedApplicant.email}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>
              {selectedApplicant.grade} {selectedApplicant.semester}{' '}
              {selectedApplicant.attend ? '재학 중' : '휴학 중'}
            </p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              학업 외에 병행하고 있거나 향후 계획 중에 있는 활동이 있다면
              서술해주세요. (동아리, 연구실, 아르바이트, 스터디, 복수전공,
              연계전공 등) 없을경우, 없음으로 기재해주세요.
            </p>
            <p>{selectedApplicant.q1}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              자기소개 및 지원동기
            </p>
            <p>{selectedApplicant.q2}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              희망분야를 선택한 이유와 그 분야로 가기위해 했던 노력을
              작성해주세요.
            </p>
            <p>{selectedApplicant.q3}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              누군가와 함께 프로젝트를 진행한 경험이 있으신가요?{' '}
              {selectedApplicant.q4Exp ? '네' : '아니요'}
            </p>
            <p>{selectedApplicant.q4}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              본인이 생각하는 기획자/디자이너/개발자에게 중요하게 생각하는 점을
              서술해주세요.
            </p>
            <p>{selectedApplicant.q5}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              블로그 및 링크 :{' '}
              <a href={selectedApplicant.q6Link}>{selectedApplicant.q6Link}</a>
            </p>
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              첨부파일 : {selectedApplicant.q6File}
            </p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              개인정보 및 포트폴리오 활용 동의 :{' '}
              {selectedApplicant.informTerm && selectedApplicant.portfolioTerm
                ? '동의'
                : '비동의'}
            </p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              지원시간 : {selectedApplicant.createdAt}
            </p>
            <br />
            <button onClick={onShowModal}>모달 닫기</button>
          </div>
        </>
      )}
    </>
  );
}
