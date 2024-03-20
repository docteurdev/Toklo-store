import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {
 setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

function AddSubscribe({setOpen}: Props) {
  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nom du couturier
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Téléphone
          </Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />

          <DialogFooter className="text-right">
            {/* onClick={() => setOpen(false)} */}
            <Button onClick={() => setOpen(false)} type="submit">
              Enrergistrer
            </Button>
          </DialogFooter>
        </div>
      </div>
    </div>
  );
}

export default AddSubscribe;
