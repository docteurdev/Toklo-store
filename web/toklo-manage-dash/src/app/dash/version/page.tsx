"use client"
import React, { useEffect, useState } from 'react'
import AddBtn from '@/app/components/buttons/Add'
import VersionItem from '@/app/components/version-item/VersionItem';
import { IoAddSharp } from "react-icons/io5";
import Wrapper from '@/app/components/dashboard/Wrapper';
import Widget from '@/app/components/dashboard/Widget';
import { DataService } from '@/lib/dataService';
import { Tversion } from '@/lib/types';
import { useAppDispatch, useAppSeleactor } from '@/app/hooks/redux';
import { handleFechVersion } from '@/store/slices/version';


type Props = {}
async function handleFethVersions(){
  try {
    const {data :resp} = await DataService.get('versions');
    let data = resp.data;
    console.log(data);
    
    return data
  } catch (error)  {
    console.log(error);
    
  }
}

 async function Version (props: Props) {
  const [search, setSearch] = useState('');
  const versions: Tversion[] = useAppSeleactor(state => state.versions.versions)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleFechVersion())
  
    return () => {
      
    }
  }, [])
  
  return (
        <Wrapper add="VERSION" isHead={true} wide  >
          <div className="w-full flex justify-center flex-col md:flex-row md:gap-4 md:flex-wrap">

          {versions?.map((version, i) => <Widget key={i.toString()} version={version} /> )}
          </div>
        </Wrapper>
        

  )
}

export default Version