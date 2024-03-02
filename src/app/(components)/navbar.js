'use client';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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
      <AnimatePresence>
        {isOpenToggle && (
          <motion.nav
            initial={{
              height: 0,
            }}
            animate={{
              height: '100%',
            }}
            exit={{
              height: 0,
            }}
            className="flex fixed w-full h-screen z-20 bg-[#14171A] font-suit font-bold"
          >
            <motion.ul
              className={`flex flex-col text-white pt-32 space-y-4 m-6 ${
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
                        pathname === menuItem.path && 'text-[#00B8FF]'
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
            backgroundColor:
              pathname === '/projects' ? '#0000004D' : '#FFFFFF4D',
            boxShadow: `0px 1px 1px ${
              pathname !== '/projects' ? '#CECECE' : '#313131'
            }`,
            backdropFilter: 'blur(10px)',
            '-webkit-backdrop-filter': 'blur(10px)',
          },
        }}
        animate={navHidden && !isOpenToggle ? 'hidden' : 'visible'}
        transition={{
          duration: 0.8,
        }}
        className="md:hidden block fixed box-border  transition duration-75 items-center w-full z-20"
      >
        <motion.div
          variants={{
            visible: {},
            hidden: {
              paddingTop: '6px',
              paddingBottom: '6px',
            },
          }}
          animate={navHidden && !isOpenToggle ? 'hidden' : 'visible'}
          transition={{
            duration: 0.8,
          }}
          className="flex py-6 px-8 box-border justify-between w-full"
        >
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
              {isOpenToggle ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="25"
                  viewBox="0 0 100 25"
                  fill="none"
                  className="cursor-pointer transition duration-200 ease-linear hover:drop-shadow-[0_0_2px_rgb(163,163,163)]"
                >
                  <path
                    d="M86.9326 9.92935H81.2217V24.9074H86.9326V9.92935Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M94.2907 -0.00787354H73.8628V4.93887H94.2907V-0.00787354Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M71.0437 0.0513458H65.3418V24.9268H71.0437V0.0513458Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M22.0934 7.11853C21.4717 5.56752 20.6042 4.25998 19.4947 3.19849C18.3839 2.13572 17.0595 1.33573 15.5227 0.798549C13.9846 0.261363 12.2997 -0.00787354 10.4694 -0.00787354H0V4.97494H10.2133C12.3602 4.97494 14.0515 5.61003 15.2833 6.88021C16.515 8.15039 17.1316 10.0067 17.1316 12.4492C17.1316 14.8916 16.515 16.7479 15.2833 18.0181C14.0502 19.2883 12.3602 19.9234 10.2133 19.9234H5.71096V9.92942H0V24.9075H10.4694C12.2997 24.9075 13.9833 24.6395 15.5214 24.1011C17.0595 23.5639 18.3827 22.7639 19.4934 21.7011C20.6042 20.6384 21.4705 19.3385 22.0921 17.7991C22.7151 16.2597 23.0253 14.4781 23.0253 12.4492C23.0253 10.4202 22.7138 8.66954 22.0921 7.11853H22.0934Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M100.001 19.9724H94.2896V24.9269H100.001V19.9724Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M39.5773 24.9075L31.3912 12.4505L39.576 -0.00787354H32.6899L27.9636 7.23318L26.0201 10.2102C25.132 11.5706 25.132 13.329 26.0201 14.6894L27.9624 17.6652L32.6887 24.9075H39.5773Z"
                    fill="#00B8FF"
                  />
                  <path
                    d="M42.897 24.9075L51.0831 12.4505L42.8983 -0.00787354H49.7844L54.5107 7.23318L56.4542 10.2102C57.3423 11.5706 57.3423 13.329 56.4542 14.6894L54.512 17.6652L49.7856 24.9075H42.897Z"
                    fill="#00B8FF"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="25"
                  viewBox="0 0 100 25"
                  fill="none"
                  className="cursor-pointer transition duration-200 ease-linear hover:drop-shadow-[0_0_2px_rgb(163,163,163)]"
                >
                  <path
                    d="M86.9326 9.92935H81.2217V24.9074H86.9326V9.92935Z"
                    fill={
                      pathname === '/' ||
                      pathname === '/recruit/apply' ||
                      pathname === '/contact'
                        ? '#14171A'
                        : pathname === '/recruit' && navHidden
                        ? '#000'
                        : '#FFFFFF'
                    }
                  />
                  <path
                    d="M94.2907 -0.00787354H73.8628V4.93887H94.2907V-0.00787354Z"
                    fill={
                      pathname === '/' ||
                      pathname === '/recruit/apply' ||
                      pathname === '/contact'
                        ? '#14171A'
                        : pathname === '/recruit' && navHidden
                        ? '#000'
                        : '#FFFFFF'
                    }
                  />
                  <path
                    d="M71.0437 0.0513458H65.3418V24.9268H71.0437V0.0513458Z"
                    fill={
                      pathname === '/' ||
                      pathname === '/recruit/apply' ||
                      pathname === '/contact'
                        ? '#14171A'
                        : pathname === '/recruit' && navHidden
                        ? '#000'
                        : '#FFFFFF'
                    }
                  />
                  <path
                    d="M22.0934 7.11853C21.4717 5.56752 20.6042 4.25998 19.4947 3.19849C18.3839 2.13572 17.0595 1.33573 15.5227 0.798549C13.9846 0.261363 12.2997 -0.00787354 10.4694 -0.00787354H0V4.97494H10.2133C12.3602 4.97494 14.0515 5.61003 15.2833 6.88021C16.515 8.15039 17.1316 10.0067 17.1316 12.4492C17.1316 14.8916 16.515 16.7479 15.2833 18.0181C14.0502 19.2883 12.3602 19.9234 10.2133 19.9234H5.71096V9.92942H0V24.9075H10.4694C12.2997 24.9075 13.9833 24.6395 15.5214 24.1011C17.0595 23.5639 18.3827 22.7639 19.4934 21.7011C20.6042 20.6384 21.4705 19.3385 22.0921 17.7991C22.7151 16.2597 23.0253 14.4781 23.0253 12.4492C23.0253 10.4202 22.7138 8.66954 22.0921 7.11853H22.0934Z"
                    fill={
                      pathname === '/' ||
                      pathname === '/recruit/apply' ||
                      pathname === '/contact'
                        ? '#14171A'
                        : pathname === '/recruit' && navHidden
                        ? '#000'
                        : '#FFFFFF'
                    }
                  />
                  <path
                    d="M100.001 19.9724H94.2896V24.9269H100.001V19.9724Z"
                    fill={
                      pathname === '/' ||
                      pathname === '/recruit/apply' ||
                      pathname === '/contact'
                        ? '#14171A'
                        : pathname === '/recruit' && navHidden
                        ? '#000'
                        : '#FFFFFF'
                    }
                  />
                  <path
                    d="M39.5773 24.9075L31.3912 12.4505L39.576 -0.00787354H32.6899L27.9636 7.23318L26.0201 10.2102C25.132 11.5706 25.132 13.329 26.0201 14.6894L27.9624 17.6652L32.6887 24.9075H39.5773Z"
                    fill={
                      pathname !== '/recruit'
                        ? '#00B8FF'
                        : pathname === '/recruit' && navHidden
                        ? '#00B8FF'
                        : '#FFFFFF'
                    }
                  />
                  <path
                    d="M42.897 24.9075L51.0831 12.4505L42.8983 -0.00787354H49.7844L54.5107 7.23318L56.4542 10.2102C57.3423 11.5706 57.3423 13.329 56.4542 14.6894L54.512 17.6652L49.7856 24.9075H42.897Z"
                    fill={
                      pathname !== '/recruit'
                        ? '#00B8FF'
                        : pathname === '/recruit' && navHidden
                        ? '#00B8FF'
                        : '#FFFFFF'
                    }
                  />
                </motion.svg>
              )}
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
            className="flex"
          >
            <motion.button onClick={() => setIsOpenToggle(!isOpenToggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 44 44"
                fill="none"
                className="flex items-center justify-center"
              >
                <motion.path
                  d="M12 18L32 18"
                  stroke="#657786"
                  strokeWidth={2}
                  strokeLinecap="round"
                  variants={{
                    initial: {
                      rotate: 0,
                    },
                    animate: {
                      translateY: 4,
                      rotate: 45,
                    },
                  }}
                  animate={isOpenToggle ? 'animate' : 'initial'}
                />
                <motion.path
                  d="M12 26L32 26"
                  stroke="#657786"
                  strokeWidth={2}
                  strokeLinecap="round"
                  variants={{
                    initial: {
                      rotate: 0,
                    },
                    animate: {
                      translateY: -4,
                      rotate: -45,
                    },
                  }}
                  animate={isOpenToggle ? 'animate' : 'initial'}
                />
              </svg>
            </motion.button>
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
            backgroundColor:
              pathname === '/projects' ? '#0000004D' : '#FFFFFF4D',
            boxShadow: `0px 1px 1px ${
              pathname !== '/projects' ? '#CECECE' : '#313131'
            }`,
            backdropFilter: 'blur(10px)',
            '-webkit-backdrop-filter': 'blur(10px)',
          },
        }}
        animate={navHidden ? 'hidden' : 'visible'}
        transition={{
          duration: 0.8,
        }}
        className={
          'hidden md:block fixed justify-center box-border transition duration-75 items-center w-full z-20'
        }
      >
        <motion.div
          variants={{
            visible: {},
            hidden: {
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '250px',
              paddingRight: '250px',
            },
          }}
          animate={navHidden ? 'hidden' : 'visible'}
          transition={{
            duration: 0.8,
          }}
          className="flex py-10 px-48 justify-between box-border w-full"
        >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="25"
                viewBox="0 0 100 25"
                fill="none"
                className="cursor-pointer transition duration-200 ease-linear hover:drop-shadow-[0_0_2px_rgb(163,163,163)]"
              >
                <path
                  d="M86.9326 9.92935H81.2217V24.9074H86.9326V9.92935Z"
                  fill={
                    pathname === '/' ||
                    pathname === '/recruit/apply' ||
                    pathname === '/admin' ||
                    pathname === '/admin/login' ||
                    pathname === '/contact'
                      ? '#14171A'
                      : pathname === '/recruit' && navHidden
                      ? '#14171A'
                      : '#FFFFFF'
                  }
                />
                <path
                  d="M94.2907 -0.00787354H73.8628V4.93887H94.2907V-0.00787354Z"
                  fill={
                    pathname === '/' ||
                    pathname === '/recruit/apply' ||
                    pathname === '/admin' ||
                    pathname === '/admin/login' ||
                    pathname === '/contact'
                      ? '#14171A'
                      : pathname === '/recruit' && navHidden
                      ? '#14171A'
                      : '#FFFFFF'
                  }
                />
                <path
                  d="M71.0437 0.0513458H65.3418V24.9268H71.0437V0.0513458Z"
                  fill={
                    pathname === '/' ||
                    pathname === '/recruit/apply' ||
                    pathname === '/admin' ||
                    pathname === '/admin/login' ||
                    pathname === '/contact'
                      ? '#14171A'
                      : pathname === '/recruit' && navHidden
                      ? '#14171A'
                      : '#FFFFFF'
                  }
                />
                <path
                  d="M22.0934 7.11853C21.4717 5.56752 20.6042 4.25998 19.4947 3.19849C18.3839 2.13572 17.0595 1.33573 15.5227 0.798549C13.9846 0.261363 12.2997 -0.00787354 10.4694 -0.00787354H0V4.97494H10.2133C12.3602 4.97494 14.0515 5.61003 15.2833 6.88021C16.515 8.15039 17.1316 10.0067 17.1316 12.4492C17.1316 14.8916 16.515 16.7479 15.2833 18.0181C14.0502 19.2883 12.3602 19.9234 10.2133 19.9234H5.71096V9.92942H0V24.9075H10.4694C12.2997 24.9075 13.9833 24.6395 15.5214 24.1011C17.0595 23.5639 18.3827 22.7639 19.4934 21.7011C20.6042 20.6384 21.4705 19.3385 22.0921 17.7991C22.7151 16.2597 23.0253 14.4781 23.0253 12.4492C23.0253 10.4202 22.7138 8.66954 22.0921 7.11853H22.0934Z"
                  fill={
                    pathname === '/' ||
                    pathname === '/recruit/apply' ||
                    pathname === '/admin' ||
                    pathname === '/admin/login' ||
                    pathname === '/contact'
                      ? '#14171A'
                      : pathname === '/recruit' && navHidden
                      ? '#14171A'
                      : '#FFFFFF'
                  }
                />
                <path
                  d="M100.001 19.9724H94.2896V24.9269H100.001V19.9724Z"
                  fill={
                    pathname === '/' ||
                    pathname === '/recruit/apply' ||
                    pathname === '/admin' ||
                    pathname === '/admin/login' ||
                    pathname === '/contact'
                      ? '#14171A'
                      : pathname === '/recruit' && navHidden
                      ? '#14171A'
                      : '#FFFFFF'
                  }
                />
                <path
                  d="M39.5773 24.9075L31.3912 12.4505L39.576 -0.00787354H32.6899L27.9636 7.23318L26.0201 10.2102C25.132 11.5706 25.132 13.329 26.0201 14.6894L27.9624 17.6652L32.6887 24.9075H39.5773Z"
                  fill={
                    pathname !== '/recruit'
                      ? '#00B8FF'
                      : pathname === '/recruit' && navHidden
                      ? '#00B8FF'
                      : '#FFFFFF'
                  }
                />
                <path
                  d="M42.897 24.9075L51.0831 12.4505L42.8983 -0.00787354H49.7844L54.5107 7.23318L56.4542 10.2102C57.3423 11.5706 57.3423 13.329 56.4542 14.6894L54.512 17.6652L49.7856 24.9075H42.897Z"
                  fill={
                    pathname !== '/recruit'
                      ? '#00B8FF'
                      : pathname === '/recruit' && navHidden
                      ? '#00B8FF'
                      : '#FFFFFF'
                  }
                />
              </svg>
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
              const isActive = item.path === pathname;
              return (
                <motion.li
                  key={item.path}
                  variants={{
                    visible: {
                      color: pathname !== '/recruit' ? '#00B8FF' : '#000',
                    },
                    hidden: {
                      color:
                        pathname === '/projects' || pathname === '/recruit'
                          ? '#FFF'
                          : '#000',
                    },
                  }}
                  animate={isActive ? 'visible' : 'hidden'}
                  className="flex flex-col justify-center items-center font-pretend"
                >
                  <Link href={item.path}>{item.name}</Link>
                  {isActive ? (
                    <motion.div
                      initial={{
                        width: '0%',
                      }}
                      animate={{
                        width: '100%',
                      }}
                      className={`h-[2px] ${
                        pathname !== '/recruit'
                          ? 'bg-[#00B8FF]'
                          : 'bg-[#14171A]'
                      }`}
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
