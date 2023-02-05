"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowScroll } from 'react-use';

export default function GoToTop() {

    const { y: pageYOffset } = useWindowScroll();
    const [scrollButton, setScrollButton] = useState(false);

    useEffect(() => {
        setScrollButtonValue();
    });

    // now hide and show the button according to scroll
    const setScrollButtonValue = () => {
        if (pageYOffset > 100) {
            setScrollButton(true);
        } else {
            setScrollButton(false);
        }
    }

    // this function simply make to got top level when I click
    const scrolltoTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    return (
        <>
            {
                scrollButton
                    ? <div className="scroll-to-top">
                        <span className="btn btn-danger btn-gototop" onClick={scrolltoTop}>
                            <Image src="/images/up-arrow-circle.svg" alt="" width={30} height={30} />
                        </span>
                    </div>
                    : ''
            }
        </>
    )
}