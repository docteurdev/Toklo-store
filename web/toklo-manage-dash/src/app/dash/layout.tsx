import React, {ReactNode} from 'react'
import SideLayout from '../components/dashboard/SideLayout'
import styles from "@/app/dash/styles/layout.module.css"
import Menu from '../components/dashboard/Menu'
import { ScrollArea } from '@/components/ui/scroll-area'
type Props = {
 children: ReactNode
}


const layout = ({children}: Props) => {
  return (
    <div>
       <div className={styles.container}>
         <SideLayout />
         <div className={`${styles.content} overflow-hidden`}>
          <Menu />
          <ScrollArea className="">

          {children}
          </ScrollArea>
         </div>
       </div>
    </div>
  )
}

export default layout