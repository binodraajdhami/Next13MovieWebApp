"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import './styles/globals.css';
import "./styles/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from "./components/GoToTop";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // console.log(searchParams.get('search'));
    }, [pathname, searchParams]);

    return (
        <html lang="en">
            <head />
            <body>
                {pathname.startsWith('/admin/dashboard') ? <></> : <Header />}
                {children}
                {pathname.startsWith('/admin/dashboard') ? <></> : <Footer />}
                <h1>{pathname.startsWith('admin')}</h1>
                <GoToTop />
            </body>
        </html>
    );
}
