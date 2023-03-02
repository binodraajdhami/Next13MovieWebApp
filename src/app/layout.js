"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import './styles/globals.css';
import "./styles/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from "./components/GoToTop";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <head />
            <body>
                {pathname.startsWith('/admin/') ? <></> : <Header />}
                {children}
                {pathname.startsWith('/admin/') ? <></> : <Footer />}
                <GoToTop />
            </body>
        </html>
    );
}