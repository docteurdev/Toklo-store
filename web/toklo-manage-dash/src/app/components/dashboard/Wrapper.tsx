"use client"
import React, {useState, type ReactNode, useEffect } from 'react'
import AddBtn from '../buttons/Add'
import { IoAddSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import Modal from '../Modal';
import ModalForm from './ModalForm';
import AddUser from '../AddUser';
import AddSubscribe from './AddSubscribe';
import AddVersion from './AddVersion';
import UpdateVersion from './UpdateVersion';
import { Tversion } from '@/lib/types';
import AddPricing from './Pricing';
import { useAppDispatch } from '@/app/hooks/redux';
import { handleFechVersion } from '@/store/slices/version';

enum Eadd {
  USER = 'USER',
  VERSION = 'VERSION',
  SOUSCRIPTION = 'SOUSCRIPTION'
}
type Props = {
 children: ReactNode
 isHead: boolean
 btnTxt?: string
 add?: 'USER' | 'VERSION' | 'SOUSCRIPTION' | 'DETAIL_VERSION' | 'PRICING'
 wide?: boolean
 version?: Tversion
 handleVersion?: () => void
}

function Wrapper({children, isHead, add, btnTxt, wide, version, handleVersion}: Props) {

  const [open, setOpen] = useState(false);
   const dispatch = useAppDispatch();

   useEffect(() => {
    dispatch(handleFechVersion())
   
     return () => {
       
     }
   }, [])
   
  return (
    <div>
     <div className="relative mt-20 p-4 w-full min-h-[500px] bg-slate-200 rounded-md text-slate-800">

     <div className="">
         {isHead && 
          <div className="">
            <Button onClick={() => setOpen(true)}> {btnTxt? btnTxt : 'Add'}</Button> 
              <Modal wide={wide} open={open} onPenChange={setOpen}> 
               {add === "USER" && <AddUser setOpen={setOpen} />}
               {add === "SOUSCRIPTION" && <AddSubscribe setOpen={setOpen} />}
               {add === "VERSION" && <AddVersion setOpen={setOpen} />}
               {add === "DETAIL_VERSION" && <UpdateVersion version={version} setOpen={setOpen} handleVersion={handleVersion} />}
               {add === "PRICING" && <AddPricing  setOpen={setOpen} handleVersion={handleVersion} />}
              </Modal>

          </div>
          }

          <p className="h-"></p>
          <div className="mt-4 ">
           {children}
          </div>
         
        </div>
     </div>
    </div>
  )
}

export default  Wrapper