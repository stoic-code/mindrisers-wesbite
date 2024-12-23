import classNames from "classnames";
import Image from "next/image";
import React from "react";

/**
 *
 * @param boolean activateHover
 * @returns
 */
export default function ArrowMini({
    diagonal = false,
    activateHover = false,
}: {
    activateHover?: boolean;
    diagonal?: boolean;
}) {
    return (
        <img
            height={200}
            width={200}
            src="/assets/icons/uil_arrow-up.svg"
            alt=""
            className={classNames(
                "inline-block h-[20px] w-[20px] transition-all",
                {
                    "group-hover:-translate-y-[20%] group-hover:translate-x-[20%]":
                        activateHover,
                },
                {
                    "rotate-45": !diagonal,
                },
            )}
        />
    );
}
