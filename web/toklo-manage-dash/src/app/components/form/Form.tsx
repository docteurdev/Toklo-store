import { IForm } from '@/app/types'
import React,{FC} from 'react'
import styles from "@/app/styles/form.module.css"

const Form : FC<IForm> = ({children}) => {
  return (
    <form  className={styles.formBox} >
      {children}
    </form>
  )
}

export default Form