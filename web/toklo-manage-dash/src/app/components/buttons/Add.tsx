"use client"
import React, {type ReactNode } from 'react';
import Styles from "../styles/addbtn.module.css"

type Props = {
 label: string,
 icon: ReactNode,
 action: () => void
}

function AddBtn({label, icon, action}: Props) {
  return (
    <div>
     <button onClick={() => action()} className={Styles.btn}>
       <span> {icon} </span>
       <span> {label} </span> </button>
    </div>
  )
}

export default AddBtn