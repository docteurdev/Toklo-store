'use server'

import { userRegisterShema } from "@/app/types/shema";
import axios from "axios";
import { NextRouter } from "next/router";
import { InferType } from "yup";

type TVal = {
 navigateTo: () =>  NextRouter
 values: InferType<typeof userRegisterShema >
}

export async function registerAction({values, navigateTo}: TVal){
 const resp = await axios.post('http://localhost:3000/api/admin',values)
 const validateValues = userRegisterShema.validateSync(values)
 if(resp.data){
  navigateTo();
 }
 console.log("==============================",resp.data);
 

}