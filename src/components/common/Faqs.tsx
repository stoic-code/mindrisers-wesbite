"use client"

import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import {  FaArrowUp as FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { FAQItem } from "./Culture";

type faqType = FAQItem
function FaqContent({
    el,
    openedIndexes,
    index,
    faqContentStyle,
}: {
    el: faqType;
    openedIndexes: number[];
    index: number;
    faqContentStyle?: string;
}) {
    const myref = useRef<HTMLDivElement | null>(null);
    const myrefChild = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (myrefChild.current) {
            const elementHeightChild = myrefChild.current.clientHeight;

            if (openedIndexes.includes(index)) {
                // myref.current.style.maxHeight = `${(elementHeightChild + 132)} px` // 20 for padding
                const totalHeight = elementHeightChild + 20;
                if (myref.current) {
                    myref.current.style.maxHeight = `${totalHeight}px`; // 20 for padding
                }
            } else {
                if (myref.current) {
                    myref.current.style.maxHeight = `${0}px`;
                }
            }
        }
    }, [openedIndexes.length]);

    return (
        <>
            <div
                ref={myref}
                className={classNames(
                    "max-h-0 overflow-hidden transition-all duration-[.3s] ",
                )}
            >
                <p
                    ref={myrefChild}
                    className={
                        faqContentStyle || "border border-t-0 border-border p-5 bg-white"
                    }
                >
                    {/* conditions for innerHTML  */}
                    {el.content}
                </p>
            </div>
        </>
    );
}

/**
 *
 * @param {faqType[]} faqs
 * @returns
 */

export default function Faqs({
    faqs,
    faqTitleStyle,
    faqTitleOpenedStyle,
    faqContentStyle,
    closedIcon,
    opendedIcon,
}: {
    faqs: faqType[];
    faqTitleStyle?: string;
    faqTitleOpenedStyle?: string;
    faqContentStyle?: string;
    faqContent?: string;
    closedIcon?: React.ReactNode;
    opendedIcon?: React.ReactNode;
}) {
    const [openedIndexes, setOpenedIndexes] = useState([0]);

    faqTitleStyle =
        faqTitleStyle ||
        "capitalize bg-white border border-border p-5   flex justify-between items-center transition-all duration-[.3s] rounded-xl";
    faqTitleOpenedStyle = faqTitleOpenedStyle || "rounded-b-[0px]";

    closedIcon = closedIcon || <FaArrowRight className="text-primary" />;
    opendedIcon = opendedIcon || <FaArrowDown className="text-primary" />;

    return (
        <ul>
            {faqs.map((el, index) => {
                return (
                    <li className="mb-3 md:mb-5" key={index}>
                        <div
                            onClick={() => {
                                let temp = [...openedIndexes];
                                if (!temp.includes(index)) {
                                    temp.push(index);
                                } else {
                                    temp = temp.filter((el) => el !== index);
                                }
                                setOpenedIndexes(temp);
                            }}
                            className={classNames(
                                "cursor-pointer select-none",
                                faqTitleStyle,
                                {
                                    [`${faqTitleOpenedStyle}`]:
                                        openedIndexes.includes(index),
                                },
                            )}
                        >
                            {el.title}

                            <span
                                className={classNames(
                                    "   transition-all duration-100  ",
                                    {
                                        "rotate-180":
                                            openedIndexes.includes(index),
                                    },
                                )}
                            >
                                {openedIndexes.includes(index)
                                    ? opendedIcon
                                    : closedIcon}
                            </span>
                        </div>
                        <FaqContent
                            faqContentStyle={faqContentStyle}
                            el={el}
                            openedIndexes={openedIndexes}
                            index={index}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
