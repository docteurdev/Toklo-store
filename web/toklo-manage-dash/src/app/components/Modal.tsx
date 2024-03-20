import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
 open: boolean
 onPenChange: React.Dispatch<React.SetStateAction<boolean>>
 children: React.ReactNode,
 wide?: boolean
};

const Modal = ({open, onPenChange, children, wide}: Props) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={onPenChange}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className={wide? 'sm:max-w-[800px] ' : 'sm:max-w-[425px] pb-4'}>
          {/* insert form here */}
           {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
