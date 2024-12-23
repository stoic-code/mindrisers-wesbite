import formatDate from "@/utils/formatDate";
import Image from "next/image";
import React from "react";
import { BlogPost } from "./page";
import Link from "next/link";

// export type BlogType = {
//     id: number;
//     title: string;
//     picture: string;
//     description?: string;
//     footer?: string[];
//     tags?: string[];
//     bodies: {}[];
//     tags: {}[];
// };

export type BlogType = BlogPost;

export default function Card({ blog }: { blog: BlogType }) {
    const { title, picture, bodies, tags, created_at, views, categories } =
        blog;
    const date = formatDate(created_at);
    return (
        <Link
            href={`/blogs/${blog.slug || blog.id}`}
            key={blog.id}
            className={`flex h-auto w-full  ${" w-auto flex-shrink-0 flex-col items-start"}    rounded-[12px] border-2 border-border`}
        >
            <div
                className={` flex h-auto w-full   ${" w-auto flex-shrink-0 flex-col items-start"}    gap-[20px]  p-[20px] text-body`}
            >
                <img
                    width={500}
                    height={500}
                    alt={title}
                    className={`   ${"h-[150px] w-full "}  rounded-[12px]  object-cover`}
                    src={picture}
                />
                <div
                    className={` ${""} flex flex-col  items-start gap-[20px] text-body`}
                >
                    <div>
                        <div className=" flex flex-col justify-between  gap-[20px]">
                            <p className=" max-w-[386px] text-[18px] font-semibold leading-[26.1px] text-gray-900">
                                {title}
                            </p>
                            {/* <div>
                            <p className=" text-[14px]  leading-[20.3px]">
                                {blog?.short_description || "adipisicing elit. Dolore perspiciatis dicta corporis id quaerat nobis illo eum provident tempora deserunt aut impedit cum, non expedita laudantium iure, praesentium porro accusantium?"}
                            </p>
                        </div> */}
                        </div>
                        <div className={` ${""} mt-[10px] flex gap-[10px]`}>
                            {tags.map((tag) => {
                                return (
                                    <span key={tag.id} className="flex items-start  rounded-[30px] bg-[#F8F7F8] px-[10px] py-[4px] text-[12px]  leading-[17.4px] ">
                                        {tag.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className=" flex gap-[12px]">
                            <span className=" flex items-start   text-[12px]  leading-[17.4px]">
                                {categories?.map((category, index) => (
                                    <p key={index}>{category.name}</p>
                                ))}
                            </span>
                            <span className="flex items-start  rounded-[30px]    text-[12px]  leading-[17.4px] ">
                                .
                            </span>
                            <span className=" flex items-start  rounded-[30px]  text-[12px]  leading-[17.4px]">
                                {date}
                            </span>
                            <span className=" flex items-start  rounded-[30px]   text-[12px]  leading-[17.4px] ">
                                .
                            </span>
                            <span className=" flex items-start  rounded-[30px]   text-[12px]  leading-[17.4px] ">
                                {views} views
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
