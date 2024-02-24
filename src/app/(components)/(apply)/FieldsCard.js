import { useState } from 'react';

export default function FieldsCard({ field }) {
  const [selectField, setSelectField] = useState(null);

  return (
    <div
      onClick={() => {
        setSelectField(field.id);
        console.log(field.id);
      }}
      className="w-full font-pretend cursor-pointer text-[#8A9FB1]"
    >
      <div className="flex justify-between items-center py-10 z-20">
        <span className="text-[4vw] md:text-2xl xl:text-3xl">
          {field.field}
        </span>
        <div className="flex flex-row items-center space-x-6">
          <span className="text-[4vw] md:text-base xl:text-xl">
            {field.name}
          </span>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#C8D3DA]" />
    </div>
  );
}
