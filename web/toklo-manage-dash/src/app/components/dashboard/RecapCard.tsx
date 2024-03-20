import React from 'react';
import {} from "react-icons"
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import styles from "@/app/components/styles/recapCard.module.css"
import { IrecapCard } from '@/app/types';
type Props = {}

const RecapCard = ({label, sublabel, value, icon, isActive}: IrecapCard) => {
  const cardStyle = {
    color: !isActive? '#fff': '',
    border: isActive? '1px solid  var(--textsmooth)': '',
    backgroundColor: isActive? 'white' : 'none',
    boxShadow: `0.1rem 1px 0 ${Number(value) >= 20 && Number(value)<= 50? 'var(--textsmooth)': Number(value) <= 30? 'var(--textred)': 'var(--textgreen)'}`

  }
  
  return (
    <div>
     <div style={cardStyle} className={`${styles.card} w-full `}>
      <div className={styles.iconBox}>
       {icon}
      </div>
      <div>
        <p className={styles.cardText}> {label} </p>
        <h1 className={styles.cardTitle}> {value} </h1>
        <p className={styles.cardSubText}>
           <span>
            <BsGraphUpArrow />
            {/* <BsGraphDownArrow /> */}
          </span> {sublabel} </p>
      </div>
     </div>
    </div>
  )
}

export default RecapCard