"use client"
import React from 'react'
import styles from "@/app/dash/styles/layout.module.css";
import { LuUserCircle } from "react-icons/lu";
import { FaMessage } from "react-icons/fa6";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

type Props = {}

const Menu = (props: Props) => {
  const path = usePathname();
  return (
    <div>
     <div  style={{backdropFilter: 'blur(4px)'}} className="  z-40  fixed top-0 left-0 w-full flex justify-between items-center bg-[#ffffff59] h-[60px] backdrop:blur-sm  px-3 ">
       <h3 className='capitalize text-lg font-bold text-white'> {path.split('/')[2]} </h3>
        <div className="flex justify-end gap-4 items-center w-[200px] ">
          <Link href="/dash/suggestion" >
            <div className="relative ">
              <FaMessage className='h-6 w-6 cursor-pointer' />
              <div className="w-[8px] h-[8px] bg-red-600 rounded-full absolute top-[-2px] right-[-2px] "></div>
            </div>
          </Link>
          <LuUserCircle className='h-6 w-6 cursor-pointer' />
        </div>
     </div>
    </div>
  )
}

export default Menu