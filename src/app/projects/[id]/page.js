'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

const projectLists = [
  {
    id: 1,
    title: '연세대 학식모지',
    projectSummary: '교내 복지매장 정보 제공 서비스',
    imgSrc: '/slide/1-project-app-1.png',
    type: 'APP',
    term: '1기',
    projectImgSrc: [
      '/projects/2/slide-1.png',
      '/projects/2/slide-2.png',
      '/projects/2/slide-3.png',
    ],
    projectLink: [
      {
        github: 'https://github.com/YonseiDOIT/Pins',
      },
    ],
  },
  {
    id: 2,
    title: 'PINS',
    projectSummary: '교내 모임 중개 및 커뮤니티 플랫폼',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP',
    term: '1기',
    projectImgSrc: [
      '/projects/2/slide-1.png',
      '/projects/2/slide-2.png',
      '/projects/2/slide-3.png',
    ],
    projectLink: [
      {
        github: 'https://github.com/YonseiDOIT/Pins',
      },
    ],
  },
];

export default function Project(props) {
  const [project, setProject] = useState();
  const [projectPPT, setProjectPPT] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const projectResult = projectLists.find(
      (proj) => proj.id === parseInt(props.params.id)
    );

    if (projectResult) {
      setProject(projectResult);
      setProjectPPT(projectResult.projectImgSrc || []);
    }
  }, [props.params.id]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectPPT.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectPPT.length - 1 : prevIndex - 1
    );
  };

  const calculateOpacity = (idx) => {
    // 현재 인덱스에서의 거리 계산
    const distance = Math.abs(currentIndex - idx);

    // 거리에 따라 투명도 계산 (가까울수록 불투명)
    return Math.max(1 - distance * 0.5, 0);
  };

  const calculateGradient = (idx) => {
    const opacity = calculateOpacity(idx);
    return `linear-gradient(to right, rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 0))`;
  };

  if (!project) {
    return <p>프로젝트를 찾을 수 없습니다!</p>;
  }

  return (
    <div className="flex flex-col relative items-center font-suit text-white overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center h-[3000px]">
        {/* 프로젝트 제목 및 설명 */}
        <div className="flex flex-col justify-between pt-[170px] w-[1330px] pb-[50px]">
          <div className="flex flex-row justify-between items-center pb-9">
            <div className="flex flex-row items-center gap-x-6">
              <h1 className="text-5xl font-medium tracking-tighter">
                {project.title}
              </h1>
              <div className="flex flex-row items-center gap-x-[10px]">
                <h1 className="font-pretend font-medium text-lg text-[#B0B0B0] border border-[#B0B0B0] px-[8px] py-[1px] rounded-full">
                  {project.term}
                </h1>
                <h1 className="font-pretend font-medium text-lg text-[#B0B0B0] border border-[#B0B0B0] px-[8px] py-[1px] rounded-full">
                  {project.type}
                </h1>
              </div>
            </div>
            <h1 className="font-medium text-2xl opacity-70">
              {project.projectSummary}
            </h1>
          </div>
          <div className="w-full h-[1px] bg-[#FFFFFF]"></div>
        </div>

        {/* 프로젝트 이미지 */}
        <div className="w-full relative flex justify-center">
          <div className="relative w-[1330px] h-full">
            <div
              className="flex transition-transform ease-in-out duration-500 gap-x-[100px]"
              style={{
                transform: `translateX(-${currentIndex * 1430}px)`,
              }}
            >
              {projectPPT.map((img, idx) => (
                <div
                  key={`projectPPT-${idx}`}
                  className="shrink-0 w-full h-full flex justify-center items-center"
                  style={{
                    background: calculateGradient(idx),
                  }}
                >
                  <Image
                    src={img}
                    width={1330}
                    height={400}
                    alt={`Slide ${idx}`}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {currentIndex === 0 ? null : (
              <div
                className="absolute top-1/2 left-[-190px] cursor-pointer"
                onClick={prevSlide}
              >
                <Image src={'/prev_btn.svg'} width={33} height={67} alt="" />
              </div>
            )}

            {currentIndex === projectPPT.length - 1 ? null : (
              <div
                className="absolute top-1/2 right-[-190px] cursor-pointer"
                onClick={nextSlide}
              >
                <Image src={'/next_btn.svg'} width={33} height={67} alt="" />
              </div>
            )}
          </div>
        </div>

        {/* 프로젝트 상세 설명 */}
        <div>asdfs</div>
      </div>

      <div className="absolute inset-0 z-[-5] bg-[#14171A]/70 backdrop-blur-[150px]"></div>
      <div className="absolute z-[-10] w-full h-full">
        <Image
          className="object-cover w-full h-full"
          src={project.imgSrc}
          fill
          alt=""
        />
      </div>
    </div>
  );
}
