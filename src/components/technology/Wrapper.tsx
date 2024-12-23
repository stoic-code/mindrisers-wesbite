import Image from 'next/image'
import React from 'react'

export function Wrapper({
    title,
    children
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className=" flex flex-col gap-[10px]">
            <div className=" flex items-center gap-[10px] py-[10px] md:px-[20px]">
                <div className=" flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-body">
                    <img
                        alt=""
                        className=" self-center "
                        width={22}
                        height={22}
                        src={'/assets/tech_icons/pen.png'}
                    />
                </div>
                <p className="  font-medium">{title}</p>
            </div>
            {/* <div className=" wrapper-lg flex max-w-[985px] !flex-row flex-wrap items-stretch md:p-[40px]"> */}
            <div className=" wrapper-md grid max-w-[985px] grid-cols-2 md:grid-cols-4  md:p-[40px] lg:grid-cols-5">
                {children}
            </div>
        </div>
    )
}
