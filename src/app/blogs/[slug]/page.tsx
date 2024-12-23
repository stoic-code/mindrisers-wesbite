"use client";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { clearStyle } from "@/utils/clearStyle";
import { makeFullUrl } from "@/utils/makeFullUrl";
import { useParams } from "next/navigation";
import { fetchApiData } from "@/utils/fetchApiData";
import { BlogPost } from "../page";

export default function BlogSlug() {
    const [blogDetail, setBlogDetail] = useState<BlogPost|object>({});
    const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
    const current_url = `/blogs`;

    const params = useParams();

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const fetchData = await fetchApiData({
                url: `/blogs/${params.slug}/`,
            });
            setBlogDetail(fetchData);
        };

        const fetchAllBlogs = async () => {
            const fetchData = await fetchApiData({
                url: "blogs/",
            });

            setAllBlogs(fetchData?.navigation?.data);
        };
        fetchAllBlogs();
        fetchBlogDetail();
    }, []);

    const { picture, categories, title, tags, description,short_description, views } = blogDetail as BlogPost;  // Property 'views' does not exist on type '{} | BlogPost'
 
    return (
        <div>
            <section className=" section-wrapper-p-50   bg-green-50">
                <div className="wrapper-3xs container items-center text-center">
                    <p className="header max-w-[986px]">{title}</p>
                    <p className="description max-w-[874px] text-center">
                        {short_description}
                    </p>
                </div>
            </section>

            <div className="section-wrapper-m-xl ">
                <div className="container  mb-5">
                    <ul className="flex flex-wrap justify-center gap-[12px]  ">
                        {tags?.map((el, index) => {
                            return (
                                <li
                                    key={index}
                                    className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary"
                                >
                                    {el.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <section className="container  mb-10  lg:px-[40px] ">
                    <img
                        src={picture}
                        height={1000}
                        width={1000}
                        alt=""
                        className=" max-h-[507px] w-full rounded-3xl object-contain"
                    />
                </section>
                <section className="container">
                    <div className="flex flex-col gap-[35px] xl:flex-row xl:items-start ">
                        <div className="flex flex-row items-center justify-center gap-5 xl:flex-col">
                            <Link
                                href={`https://www.facebook.com/sharer/sharer.php?u=${current_url}`}
                                target="_blank" rel="noreferrer"
                            >
                                <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                    <FaFacebook className="text-2xl" />
                                </div>
                            </Link>
                            <Link
                                href={`https://twitter.com/intent/tweet?url=${current_url}`}
                                target="_blank" rel="noreferrer"
                            >
                                <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                    <FaTwitter className="text-2xl" />
                                </div>
                            </Link>
                            <Link
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${current_url}`}
                                target="_blank" rel="noreferrer"
                            >
                                <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                    <FaLinkedin className="text-2xl" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-[5px] lg:gap-[10px] xl:flex-col ">
                                <p className=" title font-semibold leading-[145%]">
                                    {views}
                                </p>
                                <p className="text-[14px] leading-[145%]">
                                    views
                                </p>
                            </div>
                        </div>
                        <div className="flex-grow pb-[40px]">
                            <div className="text-[18px] leading-[145%]">
                                <div
                                    className="editor-content "
                                    dangerouslySetInnerHTML={{
                                        __html: clearStyle(description),
                                    }}
                                ></div>
                            </div>
                            <div>
                                <div className=" mt-[20px]">
                                    <ul className="flex flex-wrap gap-[12px]  ">
                                        {tags?.map((el, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary"
                                                >
                                                    {el.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[314px]">
                            <h2 className="section-header mb-5 font-medium text-body">
                                Recent
                            </h2>
                            <div>
                                <ul>
                                    {allBlogs
                                        ?.slice(0, 4)
                                        .map((blog, index) => {
                                            return (
                                                <li
                                                    className="mb-10 flex items-start gap-[10px]"
                                                    key={index}
                                                >
                                                    <span className="flex-center min-h-[40px] min-w-[40px] rounded-xl bg-gray-100 font-bold">
                                                        0{index + 1}
                                                    </span>
                                                    <Link
                                                        href={`/blogs/${blog.slug||blog.id}`}
                                                        className=" leading-[145%]"
                                                    >
                                                        {blog.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>

                {/* <section className="section-wrapper-m-sm container">
                    <div className="mb-5 flex justify-between">
                        <p className="sub-header-lg">Recent Post</p>
                        <Link href={"/blogs"} className="is-link">
                            View All
                        </Link>
                    </div>
                    <ul className="gap-base-half grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {props.recentBlogs?.map((blog) => {
                            return (
                                <BlogCard
                                    index={true}
                                    title={blog.title}
                                    blurb={blog.short_desc}
                                    thumbnail={blog.img ? blog.img : blog.image}
                                    url={blog.slug}
                                    imgAlt={blog.title}
                                    key={blog.slug}
                                    slug={blog.slug}
                                    created_at={blog.created_at}
                                    views = {blog.views}
                                />
                            );
                        })}
                    </ul>
                </section> */}
            </div>
        </div>

        /* TODO: get in touch missing */
    );
}

// export async function getStaticPaths() {
//     // const res = await fetch(makeFullApiUrl("/course"))
//     // const courses = await res.json()
//     // const paths = courses?.map((course) => ({
//     //     params: { slug: course.slug },
//     // }))
//     let paths = [];
//     return { paths, fallback: "blocking" };
// }

// export async function getStaticProps({ params }) {
//     const res = await fetch(makeFullApiUrl(`/singleblogslug/${params.slug}/`));

//     if (!res.ok) {
//         return {
//             notFound: true,
//         };
//     }

//     const blog = await res.json();

//     let page = 1;
//     let searchTerm = "";

//     let blogs = [];
//     try {
//         const blogsres = await fetch(
//             makeFullApiUrl(
//                 `/singleblog/?size=4&search=${searchTerm}&page=${page}`,
//             ),
//         );

//         const data = await blogsres.json();
//         blogs = data?.navigation?.data || [];
//     } catch (err) {}

//     return {
//         props: { blog, recentBlogs: blogs },
//         revalidate: 60 * 1
//     };
// }
