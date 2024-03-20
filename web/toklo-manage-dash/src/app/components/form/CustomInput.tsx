import React from 'react'
import styles from "@/app/styles/form.module.css"
import { TInput } from '@/app/types'
type Props = {}

const CustomInput = ({label, ...otherProps}: TInput) => {
  return (
    <div>
      <label className={styles.inputLabel}> {label} </label>
      <input
       className={styles.input}
       {...otherProps}
       />
    </div>
  )
}

export default CustomInput