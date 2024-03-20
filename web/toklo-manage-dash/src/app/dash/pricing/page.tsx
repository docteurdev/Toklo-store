
import Wrapper from '@/app/components/dashboard/Wrapper'
import PricingCard from '@/app/components/pricing/PricingCard'
import { TPricing } from '@/app/types'
import { DataService } from '@/lib/dataService'
import React from 'react'

type Props = {}
async function handleFetchPricing(){
 try {
  const resp = await DataService.get('sub-type');
  const {data} = resp.data;
  return data;
 } catch (error) {
  console.log(error);
  
 }
} 
async function Pricing({}: Props) {

 const data: TPricing[] = await handleFetchPricing()
 // console.log(data);
 
  return (
   
    <div>
     <Wrapper  isHead add="PRICING" wide >
       <div className="flex flex-wrap justify-center gap-6">
        {data?.map((item, i) =>  <PricingCard key={i.toString()} item ={item} />)}        
       </div>
     </Wrapper>
    </div>
  )
}

export default Pricing