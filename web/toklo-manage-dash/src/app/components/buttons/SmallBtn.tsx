"use client"
import React from 'react';
 import styles from  "@/app/components/styles/widget.module.css"
import {ISmallBtn} from "@/app/types"
import { Button } from '@/components/ui/button';


const SmallBtn = ({icon, label, action, bg}: ISmallBtn) => {
  return (
    <div>
     <Button variant="outline" size="sm"  className="h-7" >
         <span className='mr-1'>
          {icon}
         </span>
         <span className='font-light text-[13px]'> {label} </span>
        </Button>
    </div>
  )
}

export default SmallBtn