"use client"
import Wrapper from '@/app/components/dashboard/Wrapper'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Switch } from '@/components/ui/switch'
import { DataService } from '@/lib/dataService'
import { Tversion } from '@/lib/types'
import React, { Suspense, useState } from 'react'

type Props = {
  params: {id: string}
}

async function VersionPage({params}: Props) {
  const [version, setVersion] = React.useState<Tversion>();
  const [status, setstatus] = useState(version?.status);
  React.useEffect(() => {
    handleGetVersion();
  }, [params.id]);
  console.log(params, status);

  async function handleGetVersion(){
    try {
      const resp = await DataService.get(`versions/${params.id}`);
      const data: Tversion = resp?.data.version;
      setVersion(data);
      setstatus(data.status)
    } catch (error) {
      console.log(error);
    }
    }

    async function handleChangeStatus(){
      
      setstatus(status =="off"? "on": "off")
      console.log("ddd", status);
      const dd = {...version, status}
      try {
        const resp = await DataService.put(`version-update`, dd);
        const data = resp?.data.version;
        if(data){
          handleGetVersion()
        }
        // setVersion(data);
        
      } catch (error) {
        console.log(error);
      }
      }
  

    
    

  
  return (
   <Wrapper isHead={true} wide version={version} handleVersion={handleGetVersion}  add="DETAIL_VERSION" btnTxt='Update'  >
     <h1 className='text-2xl font-bold'> Version title </h1>
      <Suspense fallback="loading..............">
        <div className="flex w-full flex-col-reverse md:flex-row ">
          <div className="w-full overflow-hidden flex-col md:flex-row p-2 rounded-sm bg-white h-64 md:w-8/12">
            <h3 className='font-bold mb-2' >News features</h3>
            <ul className='pl-2 '>
              <ScrollArea>

                {
                  version?.items.map((item, i) => <li key={i.toString()}>🚀 {item} </li>)
                }
              </ScrollArea>
            </ul>
          </div>
          <div className="w-full h-32 flex-col md:flex-row p-2 bg-slate-50 md:h-64 md:w-4/12 ">
            <h3 className='font-bold mb-2' >  Publish on: <span className='font-semibod text-xs text-red-500' > {version?.createdAt} </span>  </h3>
            <p>Version: {version?.version} </p>
            <div className="flex justify-between border- border-dashed border-bgSoft my-2 rounded-md">
              <p> Status: {status} </p>
              <Switch
                checked={status =="off"? false: true}
                className='text-red-500'
                disabled
                 onCheckedChange={() => handleChangeStatus()}
              />

            </div>
          </div>
        </div>
      </Suspense>
 </Wrapper>
  )
}

export default VersionPage