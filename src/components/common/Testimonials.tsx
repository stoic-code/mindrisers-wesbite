"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useWindowSize } from "@/hooks/useWindowSize";
import Rating from "./Rating";
import { fetchApiData } from "@/utils/fetchApiData";


export type TestimonialType = {
    id: number;
    name: string;
    company: string;
    company_image: string;
    title: string;
    rating: string;
    post: string;
    created_at: string;
    updated_at: string;
    comment: string;
};
export default function Testimonials() {
    // data fetching
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchApiData({
                url: "/testimonials/",
                nestedPath: "navigation.data"
            });
            setTestimonials(data);
        };
        fetchData();
    }, []);

    // fetchData();
    /* new coments test */

    const referenceElement = useRef<HTMLDivElement | null>(null);
    const targetElement = useRef<HTMLDivElement | null>(null);
    const size = useWindowSize({ useEffect, useState });

    useEffect(() => {
        if (referenceElement.current) {
            const style = window.getComputedStyle(referenceElement.current);
            const marginLeft = style.getPropertyValue("margin-left");
            const paddingLeft = style.getPropertyValue("padding-left");

            if (targetElement.current && marginLeft) {
                targetElement.current.style.paddingLeft = `${parseInt(marginLeft) + parseInt(paddingLeft)
                    }px`;
            }
        }
    }, []);

    return (
        <section className="section-wrapper-m-xl wrapper-lg relative  ">
            <div
                className="items-tart container flex flex-col justify-between gap-5 md:flex-row md:items-end"
                ref={referenceElement}
            >
                <div className="wrapper-3xs " id="myReferenceElement">
                    <p className="title">Testominials</p>
                    <p className="header-sm font-semibold">
                        What{" "}
                        <span className="text-secondary">Our Partners</span> has
                        to say !
                    </p>
                    <p className="description max-w-[538px]">
                        At Mindrisers, we have had the privilege of partnering
                        with some of the most innovative and forward-thinking
                        companies in the tech industry.
                    </p>
                </div>
                <div className="flex ">
                    <button

                        type="button"
                        className=" swiper-button-prev-custom flex-center group h-[54px] w-[54px] rounded-full bg-gray-100 hover:bg-green-100 hover:shadow-sm disabled:bg-gray-100 disabled:opacity-40"
                        aria-label="leftArrow">
                        <FaArrowLeft className="text-xl group-hover:text-primary" />
                    </button>
                    <button
                        type="button"
                        className=" swiper-button-next-custom flex-center group ml-5 h-[54px] w-[54px] rounded-full bg-gray-100 text-body hover:bg-green-100 hover:shadow-sm disabled:bg-gray-100 disabled:opacity-40"
                        aria-label="rightArrow">
                        <FaArrowRight className="text-xl group-hover:text-primary" />
                    </button>
                </div>
            </div>
            <div className=" " ref={targetElement}>
                <Swiper
                    className=" pt-1"
                    loop={false}
                    slidesPerView={
                        size.width >= 1536
                            ? 4.7
                            : size.width >= 1280
                                ? 3.7
                                : size.width >= 768
                                    ? 2.7
                                    : size.width >= 576
                                        ? 1.7
                                        : 1.1
                    }
                    spaceBetween={
                        size.width >= 1536
                            ? 20
                            : size.width >= 1280
                                ? 20
                                : size.width >= 768
                                    ? 10
                                    : 10
                    }
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    modules={[Pagination, Navigation]}
                >
                    {testimonials.map((testimonial: TestimonialType, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="wrapper-3xs  rounded-[12px] border border-border p-5">
                                    <img
                                        src={testimonial.company_image}
                                        alt=""
                                        className="h-[60px] w-[60px] object-contain rounded-full border  border-border bg-white"
                                    />
                                    <Rating rating={parseInt(testimonial?.rating)} />
                                    <p className="font-semibold leading-[145%] text-primary">
                                        {testimonial.post}&nbsp;-&nbsp;{testimonial?.company}
                                    </p>
                                    <p className="description-sm">
                                        {testimonial?.comment}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
