import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.nav__container}>
        <li>
          <Link href="/">홈화면</Link>
        </li>
        <li>
          <Link href="/recruit">모집</Link>
        </li>
      </ul>
    </nav>
  );
}
