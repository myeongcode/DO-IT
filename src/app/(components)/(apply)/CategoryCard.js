export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-col w-full cursor-pointer font-pretend">
      <div className="flex flex-col items-center space-y-3 pb-3 text-[#8A9FB1]">
        <span className="text-2xl">{category.field}</span>
        <span className="text-xl">{category.name}</span>
      </div>
      <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
    </div>
  );
}
