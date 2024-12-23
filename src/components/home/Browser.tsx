"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type PartnerType = {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
    type: number;
    link: string;
};

export default function Browser({ partners }: { partners: PartnerType[] }) {

    const [url, setUrl] = useState("");
    useEffect(() =>{
        setUrl(window.location.href)
    },[])
    return (
        <div
            className={`bgg-[url('/assets/images/home/browser.svg')] relative mx-auto    w-full max-w-[1000px] bg-cover bg-no-repeat p-[10px]  `}
        >
            {/* top  url section */}
            <img
                height={700}
                width={1000}
                src="/assets/images/home/browser.svg"
                alt=""
                className="absolute left-0 right-0 top-0 h-auto w-full"
            />
            <div className=" absolutee top-[10px]] right-[10px]] left-[10px]] sticky flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-6 ">
                    <div>
                        <img
                            height={42}
                            width={42}
                            className="bowser-icons"
                            src="/assets/icons/browser/controls.svg"
                            alt=""
                        />
                    </div>
                    <div className="hidden sm:flex">
                        <img
                            height={42}
                            width={42}
                            className="bowser-icons"
                            src="/assets/icons/browser/Icon • Sidebar.svg"
                            alt=""
                        />
                        <img
                            height={42}
                            width={42}
                            className="bowser-icons"
                            src="/assets/icons/browser/Icon • Chevron Left.svg"
                            alt=""
                        />
                        <img
                            height={42}
                            width={42}
                            className="bowser-icons"
                            src="/assets/icons/browser/Icon • Chevron Right.svg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <img
                        height={42}
                        width={42}
                        className="bowser-icons hidden sm:inline-block"
                        src="/assets/icons/browser/Icon • Shield.svg"
                        alt=""
                    />
                    <div className="flex items-center justify-between gap-2 bg-[#F0F0F0] sm:gap-3">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                let inputValue = (e.target as HTMLFormElement)
                                    .url.value; //Property 'url' does not exist on type 'EventTarget'.
                                if (
                                    !inputValue.startsWith("http://") &&
                                    !inputValue.startsWith("https://")
                                ) {
                                    // If not, prepend 'https://www.'
                                    inputValue = "https://www." + inputValue;
                                }
                                window.open(inputValue, "_blank");
                            }}
                        >
                            <input
                                type="text"
                                name="url"
                                value={url}
                                onChange={(e) => {
                                    setUrl(e.target.value);
                                }}
                                placeholder="url"
                                className="w-min max-w-[130px] grow bg-transparent px-2 text-xs  sm:max-w-[388.54px] sm:px-3"
                            />
                        </form>
                        <img
                            height={42}
                            width={42}
                            className="bowser-icons clickable mr-3 sm:mr-5"
                            src="/assets/icons/browser/Icon • Clockwise Arrow.svg"
                            alt=""
                            onClick={() => {
                                window.location.reload();
                            }}
                        />
                    </div>
                </div>

                <div className="flex grow-0">
                    <img
                        height={42}
                        width={42}
                        className="bowser-icons"
                        src="/assets/icons/browser/Icon • Share.svg"
                        alt=""
                    />
                    <img
                        height={42}
                        width={42}
                        className="bowser-icons"
                        src="/assets/icons/browser/Icon • New Tab.svg"
                        alt=""
                    />
                    <img
                        height={42}
                        width={42}
                        className="bowser-icons"
                        src="/assets/icons/browser/Icon • Tab Overview.svg"
                        alt=""
                    />
                </div>
            </div>

            <div className="section-wrapper-p-md">
                <div className="wrapper-sm">
                    <div className="wrapper-2xs items-center text-center">
                        <p className="section-header-lg">
                            Trusted by World Best{" "}
                            <span className="text-secondary">Companies</span>
                        </p>
                        <p className="description max-w-[800px]">
                            At Mindrisers, we have had the privilege of
                            partnering with some of the most innovative and
                            forward-thinking companies in the tech industry.
                        </p>
                    </div>
                    <ul className="wrapper-sm flex flex-row  flex-wrap justify-center ">
                        {partners.slice(0,10).map((el, index) => {
                            return (
                                <li key={el.id}>
                                    <img
                                        height={200}
                                        width={200}
                                        src={el.image}
                                        loading="lazy"
                                        alt={el.name}
                                        className="h-[60px] w-[60px] object-contain border border-border p-1 bg-white rounded-full"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
