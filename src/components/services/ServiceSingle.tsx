import classNames from "classnames";
import React from "react";
import { ServiceType } from "../home/Services";

export default function ServiceSingle({
    index,
    service,
}: {
    index: number;
    service: ServiceType;
}) {
    const { name, short_description, description, icon, service_tags } =
        service;
    return (
        <li
            className={classNames(
                "group  flex w-full flex-col gap-[20px] rounded-xl lg:flex-row lg:border-none ",
            )}
        >
            <span
                className={classNames(
                    "section-wrapper-p-full-sm  flex-center lg:w-[50%]] w-full transition-all ",
                    {
                        "lg:order-2": index % 2 == 0,
                    },
                )}
            >
                <img
                    src={icon}
                    loading="lazy" 
                    alt=""
                    className={classNames(
                        "mx-auto lg:max-w-[375px] xl:max-w-[508px] ",
                    )}
                    
                />
            </span>

            <div className="lg:w-[50%]]">
                <p className="title">{short_description}</p>
                <p className="header-sm mb-[20px] transition-all ">{name}</p>
                <p className="description mb-5 text-justify md:mb-[40px]">
                    {description}
                </p>
                <ul className="grid gap-y-5 md:grid-cols-2 md:gap-y-8">
                    {service_tags.map((el, index) => {
                        return (
                            <li key={index}>
                                <span className=" mr-5 inline-flex min-h-[24px] min-w-[24px] items-center justify-center rounded-[4px] bg-gray-100 font-semibold">
                                    0{index + 1}
                                </span>{" "}
                                <span>{el.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
}
