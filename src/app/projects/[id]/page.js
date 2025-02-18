'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSwipeable } from 'react-swipeable';
import { useProjects } from '@/app/context/projectContext';

export default function Project(props) {
  const [project, setProject] = useState();
  const { projects } = useProjects();
  const [projectPPT, setProjectPPT] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const projectResult = projects.find(
      (proj) => proj.id === parseInt(props.params.id)
    );

    if (projectResult) {
      setProject(projectResult);
      setProjectPPT(projectResult.projectImgSrc || []);
    }
  }, [props.params.id, projects]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // 마우스로도 슬라이드 가능
  });

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="relative flex w-full flex-col items-center">
        {/* 프로젝트 제목 및 설명 */}
        <div className="flex flex-col justify-between pt-[170px] w-[90vw] md:w-[898px] 2xl:w-[1330px] pb-[50px]">
          <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center pb-9 gap-y-[10px] md:gap-x-6 md:gap-y-0">
            <div className="flex flex-row items-center gap-x-6">
              <h1 className="text-3xl md:text-5xl font-medium tracking-tighter">
                {project.title}
              </h1>
              <div className="flex flex-row items-center gap-x-[10px]">
                {project.term.map((term, idx) => {
                  return (
                    <h1
                      key={`term-${idx}`}
                      className="font-pretendard font-medium text-lg text-[#B0B0B0] border border-[#B0B0B0] px-[8px] py-[1px] rounded-full"
                    >
                      {term}
                    </h1>
                  );
                })}

                <h1 className="font-pretendard font-medium text-lg text-[#B0B0B0] border border-[#B0B0B0] px-[8px] py-[1px] rounded-full">
                  {project.type}
                </h1>
              </div>
            </div>
            <h1 className="font-medium text-xl md:text-2xl opacity-70">
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
              maskImage:
                screenWidth >= 1263
                  ? 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)'
                  : 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0) 100%)',
            }}
          >
            <div className="relative w-[90vw] md:w-[898px] 2xl:w-[1330px] h-full">
              <div
                {...handlers}
                className={`flex transition-transform ease-in-out duration-500 gap-x-[10px] md:gap-x-[100px]`}
                style={{
                  transform:
                    screenWidth >= 1536
                      ? `translateX(-${currentIndex * 1430}px)`
                      : screenWidth >= 768
                      ? `translateX(-${currentIndex * 998}px)`
                      : `translateX(-${
                          currentIndex * (window.innerWidth * 0.9 + 10)
                        }px)`,
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
                      className="object-cover md:min-w-[898px] 2xl:w-[1330px]"
                    />
                  </div>
                ))}
              </div>
              {currentIndex === 0 ? null : (
                <div
                  className="absolute flex top-0 left-[-110px] w-[100px] md:left-[-700px] h-full md:w-[600px] opacity-1 bg-slate-400 bg-transparent"
                  onClick={prevSlide}
                >
                  {/* <Image
                    src={'/prev_btn.svg'}
                    width={33}
                    height={66}
                    alt=""
                    className="hidden md:block 2xl:hidden transform translate-x-[630px]"
                  /> */}
                </div>
              )}

              {currentIndex === projectPPT.length - 1 ? null : (
                <div
                  className="absolute flex top-0 right-[-110px] w-[100px] md:right-[-700px] h-full md:w-[600px] opacity-1 bg-slate-700 bg-transparent"
                  onClick={nextSlide}
                >
                  {/* <Image
                    src={'/next_btn.svg'}
                    width={33}
                    height={66}
                    alt=""
                    className="hidden md:block 2xl:hidden transform translate-x-[-70px]"
                  /> */}
                </div>
              )}
            </div>
          </div>
          {/* 슬라이드 넘기기 버튼 */}
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
                src={'/common/prev_btn.svg'}
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
                src={'/common/next_btn.svg'}
                width={8}
                height={16}
                alt=""
                className="transform translate-x-[1px]"
              />
            </motion.div>
          </div>
        </div>

        {/* 프로젝트 상세 설명 */}
        <div className="flex flex-col md:flex-row py-[60px] w-[90vw] md:w-[898px] md:gap-x-10 2xl:w-[1330px] 2xl:gap-x-20">
          <div className="flex flex-col order-2 md:w-5/12 md:order-1 2xl:w-1/3">
            {/* 구성원 및 역할 */}
            <div className="flex flex-col pb-[60px] md:pb-20">
              <h2 className="text-[26px] font-medium pb-4">구성원 및 역할</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <div className="flex flex-col font-pretendard pt-14">
                {/* 팀 이름 */}
                <div className="flex flex-row justify-between items-center">
                  <h5 className="text-lg font-semibold opacity-70">TEAM</h5>
                  <span className="text-lg font-normal">
                    {project.teamName}
                  </span>
                </div>
                {/* 팀 멤버 */}
                {project.teamMember.map((member, idx) => {
                  return (
                    <div
                      key={`member-field-${idx}`}
                      className="flex flex-row justify-between items-center pt-5"
                    >
                      <h5 className="text-lg font-semibold opacity-70">
                        {member.fieldName}
                      </h5>
                      <div className="flex flex-row gap-x-5">
                        {member.member.map((name, idx) => {
                          return (
                            <span
                              key={`member-${idx}`}
                              className="text-lg font-normal"
                            >
                              {name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 기술스택 및 사용 툴 */}
            <div className="flex flex-col pb-[60px] md:pb-20">
              <h2 className="text-[26px] font-medium pb-4">STACK & TOOL</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <div className="flex flex-col font-pretendard pt-9">
                {/* 스택 */}
                <div className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                  {project.projectTool.map((stack, idx) => {
                    return (
                      <div
                        key={`tool-${idx}`}
                        className="px-[10px] py-[4px] rounded-full bg-white text-[#4E4E4E] text-lg font-medium bg-opacity-70"
                      >
                        {stack}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* 프로젝트 링크 */}
            <div className="flex flex-col sm:pb-[60px] md:pb-20">
              <h2 className="text-[26px] font-medium pb-4">프로젝트 링크</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <div className="flex flex-col font-pretendard pt-14 gap-y-6">
                {/* 링크 */}
                {project.projectLink.map((link, idx) => {
                  return (
                    <div
                      key={`link-${idx}`}
                      className="flex flex-row justify-between items-center"
                    >
                      <h5 className="text-lg font-semibold opacity-70">
                        {link.linkName}
                      </h5>
                      <Link href={link.link} target="_blank">
                        <Image
                          src={link.linkImg}
                          width={36}
                          height={36}
                          alt="githubLink"
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col order-1 pb-[60px] md:w-7/12 md:order-2 2xl:w-2/3">
            {/* 프로젝트 배경 */}
            <div className="flex flex-col pb-[60px] md:pb-[100px]">
              <h2 className="text-[26px] font-medium pb-4">프로젝트 개요</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <span className="flex flex-col text-lg font-pretendard pt-14 font-normal md:w-full 2xl:w-5/6 whitespace-pre-line">
                {project.projectBackground}
              </span>
            </div>
            {/* 프로젝트 기능 */}
            <div className="flex flex-col">
              <h2 className="text-[26px] font-medium pb-4">프로젝트 기능</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <span className="flex flex-col text-lg font-pretendard pt-14 font-normal md:w-full 2xl:w-5/6 whitespace-pre-line">
                {project.projectFeatures}
              </span>
            </div>
          </div>
        </div>
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

function ProjectCarousel() {
  return (
    <Swiper>
      <SwiperSlide>
        <Image
          src={'/projects/2/slide-1.png'}
          width={1330}
          height={400}
          alt=""
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/projects/2/slide-2.png'}
          width={1330}
          height={400}
          alt=""
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/projects/2/slide-3.png'}
          width={1330}
          height={400}
          alt=""
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
