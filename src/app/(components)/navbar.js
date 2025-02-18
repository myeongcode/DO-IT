'use client';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  animate,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Squeeze } from 'hamburger-react';

const navItems = [
  {
    path: '/projects',
    name: 'PROJECTS',
  },
  {
    path: '/recruit',
    name: 'RECRUIT',
  },
  {
    path: '/contact',
    name: 'CONTACT',
  },
];

const menuItemAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 * index,
    },
  }),
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname() || '/';
  const [navHidden, setNavHidden] = useState(false);

  const [isOpenToggle, setIsOpenToggle] = useState(false);

  useEffect(() => {
    setIsOpenToggle(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (current > 105) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  return (
    <div className="flex justify-center w-full">
      {/* 모바일 토글 메뉴 화면 */}
      <AnimatePresence>
        {isOpenToggle && (
          <motion.nav
            initial={{
              height: 0,
            }}
            animate={{
              height: '100%',
            }}
            transition={{
              duration: 0.4,
            }}
            exit={{
              height: 0,
            }}
            className="flex fixed w-full h-screen z-20 bg-[#14171A] font-suit font-bold"
          >
            <motion.ul
              className={`flex-col text-white pt-32 space-y-4 m-6 ${
                isOpenToggle ? 'flex' : 'hidden'
              }`}
            >
              {navItems.map((menuItem, idx) => {
                return (
                  <Link key={idx} href={menuItem.path}>
                    <motion.li
                      custom={idx}
                      variants={menuItemAnimation}
                      initial="initial"
                      exit={{
                        display: 'none',
                      }}
                      animate="animate"
                      className={`text-[12vw] ${
                        pathname.startsWith(menuItem.path) && 'text-[#00B8FF]'
                      }`}
                    >
                      {menuItem.name}
                    </motion.li>
                  </Link>
                );
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile환경 Navigation */}
      <motion.nav
        variants={{
          visible: {
            backgroundColor:
              pathname === '/' ? 'rgb(255, 255, 255, 0)' : 'rgb(0, 0, 0, 0)',
          },
          hidden: {
            backgroundColor: pathname.startsWith('/projects')
              ? '#0000004D'
              : '#FFFFFF4D',
            boxShadow: `0px 0px 0px ${
              pathname.startsWith('/projects') ? '#CECECE' : '#313131'
            }`,
            backdropFilter: 'blur(10px)',
            '-webkit-backdrop-filter': 'blur(10px)',
          },
        }}
        animate={navHidden && !isOpenToggle ? 'hidden' : 'visible'}
        transition={{
          duration: 0.3,
        }}
        className="w-full md:hidden flex fixed box-border transition duration-75 items-center z-20 justify-center py-[10px]"
      >
        <motion.div className="flex box-border justify-between w-[90%]">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.0,
            }}
            className="flex"
          >
            <Link href="/" className="flex justify-center items-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="25"
                viewBox="0 0 100 25"
                fill="none"
                className="cursor-pointer transition duration-200 ease-linear hover:drop-shadow-[0_0_2px_rgb(163,163,163)]"
              >
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M86.9326 9.92935H81.2217V24.9074H86.9326V9.92935Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M94.2907 -0.00787354H73.8628V4.93887H94.2907V-0.00787354Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M71.0437 0.0513458H65.3418V24.9268H71.0437V0.0513458Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M22.0934 7.11853C21.4717 5.56752 20.6042 4.25998 19.4947 3.19849C18.3839 2.13572 17.0595 1.33573 15.5227 0.798549C13.9846 0.261363 12.2997 -0.00787354 10.4694 -0.00787354H0V4.97494H10.2133C12.3602 4.97494 14.0515 5.61003 15.2833 6.88021C16.515 8.15039 17.1316 10.0067 17.1316 12.4492C17.1316 14.8916 16.515 16.7479 15.2833 18.0181C14.0502 19.2883 12.3602 19.9234 10.2133 19.9234H5.71096V9.92942H0V24.9075H10.4694C12.2997 24.9075 13.9833 24.6395 15.5214 24.1011C17.0595 23.5639 18.3827 22.7639 19.4934 21.7011C20.6042 20.6384 21.4705 19.3385 22.0921 17.7991C22.7151 16.2597 23.0253 14.4781 23.0253 12.4492C23.0253 10.4202 22.7138 8.66954 22.0921 7.11853H22.0934Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M100.001 19.9724H94.2896V24.9269H100.001V19.9724Z"
                />
                <motion.path
                  initial={{
                    fill: '#00B8FF',
                  }}
                  animate={{
                    fill:
                      pathname === '/recruit'
                        ? !isOpenToggle
                          ? '#14171A'
                          : '#00B8FF'
                        : '#00B8FF',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M39.5773 24.9075L31.3912 12.4505L39.576 -0.00787354H32.6899L27.9636 7.23318L26.0201 10.2102C25.132 11.5706 25.132 13.329 26.0201 14.6894L27.9624 17.6652L32.6887 24.9075H39.5773Z"
                />
                <motion.path
                  initial={{
                    fill: '#00B8FF',
                  }}
                  animate={{
                    fill:
                      pathname === '/recruit'
                        ? !isOpenToggle
                          ? '#14171A'
                          : '#00B8FF'
                        : '#00B8FF',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M42.897 24.9075L51.0831 12.4505L42.8983 -0.00787354H49.7844L54.5107 7.23318L56.4542 10.2102C57.3423 11.5706 57.3423 13.329 56.4542 14.6894L54.512 17.6652L49.7856 24.9075H42.897Z"
                />
              </motion.svg>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.0,
            }}
            className="flex text-[#657786]"
          >
            <Squeeze
              direction="right"
              toggled={isOpenToggle}
              onToggle={() => setIsOpenToggle(!isOpenToggle)}
              rounded
            />
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* PC환경 Navigation */}
      <motion.nav
        variants={{
          visible: {
            backgroundColor:
              pathname === '/' ? 'rgb(255, 255, 255, 0)' : 'rgb(0, 0, 0, 0)',
          },
          hidden: {
            backgroundColor: pathname.startsWith('/projects')
              ? '#0000004D'
              : '#FFFFFF4D',
            boxShadow: `0px 0px 0px ${
              pathname.startsWith('/projects') ? '#CECECE' : '#313131'
            }`,
            backdropFilter: 'blur(10px)',
            '-webkit-backdrop-filter': 'blur(10px)',
          },
        }}
        animate={navHidden && !isOpenToggle ? 'hidden' : 'visible'}
        transition={{
          duration: 0.3,
        }}
        className={
          'w-full hidden md:flex fixed box-border transition duration-75 items-center z-20 justify-center'
        }
      >
        <motion.div className="flex pt-[30px] pb-[30px] px-10 xl:px-48 justify-between box-border w-full">
          <motion.div
            className="flex"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link href="/" className="flex">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="25"
                viewBox="0 0 100 25"
                fill="none"
                className="cursor-pointer transition duration-200 ease-linear hover:drop-shadow-[0_0_2px_rgb(163,163,163)]"
              >
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M86.9326 9.92935H81.2217V24.9074H86.9326V9.92935Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M94.2907 -0.00787354H73.8628V4.93887H94.2907V-0.00787354Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M71.0437 0.0513458H65.3418V24.9268H71.0437V0.0513458Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M22.0934 7.11853C21.4717 5.56752 20.6042 4.25998 19.4947 3.19849C18.3839 2.13572 17.0595 1.33573 15.5227 0.798549C13.9846 0.261363 12.2997 -0.00787354 10.4694 -0.00787354H0V4.97494H10.2133C12.3602 4.97494 14.0515 5.61003 15.2833 6.88021C16.515 8.15039 17.1316 10.0067 17.1316 12.4492C17.1316 14.8916 16.515 16.7479 15.2833 18.0181C14.0502 19.2883 12.3602 19.9234 10.2133 19.9234H5.71096V9.92942H0V24.9075H10.4694C12.2997 24.9075 13.9833 24.6395 15.5214 24.1011C17.0595 23.5639 18.3827 22.7639 19.4934 21.7011C20.6042 20.6384 21.4705 19.3385 22.0921 17.7991C22.7151 16.2597 23.0253 14.4781 23.0253 12.4492C23.0253 10.4202 22.7138 8.66954 22.0921 7.11853H22.0934Z"
                />
                <motion.path
                  initial={{
                    fill: '#14171A',
                  }}
                  animate={{
                    fill: !pathname.startsWith('/projects')
                      ? !isOpenToggle
                        ? '#14171A'
                        : '#ffffff'
                      : '#ffffff',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M100.001 19.9724H94.2896V24.9269H100.001V19.9724Z"
                />
                <motion.path
                  initial={{
                    fill: '#00B8FF',
                  }}
                  animate={{
                    fill: pathname === '/recruit' ? '#14171A' : '#00B8FF',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M39.5773 24.9075L31.3912 12.4505L39.576 -0.00787354H32.6899L27.9636 7.23318L26.0201 10.2102C25.132 11.5706 25.132 13.329 26.0201 14.6894L27.9624 17.6652L32.6887 24.9075H39.5773Z"
                />
                <motion.path
                  initial={{
                    fill: '#00B8FF',
                  }}
                  animate={{
                    fill: pathname === '/recruit' ? '#14171A' : '#00B8FF',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  d="M42.897 24.9075L51.0831 12.4505L42.8983 -0.00787354H49.7844L54.5107 7.23318L56.4542 10.2102C57.3423 11.5706 57.3423 13.329 56.4542 14.6894L54.512 17.6652L49.7856 24.9075H42.897Z"
                />
              </motion.svg>
            </Link>
          </motion.div>

          <motion.ul
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex-row justify-between w-96 flex"
          >
            {navItems.map((item, index) => {
              const isActive = pathname.startsWith(item.path);
              const isProjectsPath = pathname.startsWith('/projects');
              return (
                <motion.li
                  key={item.path}
                  animate={{
                    color: isProjectsPath
                      ? isActive
                        ? '#00B8FF'
                        : '#FFFFFF'
                      : item.path.startsWith('/recruit') && isActive
                      ? '#14171A'
                      : item.path.startsWith('/contact') && isActive
                      ? '#00B8FF'
                      : isActive
                      ? '#FFFFFF'
                      : '#14171A',
                  }}
                  className="flex flex-col justify-center items-center font-pretendard"
                >
                  <Link href={item.path}>{item.name}</Link>
                  {isActive ? (
                    <motion.div
                      initial={{
                        width: '0%',
                      }}
                      animate={{
                        width: '100%',
                        backgroundColor: pathname.startsWith('/recruit')
                          ? '#14171A'
                          : '#00B8FF',
                      }}
                      className="h-[2px]"
                    />
                  ) : null}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </div>
  );
}
