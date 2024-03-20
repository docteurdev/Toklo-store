"use client"
import { Button } from 'antd'
import React, {useState} from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import styles from "@/app/styles/form.module.css"
import { TBtn } from '@/app/types';


const SubmitBtn = (props: TBtn) => {
  const [loading, setloading] = useState<boolean>(false);
  const [size, setSize] = useState<SizeType>("large");
  return (
   <button
   className={styles.btn}>
            Primary
   </button>
  )
}

export default SubmitBtn