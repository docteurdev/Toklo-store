import React from 'react';
import Styles from "./versionItem.module.css"
import AddBtn from '../buttons/Add';
import { FiEye } from "react-icons/fi";

type Props = {}

function VersionItem({}: Props) {
  return (
    <div>
     <div className="p-5 w-[400px] h-[300px] bg-white rounded-md shadow-lg flex flex-col  justify-between">
      {/* header */}
      <div className="flex gap-3 items-center">
        <div className="w-[100px] h-[100px] bg-white rounded-lg flex items-center justify-center"></div>
        <div className="flex-1">
         <h1 className='font-semibold' >Version title</h1>
        </div>
      </div>
      {/* middle */}
      <div>
       <p>If everything I did failed - which it doesn't, I think that it actually succeeds.</p>
      </div>
      <hr className={Styles.divider} />
      {/* bottom */}
      <div className="flex justify-end">
        <AddBtn icon={<FiEye />}  label='Détail'/>
      </div>
     </div>
    </div>
  )
}

export default VersionItem