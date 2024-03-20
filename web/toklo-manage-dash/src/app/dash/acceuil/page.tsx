"use client"
import { FaUsers, FaPause } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import RecapCard from '@/app/components/dashboard/RecapCard'
import React, { useEffect } from 'react'
import styles from "@/app/styles/form.module.css"
import Widget from '@/app/components/dashboard/Widget'
import ListItem from "@/app/components/dashboard/List";
import Listing from "@/app/components/dashboard/Listing";
import Chart from "@/app/components/Chart";
import Wrapper from "@/app/components/dashboard/Wrapper";
import { useAppDispatch, useAppSeleactor } from "@/app/hooks/redux";
import { handleFechVersion } from "@/store/slices/version";


type Props = {}

const Home = (props: Props) => {

  const dispatch = useAppDispatch();
  const {versions} = useAppSeleactor(state => state.versions )
  useEffect(() => {
    
    dispatch(handleFechVersion())
    return () => {
      
    }
  }, [])

  return (
    <Wrapper isHead={false}>

      <div className='w-full flex flex-col md:flex-row  md:justify-between flex-wrap'>
        <div className=" w-full md:w-8/12">
          <div className={`flex flex-wrap justify-between`}>
            <RecapCard
            label='Couturiers'
            value="400"
            sublabel='Semstre précédant'
            icon={<FaUsers />}
            isActive={true}
            />
            <RecapCard 
            label='Souscripteurs'
            value="10"
            sublabel='Ensemble des Couturiers Souscripteurs'
            icon={<FaMoneyBill1Wave />}

            />
            {/* <RecapCard 
            label='Non souscripteurs'
            value="50"
            sublabel='Ensemble des Couturiers Non souscripteurs'
            icon={<FaPause />}

            /> */}
          </div>
          <div className="mt-4">

          <Listing />
          {/* <Chart /> */}
          </div>
        </div>
        <div className='w-full  md:w-4/12 pl-3 flex flex-col items-end '>
        {
        versions && versions.map((version, index) =>  <Widget  version={version} key={index.toString()}/>)
        }
       
        </div>
      </div>
    </Wrapper>
  )
}

export default Home