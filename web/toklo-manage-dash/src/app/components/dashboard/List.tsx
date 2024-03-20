"use client"
import React, { useState } from "react";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import styles from "@/app/components/styles/list.module.css";
import SmallBtn from "../buttons/SmallBtn";
import XsBtn from "../buttons/XsBtn";
import Link from "next/link";
import { IDressMaker } from "@/app/types";
import UserDetail from "../UserDetail";

type Props = {
 data: IDressMaker[]
};

function ListItem({data}: Props) {
  // console.log("===================================", data);
  const [detail, setDetail] = useState<IDressMaker>();
  const [isShow, setIsShow] = useState<boolean>(false);

  function handlecloseDetail(){
    setIsShow(false)
  }
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tr}>
          <tr>
            <td></td>
            <td className="">Infos couturier</td>
            <td className="">Date inscription</td>
            <td className="w-[200px]">Statut</td>
            <td className="w-10">Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((dressM, index) =>(
              <tr key={index.toString()} className={styles.tabletr}>
              <td >
                <span className={styles.userRounded}>
                  <FaUserCircle />
                </span>
              </td>
              <td>
                <div>
                  <span> {dressM.name} {dressM.lastname} </span>
                </div>
                <div className="">
                  <span> {dressM.phone} </span>
                </div>
                <div className="">
                  <span>Date de création:  {dressM.createdAt} </span>
                </div>
                <div className="">
                  <span>Date de souscription: 21/12/2023</span>
                </div>
              </td>
              <td>23-12-2023</td>
              <td> <span  className={`p-1 rounded-lg bg-blue-500 font-thin text-xs`}>Souscripteur</span> </td>
              <td className=" w-10 flex justify-center items-center gap-6">
                <XsBtn
                  icon={<FaTrash className="text-red-500"/>}
                  label=""
                  action={() => null}
                  bg="var(--textred)"
                />
  
                <XsBtn
                  icon={<IoEye className="text-green-700" />}
                  label=""
                  action={() =>{
                    setIsShow(true);
                    setDetail(dressM)
                  } }
                  bg="var(--bg-primary)"
                />
              </td>
              </tr>

              ))
          }
        </tbody>
      </table>
      {isShow && <UserDetail dressM= {detail} close={handlecloseDetail}  />}
    </div>
  );
}

export default ListItem;
