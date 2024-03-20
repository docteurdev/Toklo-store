"use client";
import React, { useState } from "react";

import { Formik, Form } from "formik";
import { InferType } from "yup";

import Wrapper from "@/app/components/auth/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { userRegisterShema } from "@/app/types/shema";
import { registerAction } from "@/actions/Auth";
import { useRouter } from "next/navigation";
import axios from "axios";
import Toast from "@/app/components/Toast";

type Props = {};
type Tregister = InferType<typeof userRegisterShema>;

const Register = (props: Props) => {

  const route = useRouter();
  const [success, setsuccess] = useState({ status: false, mgs: ""});
  const [error, setError] = useState({ status: false, mgs: ""});

   async function handleSubmit(values: Tregister) {
    // registerAction(values, navigateTo)
    try {
      const resp = await axios.post('http://localhost:3010/api/admin', values);
      if(resp.data){
        route.push('/login')
      }
      console.log(resp);
      
    } catch (error) {
      console.log(error);
      const mgs = error?.response.data.message;
      setError(prev => ({...prev, status: true, mgs}))

    } finally{
      setTimeout(() => {
        setError(prev => ({...prev, status: false}))
      },2000 );
    }
  }

  return (
    <Wrapper link="login">
      <div className=" text-center text-white absolute z-10 w-full px-2 md:w-[400px] h-[180px] top-[10%] left-[50%] bg-transparent transform: translate-x-[-50%]">
       {error.status && <Toast size="large" type="error" message={error.mgs} />}
        <h2 className="text-2xl  font-bold">
          <span className="text-3xl">🔐</span> Register to Toklo Manager
        </h2>
        {/* <div className="h-[1px] bg-gray-100"></div> */}
        <p className="text-justify my-3">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          perspiciatis et, eos ullam dolores tempora! Nulla voluptas beatae quo
          dolore nihil. Voluptatem iusto perferendis sequi tenetur maxime
          laboriosam, expedita voluptas.{" "}
        </p>
        <div className="relative">
          <Formik
            validationSchema={userRegisterShema}
            onSubmit={handleSubmit}
            initialValues={{
              userName: "",
              permissionEmail: "",
              email: "",
              password: "",
            }}
          >
            {({ values, errors, handleBlur, handleChange, touched }) => (
              <Form>
                <Input
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="userName"
                  placeholder="Enter your username"
                  className=" text-slate-500"
                />
                {touched.userName && errors.userName &&
                   <p className="text-yellow-500 text-left font-bold"> {errors.userName} </p>
                
                }
                <Input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  className="my-3 text-slate-500"
                  placeholder="Enter your email"
                />

                {touched.email && errors.email &&
                   <p className="text-yellow-500 text-left font-bold"> {errors.email} </p>
                }
                <Input
                  value={values.permissionEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="permissionEmail"
                  className="my-3 text-black"
                  placeholder="Enter the permission email"
                />

                  {touched.permissionEmail && errors.permissionEmail &&
                   <p className="text-yellow-500 text-left font-bold"> {errors.permissionEmail} </p>
                
                }
                <Input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  className="mb-3 text-slate-500"
                  placeholder="Enter your password"
                />

                  {touched.password && errors.password &&
                   <p className="text-yellow-500 text-left font-bold"> {errors.password} </p>
                
                }
                <Button type="submit" size="lg" className="w-full">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
