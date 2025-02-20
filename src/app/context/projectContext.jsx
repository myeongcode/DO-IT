'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ProjectContext = createContext();

const projectLists = [
  {
    id: 1,
    title: '연세대 학식모지',
    projectSummary: '교내 복지매장 정보 제공 서비스',
    imgSrc: '/projects/1기/1/Thumbnail_YonseiHasikmoji.png',
    type: 'APP',
    term: [1, '선발'],
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
      '/projects/1기/1/slide-1.png',
      '/projects/1기/1/slide-2.png',
      '/projects/1기/1/slide-3.png',
      '/projects/1기/1/slide-4.png',
      '/projects/1기/1/slide-5.png',
      '/projects/1기/1/slide-6.png',
      '/projects/1기/1/slide-7.png',
    ],
    projectLink: [
      {
        linkName: 'Google Play',
        link: 'https://play.google.com/store/apps/details?id=com.hungry_yonsei.myapplication&hl=ko',
        linkImg: '/common/play-store.svg',
      },
      {
        linkName: 'App Store',
        link: 'https://apps.apple.com/vn/app/%EC%97%B0%EC%84%B8%EB%8C%80-%ED%95%99%EC%8B%9D%EB%AA%A8%EC%A7%80/id6462422011',
        linkImg: '/common/apple.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'mogu',
    projectSummary: '연세인을 위한 모든 공동구매, 모구',
    imgSrc: '/projects/1기/2/Thumbnail_mogu.png',
    type: 'APP',
    term: [1],
    teamName: '카페이너',
    projectBackground: `모구는 매지리에 거주하는 연세대학교 학생들이 물품을 공동구매 할 수 있도록 공구 의사가 맞는 학생들을 연결해주는 서비스입니다.

    학교 주변에 거주하는 학생들은 주변에 만족스러운 오프라인 매장이 없어 물품을 구매하는 데 불편함을 겪고 있습니다. 이에 따라 온라인으로 자주 구매하여 배송받는데, 온라인 구매 시에도 소량구매 비용의 부담으로 인해 대량구매를 하는 경향이 있습니다. 비용 측면의 부담, 품질유지기한 내에 물품을 사용하지 못하거나 보관 공간 부족 등의 시간/공간 관련 문제, 다량의 음식물쓰레기 처리에 대한 스트레스를 겪고 있습니다.
    
    따라서 필요한 만큼의 상품을 저렴하게 구매하고 싶어하는 학생들을 위해 원하는 상품을 공동구매할 수 있도록 연결해주는 서비스를 기획하게 되었습니다.

    🙋🏻‍♀️ 손혜림 PM | 문제정의 및 리서치, 페르소나 설정, 플로우 차트 설계, 일정 관리 및 회의 진행, 전반적인 프로세스 관리
    🙋🏻‍♀️ 남윤지 PD | 와이어프레임 구축, 디자인 스토리보드 제작, 전반적인 컨셉과 디자인 스타일 설정
    🙋🏻‍♀️ 김민경 FE | UI 구현, 사용자 인터랙션 구현, 기능 구현, API 연동
    🙋🏻‍♂️ 배진우 FE | UI 구현, 사용자 인터랙션 구현, 기능 구현, API 연동
    🙋🏻‍♀️ 전가배 BE | 로직, ERD 설계, 데이터베이스 관리, 인증 및 서버, API 설계
    `,
    projectTool: [
      'JavaScript',
      'React Native',
      'Java',
      'Spring Boot',
      'AWS EC2',
      'AWS RDS',
      'mysql',
    ],
    projectFeatures: `1. 공구 모집 및 관리
    - 모집 : 공동구매 글을 직접 등록하여 참여자를 모집할 수 있습니다.
    - 참여자 관리 : 공구가 진행되는 단계별로 참여자들을 용이하게 관리할 수 있도록 참여자들의 참여수량 및 참여자 정보를 리스트업하여 주최자에게 보여줍니다.

    2. 공구 참여
    - 참여 : 원하는 금액과 수량에 맞추어 공구에 참여할 수 있습니다.
    - 소통 : 공구 의사가 맞는 학생끼리 일정을 조율하며 소통할 수 있도록 오픈채팅방 링크를 제공합니다.

    3. 검색
    - 관심있는 품목 혹은 키워드를 검색하여 진행중인 공구를 찾아볼 수 있습니다.

    4. 관심공구
    - 현재 진행중인 공동구매 중 관심있는 상품에 하트를 눌러 찜한 글만 모아볼 수 있습니다.

    5. 공구 관리
    - 내가 진행중이거나 참여중인 공구의 현재 진행상황을 한눈에 파악할 수 있습니다. 중도에 취소된 공구와 물품 수령까지 받고 완료된 공구는 ‘종료된 공구’ 페이지에서 따로 확인 가능합니다.
    `,
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
    projectImgSrc: ['/projects/1기/2/slide-1.png'],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Mogu',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'YONSEI SPACE',
    projectSummary: '연세인을 위한 새로운 공간 대관 시스템',
    imgSrc: '/projects/1기/3/Thumbnail_YONSEISPACE.png',
    type: 'WEB',
    term: [1],
    teamName: '2024',
    projectBackground: `기존의 공간대관시스템은 노후화 및 관리미흡 등으로 인해 사용자들이 불편함을 느끼고 있으며 사용방법 또한 제대로 지켜지고 있지 않고 있습니다.
    
    YONSEISPACE는 이를 개선하고자 기획한 공간대관시스템 리뉴얼 프로젝트이며 여러분들께 새로운 방식의 공간대관을 경험시켜드릴겁니다.`,
    projectTool: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    projectFeatures: `ⅰ) 조건별 검색 필터
      건물,시간,기자재,용도,인원 중 사용자가 원하는 조건을 선택해, 보다 빠른 검색이 가능해졌습니다.

    ⅱ) 간편해진 대관신청 과정
      복잡했던 대관 신청 과정을 신청폼 작성 하나로 간소화하였습니다.

    ⅲ) 새로워진 Card UI
      기존의 테이블 형식이 아닌 시각화된 UI로 공간의 특징을 한눈에 파악 할 수 있습니다.

    ⅵ) 깔끔해진 마이페이지
      불필요한 페이지를 없애고 흩어져있던 공지사항과 대관현황 페이지 등을 하나로 통합하였습니다.
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
      '/projects/1기/3/slide-1.png',
      '/projects/1기/3/slide-2.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Yonsei-Space',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Flanning',
    projectSummary: '국내여행 공동 플래닝 서비스',
    imgSrc: '/projects/1기/4/Thumbnail_Flanning.jpeg',
    type: 'APP',
    term: [1, 2],
    teamName: 'Flanning',
    projectBackground: `국내여행자들의 수요는 팬데믹 이후 계속 증가하고 있습니다. 하지만 개인별로 상이한 여행 목적과 계획 스타일을 고려한 공동 여행 플래닝 서비스는 아직 부족합니다.

    Flanning은 각자의 필요에 맞게 여행 계획을 세울 수 있는 자율성 높은 국내여행 공동 플래닝 방식을 제안합니다. 

    번거롭고 때로는 갈등도 겪어야 했던 공동 플래닝 과정을, 설레는 감정과 오롯이 함께할 수 있는 즐거운 여행 경험의 일부로 변화시키고자 합니다. 여행 후에는 생생한 리뷰 작성까지, 여행의 시작과 마무리를 플래닝과 함께해요!
`,
    projectTool: [
      'React Native',
      'JavaScript',
      'Google map API',
      'Figma',
      'Firebase',
      'Kakao login API',
    ],
    projectFeatures: `🧭 편리한 공동 플래닝
    - 실시간 업데이트 되는 플래너로 혼선 없는 일정 확인
    - 공동 작업자를 추가하여 동행자와 함께 여행 일정 편집

    🧭 자율성 높은 플래너
    - 개인화된 경험과 플래닝 효율을 증대시키는, 자율적인 항목 선택 방식
    - 대안 플랜 추가, 링크 추가 등, 다양한 기능을 활용한 효과적인 플래닝

    🧭 직관적인 서비스 경험 
    - 최초 사용자에게 여행 스타일 테스트와 앱 튜토리얼 제공
    - 라벨과 토글, 아이콘을 적극 활용한 직관적인 플래너 디자인

    🧭 생생한 여행 리뷰 
    - 여행 후 리뷰 등록으로 추억을 생생하게 기록
    - 구체적인 피드백 작성으로 향후 여행 경험을 개선

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
        fieldName: 'Front-end Developer',
        member: ['임희원', '우명규'],
      },
    ],
    projectImgSrc: [
      '/projects/1기/4/slide-1.png',
      '/projects/1기/4/slide-2.png',
      '/projects/1기/4/slide-3.png',
      '/projects/1기/4/slide-4.png',
      '/projects/1기/4/slide-5.png',
      '/projects/1기/4/slide-6.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Flanning',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 5,
    title: 'YOB',
    projectSummary: '교내 시내/시외버스 교통 정보 제공 서비스',
    imgSrc: '/projects/1기/5/Thumbnail_YOB.png',
    type: 'APP',
    term: [1],
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
    imgSrc: '/projects/1기/6/Thumbnail_MOCA.png',
    type: 'APP',
    term: [1],
    teamName: '6팀',
    projectBackground: `- 공간적 한계로 인한 개인의 종이책 보관의 어려움
    전자책의 등장으로 종이책이 사라질 것이라는 전망이 있었으나, 가독성, 시력 및 피로도, 책의 소장 가치 등의 이유로 여전히 종이책을 선호하는 사람들이 많다. 그러나 종이책을 보관하는 데는 공간적 한계가 존재한다. 책을 정리하려니 버리기 아깝고, 중고로 팔려 해도 근처에 중고 서점이나 책방이 없으면 어려운 상황이다.

    - 문화 공간의 부족과 대비되는 카페 증가 추이
    정부의 ‘책 생태계’ 관련 예산 삭감으로 인해 ‘도서관 정책 개발 및 서비스 환경 개선’ 예산이 지난해 대비 52억 4천만 원, ‘도서관 기반 조성’ 예산은 30억 원 넘게 삭감됐다. 특히, 작은 도서관들은 정부나 지자체의 지원 없이 운영이 어려워 지방 주민들의 문화 공간이 줄어들고 있다.

    이에 반해, 코로나 이후 우리나라의 커피 전문점 수는 이전보다 79% 증가했다. 카페의 수가 늘어나면서 다양한 형태의 카페가 생겨나고 있으며, 그중 대표적인 것이 북카페이다. 북카페는 많은 양의 책을 보유한 카페로, 독서와 다양한 음료를 동시에 즐길 수 있는 공간을 제공한다.

    이러한 상황에서 두 문제를 해결할 방안으로 카페와 같이 활용 가능한 공간을 활용하여 개인의 책 대여, 반납, 판매를 돕는 플랫폼을 만들고자 한다.
    `,
    projectTool: ['Flutter', 'FastAPI', 'Docker', 'Figma'],
    projectFeatures: `
    메인 화면
      - 중고책 검색 : 새로 등록된 책과 인기있는 책을 둘러보며, 원하는 책의 상세 정보도 확인할 수 있습니다.
      - 중고책 정보 확인 : 중고책들의 가격을 비교해 합리적인 거래를 도울수 있습니다.

    책 관리
      - 나의 중고책 등록 : 책을 등록하고 자신이 보관 중인 책의 상세 정보를 조회할 수 있습니다.
      - 책 상태 관리 : 구매와 대출을 허용할 수 있는 관리 상태를 실시간으로 체크할 수 있습니다.

    마이페이지
      - 인앱결제 : 현재 보유 중인 캐시를 조회하며 캐시를 충전하여 거래할 수  있습니다. 
      - 찜목록 : 관심있는 책을 찜해놓고 목록을 확인할 수 있습니다.
      - 책 내역 확인 : 구매/대여/판매한 책들의 내역을 목록으로 확인할 수 있습니다.
      - 설정 : 개인 정보를 관리하거나 알림 수신을 설정할 수 있습니다.
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
    projectImgSrc: ['/projects/1기/6/slide-1.png'],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Moca',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 7,
    title: 'PINS',
    projectSummary: '교내 모임 중개 및 커뮤니티 플랫폼',
    imgSrc: '/projects/1기/7/Thumbnail_PINS.png',
    type: 'APP',
    term: [1, 2],
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
    projectFeatures: `📍 우리 학교 인원으로만 구성
    같은 대학교에 등록된 학생들로만 모임을 구성하여, 신뢰할 수 있는 소통과 협업이 가능해요.
    학교 인증 절차를 거쳐 더욱 안전한 모임 활동을 즐길 수 있어요.

    📍 나의 모임 모아보기
    내가 가입한 모임들을 한눈에 볼 수 있는 나의 모임 탭에서 쉽게 관리할 수 있어요.
    모임 별로 최근 활동, 공지사항, 일정 등을 한곳에서 확인할 수 있어 편리해요.

    📍 다양한 모임 리스트 및 필터링 가능
    우리 대학교 내 다양한 모임을 탐색하고 모집 중인 동아리, 소모임을 빠르게 확인할 수 있어요.
    관심사, 모집 상태 등 여러 기준으로 모임 리스트를 필터링하여 원하는 모임을 빠르게 찾을 수 있어요.

    📍 쉽고 빠른 모임 지원
    마음에 드는 모임을 발견하면 간단한 지원서 작성으로 빠르게 지원할 수 있어요.
    지원 후 모임 운영진이 검토한 뒤, 앱에서 직접 합격 여부를 확인할 수 있어요.

    📍 모임 공지사항, 일정, 멤버 목록 등 모임 관리
    모임 공지사항, 일정, 멤버 목록 등을 손쉽게 관리하고 확인할 수 있어요.
    중요한 공지나 일정을 빠르게 확인할 수 있어, 더 효율적인 모임 활동이 가능해요.
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
      '/projects/1기/7/slide-1.png',
      '/projects/1기/7/slide-2.png',
      '/projects/1기/7/slide-3.png',
      '/projects/1기/7/slide-4.png',
      '/projects/1기/7/slide-5.png',
      '/projects/1기/7/slide-6.png',
      '/projects/1기/7/slide-7.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Pins',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 8,
    title: 'QPEED',
    projectSummary: '모두가 작가가 되는 그날까지, 나만의 커미션 플랫폼',
    imgSrc: '/projects/1기/8/Thumbnail_Qpeed.png',
    type: 'APP',
    term: [1],
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
      '/projects/1기/8/slide-1.png',
      '/projects/1기/8/slide-2.png',
      '/projects/1기/8/slide-3.png',
      '/projects/1기/8/slide-4.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/QPEED',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 9,
    title: '2dayToday',
    projectSummary: '이틀씩 작성하는 TO DO 서비스',
    imgSrc: '/projects/2기/1/Thumbnail_2dayToday.png',
    type: 'WEB',
    term: [2],
    teamName: '1팀',
    projectBackground: `2DAYTODAY는 계획 수립 능력을 활성화하고 효율적인 일정 관리를 돕는 서비스입니다. 많은 사람들이 일정을 하루 단위로 계획하지만 그러다보면 급한 일이 생기거나 예상보다 일이 밀리면 계획이 꼬이기 쉽습니다. 이런 상황은 계획자에게 스트레스를 주고, 일정을 제대로 관리하기 어렵게 만듭니다.
    또한, 복잡한 업무나 큰 작업은 하루 단위로 계획하기 어려운 경우가 많습니다. 이를 해결하기 위해, 2DAYTODAY는 이틀 단위로 유연하게 일정을 조정할 수 있는 시스템을 제공합니다. 
    따라서 2DAYTODAY는 이틀 단위로 기존보다 더 유연하게 일정을 조정할 수 있도록 도와주며, 계획 간 연계를 통해 작업을 효율적으로 분배하고 생산성을 높이는 데 기여합니다.
    `,
    projectTool: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    projectFeatures: `MAIN → MAIN 화면에서는 오늘과 내일의 일정을 추가하고 관리할 수 있습니다. 해야 할 일정은 하늘색, 완료한 일정은 회색, 미룬 일정은 주황색으로 구분됩니다. 미룬 일정은 이미 한 번 미뤄졌기 때문에 다시 미룰 수 없습니다. 

    TASKS → TASKS 화면에서는 일정을 추가하고 수정할 수 있습니다. 일정 이름과 설명을 입력하고, 일정을 오늘 또는 내일로 설정할 수 있습니다. 일정이 미뤄져야 할 경우 미루기 버튼을 눌러 일정을 미룰 수 있습니다. 이미 한 번 미뤄진 일정은 미루기 버튼이 비활성화되어 다시 미룰 수 없습니다.  
    
    WEEKLY → WEEKLY 화면에서는 일정 달성률을 확인할 수 있습니다. 오늘을 기준으로 지난 일주일 동안의 달성률을 확인할 수 있으며, 각 일정별 달성률도 확인할 수 있습니다.
    `,
    teamMember: [
      {
        fieldName: 'Product Designer',
        member: ['권순용'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['박김한결', '이여은'],
      },
    ],
    projectImgSrc: [
      '/projects/2기/1/slide-1.png',
      '/projects/2기/1/slide-2.png',
      '/projects/2기/1/slide-3.png',
      '/projects/2기/1/slide-4.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/2dayToday',
        linkImg: '/common/github.svg',
      },
      {
        linkName: 'Link',
        link: 'https://2daytoday.com/',
        linkImg: '/common/home.svg',
      },
    ],
  },
  {
    id: 10,
    title: '코디(CODI)',
    projectSummary: '개발자/디자이너를 위한 팀 빌딩 서비스',
    imgSrc: '/projects/2기/2/Thumbnail_CODI.png',
    type: 'APP',
    term: [2],
    teamName: '배라31',
    projectBackground: `기존의 팀 빌딩 플랫폼은 주로 구인·구직 기능에 초점을 맞추고 있어, 실제 프로젝트를 함께할 팀원을 찾기보다는 단순한 인력 매칭에 그치는 경우가 많다. 반면, 공모전과 관련된 기존 사이트들은 대회 정보를 제공하지만, 참가자가 함께할 팀원을 구하는 기능이 없거나 매우 제한적이다.

    CODI는 이러한 한계를 극복하고자, 팀 빌딩과 공모전 정보를 효과적으로 연결하는 기능을 제공한다. 사용자는 자신의 포트폴리오를 공유하고, 관심 있는 프로젝트나 공모전에 맞춰 팀을 구성할 수 있다. 또한, 프로젝트 모집 공고를 올려 팀원을 모집하거나, 다른 사용자의 프로젝트에 합류하는 것이 가능하다.
    `,
    projectTool: ['Figma', 'FastAPI', 'Docker', 'MySQL', 'Flutter'],
    projectFeatures: `
    - 사용자 등록 및 로그인 (User Registration & Login)
        - 설명 : 사용자 인증 및 계정 생성 기능
        - 세부 내용 : 이메일 또는 소셜 로그인 지원

    - 콘텐츠 게시 (Content Posting)
        - 설명 : 개발 및 디자인 관련 포트폴리오 자료 게시
        - 세부 내용 : 이미지, 텍스트, 코드 스니펫, 링크 업로드 지원

    - 피드 탐색 (Feed Browsing)
        - 설명 : 다른 사용자가 게시한 콘텐츠 탐색
        - 세부 내용 : 콘텐츠 정렬, 카테고리 별 필터 기능
        
    - 팀 빌딩 요청 (Team Building Requests)
        - 설명 : 프로젝트 팀원을 모집하거나 팀에 합류하는 기능
        - 세부 내용 : 프로젝트 모집 공고 작성, 관심 프로젝트 지정

    - 사용자 프로필 (User Profile)
        - 설명 : 사용자의 전문 분야 및 포트폴리오 정보 제공
        - 세부 내용 : 자기 소개, 보유 칭호, 사용자 인사이트, 추가 포트폴리오 링크 관리
    `,
    teamMember: [
      {
        fieldName: 'Product Designer',
        member: ['김민구'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['정하은', '이동하'],
      },
      {
        fieldName: 'Back-end Developer',
        member: ['홍정표'],
      },
    ],
    projectImgSrc: [
      '/projects/2기/2/slide-1.png',
      '/projects/2기/2/slide-2.png',
      '/projects/2기/2/slide-3.png',
      '/projects/2기/2/slide-4.png',
      '/projects/2기/2/slide-5.png',
      '/projects/2기/2/slide-6.png',
      '/projects/2기/2/slide-7.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/CODI',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 11,
    title: 'Routie',
    projectSummary: '효율적인 학교생활 루틴 관리 서비스',
    imgSrc: '/projects/2기/3/Thumbnail_Routie.png',
    type: 'APP',
    term: [2],
    teamName: '예은이의 연세',
    projectBackground: `QPEED는 커미션 중계 플랫폼으로, 누구나 쉽게 자신의 작품을 공유하고 커미션을 받을 수 있는 공간입니다. 커미션은 커뮤니티에서 자연스럽게 시작된 활동으로, 여러 작가가 자신의 작품을 공개하여 팬덤을 형성하고, 팬들이 직접 작가에게 작품을 주문하는 형태로 발전해왔습니다. 이제 커미션은 글, 그림을 넘어 다양한 카테고리로 확장되었고, 취미를 넘어서 전문적인 활동으로 자리 잡아가고 있습니다.

    하지만 커미션 활동이 활발해지면서 무리한 요구, 과도한 컨펌 요청, 비매너 행위, 그리고 작가의 연락 두절 등 여러 문제들이 발생하고 있습니다. 현재 대부분의 커미션 플랫폼이 웹 서비스에 한정되어 있어 접근성과 안전성에서도 한계가 존재합니다. QPEED는 이러한 문제들을 해결하기 위해, 앱 서비스를 통해 언제 어디서나 편리하게 이용할 수 있는 접근성과 안전 결제, 세밀한 업로드 방식, 유연한 소통 기능을 제공합니다. 이를 통해 작가와 이용자를 보호하고, 더 나은 커미션 환경을 만들고자 합니다.
    `,
    projectTool: [
      'Figma',
      'Notion',
      'Swift',
      'MySQL',
      'PostgreSQL',
      'SpringBoot',
      'Docker',
      'EC2',
      'S3',
      'Spring Security',
    ],
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
        member: ['한예은', '이나의'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['정연재'],
      },
      {
        fieldName: 'Front-end Developer',
        member: ['박세희'],
      },
    ],
    projectImgSrc: [
      '/projects/2기/3/slide-1.png',
      '/projects/2기/3/slide-2.png',
      '/projects/2기/3/slide-3.png',
      '/projects/2기/3/slide-4.png',
      '/projects/2기/3/slide-5.png',
      '/projects/2기/3/slide-6.png',
      '/projects/2기/3/slide-7.png',
      '/projects/2기/3/slide-8.png',
      '/projects/2기/3/slide-9.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Routie',
        linkImg: '/common/github.svg',
      },
    ],
  },
  {
    id: 12,
    title: '오복',
    projectSummary: '자기주도학습을 위한 학습 보조 서비스',
    imgSrc: '/projects/2기/4/Thumbnail_obok.png',
    type: 'APP',
    term: [2],
    teamName: '내성적인 형제들',
    projectBackground: `공부 습관을 잡고 자기 주도 학습 역량을 키워야 하는 중하위권 중고등학생들은 자신의 학습 상태를 제대로 인지하지 못하는 경우가 많습니다. 이는 학습 과정에 대한 성찰 시간이 부족하기 때문이며, 결국 원하는 성과를 얻지 못하는 문제로 이어집니다.

    이러한 고민을 가진 학생들을 보며, 우리는 학습 기록의 중요성을 깨달았습니다. 스스로 학습 방향을 찾아갈 수 있도록 도와주는 첫걸음으로, 학생들이 자연스럽게 자기 주도 학습을 시작할 수 있도록 돕는 학습 일기 앱, '오복: 오늘의 복습’을 제공하려 합니다.
    `,
    projectTool: [
      'Figma',
      'Notion',
      'Swift',
      'MySQL',
      'PostgreSQL',
      'SpringBoot',
      'Docker',
      'EC2',
      'S3',
      'Spring Security',
    ],
    projectFeatures: `
    1. 일기 작성 : 총 9가지 질문에 답하며 그날 공부한 내용을 떠올리고 복습할 수 있습니다. 객관적인 질문에 따라 답을 작성하다 보면 자연스럽게 자신의 학습 상태를 파악할 수 있으며, 작성 완료 시 하나의 일기가 기록됩니다.

    2. 일기 모아보기 : 매일 작성한 학습 일기는 ‘모아보기’ 기능을 통해 월별로 정리되어 확인할 수 있습니다. 한 달 동안 쓴 일기를 모아볼 수 있을 뿐만 아니라, 과목별로도 쉽게 찾을 수 있어 당일뿐만 아니라 과거의 학습 기록을 되돌아볼 때 유용합니다.

    3. 월간 통계 리포트 : 한 달 동안 작성한 학습 일기를 바탕으로 월간 통계 리포트를 제공합니다. 가장 자주 공부한 과목, 한 달 동안 작성한 일기 개수, 이해도가 낮았던 과목, 공부할 때의 기분 비율 등 다양한 데이터를 한눈에 확인할 수 있습니다. 이를 통해 자신의 학습 상태를 객관적으로 정리하고, 효과적인 학습 방향을 설정하는 데 도움을 줍니다.
    `,
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
        member: ['김민경'],
      },
      {
        fieldName: 'Back-end Developer',
        member: ['김민준'],
      },
    ],
    projectImgSrc: [
      '/projects/2기/4/slide-1.png',
      '/projects/2기/4/slide-2.png',
      '/projects/2기/4/slide-3.png',
      '/projects/2기/4/slide-4.png',
      '/projects/2기/4/slide-5.png',
      '/projects/2기/4/slide-6.png',
      '/projects/2기/4/slide-7.png',
      '/projects/2기/4/slide-8.png',
      '/projects/2기/4/slide-9.png',
    ],
    projectLink: [
      {
        linkName: 'Github',
        link: 'https://github.com/YonseiDOIT/Obok',
        linkImg: '/common/github.svg',
      },
    ],
  },
];

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjectData();
  }, []);

  const getAllProjectData = async () => {
    setProjects(projectLists);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects는 ProjectProvider 내부에서 사용 가능');
  }
  return context;
};
