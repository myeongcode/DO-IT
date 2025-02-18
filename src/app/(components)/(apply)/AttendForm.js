import { useEffect, useState } from 'react';

export default function AttendForm({ setFormData, formData }) {
  const [selectedGrade, setSelectedGrade] = useState(formData.grade);
  const [selectedSemester, setSelectedSemester] = useState(formData.semester);
  const [selectedAttend, setSelectedAttend] = useState(formData.attend);
  const grades = ['1학년', '2학년', '3학년', '4학년'];
  const semesters = ['1학기', '2학기'];
  const attends = [true, false];

  useEffect(() => {
    setFormData({
      ...formData,
      grade: selectedGrade,
      semester: selectedSemester,
      attend: selectedAttend,
    });
  }, [selectedGrade, selectedAttend, selectedSemester]);

  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">04</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between pb-20">
        <div className="md:w-[40%] pt-10">
          <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
            재학 상태를 입력해주세요.
          </span>
        </div>
        <div className="md:w-[60%] xl:w-[60%] 2xl:w-[45%] font-pretendard">
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">학년</label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
              {grades.map((grade, idx) => {
                return (
                  <GradeCard
                    key={idx}
                    grade={grade}
                    setSelectedGrade={setSelectedGrade}
                    selectedGrade={selectedGrade}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">학기</label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
              {semesters.map((semester, idx) => {
                return (
                  <SemesterCard
                    key={idx}
                    semester={semester}
                    setSelectedSemester={setSelectedSemester}
                    selectedSemester={selectedSemester}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pt-10">
            <label className="w-[30%] text-[#8A9FB1]">재학 여부</label>
            <div className="grid grid-cols-2 w-[70%] gap-4 gap-y-6">
              {attends.map((attend, idx) => {
                return (
                  <AttendCard
                    key={idx}
                    attend={attend}
                    setSelectedAttend={setSelectedAttend}
                    selectedAttend={selectedAttend}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GradeCard({ grade, selectedGrade, setSelectedGrade }) {
  return (
    <div
      onClick={(e) => {
        setSelectedGrade(grade);
      }}
      className="w-full cursor-pointer font-pretendard"
    >
      <div
        className={`flex flex-col items-center space-y-3 pb-3  ${
          selectedGrade === grade ? 'text-[#14171A]' : 'text-[#8A9FB1]'
        }`}
      >
        <span className="text-xl">{grade}</span>
      </div>
      <hr
        className={`border-0 h-[1px] ${
          selectedGrade === grade ? 'bg-[#14171A]' : 'bg-[#C8D3DA]'
        }`}
      />
    </div>
  );
}

function SemesterCard({ semester, selectedSemester, setSelectedSemester }) {
  return (
    <div
      onClick={(e) => {
        setSelectedSemester(semester);
      }}
      className="w-full cursor-pointer font-pretendard"
    >
      <div
        className={`flex flex-col items-center space-y-3 pb-3  ${
          selectedSemester === semester ? 'text-[#14171A]' : 'text-[#8A9FB1]'
        }`}
      >
        <span className="text-xl">{semester}</span>
      </div>
      <hr
        className={`border-0 h-[1px] ${
          selectedSemester === semester ? 'bg-[#14171A]' : 'bg-[#C8D3DA]'
        }`}
      />
    </div>
  );
}

function AttendCard({ attend, setSelectedAttend, selectedAttend }) {
  return (
    <div
      onClick={(e) => {
        setSelectedAttend(attend);
      }}
      className="w-full cursor-pointer font-pretendard"
    >
      <div
        className={`flex flex-col items-center space-y-3 pb-3  ${
          selectedAttend === attend ? 'text-[#14171A]' : 'text-[#8A9FB1]'
        }`}
      >
        <span className="text-xl">{attend ? '재학 중' : '휴학 중'}</span>
      </div>
      <hr
        className={`border-0 h-[1px] ${
          selectedAttend === attend ? 'bg-[#14171A]' : 'bg-[#C8D3DA]'
        }`}
      />
    </div>
  );
}
