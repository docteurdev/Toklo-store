"use client"
import AddUser from '@/app/components/AddUser'
import Modal from '@/app/components/Modal'
import UserDetail from '@/app/components/UserDetail'
import Listing from '@/app/components/dashboard/Listing'
import Wrapper from '@/app/components/dashboard/Wrapper'
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {}


const Users = (props: Props) => {

  const  [open, setOpen] = useState(false);
  return (
      <Wrapper add='USER' isHead>
        <Listing />
     
      </Wrapper>
  )
}

export default Users