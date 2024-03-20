import React from 'react';
import { CiSearch } from "react-icons/ci";

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div>
     <div className="relative flex w-[400px] h-10 rounded-md bg-slate-600">
       <span className='absolute right-4 top-3 text-lg'>
        <CiSearch />
       </span>
       <input type="text"
       placeholder='Recherchez'
       className=' text-sm px-2 w-full h-full bg-transparent'
         />
     </div>
    </div>
  )
}

export default SearchBar