'use client';
import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container_recruit}>
                <Link href="/" style={{ display: 'flex' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="25"
                        viewBox="0 0 370 100"
                        fill="none"
                        className={styles.nav__logo_recruit}
                    >
                        <path d="M337.296 38.5566H315.137V96.6714H337.296V38.5566Z" fill="white" />
                        <path d="M365.846 0H286.586V19.1933H365.846V0Z" fill="white" />
                        <path d="M275.65 0.22998H253.526V96.7464H275.65V0.22998Z" fill="white" />
                        <path d="M85.7223 27.6504C83.3102 21.6325 79.9442 16.5592 75.6394 12.4407C71.3295 8.31711 66.1907 5.21319 60.2278 3.12891C54.26 1.04464 47.7228 0 40.6213 0H0V19.3333H39.6275C47.9575 19.3333 54.5197 21.7974 59.2989 26.7257C64.0782 31.654 66.4703 38.8565 66.4703 48.3332C66.4703 57.8099 64.0782 65.0124 59.2989 69.9407C54.5147 74.8689 47.9575 77.3331 39.6275 77.3331H22.1584V38.5566H0V96.6714H40.6213C47.7228 96.6714 54.255 95.6317 60.2228 93.5424C66.1907 91.4582 71.3245 88.3543 75.6344 84.2307C79.9442 80.1071 83.3052 75.0639 85.7173 69.091C88.1344 63.118 89.3379 56.2054 89.3379 48.3332C89.3379 40.4609 88.1294 33.6683 85.7173 27.6504H85.7223Z" fill="white" />
                        <path d="M388 77.5229H365.842V96.7463H388V77.5229Z" fill="white" />
                        <path d="M153.561 96.6714L121.799 48.3382L153.556 0H126.838L108.5 28.0952L100.959 39.6462C97.513 44.9244 97.513 51.747 100.959 57.0252L108.495 68.5711L126.833 96.6714H153.561Z" fill="white" />
                        <path d="M166.44 96.6714L198.202 48.3382L166.445 0H193.163L211.501 28.0952L219.042 39.6462C222.488 44.9244 222.488 51.747 219.042 57.0252L211.506 68.5711L193.168 96.6714H166.44Z" fill="white" />
                    </svg>

                </Link>
                <ul className={styles.menu__container_recruit}>
                    <li>
                        <Link href="/projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link href="/recruit">RECRUIT</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}