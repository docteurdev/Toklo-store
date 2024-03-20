
import React from 'react'

type Props = {
 type: "error" | "success"
 size: "large" | "short"
 message: string
 otherProps?: string
}

function Toast({type, size, message, otherProps}: Props) {
  return (
    <div>
      <div className={`flex h-10 items-center border-2 gap-3 rounded-md ${type =="success" ? 'bg-emerald-500/25 text-white border-emerald-500' : 'bg-destructive/10 text-white  border-destructive'}`}>

       <div className="w-10 h-10 flex justify-center items-center">
        {type == "error" && <span> ❗ </span> }
        {type == "success" && <span> ✅ </span> }
        </div> 
        
        <div className="flex-1 w-full ">
           <p className={`text-left ${otherProps}`}  > {message} </p>
        </div>
      </div>
    </div>
  )
}

export default Toast