"use client"
import React from 'react'
import { FaUsers, FaMoneyBill } from "react-icons/fa";
import { TbVersionsFilled } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineWebhook } from "react-icons/md";
import styles from "@/app/dash/styles/layout.module.css"
import Image from 'next/image'
import LinkItem from './aside-items/LinkItem'

type Props = {}

const menuItems = [
  {
    label: "acceuil",
    link: "acceuil",
    icon: <AiFillHome className="h-5 w-5"/>
  },
  {
    label: "users",
    link: "users",
    icon:  <FaUsers className="h-5 w-5"/>
  },
  {
    label: "souscripteurs",
    link: "souscriptions",
    icon:  <MdOutlineWebhook className="h-5 w-5"/>
  },
  {
    label: "versions",
    link: "version",
    icon: <TbVersionsFilled className="h-5 w-5"/>
  },
  {
    label: "pricing",
    link: "pricing",
    icon: <FaMoneyBill  className="h-5 w-5"/>
  }
 
]

function SideLayout({}: Props) {
  return (
    <div>
      <div className={`${styles.sideMenu} z-50  hidden md:block`}>
        {/* user info */}
         <div className={styles.userInfo}>
           <Image src="/user-logo.png" alt='user-img' width={40} height={40} className={styles.userImg} />
           <div className={styles.user}>
             <p className="text-white font-bold">TOKLO CONTROL</p>
           </div>
         </div>

         <div className="h-[1px] bg-white mt-4"></div>
        {/* user info */}

        {/* dashboard items */}
        <div className="mt-4">
         {menuItems?.map((item, index) => <LinkItem key={index.toString()} item={item} />)}
        </div>
        {/* dashboard items */}
      </div>
    </div>
  )
}

export default SideLayout