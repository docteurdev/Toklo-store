"use client";
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app/styles/form.module.css";
import Form from "@/app/components/form/Form";
import CustomInput from "@/app/components/form/CustomInput";
import SubmitBtn from "@/app/components/buttons/SubmitBtn";
import Link from "next/link";
import Wrapper from "@/app/components/auth/Wrapper";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Toast from "@/app/components/Toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type Props = {};

const Login = (props: Props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [success, setsuccess] = useState({ status: false, mgs: "" });
  const [error, setError] = useState({ status: false, mgs: "" });
  const [isPassed, setIsPassed] = useState(false);

  const router = useRouter();
  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (isPassed && data.password.length < 6) {
      setError({
        status: true,
        mgs: "The password must be at least 6 caracteres",
      });
      setTimeout(() => {
        setError({ status: false, mgs: "" });
      }, 2000);
      return;
    }
    try {
      const resp = await axios.post("http://localhost:3010/api/login", data);
      if (resp.data) {
        setsuccess({ status: true, mgs: resp.data?.message });
        if (isPassed) {
          router.push("../dash/acceuil");
        }
        setIsPassed(true);
      }
      console.log(resp.data);
    } catch (error) {
      const { message } = error?.response?.data;
      setError({ status: true, mgs: message });
    } finally {
      setTimeout(() => {
        setError({ status: false, mgs: "" });
        setsuccess({ status: false, mgs: "" });
      }, 2000);
    }
  }

  return (
    <Wrapper link="register">
      <div className=" text-center text-white absolute z-10 w-full px-2 md:w-[400px] h-[180px] top-[20%] left-[50%] bg-transparent transform: translate-x-[-50%]">
        {error.status && (
          <Toast size="large" type="error" message={error.mgs} />
        )}
        {success.status && (
          <Toast size="large" type="success" message={success.mgs} />
        )}
        <h2 className="text-2xl  font-bold">
          <span className="text-3xl">🔐</span> Login to Toklo Manager
        </h2>
        {/* <div className="h-[1px] bg-gray-100"></div> */}
        <p className="text-justify my-3">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          perspiciatis et, eos ullam dolores tempora! Nulla voluptas beatae quo
          dolore nihil. Voluptatem iusto perferendis sequi tenetur maxime
          laboriosam, expedita voluptas.{" "}
        </p>
        {!isPassed && (
          <form onSubmit={(e) => handleLogin(e)} className="relative">
            <Input
              className="p-2 rounded-full  text-slate-500"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="Enter your email"
              required
            />
            <Button
              type="submit"
              className="absolute cursor-pointer top-0 right-0 w-10 h-10 bg-black text-white flex justify-center items-center border-1 rounded-full "
            >
              <ArrowRight  className="" />
            </Button>
          </form>
        )}

        {isPassed && (
          <form onSubmit={(e) => handleLogin(e)} className="">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className=""
            >
              <Input
                className="p-2 rounded-full  text-slate-500"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                placeholder="Enter your password"
              />
            </motion.div>

            {data.password && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-3"
              >
                <Button
                  className="w-full border-2 border-white"
                >
                  Login{" "}
                </Button>
              </motion.div>
            )}
          </form>
        )}
      </div>
    </Wrapper>
  );
};

export default Login;
