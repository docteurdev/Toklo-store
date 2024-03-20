"use client"
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Combobox } from "../comboSelector";
import { Switch } from "@/components/ui/switch";
import { DataService } from "@/lib/dataService";
import { Trash2 } from "lucide-react";
import Toast from "../Toast";
import { useAppDispatch } from "@/app/hooks/redux";
import { handleFechVersion } from "@/store/slices/version";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


function AddVersion({ setOpen }: Props) {
  const [status, setStatus] = useState(false);
  const [label, setLabel] = useState('');
  const [version, setversion] = useState('');
  const [items, setItems] = useState <string[]>([]);
   const [newItem, setNewItem] = useState('');
   const [success, setSuccess] = useState({ status: false, mgs: "Got an error please retry"});
    const [error, seterror] = useState({status: false, mgs: "Got an error please retry"});

  const dispatch = useAppDispatch();

  function removeItem(item: string){
    const newItems = items?.filter(it => it.toLowerCase() !== item.toLowerCase()  );
    setItems(newItems);
    setNewItem('')
   }
  
   async function handleUpdateVersion(){
    try {
      // console.log({label, createdAt, items, status,vers });
      const data = {
        items,
        version,
        label,
        status: status? 'on': 'off'
      }
      const resp = await DataService.post("create-version", data);
      const res = resp.data;
      if(res){
        dispatch(handleFechVersion())
        setSuccess({...success, status: true})

        // if(handleVersion){
        //   handleVersion()
        // }
        setTimeout(() => {
          setOpen(false)
          
        }, 3000);
        console.log(res);
        
      }
    } catch (err) {
      console.log(err);
      seterror({...error, status: true, })

    }finally{

      setTimeout(() => {
        setSuccess({...success, status: false})
        seterror({...error, status: false, })
      }, 2500);
    }
   }
  
  return (
    <div>
      <div className="grid gap-4 py-4">
       {error.status && <Toast type="error" message="Got error retry!" size="short" otherProps="text-red-600" />}
       {success.status && <Toast type="success" message="You've added a new Version." size="short" otherProps="text-green-600" />}
        <DialogHeader >
          <DialogTitle className="my-5">Add New Version</DialogTitle>
          <DialogDescription >Add a news features in toklo</DialogDescription>
          
        </DialogHeader>
        <div className="flex gap-5 flex-col-reverse md:flex-raw">
          <div className="w-full md:w-5/12">
          <div className="flex justify-between items-center mb-5">
            <Label>Status: <span className={!status ? "text-green-600":"text-red-600"} > {!status? 'Off': 'On'} </span> </Label>
            <Switch
              checked={status}
              onCheckedChange={() => setStatus(!status)}
            />
            </div>
            <div className="mb-5">
              <Label htmlFor="label" className="text-right">
                Label
              </Label>
              <Input
                id="label"
                defaultValue=" "
                className="col-span-3"
                onChange={(e) => setLabel(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <Label htmlFor="version" className="text-right">
                Version
              </Label>
              <Input
                id="version"
                defaultValue=""
                className="col-span-3"
                onChange={(e) => setversion(e.target.value)}
              />
            </div>
            
            <form onSubmit={(e) =>{
              e.preventDefault();
              setItems((prev) =>[...prev, newItem])
              setNewItem( "")
            }} className="mb-5">
            <Label htmlFor="item" className="text-right">
                Add an item
              </Label>
              <Textarea 
              onChange={(e) => setNewItem(e.target.value)}
              value={newItem}
              />
             {newItem &&
              <div className="text-right mt-5">
                <Button type="submit">
                  Add
                </Button>
              </div>}
            </form>
           { items.length > 0 && label && version &&
            <div className="text-center mt">
              <Button onClick={() => handleUpdateVersion()} type="submit">
                Register
              </Button>
            </div>}
          </div>
          <div className="w-full md:w-7/12  px-4">
            {
              items?.map((item, i) =>(
                <div key={i.toString()} className="flex justify-between items-center">
                  <p> {item} </p>
                  <Trash2 className="text-red-500 cursor-pointer h-4 w-4" onClick={() =>removeItem(item)} />
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddVersion;
