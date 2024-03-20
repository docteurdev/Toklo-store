import Link from 'next/link'
import React, {type ReactNode } from 'react'

type Props = {
 children: ReactNode
 link: 'register' | 'login'
}

const Wrapper = ({children, link}: Props) => {
  return (
    <div className=" relative w-full h-screen bg-[#0a0a0c] bg-[url('/img/wrapper_img.jpg')] bg-center bg-no-repeat bg-contain " >
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm">

      </div>
      <div className="w-full absolute bottom-5 left-0 text-center text-white">
        <p className=""> All right reserved <span className='font-bold' > Doctor@Code</span> <Link href={`./${link}`}> {link} </Link> </p>
      </div>
      
     {children}

    </div>
  )
}

export default Wrapper