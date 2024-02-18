import '../../../styles/globals.css';
import Modal from './../(components)/modal';
import Navbar from './../(components)/re_navigation';

export const metadata = {
    title: 'DO IT',
    description: '연세대학교 미래캠퍼스 IT 개발동아리',
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