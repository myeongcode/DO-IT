import FieldsCard from './FieldsCard';

const fields = [
  {
    id: 0,
    field: 'Product Manager (PM)',
    name: '기획자',
  },
  {
    id: 1,
    field: 'Product Designer (PD)',
    name: '디자이너',
  },
  {
    id: 2,
    field: 'Front-end Developer (FE)',
    name: 'CLIENT 개발자',
  },
  {
    id: 3,
    field: 'Back-end Developer (BE)',
    name: 'SERVER 개발자',
  },
];

export default function FieldsForm() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">01</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">
            지원하려는 직군을
            <br /> 선택해주세요.
          </span>
        </div>
        <div className="w-[60%]">
          {fields.map((field, idx) => {
            return <FieldsCard key={idx} field={field} />;
          })}
        </div>
      </div>
    </div>
  );
}
