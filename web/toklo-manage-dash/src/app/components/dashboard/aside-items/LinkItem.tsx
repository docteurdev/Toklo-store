"use client"
import React, { FC } from 'react'
import styles from "@/app/dash/styles/layout.module.css";
import { usePathname } from 'next/navigation';
import { TasideItem } from '@/app/types';
import { log } from 'console';
import Link from 'next/link';
type Props = {}

const LinkItem : FC<TasideItem> = ({item}) => {
 
 const {link, icon, label} = item;

 const path = usePathname();
 console.log(path);
 
 
  return (
    <Link href={`/dash/${link}`}>
     <div className={`${styles.item} ${path.includes(`/${link.toLowerCase()}`) && styles.itemActive }`}>
       {icon}
       <p className="text-[14px] font-light"> {label} </p>
     </div>
    </Link>
  )
}

export default LinkItem