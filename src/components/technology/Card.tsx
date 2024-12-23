import Image from 'next/image'
import React from 'react'
import { Technology } from '../home/TechStack'
import { makeFullUrl } from '@/utils/makeFullUrl'

export function Card({ technology }: { technology: Technology }) {
    return (
        <div className=" flex flex-col items-center justify-center gap-[10px]">
            <img
                alt=""
                width={200}
                height={300}
                className="h-auto w-auto object-contain"
                src={makeFullUrl(technology.image)}
                /* new coments test */
                // src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                // src="https://tech.mindrisers.com.np/static/service-image/mysql.svg"
            />
            <p className="  font-medium leading-[23.2px]">{technology.name}</p>
        </div>
    )
}
