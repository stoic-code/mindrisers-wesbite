'use client'
import { makeFullApiUrl, makeFullUrl } from '@/utils/makeFullUrl'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export interface Technology {
    id: number
    category_id: number
    name: string
    image: string
    created_at: string
    updated_at: string
}

interface SubCategory {
    id: number
    name: string
    is_sub_category: boolean
    short_description: string
    technologies: Technology[]
}
export interface Category {
    id: number
    name: string
    is_sub_category: boolean
    short_description: string
    sub_categories: SubCategory[]
    technologies: Technology[]
}

export default function TechStack({
    technologies
}: {
    technologies: Category[]
}) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <section
            className="section-wrapper-p-xl z-[-2]] bg-green-50] relative
                after:absolute
                after:bottom-0
                after:left-0
                after:right-0
                after:top-0
                after:z-[-2]
                after:block
                after:h-full
                after:w-full
                after:bg-green-50
                after:content-['_']
            "
        >
            <div className="container">
                <div className="wrapper-lg relative  items-start">
                    <div className="wrapper-lg lg:flex-row lg:items-end ">
                        <div className="wrapper-3xs items-start">
                            <div className=" title ">Technology</div>
                            <span className="header leading-[145%]">
                                <span className="">Technology behind your</span>
                                <span className=" text-secondary">
                                    &nbsp;Technology
                                </span>
                            </span>
                            <div className="description max-w-[538px]">
                            Uncover the driving force propelling your innovation forward – experience Mindrisers Technology’s seamless synergy of cutting-edge technology shaping the foundation of your success. Mindrisers Technology is the necessary change to the system, changing on system at a time from Nepal to Australia.
                            </div>
                        </div>

                        <div className="section-wrapper-p-full-2xs  pl-0   ">
                            <Link
                                href={'/technology'}
                                className="link--circular capitalize text-primary"
                            >
                                <span>view all technologies</span>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full pt-[20px]">
                        <div className="wrapper-lg lg:flex-row">
                            <ul className="wrapper-2xs justify-left flex-row flex-wrap lg:flex-col">
                                {technologies.slice(0, 5).map((el, index) => {
                                    return (
                                        <>
                                            <li
                                                key={index}
                                                className="clickable group flex items-center gap-[10px]  px-[10px] py-[5px] lg:w-[275px] lg:px-[20px] lg:py-[10px]"
                                            >
                                                <span
                                                    className={classNames(
                                                        'flex-center h-[36px] w-[36px] rounded-full border group-hover:border-primary ',
                                                        {
                                                            'border-primary':
                                                                index ===
                                                                selectedIndex
                                                        }
                                                    )}
                                                >
                                                    <svg
                                                        className={classNames(
                                                            'stroke-body group-hover:stroke-primary',
                                                            {
                                                                'stroke-primary':
                                                                    index ==
                                                                    selectedIndex
                                                            }
                                                        )}
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1011_1317)">
                                                            <path
                                                                d="M14.7917 8.24425C15.4863 8.24425 16.1525 7.9683 16.6437 7.47711M14.7917 8.24425C14.097 8.24425 13.4308 7.9683 12.9396 7.47711M14.7917 8.24425V10.2084M16.6437 7.47711C17.1349 6.98592 17.4108 6.31973 17.4108 5.62508M16.6437 7.47711L18.0325 8.86592M17.4108 5.62508C17.4108 4.93044 17.1349 4.26424 16.6437 3.77305M17.4108 5.62508H19.375M16.6437 3.77305C16.1525 3.28186 15.4863 3.00591 14.7917 3.00591M16.6437 3.77305L18.0325 2.38425M14.7917 3.00591C14.097 3.00591 13.4308 3.28186 12.9396 3.77305M14.7917 3.00591V1.04175M12.9396 3.77305C12.4484 4.26424 12.1725 4.93044 12.1725 5.62508M12.9396 3.77305L11.5508 2.38425M12.1725 5.62508C12.1725 6.31973 12.4484 6.98592 12.9396 7.47711M12.1725 5.62508H10.2083M12.9396 7.47711L11.5508 8.86592M14.355 1.04175H15.2283M17.7242 2.07591L18.3408 2.69258M19.375 5.18841V6.06175M18.3408 8.55758L17.7242 9.17425M15.2283 10.2084H14.355M11.8592 9.17425L11.2425 8.55758M10.2083 6.06175V5.18841M11.2425 2.69258L11.8592 2.07591M6.25 12.5001L7.64417 11.4542C7.78638 11.3474 7.9489 11.2708 8.12178 11.229C8.29466 11.1872 8.47425 11.1811 8.64956 11.2111C8.82486 11.2412 8.99219 11.3067 9.14129 11.4037C9.29039 11.5006 9.41812 11.627 9.51667 11.7751C9.65974 11.9898 9.73608 12.2421 9.73608 12.5001C9.73608 12.7581 9.65974 13.0104 9.51667 13.2251L8.14583 15.2809C7.72459 15.9124 7.12163 16.4011 6.41667 16.6826L4.375 17.5001M6.875 8.12508L3.87917 9.40925C2.99404 9.78837 2.28866 10.4934 1.90917 11.3784L0.928333 13.6667C0.728087 14.1339 0.624886 14.6368 0.625 15.1451V19.3751"
                                                                // stroke="#018343"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M19.375 11.875V17.5C19.375 17.9973 19.1775 18.4742 18.8258 18.8258C18.4742 19.1775 17.9973 19.375 17.5 19.375H8.75C8.25272 19.375 7.77581 19.1775 7.42417 18.8258C7.07254 18.4742 6.875 17.9973 6.875 17.5V16.4625M6.875 12.0308V2.5C6.875 2.00272 7.07254 1.52581 7.42417 1.17417C7.77581 0.822544 8.25272 0.625 8.75 0.625H10.2083"
                                                                // stroke="#018343"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1011_1317">
                                                                <rect
                                                                    width="20"
                                                                    height="20"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span
                                                    className={classNames(
                                                        'font-medium capitalize leading-[145%] group-hover:text-primary ',
                                                        {
                                                            'text-primary':
                                                                index ==
                                                                selectedIndex
                                                        }
                                                    )}
                                                    onClick={() =>
                                                        setSelectedIndex(index)
                                                    }
                                                >
                                                    {el.name}
                                                </span>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                            <ul
                                className=" faded-border section-wrapper-p-full-sm relative  grid 
                                     flex-grow grid-cols-2 gap-x-[20px] gap-y-[40px]  !bg-green-100 md:grid-cols-4 lg:grid-cols-5 items-center                               
                                "
                            >
                                {technologies.length > 0 &&
                                    technologies[
                                        selectedIndex
                                    ].sub_categories.map((el, index) => {
                                        return (
                                            <>
                                                {el.technologies.map((el) => {
                                                    return (
                                                        <li key={index} className='flexx flex-col justify-between'>
                                                            <img
                                                                height={500}
                                                                width={500}
                                                                src={makeFullUrl(
                                                                    el.image
                                                                )}
                                                                // src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                                                                alt=""
                                                                className="mx-auto h-auto w-auto object-contain" // HINT: when we want to display api-images original size
                                                            />
                                                            <span className=" mt-[10px] inline-block w-full text-center font-medium leading-[145%]">
                                                                {el.name}
                                                            </span>
                                                        </li>
                                                    )
                                                })}
                                            </>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
