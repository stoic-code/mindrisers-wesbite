/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import Culture from '@/components/common/Culture'
import COMPANY_INFO from '@/constants/companyInfo'
import Popup from '@/components/common/Popup'
import Form from '@/components/contact/Form'
import getMetaTags from '@/utils/getMetaTags'
import metaTags from '@/data/metaTags'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'

export const metadata = getMetaTags(metaTags.contact)
export const revalidate = REVALIDATION_VALUE

export default function Index() {
    return (
        <>
            <section className=" section-wrapper-p-50   bg-green-50">
                <div className="wrapper-3xs container items-center text-center">
                    <p className="title">Contact us</p>
                    <p className="header max-w-[986px]">
                        Have a Project in Mind ?{' '}
                        <span className="text-secondary">Let’s Connect</span>
                    </p>

                    <p className="description max-w-[874px] text-center">
                        Mindrisers: Where Tech Dreams Take Shape. Explore our
                        dynamic portfolio and visionary projects reshaping
                        tomorrow's possibilities.
                    </p>
                </div>
            </section>

            <div className="wrapper-lg section-wrapper-m-3xl container mb-0 grid w-full flex-col  items-start justify-center gap-10 lg:grid-cols-[45%,55%] lg:flex-row  lg:gap-5">
                <div className="inline-flex w-full flex-col items-start justify-center gap-10">
                    <div className="flex flex-col items-start justify-center gap-2.5">
                        <div className="header-sm  text-shrink max-w-[596.63px] font-semibold text-primary">
                            Talk to our Business team about your product.
                        </div>
                        <div className="text-shrink description-lg  max-w-[596.63px] font-normal text-primary">
                            Have some exciting project idea in mind? Fillout the
                            form and our business expert team will be in touch
                            directly.
                        </div>
                    </div>
                    <img
                        className=" w-full max-w-[596px] rounded-md"
                        src={
                            '/assets/images/contact-us/cover.webp'
                        }
                        alt='cover'
                    />
                    <div className="flex flex-col items-start justify-center gap-2.5">
                        <div className=" section-header-lg text-shrink font-semibold text-green-800">
                            Contact us by Phone or Lcoation
                        </div>
                        <div className="description-lg text-center font-normal text-green-800">
                            We are 24*7 available to help you out.
                        </div>
                    </div>

                    {/* icons */}
                    <div className="inline-flex items-start justify-start gap-10">
                        <div className="grid items-start justify-start gap-5 md:grid-cols-2">
                            <div className="inline-flex items-center justify-start gap-5">
                                <a
                                    className="flex  items-center space-x-5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={COMPANY_INFO.googleMap}
                                >
                                    <img
                                        className="relative h-6 w-6"
                                        src={
                                            '/assets/images/contact-us/mdi_location.svg'
                                        }
                                    ></img>
                                    <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                        {COMPANY_INFO.address}
                                    </span>
                                </a>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <a
                                    className="flex  items-center space-x-5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`tel:${COMPANY_INFO.phone}`}
                                >
                                    <img
                                        className="relative h-6 w-6"
                                        src={
                                            '/assets/images/contact-us/ph_phone-light.svg'
                                        }
                                    ></img>
                                    <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                        {COMPANY_INFO.phone}
                                    </span>
                                </a>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <a
                                    className="flex  items-center space-x-5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`mailto:${COMPANY_INFO.email}`}
                                >
                                    <img
                                        className="relative h-6 w-6"
                                        src={
                                            '/assets/images/contact-us/material-symbols-light_mail-outline.svg'
                                        }
                                    ></img>
                                    <span
                                        className="font-inter hyphens-auto whitespace-break-spaces break-words
                                        text-base font-medium leading-tight
                                     "
                                    >
                                        {/* white-space: break-spaces;   word-wrap: anywhere;   hyphens: auto; */}
                                        {COMPANY_INFO.email}
                                    </span>
                                </a>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <div className=" h-6 w-6 items-center justify-center">
                                    <a
                                        className="flex  items-center space-x-5"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={`mailto:${COMPANY_INFO.facebook}`}
                                    >
                                        <img
                                            className="relative h-6 w-6"
                                            src={
                                                '/assets/images/contact-us/facebook.svg'
                                            }
                                        ></img>
                                        <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                            Facebook
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <div className="flex items-start justify-start gap-6">
                                    <div className=" h-6 w-6 items-center justify-center">
                                        <a
                                            className="flex  items-center space-x-5"
                                            target="_blank"
                                            rel="noreferrer"
                                            href={`mailto:${COMPANY_INFO.instagram}`}
                                        >
                                            <img
                                                className="relative h-6 w-6"
                                                src={
                                                    '/assets/images/contact-us/instagram.svg'
                                                }
                                            ></img>
                                            <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                                Instagram
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <a
                                    className="flex  items-center space-x-5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`${COMPANY_INFO.viber}`}
                                >
                                    <img
                                        className="relative h-6 w-6"
                                        src={
                                            '/assets/images/contact-us/basil_viber-outline.svg'
                                        }
                                    ></img>
                                    <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                        Viber
                                    </span>
                                </a>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <a
                                    className="flex  items-center space-x-5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`${COMPANY_INFO.whatsapp}`}
                                >
                                    <img
                                        className="relative h-6 w-6"
                                        src={
                                            '/assets/images/contact-us/ic_baseline-whatsapp.svg'
                                        }
                                    ></img>
                                    <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                        Whatsapp
                                    </span>
                                </a>
                            </div>

                            <div className="inline-flex items-center justify-start gap-5">
                                <a
                                    className="flex  items-center space-x-5"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`${COMPANY_INFO.messenger}`}
                                >
                                    <img
                                        className="relative h-6 w-6"
                                        src={
                                            '/assets/images/contact-us/ri_messenger-line.svg'
                                        }
                                    ></img>
                                    <span className="font-inter text-base font-medium leading-tight text-gray-600">
                                        Messenger
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <Form />
            </div>

            {/* Go to top
            <div className="fixed bottom-0 right-0 m-4">
                <div
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary"
                    onClick={handleScrollToTop}
                >
                    <span id="scroll-to-top" class="text-white">
                        <MdKeyboardDoubleArrowUp size={40} />
                    </span>
                </div>
            </div> */}

            {/* location */}
            <div className="section-wrapper-m-xl wrapper-sm container  mx-auto   w-full  flex-col items-center justify-start">
                <div className="  header-sm text-shrink text-center font-semibold text-green-700">
                    <p>Visit us at</p>
                </div>
                <div className="w-full">
                    <iframe
                        className="mx-auto  h-[530px] w-full  max-w-[1087px] rounded-3xl border-8 border-orange-100  "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.320961881295!2d85.31935314317536!3d27.696886654753925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMind%20Risers%20Consortium%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1702963933651!5m2!1sen!2snp"
                        width="450"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Culture />
            <Popup />
        </>
    )
}
