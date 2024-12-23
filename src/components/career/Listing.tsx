'use client'
import { Category, Job } from '@/app/career/page'
import React, { useEffect, useState } from 'react'
import RowCard from './RowCard'
import ColumCard from './ColumnCard'
import classNames from 'classnames'
import { act } from 'react-dom/test-utils'
export default function Listing({ careers }: { careers: Job[] }) {
    const categories: Category[] = []

    careers.forEach((career) => {
        if (!categories.find((cat) => cat.id == career.category.id)) {
            categories.push(career.category)
        }
    })

    categories.unshift({
        name: 'all',
        id: 0
    })

    const [activeCategory, setActiveCategory] = useState('all')
    let temp = careers.filter((el) => {
        if (activeCategory == 'all') {
            return true
        } else {
            if (activeCategory == el.category.name.toLowerCase()) {
                return true
            }
        }
    })

    const row_data = temp.slice(0, 3)
    const col_data = temp.slice(3)

    return (
        <div className=" section-wrapper-p-lg container mt-0 ">
            <div className="flex flex-col items-center">
                <p className="text-[24px] font-semibold">
                    Open Positions 
                </p>
                <div className="mb-[40px] mt-[40px] flex flex-wrap justify-center gap-4 lg:gap-6">
                    {categories.map((el) => {
                        return (
                            <p key={el.id}
                                className={classNames(
                                    `cursor-pointer rounded-full p-[10px] py-[4px] text-[16px] font-medium capitalize`,
                                    {
                                        'hover:bg-gray-100  hover:text-primary':
                                            el.name.toLowerCase() !==
                                            activeCategory
                                    },
                                    {
                                        ' !cursor-text  bg-primary text-white-50':
                                            el.name.toLowerCase() ==
                                            activeCategory
                                    }
                                )}
                                onClick={() =>
                                    setActiveCategory(el.name.toLowerCase())
                                }
                            >
                                {el.name}
                            </p>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center gap-6">
                {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
                <div className="flex flex-wrap justify-center gap-6 ">
                    {row_data?.map((el, index) => {
                        return <RowCard job={el} key={index} />
                    })}
                </div>

                {/* colum card starts here */}

                {col_data?.map((el, index) => {
                    return <ColumCard job={el} key={index} />
                })}
            </div>
        </div>
    )
}
