# DO IT
교내 IT협업동아리 홈페이지 프로젝트

<img width="100%" alt="DO IT" src="https://github.com/user-attachments/assets/e1d369da-63b4-4bfa-88c9-7d3e51ba1136" style="border-radius:10px;" />


## 프로젝트 소개
### 프로젝트 배경
1. 동아리 창설배경 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="25" height="25" />
  > 이 프로젝트를 소개하기 전에 이 동아리를 창설하게 된 계기부터 설명할 것입니다.
  > 
  > 저는 어떤 프로젝트든 성공적인 진행을 위해 가장 중요하게 생각하는 요소는 협업 역량입니다. 하지만, 학교 수업에서는 같은 전공의 학생들과만 팀 프로젝트를 할 수밖에 없었고, 우리 지역에서는 수도권처럼 IT연합동아리 활동이 활발하지 않았습니다.
  > 
  > 이에 따라 저는 실무와 유사한 경험을 교내에서도 할 수 있도록 기획, 디자인, 개발을 원하는 학생들이 함께 모여 프로젝트를 진행하는 프로젝트 중심의 동아리를 창설하게 되었습니다.
2. 홈페이지의 필요성 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png" alt="Check Mark Button" width="25" height="25" />
  > 프로젝트 중심의 동아리 이므로, 진행한 프로젝트를 효과적으로 공유할 수 있는 매개체가 필요했습니다. 또한, IT동아리인 만큼 자체적인 웹페이지를 운영하는 것이 필수적이라 생각했습니다.
  > 
  > 그래서, 디자이너와 협력하여 동아리 홈페이지를 제작하여 각 팀이 어떤 프로젝트를 기획하고 개발했는지 보여줄 수 있도록 했으며, 페이지 내에서 동아리 지원서를 제출하고 운영진이 이를 확인할 수 있도록 개발하였습니다. 

### 프로젝트 진행 기간

- 동아리 프로젝트 진행기간
  2024. 03 - 2025. 02 (12개월)
- 홈페이지 개발 진행기간
  2024. 01 - 2024. 03 (2개월)

