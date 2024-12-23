import COMPANY_INFO from '@/constants/companyInfo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const d = new Date()
    let year = d.getFullYear()

    return (
        <footer className=" bg-green-100 ">
            <div
                id="main div"
                className=" container  flex flex-col gap-[50px] pb-[20px] pt-[40px] lg:gap-[100px] lg:pb-[40px] lg:pt-[80px]"
            >
                <div
                    id="1st part"
                    className="flex flex-col flex-wrap items-start justify-between gap-10 md:flex-row xl:px-[40px]"
                >
                    <div
                        id="1st column"
                        className=" flex  flex-col gap-[18px] md:w-full md:items-center xl:w-auto "
                    >
                        <div
                            id="for logo"
                            className=" flex items-center gap-[7px]"
                        >
                            <img
                                width={56}
                                height={56}
                                alt="mindrisers-logo"
                                src={"/assets/footer_icons/logo.webp"}
                            />
                            <p className=" text-[28px] leading-normal">
                                {COMPANY_INFO.name}
                            </p>
                        </div>
                        <p className=" text-[14px] leading-[20px] md:text-center xl:max-w-[230px] xl:text-left">
                            Mindrisers Tech: Nepal-Australia tech powerhouse.
                            Bridging continents, building groundbreaking
                            solutions from AI to software. Your agile partner
                            for digital transformation. Join us today!
                        </p>
                    </div>
                    <div
                        id="2nd column"
                        className=" flex flex-grow flex-col gap-[18px] md:w-[45%] lg:w-[20%] xl:w-[15%]"
                    >
                        <p className=" font-medium capitalize leading-[18px]">
                            NAVIGATION
                        </p>
                        <ul className=" flex cursor-pointer list-none flex-col gap-[20px] leading-[20px] ">
                            <li>
                                <Link className="nav-link" href={'/technology'}>
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/services'}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/portfolio'}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/services'}>
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/about-us'}>
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/contact-us'}>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        id="3rd column"
                        className=" flex flex-grow flex-col gap-[18px] md:w-[45%] lg:w-[20%] xl:w-[15%]"
                    >
                        <p className=" font-medium capitalize leading-[18px]">
                            GET REGULAR UPDATES
                        </p>
                        <ul className=" flex list-none flex-col gap-[20px] leading-[20px]">
                            <li className=" flex items-center gap-[10px] leading-[20px]">
                                <img
                                    alt=""
                                    width={20}
                                    height={20}
                                    src={'/assets/footer_icons/fb.svg'}
                                />
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href={COMPANY_INFO.facebook}
                                >
                                    Facebook
                                </Link>
                            </li>
                            <li className="flex items-center gap-[10px] leading-[20px]">
                                <img
                                    alt=""
                                    width={20}
                                    height={20}
                                    src={'/assets/footer_icons/utube.svg'}
                                />
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href={COMPANY_INFO.youtube}
                                >
                                    Youtube
                                </Link>
                            </li>
                            <li className=" flex items-center gap-[10px] leading-[20px]">
                                <img
                                    alt=""
                                    width={20}
                                    height={20}
                                    src={'/assets/footer_icons/insta.svg'}
                                />
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href={COMPANY_INFO.instagram}
                                >
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        id="4th column"
                        className=" flex flex-grow flex-col gap-[18px] md:w-[45%] lg:w-[20%] xl:w-[15%]"
                    >
                        <p className=" font-medium capitalize leading-[18px]">
                            RESOURCES
                        </p>
                        <ul className=" flex list-none flex-col gap-[20px] text-[14px] leading-[20px] ">
                            <li>
                                <Link className="nav-link" href={'/blogs'}>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/career'}>
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'#'}>
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        id="5th column"
                        className=" flex flex-grow flex-col gap-[18px] md:w-[45%] lg:w-[20%] xl:w-[15%]"
                    >
                        <p className=" font-medium capitalize leading-[18px]">
                            ABOUT
                        </p>
                        <ul className=" flex list-none flex-col gap-[20px] text-[14px] leading-[20px] ">
                            <li>
                                <Link className="nav-link" href={'#'}>
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'#'}>
                                    Media Kit
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/career'}>
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" href={'/contact-us'}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    id="2nd part"
                    className="flex flex-col flex-wrap items-start  justify-between  gap-5 rounded-[24px] bg-green-800 px-[20px]  py-[20px] text-white md:items-center md:rounded-[70px] lg:flex-row lg:rounded-[35px] lg:px-[40px] lg:py-[20px]"
                >
                    <div id="1st row" className="lg:w-full 2xl:w-auto">
                        <p className=" text-center text-[20px] capitalize leading-[20px]">
                            &copy; {year} Company. All Rights Reserved{' '}
                        </p>
                    </div>
                    <div className=" w-ful flex flex-col items-start gap-[10px] md:flex-row md:items-center md:justify-center md:gap-[21px]">
                        <span>
                            <Link href={'#'}>Terms & Conditions</Link>
                        </span>
                        <span>
                            <Link href={'#'}>Cookies</Link>
                        </span>
                        <span>
                            <Link href={'#'}>Privacy Policies</Link>
                        </span>
                    </div>
                    <ul className=" w-ful flex list-none flex-col gap-[10px]  leading-[20px] md:flex-row md:justify-center md:gap-[20px]">
                        <li className=" flex items-center gap-[10px] leading-[20px]">
                            <img
                                alt=""
                                width={20}
                                height={20}
                                src={'/assets/footer_icons/white_fb.svg'}
                            />
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href={COMPANY_INFO.facebook}
                            >
                                Facebook
                            </Link>
                        </li>
                        <li className="flex items-center gap-[10px] leading-[20px]">
                            {' '}
                            <img
                                alt=""
                                width={20}
                                height={20}
                                src={'/assets/footer_icons/white_utube.svg'}
                            />
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href={COMPANY_INFO.youtube}
                            >
                                Youtube
                            </Link>
                        </li>
                        <li className=" flex items-center gap-[10px] leading-[20px]">
                            {' '}
                            <img
                                alt=""
                                width={20}
                                height={20}
                                src={'/assets/footer_icons/white_insta.svg'}
                            />
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href={COMPANY_INFO.instagram}
                            >
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
