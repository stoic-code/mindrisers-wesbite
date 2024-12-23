import { Job } from '@/app/career/page'
import React from 'react'

export default function RowCard({ job }: { job: Job }) {
    return (
        <div className=" flex w-[100%] flex-grow flex-col justify-between rounded border border-[#DDDADB] p-6 md:w-[45%] lg:w-[31%]">
            <div className="flex justify-between ">
                <button className="rounded-full bg-white-200 p-[10px] py-[4px] text-white-800">
                    {job.category.name}
                </button>
                {/* <div className="rounded-full  bg-white-200 object-contain">
                    <img
                        src={'/assets/images/career/uil_arrow-up.png'}
                        alt="logo"
                    />
                </div> */}
            </div>
            <div className="mt-[60px]">
                <p className="font-normal leading-[23.2px] text-[#686163]">
                    {job.title}
                </p>
                <div className="flex gap-6">
                    <p>{job.open_positions} positions</p>
                    <p>{job.career_type}</p>
                </div>
            </div>
        </div>
    )
}