### 기능
1. 메인페이지 (https://www.do-it.kr/)
   - 동아리의 활동/목표/프로젝트 미리보기를 통한 동아리 소개 제공 
2. 프로젝트 조회 (https://www.do-it.kr/projects)
   - 각 기수별 프로젝트 조회
   - 프로젝트 이미지 슬라이드 조회
   - 프로젝트의 배경/기능/팀구성/기술스택/링크 제공
   - Swiper 제스처를 통한 모바일 환경에서 이미지 슬라이드
3. 지원서 (https://www.do-it.kr/recruit/apply) *동아리 지원 마감으로 현재는 위 링크를 통해서만 접근 가능합니다.
   - 인적사항/자기소개서 작성
   - 포트폴리오 및 이미지 데이터 제출

## 프로젝트 설명
### 프로젝트 링크
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Link.png" alt="Link" width="25" height="25" /> WEBSITE : https://www.do-it.kr/

### 기술스택
- Languages
  - HTML5/CSS3
  - JavaScript
- Skills
  - Next.js
    - 서버리스 프레임워크를 활용하여 데이터 요청
  - Tailwindcss
    - 빠른 개발과 반응형 웹 구현을 위한 스타일 라이브러리 활요
  - Framer motion
    - 부드러운 애니메이션을 위한 애니메이션 라이브러리 활용
  - MongoDB
    - 지원자 데이터 저장을 위한 NoSQL 데이터베이스 활용
  - AWS S3
    - 포트폴리오 데이터(이미지, PDF) 저장을 위한 S3 버킷 생성 및 연동

### 팀원
- 우명규 : 홈페이지 기획 및 프론트엔드 개발
- 진기원 : UI/UX 디자이너

### 프로젝트 기여도
- IA 및 홈페이지 와이어프레임 작성
- API Routes를 활용한 지원서 데이터 API 기능 개발
- MongoDB 및 AWS S3 연동 및 지원서 데이터 저장
- 반응형 웹 개발 및 애니메이션
- 관리자페이지 JWT 기반 인증 시스템 구축

### 설계 및 준비
프로젝트를 진행하면서 설계했던 내용이나 사용했던 방식에 대해 정리하였습니다.
#### IA
<img width="100%" alt="DO IT" src="https://github.com/user-attachments/assets/d308b7b9-4281-4dc1-8c01-708a282e384d" style="border-radius:10px;" />

#### Responsively App
<img width="100%" alt="DO IT" src="https://github.com/user-attachments/assets/00c1d872-978c-44c1-8f47-577d9ac3bcd4" style="border-radius:10px;" />

## 프로젝트 문제 및 해결 경험
1. 협업 및 운영 문제
   1. <strong>동아리 내의 한 팀이 내부 분열로 인한 프로젝트 중단 위기</strong>
   
      [📕 문제 원인]
      - 팀장으로부터 팀 내의 개발자분이 연락이 잘 되지 않고, 회의를 불성실하게 참여한 것을 확인
    
      [✅ 해결 방법]
        - 팀장과 개별적으로 커피챗을 진행하며 진행상황 파악
        - 1차적으로 팀장에게 적극적인 소통으로 갈등 해결 방안 제시
        - 문제가 지속 될 경우, Figma 프로토타입을 통해 최종발표에서 최소한의 성과 도출

   2. <strong>디자이너와 카드뉴스 제작 과정에서 의견 충돌</strong>
   
      [📕 문제 원인]
      - 디자이너분께 대화를 통해 동아리 홍보 카드뉴스의 디자인 태스크를 전달드렸지만, 다른 방향의 디자인이 나와 약간의 의견 충돌이 발생
    
      [✅ 해결 방법]
        - 요청 사항을 명확히 전달하지 않은 부분을 인정하고, 디자인 참고 사이트에서 레퍼런스를 정리하여 제공
        - 이를 통해 2기, 3기 모집을 원활히 진행

2. 기술적인 문제
   1. <strong>반응형 개발 효율 문제</strong>
   
      [📕 문제 원인]
      - 개발하면서 다양한 기기에서 확인해야했기때문에 바꿔가면서 하다보니 개발 효율성이 떨어졌음.
    
      [✅ 해결 방법]
        - 다양한 기기에서 보이는 화면을 한 번에 확인할 수 있도록 ResponsivelyApp 프로그램을 활용하여 개발 효율성 증대
        - 이를 통해 빠르게 개발을 진행할 수 있었다.

## 회고
### IT동아리의 회장으로서의 경험
이 프로젝트는 단순한 웹 개발이 아니라, 동아리를 성장시키기 위한 중요한 동기였습니다.<br/>
구성원들이 함께 성장할 수 있는 방안을 고민하였고, 타 대학 IT 동아리 방문 및 개발 컨퍼런스 참석 등을 통해 인사이트를 얻었으며 1기와 2기 회장을 역임하였습니다.

그 결과 1기 26명, 2기 40명의 구성원을 모집하며 성공적으로 동아리로 운영할 수 있었습니다.

<p align="center">
  <img width="40%" alt="DO IT" src="https://github.com/user-attachments/assets/c9037e39-8214-463d-a575-599c25dd839b">
  <img width="52%" alt="DO IT" src="https://github.com/user-attachments/assets/4483656b-d10e-448b-9874-dabe2536bbc6">
</p>
<br/>
<br/>

### 프론트엔드에게 AWS란..
홈페이지 개발하면서 가장 어려웠던 부분은 AWS와의 연동이었습니다.<br/>
지원서에서 포트폴리오나 이미지 파일을 첨부하기 위해서는 파일을 어딘가에는 업로드해야 했습니다.<br/>
그래서 처음으로 AWS S3라는 것을 사용하게 되었고, 처음이다보니 정책을 설정하고 Bucket을 생성하는 것 조차 어려웠습니다.
 
여러 영상과 문서를 찾아본 결과 파일 객체를 업로드하고 경로를 가져올 수 있는 getSignedUrl을 통해 이미지가 저장되는 경로를 가져와 MongoDB에 저장시킬 수 있었습니다.

이를 통해 관리자페이지에서도 성공적으로 파일을 확인할 수 있도록 연동하였습니다.
<br/>
<br/>

### 서버리스 프레임워크?
React.js만 사용해왔던 저에게 Next.js는 새로운 도전이었습니다.<br/>
지원서 저장 및 조회 기능, SEO 설정이 필요하여 Next.js를 도입했고 파일 시스템 기반 Routing도 프로젝트 구조화에 큰 도움이 되었습니다. 

이를 통해 새로운 기술에 대한 두려움을 많이 줄일 수 있었던 것 같습니다.
