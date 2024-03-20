"use client"
import React from 'react';
 import styles from  "@/app/components/styles/widget.module.css"
import {ISmallBtn} from "@/app/types"


const XsBtn = ({icon, label, action, bg}: ISmallBtn) => {
  return (
    <div>
     <button onClick={() => action()} style={{color: bg, fontSize: 15, cursor:"pointer"}} className="w-[20px] h-[20px] flex justify-center items-center rounded-sm" >
          {icon}
        </button>
    </div>
  )
}

export default XsBtn