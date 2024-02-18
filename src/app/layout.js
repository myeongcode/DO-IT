import '../../styles/globals.css';
import Navbar from './(components)/navbar';

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
