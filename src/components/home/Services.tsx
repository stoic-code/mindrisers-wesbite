import React from 'react'
import ArrowMini from '../common/ArrowMini'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

export type ServiceType = {
    id: number
    icon: string
    name: string
    short_description: string
    description: string
    created_at: string
    updated_at: string
    service_tags: {name:string}[]
}

export default function Services({ services }: { services: ServiceType[] }) {
    let firstHalfServices = services.filter((el, index) => index <= 4)
    /* for & */
    firstHalfServices.push({
        id: 12,
        icon: '',
        name: '',
        short_description: '',
        description: '',
        created_at: '',
        updated_at: '',
        service_tags: []
    })

    let secondHalfServices = services.filter((el, index) => index > 4)

    return (
        <section
            className=" section-wrapper-m-xl container"
            id="section-wrapper"
        >
            <div className="wrapper-lg items-start  ">
                <div className="lg:wrapper-lg w-full flex-col items-start  lg:flex-row lg:items-end lg:justify-between ">
                    <div className="wrapper-3xs items-start">
                        <p className="title ">Services</p>
                        <p className="header  max-w-[986px]">
                            <span className="">
                                Elevate your Technology with our{' '}
                            </span>
                            <span className="text-secondary">
                                Innovative services.
                            </span>
                        </p>
                        <p className=" description  max-w-[538px] ">
                        Innovate. Collaborate. Transform. The Mindrisers Technology’s ecosystem. Transform your business trajectory with our groundbreaking innovation and unparalleled service excellence. Let us collaborate to transform your business trajectory, bridging the gap between Nepal and Australia with the power of innovation.
                        </p>
                    </div>
                    <div className="section-wrapper-p-full-2xs pl-0   ">
                        <Link
                            href={'/services'}
                            className="link--circular capitalize text-primary"
                        >
                            <span>view all services</span>
                        </Link>
                    </div>
                </div>
                <div className="section-wrapper-p-full-sm faded-border w-full">
                    {/* make this grid gap responsive */}
                    <div className="grid grid-cols-1 gap-x-[20px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3 ">
                        {/* single card */}
                        {firstHalfServices.map((el: ServiceType, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" clickable] wrapper-2xs section-wrapper-p-full-2xs hover:bg-green-100] hover:shadow-md]  group
                                        items-start
                                        rounded-[12px]
                                        border-2
                                        border-border
                                        transition-all
                                        "
                                >
                                    <div className="flex w-full items-start justify-between">
                                      
                                        <img
                                            height={150}
                                            width={150}
                                            loading='lazy'
                                        
                                            src={
                                                index == 5
                                                    ? '/assets/icons/andSign.svg'
                                                    : el.icon
                                            }
                                            alt=""
                                            className={classNames(
                                                'h-[72px] w-[72px] object-contain',
                                                {
                                                    '!h-[29px] !w-[29px]':
                                                        index == 5
                                                }
                                            )}
                                        />
                                       
                                    </div>
                                    {index == 5 ? (
                                        <>
                                            <div>
                                                <div className="description-sm relative line-clamp-3 max-w-[342px] ">
                                                    {/* Product Design,
                                                    infrastructure & DevOps,
                                                    Graphic Design & Video
                                                    Editing  */}
                                                    {secondHalfServices
                                                        .map((el) => el.name)
                                                        .join(', ')}
                                                    &nbsp;& Many more
                                                </div>
                                                <Link
                                                    href={'/services'}
                                                    className="btn-outline mt-5 "
                                                >
                                                    view all services
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="wrapper-3xs items-start">
                                            <div className="section-header relative w-full ">
                                                <p className='invisible'>o</p>
                                                <p className='invisible'>p</p>
                                                <p className='absolute top-0 left-0'>{el.name}</p>
                                            </div>
                                            <div className="description-sm relative line-clamp-3 max-w-[342px] ">
                                                {el.short_description ||
                                                    el.description}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
