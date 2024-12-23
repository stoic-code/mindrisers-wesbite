"use client";
import React, { useEffect, useState } from "react";
const pic1 = "/assets/blog_icons/image_141.png";
const pic2 = "/assets/blog_icons/image_73.png";
const pic3 = "/assets/blog_icons/image_75.png";
const pic4 = "/assets/blog_icons/image_48.png";
const pic5 = "/assets/blog_icons/image_47.png";

import Image from "next/image";
import Card from "./Card";
import AllBlogsCard from "./AllBlogsCard";
import { fetchApiData } from "@/utils/fetchApiData";
import Link from "next/link";
import getMetaTags from "@/utils/getMetaTags";
import metaTags from "@/data/metaTags";

type Category = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};

type Tag = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};

type Body = {
    id: number;
    picture: string;
    title: string;
    body: string;
};

export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    categories: Category[];
    tags: Tag[];
    author: string;
    picture: string;
    quote: string;
    description: string;
    bodies: Body[];
    views: number;
    created_at: string;
    short_description: string;
};

// export const metadata =  getMetaTags(metaTags.blogs)  // not in use client


export default function Index() {
    const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
    const [featuredblogs, setFeaturedBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const fetchData = await fetchApiData({
                url: "blogs/",
                nestedPath: "navigation.data",
            });

            setAllBlogs(fetchData);
        };

        const fetchFeaturedBlogs = async () => {
            const featureBlog = await fetchApiData({
                url: "featuredblogs/",
                nestedPath: "navigation.data",
            });
            setFeaturedBlogs(featureBlog);
        };
        fetchFeaturedBlogs();
        fetchAllBlogs();
    }, []);

    return (
        <main className=" ">
            <section className=" section-wrapper-p-50    bg-green-50">
                <div className=" container">
                    <p className=" title text-shrink text-center">Blogs</p>
                    <p className=" text-shrink header my-[10px] text-center text-gray-900">
                        Resources that will
                        <span className=" text-secondary"> Help you ! </span>
                    </p>
                    <p className=" text-shrink  description text-center ">
                        At Mindrisers, we have had the privilege of partnering
                        with some of the most innovative and forward-thinking
                        companies in the tech industry.
                    </p>
                </div>
            </section>
            <section className=" wrapper-sm section-wrapper-m-md container flex flex-col  ">
                <div className=" flex items-center gap-[10px]">
                    <img
                        src="/assets/blog_icons/Vector.svg"
                        width={21.004}
                        height={26.999}
                        alt="icon"
                    />
                    <p className=" text-[24px]  font-semibold  leading-normal text-gray-900">
                        Top Featured Blogs
                    </p>
                </div>

                <div className=" grid grid-cols-1 place-items-center content-between  gap-x-[20px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3 ">
                    {featuredblogs?.map((blog, index) => {
                        return <Card key={blog.id} blog={blog} />;
                    })}
                </div>
            </section>
            <section className=" wrapper-sm  section-wrapper-m-md container flex flex-col">
                <div className=" flex items-center gap-[10px]">
                    <img
                        src={"/assets/blog_icons/blog.svg"}
                        width={36}
                        height={36}
                        alt="icon"
                    />
                    <p className=" text-[24px]  font-semibold  leading-normal text-gray-900">
                        All Blogs
                    </p>
                </div>
                <div className=" grid place-items-center content-between gap-x-[20px] gap-y-[40px]  md:grid-cols-2   lg:grid-cols-3">
                    {allBlogs.map((blog, index) => {
                        return <Card key={blog.id} blog={blog} />;
                    })}
                </div>
            </section>
        </main>
    );
}
