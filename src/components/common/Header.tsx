"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import COMPANY_INFO from "@/constants/companyInfo";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
});

export default function Header() {
    const currentPath = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const myElementRefParent = useRef<HTMLDivElement | null>(null);
    const myElementRefFirst = useRef<HTMLUListElement | null>(null);
    const myElementRefSecond = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const elementHeightFirst = myElementRefFirst.current?.clientHeight || 0;
        const elementHeightSecond =
            myElementRefSecond.current?.clientHeight || 0;

        if (isMenuOpen && myElementRefParent.current) {
            myElementRefParent.current.style.maxHeight = `${
                elementHeightFirst + 10 + elementHeightSecond
            }px`; // 10 being gap between them
        }
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [currentPath]);

    const navLinks = [
        { title: "home", url: "/" },
        { title: "services", url: "/services" },
        { title: "portfolio", url: "/portfolio" },
        { title: "technology", url: "/technology" },
        { title: "about us", url: "/about-us" },
        { title: "blogs", url: "/blogs" },
        { title: "career", url: "/career" },
    ];
    return (
        <header className=" bg-green-50 py-[30px] lg:py-[40px]">
            <nav className="container flex flex-wrap items-center justify-between">
                <Link href={"/"} className="flex items-center gap-[7px]">
                    <img
                        className="h-[56px] w-[56px]"
                        src="/assets/images/logo.webp"
                        alt="mindrisers-tech-log"
                        height={500}
                        width={500}
                    />
                    <span
                        className={`lg:hidden xl:inline-block text-[28px] text-gray-700 ${inter.className}`}
                    >
                        {COMPANY_INFO.name}
                    </span>
                </Link>
                {/* sidebar */}
                <div
                    ref={myElementRefParent}
                    className={classNames(
                        "order-5 flex  w-full flex-col items-center gap-[10px] overflow-hidden transition-all lg:w-auto lg:flex-grow lg:flex-row ",
                        { "!max-h-[0px] lg:!max-h-[999px]": !isMenuOpen },
                    )}
                >
                    <ul
                        ref={myElementRefFirst}
                        className=" flex flex-col items-center gap-[10px] lg:flex-grow  lg:flex-row lg:justify-center "
                    >
                        {navLinks.map((el) => {
                            return (
                                    <li key={el.title}>
                                        <Link
                                            className={classNames(
                                                "nav-link relative inline-block p-[10px] font-medium capitalize leading-[100%]",
                                                {
                                                    "active-nav-link":
                                                        el.url === currentPath,
                                                },
                                            )}
                                            href={el.url}
                                        >
                                            {el.title}
                                        </Link>
                                    </li>
                            );
                        })}
                    </ul>
                    <div
                        ref={myElementRefSecond}
                        className="mx-auto inline-block"
                    >
                        <Link className="btn-light " href={"/contact-us"}>
                            Contact Us
                        </Link>
                    </div>
                </div>
                {!isMenuOpen ? (
                    <RiMenu3Fill
                        onClick={toggleMenu}
                        className=" clickable text-2xl hover:text-primary lg:hidden"
                    />
                ) : (
                    <MdClose
                        onClick={toggleMenu}
                        className=" clickable text-2xl hover:text-primary lg:hidden"
                    />
                )}
            </nav>
        </header>
    );
}
