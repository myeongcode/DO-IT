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

const projectLists = [
  {
    id: 1,
    title: '연세대 학식모지',
    projectSummary: '교내 복지매장 정보 제공 서비스',
    imgSrc: '/slide/1-project-app-1.png',
    type: 'APP',
    term: '선발 프로젝트',
    teamName: '학식모지',
    projectBackground: `연세대 학식모지는 연세대학교 미래캠퍼스 학생들에게 교내 학식 메뉴와 복지매장의 운영 시간을 편리하게 알려주는 정보 제공 어플리케이션입니다. 

    학식모지가 생기기 전에는 학생식당 앞에 있는 배너를 직접 확인해야만 메뉴를 알 수 있었어요. 이로 인해 불편함을 겪는 학우들이 많았고, 에브리타임 자유게시판에는 '오늘 학식 뭐임?' 같은 질문이 끊임없이 올라왔죠. 그런데 이런 질문에 제대로 된 답변이 달리는 경우는 드물었고, 아예 답변이 없는 경우도 허다했어요.

    이 문제를 해결하기 위해, 학식모지는 교내 학생식당과 제휴를 맺어 신뢰할 수 있는 정보를 제공받고, 이를 학생들이 손쉽게 확인할 수 있도록 어플리케이션으로 개발해 배포했어요. 또한 학생들이 교내 카페, 편의점, 음식점의 운영 시간을 쉽게 알 수 있도록 교내 매장 정보 페이지도 추가했어요.

    연세대 학식모지는 연세대학교 학생들의 의식주 중에서 '식'을 책임지며, 학교생활의 질을 높이는 데 기여하고 있어요. 전교생 7,000명 중 5,000명이 넘는 학우들이 이미 사용하고 있을 만큼, 학식모지는 빠르게 성장하고 있어요.
    `,
    projectTool: ['HTML', 'CSS', 'JavaScript', 'Swift', 'Java', 'Figma'],
    projectFeatures: `교내 학생식당 메뉴 확인
    - 학생식당의 주간 메뉴를 손쉽게 확인할 수 있습니다.
    
    교내 복지매장 운영 정보 확인
    - 교내 각 건물의 복지매장 운영 여부, 운영 시간, 전화번호, 매장 위치 등 다양한 정보를 제공합니다.

    교내 공식 사이트 확인 및 접속
    - 연세포탈, 연세대학교 홈페이지, 공간대관시스템, 웹메일 등 주요 교내 공식 사이트를 확인하고 바로 접속할 수 있습니다.

    고객 대응
    - 학생들의 불만사항과 피드백을 적극적으로 반영하기 위해 카카오톡 채널을 운영하며, 대표자 이메일도 함께 안내합니다.
    `,
    teamMember: [
      {
        fieldName: 'Product Designer',
        member: ['진기원'],
      },
      {
        fieldName: 'Developer',
        member: ['배진우'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Pins',
        linkImg: '/github-icon.svg',
      },
    ],
  },
  {
    id: 2,
    title: '모구',
    projectSummary: '매지리 공동구매 매칭 서비스',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP',
    term: '1기',
    teamName: '카페이너',
    projectBackground: `
    `,
    projectTool: [],
    projectFeatures: ``,
    teamMember: [
      {
        fieldName: 'Product Manager',
        member: ['손혜림'],
      },
      {
        fieldName: 'Product Designer',
        member: ['남윤지'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['배진우', '김민경'],
      },
      {
        fieldName: 'Back-end Developer',
        member: ['전가배'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Mogu',
        linkImg: '/github-icon.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'YONSEI SPACE',
    projectSummary: '연세대학교 공간 대관 시스템 리뉴얼',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'WEB',
    term: '1기',
    teamName: '2024',
    projectBackground: ``,
    projectTool: [],
    projectFeatures: `
    `,
    teamMember: [
      {
        fieldName: 'Product Designer',
        member: ['권순용'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['정연재', '이동하'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Yonsei-Space',
        linkImg: '/github-icon.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Flanning',
    projectSummary: '국내여행 공동 플래닝 서비스',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP',
    term: '1기',
    teamName: 'Flanning',
    projectBackground: ``,
    projectTool: [],
    projectFeatures: `
    `,
    teamMember: [
      {
        fieldName: 'Product Manager',
        member: ['신선림'],
      },
      {
        fieldName: 'Product Designer',
        member: ['조호진'],
      },
      {
        fieldName: 'Front/Back-end Developer',
        member: ['임희원'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Flanning',
        linkImg: '/github-icon.svg',
      },
    ],
  },
  {
    id: 5,
    title: 'YOB',
    projectSummary: '교내 시내/시외버스 교통 정보 제공 서비스',
    imgSrc: '/slide/1-project-app-5.png',
    type: 'APP',
    term: '1기',
    teamName: '마동석',
    projectBackground: `기숙사에 살지않고 학교에 통학을 하려는 연세대학교 학생들이 기존 교통 정보들의 분산으로 인해 불편함을 겪는 문제가 있었고, 통학을 하는 학생들을 위해 조금이라도 더 편의를 제공하기 위해 분산된 교통정보를 한 곳에서 확인할 수 있는 서비스를 고민하게 되었습니다.

    원주 시내에서 운영되는 시내 버스와 다른 지역에서 오가는 버스의 실시간 위치를 표시하고 노선 정보와 알림, 예약의 기능을 추가하여 통학의 불편함을 해소하는 프로젝트를 진행하였습니다.
    `,
    projectTool: ['Figma'],
    projectFeatures: `1. 홈화면
    - 내가 예약한 시외 티켓 확인
    - 현재 운행 노선 정보 확인
    - 즐겨찾는 노선 추가

    2. 시내 화면
    - 등교 셔틀 노선 정보 확인
    - 하교 셔틀 노선 정보 확인
    - 원주 시내버스의 실시간 정보 확인

    3. 시외 화면
    - 버스 예약
    - 버스 예약 확인

    4. 마이페이지
    - 로그아웃
    - 문의 전화
    - 건의 사항
    `,
    teamMember: [
      {
        fieldName: 'Product Manager',
        member: ['전소희'],
      },
      {
        fieldName: 'Product Designer',
        member: ['김미혜'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['임한결'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/5/slide-1.png',
      '/projects/1기/5/slide-2.png',
      '/projects/1기/5/slide-3.png',
      '/projects/1기/5/slide-4.png',
      '/projects/1기/5/slide-5.png',
      '/projects/1기/5/slide-6.png',
    ],
    projectLink: [],
  },
  {
    id: 6,
    title: 'MOCA',
    projectSummary: '중고책 거래 플랫폼',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP',
    term: '1기',
    teamName: '6팀',
    projectBackground: ``,
    projectTool: [],
    projectFeatures: `
    `,
    teamMember: [
      {
        fieldName: 'Front-end Develoer',
        member: ['정하은'],
      },
      {
        fieldName: 'Back-end Developer',
        member: ['홍정표'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Moca',
        linkImg: '/github-icon.svg',
      },
    ],
  },
  {
    id: 7,
    title: 'PINS',
    projectSummary: '교내 모임 중개 및 커뮤니티 플랫폼',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP',
    term: '1기',
    teamName: 'IP',
    projectBackground: `PINS는 교내 구성원 중 모임 (지원)희망자, 모임 운영자, 기존 모임 구성원들을 위한 교내 모임 중개 및 커뮤니티 플랫폼입니다.

      학교 내 중앙동아리, 준동아리, 소모임 등 수많은 모임들이 있지만, 어떤 모임이 있는지, 내가 원하는 모임이 있는건지 파악하기 어려웠어요. 또한 단순 모임 찾기 뿐만 아니라, 홍보, 모임별 일정 등을 파악하기 어려운 문제점도 존재했어요.

      PINS는 교내 모임 리스트, 모임별 공간 페이지, 홈 프로모션 영역이라는 솔루션을 통해 ‘쉽고 편리한 학교 모임 경험'과 ‘교내 모임 교류 및 활동 활성화'라는 가치를 제공하고자 해요.
    `,
    projectTool: [
      'Flutter',
      'Docker',
      'Django',
      'PostgreSQL',
      'Vue.js',
      'Figma',
    ],
    projectFeatures: `✅ 캐릭터의 레벨별 성장 & 지각 횟수 확인

      - 메인 홈에서 정시 도착의 횟수에 따라 성장하는 꾸물이 캐릭터를 만나볼 수 있어요.
      - 총 약속 횟수 중 몇 번 꾸물거렸는지 확인할 수 있어요.

      ✅ 친구들과 모임 생성 & 약속 추가
      
      - 직접 모임을 추가하거나 초대 받은 코드를 입력하여 모임에 참가해요.
      - 약속 추가 시에 날짜, 장소 등 기본 약속 정보에 꾸레벨과 벌칙 설정까지 할 수 있도록 하여 재미를 더했어요.

      ✅ 준비 정보를 입력 & 푸시 알림

      - 나의 예상 준비 시간, 이동 시간을 입력하면 여유 시간 10분을 고려하여 절대 늦지 않을 준비, 이동을 시작할 시간을 제안해요.
      - 해당 시간에 자동으로 푸시 알림을 받을 수 있어요.
      
      ✅ 우리들의 준비 현황 공유
      - 버튼을 클릭하여 나의 준비 현황을 공유하고 친구들의 현황을 확인해요.
      - 모임 내 누군가 첫 번째로 준비, 이동, 도착한 경우 모임원들은 푸시 알림을 받아요.

      ✅ 지각 꾸물이와 벌칙 확인
      - 약속의 지각 꾸물이와 벌칙을 확인해요.
      - 아무도 지각하지 않은 경우, 축하 받을 수 있어요.
    `,
    teamMember: [
      {
        fieldName: 'Product Designer',
        member: ['진기원', '최은서'],
      },
      {
        fieldName: 'Front/Back-end Developer',
        member: ['유승우'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Pins',
        linkImg: '/github-icon.svg',
      },
    ],
  },
  {
    id: 8,
    title: 'QPEED',
    projectSummary: '모두가 작가가 되는 그날까지, 나만의 커미션 플랫폼',
    imgSrc: '/slide/1-project-app-2.png',
    type: 'APP',
    term: '1기',
    teamName: 'QING',
    projectBackground: `QPEED는 커미션 중계 플랫폼으로, 누구나 쉽게 자신의 작품을 공유하고 커미션을 받을 수 있는 공간입니다. 커미션은 커뮤니티에서 자연스럽게 시작된 활동으로, 여러 작가가 자신의 작품을 공개하여 팬덤을 형성하고, 팬들이 직접 작가에게 작품을 주문하는 형태로 발전해왔습니다. 이제 커미션은 글, 그림을 넘어 다양한 카테고리로 확장되었고, 취미를 넘어서 전문적인 활동으로 자리 잡아가고 있습니다.

    하지만 커미션 활동이 활발해지면서 무리한 요구, 과도한 컨펌 요청, 비매너 행위, 그리고 작가의 연락 두절 등 여러 문제들이 발생하고 있습니다. 현재 대부분의 커미션 플랫폼이 웹 서비스에 한정되어 있어 접근성과 안전성에서도 한계가 존재합니다. QPEED는 이러한 문제들을 해결하기 위해, 앱 서비스를 통해 언제 어디서나 편리하게 이용할 수 있는 접근성과 안전 결제, 세밀한 업로드 방식, 유연한 소통 기능을 제공합니다. 이를 통해 작가와 이용자를 보호하고, 더 나은 커미션 환경을 만들고자 합니다.
    `,
    projectTool: ['Flutter', 'Firebase', 'Figma'],
    projectFeatures: `실시간 푸시 알림:
    관심 있는 작가의 새로운 작품이 업로드될 때 즉시 알림을 받아볼 수 있습니다.

    일정 등록과 작품 업로드 통합:
    작품을 등록하면서 사진, 가격, 예상 마감 시간을 설정할 수 있으며, 이후 이용자와 협의하여 변경할 수 있습니다.

    실시간 채팅 기능:
    컨펌 및 각종 문의를 작가와 실시간으로 소통할 수 있습니다. 컨펌은 최초 2회 이후 추가 구매를 통해서만 가능합니다.

    대시보드 기능:
    여러 작가의 다양한 작품을 한눈에 볼 수 있는 홈 화면과, 관심 있는 작가만 따로 모아볼 수 있는 관심 화면이 제공됩니다.

    커뮤니티 기능:
    작가와 작품에 대해 생각을 나눌 수 있는 커뮤니티 게시판 기능을 제공합니다.
    `,
    teamMember: [
      {
        fieldName: 'Product Designer',
        member: ['윤서희'],
      },
      {
        fieldName: 'Front/Back-end Developer',
        member: ['김태경', '나해빈'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/2/slide-1.png',
      '/projects/1기/2/slide-2.png',
      '/projects/1기/2/slide-3.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/QPEED',
        linkImg: '/github-icon.svg',
      },
    ],
  },
];

export default function Project(props) {
  const [project, setProject] = useState();
  const [projectPPT, setProjectPPT] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const projectResult = projectLists.find(
      (proj) => proj.id === parseInt(props.params.id)
    );

    if (projectResult) {
      setProject(projectResult);
      setProjectPPT(projectResult.projectImgSrc || []);
    }
  }, [props.params.id]);

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
                <h1 className="font-pretend font-medium text-lg text-[#B0B0B0] border border-[#B0B0B0] px-[8px] py-[1px] rounded-full">
                  {project.term}
                </h1>
                <h1 className="font-pretend font-medium text-lg text-[#B0B0B0] border border-[#B0B0B0] px-[8px] py-[1px] rounded-full">
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
          <div className="hidden 2xl:flex flex-row gap-x-[30px] py-[30px]">
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
        <div className="flex flex-col md:flex-row py-[60px] w-[90vw] md:w-[898px] md:gap-x-10 2xl:w-[1330px] 2xl:gap-x-20">
          <div className="flex flex-col order-2 md:w-5/12 md:order-1 2xl:w-1/3">
            {/* 구성원 및 역할 */}
            <div className="flex flex-col pb-[60px] md:pb-20">
              <h2 className="text-[26px] font-medium pb-4">구성원 및 역할</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <div className="flex flex-col font-pretend pt-14">
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
              <div className="flex flex-col font-pretend pt-9">
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
              <div className="flex flex-col font-pretend pt-14">
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
                      <Link href={link.link}>
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
              <h2 className="text-[26px] font-medium pb-4">프로젝트 배경</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <span className="flex flex-col text-lg font-pretend pt-14 font-normal md:w-full 2xl:w-5/6 whitespace-pre-line">
                {project.projectBackground}
              </span>
            </div>
            {/* 프로젝트 기능 */}
            <div className="flex flex-col">
              <h2 className="text-[26px] font-medium pb-4">프로젝트 기능</h2>
              <div className="w-full h-[1px] bg-white"></div>
              <span className="flex flex-col text-lg font-pretend pt-14 font-normal md:w-full 2xl:w-5/6 whitespace-pre-line">
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
