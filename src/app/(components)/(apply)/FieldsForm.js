import { useEffect, useState } from 'react';
import FieldsCard from './FieldsCard';

const fields = [
  {
    id: 0,
    field: 'Product Manager (PM)',
    name: '기획자',
    keyword: 'PM',
  },
  {
    id: 1,
    field: 'Product Designer (PD)',
    name: '디자이너',
    keyword: 'PD',
  },
  {
    id: 2,
    field: 'Front-end Developer (FE)',
    name: '개발자',
    keyword: 'FE',
  },
  {
    id: 3,
    field: 'Back-end Developer (BE)',
    name: '개발자',
    keyword: 'BE',
  },
  // {
  //   id: 4,
  //   field: 'Project Learner',
  //   name: '프로젝트 러너',
  //   keyword: 'Learner',
  // },
];

export default function FieldsForm({ formData, setFormData }) {
  const [selectedField, setSelectedField] = useState(formData.field);

  useEffect(() => {
    setFormData({
      ...formData,
      field: selectedField,
      fieldName:
        selectedField === 'PM'
          ? '기획자'
          : selectedField === 'PD'
          ? '디자이너'
          : '개발자',
    });
  }, [selectedField]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">01</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="md:w-[40%] pt-10">
          <span className="text-[5vw] md:text-2xl xl:text-3xl font-semibold">
            지원하려는 직군을 선택해주세요.
          </span>
        </div>
        <div className="md:w-[60%]">
          {fields.map((field, idx) => {
            return (
              <FieldsCard
                key={idx}
                field={field}
                index={idx}
                setSelectedField={setSelectedField}
                selectedField={selectedField}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
