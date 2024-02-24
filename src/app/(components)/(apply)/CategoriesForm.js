import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 0,
    field: 'WEB',
    name: '웹',
  },
  {
    id: 1,
    field: 'APP',
    name: '앱',
  },
  {
    id: 2,
    field: 'GAME',
    name: '게임',
  },
];

export default function CategoriesForm() {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="w-full">
        <span className="text-2xl text-[#657786]">02</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[40%] pt-10">
          <span className="text-3xl">
            관심 분야를
            <br /> 선택해주세요.
          </span>
        </div>
        <div className="flex flex-row w-[60%] pt-10 justify-center space-x-6">
          {categories.map((category, idx) => {
            return <CategoryCard category={category} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
