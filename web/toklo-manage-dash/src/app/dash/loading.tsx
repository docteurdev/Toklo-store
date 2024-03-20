"use client"
import React from 'react';
import {Puff} from 'react-loader-spinner'

type Props = {}

function loading({}: Props) {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center' >

<Puff
  visible={true}
  height="50"
  width="50"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default loading