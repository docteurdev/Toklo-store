import React from 'react';
import styles from "@/app/components/styles/widget.module.css"
import { IoEye } from "react-icons/io5";
import Image from 'next/image';
import SmallBtn from '../buttons/SmallBtn';
import Link from 'next/link';
import { Tversion } from '@/lib/types';
type Props = {
  version: Tversion
}

function Widget({version}: Props) {

  const items = version?.items.slice(0, 3);
  
  return (
    <div>
     <div className={`${styles.widget} flex w-full justify-around flex-col lg:w-[350px] h-60 rounded-lg shadow-lg ${version?.status =="off" ? "bg-white": "bg-red-50"}`}>
       {/* <div className="absolute top-0 left-0 h-full w-full">
        <img src="/update.png" className={styles.img} alt=""/>
       </div> */}
       <h4>🔥 Dernière mise à jour {version?.createdAt} </h4>
       <h3> {version?.label} </h3>
       <h4 className={styles.date}> Date butoire de mise à 02-06-2024 </h4>
       {
        items?.map((item, i) => <h4 className="text-slate-600" key={i.toString()}> 🚀 {item} </h4>)
       }
       <Link href={`/dash/version/${version?.id}`}>
       <SmallBtn
       icon={<IoEye/>}
       label='Détail'
       action={() => null }
    
       
       />
       </Link> 
     </div>
    </div>
  )
}

export default Widget