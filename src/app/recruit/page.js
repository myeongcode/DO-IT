"use client"
import s from '../recruit/recruitpage.module.css';
import React, { useState } from 'react';
import Link from 'next/link';



export default function Home() {
  const [activeTab, setActiveTab] = useState('지원');


  const handleClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <div style={{
      width: '1920px',
    }}>
      <div
        style={{
          height: '1210px',
          backgroundColor: '#00B8FF',
          textAlign: 'center',
        }}
      >

        <img src="/Frist_Recruit.png" alt="" style={{
          width: '1223px',
          height: '189px',
          marginLeft: '349px',
          marginRight: '348px',
          marginTop: '233px',
        }}
        >
        </img>

        <p
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Pretendard',
            fontSize: '90px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-3.6px',
            marginTop: '59px',
            marginLeft: '751px',
            marginRight: '752px',
          }}>
          2.27 - 3.3
        </p>

        <p
          style={{
            marginTop: '218px',
            alignContent: 'center',
          }}
        >
          <svg
            width="1320"
            height="292"
            viewBox="0 0 1320 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M166 292L70.4604 146.008L165.985 0H85.6176L30.457 84.8628L7.77386 119.753C-2.59129 135.696 -2.59129 156.304 7.77386 172.247L30.442 207.122L85.6026 292H166Z" fill="white" />
            <path d="M1153 292L1249.12 146.008L1153.02 0H1233.87L1289.36 84.8628L1312.18 119.753C1322.61 135.696 1322.61 156.304 1312.18 172.247L1289.37 207.122L1233.88 292H1153Z" fill="white" />
          </svg>

          <img src="/notebook.png" alt="" style={{
            width: '933.582px',
            height: '563.1px',
            marginTop: '-450px',
          }}></img>
        </p>
      </div>

      <div className={s.fontAli}>
        <div className={s.testStyle}>
          <span className={s.doit}>DO IT.</span><br />
          <span className={s.doit_remain}>1기 신규부원 모집</span>


          <div className={s.inlineContainer}>
            <div className={s.scheduleContainer}>
              <p className={s.scheduleFont} style={{
                marginRight: '240px',
              }}>SCHEDULE</p>
            </div>
            <div className={s.scheduleContainer}>
              <span className={s.scheduleFont}>2/27 - 3/3</span>
              <div className={s.scheduleFont2} style={{
                marginTop: '17px',
              }}>
                서류 접수
              </div>
            </div>

            <div className={s.scheduleContainer}>
              <span className={s.scheduleFont} style={{
                marginLeft: '120px',
              }}>3/5 - 3/7</span>
              <div style={{
                marginLeft: '120px',
                marginTop: '17px',
              }} className={s.scheduleFont2}>
                면접 진행
              </div>
            </div>

            <div className={s.scheduleContainer}>
              <span className={s.scheduleFont} style={{
                marginLeft: '120px',
              }}>3/9</span>
              <div style={{
                marginLeft: '120px',
                marginTop: '17px',
              }} className={s.scheduleFont2}>
                최종 결과
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ borderBottom: '1px solid black', marginBottom: '20px', width: '1320px', margin: '0 auto', marginTop: '100px', backgroundColor: '#C8D3DA' }}>
      </div>

      <div>
        <p>
          FIELDS
        </p>
      </div>


      <div style={{ borderTop: '1px solid black', marginBottom: '20px', width: '1320px', margin: '0 auto', marginTop: '100px' }}></div>

      <div
        style={{
          height: '1400px',
          backgroundColor: 'white',
        }}
      >
        <div className={s.faqFont}>
          <div>FAQ</div>
        </div>

        <div className={s.faq_kategorie_container}>
          <div
            className={activeTab === '지원' ? s.faq_activate_kategorie_font : s.faq_inactivate_kategorie_font}
            onClick={() => handleClick('지원')}
          >
            지원
          </div>
          <div
            className={activeTab === '면접' ? s.faq_activate_kategorie_font : s.faq_inactivate_kategorie_font}
            onClick={() => handleClick('면접')}
          >
            면접
          </div>
          <div
            className={activeTab === '활동' ? s.faq_activate_kategorie_font : s.faq_inactivate_kategorie_font}
            onClick={() => handleClick('활동')}
          >
            활동
          </div>

        </div>

        {activeTab === '지원' &&
          <>
            <div className={s.inlineContainer}>
              <div className={s.faq_icon}>Q</div>
              <div className={s.faq_Q} style={{
                marginTop: '99px',
                marginLeft: '26px',
              }}>
                비전공자인데 지원이 가능할까요?
              </div>
              <div className={s.faq_A} style={{
                marginTop: '99px',
                marginLeft: '30px',
                marginRight: '300px',
              }}>네, 가능합니다. 하지만 실제로 지원하고자 하시는 분야(기획 or 개발 or 디자인)에 <br />
                대한 지식을 가지고 계셔야합니다.</div>
            </div>

            <div className={s.inlineContainer}>
              <div className={s.faq_icon} style={{
                marginTop: '87px',
              }}>Q</div>
              <div className={s.faq_Q} style={{
                marginTop: '87px',
                marginLeft: '26px',
              }}>
                프로젝트 경험이 없어도 가능한가요?
              </div>
              <div className={s.faq_A} style={{
                marginTop: '87px',
                marginLeft: '30px',
                marginRight: '300px',
              }}>가능합니다. DO IT은 프로젝트 협업 능력을 향상시키고 다양한 경험을 통해 성장해<br />
                나가는 동아리입니다.</div>
            </div>

            <div className={s.inlineContainer}>
              <div className={s.faq_icon} style={{
                marginTop: '87px',
              }}>Q</div>
              <div className={s.faq_Q} style={{
                marginTop: '87px',
                marginLeft: '26px',
              }}>
                4학년인데 지원이 가능할까요?
              </div>
              <div className={s.faq_A} style={{
                marginTop: '87px',
                marginLeft: '30px',
                marginRight: '300px',
              }}>가능합니다. 하지만 2학기 이상 필수로 활동하셔야 합니다.</div>
            </div>

            <div className={s.inlineContainer}>
              <div className={s.faq_icon} style={{
                marginTop: '87px',
              }}>Q</div>
              <div className={s.faq_Q} style={{
                marginTop: '87px',
                marginLeft: '26px',
              }}>
                직군 간 중복지원이 가능할까요?
              </div>
              <div className={s.faq_A} style={{
                marginTop: '87px',
                marginLeft: '30px',
                marginRight: '300px',
              }}>불가능합니다. 본인이 원하고자 하시는 분야에만 지원해주시길 바랍니다.</div>
            </div>
          </>
        }

        {activeTab === '면접' && <div>면접에 대한 내용</div>}
        {activeTab === '활동' && <div>활동에 대한 내용</div>}

        <div style={{ borderBottom: '1px solid black', marginBottom: '20px', width: '1320px', margin: '0 auto', marginTop: '100px' }}></div>

        {/* MUST DO 부분*/}
        <div className={s.mustdo_font} style={{
          marginTop: '50px',
          marginLeft: '300px',
        }}>
          MUST DO
        </div>

        <div className={s.inlineContainer}>
          <div className={s.headText} style={{
            marginTop: '137px',
            marginLeft: '300px',
            textAlign: 'center',
          }}>
            2학기 이상 활동
          </div>

          <div className={s.headText} style={{
            marginTop: '137px',
            marginLeft: '31px',
            textAlign: 'center',
          }}>
            프로젝트 필수 참여
          </div>

          <div className={s.headText} style={{
            marginTop: '137px',
            marginLeft: '30px',
            textAlign: 'center',
          }}>
            대면 할동
          </div>
        </div>

        <div className={s.inlineContainer}>
          <div className={s.bodyText} style={{
            marginTop: '64px',
            marginLeft: '300px',
            textAlign: 'center',
          }}>
            개인적인 사정을 제외하고, 모든 동아리원은<br />
            반드시 2학기 이상 필수로 활동에 참여해야 합니다.
          </div>

          <div className={s.bodyText} style={{
            marginTop: '64px',
            marginLeft: '31px',
            textAlign: 'center',
          }}>
            프로젝트의 성공적인 마무리를 위해<br />
            모든 동아리원들이 적극적으로 참여해야 합니다.
          </div>

          <div className={s.bodyText} style={{
            marginTop: '64px',
            marginLeft: '30px',
            textAlign: 'center',
          }}>
            팀원들과의 원활한 소통, 프로젝트 진행을 위해서<br />
            대면 활동을 원칙으로 진행합니다.
          </div>
        </div>
        <div style={{ borderBottom: '1px solid black', marginBottom: '20px', width: '1320px', margin: '0 auto', marginTop: '100px' }}></div>
      </div>

      {/*지원하기 버튼*/}
      <div>

        <button className={s.applyBtn} style={{
          marginTop: '142px',
          marginLeft: '807px',
          marginBottom: '123px',
        }}>
          <Link href="/recruit/apply">
            지원하기
          </Link>
        </button>

      </div>

      {/*풋터 부분*/}
      <div className={s.doit_footer}>

        <div className={s.footer_text} style={{
          marginTop: '64px',
          marginLeft: '300px',
        }}>DO IT (연세대학교 미래캠퍼스 IT 개발동아리)
        </div>

        <div className={s.footer_text} style={{
          marginTop: '90px',
          marginLeft: '300px',
        }}>Copyright ⓒ DO IT. All Rights Reserved
        </div>

        <div className={s.contactUs} style={{
          marginTop: '183px',
          marginLeft: '300px',
        }}>CONTACT US
        </div>

        <div className={s.email} style={{
          marginTop: '215px',
          marginLeft: '300px',
        }}>woomg427@yonsei.ac.kr
        </div>

        <div className={s.location_text} style={{
          marginTop: '183px',
          marginLeft: '525px',
        }}>LOCATION
        </div>

        <div className={s.location} style={{
          marginTop: '215px',
          marginLeft: '525px',
        }}>연세대학교 미래캠퍼스 컨버전스홀 창업 컨테이너홀
        </div>




      </div>









    </div >
  );
}