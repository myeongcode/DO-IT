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
            <p style={{ fontWeight: '600', fontSize: '24px' }}>지원직군</p>
            <p>{selectedApplicant.category.toUpperCase()}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>희망분야</p>
            <p>{selectedApplicant.field.toUpperCase()}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>학번</p>
            <p>{selectedApplicant.std_id}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>전공</p>
            <p>{selectedApplicant.major}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>연락처</p>
            <p>{selectedApplicant.phone_num}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>이메일</p>
            <p>{selectedApplicant.email}</p>
            <br />
            <p style={{ fontWeight: '600', fontSize: '24px' }}>
              {selectedApplicant.grade}학년 {selectedApplicant.semester}학기{' '}
              {selectedApplicant.attend === 'true' ? '재학 중' : '휴학 중'}
            </p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              학업 외에 병행하고 있거나 향후 계획 중에 있는 활동이 있다면
              서술해주세요. (동아리, 연구실, 아르바이트, 스터디, 복수전공,
              연계전공 등) 없을경우, 없음으로 기재해주세요.
            </p>
            <p>{selectedApplicant.question_01}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              자기소개 및 지원동기
            </p>
            <p>{selectedApplicant.question_02}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              희망분야를 선택한 이유와 그 분야로 가기위해 했던 노력을
              작성해주세요.
            </p>
            <p>{selectedApplicant.question_03}</p>
            <br />
            <p style={{ fontWeight: '800', fontSize: '16px' }}>
              누군가와 함께 프로젝트를 진행한 경험이 있으신가요?{' '}
              {selectedApplicant.question_04 === 'true' ? '네' : '아니요'}
            </p>
            <p>{selectedApplicant.question_05}</p>
            <br />
            <button onClick={onShowModal}>모달 닫기</button>
          </div>
        </>
      )}
    </>
  );
}
