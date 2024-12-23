import { Job } from '@/app/career/page'

export default function ColumCard({ job }: { job: Job }) {
    return (
        <div className="w-full max-w-[690px] rounded border border-[#DDDADB] p-6">
            <button className="rounded-full bg-white-200 p-[10px] py-[4px] text-[16px] text-white-800">
                {job.category?.name}
            </button>
            <div className="mt-[20px] flex flex-wrap items-center justify-between gap-y-5">
                <p>{job.title}</p>
                <p>{job.open_positions} positions</p>
                {/* <p>.</p> */}
                {/* <div className="rounded-full  bg-white-200 object-contain">
                    <img
                        src={'/assets/images/career/uil_arrow-up.png'}
                        alt="logo"
                    />
                </div> */}
            </div>
        </div>
    )
}
