import '../../styles/globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/navbar';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import Head from 'next/head';

export const metadata = {
  title: 'DO IT',
  description: '연세대학교 미래캠퍼스 IT 개발동아리',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'DO IT',
    description: '연세대학교 미래캠퍼스 IT 개발동아리',
    url: 'https://do-it.kr', // 실제 사이트 URL로 변경하세요
    type: 'website',
    images: [
      {
        url: '/DO+IT_Logo_Black+Blue.png', // 실제 이미지 URL로 변경하세요
        width: 800,
        height: 600,
        alt: '연세대학교 미래캠퍼스 IT 개발동아리',
      },
    ],
  },
  metadataBase: new URL('https://do-it.kr'),
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>DO IT</title>
        <meta
          name="description"
          content="연세대학교 미래캠퍼스 IT 개발동아리"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
