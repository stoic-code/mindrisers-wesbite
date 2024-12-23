import React from 'react'

export default function Process() {
    let data = [
        {
            title: 'Define',
            icon: '/assets/icons/lets-icons_search-alt.svg'
        },
        {
            title: 'Prototype',
            icon: '/assets/icons/teenyicons_screen-outline.svg'
        },
        {
            title: 'analyze',
            icon: '/assets/icons/tabler_analyze-filled.svg'
        },
        {
            title: 'deploy',
            icon: '/assets/icons/eos-icons_deploy.svg'
        },
        {
            title: 'Ideate',
            icon: '/assets/icons/icons8_idea.svg'
        },
        {
            title: 'build & develop',
            icon: '/assets/icons/icon-park-outline_code-computer.svg'
        },
        {
            title: 'improve',
            icon: '/assets/icons/carbon_improve-relevance.svg'
        }
    ]

    function Stats({ title }: { title: string }) {
        return (
            <div className="relativ flex flex-col  justify-start gap-2.5">
                <div className="header text-secondary">100%</div>
                <div className="description text-white-50">{title}</div>
            </div>
        )
    }

    return (
        <section className="section-wrapper-m-4xl mb-0   bg-[#001a0c] ">
            <div className="container flex w-full flex-col items-center justify-center gap-[100px]  py-[100px] ">
                <div className=" flex w-full shrink-0 flex-col items-center justify-center gap-[60px]">
                    <div className=" flex max-w-[1223px] shrink-0 flex-col items-center justify-center gap-2.5">
                        <div className=" title text-left">Our Process</div>
                        <div className="header  text-center leading-[145%] text-white-50">
                            We’re Process &amp; Culture Driven Company
                        </div>
                        <div className=" description max-w-[650px] text-center text-white-50">
                            At Mindrisers, We support a breadth of technologies,
                            best practices, use cases, and industries. Here are
                            some of them.
                        </div>
                    </div>
                    {/* dots */}
                    <div
                        className="after:mx-atuo  relative mx-auto mt-10 hidden w-full  max-w-[1100px] flex-wrap justify-center gap-x-[100px] gap-y-[200px] rounded-[24px]   bg-[#003419]  p-[80px] 
                after:absolute
                after:left-0
                after:right-0
                after:top-[50%]
                after:z-10
                after:mx-auto
                after:h-[4px]
                after:w-[70%]
                after:bg-[#6AFFB7]
                xl:flex
            
            "
                    >
                        {data.slice(0, 4).map((el, index) => {
                            return (
                                <li
                                    key={index}
                                    className=" flex-center   after:bg-[url('/assets/icons/Line 351.svg')] relative  w-[160px] max-w-[160px] flex-grow flex-col
                        gap-[10px]
                        rounded-[12px]
                        bg-green-100
                        p-[20px]
                        before:absolute
                        before:-bottom-[100px] 
                        before:z-[20]
                        before:h-[30px]
                        before:w-[30px]
                        before:translate-y-[50%]
                        before:bg-[url('/assets/icons/process-circle.svg')]
                        after:absolute
                        after:bottom-0
                        after:inline-block
                        after:h-[100px]
                        after:w-[3px] 
                        after:translate-y-full
                        after:bg-[url('/assets/icons/dashed-line.svg')]
                        after:bg-contain
                        after:bg-center
                        after:bg-no-repeat
                        after:content-['_']
                        "
                                >
                                    <img src={el.icon} alt="" />
                                    <span className="whitespace-nowrap text-[19px] font-semibold leading-[145%] text-gray-900">
                                        {el.title}
                                    </span>
                                </li>
                            )
                        })}
                        {data.slice(4, 10).map((el, index) => {
                            return (
                                <li
                                    key={index}
                                    className=" flex-center relative max-w-[160px] flex-grow  flex-col gap-[10px] rounded-[12px] bg-green-100 p-[20px]
                        before:absolute
                        before:-top-[100px]
                        before:z-[20]
                        before:h-[30px]
                        before:w-[30px]
                        before:-translate-y-[50%]
                        before:bg-[url('/assets/icons/process-circle.svg')]
                        after:absolute
                        after:top-0
                        after:inline-block
                        after:h-[100px]
                        after:w-[3px]
                        after:-translate-y-full
                        after:bg-[url('/assets/icons/dashed-line.svg')]
                        after:bg-contain
                        after:bg-center
                        after:bg-no-repeat
                        after:content-['_'] 
                        
                        "
                                >
                                    <img src={el.icon} alt="" />
                                    <span className="whitespace-nowrap text-[19px] font-semibold leading-[145%] text-gray-900">
                                        {el.title}
                                    </span>
                                </li>
                            )
                        })}
                    </div>
                </div>
                <div className="relative flex w-full flex-col items-start justify-between gap-10 xl:flex-row xl:items-center  ">
                    <div className=" flex flex-col  justify-start gap-2.5 text-white-50">
                        <div className="title">Productivity</div>
                        <div className="header-sm relative text-white-50">
                            <span>
                                <span className="">
                                    Maximize your
                                    <br />
                                </span>
                                <span className="text-secondary">
                                    Productivity &amp; Growth &nbsp;
                                </span>
                                <span className="">with us</span>
                            </span>
                        </div>
                    </div>
                    <div className=" flex  w-full flex-col items-start justify-start gap-10  md:flex-row md:items-center lg:w-auto">
                        <Stats title={'Client Satisfaction'} />
                        <div className="h-[.5px] w-[22px]  border border-primary md:h-[22px] md:w-[.5px] "></div>
                        <Stats title={'Project Efficiency'} />
                        <div className="h-[.5px] w-[22px]  border border-primary md:h-[22px] md:w-[.5px] "></div>
                        <Stats title={'Best Result'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
