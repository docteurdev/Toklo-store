import React from 'react';
import ListItem from './List';
import styles from "@/app/components/styles/list.module.css"
import SearchBar from './SearchBar';
import { IDressMaker } from '@/app/types';
import axios from 'axios';
import { DataService } from '@/lib/dataService';
type Props = {
  data: IDressMaker[]
}
async function handleGetDressMaker (){

  try {
    const {data} = await DataService.get('dressmakers')
      // console.log(data);
    return data
      
  } catch (error) {
    console.log(error)
  }
}


async function Listing() {
  const dressmakers =   await handleGetDressMaker()

  return (
    <div className={`${styles.users} w-full shadow-lg bg-bgSoft`} >
      <div className="flex justify-between items-center">
        <h2 className='my-6' >Liste des 10 derniers Couturiers</h2>
        <SearchBar />
      </div>
     <div className="h-[1px] bg-slate-50 mb-3"> </div>
     <ListItem data={dressmakers} />
    </div>
  )
}

export default Listing