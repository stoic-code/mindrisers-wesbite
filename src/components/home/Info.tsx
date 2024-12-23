import classNames from 'classnames'
import React from 'react'

type Info = {
    id: number
    short_title: string
    title: string
    image: string
    description: string
}

export default function Info({ infos }: { infos: Info[] }) {
    return (
        <section className="container flex flex-col">
            {infos?.map((el: Info, index) => {
                return (
                    <div
                        key={index}
                        className={classNames('section-wrapper-p-xl')}
                    >
                        <div className="flex flex-col justify-between gap-5 lg:flex-row">
                            <div className="wrapper-sm order-3 items-start">
                                <div className="wrapper-2xs">
                                    <p className="title">{el.short_title}</p>
                                    <p className="header-sm max-w-[689px] font-semibold ">
                                        {el.title}
                                    </p>
                                    <div>
                                        <p className="max-w-[678px]  ">
                                            {el.description}
                                        </p>
                                    </div>
                                </div>
                                {/* <Link href={"/"} className="link--circular">
                                    Learn More
                                </Link> */}
                            </div>
                            <img
                                height={500}
                                width={500}
                                src={el.image}
                                alt=""
                                className={classNames(
                                    'order-2 mx-auto max-h-[252px] w-full max-w-[385px] lg:order-4',
                                    {
                                        'lg:!order-2': index % 2 !== 0
                                    }
                                )}
                            />
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
