"use client"
import { useAppDispatch } from "@/app/hooks/redux";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { DataService } from "@/lib/dataService";
import { Tversion } from "@/lib/types";
import { handleFechVersion } from "@/store/slices/version";
import { PackagePlus, PlusCircle, Trash2 } from "lucide-react";
import React, { useState } from "react";

type Props = {
 setOpen: React.Dispatch<React.SetStateAction<boolean>>
 version?: Tversion
 handleVersion?: () => void
};

function UpdateVersion({setOpen, version, handleVersion}: Props) {
 const [label, setlabel] = useState(version?.label);
 const [createdAt, setcreatedAt] = useState(version?.createdAt);
 const [items, setItems] = useState(version?.items);
 const [status, setstatus] = useState(version?.status == "off"? false : true);
 const [vers, setversion] = useState(version?.version);
 const [newItem, setNewItem] = useState('');

 const [isAdding, setisAdding] = useState(false);
 const dispatch = useAppDispatch();

 function addNewItem(e: React.FormEvent){
  e.preventDefault();
  setItems((prev: string []=[]) => [...prev, newItem] );
  setisAdding(false);
 }

 function removeItem(item: string){
  const newItems = items?.filter(it => it.toLowerCase() !== item.toLowerCase()  );
  setItems(newItems);
  setNewItem('')
 }

 async function handleUpdateVersion(){
  try {
    console.log({label, createdAt, items, status,vers });
    const data = {
      id: version?.id,
      items,
      version: vers,
      createdAt,
      label,
      status: status? 'on': 'off'
    }
    const resp = await DataService.put("version-update", data);
    const res = resp.data;
    if(res){
      if(handleVersion){
        handleVersion();
        dispatch(handleFechVersion())
      }
      setTimeout(() => {
        setOpen(false)
        
      }, 2000);
      console.log(res);
      
    }
  } catch (error) {
    console.log(error);
  }
 }

  return (
    <div>
     <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-5/12  p-4">
     
        <div className=" gap-4 mt-4">
          <Label htmlFor="title" className="text-right">
            Version Status <span className={`font-bold ${status ? 'text-red-500' : 'text-green-700' }`} >{status? "On": "Off"}</span>
          </Label>
          <div className="col-span-3 float-end">
           <Switch
             checked={status}
             onCheckedChange={() => setstatus(!status)}
           />
          </div>
        </div>
        
        <div className=" gap-4 mt-4">
          <Label htmlFor="version" className="text-right">
            Version 
          </Label>
          <Input id="version" defaultValue={vers} onChange={(e) =>setversion(e.target.value)} className="col-span-3" />
        </div>

        <div className=" gap-4 mt-4">
          <Label htmlFor="title" className="text-right">
            Version title
          </Label>
          <Input id="title" defaultValue={label} className="col-span-3" />
        </div>
        <div className=" gap-4 mt-4">
          <Label htmlFor="create_at" className="text-right">
            Created date
          </Label>
          <Input
            id="create_at"
            type="date"
            defaultValue={createdAt}
            onChange={(e) =>setcreatedAt(e.target.value)}
            className="col-span-3"
          />

          <div className="text-center mt-4">
            {/* onClick={() => setOpen(false)} */}
            <Button onClick={() => handleUpdateVersion()} type="submit">
              Update
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-7/12">
       <div className="flex justify-between items-center my-4">
        <h3> Features {items?.length} </h3>
        <Button onClick={() => setisAdding(true)} variant="secondary" >  <PlusCircle className="text-red-500 cursor-pointer h-4 w-4" /> </Button>
       </div>
        <div className="p-2 rounded-sm h-[85%] ">
         { !isAdding && <div className="">
           {
            items?.map((item, i) => (
             <div key={i.toString()} className="flex justify-between items-center mb-2">
              <h3 className=""> {item} </h3>
              <Trash2 className="text-red-500 cursor-pointer h-4 w-4" onClick={() =>removeItem(item)} />
             </div>
            ))
           }

          </div>}
         { isAdding &&
          <form onSubmit={addNewItem}>
           <Textarea placeholder="Add new item" onChange={(e) =>setNewItem(e.target.value)} required/>
           <div className="mt-4 text-right">
            <Button className="border-2 border-white"> Add </Button>
           </div>
          </form>}
        </div>
        
      </div>

     </div>
    </div>
  );
}

export default UpdateVersion;
