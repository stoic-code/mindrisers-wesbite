"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { BsSearch } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { IoClose } from "react-icons/io5";
import classNames from 'classnames';
export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false)


    let topLinks = [
        {
            title: "about",
            url: "/about",
        },
        {
            title: "lorem",
            url: "/lorem",
        },
        {
            title: "lorem",
            url: "/lorem",
        },
        {
            title: "lorem",
            url: "/lorem",
        },
    ]

    let navLinks = [
        { title: "Home", url: "/" },
        {
            title: "About", url: "/",
            subMenus: [
                {
                    title: "About Us", url: "/",
                },
                {
                    title: "Our Team", url: "/"
                }
            ]
        },
        {
            title: "Lorem", url: "/",
            subMenus: [
                {
                    title: "About Us", url: "/",
                },
                {
                    title: "Our Team", url: "/"
                }
            ]
        },
        { title: "Lorem", url: "/" },
        { title: "Lorem", url: "/" },
        { title: "Lorem", url: "/" },
    ]



    return (
        <>
            {/* top section - settings/social-  header */}
            <div className='bg-primary '>
                <ul className="container flex gap-4 text-white font-medium border-b py-4 border-[#FFFFFF30]">
                    {
                        topLinks.map(el => {
                            /* FIXME: key by uuids */
                            return <li key={el.title} className='capitalize'><Link href={el.url}>{el.title}</Link></li>
                        })
                    }
                </ul>
            </div>
            {/* navigation header */}
            <header className='bg-primary'>
                <div className='container flex items-center gap-10 justify-between py-[16px]'>

                    <div className='flex gap-10 items-center'>
                        <img src={"/assets/images/logo_light.svg"} alt='logo' className='w-auto' width={400} height={400} />
                        <ul className={`max-h-screenn overflow-y-auto xl:overflow-y-visible   py-8 px-4  gap-10 font-medium text-[16px] text-body-color xl:text-white capitalize
                         fixed xl:static z-10 ${showSidebar ? "translate-x-0" : "-translate-x-full"} xl:transform-none transition-transform duration-500     xl:static xl:flex top-0 bottom-0 left-0 bg-white xl:bg-transparent  w-[90%] xl:py-0 xl:px-0 `}>
                            <li className='flex justify-between items-center mb-10 xl:hidden'>
                                <img src={"/assets/images/logo_purple.svg"} alt='logo' className='w-auto' width={400} height={400} />
                                <IoMdClose className="text-4xl" onClick={() => {
                                    setShowSidebar(false)
                                }} />
                            </li>
                            {
                                navLinks.map(el => {
                                    /* FIXME: title by uuids */
                                    return <li key={el.title} className='relative group  py-3 xl:py-0'>
                                        <span className='flex justify-between xl:inline'>
                                            <span>
                                                {el.title}
                                            </span>
                                            {el.subMenus && el.subMenus.length > 0 && <span><FaAngleDown className="inline scale-75" /></span>}
                                        </span>

                                        {/* FIXME: for mobile view instead of hover, should apply onclick */}
                                        {
                                            el.subMenus && el.subMenus.length > 0
                                            &&
                                            <div className='xl:absolute text-body-color xl:translate-y-1/2 xl:opacity-0 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500  xl:pt-5'>
                                                <ul className='xl:bg-white xl:w-56 w-full    max-h-0 xl:max-h-min  group-hover:max-h-min group-hover:mt-5  xl:py-2 overflow-hidden bg-page-section-background-color '>
                                                    {
                                                        el.subMenus.map(el => {
                                                            /* FIXME: key by uuid */
                                                            return <li key={el.title} className=' px-[20px] py-[12px] text-[12.8px] hover:text-primary group/inner relative flex items-center '>
                                                                <div className='hidden xl:block h-full w-1 bg-primary absolute left-0  group-hover/inner:block -translate-x-[110%] group-hover/inner:translate-x-0 transition-all '></div>
                                                                <Link className='' href={el.url}>{el.title}</Link>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                    <div className='flex items-center xl:items-stretch gap-4 xl:gap-10 text-white  text-[16px] font-semibold ' >
                        <div className="xl:bg-white rounded-full flex items-center aspect-square xl:p-5">
                            <BsSearch className="xl:text-black text-2xl" />
                        </div>

                        <button type='button' className=' border-white xl:border  xl:py-[13px] xl:px-7 rounded-lg uppercase'>
                            <FaRegUser className="inline xl:hidden text-2xl" />
                            <span className='hidden xl:inline'>
                                Sign Up
                            </span>
                        </button>
                        <RiMenu2Fill
                            onClick={
                                () => {
                                    setShowSidebar(true)
                                }
                            }

                            className="inline xl:hidden text-2xl" />
                    </div>


                </div>
            </header>

            {/* dim-background-overlay layer */}
            {
                showSidebar
                &&
                <div
                    onClick={() => {
                        setShowSidebar(false)
                    }}
                    className='fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] z-[1] '>

                </div>
            }
        </>

    )
}