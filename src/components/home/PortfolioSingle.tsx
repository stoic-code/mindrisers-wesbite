'use client'

import classNames from 'classnames'
import React from 'react'
import { ProjectType } from './Portfolio'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PortfolioSingle({
    index,
    project
}: {
    index: number
    project: ProjectType
}) {
    const currentPath = usePathname()

    return (
        <li
            id={project.title}
            className={classNames(
                'section-wrapper-p-full-sm hover:shadow-smalll group  flex w-full flex-col gap-[20px] rounded-xl border border-border lg:grid lg:grid-cols-5  lg:border-none '
            )}
        >
            <span
                className={classNames(
                    'section-wrapper-p-full-sm flex-center   lg:w-[50%]] group-hover:bg-green-100] col-span-2 w-full transition-all',
                    {
                        'lg:order-2 lg:pr-0 ': index % 2 !== 0,
                        'lg:pl-0 ': index % 2 == 0
                    }
                )}
            >
                <img
                    height={700}
                    width={700}
                    src={project.image}
                    loading='lazy'
                    alt=""
                    className={classNames(
                        'llg:max-w-[375px] xxl:max-w-[508px] mx-auto max-h-[273px] w-full object-contain '
                    )}
                />
            </span>

            <div className="col-span-3">
                <p className="title-sm text-secondary">{project.nature}</p>
                <p className="header-sm mb-[20px] transition-all group-hover:text-primary">
                    {project.title}
                </p>
                <p className="mb-[40px] text-justify ">
                    <span
                        className={classNames({
                            'line-clamp-3': currentPath !== '/portfolio'
                        })}
                    >
                        {project.short_description}
                    </span>
                    {currentPath !== '/portfolio' && (
                        <Link
                            href={`/portfolio#${project.title}`}
                            className="clickable mt-[15px] underline"
                        >
                            Read More
                        </Link>
                    )}
                </p>
                <p className="mb-[20px] font-medium leading-[145%]">
                    What we did for {project.title}
                </p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-[10px] ">
                        {project.project_tags.map((el, index) => {
                            return (
                                <span
                                    key={index}
                                    className="inine-block   rounded-[30px] bg-gray-50 px-[10px] py-[4px] text-[12px] leading-[145%] "
                                >
                                    {el.name}
                                </span>
                            )
                        })}
                    </div>
                    {/* <button
                        aria-label="forward"
                        type="button"
                        className="flex-center h-[42px] w-[42px] rounded-full bg-gray-100 "
                    >
                        <img
                            src="/assets/icons/uil_arrow-up.svg"
                            alt=""
                            className="transition-all group-hover:rotate-45"
                        />
                    </button> */}
                </div>
            </div>
        </li>
    )
}
