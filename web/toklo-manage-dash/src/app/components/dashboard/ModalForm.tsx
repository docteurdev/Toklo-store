"use client"
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import React, {type ReactNode } from 'react'

type Props = {
 children: ReactNode
 setOpen: React.Dispatch<React.SetStateAction<boolean>>
 
}

function ModalForm({children, setOpen}: Props) {
  return (
    <div>
      {children}
     
    </div>
  )
}

export default ModalForm