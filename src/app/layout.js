import '../../styles/globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/navbar';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

export const metadata = {
  title: 'DO IT',
  description: '연세대학교 미래캠퍼스 IT 개발동아리',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
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
