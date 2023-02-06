import "./styles/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/globals.css';

import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from "./components/GoToTop";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Header />
                {children}
                <Footer />
                <GoToTop />
            </body>
        </html>
    );
}
