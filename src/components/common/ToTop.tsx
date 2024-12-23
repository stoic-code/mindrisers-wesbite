"use client"

import React from 'react'

export default function ToTop() {
  return (
    <span
    id="scroll-to-top"
    className="hover:shadow-medium bg-green-200 hover:bg-primary group transition-all "
    onClick={() => {
        window.scroll(0, 0);
    }}
>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='text-primary group-hover:text-white transition-all'>
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
    </svg>
</span>
  )
}
