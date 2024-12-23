import { SERVER_URL } from '@/constants/domains'
import { makeFullApiUrl, makeFullUrl } from '@/utils/makeFullUrl'
import classNames from 'classnames'
import React from 'react'

export type Team = {
    image: string
    name: string
    position: string
}
export type Department = {
    ourteams: Team[]
    name: string
}
export default function DepartmentCart({ data }: { data: Department }) {
    return (
        <>
            <div className="flex gap-[10px] border-b-[1px] border-border px-[20px] py-[10px]">
                <img
                    src={'/assets/images/about/img.svg'}
                    alt="logo"
                    height={36}
                    width={36}
                />
                <p className="font-medium leading-[23.2px]">{data.name}</p>
            </div>
            <div className="flexx grid w-full grid-cols-1 flex-col gap-[40px] p-[40px] md:grid-cols-2 md:flex-row lg:grid-cols-3 xl:grid-cols-4">
                {data.ourteams.map((el: Team, index) => {
                    return (
                        <div
                            key={index}
                            className="flex w-full flex-col items-center gap-6 rounded-[12px] border border-border p-[15px]"
                        >
                            <div>
                                <img
                                    src={makeFullUrl(el.image)}
                                    alt="logo"
                                    loading='lazy'
                                    height={300}
                                    width={300}
                                    className={classNames(
                                        'h-[120px] w-[120px] max-w-[120px] rounded-full object-cover',
                                        {
                                            'object-top': el.name
                                                .toLowerCase()
                                                .includes('sagar tamang')
                                        }
                                    )}
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[16px] font-medium leading-[23.2px] ">
                                    {el.name}
                                </p>
                                <p className="text-[14px]">{el.position}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
