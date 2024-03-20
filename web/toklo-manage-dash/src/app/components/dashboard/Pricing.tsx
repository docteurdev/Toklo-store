"use client"
import { useAppDispatch, useAppSeleactor } from "@/app/hooks/redux";
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
import { Combobox } from "../comboSelector";

type Props = {
 setOpen: React.Dispatch<React.SetStateAction<boolean>>
 handleVersion?: () => void
};

function AddPricing({setOpen, handleVersion}: Props) {

 const [label, setlabel] = useState("");
 const [createdAt, setcreatedAt] = useState("");
 const [items, setItems] = useState("");
 const [status, setstatus] = useState(true);
 const [vers, setversion] = useState("");
 const [features, setfeatures] = useState<string[]>([]);

 const [isAdding, setisAdding] = useState(false);
 const versions: Tversion[] = useAppSeleactor(state => state.versions.versions)

 const dispatch = useAppDispatch();


 async function handleAddPricing(){
  try {
    console.log({label, createdAt, items, status,vers });
    const data = {
      id: "",
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
       <Label htmlFor="label" className="text-right">
         Name 
       </Label>
       <Input id="label" defaultValue={vers} onChange={(e) =>setversion(e.target.value)} className="col-span-3" />
     </div>

     <div className=" gap-4 mt-4">
       <Label htmlFor="title" className="text-right">
         Price
       </Label>
       <Input id="title" defaultValue={label} className="col-span-3" />
     </div>
     <div className=" gap-4 mt-4">
       <Label htmlFor="desc" className="text-right">
         desciption
       </Label>
       <Input
         id="desc"
         type="text"
         defaultValue={createdAt}
         onChange={(e) =>setcreatedAt(e.target.value)}
         className="col-span-3"
       />

     </div>

     <div className=" gap-4 mt-4">
       <Label htmlFor="desc" className="text-right">
         Select the features from versions
       </Label>
       <Combobox selectTable={versions} setData={setfeatures}/>
     </div>
       <div className="text-center mt-4">
         {/* onClick={() => setOpen(false)} */}
         <Button onClick={() => handleAddPricing()} type="submit">
          Add Pricing
         </Button>
       </div>

      </div>
      <div className="w-full md:w-7/12">
       <div className="flex justify-between items-center mt-10">
        <h3> Features {features?.length} </h3>
       </div>
        <div className="p-2 rounded-sm h-[85%] ">
         
           {
            features?.map((item, i) => (
             <div key={i.toString()} className="flex justify-between items-center mb-2">
              <h3 className=""> <span className="font-bold">#</span> {item} </h3>
              <div className="text-red-500 cursor-pointer h-4 w-4" > 🚀 </div>
             </div>
            ))
           }
         
        </div>
        
      </div>

     </div>
    </div>
  );
}

export default AddPricing;
