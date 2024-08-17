'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { motion } from 'framer-motion';

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
    if (currentIndex < projectPPT.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
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
        <div className="w-full relative flex justify-center flex-col items-center">
          <div
            className="relative w-full flex justify-center"
            style={{
              maskImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)
            `,
            }}
          >
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
                    className={`relative shrink-0 w-full h-full flex justify-center items-center transition-opacity duration-500`}
                    style={{}}
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
                  className="absolute top-0 left-[-700px] h-full w-[600px] opacity-0"
                  onClick={prevSlide}
                ></div>
              )}

              {currentIndex === projectPPT.length - 1 ? null : (
                <div
                  className="absolute top-0 right-[-700px] h-full w-[600px] opacity-0"
                  onClick={nextSlide}
                ></div>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-x-[30px] py-[30px]">
            <motion.div
              onClick={prevSlide}
              className={`w-9 h-9 bg-black flex justify-center items-center rounded-full cursor-pointer ${
                currentIndex === 0 ? 'opacity-40 pointer-events-none' : ''
              }`}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
              whileHover={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              <Image
                src={'/prev_btn.svg'}
                width={8}
                height={16}
                alt=""
                className="transform translate-x-[-1px]"
              />
            </motion.div>
            <motion.div
              onClick={nextSlide}
              className={`w-9 h-9 bg-black flex justify-center items-center rounded-full cursor-pointer ${
                currentIndex === projectPPT.length - 1
                  ? 'opacity-40 pointer-events-none'
                  : ''
              }`}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
              whileHover={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              <Image
                src={'/next_btn.svg'}
                width={8}
                height={16}
                alt=""
                className="transform translate-x-[1px]"
              />
            </motion.div>
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
