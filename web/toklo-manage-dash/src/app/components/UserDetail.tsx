"use client"
import { IoMdClose } from "react-icons/io";
import React from 'react';
import { FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { FaMessage } from "react-icons/fa6";
import { IDressMaker } from "../types";
import Styles from "./styles/userDetails.module.css"
type Props = {
  close: () => void
  dressM:  IDressMaker
} 

const UserDetail = ({dressM, close }: Props) => {
  const {name, lastname, phone, subscribe,} = dressM ;
  
  return (
    <div>
     <div  className={`p-3 absolute top-0 text-black  right-0 h-full w-[400px]  bg-white z-50 shadow-md ${Styles.card}`}>
        {/* header */}
        <div className="flex justify-between items-center">
        <h1 className='text-black font-bold'>Profil</h1>
        <span onClick={() =>close()} className="text-md cursor-pointer">
         <IoMdClose />
        </span>
        </div>

        {/*  */}
        <div className="w-[250px] h-[200px] bg-slate-100 mx-auto my-10 rounded-md">

        </div>
        <div className="flex justify-between items-center ">
         <div className="">
          <h3 className="font-extrabold"> {name} {lastname} </h3>
          <p className="font-thin text-xs">Plateau, moon hotel</p>
         </div>
         <button className="flex gap-1 items-center px-2 py-1 text-xs font-thin rounded-lg bg-blue-500 text-white">
           <FiMessageCircle />
           <span>Message</span>
           
         </button>
        </div>
        <div className="h-[1px] bg-slate-300 my-6"></div>
        <h4 className="text-bold text-sm mb-2">Contact</h4>

        <div className="flex gap-1 items-center mb-2">
         <FaMessage />
          <div className="flex flex-col">
           <span className="font-bold text-sm m-0">Dresse email</span>
            <span className="text-xs font-thin text-red-500">adjeoumar@gmail.com</span>
          </div>
        </div>

        <div className="flex gap-1 items-center mb-2">
         <FiPhoneCall />
          <div className="flex flex-col">
           <span className="font-bold text-sm m-0">Numéro de téléphone</span>
            <span className="text-xs font-thin text-blue-500"> {phone} </span>
          </div>
        </div>
        <div className="h-[1px] bg-slate-300 my-6"></div>

        <h4 className="text-bold text-sm mb-2">Activité</h4>

        .flex

     </div>
    </div>
  )
}

export default UserDetail