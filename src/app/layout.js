import '../../styles/globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/navbar';

export const metadata = {
  title: 'DO IT',
  description: '연세대학교 미래캠퍼스 IT 개발동아리',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'DO IT',
    description: '연세대학교 미래캠퍼스 IT 개발동아리',
    url: 'https://do-it.kr',
    images: '/DO+IT_Logo_Black+Blue.png',
  },
};

const projectLists = [
  {
    id: 1,
    imgSrc: '/slide/1.png',
    type: 'APP SERVICE',
    title: 'Test 1',
  },
  {
    id: 2,
    imgSrc: '/slide/2.png',
    type: 'APP SERVICE',
    title: 'Test 2',
  },
  {
    id: 3,
    imgSrc: '/slide/3.png',
    type: 'APP SERVICE',
    title: 'Test 3',
  },
  {
    id: 4,
    imgSrc: '/slide/4.png',
    type: 'APP SERVICE',
    title: 'Test 4',
  },
  {
    id: 5,
    imgSrc: '/slide/5.png',
    type: 'APP SERVICE',
    title: 'Test 5',
  },
  {
    id: 6,
    imgSrc: '/slide/6.png',
    type: 'APP SERVICE',
    title: 'Test 6',
  },
];

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
